import { MAX_FILE_SIZE, MAX_REQUEST_BYTES, FIELD_LIMITS, CONTACT_AREAS } from './contact-config.mjs';

const ORIGINS = new Set(['https://avvocatodelmonte.com', 'https://www.avvocatodelmonte.com']);
// Email provenance is a server-owned identity, never a form field or request header.
const CONTACT_SITE = 'avvocatodelmonte.com';
const WINDOW_MS = 15 * 60 * 1000;
const REQUEST_LIMIT = 5;
const MAX_RATE_KEYS = 5000;
const TYPES = {
  pdf: 'application/pdf', doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp'
};

function reply(status, message, extra = {}) {
  return Response.json({ ok: status < 400, message, ...extra }, { status, headers: { 'Cache-Control': 'no-store' } });
}
const singleLine = (value) => value.normalize('NFKC').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim();
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

export function createRateLimiter({ now = Date.now } = {}) {
  const store = new Map();
  return (key) => {
    const time = now();
    for (const [id, record] of store) if (record.expiresAt <= time) store.delete(id);
    const record = store.get(key);
    if (record) {
      record.count += 1;
      return record.count > REQUEST_LIMIT;
    }
    // Bound memory without evicting active limits and permitting an easy reset.
    if (store.size >= MAX_RATE_KEYS) return true;
    store.set(key, { count: 1, expiresAt: time + WINDOW_MS });
    return false;
  };
}

export function validFileSignature(bytes, extension) {
  if (extension === 'pdf') return bytes.subarray(0, 5).toString() === '%PDF-';
  if (extension === 'doc') return bytes.subarray(0, 8).equals(Buffer.from('d0cf11e0a1b11ae1', 'hex'));
  if (extension === 'docx') return bytes.subarray(0, 4).equals(Buffer.from('504b0304', 'hex'));
  if (extension === 'jpg' || extension === 'jpeg') return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (extension === 'png') return bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'));
  if (extension === 'webp') return bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP';
  return false;
}

async function boundedFormData(request) {
  const declared = request.headers.get('content-length');
  if (declared && (!/^\d+$/.test(declared) || Number(declared) > MAX_REQUEST_BYTES)) {
    throw new RangeError('payload');
  }
  if (!request.body) throw new TypeError('body');
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_REQUEST_BYTES) {
      await reader.cancel();
      throw new RangeError('payload');
    }
    chunks.push(Buffer.from(value));
  }
  const body = Buffer.concat(chunks, size);
  return new Response(body, { headers: { 'Content-Type': request.headers.get('content-type') } }).formData();
}

/** sendMail is injected in tests; no production transport is imported here. */
export function createContactHandler({ sendMail, enabled = () => false, isRateLimited = createRateLimiter(), logError = () => {} }) {
  return async function POST(request) {
    if (!enabled()) return reply(503, 'Invio temporaneamente non disponibile. Puoi contattare lo studio via email o telefono.');
    if (!ORIGINS.has(request.headers.get('origin'))) return reply(403, 'Invia la richiesta dal modulo del sito.');
    const clientIp = (request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown').split(',')[0].trim();
    if (isRateLimited(clientIp)) return reply(429, 'Sono state inviate troppe richieste. Attendi qualche minuto e riprova.');
    const contentType = request.headers.get('content-type') || '';
    if (!/^(multipart\/form-data\s*;|application\/x-www-form-urlencoded(?:\s*;|$))/i.test(contentType)) {
      return reply(415, 'Utilizza il modulo contatti con tutti i campi richiesti.');
    }
    let data;
    try { data = await boundedFormData(request); }
    catch (error) {
      return error instanceof RangeError
        ? reply(413, 'La richiesta è troppo grande. L’allegato non può superare 4 MB.')
        : reply(400, 'I dati non sono stati trasmessi correttamente. Riprova dal modulo.');
    }
    if (String(data.get('website') || '').trim()) return reply(200, 'Richiesta ricevuta.', { delivered: false });
    const values = {};
    for (const [key, limit] of Object.entries(FIELD_LIMITS)) {
      const raw = data.get(key);
      if (typeof raw !== 'string' || data.getAll(key).length !== 1 || raw.length > limit.max * 2) {
        return reply(400, 'Compila correttamente tutti i campi obbligatori.');
      }
      values[key] = key === 'messaggio' ? raw.normalize('NFKC').replace(/\r\n?/g, '\n').trim() : singleLine(raw);
      if (values[key].length < limit.min || values[key].length > limit.max) return reply(400, 'Verifica la lunghezza dei campi inseriti.');
    }
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.email) || /[\r\n]/.test(data.get('email'))) return reply(400, 'Inserisci un indirizzo email valido.');
    if (!/^[+\d\s()./-]+$/.test(values.telefono) || !CONTACT_AREAS.includes(values.area)) return reply(400, 'Verifica il telefono e seleziona un ambito valido.');
    if (/<\s*\/?\s*[a-z][^>]*>|javascript:/i.test(values.messaggio)) return reply(400, 'Inserisci la richiesta come testo semplice.');
    if ((values.messaggio.match(/https?:\/\//g) || []).length > 2) return reply(400, 'Riduci i collegamenti nella richiesta e descrivi i fatti essenziali.');
    const attachments = [];
    if (data.getAll('allegato').some((file) => typeof file === 'string' && file)) return reply(400, 'L’allegato non è valido.');
    const files = data.getAll('allegato').filter((file) => typeof file === 'object' && file.size > 0);
    if (files.length > 1) return reply(400, 'Allega un solo documento, fino a 4 MB.');
    if (files.length) {
      const file = files[0];
      if (file.size > MAX_FILE_SIZE) return reply(413, 'L’allegato supera il limite di 4 MB.');
      const filename = singleLine(file.name).split(/[\\/]/).pop().slice(-160);
      const extension = filename.split('.').pop().toLowerCase();
      if (!TYPES[extension] || (file.type && file.type !== TYPES[extension] && file.type !== 'application/octet-stream')) {
        return reply(400, 'Usa un file PDF, DOC, DOCX, JPG, PNG o WEBP con estensione e formato coerenti.');
      }
      const content = Buffer.from(await file.arrayBuffer());
      if (!validFileSignature(content, extension)) return reply(400, 'Il contenuto dell’allegato non corrisponde al formato dichiarato.');
      attachments.push({ filename, content, contentType: TYPES[extension] });
    }
    const subject = `[${CONTACT_SITE}] Nuova richiesta dal sito – ${values.area}`;
    const labels = { nome: 'Nome', cognome: 'Cognome', telefono: 'Telefono', email: 'Email', area: 'Ambito', messaggio: 'Sintesi del caso' };
    const text = `Sito di provenienza: ${CONTACT_SITE}\n\n` + Object.entries(values).map(([key, value]) => `${labels[key]}: ${value}`).join('\n\n');
    const html = `<div style="font-family:Arial,sans-serif;line-height:1.6"><p><strong>Sito di provenienza: ${CONTACT_SITE}</strong></p>${Object.entries(values).map(([key, value]) => `<p><strong>${labels[key]}</strong><br>${escapeHtml(value).replace(/\n/g, '<br>')}</p>`).join('')}</div>`;
    try {
      const result = await sendMail({ replyTo: values.email, subject, text, html, attachments, disableFileAccess: true, disableUrlAccess: true });
      if (!result?.accepted?.length) throw new Error('delivery-not-accepted');
      return reply(200, 'Richiesta inviata correttamente.', { delivered: true });
    } catch {
      // No names, addresses, case details, filenames or SMTP responses in logs.
      logError('contact-delivery-failed');
      return reply(502, 'Invio non riuscito. Riprova più tardi o contatta lo studio via email o telefono.');
    }
  };
}

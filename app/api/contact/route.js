import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'image/webp'
]);
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map();
const spamTerms = ['viagra', 'casino', 'crypto', 'seo service', 'backlink', 'loan', 'escort'];
const CONTACT_SITE = 'avvocatodelmonte.com';
const FIELD_LIMITS = {
  nome: { min: 2, max: 80 },
  cognome: { min: 2, max: 80 },
  telefono: { min: 6, max: 30 },
  email: { min: 6, max: 160 },
  area: { min: 2, max: 120 },
  messaggio: { min: 10, max: 4000 }
};

function logContact(step, payload = {}) {
  console.log(`[contact-route] ${step}`, payload);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitizeSingleLine(value) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function sanitizeMultiline(value) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function containsUnsafeMarkup(value) {
  return /<\s*\/?\s*[a-z][^>]*>|<\s*script\b|javascript:|on[a-z]+\s*=|data:text\/html/i.test(
    value
  );
}

function isWithinLength(value, { min, max }) {
  return value.length >= min && value.length <= max;
}

function getRequiredEnv(name) {
  const value = process.env[name];
  return typeof value === 'string' && value.trim() ? value.trim() : '';
}

let transporterPromise;

async function getTransporter() {
  if (transporterPromise) {
    logContact('reuse-transporter');
    return transporterPromise;
  }

  const host = getRequiredEnv('SMTP_HOST');
  const portValue = getRequiredEnv('SMTP_PORT');
  const user = getRequiredEnv('SMTP_USER');
  const pass = getRequiredEnv('SMTP_PASS');

  logContact('create-transporter', {
    smtpHostPresent: Boolean(host),
    smtpPortPresent: Boolean(portValue),
    smtpUserPresent: Boolean(user),
    smtpPassPresent: Boolean(pass)
  });

  if (!host || !portValue || !user || !pass) {
    throw new Error('Configurazione SMTP incompleta.');
  }

  const port = Number(portValue);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error('SMTP_PORT non valido.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });

  transporterPromise = transporter
    .verify()
    .then(() => {
      logContact('transporter-verified');
      return transporter;
    })
    .catch((error) => {
      transporterPromise = undefined;
      logContact('transporter-verify-error', {
        message: error?.message || 'Unknown transporter verify error',
        code: error?.code || null,
        response: error?.response || null
      });
      throw error;
    });
  return transporterPromise;
}

function formatTimestamp() {
  return new Intl.DateTimeFormat('it-IT', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/Rome'
  }).format(new Date());
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip) || [];
  const recentRequests = existing.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return false;
}

function looksLikeSpam({ nome, cognome, email, telefono, area, messaggio }) {
  const normalized = [nome, cognome, email, telefono, area, messaggio].join(' ').toLowerCase();
  const urlCount = (normalized.match(/https?:\/\//g) || []).length;
  const spamTermFound = spamTerms.some((term) => normalized.includes(term));
  const repeatedChars = /(.)\1{7,}/.test(normalized);

  return urlCount > 2 || spamTermFound || repeatedChars;
}

function isSupportedFormContentType(contentType) {
  return (
    contentType.includes('multipart/form-data') ||
    contentType.includes('application/x-www-form-urlencoded')
  );
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    const contentType = request.headers.get('content-type') || '';
    logContact('request-start', {
      ip,
      method: request.method,
      contentType: contentType || null
    });

    if (isRateLimited(ip)) {
      logContact('rate-limited', { ip });
      return Response.json(
        {
          ok: false,
          message: 'Sono state inviate troppe richieste in poco tempo. Attendi qualche minuto e riprova.'
        },
        { status: 429 }
      );
    }

    if (!isSupportedFormContentType(contentType)) {
      logContact('validation-failed', { reason: 'unsupported-content-type', contentType });
      return Response.json(
        {
          ok: false,
          message: 'Invia la richiesta utilizzando il modulo contatti con tutti i campi richiesti.'
        },
        { status: 400 }
      );
    }

    let formData;

    try {
      formData = await request.formData();
    } catch (error) {
      logContact('validation-failed', {
        reason: 'invalid-form-data',
        message: error instanceof Error ? error.message : 'Unknown formData parse error'
      });
      return Response.json(
        {
          ok: false,
          message: 'I dati inviati non sono completi o non sono stati trasmessi correttamente.'
        },
        { status: 400 }
      );
    }

    logContact('formdata-parsed');

    const nome = sanitizeSingleLine(formData.get('nome'));
    const cognome = sanitizeSingleLine(formData.get('cognome'));
    const telefono = sanitizeSingleLine(formData.get('telefono'));
    const email = sanitizeSingleLine(formData.get('email'));
    const area = sanitizeSingleLine(formData.get('area'));
    const messaggio = sanitizeMultiline(formData.get('messaggio'));
    const website = sanitizeSingleLine(formData.get('website'));
    const allegato = formData.get('allegato');

    logContact('initial-validation', {
      nomePresent: Boolean(nome),
      cognomePresent: Boolean(cognome),
      telefonoPresent: Boolean(telefono),
      emailPresent: Boolean(email),
      areaPresent: Boolean(area),
      messaggioPresent: Boolean(messaggio),
      honeypotFilled: Boolean(website),
      attachmentFieldPresent: Boolean(allegato)
    });

    if (website) {
      logContact('honeypot-triggered', { ip });
      return Response.json({
        ok: true,
        message: 'Richiesta inviata correttamente.'
      });
    }

    if (!nome || !cognome || !telefono || !email || !area || !messaggio) {
      logContact('validation-failed', { reason: 'missing-required-fields' });
      return Response.json(
        { ok: false, message: 'Compila tutti i campi obbligatori prima di inviare la richiesta.' },
        { status: 400 }
      );
    }

    if (
      !isWithinLength(nome, FIELD_LIMITS.nome) ||
      !isWithinLength(cognome, FIELD_LIMITS.cognome) ||
      !isWithinLength(telefono, FIELD_LIMITS.telefono) ||
      !isWithinLength(email, FIELD_LIMITS.email) ||
      !isWithinLength(area, FIELD_LIMITS.area) ||
      !isWithinLength(messaggio, FIELD_LIMITS.messaggio)
    ) {
      logContact('validation-failed', { reason: 'invalid-field-lengths' });
      return Response.json(
        {
          ok: false,
          message:
            'Verifica la lunghezza dei campi inseriti e riprova con una descrizione essenziale ma completa del caso.'
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      logContact('validation-failed', { reason: 'invalid-email', email });
      return Response.json(
        { ok: false, message: 'Inserisci un indirizzo email valido.' },
        { status: 400 }
      );
    }

    if (
      [nome, cognome, area, messaggio].some((value) => containsUnsafeMarkup(value))
    ) {
      logContact('validation-failed', { reason: 'unsafe-markup-detected', ip, email });
      return Response.json(
        {
          ok: false,
          message:
            'Rimuovi eventuali tag o contenuti non validi dal testo della richiesta e riprova.'
        },
        { status: 400 }
      );
    }

    if (looksLikeSpam({ nome, cognome, email, telefono, area, messaggio })) {
      logContact('validation-failed', { reason: 'spam-detected', ip, email, area });
      return Response.json(
        {
          ok: false,
          message: 'La richiesta non è stata accettata. Verifica il contenuto e riprova con una descrizione essenziale del caso.'
        },
        { status: 400 }
      );
    }

    let attachment = null;

    if (allegato && typeof allegato === 'object' && 'size' in allegato && allegato.size > 0) {
      logContact('attachment-detected', {
        fileName: 'name' in allegato ? allegato.name : null,
        fileSize: allegato.size,
        fileType: 'type' in allegato ? allegato.type : null
      });

      if (allegato.size > MAX_FILE_SIZE) {
        logContact('attachment-rejected', { reason: 'file-too-large', fileSize: allegato.size });
        return Response.json(
          { ok: false, message: 'L’allegato supera il limite di 10 MB previsto dal modulo.' },
          { status: 400 }
        );
      }

      if (!('type' in allegato) || !ALLOWED_FILE_TYPES.has(allegato.type)) {
        logContact('attachment-rejected', {
          reason: 'unsupported-file-type',
          fileType: 'type' in allegato ? allegato.type : null
        });
        return Response.json(
          {
            ok: false,
            message: 'Il formato del file non è supportato. Usa PDF, DOC, DOCX, JPG, PNG o WEBP.'
          },
          { status: 400 }
        );
      }

      const arrayBuffer = await allegato.arrayBuffer();
      logContact('attachment-buffer-created', {
        fileName: allegato.name,
        bytes: arrayBuffer.byteLength
      });

      attachment = {
        filename: allegato.name,
        content: Buffer.from(arrayBuffer),
        contentType: allegato.type
      };
    }

    const to = getRequiredEnv('CONTACT_TO_EMAIL');
    const from = getRequiredEnv('CONTACT_FROM_EMAIL');
    const smtpUser = getRequiredEnv('SMTP_USER');

    logContact('env-check', {
      smtpHostPresent: Boolean(getRequiredEnv('SMTP_HOST')),
      smtpPortPresent: Boolean(getRequiredEnv('SMTP_PORT')),
      smtpUserPresent: Boolean(smtpUser),
      smtpPassPresent: Boolean(getRequiredEnv('SMTP_PASS')),
      contactToPresent: Boolean(to),
      contactFromPresent: Boolean(from)
    });

    if (!to || !from) {
      throw new Error('Configurazione email incompleta.');
    }

    if (!smtpUser || from !== smtpUser) {
      throw new Error('Mittente email non coerente con SMTP_USER.');
    }

    const transporter = await getTransporter();

    const subject = `Nuova richiesta dal sito – ${CONTACT_SITE} – ${area || 'Contatto generale'}`;
    const timestamp = formatTimestamp();
    const attachmentName = attachment ? attachment.filename : 'Nessun allegato';
    const safeNome = escapeHtml(nome);
    const safeCognome = escapeHtml(cognome);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono);
    const safeArea = escapeHtml(area || 'Contatto generale');
    const safeMessaggio = escapeHtml(messaggio);
    const safeAttachmentName = escapeHtml(attachmentName);
    const safeTimestamp = escapeHtml(timestamp);
    const safeSite = escapeHtml(CONTACT_SITE);

    const text = [
      `Richiesta proveniente dal sito: ${CONTACT_SITE}`,
      '',
      `Nome: ${nome}`,
      `Cognome: ${cognome}`,
      `Email: ${email}`,
      `Telefono: ${telefono}`,
      `Area pertinente: ${area || 'Contatto generale'}`,
      '',
      'Sintesi del caso:',
      messaggio,
      '',
      `Allegato: ${attachmentName}`,
      `Data/ora richiesta: ${timestamp}`
    ].join('\n');

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #10233d; line-height: 1.6; background: #f7f4ee; padding: 24px;">
        <div style="max-width: 720px; margin: 0 auto; background: #ffffff; border: 1px solid #ddd7ca; border-radius: 16px; overflow: hidden;">
          <div style="padding: 20px 24px; background: #10233d; color: #f8f4ec;">
            <h2 style="margin: 0; font-size: 22px;">Nuova richiesta dal sito</h2>
            <p style="margin: 8px 0 0; color: #e7dbc4;">${safeSite}</p>
          </div>
          <div style="padding: 24px;">
            <p style="margin: 0 0 18px;"><strong>Richiesta proveniente dal sito:</strong> ${safeSite}</p>
            <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Nome</strong></td>
                <td style="padding: 10px 0;">${safeNome}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Cognome</strong></td>
                <td style="padding: 10px 0;">${safeCognome}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Email</strong></td>
                <td style="padding: 10px 0;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Telefono</strong></td>
                <td style="padding: 10px 0;">${safeTelefono}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Area pertinente</strong></td>
                <td style="padding: 10px 0;">${safeArea}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280; vertical-align: top;"><strong>Sintesi del caso</strong></td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${safeMessaggio}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Allegato</strong></td>
                <td style="padding: 10px 0;">${safeAttachmentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; width: 170px; color: #6b7280;"><strong>Data/ora</strong></td>
                <td style="padding: 10px 0;">${safeTimestamp}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `;

    logContact('before-sendMail', {
      to,
      from,
      replyTo: email,
      subject,
      hasAttachment: Boolean(attachment),
      attachmentName: attachment?.filename || null
    });

    const sendResult = await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject,
      text,
      html,
      attachments: attachment ? [attachment] : []
    });

    logContact('sendMail-success', {
      messageId: sendResult?.messageId || null,
      response: sendResult?.response || null,
      accepted: sendResult?.accepted || []
    });

    return Response.json({
      ok: true,
      message: 'Richiesta inviata correttamente. Lo studio riceverà anche l’eventuale allegato.'
    });
  } catch (error) {
    logContact('route-error', {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: error && typeof error === 'object' && 'code' in error ? error.code : null,
      response: error && typeof error === 'object' && 'response' in error ? error.response : null,
      stack:
        error instanceof Error && error.stack
          ? error.stack.split('\n').slice(0, 3).join(' | ')
          : null
    });

    const message =
      error instanceof Error && error.message === 'Configurazione email incompleta.'
        ? 'Il sistema di invio email non è ancora configurato correttamente.'
        : error instanceof Error && error.message === 'Mittente email non coerente con SMTP_USER.'
          ? 'CONTACT_FROM_EMAIL deve coincidere con SMTP_USER per garantire un invio corretto.'
        : error instanceof Error && error.message === 'Configurazione SMTP incompleta.'
          ? 'La configurazione SMTP è incompleta. Verifica le variabili ambiente.'
          : error instanceof Error && error.message === 'SMTP_PORT non valido.'
            ? 'La configurazione SMTP contiene una porta non valida.'
            : 'Si è verificato un problema tecnico durante l’invio della richiesta. Riprova tra qualche minuto.';

    return Response.json({ ok: false, message }, { status: 500 });
  }
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler, createRateLimiter } from '../lib/contact-handler.mjs';
import { MAX_FILE_SIZE, MAX_REQUEST_BYTES } from '../lib/contact-config.mjs';

const fields = { nome: 'Anna & Elena', cognome: 'Rossi', telefono: '+39 06123456', email: 'anna@example.test', area: 'Cassazione civile', messaggio: 'Richiesta di un primo esame dei documenti.' };
function form(overrides = {}) {
  const data = new FormData();
  for (const [key, value] of Object.entries({ ...fields, ...overrides })) data.set(key, value);
  return data;
}
function request(data = form(), headers = {}) {
  return new Request('https://avvocatodelmonte.com/api/contact', { method: 'POST', body: data, headers: { Origin: 'https://avvocatodelmonte.com', ...headers } });
}
function fixture(options = {}) {
  const messages = [];
  const handler = createContactHandler({ enabled: () => true, sendMail: async (message) => { messages.push(message); return { accepted: ['destination@example.test'] }; }, ...options });
  return { handler, messages };
}

test('valid request is delivered once through injected transport; markup is escaped', async () => {
  const { handler, messages } = fixture();
  const response = await handler(request());
  assert.equal(response.status, 200); assert.equal((await response.json()).delivered, true);
  assert.equal(messages.length, 1); assert.match(messages[0].html, /Anna &amp; Elena/);
  assert.equal(messages[0].replyTo, fields.email); assert.equal(messages[0].disableUrlAccess, true);
});
test('preview delivery guard never calls transport', async () => {
  const { handler, messages } = fixture({ enabled: () => false });
  assert.equal((await handler(request())).status, 503); assert.equal(messages.length, 0);
});
test('foreign/missing origin is refused', async () => {
  for (const origin of ['https://example.test', 'null', '']) {
    const { handler, messages } = fixture();
    assert.equal((await handler(request(form(), { Origin: origin }))).status, 403); assert.equal(messages.length, 0);
  }
});
test('invalid field, email injection and unsupported area never call transport', async () => {
  for (const overrides of [{ nome: '' }, { email: 'a@example.test\r\nBcc: thief@example.test' }, { area: 'Unknown' }, { telefono: 'invalid-phone' }]) {
    const { handler, messages } = fixture();
    assert.equal((await handler(request(form(overrides)))).status, 400); assert.equal(messages.length, 0);
  }
});
test('honeypot receives neutral response without delivery or lead signal', async () => {
  const { handler, messages } = fixture();
  const response = await handler(request(form({ website: 'spam.example' })));
  assert.equal(response.status, 200); assert.equal((await response.json()).delivered, false); assert.equal(messages.length, 0);
});
test('a PDF under the published limit is accepted as a Buffer attachment', async () => {
  const data = form(); data.set('allegato', new File(['%PDF-1.7\nexample'], 'document.pdf', { type: 'application/pdf' }));
  const { handler, messages } = fixture(); assert.equal((await handler(request(data))).status, 200);
  assert.equal(messages[0].attachments[0].filename, 'document.pdf'); assert.ok(Buffer.isBuffer(messages[0].attachments[0].content));
});
test('oversized attachment and misleading MIME/signature are rejected before transport', async () => {
  for (const file of [new File([new Uint8Array(MAX_FILE_SIZE + 1)], 'large.pdf', { type: 'application/pdf' }), new File(['<script>'], 'fake.pdf', { type: 'application/pdf' }), new File(['%PDF-1.7'], 'file.exe', { type: 'application/pdf' })]) {
    const data = form(); data.set('allegato', file);
    const { handler, messages } = fixture(); assert.ok([400, 413].includes((await handler(request(data))).status)); assert.equal(messages.length, 0);
  }
});
test('multiple files and duplicate scalar fields are rejected', async () => {
  {
    const data = form(); data.append('nome', 'Secondo');
    const { handler, messages } = fixture(); assert.equal((await handler(request(data))).status, 400); assert.equal(messages.length, 0);
  }
  const data = form(); for (let i = 0; i < 2; i++) data.append('allegato', new File(['%PDF-1.7'], `test${i}.pdf`, { type: 'application/pdf' }));
  const { handler, messages } = fixture(); assert.equal((await handler(request(data))).status, 400); assert.equal(messages.length, 0);
});
test('declared and streamed oversized payloads are bounded independently', async () => {
  const { handler, messages } = fixture();
  assert.equal((await handler(request(form(), { 'content-length': String(MAX_REQUEST_BYTES + 1) }))).status, 413);
  const stream = new ReadableStream({ start(controller) { controller.enqueue(new Uint8Array(MAX_REQUEST_BYTES + 1)); controller.close(); } });
  const streamed = new Request('https://avvocatodelmonte.com/api/contact', { method: 'POST', body: stream, duplex: 'half', headers: { Origin: 'https://avvocatodelmonte.com', 'Content-Type': 'multipart/form-data; boundary=a' } });
  assert.equal((await handler(streamed)).status, 413); assert.equal(messages.length, 0);
});
test('malformed multipart and SMTP failure return safe errors', async () => {
  const { handler } = fixture({ sendMail: async () => { throw new Error('sensitive SMTP response'); } });
  const malformed = new Request('https://avvocatodelmonte.com/api/contact', { method: 'POST', body: 'broken', headers: { Origin: 'https://avvocatodelmonte.com', 'Content-Type': 'multipart/form-data; boundary=a' } });
  assert.equal((await handler(malformed)).status, 400);
  const failed = await handler(request()); assert.equal(failed.status, 502); assert.doesNotMatch(await failed.text(), /sensitive/);
});
test('rate limiter blocks sixth request and expires independently', () => {
  let time = 1000; const limited = createRateLimiter({ now: () => time });
  for (let i = 0; i < 5; i++) assert.equal(limited('same-ip'), false);
  assert.equal(limited('same-ip'), true); assert.equal(limited('other-ip'), false);
  time += 15 * 60 * 1000; assert.equal(limited('same-ip'), false);
});

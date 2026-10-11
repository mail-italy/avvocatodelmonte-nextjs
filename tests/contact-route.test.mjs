import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { createContactHandler } from '../lib/contact-handler.mjs';

// Evaluate the actual route with isolated environment and a transport that only records mail.
// No SMTP library is loaded, and no production environment values are read.
function routeFixture(overrides = {}) {
  const messages = [];
  const env = { VERCEL_ENV: 'production', SMTP_HOST: 'smtp.example.invalid', SMTP_PORT: '465', SMTP_USER: 'sender@example.invalid', SMTP_PASS: 'synthetic-test-value', CONTACT_FROM_EMAIL: 'sender@example.invalid', CONTACT_TO_EMAIL: 'info@delmontestudiolegale.it', ...overrides };
  const source = readFileSync(new URL('../app/api/contact/route.js', import.meta.url), 'utf8')
    .replace(/^import .+;$/gm, '')
    .replace(/^export const /gm, 'const ');
  const sandbox = {
    process: { env }, createContactHandler,
    console: { error() {} },
    nodemailer: { createTransport() { return {
      async sendMail(message) { messages.push(message); return { accepted: [message.to] }; },
      close() {},
    }; } },
  };
  vm.runInNewContext(`${source}\nglobalThis.handler = POST;`, sandbox, { filename: 'app/api/contact/route.js' });
  return { handler: sandbox.handler, messages };
}

function request() {
  const data = new FormData();
  for (const [key, value] of Object.entries({ nome: 'Mario', cognome: 'Rossi', telefono: '+39061234567', email: 'client@example.invalid', area: 'Cassazione civile', messaggio: 'Richiesta sintetica per una prova simulata.', to: 'other@example.invalid', CONTACT_TO_EMAIL: 'other@example.invalid', origine: 'forged.example.invalid', origin: 'forged.example.invalid', source: 'forged.example.invalid' })) data.set(key, value);
  return new Request('https://avvocatodelmonte.com/api/contact', { method: 'POST', headers: { origin: 'https://avvocatodelmonte.com' }, body: data });
}

test('actual route uses server recipient and fixed domain in subject, text and HTML', async () => {
  const f = routeFixture();
  assert.equal((await f.handler(request())).status, 200);
  assert.equal(f.messages.length, 1);
  const [message] = f.messages;
  assert.equal(message.to, 'info@delmontestudiolegale.it');
  assert.equal(message.replyTo, 'client@example.invalid');
  assert.match(message.subject, /^\[avvocatodelmonte\.com\] /);
  assert.match(message.text, /^Sito di provenienza: avvocatodelmonte\.com/);
  assert.match(message.html, /Sito di provenienza: avvocatodelmonte\.com/);
  for (const field of [message.subject, message.text, message.html]) assert.doesNotMatch(field, /forged\.example\.invalid|other@example\.invalid/);
});

test('a missing configured recipient cannot fall back to a submitted destination', async () => {
  const f = routeFixture({ CONTACT_TO_EMAIL: '' });
  const response = await f.handler(request());
  assert.equal(response.status, 502);
  assert.equal(f.messages.length, 0);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { parseConsent, isTrackingHost, consentSignals, CONSENT_MAX_AGE_MS } from '../lib/consent.mjs';
import { articles } from '../lib/articles.js';
import { serviceList } from '../lib/services.js';
import { seoPageList } from '../lib/seoPages.js';
import { buildMetadata } from '../lib/metadata.js';
import { personSchema, legalServiceSchema, serviceSchema, articleSchema } from '../lib/schema.js';
import { findLegacyRedirect, legacyRedirectMap } from '../lib/redirects.mjs';

test('legacy, malformed, expired or future consent cannot enable tracking', () => {
  const now = 1_900_000_000_000;
  for (const raw of ['accepted', null, '{}', JSON.stringify({ version: 1, choice: 'accepted', savedAt: now }), JSON.stringify({ version: 2, choice: 'accepted', savedAt: now - CONSENT_MAX_AGE_MS }), JSON.stringify({ version: 2, choice: 'accepted', savedAt: now + 1 })]) assert.equal(parseConsent(raw, now), null);
  assert.equal(parseConsent(JSON.stringify({ version: 2, choice: 'accepted', savedAt: now }), now), 'accepted');
  assert.equal(parseConsent(JSON.stringify({ version: 2, choice: 'rejected', savedAt: now }), now), 'rejected');
  assert.ok(Object.values(consentSignals(false)).every((value) => value === 'denied'));
});
test('localhost, private addresses and preview domains never qualify for analytics', () => {
  for (const host of ['localhost', '127.0.0.1', '[::1]', '192.168.1.10', 'preview.vercel.app', 'avvocatodelmonte.com.example.test']) assert.equal(isTrackingHost(host), false);
  assert.equal(isTrackingHost('avvocatodelmonte.com'), true);
});
test('editorial date order is valid and known revisions are preserved', () => {
  for (const article of articles) assert.ok(article.updatedAt >= article.publishedAt, article.slug);
  assert.equal(articles.find((x) => x.slug === 'termini-per-il-ricorso-per-cassazione-civile').updatedAt, '2026-05-16');
  assert.equal(seoPageList.find((x) => x.slug === 'divisione-ereditaria').updatedAt, '2026-05-29');
});
test('service and landing titles are distinct, including the homepage', () => {
  const titles = ['Avvocato Cassazionista a Roma | Studio Legale Del Monte', ...serviceList.map((x) => x.titleTag), ...seoPageList.map((x) => x.titleTag)].map((x) => x.toLowerCase());
  assert.equal(new Set(titles).size, titles.length);
});
test('Open Graph uses the real portrait ratio and a valid fallback', () => {
  const portrait = buildMetadata({ title: 'Contatti', path: '/contatti', image: '/images/portrait-standing.webp' });
  assert.equal(portrait.openGraph.images[0].width, 900); assert.equal(portrait.openGraph.images[0].height, 1200);
  const fallback = buildMetadata({ title: 'Page', image: '/images/unknown.webp' });
  assert.equal(fallback.openGraph.images[0].url, 'https://avvocatodelmonte.com/images/og-default.webp');
  assert.equal(fallback.openGraph.images[0].width, 1200);
});
test('schema represents person, business and offered service with linked stable IDs', () => {
  const person = personSchema(), business = legalServiceSchema(), service = serviceSchema(serviceList[0]), article = articleSchema(articles[0]);
  assert.equal(person['@type'], 'Person'); assert.equal(business['@type'], 'LegalService'); assert.equal(service['@type'], 'Service');
  assert.equal(person.worksFor['@id'], business['@id']); assert.equal(service.provider['@id'], business['@id']);
  assert.equal(article.author['@id'], person['@id']); assert.equal(article.publisher['@id'], business['@id']);
  assert.equal(business.serviceType, undefined);
});
test('only known equivalent legacy pages redirect; unknown and unrelated paths remain 404 candidates', () => {
  assert.equal(findLegacyRedirect('/chi-siamo/'), '/studio');
  assert.equal(findLegacyRedirect('/successioni'), '/successioni-complesse');
  for (const path of ['/service/non-esistente', '/project/non-esistente', '/service/famiglia', '/diritto-civile', '/service/ritiro-patente']) assert.equal(findLegacyRedirect(path), null);
  for (const [source, destination] of legacyRedirectMap) { assert.notEqual(source, destination); assert.equal(legacyRedirectMap.has(destination), false); }
});

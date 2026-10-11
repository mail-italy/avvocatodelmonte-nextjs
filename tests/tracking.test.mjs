import test from 'node:test';
import assert from 'node:assert/strict';
import { contactClickEvent } from '../lib/tracking.mjs';

test('contact clicks carry placement only; contact-page navigation cannot become a lead', () => {
  assert.deepEqual(contactClickEvent('contact_phone', 'tel:+3906123456', 'header_desktop'), { event: 'contact_phone', event_location: 'header_desktop' });
  assert.deepEqual(contactClickEvent('contact_email', 'mailto:office@example.test', 'footer'), { event: 'contact_email', event_location: 'footer' });
  assert.deepEqual(contactClickEvent('contact_whatsapp', 'https://wa.me/3906123456?text=private', 'home_hero'), { event: 'contact_whatsapp', event_location: 'home_hero' });
  assert.equal(contactClickEvent('generate_lead', '/contatti', 'header'), null);
  assert.equal(contactClickEvent('contact_phone', '/contatti', 'header'), null);
});

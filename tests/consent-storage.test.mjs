import test from 'node:test';
import assert from 'node:assert/strict';

let moduleId = 0;
const freshConsent = () => import(`../lib/consent.mjs?storage-test=${++moduleId}`);

function storage(initial = {}, { setFails = false, removeFails = false } = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem(key, value) { if (setFails) throw new Error('Storage write blocked'); values.set(key, value); },
    removeItem(key) { if (removeFails) throw new Error('Storage removal blocked'); values.delete(key); }
  };
}

async function withBrowser(t, localFailure = {}, sessionFailure = {}) {
  const consent = await freshConsent();
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  let reloads = 0;
  globalThis.window = {
    localStorage: storage({ [consent.CONSENT_KEY]: JSON.stringify({ version: 2, choice: 'accepted', savedAt: Date.now() }) }, localFailure),
    sessionStorage: storage({}, sessionFailure),
    dataLayer: [], __delmonteGtmLoaded: true,
    location: { hostname: 'avvocatodelmonte.com', reload() { reloads++; } },
    dispatchEvent() {}
  };
  globalThis.document = { cookie: '' };
  t.after(() => { globalThis.window = previousWindow; globalThis.document = previousDocument; });
  return { consent, reloads: () => reloads };
}

function assertDenied(consent) {
  assert.equal(consent.readConsent(), 'rejected');
  assert.ok(Object.values(window.dataLayer.at(-1)[2]).every(value => value === 'denied'));
}

test('revocation safely reloads after removing an old grant even when both writes fail', async (t) => {
  const { consent, reloads } = await withBrowser(t, { setFails: true }, { setFails: true, removeFails: true });
  assert.equal(consent.readConsent(), 'accepted');
  assert.equal(consent.saveConsent('rejected'), false);
  assertDenied(consent);
  assert.equal(window.localStorage.getItem(consent.CONSENT_KEY), null);
  assert.equal(consent.canReloadAfterRevocation(), true);
  assert.equal(reloads(), 1);
  assert.equal((await freshConsent()).readConsent(), null);
});

test('session denial prevents an old immutable local grant returning after reload', async (t) => {
  const { consent, reloads } = await withBrowser(t, { setFails: true, removeFails: true });
  assert.equal(consent.saveConsent('rejected'), false);
  assertDenied(consent);
  assert.equal(window.sessionStorage.getItem(consent.CONSENT_BLOCK_KEY), '1');
  assert.equal(reloads(), 1);
  assert.equal((await freshConsent()).readConsent(), 'rejected');
});

test('if both stores are immutable, revocation denies this page without reloading the stale grant', async (t) => {
  const { consent, reloads } = await withBrowser(t, { setFails: true, removeFails: true }, { setFails: true, removeFails: true });
  assert.equal(consent.saveConsent('rejected'), false);
  assertDenied(consent);
  assert.equal(JSON.parse(window.localStorage.getItem(consent.CONSENT_KEY)).choice, 'accepted');
  assert.equal(consent.canReloadAfterRevocation(), false);
  assert.equal(reloads(), 0);
});

test('failed acceptance also denies this page and cannot reload an older grant', async (t) => {
  const { consent, reloads } = await withBrowser(t, { setFails: true, removeFails: true }, { setFails: true, removeFails: true });
  assert.equal(consent.saveConsent('accepted'), false);
  assertDenied(consent);
  assert.equal(consent.canReloadAfterRevocation(), false);
  assert.equal(reloads(), 0);
});

test('a working store persists revocation and allows a later explicit acceptance', async (t) => {
  const { consent, reloads } = await withBrowser(t);
  assert.equal(consent.saveConsent('rejected'), true);
  assertDenied(consent);
  assert.equal((await freshConsent()).readConsent(), 'rejected');
  assert.equal(reloads(), 1);
  assert.equal(consent.saveConsent('accepted'), true);
  assert.equal(consent.readConsent(), 'accepted');
  assert.equal(reloads(), 1);
});

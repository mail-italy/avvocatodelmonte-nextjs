export const CONSENT_KEY = 'delmonte-consent-v2';
export const CONSENT_BLOCK_KEY = 'delmonte-consent-blocked';
export const CONSENT_EVENT = 'delmonte:consent-change';
export const PREFERENCES_EVENT = 'delmonte:open-consent';
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
export const GTM_ID = 'GTM-PR5RTFTX';
let deniedForThisPage = false;
let safeToReload = true;

export function parseConsent(raw, now = Date.now()) {
  try {
    const value = JSON.parse(raw);
    if (value?.version !== 2 || !['accepted', 'rejected'].includes(value.choice)) return null;
    if (!Number.isFinite(value.savedAt) || value.savedAt > now || now - value.savedAt >= CONSENT_MAX_AGE_MS) return null;
    return value.choice;
  } catch {
    return null;
  }
}

export function isTrackingHost(hostname) {
  // Localhost, preview deployments and arbitrary host names must never send analytics.
  return hostname === 'avvocatodelmonte.com' || hostname === 'www.avvocatodelmonte.com';
}

export function consentSignals(accepted) {
  const value = accepted ? 'granted' : 'denied';
  return { analytics_storage: value, ad_storage: value, ad_user_data: value, ad_personalization: value };
}

export function readConsent() {
  if (typeof window === 'undefined') return null;
  if (deniedForThisPage) return 'rejected';
  try { if (window.sessionStorage.getItem(CONSENT_BLOCK_KEY) === '1') return 'rejected'; }
  catch { /* The local preference is still checked below. */ }
  try { return parseConsent(window.localStorage.getItem(CONSENT_KEY)); }
  catch { return null; }
}

export function canReloadAfterRevocation() { return safeToReload; }

export function updateGoogleConsent(accepted, command = 'update') {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', command, consentSignals(accepted));
}

export function clearMeasurementCookies() {
  const host = window.location.hostname;
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gcl_)/.test(name)) continue;
    for (const domain of ['', host, `.${host}`, 'avvocatodelmonte.com', '.avvocatodelmonte.com']) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ''}`;
    }
  }
}

export function saveConsent(choice) {
  if (!['accepted', 'rejected'].includes(choice)) return false;
  // Never let a stale persisted grant override a failed update in this document.
  deniedForThisPage = true;
  safeToReload = false;
  let saved = false;
  try { window.localStorage.removeItem(CONSENT_KEY); safeToReload = true; }
  catch { /* A separate write may still replace the previous grant. */ }
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: 2, choice, savedAt: Date.now() }));
    saved = true;
    safeToReload = true;
  } catch { /* An unsuccessful acceptance must not start tracking. */ }
  try {
    if (saved) window.sessionStorage.removeItem(CONSENT_BLOCK_KEY);
    else { window.sessionStorage.setItem(CONSENT_BLOCK_KEY, '1'); safeToReload = true; }
  } catch { /* If both stores retain an old grant, deny in memory without reloading. */ }
  deniedForThisPage = !saved;
  const accepted = saved && choice === 'accepted' && readConsent() === 'accepted';
  if (!accepted) {
    updateGoogleConsent(false);
    clearMeasurementCookies();
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
  if (!accepted && window.__delmonteGtmLoaded && safeToReload) window.location.reload();
  return saved && (choice === 'rejected' || accepted);
}

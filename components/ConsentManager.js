'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import {
  CONSENT_EVENT, CONSENT_KEY, PREFERENCES_EVENT, GTM_ID,
  readConsent, isTrackingHost, saveConsent, updateGoogleConsent, clearMeasurementCookies,
  canReloadAfterRevocation
} from '@/lib/consent.mjs';
import { contactClickEvent } from '@/lib/tracking.mjs';

function subscribe(listener) {
  const onStorage = (event) => { if (!event.key || event.key === CONSENT_KEY) listener(); };
  window.addEventListener(CONSENT_EVENT, listener);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, listener);
    window.removeEventListener('storage', onStorage);
  };
}
const serverConsent = () => null;
const subscribeHost = () => () => {};
const currentTrackingHost = () => isTrackingHost(window.location.hostname);
const serverTrackingHost = () => false;

export function useConsent() {
  return useSyncExternalStore(subscribe, readConsent, serverConsent);
}
export function useTrackingHost() {
  return useSyncExternalStore(subscribeHost, currentTrackingHost, serverTrackingHost);
}

export function CookiePreferencesButton() {
  return <button type="button" className="cookie-preferences-link" onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))}>Preferenze cookie</button>;
}

export default function ConsentManager() {
  const choice = useConsent();
  const trackingHost = useTrackingHost();
  const [open, setOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(PREFERENCES_EVENT, reopen);
  }, []);

  useEffect(() => {
    const trackContactClick = (event) => {
      if (!event.isTrusted || readConsent() !== 'accepted' || !isTrackingHost(window.location.hostname)) return;
      const anchor = event.target instanceof Element ? event.target.closest('a[data-event]') : null;
      if (!anchor) return;
      const payload = contactClickEvent(anchor.dataset.event, anchor.getAttribute('href'), anchor.dataset.eventLocation);
      if (payload && Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
    };
    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, []);

  useEffect(() => {
    if (!window.__delmonteConsentInitialized) {
      updateGoogleConsent(false, 'default');
      window.__delmonteConsentInitialized = true;
    }
    if (choice !== 'accepted' || !trackingHost) {
      updateGoogleConsent(false);
      if (window.__delmonteGtmLoaded) {
        clearMeasurementCookies();
        if (canReloadAfterRevocation()) window.location.reload();
      }
      return;
    }
    updateGoogleConsent(true);
    if (window.__delmonteGtmLoaded) return;
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.id = 'delmonte-gtm';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    window.__delmonteGtmLoaded = true;
    document.head.appendChild(script);
  }, [choice, trackingHost]);

  function choose(value) {
    if (saveConsent(value)) { setOpen(false); setStorageError(false); }
    else { setStorageError(true); setOpen(true); }
  }

  if (choice && !open) return null;
  return (
    <div className="cookie-banner cookie-banner-visible" role="region" aria-label="Preferenze cookie">
      <div className="container cookie-banner-inner">
        <div className="cookie-banner-text">
          Usiamo strumenti Google di misurazione e pubblicità soltanto con il tuo consenso.
          Puoi rifiutare e continuare a usare il sito, oppure cambiare scelta da «Preferenze cookie».
          {' '}<Link href="/privacy">Informazioni sulla privacy</Link>.
          {storageError ? <p role="status">Non è stato possibile salvare la scelta. Il consenso resta negato in questa pagina; se la ricarichi, verifica nuovamente le preferenze.</p> : null}
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-banner-button" onClick={() => choose('rejected')}>Rifiuta</button>
          <button type="button" className="cookie-banner-button is-primary" onClick={() => choose('accepted')}>Accetta</button>
          {choice ? <button type="button" className="cookie-banner-button" onClick={() => setOpen(false)}>Chiudi</button> : null}
        </div>
      </div>
    </div>
  );
}

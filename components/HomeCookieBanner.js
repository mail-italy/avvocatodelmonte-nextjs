'use client';

import { useEffect, useRef, useState } from 'react';

const CONSENT_KEY = 'delmonte-cookie-consent';
const SESSION_DISMISS_KEY = 'delmonte-cookie-banner-dismissed';

export default function HomeCookieBanner() {
  const [phase, setPhase] = useState('hidden');
  const closeTimerRef = useRef(null);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem(CONSENT_KEY);
      const storedDismiss = window.sessionStorage.getItem(SESSION_DISMISS_KEY);

      if (storedConsent || storedDismiss) {
        return;
      }

      setPhase('visible');

      const handleScroll = () => {
        if (window.scrollY > 24) {
          dismissBanner('session');
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (closeTimerRef.current) {
          window.clearTimeout(closeTimerRef.current);
        }
      };
    } catch {
      setPhase('visible');
      return undefined;
    }
  }, []);

  function dismissBanner(mode) {
    try {
      if (mode === 'accept') {
        window.localStorage.setItem(CONSENT_KEY, 'accepted');
      } else if (mode === 'reject') {
        window.localStorage.setItem(CONSENT_KEY, 'rejected');
      } else {
        window.sessionStorage.setItem(SESSION_DISMISS_KEY, '1');
      }
    } catch {
      // Ignore storage write failures and continue closing the banner.
    }

    setPhase((current) => {
      if (current !== 'visible') return current;
      return 'closing';
    });

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setPhase('hidden');
    }, 220);
  }

  if (phase === 'hidden') return null;

  return (
    <div className={`cookie-banner cookie-banner-${phase}`} role="region" aria-label="Avviso cookie">
      <div className="container cookie-banner-inner">
        <p className="cookie-banner-text">
          Questo sito utilizza cookie tecnici e, previo consenso, cookie di terze parti.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-banner-button is-primary" onClick={() => dismissBanner('accept')}>
            Accetta
          </button>
          <button type="button" className="cookie-banner-button" onClick={() => dismissBanner('reject')}>
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
}

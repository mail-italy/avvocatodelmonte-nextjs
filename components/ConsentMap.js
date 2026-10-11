'use client';

import { useConsent, useTrackingHost, CookiePreferencesButton } from './ConsentManager';

export default function ConsentMap({ src }) {
  const choice = useConsent();
  const trackingHost = useTrackingHost();
  if (choice !== 'accepted' || !trackingHost) {
    return <div className="contact-map-placeholder"><p>La mappa incorporata usa servizi Google. Puoi aprirla dal collegamento qui sotto o gestire il consenso.</p><CookiePreferencesButton /></div>;
  }
  return <iframe title="Mappa dello studio legale" src={src} loading="lazy" referrerPolicy="no-referrer" />;
}

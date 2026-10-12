
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isCallWindowOpen } from '@/lib/businessHours';
import { siteConfig } from '@/lib/site';

export default function FloatingContact() {
  const [canCall, setCanCall] = useState(false);

  useEffect(() => {
    const refresh = () => setCanCall(isCallWindowOpen());
    refresh();
    const timer = setInterval(refresh, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="floating-contact desktop-only">
        <a className="floating-pill floating-email" href={`mailto:${siteConfig.email}`} data-event="contact_email" data-event-location="floating_desktop">
          Email
        </a>
        <a
          className="floating-pill floating-whatsapp"
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="contact_whatsapp"
          data-event-location="floating_desktop"
        >
          WhatsApp
        </a>
        {canCall ? (
          <a className="floating-pill floating-call" href={`tel:${siteConfig.phone}`} data-event="contact_phone" data-event-location="floating_desktop">
            Chiama
          </a>
        ) : null}
      </div>

      <div className="mobile-sticky">
        <a className="mobile-sticky-link email" href={`mailto:${siteConfig.email}`} data-event="contact_email" data-event-location="floating_mobile">
          Email
        </a>
        <a
          className="mobile-sticky-link whatsapp"
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="contact_whatsapp"
          data-event-location="floating_mobile"
        >
          WhatsApp
        </a>
        {canCall ? (
          <a className="mobile-sticky-link primary" href={`tel:${siteConfig.phone}`} data-event="contact_phone" data-event-location="floating_mobile">
            Chiama
          </a>
        ) : null}
        {!canCall ? <Link className="mobile-sticky-link ghost" href="/contatti" data-event="generate_lead" data-event-location="floating_mobile">Contatti</Link> : null}
      </div>
    </>
  );
}

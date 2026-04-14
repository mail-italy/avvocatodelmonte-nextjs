
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
        <a className="floating-pill floating-email" href={`mailto:${siteConfig.email}`}>
          Email
        </a>
        <a
          className="floating-pill floating-whatsapp"
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        {canCall ? (
          <a className="floating-pill floating-call" href={`tel:${siteConfig.phone}`}>
            Chiama
          </a>
        ) : null}
      </div>

      <div className="mobile-sticky">
        <a className="mobile-sticky-link email" href={`mailto:${siteConfig.email}`}>
          Email
        </a>
        <a
          className="mobile-sticky-link whatsapp"
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        {canCall ? (
          <a className="mobile-sticky-link primary" href={`tel:${siteConfig.phone}`}>
            Chiama
          </a>
        ) : null}
        {!canCall ? <Link className="mobile-sticky-link ghost" href="/contatti">Contatti</Link> : null}
      </div>
    </>
  );
}

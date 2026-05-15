
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { isCallWindowOpen } from '@/lib/businessHours';
import { siteConfig } from '@/lib/site';

export default function CallButton({
  className = 'button button-phone',
  fallbackToContact = true,
  label = 'Chiama',
  children = null,
  trackingLocation = 'generic'
}) {
  const [canCall, setCanCall] = useState(false);

  useEffect(() => {
    const update = () => setCanCall(isCallWindowOpen());
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  if (canCall) {
    return (
      <a
        className={className}
        href={`tel:${siteConfig.phone}`}
        data-event="contact_phone"
        data-event-location={trackingLocation}
      >
        {children || label}
      </a>
    );
  }

  if (!fallbackToContact) return null;

  return (
    <Link className={className} href="/contatti" data-event="generate_lead" data-event-location={trackingLocation}>
      Richiedi una valutazione
    </Link>
  );
}

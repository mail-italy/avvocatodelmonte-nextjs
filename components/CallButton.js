
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { isCallWindowOpen } from '@/lib/businessHours';

export default function CallButton({
  className = 'button button-phone',
  fallbackToContact = true,
  label = 'Chiama lo studio',
  children = null
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
      <a className={className} href="tel:+390697615122">
        {children || label}
      </a>
    );
  }

  if (!fallbackToContact) return null;

  return (
    <Link className={className} href="/contatti">
      Richiedi una valutazione
    </Link>
  );
}

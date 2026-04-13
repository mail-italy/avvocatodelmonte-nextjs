'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation } from '@/lib/site';
import ContactIcon from './ContactIcon';
import CallButton from './CallButton';

const utilityRoutes = new Set(['/studio', '/approfondimenti', '/contatti']);

const areaItems = [
  { href: '/cassazione-civile', label: 'Cassazione civile' },
  { href: '/cassazione-penale', label: 'Cassazione penale' },
  { href: '/responsabilita-medica', label: 'Responsabilità medica' },
  { href: '/risarcimento-danni', label: 'Risarcimento danni' },
  { href: '/risarcimento-danni-incidente-stradale', label: 'Incidenti stradali gravi' },
  { href: '/infortuni-sul-lavoro', label: 'Infortuni sul lavoro' },
  { href: '/successioni-complesse', label: 'Successioni complesse' }
];

function isActivePath(pathname, href) {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItems({ items, pathname, linkClassName, onNavigate }) {
  return items.map((item) => {
    const active = isActivePath(pathname, item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`${linkClassName}${active ? ' is-active' : ''}`}
        aria-current={active ? 'page' : undefined}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  });
}

function DesktopActions({ onAction }) {
  return (
    <div className="header-actions">
      <CallButton className="button button-phone header-call-button" label="Chiama lo studio" fallbackToContact={false}>
        <>
          <ContactIcon type="phone" className="header-link-icon" />
          <span>Chiama lo studio</span>
        </>
      </CallButton>
      <a
        className="header-secondary-link"
        href="https://wa.me/390697615122"
        target="_blank"
        rel="noreferrer"
        onClick={onAction}
      >
        <span>WhatsApp</span>
      </a>
      <Link className="button button-primary header-cta" href="/contatti" onClick={onAction}>
        Valutazione preliminare
      </Link>
    </div>
  );
}

function MobileActions({ onAction }) {
  return (
    <div className="header-actions">
      <CallButton className="button button-phone header-call-button" label="Chiama lo studio" fallbackToContact={false} />
      <a
        className="header-secondary-link"
        href="https://wa.me/390697615122"
        target="_blank"
        rel="noreferrer"
        onClick={onAction}
      >
        <span>WhatsApp</span>
      </a>
      <Link className="button button-primary header-cta" href="/contatti" onClick={onAction}>
        Valutazione preliminare
      </Link>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const desktopUtilityItems = navigation.filter((item) => utilityRoutes.has(item.href));
  const areaActive = areaItems.some((item) => isActivePath(pathname, item.href));
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Studio Legale Del Monte" onClick={closeMenu}>
          <span className="brand-logo brand-logo-desktop">
            <Image
              src="/images/delmonte_logo_premium_light.svg"
              alt="Studio Legale Del Monte"
              width={1400}
              height={360}
              priority
            />
          </span>
          <span className="brand-logo brand-logo-mobile">
            <Image
              src="/images/delmonte_logo_premium_compact_light.svg"
              alt="Studio Legale Del Monte"
              width={820}
              height={260}
              priority
            />
          </span>
        </Link>

        <div className="desktop-nav-shell">
          <nav className="desktop-nav desktop-nav-primary" aria-label="Navigazione principale">
            <div className={`desktop-nav-dropdown${areaActive ? ' is-active' : ''}`}>
              <button
                type="button"
                className="desktop-nav-link desktop-nav-link-text desktop-nav-toggle"
                aria-haspopup="true"
                aria-expanded={areaActive ? 'true' : 'false'}
              >
                Aree di attività
              </button>
              <div className="desktop-dropdown-panel">
                {areaItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`desktop-dropdown-link${active ? ' is-active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <NavItems
              items={desktopUtilityItems}
              pathname={pathname}
              linkClassName="desktop-nav-link desktop-nav-link-secondary"
            />
          </nav>
        </div>

        <div className="desktop-actions">
          <DesktopActions />
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <div className="container mobile-panel-inner">
          <nav className="mobile-nav" aria-label="Menu mobile">
            <NavItems
              items={navigation}
              pathname={pathname}
              linkClassName="mobile-nav-link"
              onNavigate={closeMenu}
            />
          </nav>
          <div className="mobile-panel-actions">
            <MobileActions onAction={closeMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}

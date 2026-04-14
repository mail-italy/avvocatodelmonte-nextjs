import Image from 'next/image';
import Link from 'next/link';
import { footerLinks, siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-line">
            <span className="brand-logo footer-brand-logo">
              <Image
                src="/images/delmonte_logo_premium_compact_light.svg"
                alt="Studio Legale Del Monte"
                width={820}
                height={260}
              />
            </span>
            <div>
              <strong>{siteConfig.name}</strong>
              <p>Avv. Federica Del Monte, Avvocato cassazionista a Roma</p>
            </div>
          </div>
          <p className="footer-copy">
            Studio legale con sede a Roma, orientato a Cassazione civile e penale, successioni
            complesse, responsabilità medica, risarcimento danni, infortuni sul lavoro e
            mediazione, con assistenza anche in questioni di rilievo più ampio.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3>Contatti</h3>
          <ul className="footer-contact-list">
            <li>{siteConfig.address.street}</li>
            <li>{siteConfig.address.zip} {siteConfig.address.city}</li>
            <li>{siteConfig.hours.days}, {siteConfig.hours.open}–{siteConfig.hours.close}</li>
            <li>Primo contatto e primo esame orientativo del caso gratuiti</li>
            <li>
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.pec}`}>{siteConfig.pec}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Tutti i diritti riservati.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
      </div>
    </footer>
  );
}

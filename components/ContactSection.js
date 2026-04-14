import ContactForm from './ContactForm';
import ContactIcon from './ContactIcon';
import { siteConfig } from '@/lib/site';
import CallButton from './CallButton';

export default function ContactSection({
  title = 'Richiedi una valutazione preliminare',
  description = '',
  compact = false,
  eyebrow = 'Contatti',
  guidanceTitle = 'Come inviare il materiale',
  guidanceText = 'È possibile descrivere la situazione già via email o WhatsApp e allegare pochi documenti essenziali: sentenze, provvedimenti, referti, verbali, atti o documentazione patrimoniale già disponibile.',
  showAddress = true,
  showPec = false,
  note = 'Anche una valutazione prudente o negativa è utile quando serve a chiarire subito se vi siano i presupposti per procedere.'
}) {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`
  );
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section className="section">
      <div className="container">
        <div className="split contact-section">
          <div className="contact-panel">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="section-intro">
              {description ||
                'Il primo contatto e il primo esame della documentazione essenziale sono gratuiti. Una richiesta chiara, con pochi elementi pertinenti, consente una valutazione più utile e più rapida.'}
            </p>

            <ul className="contact-points">
              <li className="contact-point contact-point-phone">
                <span className="contact-point-icon">
                  <ContactIcon type="phone" />
                </span>
                <div>
                  <strong>Telefono</strong>
                  <span>{siteConfig.phoneDisplay}</span>
                </div>
              </li>
              <li className="contact-point contact-point-whatsapp">
                <span className="contact-point-icon">
                  <ContactIcon type="whatsapp" />
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>{siteConfig.whatsappDisplay}</span>
                </div>
              </li>
              <li className="contact-point contact-point-email">
                <span className="contact-point-icon">
                  <ContactIcon type="email" />
                </span>
                <div>
                  <strong>Email</strong>
                  <span>{siteConfig.email}</span>
                </div>
              </li>
              {showPec ? (
                <li className="contact-point contact-point-email">
                  <span className="contact-point-icon">
                    <ContactIcon type="pec" />
                  </span>
                  <div>
                    <strong>PEC</strong>
                    <span>{siteConfig.pec}</span>
                  </div>
                </li>
              ) : null}
              {showAddress ? (
                <li className="contact-point">
                  <span className="contact-point-icon">
                    <ContactIcon type="address" />
                  </span>
                  <div>
                    <strong>Indirizzo</strong>
                    <span>
                      {siteConfig.address.street}, {siteConfig.address.zip}{' '}
                      {siteConfig.address.city}
                    </span>
                  </div>
                </li>
              ) : null}
              <li className="contact-point">
                <span className="contact-point-icon">
                  <ContactIcon type="clock" />
                </span>
                <div>
                  <strong>Orari</strong>
                  <span>
                    {siteConfig.hours.days}, {siteConfig.hours.open}–{siteConfig.hours.close}
                  </span>
                </div>
              </li>
            </ul>

            <div className="contact-guidance">
              <h3>{guidanceTitle}</h3>
              <p>{guidanceText}</p>
            </div>

            <p className="contact-side-note">{note}</p>

            <div className="contact-mini-actions">
              <CallButton className="button button-phone" fallbackToContact={false} />
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="button button-email" href={`mailto:${siteConfig.email}`}>
                Email
              </a>
            </div>
          </div>

          <div className="contact-card">
            <ContactForm compact={compact} />
          </div>
        </div>

        <div className="contact-map contact-map-wide">
          <div className="contact-map-head">
            <h3>Studio a Roma</h3>
            <p>
              {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Mappa dello studio legale"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact-map-actions">
            <a
              className="button button-ghost"
              href={mapsOpenUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="maps-button-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    fill="#4285F4"
                    d="M12 2c2.23 0 4.1.74 5.62 2.23 1.5 1.5 2.25 3.36 2.25 5.58 0 1.58-.4 3.06-1.2 4.44-.81 1.39-2.24 3.23-4.3 5.53L12 22l-2.38-2.24c-2.08-2.3-3.52-4.14-4.31-5.53-.8-1.38-1.2-2.86-1.2-4.44 0-2.22.75-4.08 2.25-5.58C7.9 2.74 9.77 2 12 2Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 22l-2.38-2.24c-2.08-2.3-3.52-4.14-4.31-5.53l3.8-2.2A3.77 3.77 0 0 0 12 13.4V22Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M19.87 8.72c.08.36.12.72.12 1.09 0 1.58-.4 3.06-1.2 4.44-.81 1.39-2.24 3.23-4.3 5.53L12 22v-8.6c1.05 0 1.96-.37 2.72-1.12a3.7 3.7 0 0 0 1.14-2.76c0-.35-.05-.69-.13-1.01l4.14.21Z"
                  />
                  <circle cx="12" cy="9.5" r="2.65" fill="#EA4335" />
                </svg>
              </span>
              Apri su Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

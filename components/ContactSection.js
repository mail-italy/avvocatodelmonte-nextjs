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
  return (
    <section className="section">
      <div className="container split contact-section">
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
                    {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
                  </span>
                </div>
              </li>
            ) : null}
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
    </section>
  );
}

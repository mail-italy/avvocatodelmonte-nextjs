import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';
import { getImageFocusClass } from '@/lib/imageFocus';
import CallButton from './CallButton';
import { siteConfig } from '@/lib/site';

export default function PageHero({ eyebrow, title, description, image, imageAlt, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-grid">
          <div className="page-hero-copy">
            <Breadcrumbs items={breadcrumbs} />
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <p className="lead">{description}</p>
            <p className="page-hero-note">
              Il primo contatto e una prima valutazione preliminare del caso consentono di capire,
              con maggiore chiarezza, se vi siano davvero i presupposti per procedere.
            </p>
            <div className="button-row">
              <a className="button button-primary button-hero" href="/contatti">
                Richiedi una valutazione preliminare
              </a>
              <CallButton className="button button-phone button-hero" fallbackToContact={false} />
              <a
                className="button button-whatsapp button-hero"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="page-hero-media">
            <div className="media-card">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={`cover-image ${getImageFocusClass(image)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

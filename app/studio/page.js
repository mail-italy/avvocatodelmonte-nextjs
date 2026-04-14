
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import FaqList from '@/components/FaqList';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';
import { attorneySchema, breadcrumbSchema, faqSchema, legalServiceSchema } from '@/lib/schema';
import { getImageFocusClass } from '@/lib/imageFocus';

const service = services['studio'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/studio',
  image: '/images/team-boardroom-wide.webp',
  keywords: service.keywords
});

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={[
          attorneySchema(),
          legalServiceSchema(),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Studio', item: '/studio' }
          ]),
          faqSchema(service.faqs)
        ]}
      />

      <PageHero
        eyebrow={service.heroEyebrow}
        title="Studio Legale Del Monte"
        description={service.description}
        image="/images/team-boardroom-wide.webp"
        imageAlt="Team dello Studio Legale Del Monte"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Studio', item: '/studio' }
        ]}
      />

      <section className="section">
        <div className="container prose-block">
          <p className="lead-card">{service.intro}</p>
          {service.sections.map((section) => (
            <div key={section.title} className="content-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="check-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Studio e metodo</p>
          <h2>Un’impostazione professionale fondata su chiarezza, selezione e qualità dell’analisi</h2>
          <p className="section-intro">
            Lo studio ha sede a Roma e segue un numero selezionato di incarichi in cui la qualità
            della lettura giuridica, dell’analisi documentale e dell’impostazione della tutela sono
            realmente decisive. L’attività resta radicata a Roma, ma può riguardare anche
            controversie che, per natura della materia, superano l’ambito strettamente locale.
          </p>
          <div className="studio-gallery">
            <div className="studio-gallery-main">
              <Image
                src="/images/team-meeting-wide.webp"
                alt="Riunione di lavoro dello studio"
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                className={`cover-image ${getImageFocusClass('/images/team-meeting-wide.webp')}`}
              />
            </div>
            <div className="studio-gallery-side">
              <div className="gallery-card">
                <Image
                  src="/images/portrait-soft.webp"
                  alt="Ritratto istituzionale dell'Avv. Federica Del Monte"
                  fill
                  sizes="(max-width: 900px) 100vw, 20vw"
                  className={`cover-image ${getImageFocusClass('/images/portrait-soft.webp')}`}
                />
              </div>
              <div className="gallery-card">
                <Image
                  src="/images/desk-signature.webp"
                  alt="Avvocata alla scrivania con fascicoli e codici"
                  fill
                  sizes="(max-width: 900px) 100vw, 20vw"
                  className={`cover-image ${getImageFocusClass('/images/desk-signature.webp')}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Domande frequenti</p>
          <h2>FAQ su studio, metodo e criteri di valutazione</h2>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <ContactSection compact />
    </>
  );
}

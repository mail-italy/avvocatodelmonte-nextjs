import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import FaqList from '@/components/FaqList';
import ServiceCard from '@/components/ServiceCard';
import ArticleCard from '@/components/ArticleCard';
import { services, serviceList } from '@/lib/services';
import { articles } from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema
} from '@/lib/schema';
import { getImageFocusClass } from '@/lib/imageFocus';

const service = services.studio;

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/studio',
  image: '/images/team-boardroom-wide.webp',
  keywords: service.keywords
});

export default function StudioPage() {
  const relatedServices = serviceList.filter((item) => service.relatedServices.includes(item.slug));
  const relatedArticles = articles.filter((item) => service.relatedArticles.includes(item.slug));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/studio',
            name: 'Studio Legale Del Monte',
            description: service.metaDescription,
            type: 'AboutPage'
          }),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Studio', item: '/studio' }
          ], '/studio'),
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
          <p>
            Lo Studio Legale Del Monte fa riferimento all’Avv. Federica Del Monte e ha sede a Roma,
            in Via Costanza Baudana Vaccolini, 5.
          </p>
          <p>
            L’attività professionale è svolta nell’ambito dello{' '}
            <a href="https://www.delmontestudiolegale.it/" target="_blank" rel="noopener noreferrer">
              Studio Legale Del Monte
            </a>
            , struttura dedicata all’assistenza giudiziale e stragiudiziale in favore di privati,
            famiglie e imprese.
          </p>

          <div className="cards-grid three service-summary-grid">
            <article className="reason-card reason-card-light">
              <h3>Quando lo studio è davvero utile</h3>
              <ul className="check-list">
                <li>quando la qualità dell’analisi giuridica può incidere concretamente sul risultato</li>
                <li>quando il fascicolo richiede una lettura selettiva, non standardizzata</li>
                <li>quando serve chiarire prima di agire se esistano veri presupposti di tutela</li>
              </ul>
            </article>
            <article className="reason-card reason-card-light">
              <h3>Che cosa viene esaminato</h3>
              <ul className="check-list">
                <li>documenti essenziali e qualità del materiale disponibile</li>
                <li>utilità concreta dell’azione e sostenibilità tecnica del caso</li>
                <li>rapporto tra obiettivo del cliente, tempi e struttura del fascicolo</li>
              </ul>
            </article>
            <article className="reason-card reason-card-light">
              <h3>Che cosa aspettarsi dal primo contatto</h3>
              <ul className="check-list">
                <li>una valutazione chiara su ciò che è già leggibile e su ciò che manca ancora</li>
                <li>una risposta orientata alla sostenibilità del caso, non a promesse generiche</li>
                <li>indicazioni operative sui documenti davvero utili per approfondire</li>
              </ul>
            </article>
          </div>

          {service.sections.map((section) => (
            <section key={section.title} className="content-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="content-section">
            <h2>Riferimento istituzionale</h2>
            <ul className="resource-list">
              {service.externalLinks.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                  <p>{item.note}</p>
                </li>
              ))}
            </ul>
          </section>
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
          <p className="eyebrow">Aree collegate</p>
          <h2>Pagine di attività principali</h2>
          <div className="cards-grid three">
            {relatedServices.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Approfondimenti correlati</p>
          <h2>Letture utili per orientarsi prima del primo contatto</h2>
          <div className="cards-grid three">
            {relatedArticles.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
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

      <ContactSection compact trackingLocation="studio_page" />
    </>
  );
}

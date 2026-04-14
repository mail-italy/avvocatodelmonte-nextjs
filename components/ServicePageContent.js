import Link from 'next/link';
import { serviceList } from '@/lib/services';
import { articles } from '@/lib/articles';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import JsonLd from './JsonLd';
import PageHero from './PageHero';
import FaqList from './FaqList';
import ContactSection from './ContactSection';
import ServiceCard from './ServiceCard';
import ArticleCard from './ArticleCard';
import { siteConfig } from '@/lib/site';

export default function ServicePageContent({ service }) {
  const relatedServices = service.relatedServices
    ? serviceList.filter((item) => service.relatedServices.includes(item.slug))
    : [];
  const relatedArticles = service.relatedArticles
    ? articles.filter((article) => service.relatedArticles.includes(article.slug))
    : [];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: service.menuTitle, item: `/${service.slug}` }
          ]),
          ...(service.faqs?.length ? [faqSchema(service.faqs)] : [])
        ]}
      />

      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.menuTitle}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: service.menuTitle, item: `/${service.slug}` }
        ]}
      />

      <section className="section">
        <div className="container prose-block">
          <p className="lead-card">{service.intro}</p>

          <div className="reason-list">
            <div className="reason-card reason-card-light">
              <h3>Che cosa viene valutato</h3>
              <p>
                Lo studio verifica documenti, termini, utilità concreta dell’iniziativa e tenuta
                tecnica del caso, con un esame orientato a capire se esistano davvero i presupposti
                per procedere.
              </p>
            </div>
            <div className="reason-card reason-card-light">
              <h3>Che cosa conviene preparare</h3>
              <p>
                Sentenze, provvedimenti, referti, verbali, atti o documenti patrimoniali già
                disponibili consentono una prima valutazione più utile, più rapida e più leggibile.
              </p>
            </div>
          </div>

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

          <div className="inline-cta">
            <h2>Documenti utili per la valutazione preliminare</h2>
            <p>
              Se desideri sottoporre il caso allo studio, è utile inviare sentenza, provvedimenti,
              referti o altri documenti essenziali già disponibili, insieme a una sintesi ordinata
              dei fatti e dell’obiettivo che intendi perseguire.
            </p>
            <div className="button-row">
              <Link href="/contatti" className="button button-primary">
                Richiedi una valutazione preliminare
              </Link>
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {relatedServices.length ? (
        <section className="section section-soft">
          <div className="container">
            <p className="eyebrow">Aree collegate</p>
            <h2>Altre aree che possono essere utili</h2>
            <div className="cards-grid three">
              {relatedServices.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedArticles.length ? (
        <section className="section">
          <div className="container">
            <p className="eyebrow">Approfondimenti correlati</p>
            <h2>Articoli utili per approfondire il tema</h2>
            <div className="cards-grid three">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.faqs?.length ? (
        <section className="section section-soft">
          <div className="container faq-section">
            <p className="eyebrow">Domande frequenti</p>
            <h2>FAQ sulla materia</h2>
            <FaqList faqs={service.faqs} />
          </div>
        </section>
      ) : null}

      <ContactSection
        compact
        title={`Richiedi una valutazione per ${service.label.toLowerCase()}`}
        description="Il primo contatto e il primo esame della documentazione essenziale sono gratuiti. Una richiesta chiara, con indicazione dei fatti principali e dei documenti già disponibili, consente di capire con maggiore precisione se vi siano i presupposti per procedere."
      />
    </>
  );
}

import Link from 'next/link';
import { serviceList } from '@/lib/services';
import { articles } from '@/lib/articles';
import { seoPageList } from '@/lib/seoPages';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '@/lib/schema';
import JsonLd from './JsonLd';
import PageHero from './PageHero';
import FaqList from './FaqList';
import ContactSection from './ContactSection';
import ServiceCard from './ServiceCard';
import ArticleCard from './ArticleCard';
import { siteConfig } from '@/lib/site';

export default function ServicePageContent({ service }) {
  const practicePages = [...serviceList, ...seoPageList];
  const relatedServices = service.relatedServices
    ? practicePages.filter((item) => service.relatedServices.includes(item.slug))
    : [];
  const relatedArticles = service.relatedArticles
    ? articles.filter((article) => service.relatedArticles.includes(article.slug))
    : [];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: `/${service.slug}`,
            name: service.title,
            description: service.metaDescription || service.description
          }),
          serviceSchema(service),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: service.menuTitle, item: `/${service.slug}` }
          ], `/${service.slug}`),
          ...(service.faqs?.length ? [faqSchema(service.faqs)] : [])
        ]}
      />

      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.menuTitle}
        trackingLocation={service.slug}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: service.menuTitle, item: `/${service.slug}` }
        ]}
      />

      <section className="section">
        <div className="container prose-block">
          <p className="lead-card">{service.intro}</p>

          <div className="cards-grid three service-summary-grid">
            <article className="reason-card reason-card-light">
              <h3>Quando ha senso contattare lo studio</h3>
              <ul className="check-list">
                {service.contactReasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="reason-card reason-card-light">
              <h3>Che cosa viene esaminato</h3>
              <ul className="check-list">
                {service.whatIsReviewed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="reason-card reason-card-light">
              <h3>Quali documenti conviene preparare</h3>
              <ul className="check-list">
                {service.documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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

          {service.editorialLinks?.length ? (
            <section className="content-section">
              {service.editorialLinks.map((item) => (
                <p key={item.url}>
                  {item.before}
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                  {item.after}
                </p>
              ))}
            </section>
          ) : null}

          {service.mistakes?.length ? (
            <section className="content-section">
              <h2>Errori da evitare nella fase iniziale</h2>
              <ul className="check-list">
                {service.mistakes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {service.externalLinks?.length ? (
            <section className="content-section">
              <h2>Riferimenti istituzionali utili</h2>
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
          ) : null}

          <div className="inline-cta">
            <h2>{service.ctaTitle || 'Documenti utili per la valutazione preliminare'}</h2>
            <p>
              {service.ctaText ||
                'Una richiesta chiara, con documenti essenziali già disponibili e una sintesi ordinata dei fatti, rende il primo esame più utile e più leggibile.'}
            </p>
            <div className="button-row">
              <Link href="/contatti" className="button button-primary" data-event="generate_lead" data-event-location={service.slug}>
                Richiedi una valutazione preliminare
              </Link>
              <a
                className="button button-whatsapp"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                data-event="contact_whatsapp"
                data-event-location={service.slug}
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
            <h2>Pagine di attività collegate</h2>
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
            <h2>Letture utili per approfondire il tema</h2>
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
        description="Il primo contatto e il primo esame della documentazione essenziale sono gratuiti. Una richiesta chiara, con i fatti principali e i documenti già disponibili, aiuta a capire se vi siano davvero i presupposti per procedere."
        trackingLocation={service.slug}
      />
    </>
  );
}

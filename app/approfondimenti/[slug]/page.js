import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import FaqList from '@/components/FaqList';
import ContactSection from '@/components/ContactSection';
import ArticleCard from '@/components/ArticleCard';
import { articles, articleMap } from '@/lib/articles';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articleMap[slug];
  if (!article) return {};

  return buildMetadata({
    title: article.seoTitle || article.title,
    description: article.description,
    path: `/approfondimenti/${article.slug}`,
    image: article.image,
    keywords: [article.category, article.title],
    type: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt
  });
}

function formatDate(value) {
  return new Intl.DateTimeFormat('it-IT', {
    timeZone: 'Europe/Rome',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(value));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articleMap[slug];

  if (!article) {
    notFound();
  }

  const service = services[article.service];
  const related = article.relatedArticles
    ? articles.filter((item) => item.slug !== article.slug && article.relatedArticles.includes(item.slug))
    : [];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: `/approfondimenti/${article.slug}`,
            name: article.title,
            description: article.description
          }),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Approfondimenti', item: '/approfondimenti' },
            { name: article.title, item: `/approfondimenti/${article.slug}` }
          ], `/approfondimenti/${article.slug}`),
          articleSchema(article),
          ...(article.faqs?.length ? [faqSchema(article.faqs)] : [])
        ]}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        image={article.image}
        imageAlt={article.imageAlt || article.title}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Approfondimenti', item: '/approfondimenti' },
          { name: article.title, item: `/approfondimenti/${article.slug}` }
        ]}
      />

      <section className="section article-page-main">
        <div className="container article-layout">
          <article className="article-content">
            <div className="article-meta">
              <span>Aggiornato il {formatDate(article.updatedAt)}</span>
              <span>{article.readTime}</span>
            </div>

            {article.intro ? <p className="article-intro">{article.intro}</p> : null}
            {article.reviewedBy ? <p>Revisione professionale: {article.reviewedBy}, {formatDate(article.reviewedAt)}.</p> : null}
            {article.bodyHtml ? <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} /> : null}

            {article.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            {article.checks?.length ? (
              <section className="article-section">
                <h2>Cosa verificare prima di agire</h2>
                <ul className="check-list">
                  {article.checks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {article.documents?.length ? (
              <section className="article-section">
                <h2>Documenti utili per il primo esame</h2>
                <ul className="check-list">
                  {article.documents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {article.externalLinks?.length ? (
              <section className="article-section">
                <h2>Riferimento istituzionale utile</h2>
                <ul className="resource-list">
                  {article.externalLinks.map((item) => (
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
              <h2>Vuoi sottoporre il tuo caso allo studio?</h2>
              <p>
                Una richiesta chiara, con documenti essenziali già disponibili e indicazione
                dell’area di interesse, rende il primo esame più utile e più preciso. Il primo
                contatto e la prima valutazione orientativa del caso sono gratuiti.
              </p>
              <div className="button-row">
                <Link href="/contatti" className="button button-primary" data-event="generate_lead" data-event-location={article.slug}>
                  Richiedi una valutazione preliminare
                </Link>
                <a
                  className="button button-whatsapp"
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="contact_whatsapp"
                  data-event-location={article.slug}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          <aside className="article-aside">
            <div className="aside-card">
              <p className="eyebrow">Pagina collegata</p>
              <h3>{service.menuTitle}</h3>
              <p>
                Se l’argomento trattato corrisponde alla tua situazione, la pagina dedicata aiuta a
                capire quali profili vengono valutati dallo studio e quali documenti conviene
                predisporre.
              </p>
              <Link href={`/${article.service}`} className="button button-primary small">
                Vai alla pagina dedicata
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {article.faqs?.length ? (
        <section className="section section-soft article-faq-section">
          <div className="container">
            <p className="eyebrow">Domande frequenti</p>
            <h2>FAQ sull’argomento</h2>
            <FaqList faqs={article.faqs} />
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="section article-related-section">
          <div className="container">
            <p className="eyebrow">Letture correlate</p>
            <h2>Approfondimenti collegati</h2>
            <div className="cards-grid three">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactSection
        compact
        title={`Richiedi una valutazione per ${service.menuTitle.toLowerCase()}`}
        description="Il primo contatto e il primo esame della documentazione essenziale sono gratuiti. Una richiesta chiara, con i fatti principali e i documenti già disponibili, aiuta a capire se vi siano davvero i presupposti per procedere."
        trackingLocation={article.slug}
      />
    </>
  );
}

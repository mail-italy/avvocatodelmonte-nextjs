
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import FaqList from '@/components/FaqList';
import ContactSection from '@/components/ContactSection';
import ArticleCard from '@/components/ArticleCard';
import { articles, articleMap } from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articleMap[slug];
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/approfondimenti/${article.slug}`,
    image: article.image,
    keywords: [article.category, article.title]
  });
}

function formatDate(value) {
  return new Intl.DateTimeFormat('it-IT', {
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

  const related = articles
    .filter((item) => item.slug !== article.slug && item.service === article.service)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Approfondimenti', item: '/approfondimenti' },
            { name: article.title, item: `/approfondimenti/${article.slug}` }
          ]),
          articleSchema(article),
          ...(article.faqs?.length ? [faqSchema(article.faqs)] : [])
        ]}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.description}
        image={article.image}
        imageAlt={article.title}
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

            <p className="article-intro">{article.intro}</p>

            {article.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="inline-cta">
              <h2>Vuoi sottoporre il tuo caso allo studio?</h2>
              <p>
                Una richiesta chiara, con documenti essenziali già disponibili e indicazione
                dell’area di interesse, rende il primo esame più utile e più preciso. Il primo
                contatto e la prima valutazione orientativa del caso sono gratuiti.
              </p>
              <div className="button-row">
                <Link href="/contatti" className="button button-primary">
                  Richiedi una valutazione preliminare
                </Link>
                <a className="button button-whatsapp" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          <aside className="article-aside">
            <div className="aside-card">
              <p className="eyebrow">Pagina collegata</p>
              <h3>{article.category}</h3>
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

      <ContactSection compact />
    </>
  );
}

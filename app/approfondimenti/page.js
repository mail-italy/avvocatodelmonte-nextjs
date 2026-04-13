
import JsonLd from '@/components/JsonLd';
import ArticleCard from '@/components/ArticleCard';
import PageHero from '@/components/PageHero';
import { articles } from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Approfondimenti legali',
  description:
    'Approfondimenti su Cassazione civile e penale, responsabilità medica, risarcimento danni, infortuni sul lavoro e successioni complesse.',
  path: '/approfondimenti',
  image: '/images/team-meeting-wide.webp',
  keywords: ['approfondimenti legali', 'cassazione civile', 'cassazione penale', 'responsabilità medica']
});

const categories = ['Tutti', ...new Set(articles.map((article) => article.category))];

export default function ApprofondimentiPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Approfondimenti', item: '/approfondimenti' }
          ])
        ]}
      />

      <PageHero
        eyebrow="Approfondimenti"
        title="Approfondimenti"
        description="Articoli pensati per chiarire quando una questione presenta profili tali da meritare una valutazione legale seria: Cassazione, responsabilità medica, danni alla persona, infortuni sul lavoro e successioni complesse."
        image="/images/team-meeting-wide.webp"
        imageAlt="Riunione di lavoro in studio"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Approfondimenti', item: '/approfondimenti' }
        ]}
      />

      <section className="section article-index-section">
        <div className="container">
          <p className="section-intro">
            Gli approfondimenti aiutano a distinguere i casi che richiedono un vero esame tecnico
            dalle richieste formulate in termini troppo generici o non ancora sufficientemente
            documentati.
          </p>
          <div className="category-pills">
            {categories.map((category) => (
              <span key={category} className="category-pill">
                {category}
              </span>
            ))}
          </div>
          <div className="cards-grid three">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

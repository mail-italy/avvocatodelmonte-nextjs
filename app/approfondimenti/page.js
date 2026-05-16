import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { articleMap } from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Approfondimenti legali per Cassazione, responsabilità medica, danni e successioni',
  description:
    'Hub editoriale con approfondimenti su Cassazione civile e penale, responsabilità medica, risarcimento danni, incidenti stradali gravi, infortuni sul lavoro, successioni complesse, testamento e mediazione.',
  path: '/approfondimenti',
  image: '/images/team-meeting-wide.webp',
  keywords: [
    'approfondimenti legali',
    'cassazione civile',
    'cassazione penale',
    'responsabilità medica',
    'risarcimento danni'
  ]
});

const clusters = [
  {
    title: 'Cassazione civile',
    description:
      'Contenuti pensati per distinguere il dissenso sul merito dai veri motivi di legittimità, con attenzione a utilità concreta del ricorso e rischio di inammissibilità.',
    service: { href: '/cassazione-civile', label: 'Pagina servizio Cassazione civile' },
    articles: [
      'termini-per-il-ricorso-per-cassazione-civile',
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'cassazione-civile-e-vizio-di-motivazione',
      'inammissibilita-del-ricorso-per-cassazione',
      'differenza-tra-appello-e-cassazione'
    ]
  },
  {
    title: 'Cassazione penale',
    description:
      'Articoli dedicati alla selezione dei motivi, al controllo dei termini e ai profili di ammissibilità del ricorso per Cassazione penale.',
    service: { href: '/cassazione-penale', label: 'Pagina servizio Cassazione penale' },
    articles: ['motivi-di-ricorso-in-cassazione-penale', 'ricorso-per-cassazione-penale-e-ammissibilita']
  },
  {
    title: 'Responsabilità medica',
    description:
      'Approfondimenti su errore diagnostico, errore chirurgico, consenso informato, documentazione clinica e corretto primo contatto con lo studio.',
    service: { href: '/responsabilita-medica', label: 'Pagina servizio Responsabilità medica' },
    articles: [
      'errore-diagnostico-e-ritardo-diagnosi',
      'consenso-informato-e-risarcimento',
      'errore-chirurgico-quando-il-caso-va-approfondito',
      'errore-medico-e-documentazione-clinica',
      'responsabilita-medica-e-primo-contatto-con-lo-studio'
    ]
  },
  {
    title: 'Risarcimento danni',
    description:
      'Letture dedicate alla prova del pregiudizio, al danno biologico permanente e ai criteri con cui il fascicolo risarcitorio va organizzato fin dall’inizio.',
    service: { href: '/risarcimento-danni', label: 'Pagina servizio Risarcimento danni' },
    articles: ['danno-biologico-permanente-cosa-verificare', 'risarcimento-danni-e-prova-del-pregiudizio']
  },
  {
    title: 'Incidenti stradali gravi',
    description:
      'Contenuti per orientarsi nei sinistri con lesioni serie, invalidità permanente, decesso e danni ai familiari.',
    service: {
      href: '/risarcimento-danni-incidente-stradale',
      label: 'Pagina servizio Incidenti stradali gravi'
    },
    articles: ['cosa-fare-dopo-un-incidente-stradale-grave', 'perdita-del-rapporto-parentale-criteri-di-valutazione']
  },
  {
    title: 'Infortuni sul lavoro',
    description:
      'Approfondimenti su danno differenziale, responsabilità datoriale e casi in cui il fascicolo richiede una lettura ulteriore rispetto al solo piano indennitario.',
    service: { href: '/infortuni-sul-lavoro', label: 'Pagina servizio Infortuni sul lavoro' },
    articles: [
      'infortunio-sul-lavoro-e-danno-differenziale',
      'responsabilita-del-datore-di-lavoro-cosa-verificare',
      'infortunio-in-itinere-quando-serve-approfondire'
    ]
  },
  {
    title: 'Successioni complesse',
    description:
      'Guide per ricostruire patrimoni articolati, leggere immobili, conti correnti, donazioni pregresse e gestire i conflitti tra coeredi.',
    service: { href: '/successioni-complesse', label: 'Pagina servizio Successioni complesse' },
    articles: [
      'divisione-ereditaria-cosa-fare',
      'eredita-con-immobili-e-conti-correnti',
      'successione-e-donazioni-pregresse-cosa-guardare'
    ]
  },
  {
    title: 'Impugnazione del testamento',
    description:
      'Contenuti dedicati ai casi in cui validità dell’atto, capacità del testatore e ricostruzione del patrimonio impongono una verifica selettiva.',
    service: { href: '/impugnazione-testamento', label: 'Pagina servizio Impugnazione del testamento' },
    articles: ['impugnazione-del-testamento-quando-ha-senso']
  },
  {
    title: 'Mediazione',
    description:
      'Percorso utile quando la gestione stragiudiziale del conflitto richiede comunque documenti ordinati, obiettivi chiari e una posizione tecnicamente solida.',
    service: {
      href: '/mediazione-risoluzione-stragiudiziale',
      label: 'Pagina servizio Mediazione e risoluzione stragiudiziale'
    },
    articles: []
  }
];

export default function ApprofondimentiPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/approfondimenti',
            name: 'Approfondimenti legali',
            description:
              'Hub editoriale con cluster tematici su Cassazione, responsabilità medica, risarcimento danni, infortuni e successioni.',
            type: 'CollectionPage'
          }),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Approfondimenti', item: '/approfondimenti' }
          ], '/approfondimenti')
        ]}
      />

      <PageHero
        eyebrow="Approfondimenti"
        title="Approfondimenti"
        description="Questa sezione raccoglie contenuti pensati per chiarire quando una questione richiede una valutazione legale seria. Ogni cluster collega le pagine di attività principali agli articoli che aiutano a orientarsi prima del primo contatto."
        image="/images/team-meeting-wide.webp"
        imageAlt="Riunione di lavoro in studio"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Approfondimenti', item: '/approfondimenti' }
        ]}
      />

      <section className="section article-index-section">
        <div className="container hub-clusters">
          <p className="section-intro">
            Gli articoli non sostituiscono il parere legale, ma aiutano a distinguere i casi che
            richiedono un vero esame tecnico da quelli che hanno ancora bisogno di essere messi a
            fuoco sul piano documentale. Per questo l’hub è organizzato per cluster tematici e non
            come semplice elenco di card.
          </p>

          {clusters.map((cluster) => (
            <section key={cluster.title} className="hub-cluster">
              <div className="hub-cluster-head">
                <div>
                  <p className="eyebrow">{cluster.title}</p>
                  <h2>{cluster.title}</h2>
                </div>
                <Link className="button button-ghost small" href={cluster.service.href}>
                  {cluster.service.label}
                </Link>
              </div>
              <p>{cluster.description}</p>
              {cluster.articles.length ? (
                <ul className="cluster-article-list">
                  {cluster.articles.map((slug) => {
                    const article = articleMap[slug];
                    return (
                      <li key={slug}>
                        <Link href={`/approfondimenti/${slug}`}>{article.title}</Link>
                        <p>{article.description}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="cluster-empty">
                  La pagina servizio raccoglie già i profili principali e collega i contenuti
                  coerenti delle altre aree quando la mediazione si intreccia con il contenzioso.
                </p>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

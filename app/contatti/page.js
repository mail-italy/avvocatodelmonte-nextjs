import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import FaqList from '@/components/FaqList';
import { buildMetadata } from '@/lib/metadata';
import {
  breadcrumbSchema,
  contactPageSchema,
  faqSchema,
  legalServiceSchema,
  localBusinessSchema
} from '@/lib/schema';

const faqs = [
  {
    question: 'Quali documenti conviene inviare già nella prima richiesta?',
    answer:
      'Conviene inviare solo i documenti essenziali già disponibili: sentenze, provvedimenti, referti, verbali, atti processuali o materiali patrimoniali realmente utili a comprendere il caso.'
  },
  {
    question: 'Il primo esame del caso è gratuito?',
    answer:
      'Sì. Il primo contatto e la prima lettura orientativa della documentazione essenziale sono gratuiti e servono a capire se vi siano i presupposti per procedere.'
  },
  {
    question: 'È meglio scrivere per email, usare il modulo o WhatsApp?',
    answer:
      'Dipende dal tipo di materiale da trasmettere. L’importante è che la richiesta sia chiara, sintetica e già accompagnata dai documenti più utili.'
  }
];

export const metadata = buildMetadata({
  title: 'Contatti dello Studio Legale Del Monte | Roma',
  description:
    'Contatta lo Studio Legale Del Monte a Roma per un primo esame gratuito del caso, invio documenti essenziali e valutazione preliminare.',
  path: '/contatti',
  image: '/images/portrait-standing.webp',
  keywords: [
    'contatti avvocato cassazionista Roma',
    'valutazione preliminare avvocato Roma',
    'inviare documenti avvocato'
  ]
});

export default function ContattiPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          legalServiceSchema(),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Contatti', item: '/contatti' }
          ], '/contatti'),
          faqSchema(faqs)
        ]}
      />

      <PageHero
        eyebrow="Contatti"
        title="Contatta lo Studio Legale Del Monte"
        description="Il primo contatto e il primo esame dei documenti essenziali sono gratuiti. Una richiesta chiara, già orientata sull’area corretta e accompagnata da pochi allegati pertinenti, consente di capire con maggiore precisione se vi siano i presupposti per procedere."
        image="/images/portrait-standing.webp"
        imageAlt="Avv. Federica Del Monte"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contatti', item: '/contatti' }
        ]}
      />

      <section className="section">
        <div className="container prose-block">
          <p className="lead-card">
            La qualità della richiesta iniziale incide direttamente sulla qualità della valutazione.
            Non serve inviare tutto: serve inviare ciò che aiuta a capire il problema, i passaggi
            già avvenuti e i documenti realmente decisivi.
          </p>
          <p>
            Per una presentazione generale dell’organizzazione professionale è possibile consultare
            anche il{' '}
            <a href="https://www.delmontestudiolegale.it/" target="_blank" rel="noopener noreferrer">
              sito istituzionale dello Studio
            </a>
            .
          </p>

          <div className="cards-grid three service-summary-grid">
            <article className="reason-card reason-card-light">
              <h3>Quando contattare lo studio</h3>
              <ul className="check-list">
                <li>quando la questione è già abbastanza definita da poter essere letta nei suoi punti essenziali</li>
                <li>quando esistono documenti utili che aiutano a capire il fascicolo senza dispersione</li>
                <li>quando serve una valutazione prudente e tecnica prima di assumere iniziative</li>
              </ul>
            </article>
            <article className="reason-card reason-card-light">
              <h3>Che cosa aiuta davvero</h3>
              <ul className="check-list">
                <li>una sintesi breve dei fatti principali e dell’obiettivo che si vuole perseguire</li>
                <li>l’indicazione dell’area di interesse corretta, se già nota</li>
                <li>pochi documenti essenziali: sentenze, atti, referti, verbali o materiali patrimoniali</li>
              </ul>
            </article>
            <article className="reason-card reason-card-light">
              <h3>Errori da evitare</h3>
              <ul className="check-list">
                <li>inviare materiale indiscriminato, senza spiegare il punto centrale del caso</li>
                <li>omettere date, notifiche o passaggi già avvenuti quando sono rilevanti</li>
                <li>descrivere il problema in modo troppo generico, senza chiarire il danno o l’interesse concreto</li>
              </ul>
            </article>
          </div>

          <section className="content-section">
            <h2>Come funziona il primo esame del caso</h2>
            <p>
              Il primo esame è un filtro orientativo: serve a capire se il fascicolo presenti una
              base sufficiente, se manchino documenti decisivi e quale sia il percorso più coerente
              con il tipo di questione sottoposta allo studio.
            </p>
            <p>
              Anche quando la risposta è prudente o negativa, il primo contatto resta utile perché
              aiuta a chiarire subito se l’iniziativa sia sostenibile oppure se occorra prima
              mettere ordine al materiale disponibile.
            </p>
          </section>

          <section className="content-section">
            <h2>Canali di contatto e invio dei materiali</h2>
            <p>
              Modulo, email e WhatsApp possono essere tutti strumenti utili, a seconda del tipo di
              materiale da trasmettere. Ciò che conta è che la richiesta arrivi già leggibile,
              ordinata e coerente con il tema da esaminare.
            </p>
            <p>
              Quando la vicenda presenta termini stretti o documentazione clinica, giudiziaria o
              patrimoniale articolata, è particolarmente utile accompagnare i file con una
              cronologia essenziale dei fatti.
            </p>
          </section>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Domande frequenti</p>
          <h2>FAQ su primo contatto e invio documenti</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <ContactSection
        title="Recapiti, invio documenti e richiesta di valutazione preliminare"
        description="Per un primo esame gratuito è sufficiente una descrizione essenziale del problema e, se disponibili, pochi documenti realmente pertinenti. Una richiesta chiara consente allo studio di capire più rapidamente se vi siano i presupposti per procedere e quale percorso appaia più corretto."
        guidanceTitle="Come inviare il materiale"
        guidanceText="La situazione può essere descritta già via email o WhatsApp. È preferibile allegare soltanto i documenti essenziali già disponibili: sentenze, provvedimenti, referti, verbali, atti processuali o documentazione patrimoniale utile a comprendere il caso."
        showPec
        trackingLocation="contatti_page"
        note="Anche quando la valutazione sia prudente o negativa, il primo esame resta utile per chiarire se l’iniziativa abbia reale sostenibilità."
      />
    </>
  );
}

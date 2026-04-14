import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ServiceCard from '@/components/ServiceCard';
import ArticleCard from '@/components/ArticleCard';
import FaqList from '@/components/FaqList';
import ContactSection from '@/components/ContactSection';
import CallButton from '@/components/CallButton';
import HomeCookieBanner from '@/components/HomeCookieBanner';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { serviceList } from '@/lib/services';
import { articles } from '@/lib/articles';
import { getImageFocusClass } from '@/lib/imageFocus';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Avvocato Cassazionista a Roma | Studio Legale Del Monte',
  description:
    'Avvocato cassazionista a Roma per Cassazione civile e penale, successioni complesse, responsabilità medica, risarcimento danni e infortuni sul lavoro.',
  path: '/',
  image: '/images/home/hero-avvocato.webp',
  keywords: [
    'avvocato cassazionista Roma',
    'cassazione civile Roma',
    'cassazione penale Roma',
    'successioni complesse Roma',
    'responsabilità medica Roma',
    'risarcimento danni Roma'
  ]
});

const homeFaqs = [
  {
    question: 'Quando è utile contattare un avvocato cassazionista?',
    answer:
      'È utile quando occorre capire se una sentenza o un provvedimento presenti profili compatibili con il giudizio di Cassazione, o quando una controversia complessa richiede una lettura tecnica del fascicolo prima di decidere come procedere.'
  },
  {
    question: 'Lo studio assiste solo clienti di Roma?',
    answer:
      'No. Lo studio ha sede a Roma, ma nelle materie che richiedono analisi documentale, verifica dei presupposti e impostazione tecnica del caso può prestare assistenza anche in vicende di rilievo nazionale.'
  },
  {
    question: 'Quali documenti conviene inviare già dal primo contatto?',
    answer:
      'Sentenze, provvedimenti, referti, verbali, atti processuali o documenti patrimoniali essenziali aiutano a capire più rapidamente se la questione presenti basi utili per una valutazione preliminare seria.'
  },
  {
    question: 'Il primo esame del caso è gratuito?',
    answer:
      'Sì. Il primo contatto e il primo esame orientativo della documentazione essenziale sono gratuiti e servono a chiarire se vi siano davvero i presupposti per procedere.'
  },
  {
    question: 'Lo studio segue solo ricorsi per Cassazione?',
    answer:
      'La Cassazione civile e penale è l’area più distintiva, ma lo studio assiste anche in successioni complesse, impugnazione del testamento, responsabilità medica, risarcimento danni, infortuni sul lavoro e mediazione.'
  },
  {
    question: 'Che cosa succede dopo il primo contatto?',
    answer:
      'Dopo una prima lettura dei fatti e dei documenti utili, lo studio chiarisce se il caso sia sostenibile, quali verifiche siano necessarie e quale percorso appaia più corretto, anche quando la risposta debba essere prudente o negativa.'
  }
];

const homeServiceImages = {
  'cassazione-civile': '/images/home/card-cassazione-civile.webp',
  'cassazione-penale': '/images/thumb-cassazione-penale.webp',
  'responsabilita-medica': '/images/home/card-responsabilita-medica.webp',
  'risarcimento-danni': '/images/thumb-risarcimento-danni.webp',
  'risarcimento-danni-incidente-stradale': '/images/thumb-incidente-stradale.webp',
  'infortuni-sul-lavoro': '/images/thumb-infortuni-lavoro.webp',
  'successioni-complesse': '/images/thumb-successioni.webp',
  'impugnazione-testamento': '/images/home/card-successioni-testamento.webp',
  'mediazione-risoluzione-stragiudiziale': '/images/team-boardroom-wide.webp'
};

const workSteps = [
  {
    title: 'Primo contatto e materiali essenziali',
    description:
      'Il caso può essere descritto tramite modulo, email o WhatsApp, allegando i documenti che aiutano a comprendere fatti, tempi e criticità.'
  },
  {
    title: 'Valutazione dei presupposti',
    description:
      'Lo studio verifica il fascicolo per chiarire se la questione presenti basi tecniche adeguate e quale strada appaia realmente percorribile.'
  },
  {
    title: 'Indicazione del percorso più corretto',
    description:
      'Quando il caso è sostenibile vengono chiariti obiettivi, documenti da approfondire, tempi e possibili sviluppi giudiziali o stragiudiziali.'
  }
];

const authorityPoints = [
  {
    title: 'Sede a Roma, impostazione tecnica ampia',
    text:
      'Lo studio opera da Roma, ma segue anche vicende che, per natura della materia, richiedono un inquadramento non strettamente locale.'
  },
  {
    title: 'Attenzione ai casi complessi',
    text:
      'Cassazione, successioni articolate, responsabilità medica, danni alla persona e mediazione richiedono selezione, metodo e qualità documentale.'
  },
  {
    title: 'Valutazione preliminare chiara',
    text:
      'Il primo esame serve a capire se esistano davvero i presupposti per agire, evitando percorsi incerti o iniziative non sostenibili.'
  }
];

export default function HomePage() {
  const services = serviceList.filter((item) => item.slug !== 'studio');
  const featuredArticles = articles.slice(0, 4);

  return (
    <>
      <HomeCookieBanner />
      <JsonLd
        data={[
          breadcrumbSchema([{ name: 'Home', item: '/' }]),
          faqSchema(homeFaqs)
        ]}
      />

      <section className="home-hero">
        <div className="home-hero-bg">
          <Image
            src="/images/home/hero-cassazione-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="cover-image"
            priority
          />
        </div>
        <div className="container hero-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Studio legale con sede a Roma</p>
              <h1>Avvocato cassazionista a Roma per cause civili e penali complesse</h1>
              <p className="lead">
                Oltre 20 anni di esperienza nell’analisi dei casi e nella valutazione del percorso
                più corretto
              </p>
              <p className="hero-support">
                Lo studio assiste in Cassazione civile e penale, successioni complesse,
                impugnazione del testamento, responsabilità medica, risarcimento danni, infortuni
                sul lavoro e mediazione. Il primo contatto e il primo esame del caso sono gratuiti
                e servono a chiarire, con rigore e trasparenza, se vi siano davvero i presupposti
                per procedere.
              </p>

              <div className="hero-actions">
                <Link className="button button-primary button-hero" href="/contatti">
                  Richiedi una valutazione preliminare
                </Link>
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

              <p className="hero-note">
                Una descrizione chiara del problema e pochi documenti essenziali, come sentenze,
                provvedimenti, referti, verbali o atti già disponibili, rendono il primo esame più
                utile e più rapido.
              </p>
            </div>

            <div className="hero-media">
              <div className="hero-media-main hero-media-main-tall">
                <Image
                  src="/images/home/hero-avvocato.webp"
                  alt="Avv. Federica Del Monte"
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className={`cover-image ${getImageFocusClass('/images/home/hero-avvocato.webp')}`}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Perché contattare lo studio</p>
          <h2>Un’assistenza costruita su analisi, chiarezza e sostenibilità dell’azione</h2>
          <div className="reason-list">
            {authorityPoints.map((item) => (
              <article key={item.title} className="reason-card reason-card-light">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <p className="eyebrow">Aree di attività</p>
          <h2>Assistenza giudiziale e stragiudiziale nelle materie di maggiore complessità</h2>
          <p className="section-intro">
            Le aree trattate hanno una caratteristica comune: richiedono ordine documentale,
            selezione dei profili rilevanti e chiarezza sul valore effettivo dell’iniziativa. La
            sede dello studio è a Roma, ma l’attività può riguardare anche controversie che
            richiedono un esame tecnico di respiro più ampio.
          </p>
          <div className="cards-grid three">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                imageSrc={homeServiceImages[service.slug]}
              />
            ))}
          </div>
          <div className="section-cta-row">
            <Link className="button button-primary" href="/contatti">
              Sottoponi il caso allo studio
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Come lavoriamo</p>
          <h2>Un percorso chiaro dal primo contatto alla scelta del percorso più corretto</h2>
          <div className="steps-grid">
            {workSteps.map((item, index) => (
              <article key={item.title} className="step-card">
                <span className="step-number">{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-insights">
        <div className="container">
          <div className="section-head with-link">
            <div>
              <p className="eyebrow">Approfondimenti</p>
              <h2>Contenuti utili per orientarsi prima di una valutazione legale</h2>
            </div>
            <Link className="text-link" href="/approfondimenti">
              Consulta tutti gli approfondimenti
            </Link>
          </div>
          <p className="section-intro">
            Gli articoli presidiano domande frequenti sulla Cassazione, sulle successioni, sulla
            responsabilità medica e sul risarcimento danni, aiutando a distinguere i casi che
            richiedono davvero un esame tecnico.
          </p>
          <div className="cards-grid three">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft home-faq">
        <div className="container">
          <p className="eyebrow">Domande frequenti</p>
          <h2>Indicazioni iniziali su valutazione, documenti e criteri di presa in carico</h2>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <ContactSection
        title="Richiedi una valutazione preliminare"
        description="Se la questione è già definita nei suoi passaggi essenziali, puoi inviare una richiesta circostanziata e allegare la documentazione utile per il primo esame. Il primo contatto e la prima valutazione orientativa del caso sono gratuiti."
      />
    </>
  );
}

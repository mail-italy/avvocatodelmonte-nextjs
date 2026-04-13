import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ServiceCard from '@/components/ServiceCard';
import ArticleCard from '@/components/ArticleCard';
import FaqList from '@/components/FaqList';
import ContactSection from '@/components/ContactSection';
import CallButton from '@/components/CallButton';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { serviceList } from '@/lib/services';
import { articles } from '@/lib/articles';
import { getImageFocusClass } from '@/lib/imageFocus';

const homeFaqs = [
  {
    question: 'Lo studio segue soprattutto ricorsi per Cassazione?',
    answer:
      'Sì. La Cassazione civile e penale rappresenta l\'area più distintiva dello studio, accanto a responsabilità medica, danni gravi alla persona, infortuni sul lavoro e successioni complesse.'
  },
  {
    question: 'È utile inviare documenti già dal primo contatto?',
    answer:
      'Sì. Sentenze, provvedimenti, referti, verbali o documenti patrimoniali essenziali consentono una prima verifica più seria e più precisa.'
  },
  {
    question: 'Lo studio accetta qualsiasi incarico?',
    answer:
      'No. L\'impostazione è selettiva e privilegia i casi in cui la questione giuridica sia realmente sostenibile, documentata o meritevole di un approfondimento tecnico.'
  },
  {
    question: 'È possibile chiedere una valutazione anche per procedimenti fuori Roma?',
    answer:
      'Sì, soprattutto quando il lavoro richiede analisi del fascicolo, lettura tecnica della documentazione e impostazione rigorosa del caso.'
  },
  {
    question: 'Quali materie vengono trattate con maggiore continuità?',
    answer:
      'Ricorsi per Cassazione civile e penale, responsabilità medica, risarcimento danni nei casi più rilevanti, incidenti stradali gravi, infortuni sul lavoro e successioni complesse.'
  },
  {
    question: 'Quando una richiesta è davvero utile?',
    answer:
      'Quando il problema è già definito nei suoi passaggi essenziali, i tempi sono chiari e la documentazione disponibile consente un primo vaglio tecnico del caso.'
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

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://avvocatodelmonte.com/#legalservice',
  name: 'Studio Legale Del Monte',
  url: 'https://avvocatodelmonte.com',
  image: 'https://avvocatodelmonte.com/images/home/hero-avvocato.webp',
  telephone: '+39 06 97615122',
  email: 'mail@avvocatodelmonte.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Costanza Baudana Vaccolini, 5',
    postalCode: '00153',
    addressLocality: 'Roma',
    addressRegion: 'RM',
    addressCountry: 'IT'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Roma'
    },
    {
      '@type': 'Country',
      name: 'Italia'
    }
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:30'
    }
  ],
  founder: {
    '@type': 'Person',
    name: 'Avv. Federica Del Monte',
    jobTitle: 'Avvocato cassazionista'
  },
  employee: {
    '@type': 'Person',
    name: 'Avv. Federica Del Monte',
    jobTitle: 'Avvocato cassazionista'
  }
};

export default function HomePage() {
  const services = serviceList.filter((item) => item.slug !== 'studio');
  const featuredArticles = articles.slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: 'Home', item: '/' }]),
          faqSchema(homeFaqs),
          legalServiceSchema
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
              <p className="eyebrow">Avvocato cassazionista a Roma</p>
              <h1>Avvocato cassazionista a Roma con esperienza in Cassazione civile e penale</h1>
              <p className="lead">
                Oltre 20 anni di esperienza nell’analisi dei casi e nella valutazione del percorso
                più corretto
              </p>
              <p className="hero-support">
                Il primo contatto e la prima valutazione preliminare del caso sono gratuiti e
                servono a capire, con sobrietà e precisione, se vi siano davvero le condizioni per
                procedere. Lo studio segue responsabilità medica, danni gravi alla persona,
                infortuni sul lavoro e successioni complesse con assistenza su tutto il territorio
                nazionale e, nelle successioni più complesse, anche con beni all’estero.
              </p>

              <div className="hero-actions">
                <a className="button button-primary button-hero" href="/contatti">
                  Richiedi una valutazione preliminare
                </a>
                <CallButton className="button button-phone button-hero" fallbackToContact={false} />
                <a
                  className="button button-whatsapp button-hero"
                  href="https://wa.me/390697615122"
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

      <section className="section home-services">
        <div className="container">
          <p className="eyebrow">Ambiti di assistenza</p>
          <h2>Materie in cui la complessità richiede un’impostazione non standard</h2>
          <p className="section-intro">
            Le aree trattate hanno una caratteristica comune: richiedono ordine documentale,
            selezione dei profili rilevanti e chiarezza sul valore effettivo dell’iniziativa, con
            operatività su scala nazionale nei casi che impongono un esame tecnico del fascicolo.
            Lo studio privilegia richieste già circostanziate, con documenti essenziali e tempi
            chiari.
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

      <section className="section home-insights">
        <div className="container">
          <div className="section-head with-link">
            <div>
              <p className="eyebrow">Approfondimenti</p>
              <h2>Contenuti pensati per chiarire quando una questione merita davvero una valutazione legale</h2>
            </div>
            <a className="text-link" href="/approfondimenti">
              Consulta tutti gli approfondimenti
            </a>
          </div>

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
        description="Se la questione è già definita nei suoi passaggi essenziali, puoi inviare una richiesta circostanziata e allegare la documentazione utile per il primo esame."
      />
    </>
  );
}

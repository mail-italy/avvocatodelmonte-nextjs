
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, legalServiceSchema, localBusinessSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Contatti dello Studio Legale Del Monte | Roma',
  description:
    'Contatta lo Studio Legale Del Monte, con sede a Roma, per un primo esame gratuito del caso, invio documenti essenziali e valutazione preliminare.',
  path: '/contatti',
  image: '/images/portrait-standing.webp',
  keywords: [
    'contatti avvocato cassazionista Roma',
    'valutazione preliminare gratuita avvocato',
    'contatto via WhatsApp studio legale',
    'inviare documenti avvocato',
    'primo esame documenti avvocato'
  ]
});

export default function ContattiPage() {
  return (
    <>
      <JsonLd
        data={[
          legalServiceSchema(),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Contatti', item: '/contatti' }
          ])
        ]}
      />

      <PageHero
        eyebrow="Contatti"
        title="Contatta lo Studio Legale Del Monte"
        description="Il primo contatto e il primo esame dei documenti essenziali sono gratuiti. La situazione può essere descritta già via email, WhatsApp o modulo, allegando sentenze, provvedimenti, referti, verbali, atti o documentazione patrimoniale pertinente, così da capire con maggiore precisione se vi siano i presupposti per procedere."
        image="/images/portrait-standing.webp"
        imageAlt="Avv. Federica Del Monte"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contatti', item: '/contatti' }
        ]}
      />

      <ContactSection
        title="Recapiti, invio documenti e richiesta di valutazione preliminare"
        description="Per un primo esame gratuito è sufficiente una descrizione essenziale del problema e, se disponibili, pochi documenti realmente pertinenti. Una richiesta chiara consente allo studio di capire più rapidamente se vi siano i presupposti per procedere e quale percorso appaia più corretto."
        guidanceTitle="Come inviare il materiale"
        guidanceText="La situazione può essere descritta già via email o WhatsApp. È preferibile allegare soltanto i documenti essenziali già disponibili: sentenze, provvedimenti, referti, verbali, atti processuali o documentazione patrimoniale utile a comprendere il caso."
        showPec
        note="Anche quando la valutazione sia prudente o negativa, il primo esame resta utile per chiarire se l’iniziativa abbia reale sostenibilità."
      />
    </>
  );
}

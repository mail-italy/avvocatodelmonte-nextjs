
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Contatti',
  description:
    'Contatta lo Studio Legale Del Monte per una valutazione preliminare gratuita: telefono, WhatsApp, email e modulo con allegati essenziali.',
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
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Contatti', item: '/contatti' }
          ])
        ]}
      />

      <PageHero
        eyebrow="Contatti"
        title="Contatta lo studio per un primo esame del caso"
        description="Il primo contatto e il primo esame dei documenti essenziali sono gratuiti. La situazione può essere descritta già via email, WhatsApp o modulo, allegando sentenze, provvedimenti, referti, verbali, atti o documentazione patrimoniale pertinente."
        image="/images/portrait-standing.webp"
        imageAlt="Avv. Federica Del Monte"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contatti', item: '/contatti' }
        ]}
      />

      <ContactSection
        title="Recapiti, invio documenti e richiesta di valutazione preliminare"
        description="Per un primo esame gratuito è sufficiente una descrizione essenziale del problema e, se disponibili, pochi documenti realmente pertinenti. Una richiesta chiara consente allo studio di capire più rapidamente se vi siano i presupposti per procedere."
        guidanceTitle="Come inviare il materiale"
        guidanceText="La situazione può essere descritta già via email o WhatsApp. È preferibile allegare soltanto i documenti essenziali già disponibili: sentenze, provvedimenti, referti, verbali, atti processuali o documentazione patrimoniale utile a comprendere il caso."
        showPec
        note="Anche quando la valutazione sia prudente o negativa, il primo esame resta utile per chiarire se l’iniziativa abbia reale sostenibilità."
      />
    </>
  );
}


import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy',
  description: 'Informativa privacy del sito dello Studio Legale Del Monte.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container prose-block">
        <p className="eyebrow">Privacy</p>
        <h1>Informativa privacy</h1>
        <p>
          Le informazioni di questa pagina hanno funzione generale di orientamento. Prima della
          pubblicazione definitiva del sito sarà opportuno verificare il testo finale dell’informativa
          in relazione alle concrete modalità di trattamento dei dati, ai canali di contatto attivi e
          agli eventuali servizi collegati.
        </p>
        <h2>Titolare del trattamento</h2>
        <p>
          Studio Legale Del Monte, Via Costanza Baudana Vaccolini, 5 – 00153 Roma.
        </p>
        <h2>Dati raccolti tramite i moduli</h2>
        <p>
          Attraverso i moduli di contatto possono essere raccolti dati anagrafici, recapiti, area di
          interesse, messaggi inviati dall’utente e documenti allegati, limitatamente a quanto
          necessario per gestire la richiesta di contatto o la prima valutazione del caso.
        </p>
        <h2>Finalità del trattamento</h2>
        <p>
          I dati possono essere utilizzati per rispondere alle richieste ricevute, organizzare il
          primo contatto con lo studio e valutare la documentazione inviata ai fini dell’eventuale
          assistenza professionale.
        </p>
        <h2>Diritti dell’interessato</h2>
        <p>
          Resta ferma la necessità di integrare, prima della pubblicazione definitiva, il testo con
          tutte le informazioni richieste dalla normativa applicabile, inclusi tempi di conservazione,
          base giuridica, modalità di esercizio dei diritti e recapiti privacy dedicati.
        </p>
      </div>
    </section>
  );
}

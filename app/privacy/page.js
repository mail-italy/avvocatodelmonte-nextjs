import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy e cookie',
  description:
    'Informazioni generali su privacy, modulo di contatto, gestione dei dati e riferimenti istituzionali in materia di cookie.',
  path: '/privacy',
  indexable: false
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container prose-block">
        <p className="eyebrow">Privacy</p>
        <h1>Informativa privacy e note sui cookie</h1>
        <p className="lead-card">
          Questa pagina offre un quadro informativo generale sul trattamento dei dati collegato ai
          contatti con lo studio e sull’uso dei cookie. Non ha la funzione di sostituire eventuali
          integrazioni richieste in relazione ai servizi effettivamente utilizzati sul sito, ma
          aiuta a chiarire il perimetro essenziale del trattamento.
        </p>

        <section className="content-section">
          <h2>Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento è lo Studio Legale Del Monte, con sede in Via Costanza
            Baudana Vaccolini, 5, 00153 Roma.
          </p>
        </section>

        <section className="content-section">
          <h2>Dati trattati tramite modulo, email e canali di contatto</h2>
          <p>
            Attraverso i canali di contatto possono essere raccolti dati anagrafici, recapiti,
            contenuto della richiesta, area di interesse e documenti allegati, nei limiti in cui
            siano pertinenti alla gestione del primo contatto e dell’eventuale assistenza
            professionale.
          </p>
          <p>
            L’invio di documenti dovrebbe restare circoscritto a quanto realmente utile per il
            primo esame del caso, evitando materiali eccedenti o non pertinenti.
          </p>
        </section>

        <section className="content-section">
          <h2>Finalità del trattamento</h2>
          <p>
            I dati possono essere utilizzati per rispondere alle richieste ricevute, organizzare il
            primo contatto, svolgere una valutazione preliminare del fascicolo e, se del caso,
            gestire il successivo rapporto professionale.
          </p>
        </section>

        <section className="content-section">
          <h2>Cookie e riferimenti istituzionali</h2>
          <p>
            La gestione dei cookie e degli altri strumenti di tracciamento deve essere sempre letta
            alla luce delle indicazioni dell’Autorità garante. Per un orientamento istituzionale
            aggiornato possono essere consultate le{' '}
            <a
              href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876"
              target="_blank"
              rel="noopener noreferrer"
            >
              linee guida cookie
            </a>{' '}
            e le{' '}
            <a
              href="https://www.garanteprivacy.it/faq/cookie"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ cookie
            </a>{' '}
            pubblicate dal Garante per la protezione dei dati personali.
          </p>
        </section>

        <section className="content-section">
          <h2>Diritti dell’interessato</h2>
          <p>
            Restano fermi i diritti riconosciuti dalla normativa applicabile in materia di
            protezione dei dati personali. Eventuali richieste relative al trattamento dei dati
            devono essere formulate in modo circostanziato e coerente con il rapporto concretamente
            instaurato con lo studio.
          </p>
        </section>
      </div>
    </section>
  );
}

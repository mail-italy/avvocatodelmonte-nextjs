import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Privacy e cookie',
  description:
    'Informazioni generali su privacy, modulo di contatto, gestione dei dati e riferimenti istituzionali in materia di cookie.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/privacy',
            name: 'Privacy e cookie',
            description:
              'Informazioni su trattamento dei dati, modulo di contatto e riferimenti istituzionali in materia di privacy e cookie.'
          }),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: 'Privacy', item: '/privacy' }
          ], '/privacy')
        ]}
      />

      <section className="section">
        <div className="container prose-block">
          <p className="eyebrow">Privacy</p>
          <h1>Informativa privacy e note sui cookie</h1>
          <p className="lead-card">
            Questa informativa riguarda la navigazione su avvocatodelmonte.com, le richieste
            inviate allo Studio e gli strumenti facoltativi di misurazione e pubblicità.
          </p>

          <section className="content-section">
            <h2>Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento è l’Avv. Federica Del Monte, Via Costanza Baudana
              Vaccolini, 5, 00153 Roma. Per informazioni sui dati personali e per esercitare i
              tuoi diritti puoi scrivere a <a href="mailto:info@delmontestudiolegale.it">info@delmontestudiolegale.it</a>.
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
              Per il primo contatto invia una descrizione essenziale e solo allegati pertinenti.
              Evita dati di terzi non necessari; prima di trasmettere documentazione sanitaria,
              giudiziaria o particolarmente riservata, concorda con lo Studio le modalità di invio.
              Il modulo resta disponibile anche senza allegati e l’invio non costituisce
              accettazione di un incarico.
            </p>
          </section>

          <section className="content-section">
            <h2>Finalità e basi del trattamento</h2>
            <p>
              I dati possono essere utilizzati per rispondere alle richieste ricevute, organizzare
              il primo contatto, svolgere una valutazione preliminare del fascicolo e, se del caso,
              gestire il successivo rapporto professionale.
            </p>
            <p>
              La gestione della richiesta si basa sulle misure precontrattuali richieste
              dall’interessato, ai sensi dell’art. 6, par. 1, lett. b), del Regolamento (UE)
              2016/679. La sicurezza e la prevenzione degli abusi rispondono all’interesse
              legittimo a proteggere il servizio; gli eventuali obblighi di legge costituiscono
              una distinta base del trattamento. Gli strumenti facoltativi di analisi e
              pubblicità richiedono il consenso. Rifiutarli non impedisce di contattare lo Studio.
            </p>
          </section>

          <section className="content-section">
            <h2>Conservazione delle richieste senza incarico</h2>
            <p>
              Le richieste che non danno luogo a un incarico, la relativa corrispondenza e gli
              eventuali allegati sono conservati per 30 giorni dalla conclusione degli scambi
              relativi alla richiesta. Alla scadenza lo Studio provvede alla cancellazione
              manuale: non è prevista una cancellazione automatica.
            </p>
            <p>
              Questa regola non si applica ai dati confluiti in un fascicolo o relativi a un
              incarico professionale, né alle informazioni da conservare per obblighi di legge
              o specifiche esigenze documentate di accertamento, esercizio o difesa di un
              diritto, limitatamente a quanto necessario e per il tempo pertinente a tali
              esigenze. I trattamenti connessi all’incarico sono illustrati nell’ambito del
              rapporto professionale. Le preferenze del browser e i dati di misurazione
              seguono durate distinte da quelle delle richieste di contatto.
            </p>
          </section>

          <section className="content-section">
            <h2>Servizi tecnici e destinatari</h2>
            <p>
              Vercel fornisce l’hosting e l’esecuzione del modulo. Le richieste sono trasmesse
              allo Studio tramite i servizi di posta utilizzati per i suoi recapiti e possono
              essere consultate dall’Avv. Federica Del Monte e dalle persone autorizzate alla
              loro gestione. Il sito tratta anche dati tecnici, come indirizzo IP e informazioni
              sulle richieste, per funzionamento e prevenzione degli abusi.
            </p>
            <p>
              Dopo l’accettazione degli strumenti facoltativi vengono attivati, tramite
              Google Tag Manager, Google Analytics e gli strumenti Google configurati per la
              misurazione. Vercel e Google utilizzano infrastrutture internazionali: il
              trattamento può coinvolgere Paesi esterni allo Spazio economico europeo.
              Puoi chiedere allo Studio informazioni sui destinatari e sulle garanzie
              applicabili al trattamento dei tuoi dati. I collegamenti esterni a WhatsApp
              e ad altri servizi aprono ambienti soggetti alle informative dei rispettivi fornitori.
            </p>
          </section>

          <section className="content-section">
            <h2>Cookie e riferimenti istituzionali</h2>
            <p>
              Gli strumenti Google di misurazione e pubblicità sono disattivati prima della scelta
              e vengono caricati soltanto dopo «Accetta». «Rifiuta» mantiene disattivati questi
              strumenti. La mappa incorporata segue la stessa scelta; il collegamento esterno
              a Google Maps resta disponibile.
            </p>
            <p>
              Il sito considera valida la preferenza per 180 giorni; il dato nella memoria
              locale può restare fino alla sua sostituzione o alla cancellazione dei dati del sito.
              La scelta può essere cambiata in
              qualsiasi momento tramite «Preferenze cookie» nel piè di pagina. La revoca ricarica
              la pagina per interrompere gli strumenti già caricati e rimuove i cookie di misurazione
              di prima parte riconoscibili. La revoca non cancella i dati già trasmessi a terzi.
            </p>
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
              Nei casi previsti dagli artt. 15–22 del Regolamento puoi chiedere accesso,
              rettifica, cancellazione, limitazione e portabilità dei dati e opporti al
              trattamento basato sull’interesse legittimo, scrivendo a{' '}
              <a href="mailto:info@delmontestudiolegale.it">info@delmontestudiolegale.it</a>.
              Puoi revocare il consenso agli strumenti facoltativi tramite «Preferenze cookie»,
              senza pregiudicare la liceità dei trattamenti precedenti, e presentare reclamo al{' '}
              <a href="https://www.garanteprivacy.it/i-miei-diritti">Garante per la protezione dei dati personali</a>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

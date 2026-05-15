const UPDATED_AT = '2026-04-22';

function createService(service) {
  return {
    updatedAt: UPDATED_AT,
    ...service
  };
}

export const services = {
  'cassazione-civile': createService({
    slug: 'cassazione-civile',
    title: 'Cassazione civile: valutazione del ricorso e controllo di ammissibilità',
    menuTitle: 'Cassazione civile',
    label: 'Cassazione civile',
    description:
      'Assistenza nella valutazione del ricorso per Cassazione civile, con analisi della sentenza, dei motivi deducibili, dei termini e del rischio di inammissibilità.',
    excerpt:
      'Esame tecnico della decisione impugnata, selezione dei motivi e verifica dei presupposti per un ricorso di legittimità davvero sostenibile.',
    image: '/images/portrait-certificate.webp',
    thumb: '/images/thumb-cassazione-civile.webp',
    titleTag: 'Ricorso per Cassazione civile a Roma | Studio Legale Del Monte',
    metaDescription:
      'Valutazione del ricorso per Cassazione civile a Roma: analisi della sentenza, motivi ex art. 360 c.p.c., termini e profili di ammissibilità.',
    keywords: [
      'ricorso per Cassazione civile Roma',
      'avvocato cassazionista Roma',
      'art. 360 c.p.c.'
    ],
    heroEyebrow: 'Giudizio di legittimità',
    intro:
      'Il ricorso per Cassazione civile richiede una lettura diversa rispetto a un normale giudizio di merito. Non conta la sola insoddisfazione per la sentenza: occorre verificare se esistano motivi realmente deducibili, interesse concreto all’impugnazione e una base documentale che consenta di lavorare con ordine.',
    contactReasons: [
      'quando una sentenza sembra giuridicamente errata ma va distinto il merito dalla legittimità',
      'quando occorre controllare subito termini, notifiche e utilità pratica dell’impugnazione',
      'quando il caso presenta profili tecnici che meritano un vaglio selettivo prima di investire tempo e costi'
    ],
    whatIsReviewed: [
      'sentenza o ordinanza da impugnare',
      'motivi astrattamente proponibili ai sensi dell’art. 360 c.p.c.',
      'atti processuali essenziali dei gradi precedenti',
      'cronologia dei termini e dei passaggi già compiuti'
    ],
    documents: [
      'copia integrale della decisione da esaminare',
      'atti difensivi che hanno introdotto o definito le questioni decisive',
      'eventuali notifiche, comunicazioni di cancelleria e provvedimenti collegati',
      'una sintesi chiara dei punti contestati e dell’obiettivo perseguito'
    ],
    mistakes: [
      'confondere il dissenso sul merito con un vero motivo di Cassazione',
      'arrivare a ridosso della scadenza senza avere ordinato i documenti essenziali',
      'costruire motivi generici o sovraccarichi, poco leggibili e poco selettivi'
    ],
    sections: [
      {
        title: 'Quando ha davvero senso valutare il ricorso',
        paragraphs: [
          'La Cassazione civile è utile quando la sentenza presenti un problema di diritto, un vizio processuale rilevante oppure un difetto motivazionale nei limiti oggi consentiti. Il primo passaggio consiste quindi nel capire se il caso appartenga davvero alla legittimità.',
          'Una valutazione seria serve anche a escludere tempestivamente ricorsi deboli. In questa materia la prudenza tecnica è un vantaggio per il cliente, non una rinuncia.'
        ]
      },
      {
        title: 'Che cosa viene esaminato prima di scrivere il ricorso',
        paragraphs: [
          'Lo studio ricostruisce il percorso della causa partendo dalla decisione impugnata e dagli atti che incidono sui motivi proponibili. Il controllo riguarda il quadro normativo, il modo in cui le questioni sono state introdotte e la concreta struttura dell’impugnazione.',
          'Questo esame consente di verificare non solo se esista una critica difendibile, ma anche se sia possibile formularla in modo ordinato, autosufficiente e coerente con il giudizio davanti alla Suprema Corte.'
        ]
      },
      {
        title: 'Ammissibilità e utilità pratica vanno valutate insieme',
        paragraphs: [
          'Un ricorso formalmente scritto bene può restare poco utile se manca un interesse concreto o se il vantaggio atteso non giustifica l’iniziativa. Per questo i profili tecnici vengono letti insieme al risultato pratico perseguibile.',
          'La selezione iniziale riguarda quindi due domande: se il ricorso sia ammissibile e se, in concreto, valga la pena proporlo.'
        ]
      },
      {
        title: 'Primo esame documentale e impostazione del lavoro',
        paragraphs: [
          'Una documentazione ordinata permette di concentrare subito l’attenzione sui punti davvero decisivi. Nei fascicoli di Cassazione il tempo si guadagna prima di scrivere, non durante la scrittura.',
          'Per questa ragione è preferibile inviare pochi documenti essenziali, ma completi e ben identificati, invece di materiale dispersivo o ridondante.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'art. 360 c.p.c.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Aregio.decreto%3A1940-10-28%3B1443%3A1~art360%21vig=',
        note: 'Riferimento normativo utile per comprendere i motivi di ricorso ammissibili in sede civile.'
      }
    ],
    faqs: [
      {
        question: 'Quando conviene far esaminare una sentenza civile in vista della Cassazione?',
        answer:
          'Quando la decisione sembra presentare un errore di diritto, un vizio processuale rilevante o un difetto motivazionale che possa essere letto nei limiti del giudizio di legittimità.'
      },
      {
        question: 'La Cassazione civile rivede i fatti della causa?',
        answer:
          'No. La Suprema Corte non sostituisce il giudice di merito nella ricostruzione dei fatti, salvo i limiti propri dei motivi consentiti dall’ordinamento.'
      },
      {
        question: 'Quali documenti servono per una prima valutazione seria?',
        answer:
          'Servono la decisione da impugnare, gli atti essenziali dei gradi precedenti, le notifiche o comunicazioni rilevanti e una sintesi ordinata della vicenda.'
      }
    ],
    relatedServices: ['ricorso-cassazione-civile', 'avvocato-cassazionista-roma', 'successioni-complesse'],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'cassazione-civile-e-vizio-di-motivazione',
      'inammissibilita-del-ricorso-per-cassazione',
      'differenza-tra-appello-e-cassazione'
    ],
    ctaTitle: 'Quando il fascicolo è già ordinato, la valutazione è più utile',
    ctaText:
      'Se desideri un primo esame del caso, è utile inviare la decisione, gli atti essenziali e una breve sintesi dei punti che ritieni critici. Questo consente di capire più rapidamente se esistano i presupposti per procedere.'
  }),
  'cassazione-penale': createService({
    slug: 'cassazione-penale',
    title: 'Cassazione penale: selezione dei motivi e verifica dell’ammissibilità',
    menuTitle: 'Cassazione penale',
    label: 'Cassazione penale',
    description:
      'Assistenza nella valutazione del ricorso per Cassazione penale, con attenzione ai motivi deducibili, ai termini, alla struttura dell’atto e al rischio di inammissibilità.',
    excerpt:
      'Esame tecnico del provvedimento impugnato, selezione dei motivi ex art. 606 c.p.p. e valutazione dell’utilità concreta del ricorso.',
    image: '/images/portrait-smile.webp',
    thumb: '/images/thumb-cassazione-penale.webp',
    titleTag: 'Ricorso per Cassazione penale a Roma | Studio Legale Del Monte',
    metaDescription:
      'Ricorso per Cassazione penale a Roma: analisi dei motivi ex art. 606 c.p.p., controllo dei termini e verifica dei profili di ammissibilità.',
    keywords: [
      'ricorso per Cassazione penale Roma',
      'avvocato cassazionista penale Roma',
      'art. 606 c.p.p.'
    ],
    heroEyebrow: 'Impugnazione penale',
    intro:
      'Nel giudizio penale di Cassazione la qualità della selezione dei motivi è decisiva. Un ricorso che ripeta obiezioni di merito o che non distingua con precisione i limiti della legittimità rischia di indebolirsi fin dalla soglia dell’ammissibilità.',
    contactReasons: [
      'quando occorre capire se il provvedimento contenga profili realmente deducibili in Cassazione',
      'quando i termini impongono un esame rapido ma non improvvisato del fascicolo',
      'quando serve una lettura tecnica del rapporto tra motivi possibili, utilità concreta e rischio processuale'
    ],
    whatIsReviewed: [
      'sentenza o ordinanza da impugnare',
      'motivi deducibili alla luce dell’art. 606 c.p.p.',
      'atti processuali realmente necessari per leggere il provvedimento',
      'sequenza dei termini e degli adempimenti già maturati'
    ],
    documents: [
      'provvedimento integrale da esaminare',
      'atti e verbali essenziali per comprendere i passaggi contestati',
      'informazioni puntuali su notifiche e scadenze',
      'sintesi chiara del procedimento e delle priorità difensive'
    ],
    mistakes: [
      'trasformare il ricorso in una replica generica al merito della sentenza',
      'accumulare motivi non selezionati, senza gerarchia e senza precisione tecnica',
      'posticipare il contatto fino a comprimere il tempo utile per un vero esame'
    ],
    sections: [
      {
        title: 'La selezione dei motivi viene prima della scrittura',
        paragraphs: [
          'In Cassazione penale non è utile dire tutto: è utile dire bene ciò che ha un reale rilievo di legittimità. La fase più importante consiste quindi nell’individuare le censure che possano essere formulate in modo preciso, coerente e difendibile.',
          'Questo lavoro evita ricorsi ridondanti, disordinati o sovraccarichi di doglianze che finiscono per oscurare i punti forti del fascicolo.'
        ]
      },
      {
        title: 'Ammissibilità, termini e strategia difensiva',
        paragraphs: [
          'Il controllo dei termini è sempre essenziale, ma non basta da solo. Deve essere accompagnato da una verifica sostanziale dei motivi, perché l’urgenza non giustifica un’impostazione frettolosa.',
          'Lo studio valuta quindi insieme scansione temporale, qualità delle censure e interesse concreto alla proposizione del ricorso.'
        ]
      },
      {
        title: 'Che cosa viene esaminato nel primo contatto',
        paragraphs: [
          'Il primo esame serve a capire quali documenti contino davvero, quali atti vadano recuperati e se la questione possa essere letta in Cassazione con una prospettiva tecnicamente seria.',
          'L’obiettivo non è moltiplicare il materiale, ma isolare i passaggi che incidono sulla difesa.'
        ]
      },
      {
        title: 'Un ricorso utile nasce da un fascicolo leggibile',
        paragraphs: [
          'Quando il materiale iniziale è ordinato, il lavoro giuridico diventa più chiaro e più affidabile. Per questo è preferibile trasmettere subito provvedimento, atti essenziali e una cronologia sintetica ma completa.',
          'Una base documentale ben costruita consente di capire rapidamente se vi siano i presupposti per procedere e con quale taglio.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'art. 606 c.p.p.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Apresidente.repubblica%3Acodice.procedura.penale%3A1988-09-22%3B447~art606-com1-letc=',
        note: 'Riferimento normativo di base per inquadrare i motivi di ricorso proponibili in sede penale.'
      }
    ],
    faqs: [
      {
        question: 'Qual è il primo errore da evitare in un ricorso per Cassazione penale?',
        answer:
          'Confondere il giudizio di legittimità con un nuovo giudizio sul merito e riproporre in modo generico censure che non reggono in Cassazione.'
      },
      {
        question: 'I termini bastano per capire se il ricorso sia proponibile?',
        answer:
          'No. I termini sono essenziali, ma vanno letti insieme alla qualità dei motivi e all’interesse concreto all’impugnazione.'
      },
      {
        question: 'Quali documenti aiutano davvero nel primo esame?',
        answer:
          'Il provvedimento integrale, gli atti essenziali per leggere i motivi ipotizzabili e una cronologia chiara degli adempimenti già maturati.'
      }
    ],
    relatedServices: ['ricorso-cassazione-penale', 'avvocato-penalista-roma', 'avvocato-cassazionista-roma'],
    relatedArticles: [
      'motivi-di-ricorso-in-cassazione-penale',
      'ricorso-per-cassazione-penale-e-ammissibilita',
      'differenza-tra-appello-e-cassazione'
    ],
    ctaTitle: 'Il primo filtro serve a misurare sostenibilità e rischio',
    ctaText:
      'Se il provvedimento è già disponibile, conviene inviarlo insieme ai documenti essenziali e alle informazioni sui termini. Una verifica tempestiva ma ordinata consente di capire se il ricorso abbia una base difendibile.'
  }),
  'responsabilita-medica': createService({
    slug: 'responsabilita-medica',
    title: 'Responsabilità medica: analisi del caso e primo esame documentale',
    menuTitle: 'Responsabilità medica',
    label: 'Responsabilità medica',
    description:
      'Assistenza nei casi di responsabilità sanitaria per errore diagnostico, ritardo di diagnosi, errore chirurgico, consenso informato e danni da percorso di cura.',
    excerpt:
      'Valutazione documentale dei casi sanitari, con attenzione al nesso causale, alla qualità della documentazione clinica e alla sostenibilità della pretesa.',
    image: '/images/desk-signature.webp',
    thumb: '/images/thumb-responsabilita-medica.webp',
    titleTag: 'Avvocato per responsabilità medica a Roma | Studio Legale Del Monte',
    metaDescription:
      'Responsabilità medica a Roma: primo esame della documentazione clinica, verifica del nesso causale, errore diagnostico, errore chirurgico e consenso informato.',
    keywords: [
      'avvocato responsabilità medica Roma',
      'errore medico Roma',
      'Legge 24/2017'
    ],
    heroEyebrow: 'Responsabilità sanitaria',
    intro:
      'Nei casi di responsabilità medica la differenza tra un sospetto e una pretesa fondata sta quasi sempre nella qualità della ricostruzione documentale. Occorre leggere il percorso clinico, distinguere l’esito sfavorevole dall’errore rilevante e verificare se esistano elementi seri sul piano del danno e del nesso causale.',
    contactReasons: [
      'quando vi sono dubbi su diagnosi, tempi di trattamento, chirurgia o informazione al paziente',
      'quando è disponibile documentazione clinica che consente un primo controllo non generico del caso',
      'quando serve capire se la vicenda meriti un approfondimento tecnico o se manchino ancora passaggi essenziali'
    ],
    whatIsReviewed: [
      'cartella clinica, referti, lettere di dimissione e documenti successivi',
      'sequenza temporale delle decisioni sanitarie e degli accessi',
      'eventuale consenso informato e informazioni ricevute dal paziente',
      'incidenza del comportamento sanitario sul danno lamentato'
    ],
    documents: [
      'cartella clinica e principali referti diagnostici',
      'esami, lettere di dimissione, prescrizioni e certificazioni successive',
      'moduli di consenso informato, se esistenti',
      'una cronologia sintetica dei fatti e delle strutture coinvolte'
    ],
    mistakes: [
      'confondere ogni esito clinico negativo con un caso risarcibile',
      'presentare documenti incompleti o non ordinati, rendendo opaco il percorso di cura',
      'separare artificiosamente consenso informato, condotta sanitaria e danno senza leggerli insieme'
    ],
    sections: [
      {
        title: 'Il metodo conta più delle formule',
        paragraphs: [
          'La responsabilità sanitaria non si valuta per impressioni. Serve una ricostruzione che parta dai documenti, dalla sequenza degli eventi e dall’effetto concreto del comportamento sanitario sul paziente.',
          'Il primo obiettivo è capire se la vicenda possa essere letta con rigore giuridico e medico-legale, evitando aspettative costruite su basi fragili.'
        ]
      },
      {
        title: 'Che cosa viene controllato nella documentazione clinica',
        paragraphs: [
          'Lo studio legge la storia clinica nella sua progressione: sintomi, accessi, accertamenti, scelte terapeutiche, tempi di diagnosi, interventi e decorso successivo. Questo consente di individuare se esista un punto realmente critico.',
          'La sola presenza di una cartella clinica non basta: occorre comprendere che cosa la documentazione dimostri e che cosa invece lasci ancora indeterminato.'
        ]
      },
      {
        title: 'Danno, causalità e consenso informato',
        paragraphs: [
          'Nei casi sanitari il danno va letto insieme al rapporto causale e, quando rilevante, anche al profilo dell’informazione resa al paziente. Consenso informato e responsabilità della struttura o del sanitario possono convivere, ma non vanno confusi.',
          'Per questo il primo esame mira a dare ordine ai diversi piani del caso, distinguendo ciò che è documentato da ciò che richiede ulteriori approfondimenti.'
        ]
      },
      {
        title: 'Quando il primo contatto è davvero utile',
        paragraphs: [
          'Il contatto iniziale è utile quando permette di sottoporre un quadro già leggibile: pochi documenti centrali, una cronologia chiara e l’indicazione delle conseguenze subite.',
          'Una richiesta costruita in questo modo consente di capire più rapidamente se la vicenda meriti un approfondimento ulteriore e in quale direzione.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'Riferimento normativo centrale per il quadro della responsabilità sanitaria.'
      },
      {
        label: 'consenso informato e DAT',
        url: 'https://www.salute.gov.it/new/it/tema/disposizioni-anticipate-di-trattamento-dat/legge-sul-consenso-informato-e-sulle-dat',
        note: 'Fonte istituzionale utile per il profilo informativo e autodeterminativo del paziente.'
      }
    ],
    faqs: [
      {
        question: 'Quando un caso sanitario merita una valutazione legale?',
        answer:
          'Quando la documentazione clinica consente di verificare una possibile condotta rilevante, un danno concreto e un rapporto causale da approfondire con metodo.'
      },
      {
        question: 'La cartella clinica è sempre necessaria?',
        answer:
          'Nella maggior parte dei casi sì, perché è il documento che consente di ricostruire con precisione il percorso di cura e le decisioni assunte.'
      },
      {
        question: 'Il consenso informato può avere un rilievo autonomo?',
        answer:
          'Sì. In alcuni casi la qualità dell’informazione resa al paziente costituisce un profilo distinto che va valutato insieme agli altri elementi del fascicolo.'
      }
    ],
    relatedServices: ['responsabilita-medica-roma', 'errore-medico', 'risarcimento-danni-persona'],
    relatedArticles: [
      'errore-diagnostico-e-ritardo-diagnosi',
      'errore-chirurgico-quando-il-caso-va-approfondito',
      'consenso-informato-e-risarcimento',
      'errore-medico-e-documentazione-clinica'
    ],
    ctaTitle: 'La documentazione iniziale orienta tutto il lavoro successivo',
    ctaText:
      'Per un primo esame utile conviene inviare cartella clinica, referti principali, eventuali moduli di consenso informato e una cronologia essenziale dei fatti. Una base documentale ordinata aiuta a capire se il caso presenti presupposti reali.'
  }),
  'risarcimento-danni': createService({
    slug: 'risarcimento-danni',
    title: 'Risarcimento danni: responsabilità, prova e quantificazione del pregiudizio',
    menuTitle: 'Risarcimento danni',
    label: 'Risarcimento danni',
    description:
      'Assistenza nei casi di danno alla persona e responsabilità civile che richiedono una ricostruzione rigorosa di fatti, causalità, voci di danno e prova.',
    excerpt:
      'Analisi del danno, della responsabilità e della prova nei fascicoli in cui il pregiudizio ha reale consistenza e richiede una lettura tecnica ordinata.',
    image: '/images/team-selfie.webp',
    thumb: '/images/thumb-risarcimento-danni.webp',
    titleTag: 'Risarcimento danni a Roma | Studio Legale Del Monte',
    metaDescription:
      'Risarcimento danni a Roma: valutazione della responsabilità, prova del pregiudizio, danno biologico, danno patrimoniale e danni alla persona.',
    keywords: ['risarcimento danni Roma', 'danno biologico Roma', 'prova del danno'],
    heroEyebrow: 'Danni alla persona',
    intro:
      'La tutela risarcitoria diventa realmente efficace quando responsabilità, danno e prova vengono letti insieme. Nei fascicoli di danno alla persona non basta affermare di avere subito un pregiudizio: occorre dimostrare come si è prodotto, quali effetti ha generato e con quali documenti può essere sostenuto.',
    contactReasons: [
      'quando il danno è serio e la documentazione richiede una lettura coordinata',
      'quando coesistono pregiudizi personali, patrimoniali e familiari da distinguere con precisione',
      'quando serve capire se il fascicolo abbia basi sufficienti prima di avviare una richiesta articolata'
    ],
    whatIsReviewed: [
      'fatti che hanno generato il danno e profili di responsabilità',
      'documentazione sanitaria, economica o personale che prova il pregiudizio',
      'rapporto tra danno biologico, danno patrimoniale e altre voci risarcibili',
      'completezza e leggibilità del fascicolo nella prospettiva della prova'
    ],
    documents: [
      'referti, certificazioni o documenti medici relativi al danno',
      'verbali, comunicazioni o atti che aiutino a ricostruire la responsabilità',
      'documenti reddituali o patrimoniali se il pregiudizio ha inciso sul lavoro o sulle spese',
      'una sintesi chiara delle conseguenze personali e familiari già emerse'
    ],
    mistakes: [
      'mescolare tutte le voci di danno senza distinguerne natura e prova',
      'sottovalutare il peso della documentazione economica e della cronologia dei fatti',
      'presentare il caso in modo generico, senza chiarire il tipo di pregiudizio effettivamente subito'
    ],
    sections: [
      {
        title: 'Responsabilità e danno vanno provati insieme',
        paragraphs: [
          'In materia risarcitoria non basta dimostrare che un evento sia accaduto. Occorre anche collegarlo in modo ordinato al danno lamentato e spiegare quali conseguenze concrete ne siano derivate.',
          'Per questo il lavoro iniziale consiste nel mettere in relazione fatto, causalità, documenti e voci di pregiudizio.'
        ]
      },
      {
        title: 'Che cosa viene esaminato nel primo filtro',
        paragraphs: [
          'Lo studio valuta la consistenza del danno, la qualità della prova disponibile e i profili di responsabilità che sorreggono la richiesta. Nei casi complessi è decisivo capire fin dall’inizio che cosa sia documentato e che cosa richieda ulteriori riscontri.',
          'Questo filtro evita ricostruzioni approssimative e consente di delimitare con precisione la domanda.'
        ]
      },
      {
        title: 'Danno biologico, danno patrimoniale e danni riflessi',
        paragraphs: [
          'Le voci risarcitorie non sono tutte uguali. Lesioni permanenti, perdita del reddito, spese future, alterazioni della vita familiare o danno da perdita del rapporto parentale richiedono letture distinte e documenti diversi.',
          'La qualità del fascicolo dipende proprio dalla capacità di ordinare queste componenti senza sovrapporle.'
        ]
      },
      {
        title: 'Perché il primo esame deve essere già selettivo',
        paragraphs: [
          'Una richiesta ben impostata nasce da un fascicolo chiaro. Anche pochi documenti, se ben scelti, aiutano a capire se il caso abbia massa critica sufficiente.',
          'Il primo contatto è quindi utile quando consente di mettere a fuoco l’evento, le conseguenze e i principali profili probatori.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Quando conviene chiedere una valutazione sul risarcimento danni?',
        answer:
          'Quando il danno è concreto, la responsabilità non è lineare o il fascicolo presenta più voci di pregiudizio che devono essere lette con ordine.'
      },
      {
        question: 'Quali documenti aiutano di più nel primo esame?',
        answer:
          'Aiutano i documenti che provano la dinamica del fatto, le conseguenze sanitarie o economiche e la loro incidenza effettiva sulla vita della persona danneggiata.'
      },
      {
        question: 'La prova del danno è importante quanto il fatto che l’ha generato?',
        answer:
          'Sì. Un danno serio ma poco documentato rischia di essere ricostruito male; per questo responsabilità e prova vanno lette insieme.'
      }
    ],
    relatedServices: ['risarcimento-danni-persona', 'responsabilita-medica', 'infortuni-sul-lavoro'],
    relatedArticles: [
      'danno-biologico-permanente-cosa-verificare',
      'risarcimento-danni-e-prova-del-pregiudizio',
      'perdita-del-rapporto-parentale-criteri-di-valutazione'
    ],
    ctaTitle: 'Un fascicolo chiaro rende più seria la valutazione',
    ctaText:
      'Per richiedere un primo esame è utile indicare l’evento, il danno principale e i documenti già disponibili. Una ricostruzione essenziale ma ordinata consente di capire se il caso meriti approfondimento.'
  }),
  'risarcimento-danni-incidente-stradale': createService({
    slug: 'risarcimento-danni-incidente-stradale',
    title: 'Incidenti stradali gravi: ricostruzione del danno e tutela dei profili più complessi',
    menuTitle: 'Incidenti stradali gravi',
    label: 'Incidenti stradali gravi',
    description:
      'Assistenza nei casi di incidente stradale con lesioni gravi, invalidità permanente, danni patrimoniali rilevanti, decesso e danni subiti dai familiari.',
    excerpt:
      'Tutela nei sinistri di maggiore gravità, con attenzione a macrolesioni, perdita del reddito, danni ai familiari e corretta ricostruzione delle voci risarcibili.',
    image: '/images/team-meeting.webp',
    thumb: '/images/thumb-incidente-stradale.webp',
    titleTag: 'Risarcimento danni da incidente stradale grave a Roma | Studio Legale Del Monte',
    metaDescription:
      'Incidenti stradali gravi a Roma: valutazione di lesioni, invalidità permanente, danno patrimoniale, perdita del rapporto parentale e documenti utili fin dall’inizio.',
    keywords: ['incidente stradale grave Roma', 'risarcimento sinistro grave Roma', 'IVASS sinistri'],
    heroEyebrow: 'Sinistri di particolare gravità',
    intro:
      'Quando un incidente stradale produce lesioni importanti, invalidità permanente, perdita del reddito o conseguenze mortali, la gestione del fascicolo deve essere diversa da quella dei sinistri ordinari. Il punto non è solo quantificare il danno, ma ricostruirne in modo completo tutte le componenti fin dalla fase iniziale.',
    contactReasons: [
      'quando il sinistro ha provocato ricoveri, postumi permanenti o conseguenze lavorative serie',
      'quando il danno coinvolge anche i familiari, per decesso o pesanti ricadute assistenziali',
      'quando è necessario coordinare dinamica del fatto, documentazione sanitaria e profili economici'
    ],
    whatIsReviewed: [
      'verbali e ricostruzione della dinamica del sinistro',
      'documentazione medica, ricoveri, terapie e postumi permanenti',
      'danno patrimoniale, perdita o riduzione del reddito e costi assistenziali',
      'eventuali danni subiti dai familiari'
    ],
    documents: [
      'verbale, modulo CAI o altri atti utili sulla dinamica',
      'referti, cartelle cliniche, certificazioni sui postumi e sugli accessi ospedalieri',
      'documenti su reddito, lavoro, spese e necessità di assistenza',
      'elementi utili a descrivere il pregiudizio dei familiari, se presente'
    ],
    mistakes: [
      'trattare un sinistro grave come una pratica standard, senza selezionare le voci di danno rilevanti',
      'trascurare la documentazione sulle conseguenze lavorative ed economiche di lungo periodo',
      'non distinguere il danno diretto della vittima da quello subito dai congiunti'
    ],
    sections: [
      {
        title: 'Le macrolesioni cambiano il modo di leggere il caso',
        paragraphs: [
          'Nei sinistri gravi l’attenzione si sposta dalla sola dinamica alle conseguenze stabili nel tempo. Ricoveri, invalidità, terapie future e impatto sull’autonomia personale modificano radicalmente il peso del fascicolo.',
          'Per questo è essenziale raccogliere fin dall’inizio documenti idonei a descrivere non solo l’evento, ma anche il suo effetto permanente sulla persona.'
        ]
      },
      {
        title: 'Danno biologico, perdita di reddito e danni dei familiari',
        paragraphs: [
          'Le voci risarcitorie possono essere molteplici: danno biologico, sofferenza soggettiva, spese di cura, perdita o riduzione del reddito, costi assistenziali e, nei casi più gravi, danno da perdita del rapporto parentale.',
          'Ognuna di queste componenti richiede documenti propri e non può essere valutata in modo generico o indistinto.'
        ]
      },
      {
        title: 'Che cosa viene controllato nel primo esame',
        paragraphs: [
          'Lo studio legge insieme dinamica del sinistro, quadro sanitario e documentazione economica. Questo consente di capire subito quali profili siano già sostenibili e quali abbiano bisogno di ulteriori elementi.',
          'L’obiettivo è impostare una tutela che non lasci scoperte le conseguenze più rilevanti del fatto.'
        ]
      },
      {
        title: 'Perché è utile intervenire con un fascicolo già orientato',
        paragraphs: [
          'Una richiesta con documenti centrali, ben identificati e accompagnati da una breve cronologia rende il primo esame molto più concreto. Nei sinistri gravi la dispersione documentale è uno dei problemi più frequenti.',
          'Intervenire presto con un materiale ordinato aiuta a non perdere di vista le voci di danno che maturano nel tempo.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'cosa fare in caso di sinistro',
        url: 'https://www.ivass.it/consumatori/rc-auto/sinistri/index.html',
        note: 'Riferimento IVASS utile per gli adempimenti di base e la gestione iniziale del sinistro.'
      }
    ],
    faqs: [
      {
        question: 'Quando un incidente stradale richiede una tutela più strutturata?',
        answer:
          'Quando produce lesioni gravi, postumi permanenti, perdita del reddito, necessità assistenziali o danni significativi ai familiari.'
      },
      {
        question: 'Perché i documenti sanitari ed economici vanno letti insieme?',
        answer:
          'Perché nei sinistri gravi il danno personale e quello patrimoniale si influenzano a vicenda e devono essere ricostruiti in modo coordinato.'
      },
      {
        question: 'La perdita del rapporto parentale rientra in questa area?',
        answer:
          'Sì. Nei casi di decesso il danno dei congiunti richiede una valutazione specifica e distinta rispetto alle altre voci.'
      }
    ],
    relatedServices: ['risarcimento-danni-persona', 'responsabilita-medica-roma', 'errore-medico'],
    relatedArticles: [
      'cosa-fare-dopo-un-incidente-stradale-grave',
      'danno-biologico-permanente-cosa-verificare',
      'perdita-del-rapporto-parentale-criteri-di-valutazione'
    ],
    ctaTitle: 'Nei sinistri gravi il primo ordine del fascicolo fa la differenza',
    ctaText:
      'Se il caso riguarda lesioni serie, invalidità permanente o danni ai familiari, conviene inviare verbali, documentazione sanitaria e materiali economici già disponibili. Questo permette di inquadrare subito la struttura del danno.'
  }),
  'infortuni-sul-lavoro': createService({
    slug: 'infortuni-sul-lavoro',
    title: 'Infortuni sul lavoro: danno differenziale e responsabilità da verificare',
    menuTitle: 'Infortuni sul lavoro',
    label: 'Infortuni sul lavoro',
    description:
      'Assistenza nei casi di infortunio sul lavoro con postumi significativi, danno differenziale, responsabilità del datore e conseguenze economiche o personali rilevanti.',
    excerpt:
      'Valutazione dei casi di infortunio con attenzione al rapporto tra indennizzo, danno differenziale e responsabilità ulteriore.',
    image: '/images/team-boardroom.webp',
    thumb: '/images/thumb-infortuni-lavoro.webp',
    titleTag: 'Avvocato per infortuni sul lavoro a Roma | Studio Legale Del Monte',
    metaDescription:
      'Infortuni sul lavoro a Roma: verifica di danno differenziale, responsabilità del datore di lavoro, prestazioni INAIL e documenti utili per il primo esame.',
    keywords: ['infortuni sul lavoro Roma', 'danno differenziale Roma', 'prestazioni INAIL'],
    heroEyebrow: 'Tutela del lavoratore',
    intro:
      'Nei casi di infortunio sul lavoro il punto non è soltanto accertare che l’evento sia avvenuto, ma capire quali conseguenze residuino, che cosa sia già stato riconosciuto e se esistano ulteriori profili di responsabilità o di danno da approfondire.',
    contactReasons: [
      'quando l’infortunio ha lasciato postumi permanenti o importanti ricadute lavorative',
      'quando occorre distinguere tra indennizzo ricevuto e danno ulteriore eventualmente risarcibile',
      'quando la dinamica del fatto pone dubbi sulle misure di sicurezza e sulle responsabilità datoriali'
    ],
    whatIsReviewed: [
      'dinamica dell’infortunio e contesto lavorativo in cui si è verificato',
      'documentazione medica, certificazioni e accertamenti sui postumi',
      'prestazioni INAIL già ottenute o richieste',
      'conseguenze economiche, professionali e personali residue'
    ],
    documents: [
      'certificazioni mediche e documentazione clinica rilevante',
      'atti relativi all’infortunio e comunicazioni ricevute',
      'documenti sulla posizione lavorativa e sulle mansioni svolte',
      'elementi sulle conseguenze economiche e sulla riduzione della capacità lavorativa'
    ],
    mistakes: [
      'ritenere che l’indennizzo esaurisca automaticamente ogni possibile profilo di tutela',
      'non raccogliere documenti utili a descrivere il contesto di lavoro e le misure di sicurezza',
      'presentare il caso senza distinguere postumi, perdite economiche e responsabilità ulteriore'
    ],
    sections: [
      {
        title: 'Indennizzo e danno differenziale non coincidono',
        paragraphs: [
          'Uno dei passaggi più delicati consiste nel capire che cosa sia già stato coperto e che cosa, eventualmente, resti ancora da verificare. Il danno differenziale richiede una lettura tecnica dei postumi e delle conseguenze residue.',
          'Questo controllo non può essere svolto in astratto: deve partire dai documenti e dalla struttura concreta del caso.'
        ]
      },
      {
        title: 'Responsabilità del datore e contesto dell’evento',
        paragraphs: [
          'In molti fascicoli è essenziale ricostruire il contesto lavorativo, le modalità dell’infortunio, le procedure interne e i presidi di sicurezza. Solo così è possibile capire se vi siano profili ulteriori rispetto al solo piano assicurativo.',
          'La qualità di questa ricostruzione incide direttamente sulla serietà della domanda.'
        ]
      },
      {
        title: 'Postumi, capacità lavorativa e conseguenze economiche',
        paragraphs: [
          'Quando l’infortunio incide in modo stabile sulla capacità lavorativa, sull’autonomia personale o sul reddito, il fascicolo richiede un livello ulteriore di attenzione. Danno biologico, perdita economica e riflessi professionali vanno letti in modo coordinato.',
          'Una valutazione utile deve quindi distinguere con precisione ogni componente del pregiudizio.'
        ]
      },
      {
        title: 'Che cosa rende utile il primo contatto',
        paragraphs: [
          'Il primo esame è tanto più efficace quanto più il materiale iniziale consente di capire dinamica dell’evento, postumi e percorso già svolto con INAIL o con altri soggetti coinvolti.',
          'Anche pochi documenti, se pertinenti, sono preferibili a un invio dispersivo o non selezionato.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'denuncia di infortunio sul lavoro',
        url: 'https://www.inail.it/portale/assicurazione/it/Datore-di-Lavoro/Impresa-con-dipendenti-industria-artigianato-terziario-altre-attivita/denunce-infortuni-e-malattie-professionali-impresa-con-dipendenti/denuncia-comunicazione-di-infortunio-sul-lavoro-impresa-con-dipendenti.html',
        note: 'Riferimento istituzionale utile per gli adempimenti iniziali collegati all’infortunio.'
      },
      {
        label: 'prestazioni economiche INAIL',
        url: 'https://www.inail.it/portale/assicurazione/it/lassicurazione-inail/quali-sono-le-prestazioni-di-inail/prestazioni-economiche.html',
        note: 'Quadro utile per distinguere il piano indennitario da eventuali profili ulteriori di danno.'
      }
    ],
    faqs: [
      {
        question: 'Quando un infortunio sul lavoro merita un esame approfondito?',
        answer:
          'Quando ha lasciato postumi significativi, ha inciso sulla capacità lavorativa o pone dubbi sulla completezza della tutela già ottenuta.'
      },
      {
        question: 'Che cosa si intende per danno differenziale?',
        answer:
          'È il tema che impone di verificare se, rispetto a quanto già coperto sul piano indennitario, restino componenti di danno da valutare separatamente.'
      },
      {
        question: 'Quali documenti sono più utili nel primo contatto?',
        answer:
          'Sono utili certificazioni mediche, atti relativi all’evento, comunicazioni ricevute e documenti sulla posizione lavorativa e sulle conseguenze economiche.'
      }
    ],
    relatedServices: ['risarcimento-danni', 'risarcimento-danni-incidente-stradale', 'studio'],
    relatedArticles: [
      'infortunio-sul-lavoro-e-danno-differenziale',
      'responsabilita-del-datore-di-lavoro-cosa-verificare',
      'infortunio-in-itinere-quando-serve-approfondire'
    ],
    ctaTitle: 'La verifica iniziale deve distinguere ciò che è già definito da ciò che resta aperto',
    ctaText:
      'Per sottoporre il caso allo studio è utile inviare certificazioni mediche, atti relativi all’infortunio, documenti sulla posizione lavorativa e informazioni sulle prestazioni già ottenute.'
  }),
  'successioni-complesse': createService({
    slug: 'successioni-complesse',
    title: 'Successioni complesse: ricostruzione del patrimonio e gestione del conflitto ereditario',
    menuTitle: 'Successioni complesse',
    label: 'Successioni complesse',
    description:
      'Assistenza nelle successioni con immobili, conti correnti, donazioni pregresse, rapporti tra coeredi, divisione ereditaria e questioni di legittima.',
    excerpt:
      'Ricostruzione dell’asse ereditario, lettura delle donazioni e gestione dei conflitti successori che richiedono metodo e documenti ordinati.',
    image: '/images/portrait-standing.webp',
    thumb: '/images/thumb-successioni.webp',
    titleTag: 'Successioni complesse a Roma | Studio Legale Del Monte',
    metaDescription:
      'Successioni complesse a Roma: divisione ereditaria, immobili, conti correnti, donazioni pregresse e ricostruzione del patrimonio familiare.',
    keywords: ['successioni complesse Roma', 'divisione ereditaria Roma', 'donazioni pregresse successione'],
    heroEyebrow: 'Contenzioso successorio',
    intro:
      'Le successioni diventano complesse quando il patrimonio è articolato, i rapporti familiari sono conflittuali e la ricostruzione dell’asse ereditario richiede tempo, metodo e documenti selezionati. In questi casi il primo lavoro consiste nel dare ordine, prima ancora che nel litigare.',
    contactReasons: [
      'quando il patrimonio comprende immobili, conti correnti, quote o beni distribuiti in modo non immediatamente leggibile',
      'quando vi sono donazioni pregresse o contestazioni tra coeredi da ricostruire con precisione',
      'quando serve capire se convenga una divisione, una trattativa o un contenzioso più ampio'
    ],
    whatIsReviewed: [
      'composizione dell’asse ereditario e qualità dei documenti disponibili',
      'testamento, eventuali disposizioni pregresse e rapporti tra coeredi',
      'donazioni, movimentazioni patrimoniali e possibili squilibri tra aventi diritto',
      'margini per divisione, accordo o azione giudiziale'
    ],
    documents: [
      'testamento o documenti successori già disponibili',
      'visure catastali, atti immobiliari e documentazione bancaria essenziale',
      'atti di donazione o altri trasferimenti patrimoniali rilevanti',
      'elenco dei soggetti coinvolti e sintesi delle contestazioni già emerse'
    ],
    mistakes: [
      'agire senza avere ricostruito in modo serio il patrimonio da dividere o contestare',
      'trascurare il peso delle donazioni pregresse nella lettura della successione',
      'muoversi solo sul piano personale del conflitto, senza una base documentale sufficiente'
    ],
    sections: [
      {
        title: 'La ricostruzione dell’asse viene prima della strategia',
        paragraphs: [
          'Nelle successioni complesse la strategia dipende dalla qualità della ricostruzione patrimoniale. Prima di parlare di divisione, legittima o impugnazione, occorre capire quali beni esistano, come siano distribuiti e quali atti li abbiano interessati nel tempo.',
          'Questo lavoro iniziale serve a evitare azioni sbilanciate o contestazioni costruite su una base incompleta.'
        ]
      },
      {
        title: 'Immobili, conti correnti e donazioni pregresse',
        paragraphs: [
          'Le criticità maggiori emergono spesso quando il patrimonio è composto da beni eterogenei o quando esistono attribuzioni fatte in vita che incidono sugli equilibri successori. Ogni elemento va letto in relazione agli altri.',
          'Una successione apparentemente semplice può quindi richiedere un esame approfondito solo per chiarire la reale consistenza delle masse da considerare.'
        ]
      },
      {
        title: 'Divisione ereditaria, legittima e conflitto tra coeredi',
        paragraphs: [
          'Il contenzioso successorio non è un unico tema. Divisione, lesione di diritti, validità di disposizioni testamentarie e ricostruzione di donazioni pongono problemi diversi, che vanno tenuti distinti.',
          'L’obiettivo del primo esame è proprio quello di isolare il punto giuridico davvero centrale.'
        ]
      },
      {
        title: 'Perché il primo contatto deve essere ben preparato',
        paragraphs: [
          'Una richiesta con documenti mirati aiuta a comprendere subito se manchino informazioni decisive oppure se il caso sia già in una fase utile per la valutazione legale.',
          'Nelle successioni complesse il tempo si impiega bene quando serve a dare ordine al patrimonio e alle pretese, non a rincorrere documenti dispersi.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Quando una successione può essere definita complessa?',
        answer:
          'Quando il patrimonio è articolato, vi sono beni di natura diversa, donazioni pregresse, più coeredi in conflitto o dubbi seri sulla corretta distribuzione delle quote.'
      },
      {
        question: 'Le donazioni fatte in vita incidono sempre?',
        answer:
          'Non sempre allo stesso modo, ma spesso sono decisive per comprendere l’equilibrio complessivo del patrimonio e i diritti dei soggetti coinvolti.'
      },
      {
        question: 'Quali documenti conviene inviare per primi?',
        answer:
          'Conviene inviare testamento o atti successori disponibili, documenti sugli immobili e sui conti, atti di donazione e una sintesi chiara delle contestazioni in corso.'
      }
    ],
    relatedServices: ['avvocato-successioni-roma', 'divisione-ereditaria', 'lesione-legittima'],
    relatedArticles: [
      'divisione-ereditaria-cosa-fare',
      'eredita-con-immobili-e-conti-correnti',
      'successione-e-donazioni-pregresse-cosa-guardare'
    ],
    ctaTitle: 'Nelle successioni articolate la qualità dei primi documenti orienta tutta la strategia',
    ctaText:
      'Se devi sottoporre un caso successorio, conviene inviare i documenti essenziali su patrimonio, testamento, donazioni e soggetti coinvolti. Anche un materiale iniziale selezionato può chiarire subito la struttura del problema.'
  }),
  'mediazione-risoluzione-stragiudiziale': createService({
    slug: 'mediazione-risoluzione-stragiudiziale',
    title: 'Mediazione e risoluzione stragiudiziale: negoziare senza indebolire la posizione',
    menuTitle: 'Mediazione',
    label: 'Mediazione e risoluzione stragiudiziale',
    description:
      'Assistenza nelle mediazioni e nelle trattative stragiudiziali che richiedono impostazione tecnica, ordine documentale e tutela rigorosa della posizione del cliente.',
    excerpt:
      'Gestione tecnica delle trattative e delle mediazioni quando la composizione del conflitto può essere utile ma deve poggiare su una posizione ben costruita.',
    image: '/images/desk-signature-wide.webp',
    thumb: '/images/thumb-risarcimento-danni.webp',
    titleTag: 'Mediazione e risoluzione stragiudiziale a Roma | Studio Legale Del Monte',
    metaDescription:
      'Mediazione e risoluzione stragiudiziale a Roma: valutazione dei margini negoziali, organizzazione del fascicolo e tutela della posizione prima del giudizio.',
    keywords: ['mediazione civile Roma', 'risoluzione stragiudiziale Roma', 'organismi di mediazione'],
    heroEyebrow: 'Composizione del conflitto',
    intro:
      'La via stragiudiziale è utile solo quando tutela davvero l’interesse del cliente. Per questo la mediazione non viene trattata come un passaggio formale, ma come una sede in cui la qualità del fascicolo, dei documenti e della strategia negoziale resta decisiva.',
    contactReasons: [
      'quando esistono margini concreti di composizione ma serve una posizione tecnica ben definita',
      'quando la trattativa deve essere impostata senza rinunciare alla forza del fascicolo',
      'quando occorre valutare se la mediazione sia davvero utile o soltanto un passaggio apparente'
    ],
    whatIsReviewed: [
      'documenti che sostengono la pretesa o la difesa',
      'sequenza dei fatti e iniziative già assunte dalle parti',
      'margini effettivi di accordo e rischi del mancato accordo',
      'coerenza tra strategia stragiudiziale e tutela eventualmente successiva'
    ],
    documents: [
      'contratti, diffide, corrispondenza e atti già scambiati',
      'documenti che provano i fatti o la pretesa economica',
      'eventuali convocazioni, verbali o scadenze già fissate',
      'una sintesi chiara del risultato che si intende perseguire'
    ],
    mistakes: [
      'iniziare la trattativa senza avere delimitato bene fatti, prove e obiettivi',
      'confondere la disponibilità al dialogo con una posizione negoziale debole o generica',
      'non valutare in anticipo quale tutela resti praticabile se la mediazione fallisce'
    ],
    sections: [
      {
        title: 'La mediazione è utile quando la posizione è leggibile',
        paragraphs: [
          'Una buona mediazione nasce da una posizione chiara, documentata e sostenibile. Senza questi presupposti il confronto rischia di diventare solo un passaggio dilatorio o confuso.',
          'Per questo il lavoro iniziale serve a capire se esistano margini reali di definizione e quali punti debbano restare non negoziabili.'
        ]
      },
      {
        title: 'Preparare il fascicolo prima di aprire il confronto',
        paragraphs: [
          'Lo studio organizza i documenti, chiarisce il perimetro della controversia e valuta il rapporto tra obiettivo negoziale e rischio del contenzioso. Questa fase rende la trattativa più seria e più leggibile.',
          'Una mediazione ben impostata non nasce da concessioni casuali, ma da una gerarchia precisa di interessi e argomenti.'
        ]
      },
      {
        title: 'Quando la soluzione stragiudiziale è davvero coerente',
        paragraphs: [
          'Non ogni controversia deve essere spinta verso il giudizio, ma nemmeno ogni mediazione è utile. Occorre verificare se il percorso stragiudiziale protegga il cliente in tempi, contenuti e affidabilità del risultato.',
          'La valutazione serve proprio a distinguere i casi in cui la composizione è una scelta strategica da quelli in cui rischia di essere un indebolimento.'
        ]
      },
      {
        title: 'Documenti e obiettivi da chiarire nel primo esame',
        paragraphs: [
          'Una richiesta efficace espone i fatti, allega i documenti essenziali e chiarisce quale risultato concreto si voglia ottenere. Questo consente di capire se il caso abbia spazio per una trattativa seria.',
          'Quando la controparte è già assistita o la mediazione è imminente, la chiarezza iniziale diventa ancora più importante.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'mediazione civile e commerciale',
        url: 'https://www.giustizia.it/giustizia/it/mg_14_3_1.page?contentId=GLO94577&previsiousPage=mg_14_7',
        note: 'Quadro istituzionale di riferimento sul funzionamento della mediazione civile e commerciale.'
      }
    ],
    faqs: [
      {
        question: 'Quando conviene tentare una mediazione?',
        answer:
          'Quando esistono margini concreti di accordo e una definizione negoziale può proteggere l’interesse del cliente senza indebolire la posizione sostanziale.'
      },
      {
        question: 'Perché la trattativa richiede comunque rigore tecnico?',
        answer:
          'Perché una mediazione efficace si fonda su fatti, prove e obiettivi ben definiti, non su concessioni improvvisate.'
      },
      {
        question: 'Quali documenti servono per capire se la via stragiudiziale sia utile?',
        answer:
          'Servono i documenti principali del rapporto, le comunicazioni già scambiate, eventuali diffide o convocazioni e una sintesi del risultato che si intende ottenere.'
      }
    ],
    relatedServices: ['successioni-complesse', 'impugnazione-testamento', 'risarcimento-danni'],
    relatedArticles: ['divisione-ereditaria-cosa-fare', 'risarcimento-danni-e-prova-del-pregiudizio'],
    ctaTitle: 'La mediazione funziona meglio quando il fascicolo è già pronto al confronto',
    ctaText:
      'Per valutare una trattativa o una mediazione è utile inviare i documenti chiave, le comunicazioni già intercorse e l’obiettivo concreto che si intende perseguire. Questo permette di capire se la strada stragiudiziale sia davvero coerente.'
  }),
  'impugnazione-testamento': createService({
    slug: 'impugnazione-testamento',
    title: 'Impugnazione del testamento: validità dell’atto, capacità e lesione dei diritti ereditari',
    menuTitle: 'Impugnazione del testamento',
    label: 'Impugnazione del testamento',
    description:
      'Assistenza nei casi in cui il testamento presenti dubbi di validità, genuinità, capacità del testatore o lesione di diritti successori che richiedono una verifica rigorosa.',
    excerpt:
      'Valutazione del testamento e della documentazione successoria nei conflitti in cui occorre distinguere dubbi giuridicamente seri da contestazioni solo emotive.',
    image: '/images/portrait-standing.webp',
    thumb: '/images/thumb-successioni.webp',
    titleTag: 'Impugnazione del testamento a Roma | Studio Legale Del Monte',
    metaDescription:
      'Impugnazione del testamento a Roma: verifica di validità, genuinità, capacità del testatore, legittima e documenti utili per la prima analisi.',
    keywords: ['impugnazione testamento Roma', 'testamento olografo Roma', 'dichiarazione di successione'],
    heroEyebrow: 'Contenzioso testamentario',
    intro:
      'L’impugnazione del testamento richiede cautela, selezione e documenti affidabili. Il conflitto familiare da solo non basta: occorre capire se il dubbio riguardi davvero la validità dell’atto, la capacità del testatore, la genuinità del documento o l’equilibrio dei diritti successori.',
    contactReasons: [
      'quando il testamento presenta dubbi sulla sua validità o autenticità',
      'quando vi sono elementi sulla capacità del testatore o sul contesto in cui l’atto è stato formato',
      'quando la vicenda si intreccia con donazioni, quote di legittima o patrimonio non ancora ricostruito'
    ],
    whatIsReviewed: [
      'testamento disponibile e modalità della sua formazione',
      'situazione patrimoniale e familiare rilevante per i diritti degli eredi',
      'eventuali donazioni o attribuzioni fatte in vita',
      'documenti che aiutano a qualificare i dubbi come reali profili di invalidità o lesione'
    ],
    documents: [
      'testamento o copia disponibile',
      'documenti sugli eredi e sul patrimonio già individuato',
      'atti di donazione o altri trasferimenti rilevanti',
      'una sintesi del contesto familiare e delle principali contestazioni'
    ],
    mistakes: [
      'confondere un dissenso familiare con un vero motivo di impugnazione',
      'trascurare la ricostruzione patrimoniale e la posizione dei legittimari',
      'agire senza avere raccolto l’atto e i documenti che spiegano il contesto della successione'
    ],
    sections: [
      {
        title: 'Non ogni testamento contestato è un testamento impugnabile',
        paragraphs: [
          'Le controversie testamentarie hanno spesso un forte contenuto personale, ma la valutazione deve restare giuridica. Occorre distinguere il sospetto generico dal profilo che possa reggere su validità, capacità, genuinità o lesione dei diritti successori.',
          'Questo primo filtro evita iniziative emotive e consente di focalizzare i casi in cui la contestazione abbia una base concreta.'
        ]
      },
      {
        title: 'Capacità, forma e contesto dell’atto',
        paragraphs: [
          'Il testamento va letto nel suo contenuto e nel suo contesto: quando è stato redatto, in quale situazione personale del testatore, con quali effetti sul patrimonio e sui soggetti coinvolti.',
          'La verifica tecnica riguarda quindi l’atto in sé, ma anche la rete di documenti che ne chiarisce la reale portata.'
        ]
      },
      {
        title: 'Rapporto con legittima e donazioni pregresse',
        paragraphs: [
          'Spesso l’impugnazione del testamento si intreccia con la ricostruzione delle quote riservate, delle donazioni fatte in vita e dell’asse effettivamente esistente. Per questo non può essere valutata isolatamente.',
          'Una buona analisi tiene insieme validità dell’atto e quadro patrimoniale complessivo.'
        ]
      },
      {
        title: 'Perché il primo esame deve essere selettivo',
        paragraphs: [
          'Il primo contatto è utile quando consente di vedere l’atto, i documenti essenziali e il perimetro del patrimonio. Questo permette di capire se manchino dati decisivi oppure se il caso sia già maturo per una valutazione legale seria.',
          'Nei contenziosi testamentari la chiarezza iniziale protegge sia la strategia sia i tempi del lavoro.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/cosa-dichiarazioni-successione',
        note: 'Riferimento istituzionale utile per il quadro degli adempimenti successori e della documentazione di base.'
      }
    ],
    faqs: [
      {
        question: 'Quando si può parlare seriamente di impugnazione del testamento?',
        answer:
          'Quando emergono elementi concreti su validità, genuinità, capacità del testatore o lesione di diritti successori che meritano una verifica documentale rigorosa.'
      },
      {
        question: 'Il testamento olografo può essere contestato?',
        answer:
          'Sì, ma la contestazione deve poggiare su profili seri e documentabili, non soltanto sul conflitto tra familiari.'
      },
      {
        question: 'Perché servono anche documenti sul patrimonio?',
        answer:
          'Perché la valutazione del testamento si intreccia spesso con la ricostruzione dell’asse ereditario, delle donazioni e dei diritti dei legittimari.'
      }
    ],
    relatedServices: ['impugnazione-testamento-roma', 'lesione-legittima', 'avvocato-successioni-roma'],
    relatedArticles: [
      'impugnazione-del-testamento-quando-ha-senso',
      'successione-e-donazioni-pregresse-cosa-guardare',
      'eredita-con-immobili-e-conti-correnti'
    ],
    ctaTitle: 'Nei conflitti testamentari il primo ordine del materiale è decisivo',
    ctaText:
      'Per una valutazione preliminare conviene inviare il testamento disponibile, una sintesi della situazione familiare e patrimoniale e gli atti che aiutino a capire il contesto in cui l’atto è stato formato.'
  }),
  studio: createService({
    slug: 'studio',
    title: 'Studio Legale Del Monte: profilo, metodo e criteri di lavoro',
    menuTitle: 'Studio',
    label: 'Studio',
    description:
      'Profilo dello Studio Legale Del Monte: impostazione selettiva, analisi tecnica del fascicolo e focus su Cassazione, responsabilità medica, risarcimento danni, successioni complesse e mediazione.',
    excerpt:
      'Metodo di lavoro, aree di attività e criteri con cui lo studio valuta l’utilità concreta di un incarico.',
    image: '/images/team-boardroom-wide.webp',
    thumb: '/images/team-boardroom.webp',
    titleTag: 'Studio Legale Del Monte | Avv. Federica Del Monte a Roma',
    metaDescription:
      'Studio Legale Del Monte a Roma: profilo dell’Avv. Federica Del Monte, metodo di lavoro, criteri di selezione dei casi e aree di attività principali.',
    keywords: ['Studio Legale Del Monte', 'Avv. Federica Del Monte', 'Albo Speciale Cassazionisti'],
    heroEyebrow: 'Profilo e metodo',
    intro:
      'Lo studio lavora con un criterio preciso: affrontare fascicoli in cui la qualità dell’analisi giuridica incida davvero sul risultato. Questo significa selezionare i casi, chiarire i presupposti dell’azione e impostare il lavoro su documenti leggibili, obiettivi realistici e comunicazione trasparente con il cliente.',
    sections: [
      {
        title: 'Un metodo fondato su selezione e chiarezza',
        paragraphs: [
          'La valutazione preliminare non è un passaggio formale. Serve a capire se il caso presenti davvero una base tecnica sufficiente, quali documenti contino e quale percorso sia ragionevole intraprendere.',
          'Questa impostazione consente di evitare incarichi costruiti su aspettative fragili o su una documentazione ancora troppo opaca.'
        ]
      },
      {
        title: 'Aree in cui il rigore del fascicolo è decisivo',
        paragraphs: [
          'Cassazione civile e penale, responsabilità medica, danni gravi, infortuni sul lavoro, successioni complesse e impugnazione del testamento sono materie diverse, ma hanno un punto in comune: richiedono metodo, selezione e capacità di lettura documentale.',
          'Lo studio concentra il proprio lavoro proprio in queste aree, privilegiando fascicoli in cui l’analisi giuridica faccia realmente la differenza.'
        ]
      },
      {
        title: 'Primo contatto e presa in carico del caso',
        paragraphs: [
          'Il primo contatto è utile quando consente di capire subito il nucleo della questione, i documenti disponibili e l’obiettivo perseguito. Anche una risposta prudente o negativa può essere professionalmente utile se evita un percorso sbagliato.',
          'La chiarezza operativa nei passaggi iniziali è parte del servizio, non un’aggiunta eventuale.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'Albo Speciale Cassazionisti',
        url: 'https://www.consiglionazionaleforense.it/albo-speciale-cassazionisti',
        note: 'Riferimento istituzionale coerente con il posizionamento dello studio nella materia della Cassazione.'
      }
    ],
    faqs: [
      {
        question: 'Qual è il criterio con cui lo studio valuta i casi?',
        answer:
          'Lo studio privilegia i fascicoli in cui il lavoro tecnico, la qualità dei documenti e la chiarezza strategica siano realmente decisive per la tutela.'
      },
      {
        question: 'Lo studio segue solo procedimenti di Roma?',
        answer:
          'No. La sede è a Roma, ma molte attività riguardano procedimenti o patrimoni che richiedono un’impostazione nazionale e un lavoro documentale non strettamente locale.'
      },
      {
        question: 'È possibile inviare documenti già nel primo contatto?',
        answer:
          'Sì. Una selezione ordinata dei documenti essenziali consente di capire più rapidamente se esistano i presupposti per procedere.'
      }
    ],
    relatedServices: ['avvocato-cassazionista-roma', 'responsabilita-medica-roma', 'avvocato-successioni-roma'],
    relatedArticles: [
      'differenza-tra-appello-e-cassazione',
      'responsabilita-medica-e-primo-contatto-con-lo-studio',
      'divisione-ereditaria-cosa-fare'
    ]
  })
};

export const serviceList = Object.values(services);

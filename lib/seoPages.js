const UPDATED_AT = '2026-05-15';

function createSeoPage(page) {
  return {
    updatedAt: UPDATED_AT,
    showInHeader: false,
    showOnHome: false,
    ...page
  };
}

export const seoPages = {
  'avvocato-cassazionista-roma': createSeoPage({
    slug: 'avvocato-cassazionista-roma',
    title: 'Avvocato cassazionista a Roma: valutazione tecnica di ricorsi civili e penali',
    menuTitle: 'Avvocato cassazionista Roma',
    label: 'Avvocato cassazionista Roma',
    description:
      'Assistenza a Roma per verificare sentenze e provvedimenti da portare in Cassazione, con analisi dei motivi, dei termini e del rischio di inammissibilità.',
    excerpt:
      'Percorso dedicato a chi cerca a Roma un avvocato cassazionista per valutare con rigore la sostenibilità di un ricorso civile o penale.',
    image: '/images/portrait-standing.webp',
    thumb: '/images/thumb-cassazione-civile.webp',
    titleTag: 'Valutazione del ricorso a Roma | Avv. Federica Del Monte',
    metaDescription:
      'Avvocato cassazionista a Roma per Cassazione civile e penale: primo esame della sentenza, verifica dei motivi proponibili e valutazione dell’ammissibilità.',
    keywords: [
      'avvocato cassazionista Roma',
      'studio legale cassazione Roma',
      'ricorso cassazione Roma'
    ],
    heroEyebrow: 'Cassazione a Roma',
    intro:
      'Chi cerca un avvocato cassazionista a Roma ha spesso un’esigenza molto precisa: capire se una sentenza o un provvedimento presentino davvero un problema di legittimità e se abbia senso investire tempo e risorse in un ricorso. La risposta non dipende dalla sola insoddisfazione per l’esito del giudizio, ma da una lettura tecnica del fascicolo.',
    contactReasons: [
      'quando serve distinguere tra errore di merito ed errore di diritto',
      'quando i termini sono stretti e occorre verificare subito il perimetro del ricorso',
      'quando è utile un primo filtro serio prima di assumere iniziative processuali'
    ],
    whatIsReviewed: [
      'sentenza o ordinanza da impugnare',
      'motivi civili o penali astrattamente deducibili',
      'atti essenziali dei gradi precedenti',
      'convenienza pratica del ricorso rispetto al risultato perseguibile'
    ],
    documents: [
      'decisione integrale da esaminare',
      'atti essenziali del procedimento',
      'notifiche e date rilevanti',
      'breve sintesi dei punti contestati'
    ],
    mistakes: [
      'confondere la Cassazione con un nuovo grado di merito',
      'arrivare senza ordine documentale quando i termini sono già in scadenza',
      'impostare il ricorso sulla quantità delle doglianze invece che sulla loro qualità'
    ],
    sections: [
      {
        title: 'Quando rivolgersi a un avvocato cassazionista',
        paragraphs: [
          'Il confronto è utile quando la decisione sembra presentare un errore di diritto, un vizio processuale rilevante oppure un problema di motivazione compatibile con i limiti del giudizio di legittimità.',
          'Un primo esame serio serve anche a escludere tempestivamente iniziative deboli. In Cassazione, la prudenza tecnica tutela il cliente quanto l’azione processuale.'
        ]
      },
      {
        title: 'Come si svolge la valutazione iniziale',
        paragraphs: [
          'Lo studio ricostruisce la vicenda partendo dal provvedimento impugnato, dagli atti che incidono sui motivi proponibili e dalla cronologia dei termini. Il lavoro non consiste nel “riscrivere” il merito, ma nel capire se esista una censura di legittimità realmente sostenibile.',
          'Questa fase chiarisce subito se il fascicolo richieda un ricorso civile, penale o se invece il problema non appartenga alla Cassazione.'
        ]
      },
      {
        title: 'Primo esame della posizione e documenti utili',
        paragraphs: [
          'La qualità del materiale iniziale incide direttamente sulla qualità della risposta. Conviene inviare pochi documenti essenziali, ben identificati, e una sintesi lineare dei fatti.',
          'Quando il fascicolo è leggibile, la valutazione dei motivi e del rischio di inammissibilità diventa più rapida e più affidabile.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'funzioni della Corte di Cassazione',
        url: 'https://www.cortedicassazione.it/it/le_funzioni_della_corte.page',
        note: 'Fonte istituzionale utile per collocare correttamente il ruolo del giudizio di legittimità.'
      }
    ],
    faqs: [
      {
        question: 'Un avvocato cassazionista si occupa solo di ricorsi già decisi?',
        answer:
          'No. Il primo lavoro consiste proprio nel verificare se il caso appartenga davvero alla Cassazione e se vi siano motivi proponibili.'
      },
      {
        question: 'Conta di più la rapidità o la completezza dei documenti?',
        answer:
          'Entrambe, ma la rapidità è utile solo se accompagnata da documenti essenziali leggibili e da una cronologia chiara.'
      },
      {
        question: 'Si possono valutare sia questioni civili sia penali?',
        answer:
          'Sì. Lo studio valuta fascicoli di Cassazione civile e penale distinguendo i rispettivi presupposti e limiti.'
      }
    ],
    relatedServices: ['cassazione-civile', 'cassazione-penale', 'ricorso-cassazione-civile'],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'ricorso-per-cassazione-penale-e-ammissibilita',
      'differenza-tra-appello-e-cassazione'
    ],
    ctaTitle: 'Primo esame della sentenza e dei motivi proponibili',
    ctaText:
      'Se desideri una valutazione iniziale, conviene inviare la decisione, i documenti essenziali e le informazioni sui termini. Questo aiuta a capire se il ricorso abbia una base tecnica seria.'
  }),
  'ricorso-cassazione-civile': createSeoPage({
    slug: 'ricorso-cassazione-civile',
    title: 'Ricorso per Cassazione civile: controllo dei motivi e dei termini',
    menuTitle: 'Ricorso Cassazione civile',
    label: 'Ricorso Cassazione civile',
    description:
      'Pagina dedicata alla valutazione del ricorso per Cassazione civile: motivi ex art. 360 c.p.c., controllo dei termini e impostazione del fascicolo.',
    excerpt:
      'Percorso focalizzato sul ricorso per Cassazione civile, con attenzione alla struttura dei motivi e all’utilità concreta dell’impugnazione.',
    image: '/images/portrait-certificate.webp',
    thumb: '/images/thumb-cassazione-civile.webp',
    titleTag: 'Motivi e ammissibilità del ricorso civile | Studio Del Monte',
    metaDescription:
      'Ricorso per Cassazione civile a Roma: analisi della sentenza, motivi ex art. 360 c.p.c., verifica dei termini e rischio di inammissibilità.',
    keywords: [
      'ricorso cassazione civile Roma',
      'art 360 cpc Roma',
      'avvocato cassazione civile Roma'
    ],
    heroEyebrow: 'Ricorso civile',
    intro:
      'Il ricorso per Cassazione civile richiede un’impostazione selettiva. Prima di scrivere occorre capire se la sentenza presenti un errore di diritto, un vizio processuale o un difetto motivazionale compatibile con il giudizio di legittimità e se l’impugnazione abbia un’utilità concreta.',
    contactReasons: [
      'quando serve controllare se la sentenza presenti un vero motivo di legittimità',
      'quando i termini impongono una verifica tempestiva ma non improvvisata',
      'quando si vuole evitare un ricorso generico o poco sostenibile'
    ],
    whatIsReviewed: [
      'sentenza o ordinanza civile da impugnare',
      'motivi ex art. 360 c.p.c. effettivamente configurabili',
      'atti processuali essenziali dei gradi precedenti',
      'interesse concreto all’impugnazione'
    ],
    documents: [
      'decisione completa',
      'atti introduttivi e difese centrali dei gradi precedenti',
      'date di comunicazione o notificazione',
      'sintesi dei punti ritenuti erronei'
    ],
    mistakes: [
      'trasformare il ricorso in una nuova discussione del merito',
      'costruire motivi troppo numerosi e poco gerarchizzati',
      'trascurare il rapporto tra ammissibilità e utilità pratica'
    ],
    sections: [
      {
        title: 'Che cosa conta davvero nel ricorso civile',
        paragraphs: [
          'In Cassazione civile non basta sostenere che la sentenza sia ingiusta. Occorre isolare il passaggio giuridico o processuale realmente censurabile nei limiti consentiti dall’ordinamento.',
          'Il primo filtro serve proprio a capire se il caso appartenga alla legittimità e se il motivo sia formulabile in modo chiaro e autosufficiente.'
        ]
      },
      {
        title: 'Termini, atti e rischio di inammissibilità',
        paragraphs: [
          'Il controllo dei termini va letto insieme alla struttura del fascicolo. Un ricorso tempestivo ma impostato su motivi deboli resta comunque esposto al rischio di inammissibilità.',
          'Per questo la verifica iniziale considera insieme tempo disponibile, atti indispensabili e qualità della censura.'
        ]
      },
      {
        title: 'Come preparare il primo contatto',
        paragraphs: [
          'È utile inviare la decisione da impugnare, gli atti essenziali e una sintesi ordinata dei punti contestati. Nei fascicoli civili, la chiarezza iniziale fa risparmiare tempo e rende la risposta più utile.',
          'Anche una valutazione negativa o prudente è un esito professionale utile quando evita un ricorso costruito su basi fragili.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'art. 360 c.p.c.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Aregio.decreto%3A1940-10-28%3B1443%3A1~art360%21vig=',
        note: 'Riferimento normativo di base per inquadrare i motivi di ricorso in Cassazione civile.'
      }
    ],
    faqs: [
      {
        question: 'Qual è il primo controllo da fare su una sentenza civile?',
        answer:
          'Occorre verificare se il problema riguardi davvero la legittimità e se esista un motivo proponibile ai sensi dell’art. 360 c.p.c.'
      },
      {
        question: 'Il termine basta a capire se conviene ricorrere?',
        answer:
          'No. Il termine è essenziale, ma va letto insieme alla qualità dei motivi e all’utilità concreta dell’impugnazione.'
      },
      {
        question: 'Conviene inviare tutti gli atti del processo?',
        answer:
          'No. È preferibile iniziare con la decisione e con gli atti davvero rilevanti per i motivi ipotizzabili.'
      }
    ],
    relatedServices: ['cassazione-civile', 'avvocato-cassazionista-roma', 'cassazione-penale'],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'cassazione-civile-e-vizio-di-motivazione',
      'inammissibilita-del-ricorso-per-cassazione'
    ],
    ctaTitle: 'Valutazione preliminare del ricorso civile',
    ctaText:
      'Per una verifica iniziale del ricorso per Cassazione civile conviene inviare la sentenza, gli atti essenziali e le informazioni sui termini. Una base documentale ordinata aiuta a misurare sostenibilità e rischio.'
  }),
  'ricorso-cassazione-penale': createSeoPage({
    slug: 'ricorso-cassazione-penale',
    title: 'Ricorso per Cassazione penale: selezione dei motivi e verifica di ammissibilità',
    menuTitle: 'Ricorso Cassazione penale',
    label: 'Ricorso Cassazione penale',
    description:
      'Valutazione del ricorso per Cassazione penale a Roma: motivi ex art. 606 c.p.p., termini, struttura dell’atto e utilità concreta dell’impugnazione.',
    excerpt:
      'Pagina dedicata ai ricorsi per Cassazione penale, con focus su selezione dei motivi, leggibilità del fascicolo e rischio di inammissibilità.',
    image: '/images/portrait-smile.webp',
    thumb: '/images/thumb-cassazione-penale.webp',
    titleTag: 'Motivi e ammissibilità del ricorso penale | Studio Del Monte',
    metaDescription:
      'Ricorso per Cassazione penale a Roma: analisi dei motivi ex art. 606 c.p.p., controllo dei termini e verifica dell’ammissibilità.',
    keywords: [
      'ricorso cassazione penale Roma',
      'art 606 cpp Roma',
      'avvocato cassazione penale Roma'
    ],
    heroEyebrow: 'Ricorso penale',
    intro:
      'Nel ricorso per Cassazione penale la selezione dei motivi è decisiva. Un atto troppo ampio, generico o orientato al merito finisce spesso per indebolire le censure più serie. Per questo il lavoro utile inizia prima della redazione del ricorso.',
    contactReasons: [
      'quando occorre distinguere i motivi di legittimità dalle obiezioni di merito',
      'quando serve controllare in tempi rapidi provvedimento, atti e notifiche',
      'quando si vuole capire se il ricorso abbia reale sostenibilità difensiva'
    ],
    whatIsReviewed: [
      'sentenza o ordinanza penale da impugnare',
      'motivi ex art. 606 c.p.p. effettivamente ipotizzabili',
      'atti processuali essenziali e verbali rilevanti',
      'cronologia dei termini e degli adempimenti maturati'
    ],
    documents: [
      'provvedimento integrale da esaminare',
      'atti o verbali indispensabili per i motivi ipotizzati',
      'informazioni precise su scadenze e notifiche',
      'sintesi del procedimento e dell’obiettivo difensivo'
    ],
    mistakes: [
      'riproporre in Cassazione questioni di puro merito',
      'moltiplicare motivi ridondanti senza gerarchia',
      'arrivare al primo contatto senza distinguere urgenza e rilevanza'
    ],
    sections: [
      {
        title: 'Perché la selezione viene prima della scrittura',
        paragraphs: [
          'La Cassazione penale richiede motivi precisi e coerenti con il giudizio di legittimità. Un ricorso efficace non coincide con un ricorso lungo, ma con un atto costruito sui punti realmente difendibili.',
          'Il primo esame serve a separare il rilevante dal ridondante e a mettere ordine nel fascicolo.'
        ]
      },
      {
        title: 'Termini e ammissibilità vanno letti insieme',
        paragraphs: [
          'Il rispetto del termine non è sufficiente se la struttura del ricorso resta generica o se i motivi non sono selezionati con rigore. Anche nel penale l’ammissibilità dipende dalla qualità dell’impostazione.',
          'Per questo la verifica iniziale considera insieme tempi, contenuto del provvedimento e sostenibilità delle censure.'
        ]
      },
      {
        title: 'Quando il primo esame è davvero utile',
        paragraphs: [
          'Il contatto iniziale funziona meglio quando arrivano provvedimento, atti essenziali e una cronologia sintetica ma precisa. Questa base consente di capire rapidamente se il ricorso abbia un nucleo tecnico serio.',
          'Nei fascicoli penali, una valutazione prudente in tempo è spesso più utile di una iniziativa affrettata.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'art. 606 c.p.p.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Apresidente.repubblica%3Acodice.procedura.penale%3A1988-09-22%3B447~art606-com1-letc=',
        note: 'Riferimento normativo centrale per inquadrare i motivi di ricorso in Cassazione penale.'
      }
    ],
    faqs: [
      {
        question: 'Che cosa rende debole un ricorso per Cassazione penale?',
        answer:
          'Soprattutto la genericità dei motivi, la confusione con il merito e la mancanza di una selezione chiara delle censure davvero rilevanti.'
      },
      {
        question: 'Quali atti sono utili nel primo esame?',
        answer:
          'Il provvedimento da impugnare, gli atti o verbali indispensabili per leggere i motivi e una cronologia chiara delle notifiche.'
      },
      {
        question: 'La rapidità può sostituire l’analisi tecnica?',
        answer:
          'No. Nei termini stretti serve velocità, ma senza rinunciare alla verifica seria dei motivi e dell’ammissibilità.'
      }
    ],
    relatedServices: ['cassazione-penale', 'avvocato-cassazionista-roma', 'avvocato-penalista-roma'],
    relatedArticles: [
      'motivi-di-ricorso-in-cassazione-penale',
      'ricorso-per-cassazione-penale-e-ammissibilita',
      'differenza-tra-appello-e-cassazione'
    ],
    ctaTitle: 'Verifica iniziale del ricorso penale',
    ctaText:
      'Se il provvedimento è già disponibile, conviene inviarlo con gli atti essenziali e i riferimenti sui termini. Una verifica ordinata aiuta a capire se il ricorso penale sia impostabile con serietà.'
  }),
  'avvocato-successioni-roma': createSeoPage({
    slug: 'avvocato-successioni-roma',
    updatedAt: '2026-05-29', // Editorial links added in a9c0699.
    title: 'Avvocato per successioni a Roma: patrimonio, conflitti tra eredi e tutele del legittimario',
    menuTitle: 'Avvocato successioni Roma',
    label: 'Avvocato successioni Roma',
    description:
      'Assistenza a Roma nelle successioni complesse, con ricostruzione del patrimonio, verifica di donazioni pregresse, conflitti tra coeredi e tutela dei legittimari.',
    excerpt:
      'Pagina dedicata a chi cerca a Roma un avvocato per successioni con approccio documentale e selettivo nei patrimoni complessi.',
    image: '/images/team-boardroom.webp',
    thumb: '/images/thumb-successioni.webp',
    titleTag: 'Avvocato successioni a Roma | Studio Legale Del Monte',
    metaDescription:
      'Avvocato successioni a Roma: assistenza in successioni complesse, divisione ereditaria, legittima, donazioni pregresse e impugnazione del testamento.',
    keywords: [
      'avvocato successioni Roma',
      'successioni complesse Roma',
      'eredità e donazioni Roma'
    ],
    heroEyebrow: 'Successioni a Roma',
    intro:
      'Nelle successioni il problema raramente coincide con un solo documento. Spesso occorre ricostruire patrimonio, rapporti familiari, immobili, conti, donazioni pregresse e posizioni dei coeredi. Un avvocato per successioni a Roma è davvero utile quando porta ordine in questo quadro e chiarisce quali iniziative siano sostenibili.',
    contactReasons: [
      'quando il patrimonio comprende immobili, conti, donazioni o rapporti familiari conflittuali',
      'quando serve capire se vi siano profili di lesione della legittima o problemi divisionali',
      'quando il primo obiettivo è ricostruire il quadro prima di agire'
    ],
    whatIsReviewed: [
      'composizione iniziale dell’asse ereditario',
      'presenza di testamento, donazioni e disposizioni pregresse',
      'rapporti tra coeredi e beni indivisi',
      'documenti patrimoniali già disponibili'
    ],
    documents: [
      'testamento, se esistente',
      'visure, atti immobiliari e documenti bancari disponibili',
      'atti di donazione e documenti fiscali rilevanti',
      'sintesi del nucleo familiare e delle questioni controverse'
    ],
    mistakes: [
      'considerare la successione come una questione solo notarile quando esiste già conflitto',
      'agire senza aver ricostruito beni, passività e liberalità pregresse',
      'confondere il dissenso familiare con una questione già pronta per il giudizio'
    ],
    sections: [
      {
        title: 'Quando la successione richiede un’assistenza legale',
        paragraphs: [
          'L’assistenza è particolarmente utile quando il patrimonio è articolato, i rapporti tra eredi sono tesi o il testamento si intreccia con donazioni, beni indivisi e pretese di legittima.',
          'In questi casi la vera priorità è costruire un quadro affidabile dei fatti prima di scegliere la strada giudiziale o stragiudiziale.'
        ]
      },
      {
        title: 'Ricostruzione patrimoniale e documenti utili',
        paragraphs: [
          'Una successione complessa si comprende leggendo insieme patrimonio, atti precedenti e posizione dei soggetti coinvolti. È utile partire da ciò che è già disponibile, senza pretendere una completezza immediata ma evitando vuoti decisivi.',
          'Il primo esame serve anche a capire quali documenti manchino e come recuperarli con ordine.'
        ]
      },
      {
        title: 'Come si svolge l’assistenza dello studio',
        paragraphs: [
          'Lo studio aiuta a chiarire se la questione riguardi divisione ereditaria, lesione di legittima, impugnazione del testamento o gestione negoziale del conflitto. Il metodo resta prudente: prima ricostruzione, poi scelta dell’azione.',
          'Anche una risposta orientata a rinviare l’iniziativa fino a una migliore raccolta documentale può essere la scelta professionalmente corretta.'
        ]
      }
    ],
    editorialLinks: [
      {
        before: 'Per un inquadramento più ampio dei temi successori, lo Studio ha predisposto anche un’',
        label: 'area specialistica dedicata a eredità e successioni',
        url: 'https://www.ereditaesuccessioni.it/',
        after:
          ', con contenuti su testamenti, legittima, divisioni ereditarie e tutela degli eredi.'
      }
    ],
    externalLinks: [
      {
        label: 'dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/cosa-dichiarazioni-successione',
        note: 'Fonte istituzionale utile per inquadrare gli adempimenti successori di base e la documentazione ricorrente.'
      }
    ],
    faqs: [
      {
        question: 'Quando una successione può dirsi complessa?',
        answer:
          'Quando il patrimonio è articolato, i documenti sono frammentari, vi sono donazioni pregresse o sussistono conflitti tra coeredi e legittimari.'
      },
      {
        question: 'È necessario avere già tutta la documentazione?',
        answer:
          'No, ma è utile partire dai documenti principali per capire quali manchino davvero e quale sia il punto giuridico centrale.'
      },
      {
        question: 'Lo studio assiste anche in soluzioni stragiudiziali?',
        answer:
          'Sì, quando una soluzione negoziale è sostenibile e coerente con il quadro patrimoniale e familiare ricostruito.'
      }
    ],
    relatedServices: ['successioni-complesse', 'divisione-ereditaria', 'lesione-legittima'],
    relatedArticles: [
      'divisione-ereditaria-cosa-fare',
      'eredita-con-immobili-e-conti-correnti',
      'successione-e-donazioni-pregresse-cosa-guardare'
    ],
    ctaTitle: 'Primo esame del patrimonio e del conflitto ereditario',
    ctaText:
      'Per una valutazione preliminare in materia successoria conviene inviare il testamento, i documenti patrimoniali disponibili e una sintesi della situazione familiare. Questo aiuta a capire quale percorso sia più corretto.'
  }),
  'divisione-ereditaria': createSeoPage({
    slug: 'divisione-ereditaria',
    updatedAt: '2026-05-29', // Editorial links added in a9c0699.
    title: 'Divisione ereditaria: comunione, immobili e conflitti tra coeredi',
    menuTitle: 'Divisione ereditaria',
    label: 'Divisione ereditaria',
    description:
      'Assistenza nelle divisioni ereditarie con beni indivisi, immobili, conti correnti e conflitti tra coeredi, con attenzione alla documentazione e alla sostenibilità della domanda.',
    excerpt:
      'Pagina focalizzata sulla divisione ereditaria: ricostruzione dei beni, posizioni dei coeredi e passaggi utili per impostare correttamente il fascicolo.',
    image: '/images/team-meeting.webp',
    thumb: '/images/thumb-successioni.webp',
    titleTag: 'Divisione ereditaria a Roma | Studio Legale Del Monte',
    metaDescription:
      'Divisione ereditaria a Roma: gestione di comunione tra coeredi, immobili ereditari, conti correnti e ricostruzione delle quote.',
    keywords: [
      'divisione ereditaria Roma',
      'coeredi immobili Roma',
      'scioglimento comunione ereditaria Roma'
    ],
    heroEyebrow: 'Comunione ereditaria',
    intro:
      'La divisione ereditaria diventa problematica quando i beni sono indivisi, il patrimonio non è stato ricostruito con precisione o i coeredi hanno interessi divergenti. In questa fase serve soprattutto ordine: capire quali beni esistano, quali quote siano in discussione e se vi siano questioni preliminari che incidono sulla ripartizione.',
    contactReasons: [
      'quando gli eredi non riescono a gestire beni comuni o immobili indivisi',
      'quando occorre chiarire quote, donazioni pregresse o passività ereditarie',
      'quando serve capire se il conflitto sia trattabile o già maturo per un contenzioso'
    ],
    whatIsReviewed: [
      'beni immobili, rapporti bancari e altri cespiti ereditari',
      'posizione dei coeredi e quote di ciascuno',
      'eventuali atti precedenti che incidono sulla divisione',
      'ostacoli pratici alla gestione o alla vendita dei beni'
    ],
    documents: [
      'visure, atti di provenienza e documenti catastali',
      'documenti bancari o fiscali disponibili',
      'testamento o documenti successori rilevanti',
      'sintesi del conflitto tra coeredi'
    ],
    mistakes: [
      'tentare soluzioni divisionali senza aver ricostruito i beni',
      'trascurare il peso di donazioni o passività pregresse',
      'confondere il problema pratico dell’uso del bene con la questione delle quote'
    ],
    sections: [
      {
        title: 'Che cosa va chiarito prima della divisione',
        paragraphs: [
          'Prima di parlare di scioglimento della comunione ereditaria occorre capire quali beni ne facciano parte, se esistano passività o liberalità pregresse e come si collochino i singoli coeredi nel rapporto successorio.',
          'La divisione funziona solo se il quadro patrimoniale è stato letto con sufficiente precisione.'
        ]
      },
      {
        title: 'Immobili, conti e rapporti tra coeredi',
        paragraphs: [
          'Gli immobili ereditari generano spesso conflitti sull’uso del bene, sulle spese e sulla possibilità di alienazione. I conti correnti e gli altri rapporti patrimoniali, a loro volta, richiedono una ricostruzione documentale coerente.',
          'Lo studio aiuta a distinguere il punto pratico da quello giuridico, evitando iniziative confuse o premature.'
        ]
      },
      {
        title: 'Come si svolge l’assistenza',
        paragraphs: [
          'Il primo esame serve a misurare se la questione possa essere affrontata con strumenti stragiudiziali o se richieda un’impostazione contenziosa. Anche qui la sequenza è sempre la stessa: ricostruzione, selezione dei temi decisivi e scelta del percorso.',
          'Una pretesa ben impostata nasce da un fascicolo comprensibile, non da un accumulo di materiale disordinato.'
        ]
      }
    ],
    editorialLinks: [
      {
        before: 'Chi deve affrontare una comunione ereditaria può consultare anche gli ',
        label: 'approfondimenti sulla divisione ereditaria',
        url: 'https://www.ereditaesuccessioni.it/servizi/',
        after: ' e sugli strumenti di tutela degli eredi.'
      }
    ],
    externalLinks: [
      {
        label: 'successioni e volture catastali',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/voltura-catastale',
        note: 'Riferimento istituzionale utile per il profilo documentale degli immobili ereditari.'
      }
    ],
    faqs: [
      {
        question: 'Che cosa blocca più spesso una divisione ereditaria?',
        answer:
          'Di solito la mancanza di una ricostruzione chiara dei beni, delle quote e dei rapporti tra coeredi.'
      },
      {
        question: 'Gli immobili indivisi richiedono sempre un giudizio?',
        answer:
          'Non sempre. Prima va verificato se esista uno spazio realistico per una soluzione negoziale sostenibile.'
      },
      {
        question: 'Le donazioni fatte in vita incidono sulla divisione?',
        answer:
          'Possono incidere in modo rilevante e vanno lette insieme al patrimonio relitto e ai diritti dei legittimari.'
      }
    ],
    relatedServices: ['successioni-complesse', 'avvocato-successioni-roma', 'lesione-legittima'],
    relatedArticles: [
      'divisione-ereditaria-cosa-fare',
      'eredita-con-immobili-e-conti-correnti',
      'successione-e-donazioni-pregresse-cosa-guardare'
    ],
    ctaTitle: 'Ricostruire il patrimonio prima di dividere',
    ctaText:
      'Se vuoi chiarire una divisione ereditaria, conviene inviare i documenti sui beni disponibili, il testamento se esiste e una sintesi del conflitto tra coeredi. Questo rende il primo esame più concreto.'
  }),
  'lesione-legittima': createSeoPage({
    slug: 'lesione-legittima',
    title: 'Lesione di legittima: verifica di quote, donazioni e tutela del legittimario',
    menuTitle: 'Lesione di legittima',
    label: 'Lesione di legittima',
    description:
      'Assistenza per verificare possibili lesioni di legittima, con controllo di quote riservate, donazioni pregresse, patrimonio relitto e posizione dei legittimari.',
    excerpt:
      'Pagina dedicata ai casi in cui si sospetta una lesione della quota di legittima e occorre ricostruire con rigore il patrimonio.',
    image: '/images/desk-signature-wide.webp',
    thumb: '/images/thumb-successioni.webp',
    titleTag: 'Lesione di legittima a Roma | Studio Legale Del Monte',
    metaDescription:
      'Lesione di legittima a Roma: controllo delle quote riservate, donazioni pregresse, patrimonio ereditario e tutela del legittimario.',
    keywords: [
      'lesione legittima Roma',
      'quota di legittima Roma',
      'donazioni pregresse successione Roma'
    ],
    heroEyebrow: 'Tutela del legittimario',
    intro:
      'La lesione di legittima non si verifica per impressione. Occorre ricostruire patrimonio relitto, donazioni pregresse, soggetti coinvolti e quote riservate. Solo dopo questo lavoro è possibile capire se il legittimario sia stato davvero pregiudicato e con quale intensità.',
    contactReasons: [
      'quando il testamento o le donazioni sembrano alterare la quota riservata',
      'quando il patrimonio comprende beni o liberalità non immediatamente leggibili',
      'quando serve chiarire se il sospetto di lesione abbia fondamento documentale'
    ],
    whatIsReviewed: [
      'quadro familiare e soggetti legittimari',
      'patrimonio relitto e beni già trasferiti in vita',
      'donazioni, attribuzioni indirette e atti sospetti',
      'coerenza tra assetto patrimoniale e quote riservate'
    ],
    documents: [
      'testamento o copia disponibile',
      'documenti su immobili, conti e beni rilevanti',
      'atti di donazione e documentazione fiscale utile',
      'indicazione dei familiari e delle quote prospettate'
    ],
    mistakes: [
      'ritenere lesiva qualunque scelta successoria non condivisa',
      'trascurare donazioni e spostamenti patrimoniali anteriori',
      'agire senza avere un quadro almeno iniziale dell’asse ereditario'
    ],
    sections: [
      {
        title: 'Perché la legittima va misurata, non intuita',
        paragraphs: [
          'Il punto centrale è capire quale fosse il patrimonio rilevante e come incidano donazioni e attribuzioni fatte in vita. Senza questo passaggio, parlare di lesione resta prematuro.',
          'Il primo esame serve proprio a distinguere un dubbio generico da una questione giuridicamente sostenibile.'
        ]
      },
      {
        title: 'Donazioni pregresse e ricostruzione del patrimonio',
        paragraphs: [
          'Le liberalità anteriori possono essere decisive. Vanno lette insieme ai beni relitti, alle passività e alla posizione dei singoli legittimari per capire se l’equilibrio sia stato alterato.',
          'Una successione apparentemente semplice può diventare complessa proprio quando il patrimonio effettivo emerge solo attraverso atti precedenti.'
        ]
      },
      {
        title: 'Quando contattare lo studio',
        paragraphs: [
          'Il contatto è utile quando sono disponibili almeno il testamento e i documenti patrimoniali principali o quando occorre capire quali elementi manchino per una verifica seria.',
          'Una risposta prudente può essere utile quanto una azione giudiziale, se chiarisce subito che cosa serve per misurare la lesione.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/cosa-dichiarazioni-successione',
        note: 'Fonte utile per orientarsi nella documentazione patrimoniale di base delle successioni.'
      }
    ],
    faqs: [
      {
        question: 'Come si capisce se c’è davvero una lesione di legittima?',
        answer:
          'Occorre ricostruire patrimonio relitto, donazioni, quote riservate e posizione dei legittimari. Solo così si può misurare il possibile pregiudizio.'
      },
      {
        question: 'Le donazioni fatte in vita contano sempre?',
        answer:
          'Possono contare in modo decisivo e vanno analizzate insieme al resto del patrimonio successorio.'
      },
      {
        question: 'Basta il testamento per fare la verifica?',
        answer:
          'No. Il testamento è importante, ma non sostituisce la ricostruzione patrimoniale complessiva.'
      }
    ],
    relatedServices: ['successioni-complesse', 'avvocato-successioni-roma', 'impugnazione-testamento-roma'],
    relatedArticles: [
      'successione-e-donazioni-pregresse-cosa-guardare',
      'eredita-con-immobili-e-conti-correnti',
      'impugnazione-del-testamento-quando-ha-senso'
    ],
    ctaTitle: 'Verifica iniziale della quota di legittima',
    ctaText:
      'Per controllare un possibile pregiudizio del legittimario conviene inviare il testamento, gli atti di donazione disponibili e i documenti patrimoniali principali. Una ricostruzione ordinata è il primo passaggio utile.'
  }),
  'impugnazione-testamento-roma': createSeoPage({
    slug: 'impugnazione-testamento-roma',
    title: 'Impugnazione del testamento a Roma: validità dell’atto e ricostruzione del patrimonio',
    menuTitle: 'Impugnazione testamento Roma',
    label: 'Impugnazione testamento Roma',
    description:
      'Assistenza a Roma per valutare l’impugnazione del testamento, con attenzione a validità, capacità del testatore, genuinità dell’atto e quadro patrimoniale.',
    excerpt:
      'Pagina focalizzata sull’impugnazione del testamento, con metodo prudente e documentale per distinguere i dubbi seri dai conflitti familiari generici.',
    image: '/images/desk-signature.webp',
    thumb: '/images/thumb-successioni.webp',
    titleTag: 'Testamento contestato: verifica a Roma | Studio Del Monte',
    metaDescription:
      'Impugnazione del testamento a Roma: verifica di validità, capacità del testatore, genuinità dell’atto e documenti utili per il primo esame.',
    keywords: [
      'impugnazione testamento Roma',
      'contestare testamento Roma',
      'testamento olografo Roma'
    ],
    heroEyebrow: 'Testamento',
    intro:
      'Contestare un testamento richiede molto più di un conflitto familiare acceso. Occorre capire se esistano profili concreti di invalidità, capacità del testatore, genuinità dell’atto o lesione di diritti successori, leggendo il tutto insieme al patrimonio e al contesto in cui il testamento è stato formato.',
    contactReasons: [
      'quando emergono dubbi seri su forma, autenticità o capacità del testatore',
      'quando il testamento incide su un patrimonio complesso o già segnato da donazioni',
      'quando serve distinguere il conflitto personale dalla questione giuridica rilevante'
    ],
    whatIsReviewed: [
      'testamento disponibile e sua tipologia',
      'contesto familiare e patrimoniale in cui l’atto è maturato',
      'eventuali donazioni o atti precedenti collegati',
      'utilità concreta di una contestazione'
    ],
    documents: [
      'testamento o copia disponibile',
      'documenti sul patrimonio e sui soggetti coinvolti',
      'atti di donazione, se rilevanti',
      'sintesi del motivo per cui l’atto viene contestato'
    ],
    mistakes: [
      'ritenere contestabile ogni assetto successorio non condiviso',
      'isolare il testamento dal patrimonio e dalle donazioni',
      'iniziare un conflitto senza avere chiaro il vero punto tecnico'
    ],
    sections: [
      {
        title: 'Quando una contestazione è davvero seria',
        paragraphs: [
          'La verifica diventa utile quando esistono elementi concreti su validità, autenticità, capacità del testatore o quadro dei diritti lesi. Il primo filtro serve a capire se vi sia una base giuridica leggibile.',
          'Questo evita di trasformare un conflitto familiare in un contenzioso senza direzione tecnica.'
        ]
      },
      {
        title: 'Il testamento va letto insieme al patrimonio',
        paragraphs: [
          'La sola lettura dell’atto spesso non basta. Occorre capire quali beni riguardi, quali soggetti coinvolga e quali atti precedenti incidano sul risultato successorio.',
          'Nei casi più complessi il punto critico emerge proprio dal rapporto tra testamento, patrimonio e donazioni.'
        ]
      },
      {
        title: 'Come si svolge il primo esame',
        paragraphs: [
          'È preferibile inviare il testamento, i documenti patrimoniali principali e una sintesi chiara delle ragioni di contestazione. Questa base permette di capire se la questione meriti approfondimento ulteriore.',
          'Anche qui il metodo resta prudente: prima ricostruzione e selezione, poi eventuale iniziativa.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/cosa-dichiarazioni-successione',
        note: 'Riferimento istituzionale utile per il contesto documentale successorio.'
      }
    ],
    faqs: [
      {
        question: 'Un testamento olografo può essere impugnato?',
        answer:
          'Sì, ma la contestazione deve poggiare su profili concreti e documentabili, non sul solo dissenso tra familiari.'
      },
      {
        question: 'Perché servono anche documenti sul patrimonio?',
        answer:
          'Perché la valutazione dell’atto si intreccia con il patrimonio, con le donazioni e con i diritti dei soggetti coinvolti.'
      },
      {
        question: 'Quando conviene chiedere il primo esame?',
        answer:
          'Quando sono disponibili il testamento e i documenti essenziali per capire quale sia il punto realmente controverso.'
      }
    ],
    relatedServices: ['impugnazione-testamento', 'lesione-legittima', 'avvocato-successioni-roma'],
    relatedArticles: [
      'impugnazione-del-testamento-quando-ha-senso',
      'successione-e-donazioni-pregresse-cosa-guardare',
      'divisione-ereditaria-cosa-fare'
    ],
    ctaTitle: 'Primo esame di validità del testamento',
    ctaText:
      'Se desideri chiarire la tenuta di un testamento, conviene inviare l’atto, i documenti patrimoniali principali e una sintesi delle criticità percepite. Questo aiuta a distinguere subito i dubbi seri da quelli solo intuitivi.'
  }),
  'responsabilita-medica-roma': createSeoPage({
    slug: 'responsabilita-medica-roma',
    title: 'Responsabilità medica a Roma: documenti clinici, causalità e verifica del caso',
    menuTitle: 'Responsabilità medica Roma',
    label: 'Responsabilità medica Roma',
    description:
      'Assistenza a Roma nei casi di responsabilità medica con primo esame di cartella clinica, referti, causalità, consenso informato e sostenibilità della pretesa.',
    excerpt:
      'Pagina locale dedicata ai casi di responsabilità medica a Roma, con focus su documentazione clinica, nesso causale e corretto primo contatto.',
    image: '/images/desk-signature.webp',
    thumb: '/images/thumb-responsabilita-medica.webp',
    titleTag: 'Responsabilità medica a Roma | Studio Legale Del Monte',
    metaDescription:
      'Responsabilità medica a Roma: analisi di cartella clinica, errore diagnostico, errore chirurgico, consenso informato e nesso causale.',
    keywords: [
      'responsabilità medica Roma',
      'avvocato malasanità Roma',
      'cartella clinica errore medico Roma'
    ],
    heroEyebrow: 'Sanità a Roma',
    intro:
      'Nei casi di responsabilità medica il punto centrale non è l’esito sfavorevole in sé, ma la possibilità di collegarlo a una condotta sanitaria rilevante attraverso documenti clinici, nesso causale e corretta ricostruzione dei fatti. A Roma, come altrove, il primo esame utile parte sempre dalla qualità della documentazione disponibile.',
    contactReasons: [
      'quando esistono dubbi su diagnosi, tempi di intervento, chirurgia o consenso informato',
      'quando la cartella clinica e i referti consentono un primo controllo non generico',
      'quando serve capire se la vicenda meriti approfondimento ulteriore'
    ],
    whatIsReviewed: [
      'cartella clinica, referti e decorso sanitario',
      'sequenza degli accessi e delle decisioni mediche',
      'possibile nesso causale tra condotta e danno',
      'profilo informativo e consenso del paziente'
    ],
    documents: [
      'cartella clinica e referti principali',
      'lettere di dimissione, prescrizioni e certificazioni successive',
      'moduli di consenso informato, se esistenti',
      'cronologia essenziale di strutture e trattamenti'
    ],
    mistakes: [
      'considerare risarcibile ogni esito clinico negativo',
      'inviare documentazione incompleta o disordinata',
      'separare danno, causalità e consenso come se fossero temi indipendenti'
    ],
    sections: [
      {
        title: 'Quando il caso sanitario merita un esame legale',
        paragraphs: [
          'Il confronto è utile quando la documentazione consente di verificare una possibile condotta rilevante, un danno concreto e un rapporto causale da approfondire con metodo.',
          'Lo scopo non è alimentare aspettative automatiche, ma capire se il fascicolo abbia una base tecnica seria.'
        ]
      },
      {
        title: 'Documenti clinici e ricostruzione della vicenda',
        paragraphs: [
          'Lo studio legge la storia clinica nella sua progressione: sintomi, accessi, diagnosi, interventi, tempi di trattamento e decorso. Questo permette di distinguere il sospetto di errore dal dato documentale rilevante.',
          'Una cartella clinica presente ma non ordinata o non contestualizzata rischia di rallentare la valutazione invece di aiutarla.'
        ]
      },
      {
        title: 'Primo esame della posizione',
        paragraphs: [
          'Il primo esame orienta su ciò che è già leggibile e su ciò che richiede ulteriori approfondimenti, anche medico-legali. Il metodo resta prudente: prima ordine, poi misurazione della sostenibilità del caso.',
          'Una risposta negativa o sospensiva può essere utile quanto una conferma, se aiuta a chiarire il reale stato del fascicolo.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'Riferimento normativo centrale per il quadro della responsabilità sanitaria.'
      }
    ],
    faqs: [
      {
        question: 'La cartella clinica è indispensabile?',
        answer:
          'Nella maggior parte dei casi sì, perché consente di ricostruire in modo ordinato il percorso di cura e le decisioni assunte.'
      },
      {
        question: 'Il consenso informato conta solo se manca la firma?',
        answer:
          'No. Il profilo informativo va valutato nel suo contenuto e nel rapporto con la scelta terapeutica e con il danno lamentato.'
      },
      {
        question: 'Quando conviene contattare lo studio?',
        answer:
          'Quando sono disponibili i principali documenti clinici e si vuole capire se la vicenda presenti basi serie per un approfondimento.'
      }
    ],
    relatedServices: ['responsabilita-medica', 'errore-medico', 'risarcimento-danni-persona'],
    relatedArticles: [
      'errore-diagnostico-e-ritardo-diagnosi',
      'errore-medico-e-documentazione-clinica',
      'consenso-informato-e-risarcimento'
    ],
    ctaTitle: 'Valutazione iniziale della documentazione clinica',
    ctaText:
      'Per un primo esame utile nei casi di responsabilità medica conviene inviare cartella clinica, referti principali, eventuali consensi informati e una cronologia dei fatti. Questo consente una verifica più affidabile.'
  }),
  'errore-medico': createSeoPage({
    slug: 'errore-medico',
    title: 'Errore medico: quando la documentazione consente una verifica seria',
    menuTitle: 'Errore medico',
    label: 'Errore medico',
    description:
      'Assistenza nei casi di sospetto errore medico con lettura di cartella clinica, tempi diagnostici, scelte terapeutiche e nesso causale tra condotta e danno.',
    excerpt:
      'Pagina dedicata a chi sospetta un errore medico e vuole capire se i documenti disponibili permettano una valutazione non generica.',
    image: '/images/thumb-responsabilita-medica.webp',
    thumb: '/images/thumb-responsabilita-medica.webp',
    titleTag: 'Errore medico a Roma | Studio Legale Del Monte',
    metaDescription:
      'Errore medico a Roma: valutazione della documentazione clinica, tempi diagnostici, interventi e nesso causale per capire se il caso meriti approfondimento.',
    keywords: [
      'errore medico Roma',
      'errore diagnostico Roma',
      'avvocato errore medico Roma'
    ],
    heroEyebrow: 'Errore sanitario',
    intro:
      'Parlare di errore medico in modo utile significa andare oltre il sospetto iniziale e verificare se la documentazione mostri davvero una condotta sanitaria criticabile, un danno concreto e un rapporto causale serio. Il primo esame serve proprio a compiere questo passaggio con metodo.',
    contactReasons: [
      'quando si sospetta un errore diagnostico, chirurgico o di gestione del percorso di cura',
      'quando la documentazione clinica è già almeno in parte disponibile',
      'quando serve capire se vi sia materia per un approfondimento medico-legale'
    ],
    whatIsReviewed: [
      'sintomi, accessi e tempi della diagnosi',
      'scelte terapeutiche e loro coerenza documentale',
      'danno lamentato e decorso successivo',
      'nesso causale ipotizzabile tra condotta e pregiudizio'
    ],
    documents: [
      'cartella clinica e referti centrali',
      'esami diagnostici, lettere di dimissione e certificazioni',
      'cronologia dei trattamenti e degli eventi',
      'descrizione essenziale delle conseguenze subite'
    ],
    mistakes: [
      'assimilare l’esito negativo all’errore professionale',
      'basare la richiesta solo sul racconto senza documenti',
      'trascurare il rapporto tra tempi della cura e nesso causale'
    ],
    sections: [
      {
        title: 'Dubbio clinico e profilo giuridico non coincidono',
        paragraphs: [
          'Un decorso sfavorevole può generare un dubbio comprensibile, ma il diritto richiede qualcosa di più: una condotta leggibile, un danno concreto e un rapporto causale sostenibile.',
          'La funzione del primo esame è proprio trasformare il sospetto in una domanda giuridica chiara oppure escludere che vi siano basi sufficienti.'
        ]
      },
      {
        title: 'Perché la documentazione è il centro del lavoro',
        paragraphs: [
          'La cartella clinica e i referti permettono di leggere tempi, decisioni, omissioni e passaggi rilevanti. Senza questo materiale, il caso resta difficilmente valutabile in modo serio.',
          'Anche pochi documenti ben selezionati sono preferibili a un invio disordinato di materiale eterogeneo.'
        ]
      },
      {
        title: 'Come si svolge l’assistenza dello studio',
        paragraphs: [
          'Lo studio aiuta a chiarire se il caso richieda una verifica ulteriore, quali documenti manchino e in che modo vada organizzata la richiesta. Il metodo non promette risultati: misura la tenuta del fascicolo.',
          'Questo approccio è utile soprattutto quando il paziente ha bisogno di capire se proseguire con un approfondimento o fermarsi prima.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'Riferimento normativo centrale per l’inquadramento della responsabilità sanitaria.'
      }
    ],
    faqs: [
      {
        question: 'Quando si può parlare seriamente di errore medico?',
        answer:
          'Quando la documentazione permette di verificare una condotta sanitaria criticabile, un danno concreto e un nesso causale da approfondire.'
      },
      {
        question: 'Bastano i referti o serve la cartella clinica completa?',
        answer:
          'I referti aiutano, ma nella maggior parte dei casi la cartella clinica resta il documento più utile per ricostruire la vicenda.'
      },
      {
        question: 'Il primo esame può servire anche a escludere il caso?',
        answer:
          'Sì. Escludere per tempo una pretesa debole è parte di una valutazione professionale corretta.'
      }
    ],
    relatedServices: ['responsabilita-medica', 'responsabilita-medica-roma', 'risarcimento-danni-persona'],
    relatedArticles: [
      'errore-medico-e-documentazione-clinica',
      'errore-diagnostico-e-ritardo-diagnosi',
      'errore-chirurgico-quando-il-caso-va-approfondito'
    ],
    ctaTitle: 'Primo controllo sul sospetto errore medico',
    ctaText:
      'Se sospetti un errore medico, conviene inviare la documentazione clinica principale e una cronologia dei fatti. Questo consente di capire se il caso presenti basi concrete per un approfondimento.'
  }),
  'risarcimento-danni-persona': createSeoPage({
    slug: 'risarcimento-danni-persona',
    title: 'Risarcimento danni alla persona: prova del pregiudizio, causalità e documenti utili',
    menuTitle: 'Risarcimento danni persona',
    label: 'Risarcimento danni persona',
    description:
      'Assistenza nei casi di danni alla persona con attenzione a responsabilità, nesso causale, prova del pregiudizio, danno biologico e documenti utili alla quantificazione.',
    excerpt:
      'Pagina dedicata al risarcimento del danno alla persona, con focus su prova, causalità e organizzazione del fascicolo.',
    image: '/images/team-selfie.webp',
    thumb: '/images/thumb-risarcimento-danni.webp',
    titleTag: 'Risarcimento danni alla persona a Roma | Studio Legale Del Monte',
    metaDescription:
      'Risarcimento danni alla persona a Roma: prova del danno biologico, responsabilità, causalità, documenti medici e quantificazione del pregiudizio.',
    keywords: [
      'risarcimento danni persona Roma',
      'danno biologico Roma',
      'prova danno persona Roma'
    ],
    heroEyebrow: 'Danno alla persona',
    intro:
      'Nel risarcimento dei danni alla persona la pretesa diventa seria quando responsabilità, causalità e prova del pregiudizio vengono letti insieme. Non basta descrivere il danno: occorre dimostrare come si è prodotto, quali effetti abbia generato e quali documenti ne sostengano la consistenza.',
    contactReasons: [
      'quando si vuole capire se la responsabilità sia leggibile in modo serio',
      'quando esistono documenti medici, spese o certificazioni già disponibili',
      'quando serve distinguere il danno percepito dal danno dimostrabile'
    ],
    whatIsReviewed: [
      'fatto generatore e responsabilità ipotizzata',
      'danno biologico, patrimoniale e conseguenze permanenti',
      'documenti medici e spese già sostenute',
      'coerenza tra evento, conseguenze e prova disponibile'
    ],
    documents: [
      'referti, certificazioni e documenti medici principali',
      'documenti su spese, giorni di inabilità e conseguenze lavorative',
      'verbali, atti o altri materiali sul fatto generatore',
      'sintesi ordinata degli effetti subiti'
    ],
    mistakes: [
      'confondere il pregiudizio percepito con il danno già provabile',
      'separare il danno dal fatto che lo ha generato',
      'omettere spese, certificazioni o cronologia delle conseguenze'
    ],
    sections: [
      {
        title: 'Responsabilità e danno vanno letti insieme',
        paragraphs: [
          'Un risarcimento sostenibile richiede la lettura congiunta del fatto dannoso, della condotta imputata e delle conseguenze effettivamente dimostrabili. Uno solo di questi elementi, isolato, non basta.',
          'Il primo esame serve a chiarire se il fascicolo sia già maturo oppure se manchino passaggi essenziali.'
        ]
      },
      {
        title: 'Documenti utili e prova del pregiudizio',
        paragraphs: [
          'Certificazioni mediche, referti, spese, giorni di inabilità e documenti sul fatto generatore aiutano a trasformare una richiesta generica in una domanda leggibile.',
          'La prova del danno alla persona è tanto più solida quanto più la documentazione è ordinata e coerente con la cronologia degli eventi.'
        ]
      },
      {
        title: 'Come si svolge la valutazione preliminare',
        paragraphs: [
          'Lo studio verifica se vi sia un impianto sufficiente su responsabilità, causalità e quantificazione. Quando occorrono integrazioni documentali, queste vengono individuate in modo mirato.',
          'Anche in questa materia una valutazione prudente o negativa è utile se evita richieste fragili o non sostenibili.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'portale del consumatore IVASS',
        url: 'https://www.ivass.it/consumatori/index.html',
        note: 'Fonte istituzionale utile per orientarsi nei temi assicurativi che spesso si intrecciano con la tutela risarcitoria.'
      }
    ],
    faqs: [
      {
        question: 'Quali documenti aiutano di più in un fascicolo di danno alla persona?',
        answer:
          'Referti, certificazioni, documenti sulle spese, elementi sul fatto generatore e una cronologia chiara delle conseguenze subite.'
      },
      {
        question: 'Il danno biologico coincide con ogni sofferenza subita?',
        answer:
          'No. Deve essere letto e documentato in rapporto al fatto, alle conseguenze cliniche e alla prova disponibile.'
      },
      {
        question: 'Il primo esame serve anche a capire se manchi prova sufficiente?',
        answer:
          'Sì. Serve proprio a chiarire se il fascicolo sia già sostenibile o se richieda integrazioni documentali prima di agire.'
      }
    ],
    relatedServices: ['risarcimento-danni', 'responsabilita-medica-roma', 'infortuni-sul-lavoro'],
    relatedArticles: [
      'risarcimento-danni-e-prova-del-pregiudizio',
      'danno-biologico-permanente-cosa-verificare',
      'cosa-fare-dopo-un-incidente-stradale-grave'
    ],
    ctaTitle: 'Valutare il danno alla persona con ordine',
    ctaText:
      'Per un primo esame sul risarcimento dei danni alla persona conviene inviare referti, certificazioni, documenti di spesa e una sintesi del fatto che ha generato il pregiudizio. Questo aiuta a leggere insieme danno, causalità e prova.'
  }),
  'avvocato-penalista-roma': createSeoPage({
    slug: 'avvocato-penalista-roma',
    title: 'Avvocato penalista a Roma: valutazione del fascicolo e strategia difensiva',
    menuTitle: 'Avvocato penalista Roma',
    label: 'Avvocato penalista Roma',
    description:
      'Assistenza penale a Roma con analisi del fascicolo, lettura dei provvedimenti, verifica dei passaggi processuali e attenzione alla sostenibilità della strategia difensiva.',
    excerpt:
      'Pagina dedicata a chi cerca a Roma un avvocato penalista per orientarsi tra indagini, giudizio, impugnazioni e valutazione tecnica del fascicolo.',
    image: '/images/portrait-smile.webp',
    thumb: '/images/thumb-cassazione-penale.webp',
    titleTag: 'Avvocato penalista a Roma | Studio Legale Del Monte',
    metaDescription:
      'Avvocato penalista a Roma: analisi del fascicolo, lettura di sentenze e provvedimenti, strategia difensiva e raccordo con la Cassazione penale quando necessario.',
    keywords: [
      'avvocato penalista Roma',
      'difesa penale Roma',
      'cassazione penale Roma'
    ],
    heroEyebrow: 'Diritto penale',
    intro:
      'Chi cerca un avvocato penalista a Roma ha spesso bisogno prima di tutto di chiarezza: capire in quale fase si trovi il procedimento, quali siano i passaggi già maturati e quali margini difensivi siano davvero aperti. Una strategia utile nasce da un fascicolo leggibile e da aspettative realistiche.',
    contactReasons: [
      'quando serve una lettura tecnica del fascicolo penale e dei provvedimenti emessi',
      'quando occorre capire se la fase richieda attività difensiva immediata o impugnazione',
      'quando è utile collegare il procedimento penale a possibili sviluppi in Cassazione'
    ],
    whatIsReviewed: [
      'fase del procedimento e provvedimenti già emessi',
      'atti difensivi o verbali essenziali',
      'obiettivo concretamente perseguibile nel breve periodo',
      'eventuale raccordo con impugnazioni o Cassazione penale'
    ],
    documents: [
      'provvedimenti ricevuti o notificati',
      'atti e verbali essenziali disponibili',
      'cronologia sintetica del procedimento',
      'indicazione chiara dell’urgenza o della scadenza'
    ],
    mistakes: [
      'arrivare al primo contatto senza distinguere la fase processuale',
      'chiedere soluzioni immediate senza un fascicolo leggibile',
      'confondere difesa nel merito e ricorso di legittimità'
    ],
    sections: [
      {
        title: 'Dalla fase processuale dipende la strategia',
        paragraphs: [
          'Nel penale è decisivo capire se si sia nella fase delle indagini, del giudizio o dell’impugnazione. Ogni fase richiede strumenti diversi e un diverso modo di leggere il fascicolo.',
          'Per questo il primo esame non parte dalle conclusioni desiderate, ma dalla collocazione tecnica del caso.'
        ]
      },
      {
        title: 'Che cosa aiuta davvero nel primo contatto',
        paragraphs: [
          'Provvedimenti, verbali essenziali, notifiche e una cronologia sintetica aiutano a capire dove si trovi il procedimento e quale spazio difensivo sia ancora disponibile.',
          'L’ordine iniziale del materiale è particolarmente importante quando esistono termini stretti o passaggi processuali già ravvicinati.'
        ]
      },
      {
        title: 'Rapporto tra difesa penale e Cassazione',
        paragraphs: [
          'Non ogni questione penale porta alla Cassazione, ma alcune scelte compiute nei gradi precedenti incidono direttamente sulla successiva legittimità. Lo studio valuta anche questo raccordo quando il fascicolo lo richiede.',
          'Una visione ordinata del percorso aiuta a evitare aspettative improprie e a selezionare meglio i passaggi difensivi utili.'
        ]
      }
    ],
    externalLinks: [
      {
        label: 'funzioni della Corte di Cassazione',
        url: 'https://www.cortedicassazione.it/it/le_funzioni_della_corte.page',
        note: 'Fonte utile per comprendere il raccordo tra giudizio penale di merito e legittimità.'
      }
    ],
    faqs: [
      {
        question: 'Che cosa conviene chiarire subito in un procedimento penale?',
        answer:
          'La fase in cui si trova il procedimento, i provvedimenti già emessi, le scadenze e l’obiettivo difensivo realistico nel breve periodo.'
      },
      {
        question: 'Serve avere già tutto il fascicolo?',
        answer:
          'No, ma è importante partire dai provvedimenti e dagli atti essenziali che permettano di leggere correttamente la fase processuale.'
      },
      {
        question: 'Lo studio valuta anche il raccordo con la Cassazione penale?',
        answer:
          'Sì, quando il fascicolo lo richiede e quando la fase processuale rende rilevante una futura lettura di legittimità.'
      }
    ],
    relatedServices: ['cassazione-penale', 'ricorso-cassazione-penale', 'avvocato-cassazionista-roma'],
    relatedArticles: [
      'motivi-di-ricorso-in-cassazione-penale',
      'ricorso-per-cassazione-penale-e-ammissibilita',
      'differenza-tra-appello-e-cassazione'
    ],
    ctaTitle: 'Primo orientamento sul fascicolo penale',
    ctaText:
      'Per un primo confronto è utile inviare i provvedimenti disponibili, una sintesi della fase processuale e le informazioni sulle scadenze. Questo aiuta a capire quale strategia difensiva sia realmente praticabile.'
  })
};

export const seoPageList = Object.values(seoPages);
export const seoPageMap = Object.fromEntries(seoPageList.map((page) => [page.slug, page]));

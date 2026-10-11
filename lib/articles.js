import editorialArticles from '../editorial/site-articles.json' with { type: 'json' };

// Content revised in ce529fd on 2026-04-23; never use the build date.
const UPDATED_AT = '2026-04-23';

function createArticle(article) {
  return {
    updatedAt: UPDATED_AT,
    ...article
  };
}

const legacyArticles = [
  createArticle({
    slug: 'termini-per-il-ricorso-per-cassazione-civile',
    title: 'Termini per il ricorso per Cassazione civile: cosa controllare subito',
    description:
      'Una guida pratica sui termini del ricorso per Cassazione civile e sui controlli iniziali da fare prima che la scadenza renda inutile il fascicolo.',
    category: 'Cassazione civile',
    service: 'cassazione-civile',
    publishedAt: '2026-05-16',
    updatedAt: '2026-05-16',
    readTime: '6 min',
    image: '/images/portrait-certificate.webp',
    intro:
      'Quando si parla di ricorso per Cassazione civile, il primo errore è pensare ai motivi senza aver prima ricostruito bene la scadenza. I termini vanno letti insieme alla sentenza, alle notifiche, alle comunicazioni e agli atti che incidono davvero sulla possibilità di impugnare.',
    sections: [
      {
        heading: 'Il termine non si controlla in astratto, ma sulla storia concreta del fascicolo',
        paragraphs: [
          'Per capire se il ricorso sia ancora proponibile occorre partire dalla decisione, dalle modalità con cui è stata comunicata o notificata e dalla sequenza dei passaggi successivi.',
          'Una risposta affrettata sui termini, senza questa ricostruzione, rischia di essere fuorviante tanto quanto un ricorso preparato troppo tardi.'
        ]
      },
      {
        heading: 'Urgenza e selezione tecnica devono restare insieme',
        paragraphs: [
          'Quando la scadenza è vicina è naturale concentrarsi sul tempo, ma la sola urgenza non basta. Serve anche capire se il fascicolo contenga un vero motivo di legittimità e quali atti siano indispensabili per formularlo.',
          'Nei casi civili il controllo dei termini ha valore solo se si accompagna a una lettura selettiva dei motivi e dell’utilità concreta dell’impugnazione.'
        ]
      },
      {
        heading: 'Perché conviene ordinare subito date e documenti essenziali',
        paragraphs: [
          'Le verifiche più utili nascono da una cronologia semplice: data della decisione, notifiche, comunicazioni di cancelleria e atti dei gradi precedenti davvero rilevanti.',
          'Un fascicolo ordinato consente di capire più rapidamente sia il margine temporale sia la sostenibilità tecnica del ricorso.'
        ]
      }
    ],
    checks: [
      'se la decisione sia stata notificata o comunicata e in quale data',
      'se i termini siano stati ricostruiti con una cronologia documentata',
      'se oltre al tempo residuo esistano anche motivi di legittimità seri'
    ],
    documents: [
      'sentenza o ordinanza da impugnare',
      'notifiche, comunicazioni e relate con le date rilevanti',
      'atti essenziali dei gradi precedenti',
      'sintesi cronologica dei passaggi già avvenuti'
    ],
    externalLinks: [
      {
        label: 'art. 325 c.p.c.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443!vig=',
        note: 'Riferimento normativo utile per orientarsi sui termini delle impugnazioni insieme alla lettura tecnica del caso concreto.'
      }
    ],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'inammissibilita-del-ricorso-per-cassazione',
      'differenza-tra-appello-e-cassazione'
    ],
    faqs: [
      {
        question: 'Basta conoscere il termine teorico per capire se si può ancora ricorrere?',
        answer:
          'No. Occorre ricostruire come la decisione sia stata comunicata o notificata e verificare la cronologia documentale del fascicolo.'
      },
      {
        question: 'Se il termine è stretto conviene comunque verificare anche i motivi?',
        answer:
          'Sì. L’urgenza non sostituisce la selezione tecnica: un ricorso tempestivo ma privo di veri motivi resta debole.'
      },
      {
        question: 'Qual è il materiale minimo utile per il primo controllo?',
        answer:
          'Decisione da impugnare, date rilevanti, notifiche o comunicazioni e atti essenziali dei gradi precedenti.'
      }
    ]
  }),
  createArticle({
    slug: 'quando-conviene-fare-ricorso-per-cassazione-civile',
    title: 'Quando conviene fare ricorso per Cassazione civile',
    description:
      'Come capire se una sentenza civile meriti davvero un ricorso per Cassazione, quali profili controllare e quali documenti preparare subito.',
    category: 'Cassazione civile',
    service: 'cassazione-civile',
    publishedAt: '2026-03-01',
    readTime: '6 min',
    image: '/images/portrait-certificate.webp',
    intro:
      'Prima di impugnare una sentenza civile occorre chiarire se il problema riguardi davvero la legittimità della decisione o soltanto un esito di merito non condiviso. In Cassazione la selezione del caso viene prima della scrittura del ricorso.',
    sections: [
      {
        heading: 'La prima domanda da porsi non riguarda la convenienza economica, ma la natura dell’errore',
        paragraphs: [
          'Il ricorso è seriamente valutabile quando la decisione presenti un possibile errore di diritto, un vizio processuale rilevante o un problema motivazionale compatibile con i limiti del giudizio di legittimità.',
          'Se invece il nodo è soltanto la ricostruzione dei fatti o la valutazione delle prove in senso ampio, spesso non si è ancora sul terreno giusto per la Cassazione.'
        ]
      },
      {
        heading: 'La sola soccombenza non basta a giustificare il ricorso',
        paragraphs: [
          'Molte richieste nascono da una sentenza percepita come ingiusta. Questo dato umano è comprensibile, ma non coincide automaticamente con la presenza di motivi ammissibili.',
          'Il primo esame serve proprio a distinguere la delusione per l’esito dalla concreta possibilità di costruire una censura giuridica seria.'
        ]
      },
      {
        heading: 'Perché la valutazione preliminare evita ricorsi deboli o intempestivi',
        paragraphs: [
          'Una verifica iniziale ordinata consente di controllare insieme motivi, termini, documenti e utilità pratica dell’impugnazione.',
          'Nei fascicoli di Cassazione il tempo si perde soprattutto quando si arriva tardi o con materiale documentale dispersivo.'
        ]
      }
    ],
    checks: [
      'se la sentenza presenta un vero problema di diritto e non solo un dissenso sul merito',
      'se i termini sono ancora aperti e la cronologia è stata ricostruita correttamente',
      'se gli atti dei gradi precedenti consentono di formulare motivi leggibili e sostenibili'
    ],
    documents: [
      'sentenza o ordinanza da impugnare',
      'atti essenziali del giudizio di merito',
      'notifiche, comunicazioni e date rilevanti',
      'breve sintesi dei punti che si ritengono erronei'
    ],
    externalLinks: [
      {
        label: 'art. 360 c.p.c.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Aregio.decreto%3A1940-10-28%3B1443%3A1~art360%21vig=',
        note: 'È il riferimento normativo di base per capire quali motivi possono essere portati in Cassazione civile.'
      }
    ],
    relatedArticles: [
      'cassazione-civile-e-vizio-di-motivazione',
      'inammissibilita-del-ricorso-per-cassazione',
      'differenza-tra-appello-e-cassazione'
    ],
    faqs: [
      {
        question: 'Una sentenza sfavorevole giustifica sempre il ricorso per Cassazione civile?',
        answer:
          'No. Prima occorre verificare se la decisione presenti profili davvero compatibili con il giudizio di legittimità.'
      },
      {
        question: 'Perché conviene far leggere anche gli atti del processo?',
        answer:
          'Perché aiutano a capire come la questione sia stata dedotta nei gradi precedenti e se possa essere trasformata in un motivo di ricorso serio.'
      },
      {
        question: 'La valutazione preliminare serve anche a escludere iniziative inutili?',
        answer:
          'Sì. Serve proprio a capire se il ricorso sia sostenibile e se l’interesse concreto all’impugnazione giustifichi il lavoro da svolgere.'
      }
    ]
  }),
  createArticle({
    slug: 'cassazione-civile-e-vizio-di-motivazione',
    title: 'Cassazione civile e vizio di motivazione: quando il tema è davvero rilevante',
    description:
      'Come leggere il vizio di motivazione in Cassazione civile senza confonderlo con una critica generica al merito della sentenza.',
    category: 'Cassazione civile',
    service: 'cassazione-civile',
    publishedAt: '2026-03-06',
    readTime: '6 min',
    image: '/images/portrait-soft.webp',
    intro:
      'Il vizio di motivazione è uno dei temi più fraintesi nella pratica della Cassazione civile. Non coincide con qualunque motivazione poco convincente: richiede una lettura rigorosa della sentenza e dei limiti con cui oggi il tema può essere portato davanti alla Suprema Corte.',
    sections: [
      {
        heading: 'Criticare la motivazione non significa chiedere una nuova valutazione dei fatti',
        paragraphs: [
          'Il primo equivoco consiste nel trattare la Cassazione come se fosse un terzo grado di merito. Una motivazione discussa o poco persuasiva non basta, da sola, a fondare un ricorso efficace.',
          'Occorre capire se il difetto motivazionale assuma davvero rilievo nel perimetro consentito dal giudizio di legittimità.'
        ]
      },
      {
        heading: 'Il punto decisivo è il rapporto tra sentenza, fatto storico e censura formulabile',
        paragraphs: [
          'Una critica utile richiede di isolare il passaggio realmente decisivo della motivazione e di verificare se quel passaggio abbia inciso sul risultato della causa.',
          'Questo lavoro non si improvvisa: va costruito leggendo la sentenza insieme agli atti che permettono di comprenderne la struttura.'
        ]
      },
      {
        heading: 'Perché una lettura tecnica iniziale è indispensabile',
        paragraphs: [
          'Il rischio più frequente è trasformare un dubbio sulla motivazione in una censura generica. La valutazione preliminare serve a evitare proprio questo passaggio improprio.',
          'Nei ricorsi civili la selezione del motivo è parte dell’ammissibilità, non un dettaglio redazionale.'
        ]
      }
    ],
    checks: [
      'se il punto contestato è davvero decisivo per l’esito della causa',
      'se la censura riguarda la legittimità e non una rivalutazione del merito',
      'se gli atti del processo consentono di spiegare il vizio in modo ordinato'
    ],
    documents: [
      'decisione impugnata',
      'atti che riguardano il punto motivazionale contestato',
      'eventuali documenti o verbali indispensabili per la ricostruzione'
    ],
    externalLinks: [
      {
        label: 'funzioni della Corte di Cassazione',
        url: 'https://www.cortedicassazione.it/it/le_funzioni_della_corte.page',
        note: 'È una fonte istituzionale utile per chiarire la funzione di legittimità della Corte.'
      }
    ],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'inammissibilita-del-ricorso-per-cassazione',
      'differenza-tra-appello-e-cassazione'
    ],
    faqs: [
      {
        question: 'Una motivazione debole basta per ricorrere in Cassazione?',
        answer:
          'Non sempre. Occorre verificare se il difetto motivazionale rientri davvero nei limiti in cui il tema può essere dedotto in Cassazione civile.'
      },
      {
        question: 'Perché non basta dire che il giudice ha valutato male le prove?',
        answer:
          'Perché questo, nella maggior parte dei casi, riguarda ancora il merito e non la legittimità della decisione.'
      },
      {
        question: 'Che cosa aiuta a capire se il vizio è serio?',
        answer:
          'Aiuta leggere la sentenza insieme agli atti essenziali del processo, isolando il passaggio motivazionale davvero decisivo.'
      }
    ]
  }),
  createArticle({
    slug: 'inammissibilita-del-ricorso-per-cassazione',
    title: 'Inammissibilità del ricorso per Cassazione: errori da evitare',
    description:
      'Gli errori più frequenti che espongono un ricorso per Cassazione al rischio di inammissibilità e perché il controllo preliminare è decisivo.',
    category: 'Cassazione civile',
    service: 'cassazione-civile',
    publishedAt: '2026-03-09',
    readTime: '6 min',
    image: '/images/portrait-soft.webp',
    intro:
      'L’inammissibilità non è un problema soltanto formale. Spesso nasce da un’impostazione sbagliata del caso: motivi generici, confusione tra merito e legittimità, termini mal ricostruiti o atti richiamati senza il necessario ordine.',
    sections: [
      {
        heading: 'L’errore più comune è partire dalla conclusione invece che dal motivo',
        paragraphs: [
          'Molti ricorsi nascono dalla volontà di ribaltare una sentenza sfavorevole senza aver prima verificato se esista un motivo strutturabile in Cassazione.',
          'Quando si parte dall’esito desiderato e non dalla censura giuridica possibile, il rischio di inammissibilità cresce subito.'
        ]
      },
      {
        heading: 'Ammissibilità significa anche chiarezza del fascicolo',
        paragraphs: [
          'Un ricorso poco ordinato, pieno di riferimenti non gerarchizzati o privo di un chiaro rapporto tra atti e censure, indebolisce il caso prima ancora di entrare nel merito dei motivi.',
          'Per questo il lavoro di selezione e pulizia tecnica è già parte della tutela.'
        ]
      },
      {
        heading: 'Il controllo iniziale protegge anche il cliente',
        paragraphs: [
          'Dire in tempo che un ricorso non è sostenibile è un atto di correttezza professionale. Evita costi, aspettative improprie e iniziative costruite su basi fragili.',
          'La valutazione preliminare ha proprio questa funzione: misurare la tenuta del fascicolo prima della redazione.'
        ]
      }
    ],
    checks: [
      'se le censure sono realmente distinguibili dal merito',
      'se il ricorso può essere costruito in modo selettivo e leggibile',
      'se termini e atti richiamati sono stati verificati con precisione'
    ],
    documents: [
      'decisione da impugnare',
      'atti processuali essenziali',
      'comunicazioni o notifiche rilevanti',
      'sintesi chiara dei punti contestati'
    ],
    externalLinks: [
      {
        label: 'art. 360 c.p.c.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Aregio.decreto%3A1940-10-28%3B1443%3A1~art360%21vig=',
        note: 'Leggere i motivi tipici aiuta a capire perché la genericità o la confusione del ricorso siano così rischiose.'
      }
    ],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'cassazione-civile-e-vizio-di-motivazione',
      'differenza-tra-appello-e-cassazione'
    ],
    faqs: [
      {
        question: 'L’inammissibilità dipende solo da errori formali?',
        answer:
          'No. Spesso dipende anche da motivi generici, da una cattiva selezione delle censure e da una struttura del ricorso non coerente con la legittimità.'
      },
      {
        question: 'La valutazione preliminare serve a ridurre questo rischio?',
        answer:
          'Sì. Serve proprio a verificare prima motivi, atti e termini, evitando iniziative costruite male.'
      },
      {
        question: 'Vale solo per il civile?',
        answer:
          'No. Il tema dell’ammissibilità è centrale anche nel penale, pur con regole e problemi specifici diversi.'
      }
    ]
  }),
  createArticle({
    slug: 'differenza-tra-appello-e-cassazione',
    title: 'Differenza tra appello e Cassazione: perché non sono la stessa cosa',
    description:
      'Una guida chiara per distinguere appello e Cassazione e capire perché merito e legittimità richiedono strategie completamente diverse.',
    category: 'Cassazione civile',
    service: 'cassazione-civile',
    publishedAt: '2026-03-12',
    readTime: '5 min',
    image: '/images/hero-portrait.webp',
    intro:
      'Appello e Cassazione vengono spesso percepiti come due impugnazioni equivalenti. In realtà hanno funzione, limiti e tecnica profondamente diversi. Capire questa differenza aiuta a non impostare male la strategia già dal primo contatto con lo studio.',
    sections: [
      {
        heading: 'L’appello resta nel merito, la Cassazione no',
        paragraphs: [
          'L’appello consente ancora una rivalutazione della decisione sul piano del merito, mentre la Cassazione opera sul diverso terreno della legittimità.',
          'Questa distinzione cambia radicalmente il tipo di domande che si possono porre e il tipo di censura che si può costruire.'
        ]
      },
      {
        heading: 'Anche i motivi ammissibili cambiano struttura',
        paragraphs: [
          'Ciò che può essere sostenuto in appello non coincide automaticamente con ciò che può essere portato in Cassazione. Trasferire meccanicamente le stesse obiezioni è uno degli errori più frequenti.',
          'La sede di legittimità impone invece un lavoro di selezione e di qualificazione giuridica molto più rigoroso.'
        ]
      },
      {
        heading: 'Perché questa distinzione incide anche sulla scelta del professionista',
        paragraphs: [
          'Un fascicolo destinato alla Cassazione richiede una tecnica diversa, non una semplice prosecuzione del lavoro svolto nei gradi precedenti.',
          'Capire il diverso ruolo dei giudizi aiuta a formulare richieste più precise e a valutare correttamente il percorso ancora praticabile.'
        ]
      }
    ],
    checks: [
      'se la critica che si vuole formulare riguarda ancora il merito',
      'se la decisione contiene invece un vero errore di diritto o un vizio di legittimità',
      'se il passaggio da un grado all’altro richiede una nuova impostazione del fascicolo'
    ],
    documents: [
      'provvedimento da esaminare',
      'sintesi della vicenda processuale',
      'eventuali atti essenziali per capire come il tema sia stato già discusso'
    ],
    externalLinks: [
      {
        label: 'funzioni della Corte di Cassazione',
        url: 'https://www.cortedicassazione.it/it/le_funzioni_della_corte.page',
        note: 'È utile per capire perché la Cassazione non coincida con un nuovo grado pieno di merito.'
      }
    ],
    relatedArticles: [
      'quando-conviene-fare-ricorso-per-cassazione-civile',
      'cassazione-civile-e-vizio-di-motivazione',
      'motivi-di-ricorso-in-cassazione-penale'
    ],
    faqs: [
      {
        question: 'La Cassazione è un terzo grado di giudizio nel senso comune del termine?',
        answer:
          'No. Non funziona come una nuova verifica piena del merito, ma come giudizio di legittimità.'
      },
      {
        question: 'Ciò che non ha convinto in appello può sempre essere riproposto in Cassazione?',
        answer:
          'No. Occorre verificare se il profilo sia realmente deducibile in sede di legittimità.'
      },
      {
        question: 'Capire la differenza aiuta anche a impostare meglio il primo contatto?',
        answer:
          'Sì. Permette di chiarire fin dall’inizio quale tipo di controllo giuridico si stia chiedendo.'
      }
    ]
  }),
  createArticle({
    slug: 'motivi-di-ricorso-in-cassazione-penale',
    title: 'Motivi di ricorso in Cassazione penale: cosa va verificato',
    description:
      'Come selezionare i motivi di ricorso in Cassazione penale senza trasformare il fascicolo in una replica generica del merito.',
    category: 'Cassazione penale',
    service: 'cassazione-penale',
    publishedAt: '2026-03-14',
    readTime: '6 min',
    image: '/images/portrait-smile.webp',
    intro:
      'Nel giudizio penale di Cassazione la scelta dei motivi è il cuore del lavoro. Un ricorso eccessivamente ampio, ripetitivo o poco selettivo rischia di indebolire proprio ciò che avrebbe dovuto mettere in evidenza.',
    sections: [
      {
        heading: 'Selezionare i motivi significa distinguere il rilevante dal ridondante',
        paragraphs: [
          'Non tutte le doglianze maturate nel corso del processo hanno lo stesso peso in Cassazione. Il compito del primo esame è individuare quali abbiano reale rilievo di legittimità.',
          'Questo richiede una lettura che sappia separare i punti forti dalle obiezioni solo ripetitive.'
        ]
      },
      {
        heading: 'Il ricorso generico è spesso il nemico del ricorso efficace',
        paragraphs: [
          'Aggiungere motivi non selezionati non rafforza il fascicolo. Al contrario, può renderlo meno leggibile e meno coerente.',
          'Nel giudizio di Cassazione la sintesi non è povertà argomentativa: è precisione tecnica.'
        ]
      },
      {
        heading: 'La valutazione preliminare serve a capire se esista una vera strada difensiva',
        paragraphs: [
          'Prima di scrivere è necessario leggere il provvedimento e gli atti essenziali per capire quali motivi possano essere costruiti in modo serio.',
          'Questo passaggio tutela il cliente da iniziative deboli e da aspettative poco realistiche.'
        ]
      }
    ],
    checks: [
      'se la censura proposta rientra davvero nella legittimità penale',
      'se i motivi sono pochi ma forti, invece che molti e generici',
      'se il provvedimento e gli atti consentono di formulare il ricorso in modo preciso'
    ],
    documents: [
      'sentenza o ordinanza da impugnare',
      'atti e verbali essenziali',
      'cronologia delle notifiche e dei termini'
    ],
    externalLinks: [
      {
        label: 'art. 606 c.p.p.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Apresidente.repubblica%3Acodice.procedura.penale%3A1988-09-22%3B447~art606-com1-letc=',
        note: 'È il testo normativo di riferimento per inquadrare i motivi deducibili in Cassazione penale.'
      }
    ],
    relatedArticles: [
      'ricorso-per-cassazione-penale-e-ammissibilita',
      'differenza-tra-appello-e-cassazione',
      'inammissibilita-del-ricorso-per-cassazione'
    ],
    faqs: [
      {
        question: 'I motivi di ricorso coincidono con qualsiasi doglianza contro la sentenza?',
        answer:
          'No. Devono essere coerenti con i limiti del giudizio di legittimità e formulati con precisione tecnica.'
      },
      {
        question: 'Un ricorso più lungo è necessariamente migliore?',
        answer:
          'No. In Cassazione conta la qualità della selezione, non la quantità delle censure.'
      },
      {
        question: 'Perché servono anche gli atti precedenti?',
        answer:
          'Perché aiutano a capire come si sia formato il provvedimento e quali questioni abbiano davvero rilievo in sede di legittimità.'
      }
    ]
  }),
  createArticle({
    slug: 'ricorso-per-cassazione-penale-e-ammissibilita',
    title: 'Ricorso per Cassazione penale e ammissibilità: i controlli da fare subito',
    description:
      'Quali controlli servono per valutare l’ammissibilità di un ricorso per Cassazione penale e perché termini e motivi vanno letti insieme.',
    category: 'Cassazione penale',
    service: 'cassazione-penale',
    publishedAt: '2026-03-18',
    readTime: '6 min',
    image: '/images/thumb-cassazione-penale.webp',
    intro:
      'Nel penale il tema dell’ammissibilità emerge molto presto. Non basta verificare che il termine non sia scaduto: occorre capire se il ricorso abbia davvero una struttura coerente con la legittimità e con il contenuto del provvedimento impugnato.',
    sections: [
      {
        heading: 'Termini e motivi non possono essere valutati separatamente',
        paragraphs: [
          'Un ricorso tempestivo ma poco selettivo resta un ricorso fragile. Allo stesso modo, un motivo potenzialmente valido diventa inutile se il fascicolo arriva troppo tardi o senza ordine.',
          'Per questo la prima verifica deve leggere insieme tempistiche, atti e qualità delle censure.'
        ]
      },
      {
        heading: 'Ammissibilità significa anche rigore nella costruzione dell’atto',
        paragraphs: [
          'La soglia dell’ammissibilità si gioca spesso sulla chiarezza del motivo, sulla pertinenza della censura e sulla capacità di evitare ripetizioni o deviazioni verso il merito.',
          'Il primo filtro non è quindi un formalismo, ma una verifica sostanziale della tenuta del ricorso.'
        ]
      },
      {
        heading: 'Perché l’urgenza deve essere gestita e non subita',
        paragraphs: [
          'Nei fascicoli con tempi stretti è facile cadere nell’errore di privilegiare la velocità sulla qualità del lavoro iniziale.',
          'In realtà proprio l’urgenza rende ancora più importante una trasmissione ordinata dei documenti essenziali.'
        ]
      }
    ],
    checks: [
      'se il termine utile è stato ricostruito correttamente',
      'se i motivi ipotizzati sono compatibili con la legittimità',
      'se il ricorso può essere costruito in modo tecnico e non meramente reattivo'
    ],
    documents: [
      'provvedimento impugnato',
      'atti essenziali e verbali pertinenti',
      'informazioni su notifiche e scadenze'
    ],
    externalLinks: [
      {
        label: 'art. 606 c.p.p.',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Apresidente.repubblica%3Acodice.procedura.penale%3A1988-09-22%3B447~art606-com1-letc=',
        note: 'Leggere il testo dei motivi tipici aiuta a misurare meglio il tema dell’ammissibilità.'
      }
    ],
    relatedArticles: [
      'motivi-di-ricorso-in-cassazione-penale',
      'differenza-tra-appello-e-cassazione',
      'inammissibilita-del-ricorso-per-cassazione'
    ],
    faqs: [
      {
        question: 'Il rispetto del termine basta per rendere ammissibile il ricorso?',
        answer:
          'No. Il termine è solo uno dei controlli; occorre anche che i motivi siano coerenti e tecnicamente sostenibili.'
      },
      {
        question: 'Perché il rischio di inammissibilità va valutato prima di scrivere?',
        answer:
          'Perché un ricorso mal impostato rischia di indebolirsi fin dalla soglia iniziale del giudizio.'
      },
      {
        question: 'Che cosa rende utile il primo contatto nei casi urgenti?',
        answer:
          'Rende utile inviare subito provvedimento, atti essenziali e indicazione precisa delle scadenze, evitando materiale dispersivo.'
      }
    ]
  }),
  createArticle({
    slug: 'errore-diagnostico-e-ritardo-diagnosi',
    title: 'Errore diagnostico e ritardo nella diagnosi: quando il caso va approfondito',
    description:
      'Come leggere i casi di errore diagnostico o diagnosi tardiva e quali documenti aiutano davvero nella prima valutazione.',
    category: 'Responsabilità medica',
    service: 'responsabilita-medica',
    publishedAt: '2026-03-20',
    readTime: '6 min',
    image: '/images/desk-signature.webp',
    intro:
      'Errore diagnostico e ritardo nella diagnosi sono tra i casi più frequenti in materia di responsabilità sanitaria. Il nodo centrale è distinguere il decorso sfavorevole della patologia da una condotta sanitaria che abbia inciso in modo giuridicamente rilevante.',
    sections: [
      {
        heading: 'La cronologia clinica è il primo documento invisibile del caso',
        paragraphs: [
          'Nei casi diagnostici il tempo è spesso il punto più importante. Occorre ricostruire sintomi, accessi, esami, risposte ricevute e passaggi successivi.',
          'Senza una cronologia chiara è difficile capire se vi sia stato davvero un ritardo e quale peso abbia avuto.'
        ]
      },
      {
        heading: 'Non basta individuare una diagnosi tardiva: serve leggere il nesso con il danno',
        paragraphs: [
          'Una diagnosi arrivata tardi non produce automaticamente responsabilità. Bisogna verificare se il ritardo abbia inciso sul decorso della patologia, sulle possibilità terapeutiche o sull’entità del danno.',
          'La valutazione utile è quindi sempre documentale e causale, non solo descrittiva.'
        ]
      },
      {
        heading: 'Perché i documenti vanno selezionati con ordine',
        paragraphs: [
          'Referti, accessi al pronto soccorso, prescrizioni, cartella clinica ed esami hanno un valore diverso a seconda del punto che devono chiarire.',
          'Il primo esame è più efficace quando il materiale viene già presentato in modo leggibile e cronologico.'
        ]
      }
    ],
    checks: [
      'se i tempi del percorso diagnostico sono ricostruibili con precisione',
      'se esiste un nesso plausibile tra ritardo e peggioramento del danno',
      'se la documentazione clinica consente di leggere i passaggi decisivi'
    ],
    documents: [
      'cartella clinica e referti principali',
      'accessi a pronto soccorso o visite specialistiche',
      'prescrizioni, esami e lettere di dimissione'
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'È il riferimento normativo centrale per il quadro della responsabilità sanitaria.'
      }
    ],
    relatedArticles: [
      'errore-medico-e-documentazione-clinica',
      'errore-chirurgico-quando-il-caso-va-approfondito',
      'responsabilita-medica-e-primo-contatto-con-lo-studio'
    ],
    faqs: [
      {
        question: 'Ogni diagnosi tardiva comporta automaticamente responsabilità?',
        answer:
          'No. Occorre verificare sia la condotta sanitaria sia il rapporto tra ritardo e danno concretamente subito.'
      },
      {
        question: 'Perché la cronologia dei fatti è così importante?',
        answer:
          'Perché nei casi diagnostici il fattore tempo è spesso il punto che consente di capire se il ritardo abbia avuto incidenza reale.'
      },
      {
        question: 'Quali documenti sono più utili nel primo esame?',
        answer:
          'Sono utili i documenti che consentono di ricostruire il percorso diagnostico in ordine cronologico e con precisione.'
      }
    ]
  }),
  createArticle({
    slug: 'consenso-informato-e-risarcimento',
    title: 'Consenso informato e risarcimento: quando il profilo merita attenzione',
    description:
      'Quando il consenso informato assume rilievo nei casi sanitari e perché la sola firma del modulo non esaurisce il problema.',
    category: 'Responsabilità medica',
    service: 'responsabilita-medica',
    publishedAt: '2026-03-22',
    readTime: '5 min',
    image: '/images/portrait-soft.webp',
    intro:
      'Il consenso informato non coincide con la semplice firma di un modulo. Nei casi sanitari conta la qualità dell’informazione effettivamente ricevuta dal paziente sui rischi, sulle alternative e sulle conseguenze del trattamento.',
    sections: [
      {
        heading: 'L’informazione al paziente è parte della cura, non un passaggio burocratico',
        paragraphs: [
          'Quando il paziente non riceve spiegazioni adeguate o riceve informazioni meramente formali, il problema non riguarda solo la carta firmata, ma il diritto di scegliere consapevolmente.',
          'Per questo il consenso informato va valutato nel concreto svolgimento del rapporto sanitario.'
        ]
      },
      {
        heading: 'La firma del modulo non chiude automaticamente il tema',
        paragraphs: [
          'Un modulo può essere presente e tuttavia non bastare. Occorre capire come sia stato utilizzato, che cosa sia stato spiegato e se il paziente abbia realmente compreso il quadro della decisione terapeutica.',
          'Il caso richiede quindi una lettura complessiva, non un controllo puramente formale.'
        ]
      },
      {
        heading: 'Consenso informato e altri profili di responsabilità possono intrecciarsi',
        paragraphs: [
          'Talvolta il problema informativo si accompagna a errori diagnostici, chirurgici o terapeutici. In questi casi la valutazione va tenuta insieme, senza spezzare artificialmente il fascicolo.',
          'La documentazione clinica e i moduli firmati servono proprio a mettere ordine in questi piani diversi.'
        ]
      }
    ],
    checks: [
      'se l’informazione resa al paziente era concreta e comprensibile',
      'se il modulo firmato corrisponde a un reale percorso informativo',
      'se il profilo del consenso si intreccia con altri possibili errori sanitari'
    ],
    documents: [
      'moduli di consenso informato',
      'cartella clinica e referti rilevanti',
      'cronologia del trattamento e delle informazioni ricevute'
    ],
    externalLinks: [
      {
        label: 'consenso informato e DAT',
        url: 'https://www.salute.gov.it/new/it/tema/disposizioni-anticipate-di-trattamento-dat/legge-sul-consenso-informato-e-sulle-dat',
        note: 'Fonte istituzionale utile per il profilo dell’autodeterminazione del paziente.'
      }
    ],
    relatedArticles: [
      'errore-medico-e-documentazione-clinica',
      'errore-chirurgico-quando-il-caso-va-approfondito',
      'responsabilita-medica-e-primo-contatto-con-lo-studio'
    ],
    faqs: [
      {
        question: 'Firmare un modulo esclude sempre problemi di consenso informato?',
        answer:
          'No. La firma non basta se l’informazione resa al paziente era inadeguata o meramente formale.'
      },
      {
        question: 'Il consenso informato può avere un rilievo autonomo?',
        answer:
          'Sì. In alcuni casi costituisce un profilo specifico che va valutato anche separatamente dagli altri errori sanitari.'
      },
      {
        question: 'Quali documenti conviene inviare allo studio?',
        answer:
          'Moduli firmati, documentazione clinica e una descrizione chiara di ciò che è stato spiegato o non spiegato al paziente.'
      }
    ]
  }),
  createArticle({
    slug: 'errore-chirurgico-quando-il-caso-va-approfondito',
    title: 'Errore chirurgico: quando il caso richiede un approfondimento serio',
    description:
      'Come distinguere tra complicanza, rischio noto ed errore chirurgico giuridicamente rilevante, partendo dai documenti giusti.',
    category: 'Responsabilità medica',
    service: 'responsabilita-medica',
    publishedAt: '2026-03-24',
    readTime: '6 min',
    image: '/images/portrait-certificate.webp',
    intro:
      'Non ogni esito chirurgico sfavorevole corrisponde a un errore giuridicamente rilevante. Nei casi di sospetto errore chirurgico servono documenti, cronologia e metodo per distinguere complicanza, rischio noto e condotta censurabile.',
    sections: [
      {
        heading: 'Il risultato negativo, da solo, non qualifica il caso',
        paragraphs: [
          'Un intervento con esito insoddisfacente non implica automaticamente responsabilità. Occorre leggere il quadro clinico di partenza, il tipo di procedura e l’evoluzione post-operatoria.',
          'Solo in questo contesto il dubbio sull’errore può essere valutato con serietà.'
        ]
      },
      {
        heading: 'Referto operatorio e cartella clinica sono i documenti chiave',
        paragraphs: [
          'Nei casi chirurgici la qualità della documentazione conta in modo decisivo. Referto operatorio, cartella clinica, decorso post-operatorio e successivi accertamenti aiutano a comprendere il punto critico.',
          'Un invio ordinato di questi documenti consente un primo esame molto più utile.'
        ]
      },
      {
        heading: 'Complicanza e responsabilità non vanno confuse',
        paragraphs: [
          'Anche quando esiste una complicanza, occorre capire se il suo verificarsi rientrasse nel rischio della procedura oppure se vi sia stata una gestione scorretta del caso.',
          'La valutazione richiede quindi una lettura complessiva, non impressionistica.'
        ]
      }
    ],
    checks: [
      'se la documentazione descrive bene intervento, decorso e passaggi successivi',
      'se il problema lamentato è compatibile con una complicanza o con un errore di gestione',
      'se il danno è leggibile insieme al percorso chirurgico effettivo'
    ],
    documents: [
      'cartella clinica',
      'referto operatorio',
      'documentazione post-operatoria e successivi accertamenti'
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'È il quadro normativo di riferimento anche per i casi di responsabilità chirurgica.'
      }
    ],
    relatedArticles: [
      'errore-diagnostico-e-ritardo-diagnosi',
      'errore-medico-e-documentazione-clinica',
      'consenso-informato-e-risarcimento'
    ],
    faqs: [
      {
        question: 'Un esito chirurgico negativo basta per parlare di errore?',
        answer:
          'No. Occorre distinguere tra esito sfavorevole, complicanza e condotta chirurgica realmente censurabile.'
      },
      {
        question: 'Quali documenti sono più importanti?',
        answer:
          'Cartella clinica, referto operatorio e documentazione post-operatoria sono i primi documenti da leggere con attenzione.'
      },
      {
        question: 'Perché serve una valutazione preliminare selettiva?',
        answer:
          'Perché aiuta a capire se la vicenda abbia una base documentale sufficiente e se il dubbio sull’errore sia davvero sostenibile.'
      }
    ]
  }),
  createArticle({
    slug: 'errore-medico-e-documentazione-clinica',
    title: 'Errore medico e documentazione clinica: quali carte fanno davvero la differenza',
    description:
      'Quali documenti contano nei casi di errore medico e come organizzare il materiale clinico per un primo esame realmente utile.',
    category: 'Responsabilità medica',
    service: 'responsabilita-medica',
    publishedAt: '2026-03-26',
    readTime: '5 min',
    image: '/images/desk-signature.webp',
    intro:
      'Nei casi di responsabilità medica il punto non è avere molte carte, ma avere le carte giuste e in ordine. La qualità della documentazione clinica incide direttamente sulla qualità della valutazione legale.',
    sections: [
      {
        heading: 'La documentazione non è un allegato: è la struttura del caso',
        paragraphs: [
          'Cartella clinica, referti, lettere di dimissione, esami e consensi informati non sono semplici supporti. Sono gli elementi che permettono di leggere tempi, scelte e passaggi decisivi del percorso sanitario.',
          'Senza questa base il rischio è di formulare un sospetto, non una vera analisi.'
        ]
      },
      {
        heading: 'Meglio pochi documenti chiari che materiale dispersivo',
        paragraphs: [
          'Una delle difficoltà più frequenti nasce dall’invio di documenti numerosi ma non selezionati. Il primo esame diventa molto più utile quando il materiale è organizzato per data e per funzione.',
          'La selezione del materiale non riduce il caso: lo rende leggibile.'
        ]
      },
      {
        heading: 'La cronologia accompagna sempre i documenti',
        paragraphs: [
          'Anche la migliore documentazione ha bisogno di una cronologia minima che chiarisca accessi, decisioni, ricoveri e passaggi terapeutici.',
          'Questo consente di capire più rapidamente se la vicenda presenti un vero profilo di responsabilità da approfondire.'
        ]
      }
    ],
    checks: [
      'se la documentazione copre i momenti decisivi del percorso di cura',
      'se i documenti sono ordinati per data e tipologia',
      'se esiste una cronologia che colleghi le carte ai fatti'
    ],
    documents: [
      'cartella clinica',
      'referti diagnostici e lettere di dimissione',
      'moduli di consenso informato e documenti successivi rilevanti'
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'Richiamarla è utile per collocare correttamente il tema della responsabilità sanitaria.'
      }
    ],
    relatedArticles: [
      'errore-diagnostico-e-ritardo-diagnosi',
      'consenso-informato-e-risarcimento',
      'responsabilita-medica-e-primo-contatto-con-lo-studio'
    ],
    faqs: [
      {
        question: 'Serve inviare tutta la documentazione clinica?',
        answer:
          'Non necessariamente tutta, ma certamente quella che consente di ricostruire i passaggi decisivi del percorso di cura.'
      },
      {
        question: 'Perché l’ordine del materiale è così importante?',
        answer:
          'Perché riduce la dispersione e rende più efficace la prima lettura del caso.'
      },
      {
        question: 'La cronologia dei fatti aiuta davvero?',
        answer:
          'Sì. È spesso il ponte che collega i documenti alla possibile responsabilità sanitaria.'
      }
    ]
  }),
  createArticle({
    slug: 'responsabilita-medica-e-primo-contatto-con-lo-studio',
    title: 'Responsabilità medica e primo contatto con lo studio: come prepararlo bene',
    description:
      'Come organizzare il primo contatto per un caso di responsabilità medica e quali materiali aiutano davvero la valutazione iniziale.',
    category: 'Responsabilità medica',
    service: 'responsabilita-medica',
    publishedAt: '2026-03-28',
    readTime: '5 min',
    image: '/images/portrait-standing.webp',
    intro:
      'Nel contenzioso sanitario il primo contatto è utile quando mette subito a fuoco il punto clinico, il danno subito e i documenti disponibili. Una richiesta troppo generica rende più difficile capire se il caso meriti un approfondimento serio.',
    sections: [
      {
        heading: 'Il primo contatto deve chiarire il problema, non raccontare tutto in modo indistinto',
        paragraphs: [
          'È utile indicare in poche righe il tipo di intervento o di cura, il problema principale, il danno lamentato e i passaggi già noti.',
          'Questo permette di orientare subito la lettura dei documenti più rilevanti.'
        ]
      },
      {
        heading: 'Documenti selezionati e cronologia essenziale aiutano più di un invio massivo',
        paragraphs: [
          'Nei casi di responsabilità medica conviene allegare le carte centrali e accompagnarle con una cronologia minima. In questo modo il primo esame può concentrarsi sui passaggi davvero decisivi.',
          'Una documentazione già ordinata riduce i tempi morti e rende il confronto più utile per il cliente.'
        ]
      },
      {
        heading: 'Che cosa si ottiene da una richiesta iniziale ben costruita',
        paragraphs: [
          'Una richiesta chiara consente di capire se il caso presenti una base sufficiente, quali documenti manchino ancora e quale taglio di approfondimento sia necessario.',
          'Anche quando la risposta è prudente, il primo contatto resta utile perché orienta i passaggi successivi.'
        ]
      }
    ],
    checks: [
      'se il problema clinico è esposto in modo chiaro e sintetico',
      'se il danno lamentato è descritto in termini concreti',
      'se i documenti iniziali consentono una lettura preliminare del percorso sanitario'
    ],
    documents: [
      'cartella clinica o referti principali',
      'cronologia essenziale dei fatti',
      'eventuali consensi informati e documentazione successiva'
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'È la cornice normativa di riferimento anche quando si imposta il primo esame del caso.'
      }
    ],
    relatedArticles: [
      'errore-medico-e-documentazione-clinica',
      'errore-diagnostico-e-ritardo-diagnosi',
      'consenso-informato-e-risarcimento'
    ],
    faqs: [
      {
        question: 'Meglio inviare tutto o selezionare i file?',
        answer:
          'Per il primo contatto è preferibile inviare pochi documenti davvero centrali, ben identificati e accompagnati da una cronologia sintetica.'
      },
      {
        question: 'È utile spiegare subito il danno lamentato?',
        answer:
          'Sì. Aiuta a capire perché il caso viene sottoposto allo studio e quale aspetto debba essere verificato con priorità.'
      },
      {
        question: 'Una richiesta iniziale ordinata accelera davvero la valutazione?',
        answer:
          'Sì. Riduce la dispersione del materiale e permette una prima lettura più concreta e meno astratta.'
      }
    ]
  }),
  createArticle({
    slug: 'decesso-del-paziente-e-responsabilita-sanitaria',
    title: 'Decesso del paziente e responsabilità sanitaria: profili da verificare',
    description:
      'Come orientarsi nei casi di possibile responsabilità sanitaria con esito mortale e quali elementi servono per una prima valutazione seria.',
    category: 'Responsabilità medica',
    service: 'responsabilita-medica',
    publishedAt: '2026-03-30',
    readTime: '6 min',
    image: '/images/team-meeting.webp',
    intro:
      'Quando un percorso di cura si conclude con il decesso del paziente, il bisogno di capire è immediato. Anche in questi casi, però, la valutazione deve partire dai documenti e dalla ricostruzione del percorso clinico, non da una lettura emotiva o incompleta della vicenda.',
    sections: [
      {
        heading: 'Nei casi con esito mortale la ricostruzione del percorso clinico è ancora più decisiva',
        paragraphs: [
          'Bisogna capire quali decisioni siano state prese, in quali tempi, con quali esami e con quali alternative terapeutiche disponibili.',
          'Solo una lettura ordinata del percorso consente di capire se vi sia stato un profilo sanitario rilevante.'
        ]
      },
      {
        heading: 'Il danno dei familiari richiede una lettura distinta dal solo evento sanitario',
        paragraphs: [
          'Accanto al profilo medico-sanitario, in questi casi assume rilievo anche il danno subito dai congiunti. Per questo il fascicolo va letto su più piani, evitando semplificazioni.',
          'La qualità della documentazione clinica resta comunque il primo punto di appoggio.'
        ]
      },
      {
        heading: 'Perché il primo filtro tecnico è utile anche nei casi più dolorosi',
        paragraphs: [
          'Una valutazione iniziale ordinata consente di distinguere ciò che è già documentato da ciò che richiede ulteriori approfondimenti.',
          'Questo aiuta a trasformare una vicenda molto complessa in un fascicolo leggibile e giuridicamente verificabile.'
        ]
      }
    ],
    checks: [
      'se il percorso clinico è ricostruibile nei suoi passaggi decisivi',
      'se la documentazione consente di leggere scelte, tempi e conseguenze',
      'se i danni dei familiari vanno valutati anche su un piano distinto'
    ],
    documents: [
      'cartella clinica e referti',
      'documenti relativi al ricovero e alle scelte terapeutiche',
      'eventuale documentazione successiva utile ai familiari'
    ],
    externalLinks: [
      {
        label: 'Legge 24/2017',
        url: 'https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2017-03-08%3B24%21vig=',
        note: 'È il riferimento normativo utile per collocare correttamente il tema della responsabilità sanitaria.'
      }
    ],
    relatedArticles: [
      'errore-medico-e-documentazione-clinica',
      'errore-diagnostico-e-ritardo-diagnosi',
      'responsabilita-medica-e-primo-contatto-con-lo-studio'
    ],
    faqs: [
      {
        question: 'Il decesso del paziente implica automaticamente responsabilità sanitaria?',
        answer:
          'No. Occorre verificare documenti, tempi e nesso tra condotta sanitaria ed esito della vicenda.'
      },
      {
        question: 'Perché la cartella clinica è così importante?',
        answer:
          'Perché consente di leggere il percorso di cura e le scelte decisive nel loro contesto reale.'
      },
      {
        question: 'Il danno dei familiari va considerato separatamente?',
        answer:
          'Sì. Nei casi con esito mortale il profilo dei congiunti richiede una valutazione autonoma e distinta.'
      }
    ]
  }),
  createArticle({
    slug: 'cosa-fare-dopo-un-incidente-stradale-grave',
    title: 'Cosa fare dopo un incidente stradale grave',
    description:
      'I primi passaggi utili dopo un incidente stradale grave, con attenzione a documenti, cure, dinamica del sinistro e tutela delle conseguenze future.',
    category: 'Incidenti stradali gravi',
    service: 'risarcimento-danni-incidente-stradale',
    publishedAt: '2026-04-01',
    readTime: '6 min',
    image: '/images/thumb-incidente-stradale.webp',
    intro:
      'Dopo un incidente stradale grave la priorità è sanitaria, ma già dai primi giorni diventa importante non perdere informazioni e documenti che incideranno sulla ricostruzione del danno. Nei sinistri seri il fascicolo va costruito fin dall’inizio.',
    sections: [
      {
        heading: 'Cure immediate e ricostruzione del fatto devono procedere insieme',
        paragraphs: [
          'Nei casi più gravi ricoveri, interventi e controlli clinici assorbono tutta l’attenzione. Proprio per questo è utile conservare fin da subito verbali, referti, certificati e informazioni sulla dinamica del sinistro.',
          'Ciò che non viene organizzato all’inizio rischia di diventare molto più difficile da ricostruire in seguito.'
        ]
      },
      {
        heading: 'Il danno grave non si esaurisce nei primi referti',
        paragraphs: [
          'Invalidità, necessità assistenziali, perdita di reddito e conseguenze sui familiari emergono spesso nel tempo. Per questo il fascicolo deve restare aperto alla raccolta progressiva di documenti e informazioni.',
          'Una lettura anticipata del caso aiuta a capire quali profili meritino attenzione fin dai primi passaggi.'
        ]
      },
      {
        heading: 'Perché è utile chiedere una valutazione quando il quadro inizia a definirsi',
        paragraphs: [
          'Il primo esame consente di capire quali voci di danno siano già leggibili e quali documenti manchino ancora per una ricostruzione completa.',
          'Nei sinistri gravi non serve correre in modo generico: serve mettere in ordine dinamica, danni e materiali disponibili.'
        ]
      }
    ],
    checks: [
      'se la dinamica del sinistro è già documentata in modo sufficiente',
      'se i documenti sanitari sono conservati in ordine cronologico',
      'se emergono già postumi, perdite economiche o riflessi sui familiari'
    ],
    documents: [
      'verbale, modulo CAI o altri atti sulla dinamica',
      'referti, ricoveri, cartelle cliniche e certificazioni',
      'documenti su lavoro, reddito, spese e assistenza'
    ],
    externalLinks: [
      {
        label: 'cosa fare in caso di sinistro',
        url: 'https://www.ivass.it/consumatori/rc-auto/sinistri/index.html',
        note: 'È un riferimento istituzionale utile per gli adempimenti di base nella gestione del sinistro.'
      }
    ],
    relatedArticles: [
      'danno-biologico-permanente-cosa-verificare',
      'perdita-del-rapporto-parentale-criteri-di-valutazione',
      'risarcimento-danni-e-prova-del-pregiudizio'
    ],
    faqs: [
      {
        question: 'Dopo un incidente grave quali documenti conviene conservare subito?',
        answer:
          'Conviene conservare verbali, referti, certificati, documenti sui ricoveri e ogni elemento utile sulla dinamica e sulle conseguenze del sinistro.'
      },
      {
        question: 'Perché il danno va monitorato anche dopo le prime cure?',
        answer:
          'Perché molte conseguenze, soprattutto nei casi gravi, emergono nel tempo e richiedono una raccolta ordinata dei documenti successivi.'
      },
      {
        question: 'Quando ha senso chiedere una valutazione legale?',
        answer:
          'Quando il quadro sanitario e documentale consente di iniziare a leggere in modo serio la struttura del danno e le sue possibili evoluzioni.'
      }
    ]
  }),
  createArticle({
    slug: 'danno-biologico-permanente-cosa-verificare',
    title: 'Danno biologico permanente: cosa verificare',
    description:
      'Che cosa controllare quando il danno biologico può avere carattere permanente e perché documenti medici e impatto concreto vanno letti insieme.',
    category: 'Risarcimento danni',
    service: 'risarcimento-danni',
    publishedAt: '2026-04-03',
    readTime: '5 min',
    image: '/images/thumb-risarcimento-danni.webp',
    intro:
      'Quando una lesione lascia postumi permanenti, il tema non è solo medico. Occorre capire come quel danno incida sulla vita quotidiana, sul lavoro, sull’autonomia personale e sulla prova delle conseguenze future.',
    sections: [
      {
        heading: 'Il danno biologico permanente richiede documenti e prospettiva',
        paragraphs: [
          'Nei casi di postumi permanenti la valutazione non si limita alla fase acuta dell’evento. Contano l’evoluzione clinica, gli accertamenti successivi e la stabilizzazione del quadro.',
          'La qualità del fascicolo dipende dalla capacità di leggere nel tempo gli effetti residui della lesione.'
        ]
      },
      {
        heading: 'Le conseguenze concrete vanno descritte oltre il dato sanitario',
        paragraphs: [
          'Il danno permanente incide spesso sul lavoro, sulle attività quotidiane, sulla necessità di assistenza e sulla qualità della vita.',
          'Per questo la documentazione medica deve essere accompagnata da elementi che spieghino l’impatto concreto del pregiudizio.'
        ]
      },
      {
        heading: 'Perché una valutazione ordinata evita sottostime del caso',
        paragraphs: [
          'Nei fascicoli con postumi permanenti il rischio è semplificare il danno o trascurare conseguenze che emergono solo con una lettura più attenta.',
          'Un primo esame tecnico serve proprio a capire se il quadro sia già sufficientemente maturo e documentato.'
        ]
      }
    ],
    checks: [
      'se i postumi sono documentati con referti e controlli successivi',
      'se l’impatto sulla vita quotidiana e lavorativa è descritto in modo concreto',
      'se il danno permanente richiede anche una lettura patrimoniale o assistenziale'
    ],
    documents: [
      'referti medici e certificazioni sui postumi',
      'documenti su terapie, controlli e limitazioni residue',
      'eventuali materiali su reddito, spese e necessità assistenziali'
    ],
    externalLinks: [
      {
        label: 'cosa fare in caso di sinistro',
        url: 'https://www.ivass.it/consumatori/rc-auto/sinistri/index.html',
        note: 'È utile per il quadro generale dei passaggi iniziali collegati al sinistro che ha generato il danno.'
      }
    ],
    relatedArticles: [
      'risarcimento-danni-e-prova-del-pregiudizio',
      'cosa-fare-dopo-un-incidente-stradale-grave',
      'perdita-del-rapporto-parentale-criteri-di-valutazione'
    ],
    faqs: [
      {
        question: 'Che cosa cambia quando il danno biologico è permanente?',
        answer:
          'Cambia il peso delle conseguenze nel tempo: contano non solo le cure iniziali, ma anche i postumi stabili e il loro impatto concreto sulla vita della persona.'
      },
      {
        question: 'Bastano i referti medici?',
        answer:
          'Sono indispensabili, ma spesso devono essere affiancati da elementi che descrivano le ricadute pratiche, lavorative o assistenziali.'
      },
      {
        question: 'Quando conviene far valutare il fascicolo?',
        answer:
          'Quando il quadro dei postumi inizia a definirsi e la documentazione consente di leggere con maggiore chiarezza il danno residuo.'
      }
    ]
  }),
  createArticle({
    slug: 'risarcimento-danni-e-prova-del-pregiudizio',
    title: 'Risarcimento danni e prova del pregiudizio: da dove partire',
    description:
      'Perché la prova del pregiudizio è centrale nei casi di risarcimento danni e quali documenti aiutano a costruire un fascicolo leggibile.',
    category: 'Risarcimento danni',
    service: 'risarcimento-danni',
    publishedAt: '2026-04-05',
    readTime: '5 min',
    image: '/images/team-selfie.webp',
    intro:
      'Nel risarcimento danni il problema non è soltanto dimostrare che un fatto sia avvenuto. Occorre anche provare il pregiudizio che ne è derivato, distinguere le diverse voci di danno e collegarle in modo ordinato ai documenti disponibili.',
    sections: [
      {
        heading: 'La prova del danno è parte della strategia, non una fase successiva',
        paragraphs: [
          'Molti fascicoli si indeboliscono perché il danno viene descritto in modo generico, senza una vera selezione delle prove utili.',
          'In realtà la domanda risarcitoria si costruisce già sulla capacità di mostrare come il fatto abbia inciso sulla persona o sul patrimonio.'
        ]
      },
      {
        heading: 'Danni alla persona e danni patrimoniali richiedono materiali diversi',
        paragraphs: [
          'Referti, certificazioni, verbali e documenti economici non hanno tutti la stessa funzione. La qualità del fascicolo dipende dalla capacità di metterli in relazione con la specifica voce di pregiudizio che devono sostenere.',
          'Questa lettura selettiva evita sovrapposizioni e dispersione.'
        ]
      },
      {
        heading: 'Perché il primo esame serve anche a capire che cosa manca',
        paragraphs: [
          'Una valutazione utile non si limita a leggere ciò che è già disponibile. Serve anche a capire quali prove siano ancora da integrare e quali aspetti del danno debbano essere meglio documentati.',
          'Questo passaggio è particolarmente importante quando il pregiudizio evolve nel tempo.'
        ]
      }
    ],
    checks: [
      'se il danno è distinto nelle sue componenti principali',
      'se esistono documenti coerenti con ciascuna voce di pregiudizio',
      'se il rapporto tra fatto e danno è leggibile anche sul piano causale'
    ],
    documents: [
      'referti, verbali e documenti che descrivono l’evento',
      'certificazioni sanitarie o economiche sul pregiudizio',
      'materiali su spese, perdita di reddito o limitazioni quotidiane'
    ],
    externalLinks: [
      {
        label: 'cosa fare in caso di sinistro',
        url: 'https://www.ivass.it/consumatori/rc-auto/sinistri/index.html',
        note: 'È una fonte istituzionale coerente con i casi in cui il danno nasce da un sinistro stradale.'
      }
    ],
    relatedArticles: [
      'danno-biologico-permanente-cosa-verificare',
      'perdita-del-rapporto-parentale-criteri-di-valutazione',
      'cosa-fare-dopo-un-incidente-stradale-grave'
    ],
    faqs: [
      {
        question: 'Perché non basta dimostrare il fatto che ha causato il danno?',
        answer:
          'Perché nel risarcimento occorre anche provare la consistenza concreta del pregiudizio e il suo rapporto con l’evento.'
      },
      {
        question: 'I documenti economici sono importanti quanto quelli medici?',
        answer:
          'Sì, quando il danno ha una componente patrimoniale o incide sul lavoro, sulle spese o sull’assistenza necessaria.'
      },
      {
        question: 'A che cosa serve il primo filtro sul fascicolo?',
        answer:
          'Serve a capire non solo ciò che già prova il danno, ma anche quali elementi vadano ancora integrati per dare solidità alla domanda.'
      }
    ]
  }),
  createArticle({
    slug: 'perdita-del-rapporto-parentale-criteri-di-valutazione',
    title: 'Perdita del rapporto parentale: criteri di valutazione e documenti utili',
    description:
      'Come orientarsi nei casi di perdita del rapporto parentale e quali elementi aiutano a leggere il danno dei familiari in modo non generico.',
    category: 'Risarcimento danni',
    service: 'risarcimento-danni-incidente-stradale',
    publishedAt: '2026-04-07',
    readTime: '6 min',
    image: '/images/team-boardroom.webp',
    intro:
      'Il danno da perdita del rapporto parentale riguarda i familiari e richiede una valutazione autonoma rispetto all’evento che ha causato il decesso. Non può essere trattato come una voce accessoria: va letto nei suoi riflessi concreti e nella qualità del rapporto interrotto.',
    sections: [
      {
        heading: 'Il danno dei congiunti va ricostruito con una logica propria',
        paragraphs: [
          'Nei casi di decesso non si guarda soltanto alla gravità dell’evento, ma anche alla relazione concreta tra la vittima e i familiari che subiscono il pregiudizio.',
          'Per questo il fascicolo richiede documenti e informazioni specifiche, non una semplice estensione del danno principale.'
        ]
      },
      {
        heading: 'La qualità del rapporto conta nella lettura del caso',
        paragraphs: [
          'La convivenza, la frequenza dei contatti, il ruolo di cura, il sostegno economico o affettivo e la struttura del nucleo familiare sono profili che possono incidere in modo rilevante.',
          'Una ricostruzione concreta del rapporto rende il caso più leggibile e meno astratto.'
        ]
      },
      {
        heading: 'Perché conviene organizzare subito i documenti dei familiari',
        paragraphs: [
          'Oltre agli atti sul sinistro o sull’evento, è utile raccogliere ciò che descrive il legame familiare e le conseguenze subite dai congiunti.',
          'Questa base aiuta a impostare il fascicolo senza trascurare un profilo spesso decisivo nei casi più gravi.'
        ]
      }
    ],
    checks: [
      'se il rapporto familiare è descritto in modo concreto e documentabile',
      'se i danni dei congiunti sono distinti dal danno della vittima primaria',
      'se esistono documenti o elementi utili a ricostruire la vita familiare precedente'
    ],
    documents: [
      'atti relativi all’evento che ha provocato il decesso',
      'stato di famiglia e documenti sul nucleo familiare',
      'materiali utili a descrivere il rapporto e le conseguenze sui congiunti'
    ],
    externalLinks: [
      {
        label: 'cosa fare in caso di sinistro',
        url: 'https://www.ivass.it/consumatori/rc-auto/sinistri/index.html',
        note: 'È utile quando il danno dei familiari nasce da un sinistro stradale grave o mortale.'
      }
    ],
    relatedArticles: [
      'cosa-fare-dopo-un-incidente-stradale-grave',
      'risarcimento-danni-e-prova-del-pregiudizio',
      'danno-biologico-permanente-cosa-verificare'
    ],
    faqs: [
      {
        question: 'La perdita del rapporto parentale è una voce distinta di danno?',
        answer:
          'Sì. Richiede una valutazione autonoma riferita ai familiari che subiscono il pregiudizio.'
      },
      {
        question: 'Perché conta la qualità concreta del rapporto familiare?',
        answer:
          'Perché aiuta a dare misura reale al danno, evitando una ricostruzione astratta o standardizzata.'
      },
      {
        question: 'Quali documenti conviene raccogliere?',
        answer:
          'Oltre agli atti sull’evento, sono utili i documenti che descrivono il nucleo familiare e il rapporto con la persona deceduta.'
      }
    ]
  }),
  createArticle({
    slug: 'infortunio-sul-lavoro-e-danno-differenziale',
    title: 'Infortunio sul lavoro e danno differenziale: quando serve approfondire',
    description:
      'Come leggere il danno differenziale nei casi di infortunio sul lavoro e perché serve distinguere ciò che è già coperto da ciò che resta da verificare.',
    category: 'Infortuni sul lavoro',
    service: 'infortuni-sul-lavoro',
    publishedAt: '2026-04-09',
    readTime: '6 min',
    image: '/images/thumb-infortuni-lavoro.webp',
    intro:
      'Il tema del danno differenziale emerge quando, dopo un infortunio sul lavoro, occorre capire se il piano indennitario esaurisca davvero tutte le conseguenze subite oppure se vi siano componenti ulteriori da leggere separatamente.',
    sections: [
      {
        heading: 'Indennizzo e risarcimento non sono la stessa cosa',
        paragraphs: [
          'Il primo punto è distinguere tra ciò che è già stato riconosciuto sul piano assicurativo e ciò che, eventualmente, richiede una verifica ulteriore.',
          'Questa distinzione non si fa in astratto, ma leggendo postumi, documenti e conseguenze residue del caso concreto.'
        ]
      },
      {
        heading: 'I postumi permanenti cambiano il peso del fascicolo',
        paragraphs: [
          'Quando l’infortunio lascia conseguenze stabili, la lettura del danno richiede maggiore precisione. Capacità lavorativa, autonomia personale, necessità assistenziali e impatto economico vanno considerati insieme.',
          'Una ricostruzione sommaria rischia di trascurare proprio i profili più rilevanti.'
        ]
      },
      {
        heading: 'Perché il primo esame documentale è decisivo',
        paragraphs: [
          'Per capire se vi sia spazio per una tutela ulteriore occorre leggere con attenzione certificazioni mediche, atti relativi all’evento, prestazioni già ottenute e quadro lavorativo.',
          'Il primo filtro aiuta a capire se il caso meriti un approfondimento strutturato e su quali punti.'
        ]
      }
    ],
    checks: [
      'se i postumi residui sono documentati con precisione',
      'se il piano indennitario già ottenuto è chiaramente ricostruibile',
      'se esistono conseguenze personali o patrimoniali ancora da leggere separatamente'
    ],
    documents: [
      'certificazioni mediche e documenti sui postumi',
      'atti relativi all’infortunio e alle prestazioni già ottenute',
      'documenti sulla posizione lavorativa e sulle perdite economiche'
    ],
    externalLinks: [
      {
        label: 'prestazioni economiche INAIL',
        url: 'https://www.inail.it/portale/assicurazione/it/lassicurazione-inail/quali-sono-le-prestazioni-di-inail/prestazioni-economiche.html',
        note: 'È utile per collocare il piano indennitario rispetto ai profili che restano ancora da verificare.'
      }
    ],
    relatedArticles: [
      'responsabilita-del-datore-di-lavoro-cosa-verificare',
      'infortunio-in-itinere-quando-serve-approfondire',
      'risarcimento-danni-e-prova-del-pregiudizio'
    ],
    faqs: [
      {
        question: 'Che cosa si intende per danno differenziale?',
        answer:
          'È il tema che impone di verificare se, rispetto a quanto già coperto sul piano indennitario, restino componenti di danno da leggere separatamente.'
      },
      {
        question: 'Quando conviene approfondire questo profilo?',
        answer:
          'Quando l’infortunio ha lasciato postumi significativi o conseguenze economiche e personali non immediatamente esaurite dalle prestazioni già riconosciute.'
      },
      {
        question: 'Quali documenti aiutano di più nel primo esame?',
        answer:
          'Aiutano certificazioni mediche, atti sull’infortunio, documenti sulle prestazioni ottenute e materiali sulla posizione lavorativa.'
      }
    ]
  }),
  createArticle({
    slug: 'responsabilita-del-datore-di-lavoro-cosa-verificare',
    title: 'Responsabilità del datore di lavoro: cosa verificare dopo un infortunio',
    description:
      'Quali elementi controllare quando un infortunio sul lavoro pone dubbi sulle misure di sicurezza e sulla responsabilità del datore.',
    category: 'Infortuni sul lavoro',
    service: 'infortuni-sul-lavoro',
    publishedAt: '2026-04-11',
    readTime: '5 min',
    image: '/images/team-boardroom.webp',
    intro:
      'Dopo un infortunio sul lavoro il tema della responsabilità del datore richiede una lettura concreta del contesto in cui l’evento si è verificato. Non basta il dato dell’infortunio: occorre capire come si lavorava, quali presidi esistevano e quali passaggi siano documentabili.',
    sections: [
      {
        heading: 'La dinamica dell’evento va letta insieme al contesto lavorativo',
        paragraphs: [
          'Per comprendere se vi sia un profilo datoriale rilevante bisogna ricostruire mansioni, ambiente di lavoro, modalità operative e presidi di sicurezza presenti o mancanti.',
          'Questa lettura è tanto più importante quanto più l’infortunio ha prodotto conseguenze serie.'
        ]
      },
      {
        heading: 'Gli atti aziendali e le comunicazioni possono fare la differenza',
        paragraphs: [
          'Documenti interni, procedure, segnalazioni, verbali e comunicazioni possono contribuire a definire meglio il contesto in cui l’evento si è verificato.',
          'Anche in questa materia la qualità del materiale iniziale incide sulla qualità della valutazione.'
        ]
      },
      {
        heading: 'Perché conviene organizzare il fascicolo prima di formulare conclusioni',
        paragraphs: [
          'Attribuire una responsabilità senza una ricostruzione ordinata del contesto espone il caso a semplificazioni pericolose.',
          'Il primo esame serve proprio a verificare quali elementi esistano e quali passaggi debbano essere ancora chiariti.'
        ]
      }
    ],
    checks: [
      'se la dinamica dell’infortunio è stata descritta con precisione',
      'se esistono documenti sul contesto di lavoro e sulle misure di sicurezza',
      'se il quadro dei postumi aiuta a misurare il peso concreto del caso'
    ],
    documents: [
      'atti relativi all’evento',
      'documenti aziendali o interni pertinenti',
      'certificazioni mediche e documenti sulla posizione lavorativa'
    ],
    externalLinks: [
      {
        label: 'denuncia di infortunio sul lavoro',
        url: 'https://www.inail.it/portale/assicurazione/it/Datore-di-Lavoro/Impresa-con-dipendenti-industria-artigianato-terziario-altre-attivita/denunce-infortuni-e-malattie-professionali-impresa-con-dipendenti/denuncia-comunicazione-di-infortunio-sul-lavoro-impresa-con-dipendenti.html',
        note: 'È un riferimento istituzionale utile per collocare il quadro degli adempimenti legati all’evento.'
      }
    ],
    relatedArticles: [
      'infortunio-sul-lavoro-e-danno-differenziale',
      'infortunio-in-itinere-quando-serve-approfondire',
      'risarcimento-danni-e-prova-del-pregiudizio'
    ],
    faqs: [
      {
        question: 'Quando ha senso approfondire la responsabilità del datore di lavoro?',
        answer:
          'Quando la dinamica dell’infortunio e il contesto lavorativo pongono dubbi seri sulle misure di sicurezza o sull’organizzazione dell’attività.'
      },
      {
        question: 'Che cosa conta oltre al verbale dell’infortunio?',
        answer:
          'Contano anche documenti interni, procedure, segnalazioni e materiali che aiutino a ricostruire il contesto di lavoro.'
      },
      {
        question: 'Perché non conviene saltare il primo filtro documentale?',
        answer:
          'Perché una conclusione prematura sulla responsabilità rischia di poggiare su basi incomplete o poco leggibili.'
      }
    ]
  }),
  createArticle({
    slug: 'infortunio-in-itinere-quando-serve-approfondire',
    title: 'Infortunio in itinere: quando serve approfondire',
    description:
      'Quando un infortunio in itinere merita un approfondimento legale e quali documenti aiutano a leggere correttamente il caso.',
    category: 'Infortuni sul lavoro',
    service: 'infortuni-sul-lavoro',
    publishedAt: '2026-04-13',
    readTime: '5 min',
    image: '/images/thumb-infortuni-lavoro.webp',
    intro:
      'L’infortunio in itinere richiede spesso di chiarire con precisione il contesto del tragitto, la dinamica dell’evento e le conseguenze subite. Anche in questi casi il primo problema è documentale: capire che cosa sia già dimostrabile e che cosa no.',
    sections: [
      {
        heading: 'Il tragitto e le sue circostanze sono parte integrante del caso',
        paragraphs: [
          'Per valutare correttamente un infortunio in itinere è essenziale ricostruire orari, percorso, modalità di spostamento e ragioni del tragitto.',
          'Una narrazione approssimativa rende più difficile comprendere il perimetro della vicenda.'
        ]
      },
      {
        heading: 'Le conseguenze dell’infortunio restano centrali',
        paragraphs: [
          'Come per ogni altro infortunio, contano la gravità delle lesioni, i postumi e le ricadute lavorative o personali. La natura del tragitto non elimina la necessità di leggere bene il danno.',
          'Per questo i documenti medici e la cronologia degli eventi restano indispensabili.'
        ]
      },
      {
        heading: 'Perché il primo esame serve a capire se il fascicolo è già maturo',
        paragraphs: [
          'Una verifica iniziale aiuta a capire se la ricostruzione del tragitto sia già sufficientemente chiara e se il danno sia documentato in modo adeguato.',
          'Questo consente di orientare meglio i passaggi successivi e di evitare richieste ancora troppo generiche.'
        ]
      }
    ],
    checks: [
      'se il tragitto è ricostruito con precisione',
      'se esistono documenti sull’evento e sulla sua collocazione temporale',
      'se le conseguenze mediche e lavorative sono già leggibili'
    ],
    documents: [
      'atti relativi all’evento',
      'documentazione medica e certificazioni',
      'elementi utili a chiarire orario, percorso e finalità dello spostamento'
    ],
    externalLinks: [
      {
        label: 'prestazioni economiche INAIL',
        url: 'https://www.inail.it/portale/assicurazione/it/lassicurazione-inail/quali-sono-le-prestazioni-di-inail/prestazioni-economiche.html',
        note: 'È utile per collocare il tema dell’infortunio in itinere nel quadro più ampio delle prestazioni riconosciute.'
      }
    ],
    relatedArticles: [
      'infortunio-sul-lavoro-e-danno-differenziale',
      'responsabilita-del-datore-di-lavoro-cosa-verificare',
      'cosa-fare-dopo-un-incidente-stradale-grave'
    ],
    faqs: [
      {
        question: 'Che cosa conta davvero in un infortunio in itinere?',
        answer:
          'Conta la ricostruzione precisa del tragitto, delle sue circostanze e delle conseguenze concrete dell’evento.'
      },
      {
        question: 'I documenti medici restano centrali anche qui?',
        answer:
          'Sì. La natura del tragitto non cambia la necessità di documentare con precisione danni, postumi e ricadute lavorative.'
      },
      {
        question: 'Quando è utile una valutazione preliminare?',
        answer:
          'Quando il caso è già abbastanza definito da consentire una lettura ordinata di tragitto, dinamica e conseguenze.'
      }
    ]
  }),
  createArticle({
    slug: 'divisione-ereditaria-cosa-fare',
    title: 'Divisione ereditaria: cosa fare quando il patrimonio è difficile da gestire',
    description:
      'Come orientarsi quando la divisione ereditaria riguarda beni diversi, coeredi in conflitto e documenti patrimoniali ancora da ricostruire.',
    category: 'Successioni complesse',
    service: 'successioni-complesse',
    publishedAt: '2026-04-15',
    readTime: '6 min',
    image: '/images/thumb-successioni.webp',
    intro:
      'La divisione ereditaria diventa delicata quando il patrimonio è articolato, i coeredi hanno interessi divergenti e i documenti disponibili non consentono ancora una lettura chiara dell’asse da dividere. In questi casi il primo lavoro consiste nel ricostruire, non nel semplificare.',
    sections: [
      {
        heading: 'Prima di dividere bisogna capire che cosa si sta dividendo',
        paragraphs: [
          'Immobili, conti correnti, quote, beni mobili e donazioni pregresse possono alterare in modo significativo la fotografia del patrimonio ereditario.',
          'Senza una ricostruzione seria delle masse il rischio è impostare la divisione su basi incomplete.'
        ]
      },
      {
        heading: 'Il conflitto tra coeredi va letto insieme ai documenti',
        paragraphs: [
          'Nelle successioni conflittuali il problema non è solo relazionale. Occorre verificare se il contrasto dipenda da beni non emersi, da attribuzioni pregresse o da una lettura diversa delle quote e dei diritti.',
          'I documenti patrimoniali servono proprio a dare concretezza a questi temi.'
        ]
      },
      {
        heading: 'Perché il primo esame può orientare anche verso una soluzione stragiudiziale',
        paragraphs: [
          'Una buona ricostruzione iniziale aiuta a capire se vi siano margini per una gestione condivisa o se il conflitto richieda una tutela più incisiva.',
          'Il punto decisivo è arrivare a questa scelta con un patrimonio già leggibile.'
        ]
      }
    ],
    checks: [
      'se l’asse ereditario è stato ricostruito in modo sufficientemente completo',
      'se esistono beni o rapporti ancora da chiarire',
      'se il conflitto tra coeredi dipende da documenti mancanti o da questioni giuridiche specifiche'
    ],
    documents: [
      'testamento o atti successori disponibili',
      'visure, atti immobiliari e documentazione bancaria',
      'elenco dei coeredi e delle contestazioni già emerse'
    ],
    externalLinks: [
      {
        label: 'dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/cosa-dichiarazioni-successione',
        note: 'È una fonte istituzionale utile per il quadro documentale di base legato alla successione.'
      }
    ],
    relatedArticles: [
      'eredita-con-immobili-e-conti-correnti',
      'successione-e-donazioni-pregresse-cosa-guardare',
      'impugnazione-del-testamento-quando-ha-senso'
    ],
    faqs: [
      {
        question: 'Quando la divisione ereditaria diventa davvero complessa?',
        answer:
          'Quando il patrimonio è articolato, vi sono beni di natura diversa, più coeredi in conflitto o documenti patrimoniali ancora da ricostruire.'
      },
      {
        question: 'Perché conviene partire dalla ricostruzione dell’asse?',
        answer:
          'Perché senza sapere con precisione quali beni e rapporti compongano la successione è difficile impostare correttamente qualsiasi strategia.'
      },
      {
        question: 'Una lettura iniziale ordinata può aiutare anche a evitare il contenzioso?',
        answer:
          'Sì. Talvolta chiarire bene il patrimonio e i diritti di ciascuno aiuta a capire se esista spazio per una soluzione condivisa.'
      }
    ]
  }),
  createArticle({
    slug: 'eredita-con-immobili-e-conti-correnti',
    title: 'Eredità con immobili e conti correnti: come leggere il patrimonio',
    description:
      'Come orientarsi nelle successioni in cui il patrimonio comprende immobili, conti correnti e rapporti di natura diversa da ricostruire con ordine.',
    category: 'Successioni complesse',
    service: 'successioni-complesse',
    publishedAt: '2026-04-17',
    readTime: '5 min',
    image: '/images/thumb-successioni.webp',
    intro:
      'Quando l’eredità comprende immobili, denaro depositato, rapporti bancari e beni di diversa natura, il problema principale è dare ordine al patrimonio. Senza questa fotografia iniziale è difficile capire quali diritti siano in gioco e quale strada sia più corretta.',
    sections: [
      {
        heading: 'Immobili e conti correnti richiedono documenti diversi e una lettura unitaria',
        paragraphs: [
          'Visure, atti notarili, estratti conto, documenti bancari e informazioni sui rapporti ancora aperti non hanno tutti la stessa funzione, ma devono essere letti insieme.',
          'La complessità nasce proprio dalla necessità di tenere coordinati beni e rapporti patrimoniali eterogenei.'
        ]
      },
      {
        heading: 'La fotografia del patrimonio viene prima delle contestazioni',
        paragraphs: [
          'Prima di parlare di divisione, quote o conflitto tra coeredi, occorre capire che cosa componga davvero l’asse ereditario e che cosa resti ancora da verificare.',
          'Una ricostruzione incompleta espone il caso a errori di impostazione e a richieste premature.'
        ]
      },
      {
        heading: 'Perché il primo contatto deve chiarire che cosa è già noto e che cosa manca',
        paragraphs: [
          'Una richiesta utile indica i beni già individuati, i documenti disponibili e i punti ancora oscuri. In questo modo il primo esame può orientare la raccolta del materiale mancante.',
          'Il valore della valutazione preliminare sta spesso proprio in questo lavoro di messa a fuoco.'
        ]
      }
    ],
    checks: [
      'se gli immobili sono già identificati con documenti affidabili',
      'se i rapporti bancari e i conti risultano ricostruiti almeno in via iniziale',
      'se mancano ancora passaggi indispensabili per fotografare l’asse'
    ],
    documents: [
      'visure e documenti immobiliari',
      'documentazione bancaria o estratti conto disponibili',
      'atti successori e informazioni sui soggetti coinvolti'
    ],
    externalLinks: [
      {
        label: 'modelli e istruzioni della dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/modiistr-dichsucc',
        note: 'È una fonte istituzionale coerente con la fase di ricostruzione documentale della successione.'
      }
    ],
    relatedArticles: [
      'divisione-ereditaria-cosa-fare',
      'successione-e-donazioni-pregresse-cosa-guardare',
      'impugnazione-del-testamento-quando-ha-senso'
    ],
    faqs: [
      {
        question: 'Perché immobili e conti correnti complicano la successione?',
        answer:
          'Perché richiedono documenti diversi e una lettura coordinata del patrimonio complessivo.'
      },
      {
        question: 'Si può chiedere una valutazione anche se il patrimonio non è del tutto ricostruito?',
        answer:
          'Sì. Spesso la prima utilità della valutazione è proprio capire che cosa manchi ancora e come organizzarlo.'
      },
      {
        question: 'Quali documenti conviene inviare per primi?',
        answer:
          'Visure, documenti bancari disponibili, atti successori e una sintesi dei beni già individuati.'
      }
    ]
  }),
  createArticle({
    slug: 'successione-e-donazioni-pregresse-cosa-guardare',
    title: 'Successione e donazioni pregresse: cosa guardare prima di agire',
    description:
      'Perché le donazioni fatte in vita possono incidere in modo decisivo sulla lettura della successione e quali documenti conviene controllare.',
    category: 'Successioni complesse',
    service: 'successioni-complesse',
    publishedAt: '2026-04-19',
    readTime: '5 min',
    image: '/images/thumb-successioni.webp',
    intro:
      'Nelle successioni complesse le donazioni pregresse possono alterare in modo significativo l’equilibrio del patrimonio e dei diritti dei soggetti coinvolti. Per questo, prima di agire, occorre verificare se esistano attribuzioni fatte in vita e come incidano sul quadro successorio complessivo.',
    sections: [
      {
        heading: 'Le donazioni pregresse possono cambiare la fotografia dell’asse',
        paragraphs: [
          'Un patrimonio apparentemente semplice può assumere un significato diverso se emergono beni già trasferiti, attribuzioni economiche o vantaggi concessi in vita.',
          'Il primo passo consiste quindi nel capire se il quadro attuale sia davvero completo.'
        ]
      },
      {
        heading: 'Non basta sapere che una donazione esiste: serve collocarla correttamente nel fascicolo',
        paragraphs: [
          'Occorre verificare natura dell’atto, tempistica, beni coinvolti e rapporto con gli altri elementi della successione.',
          'Solo così si può capire se il tema incida davvero sull’equilibrio tra i soggetti coinvolti e sulle iniziative da valutare.'
        ]
      },
      {
        heading: 'Perché il primo filtro documentale evita azioni premature',
        paragraphs: [
          'Contestare una situazione successoria senza aver letto correttamente le donazioni pregresse rischia di portare fuori fuoco l’intero fascicolo.',
          'Una valutazione iniziale ordinata aiuta invece a chiarire se il tema sia centrale e con quale peso.'
        ]
      }
    ],
    checks: [
      'se esistono donazioni o attribuzioni patrimoniali fatte in vita',
      'se i relativi documenti sono disponibili e leggibili',
      'se il loro peso sul quadro successorio è già concretamente valutabile'
    ],
    documents: [
      'atti di donazione o documenti che provino le attribuzioni pregresse',
      'documenti sugli altri beni del patrimonio',
      'testamento, se esiste, e sintesi dei soggetti coinvolti'
    ],
    externalLinks: [
      {
        label: 'modelli e istruzioni della dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/modiistr-dichsucc',
        note: 'È un riferimento istituzionale utile per orientarsi nella documentazione successoria di base.'
      }
    ],
    relatedArticles: [
      'divisione-ereditaria-cosa-fare',
      'eredita-con-immobili-e-conti-correnti',
      'impugnazione-del-testamento-quando-ha-senso'
    ],
    faqs: [
      {
        question: 'Perché le donazioni pregresse sono così importanti?',
        answer:
          'Perché possono incidere in modo decisivo sull’equilibrio complessivo del patrimonio e dei diritti successori.'
      },
      {
        question: 'Basta sapere che una donazione esiste?',
        answer:
          'No. Occorre capire anche quali beni riguardi, quando sia stata fatta e quale peso abbia nel contesto complessivo della successione.'
      },
      {
        question: 'Che cosa aiuta nel primo esame?',
        answer:
          'Aiutano gli atti di donazione disponibili, i documenti sul patrimonio residuo e una sintesi chiara dei soggetti interessati.'
      }
    ]
  }),
  createArticle({
    slug: 'impugnazione-del-testamento-quando-ha-senso',
    title: 'Impugnazione del testamento: quando ha senso valutarla',
    description:
      'Quando l’impugnazione del testamento merita davvero un approfondimento e quali elementi aiutano a distinguere un dubbio serio da un conflitto solo familiare.',
    category: 'Impugnazione del testamento',
    service: 'impugnazione-testamento',
    publishedAt: '2026-04-21',
    readTime: '6 min',
    image: '/images/thumb-successioni.webp',
    intro:
      'L’impugnazione del testamento richiede selezione. Il conflitto familiare o il dissenso sull’esito della successione non bastano: occorre capire se esistano profili concreti di validità, genuinità, capacità del testatore o lesione dei diritti ereditari che meritino una verifica rigorosa.',
    sections: [
      {
        heading: 'Il primo tema è distinguere il sospetto dal profilo giuridico rilevante',
        paragraphs: [
          'Non ogni perplessità sul testamento si traduce in un motivo di impugnazione. Serve capire se il dubbio riguardi forma, autenticità, capacità del testatore o assetto dei diritti successori.',
          'Questa selezione iniziale evita di confondere il conflitto personale con una vera questione legale.'
        ]
      },
      {
        heading: 'Il testamento va letto insieme al patrimonio e al contesto familiare',
        paragraphs: [
          'Un atto non si valuta mai isolatamente. Occorre verificare che cosa disponga, quali beni coinvolga, chi siano i soggetti interessati e quali altri atti o donazioni facciano parte del quadro complessivo.',
          'Solo in questo modo è possibile capire se l’impugnazione abbia una base seria.'
        ]
      },
      {
        heading: 'Perché il primo esame documentale fa la differenza',
        paragraphs: [
          'Avere il testamento, i documenti essenziali sul patrimonio e una descrizione chiara del contesto consente di capire rapidamente se il caso meriti approfondimento.',
          'Nei conflitti testamentari il primo filtro evita mosse premature e aiuta a mettere a fuoco il vero punto critico.'
        ]
      }
    ],
    checks: [
      'se il dubbio riguarda davvero validità, genuinità o capacità del testatore',
      'se il patrimonio e i soggetti coinvolti sono già almeno parzialmente ricostruiti',
      'se il caso si intreccia con donazioni o con altre questioni successorie da leggere insieme'
    ],
    documents: [
      'testamento o copia disponibile',
      'documenti sul patrimonio e sui soggetti coinvolti',
      'eventuali atti di donazione o altri elementi rilevanti sul contesto'
    ],
    externalLinks: [
      {
        label: 'dichiarazione di successione',
        url: 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/cosa-dichiarazioni-successione',
        note: 'È una fonte istituzionale utile per collocare correttamente gli adempimenti e la documentazione successoria di base.'
      }
    ],
    relatedArticles: [
      'successione-e-donazioni-pregresse-cosa-guardare',
      'eredita-con-immobili-e-conti-correnti',
      'divisione-ereditaria-cosa-fare'
    ],
    faqs: [
      {
        question: 'Quando ha davvero senso parlare di impugnazione del testamento?',
        answer:
          'Quando emergono elementi concreti su validità, genuinità, capacità del testatore o assetto dei diritti successori che meritino un controllo rigoroso.'
      },
      {
        question: 'Perché servono anche documenti sul patrimonio?',
        answer:
          'Perché la valutazione del testamento si intreccia spesso con il patrimonio effettivo, con le donazioni e con la posizione dei soggetti coinvolti.'
      },
      {
        question: 'Il primo contatto può essere utile anche se il quadro non è ancora completo?',
        answer:
          'Sì, purché siano disponibili almeno l’atto e i documenti essenziali per capire quale sia il punto realmente controverso.'
      }
    ]
  })
];

export const articles = [...editorialArticles, ...legacyArticles];
if (new Set(articles.map((article) => article.slug)).size !== articles.length) throw new Error('Duplicate article slug');

export const articleMap = Object.fromEntries(articles.map((article) => [article.slug, article]));

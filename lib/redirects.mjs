export const permanentRedirects = [
  {
    source: '/chi-siamo',
    destination: '/studio'
  },
  {
    source: '/privacy-policy',
    destination: '/privacy'
  },
  {
    source: '/service/lavoro',
    destination: '/infortuni-sul-lavoro'
  },
  {
    source: '/service-category/lavoro',
    destination: '/infortuni-sul-lavoro'
  },
  {
    source: '/successioni',
    destination: '/successioni-complesse'
  },
  {
    source: '/diritto-civile',
    destination: '/cassazione-civile'
  },
  {
    source: '/diritto-penale',
    destination: '/avvocato-penalista-roma'
  },
  {
    source: '/avvocato-cassazionista',
    destination: '/avvocato-cassazionista-roma'
  },
  {
    source: '/risarcimento-danni',
    destination: '/risarcimento-danni'
  },
  {
    source: '/responsabilita-medica',
    destination: '/responsabilita-medica'
  },
  {
    source: '/infortuni-sul-lavoro',
    destination: '/infortuni-sul-lavoro'
  },
  {
    source: '/approfondimenti/ricorso-per-cassazione-penale-termini-e-urgenza',
    destination: '/approfondimenti/ricorso-per-cassazione-penale-e-ammissibilita'
  },
  {
    source: '/approfondimenti/risarcimento-da-incidente-stradale-grave',
    destination: '/approfondimenti/cosa-fare-dopo-un-incidente-stradale-grave'
  },
  {
    source: '/approfondimenti/lesione-di-legittima-cosa-controllare',
    destination: '/approfondimenti/successione-e-donazioni-pregresse-cosa-guardare'
  }
];

export const manualRedirectReview = [
  {
    pattern: '/service/*',
    reason:
      'Verificare eventuali vecchie landing WordPress non presenti nella mappa prima di aggiungere redirect permanenti.'
  },
  {
    pattern: '/service-category/*',
    reason:
      'Confermare le corrispondenze semantiche residue: al momento è mappato solo il cluster "lavoro".'
  },
  {
    pattern: '/project/*',
    reason:
      'Nessun equivalente certo nel sito Next.js attuale: evitare redirect massivi verso homepage.'
  }
];

function normalizePath(path) {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export const legacyRedirectMap = new Map(
  permanentRedirects
    .map((redirect) => [normalizePath(redirect.source), normalizePath(redirect.destination)])
    .filter(([source, destination]) => source !== destination)
);

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
    source: '/approfondimenti/termini-per-il-ricorso-per-cassazione-civile',
    destination: '/approfondimenti/quando-conviene-fare-ricorso-per-cassazione-civile'
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

export const legacyRedirectMap = new Map(
  permanentRedirects.map((redirect) => [redirect.source, redirect.destination])
);

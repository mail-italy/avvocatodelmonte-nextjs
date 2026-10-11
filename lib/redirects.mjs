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
    source: '/project/sexual-offences',
    destination: '/avvocato-penalista-roma'
  },
  {
    source: '/project/accident-case',
    destination: '/risarcimento-danni-incidente-stradale'
  },
  {
    source: '/successioni',
    destination: '/successioni-complesse'
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

export function normalizePath(path) {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export const legacyRedirectMap = new Map(
  permanentRedirects
    .map((redirect) => [normalizePath(redirect.source), normalizePath(redirect.destination)])
    .filter(([source, destination]) => source !== destination)
);

// Unknown legacy paths return no redirect: preserve a truthful 404.
export function findLegacyRedirect(pathname) {
  return legacyRedirectMap.get(normalizePath(pathname)) || null;
}

export const siteConfig = {
  name: 'Studio Legale Del Monte',
  shortName: 'Del Monte',
  title: 'Avvocato cassazionista a Roma | Studio Legale Del Monte',
  description:
    'Studio legale con sede a Roma per Cassazione civile e penale, responsabilità medica, risarcimento danni, infortuni sul lavoro, successioni complesse e mediazione.',
  domain: 'https://avvocatodelmonte.com',
  updatedAt: '2026-04-23',
  email: 'info@delmontestudiolegale.it',
  pec: 'federicadelmonte@ordineavvocatiroma.org',
  phoneDisplay: '+39 06 97615122',
  phone: '+390697615122',
  whatsappDisplay: '+39 06 97615122',
  whatsapp: '390697615122',
  address: {
    street: 'Via Costanza Baudana Vaccolini, 5',
    zip: '00153',
    city: 'Roma',
    region: 'Lazio',
    country: 'IT'
  },
  geo: {
    latitude: '41.8800',
    longitude: '12.4685'
  },
  attorney: {
    name: 'Avv. Federica Del Monte',
    jobTitle: 'Avvocato cassazionista'
  },
  social: {
    ogImage: '/images/og-default.webp'
  },
  hours: {
    days: 'Lunedì–Venerdì',
    open: '09:30',
    close: '19:00',
    timeZone: 'Europe/Rome'
  }
};

export const seoLandingLinks = [
  { href: '/avvocato-cassazionista-roma', label: 'Avvocato cassazionista Roma' },
  { href: '/ricorso-cassazione-civile', label: 'Ricorso Cassazione civile' },
  { href: '/ricorso-cassazione-penale', label: 'Ricorso Cassazione penale' },
  { href: '/avvocato-successioni-roma', label: 'Avvocato successioni Roma' },
  { href: '/divisione-ereditaria', label: 'Divisione ereditaria' },
  { href: '/lesione-legittima', label: 'Lesione di legittima' },
  { href: '/impugnazione-testamento-roma', label: 'Impugnazione testamento Roma' },
  { href: '/responsabilita-medica-roma', label: 'Responsabilità medica Roma' },
  { href: '/errore-medico', label: 'Errore medico' },
  { href: '/risarcimento-danni-persona', label: 'Risarcimento danni persona' },
  { href: '/avvocato-penalista-roma', label: 'Avvocato penalista Roma' }
];

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/cassazione-civile', label: 'Cassazione civile' },
  { href: '/cassazione-penale', label: 'Cassazione penale' },
  { href: '/responsabilita-medica', label: 'Responsabilità medica' },
  { href: '/risarcimento-danni', label: 'Risarcimento danni' },
  { href: '/risarcimento-danni-incidente-stradale', label: 'Incidenti stradali gravi' },
  { href: '/infortuni-sul-lavoro', label: 'Infortuni sul lavoro' },
  { href: '/successioni-complesse', label: 'Successioni complesse' },
  { href: '/mediazione-risoluzione-stragiudiziale', label: 'Mediazione' },
  { href: '/impugnazione-testamento', label: 'Impugnazione del testamento' },
  { href: '/studio', label: 'Studio' },
  { href: '/approfondimenti', label: 'Approfondimenti' },
  { href: '/contatti', label: 'Contatti' }
];

export const footerLinks = [
  {
    title: 'Aree di attività',
    items: [
      { href: '/cassazione-civile', label: 'Cassazione civile' },
      { href: '/cassazione-penale', label: 'Cassazione penale' },
      { href: '/responsabilita-medica', label: 'Responsabilità medica' },
      { href: '/risarcimento-danni', label: 'Risarcimento danni' },
      { href: '/risarcimento-danni-incidente-stradale', label: 'Incidenti stradali gravi' },
      { href: '/infortuni-sul-lavoro', label: 'Infortuni sul lavoro' },
      { href: '/successioni-complesse', label: 'Successioni complesse' },
      { href: '/mediazione-risoluzione-stragiudiziale', label: 'Mediazione e risoluzione stragiudiziale' },
      { href: '/impugnazione-testamento', label: 'Impugnazione del testamento' }
    ]
  },
  {
    title: 'Percorsi strategici',
    items: seoLandingLinks
  },
  {
    title: 'Studio',
    items: [
      { href: '/studio', label: 'Profilo e metodo' },
      { href: '/approfondimenti', label: 'Approfondimenti' },
      { href: '/contatti', label: 'Contatti' },
      { href: '/privacy', label: 'Privacy' }
    ]
  }
];

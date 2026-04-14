
export const siteConfig = {
  name: 'Studio Legale Del Monte',
  shortName: 'Del Monte',
  title: 'Avvocato Cassazionista a Roma | Studio Legale Del Monte',
  description:
    'Studio legale con sede a Roma per Cassazione civile e penale, successioni complesse, responsabilità medica, risarcimento danni e infortuni sul lavoro.',
  domain: 'https://avvocatodelmonte.com',
  email: 'mail@avvocatodelmonte.com',
  pec: 'federicadelmonte@ordineavvocatiroma.org',
  phoneDisplay: '+39 06 97615122',
  phone: '+390697615122',
  whatsappDisplay: '+39 06 97615122',
  whatsapp: '390697615122',
  address: {
    street: 'Via Costanza Baudana Vaccolini, 5',
    zip: '00153',
    city: 'Roma',
    region: 'RM',
    country: 'IT'
  },
  geo: {
    latitude: '41.8800',
    longitude: '12.4685'
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
    title: 'Studio',
    items: [
      { href: '/studio', label: 'Profilo e metodo' },
      { href: '/approfondimenti', label: 'Approfondimenti' },
      { href: '/contatti', label: 'Contatti' },
      { href: '/privacy', label: 'Privacy' }
    ]
  }
];

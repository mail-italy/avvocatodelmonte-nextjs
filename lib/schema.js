import { absoluteUrl } from './metadata';
import { siteConfig } from './site';

function baseAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.zip,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country
  };
}

function baseAreaServed() {
  return [
    {
      '@type': 'City',
      name: 'Roma'
    },
    {
      '@type': 'Country',
      name: 'Italia'
    }
  ];
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'it-IT'
  };
}

export function attorneySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${siteConfig.domain}/#attorney`,
    name: siteConfig.attorney.name,
    url: siteConfig.domain,
    image: absoluteUrl('/images/portrait-standing.webp'),
    jobTitle: siteConfig.attorney.jobTitle,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    worksFor: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`,
      name: siteConfig.name
    },
    address: baseAddress()
  };
}

export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${siteConfig.domain}/#legalservice`,
    name: siteConfig.name,
    image: absoluteUrl('/images/home/hero-avvocato.webp'),
    url: siteConfig.domain,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: '€€€',
    address: baseAddress(),
    areaServed: baseAreaServed(),
    founder: {
      '@type': 'Person',
      name: siteConfig.attorney.name,
      jobTitle: siteConfig.attorney.jobTitle
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: siteConfig.hours.open,
        closes: siteConfig.hours.close
      }
    ],
    serviceType: [
      'Cassazione civile',
      'Cassazione penale',
      'Responsabilità medica',
      'Risarcimento danni',
      'Incidenti stradali gravi',
      'Infortuni sul lavoro',
      'Successioni complesse',
      'Impugnazione del testamento',
      'Mediazione e risoluzione stragiudiziale'
    ]
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.domain}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl('/images/team-boardroom-wide.webp'),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    url: siteConfig.domain,
    address: baseAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: siteConfig.hours.open,
        closes: siteConfig.hours.close
      }
    ]
  };
}

export function webPageSchema({ path, name, description, type = 'WebPage' }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: 'it-IT',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.domain}/#website`
    },
    about: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`
    }
  };
}

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': absoluteUrl(`/${service.slug}#legalservice`),
    name: service.title,
    description: service.metaDescription || service.description,
    serviceType: service.menuTitle || service.label,
    url: absoluteUrl(`/${service.slug}`),
    image: absoluteUrl(service.image || '/images/og-default.webp'),
    areaServed: baseAreaServed(),
    provider: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`,
      name: siteConfig.name
    }
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteConfig.domain}/contatti#webpage`,
    url: `${siteConfig.domain}/contatti`,
    name: 'Contatti dello Studio Legale Del Monte',
    description:
      'Pagina contatti per richiedere una valutazione preliminare allo Studio Legale Del Monte.',
    about: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`
    }
  };
}

export function faqSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item)
    }))
  };
}

export function articleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(`/approfondimenti/${article.slug}`)}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: 'it-IT',
    author: {
      '@type': 'Person',
      name: siteConfig.attorney.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon.png')
      }
    },
    image: [absoluteUrl(article.image || '/images/og-default.webp')],
    mainEntityOfPage: absoluteUrl(`/approfondimenti/${article.slug}`),
    articleSection: article.category,
    about: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`
    }
  };
}

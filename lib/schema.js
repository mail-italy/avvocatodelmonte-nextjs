
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
    inLanguage: 'it-IT'
  };
}

export function attorneySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${siteConfig.domain}/#attorney`,
    name: 'Avv. Federica Del Monte',
    url: siteConfig.domain,
    image: absoluteUrl('/images/portrait-standing.webp'),
    jobTitle: 'Avvocato Cassazionista',
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
      name: 'Avv. Federica Del Monte',
      jobTitle: 'Avvocato cassazionista'
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
      'Successioni complesse',
      'Impugnazione del testamento',
      'Responsabilità medica',
      'Risarcimento danni',
      'Infortuni sul lavoro',
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

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`/${service.slug}#service`),
    name: service.title,
    description: service.metaDescription || service.description,
    serviceType: service.menuTitle || service.label,
    url: absoluteUrl(`/${service.slug}`),
    areaServed: baseAreaServed(),
    provider: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`,
      name: siteConfig.name
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
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Avv. Federica Del Monte'
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
    mainEntityOfPage: absoluteUrl(`/approfondimenti/${article.slug}`)
  };
}

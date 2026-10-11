import { absoluteUrl } from './metadata.js';
import { siteConfig } from './site.js';

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
      '@type': 'AdministrativeArea',
      name: 'Lazio'
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

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.domain}/#person`,
    name: siteConfig.attorney.name,
    jobTitle: siteConfig.attorney.jobTitle,
    worksFor: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`
    },
    address: baseAddress(),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email
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
    address: baseAddress(),
    areaServed: baseAreaServed(),
    founder: { '@id': `${siteConfig.domain}/#person` },
    logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.png') },
    geo: { '@type': 'GeoCoordinates', latitude: siteConfig.geo.latitude, longitude: siteConfig.geo.longitude },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: siteConfig.hours.open,
        closes: siteConfig.hours.close
      }
    ],
    knowsAbout: [
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

export function webPageSchema({ path, name, description, type = 'WebPage' }) {
  const canonicalUrl = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
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
    },
    breadcrumb: {
      '@id': `${canonicalUrl}#breadcrumb`
    }
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
    },
    inLanguage: 'it-IT'
  };
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteConfig.domain}/studio#webpage`,
    url: `${siteConfig.domain}/studio`,
    name: 'Studio Legale Del Monte',
    description:
      'Profilo dello Studio Legale Del Monte, metodo di lavoro, aree di attività e criteri di valutazione preliminare.',
    about: {
      '@type': 'LegalService',
      '@id': `${siteConfig.domain}/#legalservice`
    },
    inLanguage: 'it-IT'
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

export function breadcrumbSchema(items = [], path = null) {
  const normalizedItems = items
    .filter((item) => item?.name && item?.item)
    .map((item) => ({
      name: String(item.name).trim(),
      item: absoluteUrl(item.item)
    }))
    .filter((item) => item.name.length > 0)
    .filter(
      (item, index, collection) =>
        collection.findIndex((candidate) => candidate.item === item.item) === index
    );

  if (!normalizedItems.length) {
    return null;
  }

  const needsHomeCrumb = normalizedItems[0].item !== absoluteUrl('/');
  const breadcrumbItems = needsHomeCrumb
    ? [{ name: 'Home', item: absoluteUrl('/') }, ...normalizedItems]
    : normalizedItems;
  const currentItem = breadcrumbItems[breadcrumbItems.length - 1];
  const breadcrumbId = `${absoluteUrl(path || currentItem.item)}#breadcrumb`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

export function articleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(`/approfondimenti/${article.slug}`)}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: 'it-IT',
    author: { '@id': `${siteConfig.domain}/#person`, '@type': 'Person', name: siteConfig.attorney.name },
    publisher: {
      '@id': `${siteConfig.domain}/#legalservice`,
      '@type': 'LegalService',
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

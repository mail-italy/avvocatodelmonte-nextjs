
import { absoluteUrl } from './metadata';
import { siteConfig } from './site';

export function attorneySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: 'Avv. Federica Del Monte',
    url: siteConfig.domain,
    image: absoluteUrl('/images/portrait-standing.webp'),
    jobTitle: 'Avvocato Cassazionista',
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    worksFor: {
      '@type': 'LegalService',
      name: siteConfig.name
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country
    }
  };
}

export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.name,
    image: absoluteUrl('/images/og-default.webp'),
    url: siteConfig.domain,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country
    },
    areaServed: ['Roma', 'Lazio', 'Italia'],
    serviceType: [
      'Cassazione civile',
      'Cassazione penale',
      'Responsabilità medica',
      'Risarcimento danni',
      'Infortuni sul lavoro',
      'Successioni complesse'
    ]
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: absoluteUrl('/images/team-boardroom-wide.webp'),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    url: siteConfig.domain,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country
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

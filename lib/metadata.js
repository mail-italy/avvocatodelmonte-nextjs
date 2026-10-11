import { imageDimensions } from './imageDimensions.js';
import { siteConfig } from './site.js';

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.domain).toString();
}

function buildRobots(indexable) {
  if (!indexable) {
    return {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  };
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image = siteConfig.social.ogImage,
  keywords = [],
  indexable = true,
  type = 'website',
  publishedTime,
  modifiedTime
}) {
  const fullTitle = title ? (title.includes('|') ? title : `${title} | ${siteConfig.name}`) : siteConfig.title;
  const url = absoluteUrl(path);
  const editorialImage = /^\/images\/editorial\/avvocato-\d{3}\.webp$/.test(image);
  const socialImage = imageDimensions[image] || editorialImage ? image : siteConfig.social.ogImage;
  const dimensions = imageDimensions[socialImage] || { width: 1200, height: 800 };
  const ogImage = absoluteUrl(socialImage);

  return {
    metadataBase: new URL(siteConfig.domain),
    title: title
      ? title.includes('|')
        ? { absolute: fullTitle }
        : title
      : {
          default: siteConfig.title,
          template: `%s | ${siteConfig.name}`
        },
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.attorney.name }],
    creator: siteConfig.attorney.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
      languages: {
        'it-IT': url
      }
    },
    robots: buildRobots(indexable),
    keywords,
    openGraph: {
      type,
      locale: 'it_IT',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: dimensions.width,
          height: dimensions.height,
          alt: title || siteConfig.title
        }
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {})
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage]
    }
  };
}

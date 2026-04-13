
import { siteConfig } from './site';

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.domain).toString();
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image = siteConfig.social.ogImage,
  keywords = []
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.domain),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    keywords,
    openGraph: {
      type: 'website',
      locale: 'it_IT',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title || siteConfig.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage]
    }
  };
}


import { siteConfig } from '@/lib/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
    host: siteConfig.domain
  };
}

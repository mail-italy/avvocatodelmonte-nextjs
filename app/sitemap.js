import { siteConfig } from '@/lib/site';
import { articles } from '@/lib/articles';
import { serviceList } from '@/lib/services';

export default function sitemap() {
  const staticRoutes = ['/', '/approfondimenti', '/contatti', '/studio'];

  const routes = staticRoutes.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: siteConfig.updatedAt
  }));

  const serviceRoutes = serviceList
    .filter((service) => !['studio'].includes(service.slug))
    .map((service) => ({
      url: `${siteConfig.domain}/${service.slug}`,
      lastModified: service.updatedAt || siteConfig.updatedAt
    }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.domain}/approfondimenti/${article.slug}`,
    lastModified: article.updatedAt
  }));

  return [...routes, ...serviceRoutes, ...articleRoutes];
}

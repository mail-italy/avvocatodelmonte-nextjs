
import { siteConfig } from '@/lib/site';
import { articles } from '@/lib/articles';
import { serviceList } from '@/lib/services';

export default function sitemap() {
  const staticRoutes = ['', '/approfondimenti', '/contatti', '/privacy'];

  const routes = staticRoutes.map((path) => ({
    url: `${siteConfig.domain}${path || '/'}`,
    lastModified: new Date().toISOString()
  }));

  const serviceRoutes = serviceList
    .filter((service) => service.slug !== 'studio')
    .map((service) => ({
      url: `${siteConfig.domain}/${service.slug}`,
      lastModified: new Date().toISOString()
    }));

  const studioRoute = {
    url: `${siteConfig.domain}/studio`,
    lastModified: new Date().toISOString()
  };

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.domain}/approfondimenti/${article.slug}`,
    lastModified: article.updatedAt
  }));

  return [...routes, ...serviceRoutes, studioRoute, ...articleRoutes];
}

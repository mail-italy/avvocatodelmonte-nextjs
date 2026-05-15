import { siteConfig } from '@/lib/site';
import { articles } from '@/lib/articles';
import { serviceList } from '@/lib/services';
import { seoPageList } from '@/lib/seoPages';

export default function sitemap() {
  const staticRoutes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/contatti', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/studio', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/approfondimenti', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' }
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: siteConfig.updatedAt,
    priority: route.priority,
    changeFrequency: route.changeFrequency
  }));

  const practiceRoutes = [...serviceList, ...seoPageList]
    .filter((service) => !['studio'].includes(service.slug))
    .map((service) => ({
      url: `${siteConfig.domain}/${service.slug}`,
      lastModified: service.updatedAt || siteConfig.updatedAt,
      priority: seoPageList.some((page) => page.slug === service.slug) ? 0.76 : 0.82,
      changeFrequency: 'monthly'
    }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.domain}/approfondimenti/${article.slug}`,
    lastModified: article.updatedAt,
    priority: 0.7,
    changeFrequency: 'monthly'
  }));

  return [...routes, ...practiceRoutes, ...articleRoutes];
}

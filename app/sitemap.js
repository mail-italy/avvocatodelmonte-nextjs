import { siteConfig } from '@/lib/site';
import { articles } from '@/lib/articles';
import { serviceList } from '@/lib/services';
import { seoPageList } from '@/lib/seoPages';

function toSitemapEntry(route) {
  return {
    url: `${siteConfig.domain}${route.path}`,
    lastModified: route.lastModified,
    priority: route.priority,
    changeFrequency: route.changeFrequency
  };
}

export default function sitemap() {
  const staticRoutes = [
    { path: '/', lastModified: '2026-05-15', priority: 1, changeFrequency: 'weekly' },
    { path: '/contatti', lastModified: '2026-04-22', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/studio', lastModified: '2026-04-22', priority: 0.85, changeFrequency: 'monthly' },
    {
      path: '/approfondimenti',
      lastModified: articles.reduce(
        (latest, article) => (article.updatedAt > latest ? article.updatedAt : latest),
        siteConfig.updatedAt
      ),
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    { path: '/privacy', lastModified: '2026-04-22', priority: 0.4, changeFrequency: 'yearly' }
  ];

  const practiceRoutes = [...serviceList, ...seoPageList].map((service) => ({
    path: `/${service.slug}`,
    lastModified: service.updatedAt || siteConfig.updatedAt,
    priority: seoPageList.some((page) => page.slug === service.slug) ? 0.76 : 0.82,
    changeFrequency: 'monthly'
  }));

  const articleRoutes = articles.map((article) => ({
    path: `/approfondimenti/${article.slug}`,
    lastModified: article.updatedAt,
    priority: 0.7,
    changeFrequency: 'monthly'
  }));

  const canonicalRoutes = [...staticRoutes, ...practiceRoutes, ...articleRoutes];
  const uniqueRoutes = canonicalRoutes.filter(
    (route, index, collection) =>
      collection.findIndex((candidate) => candidate.path === route.path) === index
  );

  return uniqueRoutes.map(toSitemapEntry);
}

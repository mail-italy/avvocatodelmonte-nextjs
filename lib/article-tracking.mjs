import { createArticleAttribution } from './article-attribution.mjs';
import { readConsent } from './consent.mjs';

export const articleAttribution = createArticleAttribution({
  site: 'avvocato',
  origin: 'https://avvocatodelmonte.com',
  contactPaths: ['/contatti'],
  hasAnalyticsConsent: () => readConsent() === 'accepted'
});

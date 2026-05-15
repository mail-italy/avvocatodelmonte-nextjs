import ServicePageContent from '@/components/ServicePageContent';
import { buildMetadata } from '@/lib/metadata';
import { seoPages } from '@/lib/seoPages';

const service = seoPages['risarcimento-danni-persona'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/risarcimento-danni-persona',
  image: service.image,
  keywords: service.keywords
});

export default function Page() {
  return <ServicePageContent service={service} />;
}

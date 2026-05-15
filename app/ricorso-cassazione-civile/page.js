import ServicePageContent from '@/components/ServicePageContent';
import { buildMetadata } from '@/lib/metadata';
import { seoPages } from '@/lib/seoPages';

const service = seoPages['ricorso-cassazione-civile'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/ricorso-cassazione-civile',
  image: service.image,
  keywords: service.keywords
});

export default function Page() {
  return <ServicePageContent service={service} />;
}

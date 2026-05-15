import ServicePageContent from '@/components/ServicePageContent';
import { buildMetadata } from '@/lib/metadata';
import { seoPages } from '@/lib/seoPages';

const service = seoPages['responsabilita-medica-roma'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/responsabilita-medica-roma',
  image: service.image,
  keywords: service.keywords
});

export default function Page() {
  return <ServicePageContent service={service} />;
}


import ServicePageContent from '@/components/ServicePageContent';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';

const service = services['responsabilita-medica'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/responsabilita-medica',
  image: service.image,
  keywords: service.keywords
});

export default function Page() {
  return <ServicePageContent service={service} />;
}

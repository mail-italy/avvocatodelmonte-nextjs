
import ServicePageContent from '@/components/ServicePageContent';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';

const service = services['infortuni-sul-lavoro'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/infortuni-sul-lavoro',
  image: service.image,
  keywords: service.keywords
});

export default function Page() {
  return <ServicePageContent service={service} />;
}


import JsonLd from '@/components/JsonLd';
import ServicePageContent from '@/components/ServicePageContent';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, legalServiceSchema } from '@/lib/schema';

const service = services['successioni-complesse'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/successioni-complesse',
  image: service.image,
  keywords: service.keywords
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          legalServiceSchema(),
          breadcrumbSchema([
            { name: 'Home', item: '/' },
            { name: service.menuTitle, item: '/successioni-complesse' }
          ]),
          faqSchema(service.faqs)
        ]}
      />
      <ServicePageContent service={service} />
    </>
  );
}

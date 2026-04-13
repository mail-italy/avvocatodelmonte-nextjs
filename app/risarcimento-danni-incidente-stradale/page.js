
import JsonLd from '@/components/JsonLd';
import ServicePageContent from '@/components/ServicePageContent';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema, legalServiceSchema } from '@/lib/schema';

const service = services['risarcimento-danni-incidente-stradale'];

export const metadata = buildMetadata({
  title: service.titleTag,
  description: service.metaDescription,
  path: '/risarcimento-danni-incidente-stradale',
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
            { name: service.menuTitle, item: '/risarcimento-danni-incidente-stradale' }
          ]),
          faqSchema(service.faqs)
        ]}
      />
      <ServicePageContent service={service} />
    </>
  );
}

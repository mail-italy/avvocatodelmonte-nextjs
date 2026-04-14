
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { attorneySchema, legalServiceSchema, localBusinessSchema, websiteSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
  image: siteConfig.social.ogImage,
  keywords: [
    'avvocato cassazionista Roma',
    'ricorso per Cassazione civile Roma',
    'ricorso per Cassazione penale Roma',
    'avvocato responsabilità medica Roma',
    'risarcimento danni Roma',
    'avvocato infortuni sul lavoro Roma',
    'avvocato successioni Roma'
  ]
});

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <GoogleTagManager gtmId="GTM-PR5RTFTX" />
        <a className="skip-link" href="#contenuto">Salta al contenuto</a>
        <JsonLd data={[websiteSchema(), attorneySchema(), legalServiceSchema(), localBusinessSchema()]} />
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

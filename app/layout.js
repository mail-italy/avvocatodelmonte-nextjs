
import './globals.css';
import ConsentManager from '@/components/ConsentManager';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import {
  legalServiceSchema,
  personSchema,
  websiteSchema
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      'it-IT': siteConfig.domain
    }
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteConfig.domain,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.social.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.domain}${siteConfig.social.ogImage}`]
  },
  keywords: [
    'avvocato cassazionista Roma',
    'ricorso per Cassazione civile Roma',
    'ricorso per Cassazione penale Roma',
    'avvocato responsabilità medica Roma',
    'risarcimento danni Roma',
    'avvocato infortuni sul lavoro Roma',
    'avvocato successioni Roma'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="it-IT">
      <body>
        <a className="skip-link" href="#contenuto">Salta al contenuto</a>
        <JsonLd
          data={[websiteSchema(), personSchema(), legalServiceSchema()]}
        />
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <FloatingContact />
        <ConsentManager />
      </body>
    </html>
  );
}

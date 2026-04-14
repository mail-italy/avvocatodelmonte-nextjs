
import './globals.css';
import Script from 'next/script';
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR5RTFTX');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PR5RTFTX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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

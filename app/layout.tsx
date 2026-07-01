import React from 'react';
import Script from 'next/script';
import { QuoteProvider } from '@/src/components/QuoteProvider';
import ClientShell from '@/src/components/ClientShell';
import '@/src/index.css';

export const metadata = {
  title: 'Scale Partners | Business Setup & Corporate Advisory in Dubai',
  description: 'Scale Partners is the UAE\'s premier legal advisory for market entry, mainland configurations, and corporate expansion. Professional, precise licensing and visa services.',
  verification: {
    google: 'DZU8v3oZp05XXgCju9UgcK-jJHoURZ_j_eq0wEzRK-4',
    other: {
      'msvalidate.01': 'F7DB9475600B7983F23BF99A0B1D3081',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NN53RDV3');`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xfl9aosdwo");`,
          }}
        />
      </head>
      <body className="bg-gold-50/10 text-zinc-900 selection:bg-gold-200">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NN53RDV3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="zoho-salesiq-init" strategy="beforeInteractive">
          {`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){try{if($zoho.salesiq.floatbutton&&$zoho.salesiq.floatbutton.visible){$zoho.salesiq.floatbutton.visible("hide");}}catch(e){}}};`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zoho.com/widget?wc=siq8a8b8930f76c263e0da96f4fa6d9b67c1de183db684e13417911357414099800"
          strategy="afterInteractive"
        />
        <QuoteProvider>
          <ClientShell>
            {children}
          </ClientShell>
        </QuoteProvider>
      </body>
    </html>
  );
}

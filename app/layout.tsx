import React from 'react';
import Script from 'next/script';
import { QuoteProvider } from '@/src/components/QuoteProvider';
import ClientShell from '@/src/components/ClientShell';
import '@/src/index.css';

export const metadata = {
  title: 'Scale Partners | Business Setup & Corporate Advisory in Dubai',
  description: 'Scale Partners is the UAE\'s premier legal advisory for market entry, mainland configurations, and corporate expansion. Professional, precise licensing and visa services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gold-50/10 text-zinc-900 selection:bg-gold-200">
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

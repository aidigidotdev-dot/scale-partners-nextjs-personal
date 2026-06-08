import React from 'react';
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
        <QuoteProvider>
          <ClientShell>
            {children}
          </ClientShell>
        </QuoteProvider>
      </body>
    </html>
  );
}

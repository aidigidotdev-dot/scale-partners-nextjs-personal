'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import SovereignFloatingHelp from './SovereignFloatingHelp';
import ComparisonBlock from './ComparisonBlock';
import RequiredDocuments from './RequiredDocuments';
import SovereignCta from './SovereignCta';
import SeoFaqBlock from './SeoFaqBlock';
import SeoEngine from './SeoEngine';
import ContactForm from './ContactForm';
import { useQuote } from './QuoteProvider';
import { PageId } from '../types';
import { X } from 'lucide-react';
import CookieConsentBanner from './CookieConsentBanner';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { modalOpen, setModalOpen, quoteBreakdown, quoteSelection, openBlankModal } = useQuote();

  // Map Next.js route path to legacy PageId
  let pageId: PageId = 'home';
  if (pathname !== '/') {
    pageId = pathname.substring(1) as PageId;
  }

  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gold-50/10 selection:bg-gold-200 text-zinc-900 relative">
      {/* Modern Background Shadow Radial Spotlight Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-15%] w-[65%] h-[65%] rounded-full bg-[#22C55E]/[0.04] blur-[140px]"></div>
        <div className="absolute top-[40%] right-[-20%] w-[70%] h-[70%] rounded-full bg-indigo-500/[0.05] blur-[160px]"></div>
        <div className="absolute bottom-[-15%] left-[15%] w-[60%] h-[60%] rounded-full bg-gold-400/[0.03] blur-[130px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* GDPR Cookie Consent Compliance Banner */}
        <CookieConsentBanner />

        {/* Dynamic SEO & Schema.org JSON-LD Markup Generator */}
        <SeoEngine page={pageId} />

        {/* Prime Header & Navigation System */}
        <Navbar 
          currentPage={pageId} 
          setPage={setPage} 
          openContactModal={openBlankModal} 
        />
   
        {/* Main Dynamic Router Space */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Premium Corporate Floating Help Widget containing direct WhatsApp & real-time Gemini Advisor */}
        <SovereignFloatingHelp setPage={setPage} />

        {/* Corporate Comparison Desk on Every Page */}
        {pageId !== 'contact' && <ComparisonBlock setPage={setPage} />}

        {/* Corporate Custom Call To Action with FOMO on Every Page */}
        <SovereignCta currentPage={pageId} openContactModal={openBlankModal} />

        {/* Corporate Required Documents Listed on Every Page */}
        {pageId !== 'home' && <RequiredDocuments />}

        {/* FAQs will go at the end of the website */}
        {pageId === 'home' && <SeoFaqBlock setPage={setPage} />}


        {/* Structured Site Directory Footer */}
        <Footer setPage={setPage} openContactModal={openBlankModal} />

        {/* PREMIUM GLASSMORPHIC SLIDE OVERLAY MODAL */}
        {modalOpen && (
          <div id="corporate_modal_backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-[0_30px_100px_rgba(15,23,42,0.22)] overflow-hidden border border-zinc-200/60 max-h-[90vh] overflow-y-auto">
              
              {/* Modal Exit handle */}
              <button
                id="modal_dismiss_trigger"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-zinc-50 hover:bg-zinc-100 rounded-full text-zinc-500 hover:text-[#22C55E] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Embedded Dynamic Contact Booking Modules */}
              <ContactForm 
                preloadedQuote={quoteBreakdown} 
                preloadedSelections={quoteSelection}
                onClose={() => setModalOpen(false)}
              />

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

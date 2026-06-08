"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from '../types';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Award, 
  MapPin, 
  FolderLock, 
  Link2, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  Lock,
  Building2,
  FileText
} from 'lucide-react';

interface SeoFaqBlockProps {
  setPage: (page: PageId) => void;
}

export default function SeoFaqBlock({ setPage }: SeoFaqBlockProps) {
  
  // FAQ Data matching major user queries with rich answers
  const faqs = [
    {
      q: "What is the difference between Dubai Mainland and a Free Zone?",
      a: "A Dubai Mainland company (DET) allows you to trade freely anywhere inside the local UAE domestic market and bid for governmental contracts without intermediate agents. A Free Zone company (such as Meydan, IFZA, or DMCC) offers 100% foreign ownership and complete corporate tax exemptions, but requires a local mainland agent, commercial branch, or domestic distributor to trade inside domestic mainland sectors outside the Free Zone boundaries."
    },
    {
      q: "Can a foreigner own 100% of a UAE company?",
      a: "Yes. Foreigners can own 100% of their business entities in both Mainland and Free Zone jurisdictions. The historical requirement to nominate a local sponsor holding 51% of equity has been officially waived for almost all commercial, trading, and technology sectors by the UAE Cabinet in recent years."
    },
    {
      q: "What is the exact starting cost for a free zone trade license?",
      a: "Base company setup packages start as low as AED 8,900 in Sharjah Media City (Shams) and under AED 12,500 in Meydan Free Zone (Dubai). Total actual setup costs depend on requested visa sponsorship quotas, mandatory medical checks, emirates ID card fees, and whether you require a virtual desk or physical brick-and-mortar office lease."
    },
    {
      q: "How does the UAE corporate tax system apply to new businesses?",
      a: "The United Arab Emirates implements a standard 9% corporate tax on corporate net profits exceeding AED 375,000. Under Small Business Relief rules, businesses with yearly revenues below AED 3,000,000 can request to be treated as having zero taxable income until December 2026. Furthermore, standard Free Zone businesses meeting \"Qualifying Free Zone Person\" rules can maintain a 0% tax rate on dynamic international trade."
    },
    {
      q: "How long does the company setup process take?",
      a: "Virtual free zone jurisdictions like Meydan and Shams can issue standard e-commerce and consulting licenses within 24 to 48 hours fully online. Mainland company registries and highly-regulated hubs like DMCC JLT require between 5 to 10 working days due to physical lease verifications and municipal approval queues."
    },
    {
      q: "Is it difficult to open a corporate bank account in the UAE?",
      a: "Establishing a corporate bank account with local tier-1 banks (like FAB, Emirates NBD, or Mashreq) requires strict Know-Your-Customer (KYC) documentation, proof of address, and verification of investor source of funds. However, digital corporate banking platforms like Wio Business have priority pre-approved APIs with our desk, allowing newly formed consulting and tech firms to secure IBANs within 1 to 3 days."
    },
    {
      q: "What are the rules regarding physical audits and bookkeeping?",
      a: "While all mainland companies and certain prestigious free zones (specifically DMCC) strictly require companies to file audited yearly accounts to renew licenses, most digital free zones (like Meydan and IFZA) have officially exempted registered SMEs from mandatory audit submissions to cut administrative friction."
    },
    {
      q: "How do I secure a 10-year Golden Visa in Dubai?",
      a: "The UAE Golden Visa can be secured under the Investor category by acquiring real estate worth at least AED 2,000,000, or under the Entrepreneur category by establishing an approved startup or tech venture with a valuation clearance. Our executive desk coordinates the entire Golden track directly with the Federal Authority for Identity and Citizenship."
    }
  ];

  // State to manage visible FAQ indices
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLinkNavigate = (pageId: PageId) => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="seo_and_faq_knowledge_hub" className="bg-white border-t border-zinc-100 pt-24 pb-20 font-sans relative overflow-hidden">
      {/* GLOW DECORATIONS */}
      <div className="absolute top-0 left-0 w-[40%] h-[350px] bg-[radial-gradient(circle_at_top_left,rgba(18,183,106,0.03),transparent_50%)] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* SECTION 1: INFORMATIVE ARTICLES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Editorial Text Column (7 Cols) - BEAUTIFULLY SHADED WRAPPER */}
          <div className="lg:col-span-7 bg-zinc-50/70 border border-zinc-200/60 p-6 sm:p-8 rounded-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-450/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-bold block">
                Sovereign Market Entry Insights
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold text-zinc-900 tracking-tight leading-snug">
                Architecting compliant growth in GCC trade corridors.
              </h2>
            </div>

            <p className="text-[13.5px] text-zinc-650 leading-relaxed font-sans">
              Setting up a company in the United Arab Emirates is no longer a matter of mere physical residency. It is a strategic corporate choice that influences tax liabilities under the new 9% UAE Corporate Tax guidelines, access to digital payment pipelines, and credibility with global financial providers. We compile your structure specifically to address audits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="space-y-3 bg-white p-5 rounded-xl border border-zinc-200/60/80 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="w-8 h-8 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center font-mono text-xs font-bold">01</span>
                <h4 className="font-bold text-zinc-800 text-[14.5px]">Free Zones Directory</h4>
                <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                  The UAE hosts over 45 custom Free Zones. Selecting the right jurisdiction depends entirely on whether you require instant digital setup SLAs (like Meydan), holding structures (like IFZA), heavy industrial plants (like RAKEZ), or raw commodities trading setups (like DMCC).
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 border-t border-zinc-50">
                  {['Meydan', 'IFZA', 'DMCC', 'Shams'].map((fz_name, index) => {
                    const mappedIds = ['fz-meydan', 'fz-ifza', 'fz-dmcc', 'fz-shams'];
                    return (
                      <button
                        key={index}
                        onClick={() => handleLinkNavigate(mappedIds[index] as PageId)}
                        className="text-[11.5px] text-gold-650 font-semibold hover:text-gold-750 hover:underline inline-flex items-center space-x-0.5"
                      >
                        <span>{fz_name}</span>
                        <span className="text-[8px] text-zinc-400">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 bg-white p-5 rounded-xl border border-zinc-200/60/80 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="w-8 h-8 rounded-lg bg-[#22C55E]/15 text-gold-500 flex items-center justify-center font-mono text-xs font-bold">02</span>
                <h4 className="font-bold text-zinc-800 text-[14.5px]">Strategic License Types</h4>
                <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                  A trade license represents your legal operating ledger. Selecting matching activity divisions prevents regulatory fines and merchant gateway holds. E-commerce setups, consulting service portals, and digital agency branches require explicit structural alignment for smooth audits.
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 border-t border-zinc-50">
                  {['E-Commerce', 'Consultancy', 'Holding'].map((lic_name, index) => {
                    const mappedIds = ['lic-ecommerce', 'lic-commercial', 'lic-holding'];
                    return (
                      <button
                        key={index}
                        onClick={() => handleLinkNavigate(mappedIds[index] as PageId)}
                        className="text-[11.5px] text-gold-650 font-semibold hover:text-gold-750 hover:underline inline-flex items-center space-x-0.5"
                      >
                        <span>{lic_name}</span>
                        <span className="text-[8px] text-zinc-400">→</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-[11.5px] text-zinc-450 italic font-serif pt-3 border-t border-zinc-200/60">
              Disclaimer: Scale Partners is a fully licensed corporate advisory firm. This guide is for educational purposes. Official setup approvals require partner biometric security clearing clearances.
            </p>
          </div>

          {/* Core Trust & Security Sidebar Column (5 Cols) - BLUE ACCENTED CONTAINER */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#fbfaf6] via-white to-[#22C55E]/5 border border-zinc-200/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-gold-600 font-bold uppercase tracking-wider relative z-10">
              <ShieldCheck className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Trust and Security Indicators</span>
            </div>

            <div className="space-y-5 relative z-10">
              <div className="flex items-start space-x-3 text-[13px] text-zinc-700 bg-white/70 p-3 rounded-xl border border-zinc-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 block font-sans">Authorized Sovereign Registered Agent</strong>
                  Approved corporate registry coordinating body in continuous standing with major registries across Dubai and Northern Emirates.
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-[13px] text-zinc-700 bg-white/70 p-3 rounded-xl border border-zinc-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 block font-sans">Corporate Tax Protection Certification</strong>
                  Advisors are licensed to configure asset security strategies tailored explicitly to defend domestic corporate assets.
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[13px] text-zinc-700 bg-white/70 p-3 rounded-xl border border-zinc-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 block font-sans">Zero Bank Account Friction</strong>
                  Priority pre-approved digital ledger setups ensure direct corporate accounting priority at top-tier digital banks.
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-200/60 pt-5 mt-4 space-y-3 relative z-10">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block tracking-widest">Active Partner Desks</span>
              <div className="grid grid-cols-2 gap-3 text-[12px] font-medium text-zinc-800">
                <div className="bg-white border border-zinc-200/60/60 p-2.5 rounded-lg flex items-center space-x-1.5 shadow-2xs">
                  <Building2 className="w-4 h-4 text-gold-500" />
                  <span>Wio Premium Partner</span>
                </div>
                <div className="bg-white border border-zinc-200/60/60 p-2.5 rounded-lg flex items-center space-x-1.5 shadow-2xs">
                  <FileText className="w-4 h-4 text-gold-500" />
                  <span>DET Integration</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* SECTION 2: RICH GENERAL ACCORDION FAQS */}
        <div className="space-y-8 pt-10 border-t border-zinc-100">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold-600 font-bold block">
              Direct Solutions Center
            </span>
            <h3 className="font-serif text-[26px] sm:text-[32px] font-semibold text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-[13px] text-zinc-500 font-sans">
              Exhaustive operational references compiled by our senior corporate registries team.
            </p>
          </div>

          {/* Accordion Layout with Shaded Hoverable Cards */}
          <div className="max-w-4xl mx-auto space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-transparent text-zinc-900 border-gold-500/40 shadow-sm' 
                      : 'bg-transparent hover:border-zinc-300 text-zinc-850 border-zinc-200'
                  }`}
                >
                  <button
                    id={`faq_trigger_${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-center px-6 py-5 focus:outline-none cursor-pointer"
                  >
                    <span className="text-[14px] sm:text-[15.5px] font-bold font-sans tracking-tight leading-snug text-zinc-900">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-gold-500' : 'text-zinc-400'
                    }`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[13.5px] leading-relaxed text-zinc-550 font-sans border-t border-zinc-100 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

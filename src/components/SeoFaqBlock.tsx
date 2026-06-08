"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
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
  FileText,
  Scale,
  ChevronLeft,
  ChevronRight
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector('div');
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // space-x-6 is 24px
        const scrollAmount = cardWidth + gap;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const divisions = [
    {
      title: "Business Setup & Company Formation",
      icon: Building2,
      pageId: 'setup-freezone' as PageId,
      p1: "Establishing a company in the United Arab Emirates provides a powerful foundation for global commerce. We handle the entire registration sequence, name approvals, and municipal registries on your behalf across Dubai Mainland (DET) and 45+ specialized Free Zones.",
      p2: "Whether you require domestic market access with unlimited team visas or a tax-exempt Free Zone hub with instant virtual flexi-desk approvals, we coordinate directly with official registrars to get your trade license active within 24 hours.",
      cta: "Explore Setup Solutions"
    },
    {
      title: "Trade Licensing & Activity Structuring",
      icon: FileText,
      pageId: 'lic-ecommerce' as PageId,
      p1: "A trade license is the legal operational ledger of your GCC enterprise. Selecting the correct activity divisions prevents regulatory compliance fines, ensures smooth local tax audits, and guarantees quick merchant payment gate approvals.",
      p2: "We align your corporate structure with specialized activities including E-Commerce, B2B Consultancy, General Trading, and Holding Company SPVs, securing direct registrar approvals tailored specifically to your sector.",
      cta: "Explore License Types"
    },
    {
      title: "Corporate Tax Strategy & GAAP Accounting",
      icon: Scale,
      pageId: 'finance-tax' as PageId,
      p1: "Operating a compliant enterprise requires careful coordination under the federal 9% UAE Corporate Tax guidelines and standard 5% VAT filing rules. Our chartered accountants prepare your ledgers in strict accordance with global GAAP standards.",
      p2: "We register your entity for Tax Registration Numbers (TRN), optimize your eligible exemptions legally, and supervise yearly corporate audits to safeguard your business assets from unexpected administrative penalties.",
      cta: "Explore Tax & Accounting"
    },
    {
      title: "VIP Corporate Bank Account Opening",
      icon: Lock,
      pageId: 'finance-banking' as PageId,
      p1: "Accessing secure, multi-currency banking is critical for international trade, payment processing, and treasury management. We provide direct pre-approved pipelines to top UAE banking institutions including Emirates NBD, Mashreq, and Wio Bank.",
      p2: "Our banking relations team guides you through the complex corporate KYC screening queues, ensuring you secure active corporate IBANs and payment processing merchant integrations with zero administrative friction.",
      cta: "Explore Banking Solutions"
    }
  ];

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
        
        {/* Core Corporate Divisions Slider Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div className="space-y-3 text-left max-w-2xl">
            <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-[#08854C] px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span>Corporate Divisions</span>
            </span>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-semibold text-zinc-900 tracking-tight leading-tight">
              Our Core Corporate Solutions
            </h2>
            <p className="text-[14px] sm:text-[15px] text-zinc-500 font-sans">
              Dedicated divisions to structure, register, protect, and finance your business operations in the UAE.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center space-x-2.5 shrink-0 self-start md:self-end">
            <button 
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-655 hover:bg-white hover:text-emerald-500 hover:border-emerald-500/30 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-655 hover:bg-white hover:text-emerald-500 hover:border-emerald-500/30 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Core Corporate Divisions Slider Row */}
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
        >
          {divisions.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div 
                key={idx} 
                className="w-[290px] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-zinc-50/70 border border-zinc-200/60 p-6 sm:p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_50px_rgba(18,183,106,0.04)] hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between group snap-start space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zinc-200/50">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#08854C] flex items-center justify-center border border-emerald-500/15">
                      <Icon className="w-5 h-5 text-[#08854C]" />
                    </div>
                    <h3 className="text-[16.5px] font-bold text-zinc-900 tracking-tight font-sans text-left">
                      {sec.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 text-[13px] text-zinc-655 leading-relaxed font-sans font-light text-left">
                    <p>{sec.p1}</p>
                    <p>{sec.p2}</p>
                  </div>

                  {/* BANKING LOGOS GRID INSIDE CARD 4 */}
                  {sec.title === "VIP Corporate Bank Account Opening" && (
                    <div className="mt-4 pt-4 border-t border-zinc-200/50 space-y-2">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block text-left">Pre-Integrated Banking Partners:</span>
                      <div className="grid grid-cols-4 gap-2">
                        {['Wio', 'ENBD', 'Mashreq', 'FAB', 'ADIB', 'RAK-BANK', 'Emirates-islamic', 'RUya'].map((bank) => (
                          <div key={bank} className="h-8 bg-white border border-zinc-150 rounded-lg flex items-center justify-center p-1.5 hover:border-emerald-500/20 transition-all shadow-3xs">
                            <img 
                              src={`/assets/imgi_${
                                bank === 'Wio' ? '65_WIO' : 
                                bank === 'ENBD' ? '58_ENBD' : 
                                bank === 'Mashreq' ? '59_Mashreq' : 
                                bank === 'FAB' ? '56_FAB' : 
                                bank === 'ADIB' ? '60_ADIB' : 
                                bank === 'RAK-BANK' ? '54_RAK-BANK' : 
                                bank === 'Emirates-islamic' ? '61_Emirates-islamic' : '66_RUya'
                              }.png`} 
                              alt={bank} 
                              className="h-full w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleLinkNavigate(sec.pageId)}
                  className="group inline-flex items-center space-x-1.5 text-[13px] font-semibold text-emerald-600 hover:text-emerald-700 font-sans self-start cursor-pointer border-0 bg-transparent p-0"
                >
                  <span>{sec.cta}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            );
          })}
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

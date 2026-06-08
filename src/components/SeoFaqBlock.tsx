"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from '../types';
import { 
  HelpCircle, 
  ChevronDown
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

  return (
    <div id="seo_and_faq_knowledge_hub" className="bg-white border-t border-zinc-100 pt-24 pb-20 font-sans relative overflow-hidden">
      {/* GLOW DECORATIONS */}
      <div className="absolute top-0 left-0 w-[40%] h-[350px] bg-[radial-gradient(circle_at_top_left,rgba(18,183,106,0.03),transparent_50%)] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#08854C] font-bold block">
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
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-transparent text-zinc-900 border-[#22C55E]/40 shadow-xs' 
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
                    isOpen ? 'rotate-180 text-emerald-500' : 'text-zinc-400'
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
  );
}

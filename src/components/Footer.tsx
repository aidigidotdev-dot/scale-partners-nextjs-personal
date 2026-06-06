"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import { Compass, Landmark, ShieldCheck, Mail, Phone, MapPin, Scale } from 'lucide-react';

interface FooterProps {
  setPage: (page: PageId) => void;
  openContactModal: () => void;
}

export default function Footer({ setPage, openContactModal }: FooterProps) {
  
  const handleLinkClick = (pageId: PageId) => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerGroups = [
    {
      title: "Jurisdictions & Free Zones",
      links: [
        { name: "Meydan Free Zone Setup", id: "fz-meydan" as PageId },
        { name: "IFZA SDO Dubai Setup", id: "fz-ifza" as PageId },
        { name: "DMCC JLT Commodities", id: "fz-dmcc" as PageId },
        { name: "Shams Sharjah Media City", id: "fz-shams" as PageId },
        { name: "RAKEZ Industrial Zone", id: "fz-rakez" as PageId },
        { name: "DWTC Sheikh Zayed Road", id: "fz-dwtc" as PageId },
      ]
    },
    {
      title: "Licensing Directories",
      links: [
        { name: "E-Commerce License", id: "lic-ecommerce" as PageId },
        { name: "General Trading License", id: "lic-trading" as PageId },
        { name: "Commercial & B2B Services", id: "lic-commercial" as PageId },
        { name: "Media & Creator License", id: "lic-media" as PageId },
        { name: "Industrial & Assembly", id: "lic-industrial" as PageId },
        { name: "Corporate SPV & Holding Co", id: "lic-holding" as PageId },
      ]
    },
    {
      title: "Business Setup Directory",
      links: [
        { name: "Mainland Company (DET)", id: "setup-mainland" as PageId },
        { name: "Free Zone Ecosystems", id: "setup-freezone" as PageId },
        { name: "Offshore Vehicles", id: "setup-offshore" as PageId },
        { name: "Cost Estimator Tool", id: "calculator" as PageId },
      ]
    },
    {
      title: "Financials & Residency",
      links: [
        { name: "UAE Golden Visa Program", id: "visa-golden" as PageId },
        { name: "Investor & Partner Visa", id: "visa-residence" as PageId },
        { name: "9% Corporate Tax Advisor", id: "finance-tax" as PageId },
        { name: "VIP Corporate Banking", id: "finance-banking" as PageId },
      ]
    }
  ];

  return (
    <footer id="site_footer" className="bg-[#0b0e1a] text-zinc-400 font-sans border-t border-[#151a2d] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Directory Map Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#151a2d]">
          {footerGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-[11.5px] font-mono tracking-widest uppercase text-white font-bold">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-left text-[12.5px] text-zinc-400 hover:text-gold-400 transition-colors focus:outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Legal & Address blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start justify-between">
          
          <div className="lg:col-span-6 space-y-4">
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-brand-grad text-white flex items-center justify-center font-bold text-[13px] border border-gold-300/25">
                S
              </div>
              <span className="font-semibold text-white tracking-tight text-[15px]">
                SCALE <span className="text-gold-400 font-medium">PARTNERS</span>
              </span>
            </div>
            
            <p className="text-[12px] text-zinc-500 max-w-md leading-relaxed font-sans">
              Scale Partners Corporate Advisory is a licensed corporate setup agency and officially registered agent operating under direct DET registry clearances in the United Arab Emirates.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[12px] font-sans">
            <div className="space-y-2">
              <span className="text-white font-semibold font-mono uppercase tracking-wider text-[10.5px]">Headquarters</span>
              <p className="leading-relaxed text-zinc-500">
                Tower 3, The Boulevard Chambers,<br />
                Downtown Dubai, PO Box 450125<br />
                United Arab Emirates
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-white font-semibold font-mono uppercase tracking-wider text-[10.5px]">Direct Advisory desk</span>
              <p className="leading-relaxed text-zinc-500 flex flex-col space-y-1">
                <span>WhatsApp: +971 50 123 4567</span>
                <span>Landline: +971 4 999 8888</span>
                <span>Email: contact@scalepartners.ae</span>
              </p>
            </div>
          </div>

        </div>

        {/* Legals / Copyright */}
        <div className="pt-12 border-t border-[#151a2d] mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-550 font-sans gap-4">
          <div>
            © 2026 Scale Partners Corporate Advisory. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-600">
            <a href="#" onClick={(e) => {e.preventDefault(); openContactModal();}} className="hover:text-gold-400 transition-colors">Privacy and NDA Agreement</a>
            <a href="#" onClick={(e) => {e.preventDefault(); openContactModal();}} className="hover:text-gold-400 transition-colors">Anti Money Laundering Policy (AML)</a>
            <a href="#" onClick={(e) => {e.preventDefault(); openContactModal();}} className="hover:text-gold-400 transition-colors">Service Level Agreements</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

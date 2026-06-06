/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, FileCheck, Landmark, Check, HelpCircle } from 'lucide-react';

export default function RequiredDocuments() {
  const documents = [
    {
      title: "Identity Dossier (Standard)",
      purpose: "Mandatory for all physical owners, managers, and ultimate beneficial owners (UBOs).",
      items: [
        { name: "Passport Copy", detail: "High-resolution color photograph page (must be valid for at least 6 months)." },
        { name: "Entry Stamp or Current UAE Visa Copy", detail: "Visit Visa, Tourist entry stamp, or existing residency cancelation paper." },
        { name: "Passport Size Photograph", detail: "White background, recent high-resolution camera scan." }
      ]
    },
    {
      title: "Corporate & Address Verification",
      purpose: "Required by central banking and registry AML compliance guards.",
      items: [
        { name: "Proof of Address", detail: "Utility bill, bank statement, or official lease contract under 3 months old." },
        { name: "Corporate Registry Brief (CV)", detail: "Comprehensive professional portfolio outlining business experience." },
        { name: "Proposed Business Names", detail: "Three distinct trade names in order of preference for DET approval." }
      ]
    },
    {
      title: "Attested Academic Credentials",
      purpose: "Mandatory only for professional consultancies, healthcare, and executive residency.",
      items: [
        { name: "Certified Degree Certificate", detail: "Bachelor's degree or higher, legally attested by the UAE Embassy in country of origin and MOFA UAE." }
      ]
    }
  ];

  return (
    <section id="official_required_documents_block" className="py-16 bg-white border-t border-b border-zinc-200 relative overflow-hidden">
      {/* Soft Radial Background Spotlight for an elegant human-crafted finish */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00d4aa]/[0.02] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1.5 bg-zinc-100 text-[#0066ff] px-3 py-1 rounded-full border border-zinc-200 font-mono text-[10px] font-bold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-[#0066ff]" />
            <span>Sovereign Registry Guidelines</span>
          </div>
          <h2 className="font-sans text-[24px] sm:text-[30px] font-light text-zinc-900 tracking-wide leading-tight">
            Required Documents for Trade Licensing & Residency
          </h2>
          <p className="text-[12.5px] sm:text-[13.5px] text-zinc-500 font-sans max-w-2xl leading-relaxed">
            All documents must be uploaded in high-resolution PDF format. Our regulatory desk handles all translations and ministerial submissions directly with the respective Ministry of Interior portals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {documents.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-50/50 rounded-2xl p-6 border border-zinc-200 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-zinc-400 font-bold block uppercase">FOLDER 0{idx + 1}</span>
                  <h3 className="font-sans text-[16.5px] font-light text-zinc-900 tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-[11.5px] text-zinc-500 leading-relaxed font-sans">
                    {category.purpose}
                  </p>
                </div>

                <ul className="space-y-2.5 divide-y divide-zinc-200/40">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={`pt-2.5 ${itemIdx === 0 ? 'border-t-0 pt-0' : ''}`}>
                      <div className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <div className="space-y-0.5">
                          <span className="text-[12px] font-bold text-zinc-850 block">{item.name}</span>
                          <span className="text-[11px] text-zinc-500 leading-snug block font-sans">{item.detail}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-amber-50/35 border border-amber-500/10 rounded-xl flex items-start space-x-3 text-[11.5px] text-amber-850">
          <Landmark className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
          <div className="space-y-0.5">
            <span className="font-bold">Important Attestation Warning:</span>
            <p className="leading-relaxed text-zinc-650">
              Foreign academic degrees or parent-subsidiary certificates must be legally legalized in your home country and attested at UAE MOFA. Scale Partners provides accelerated concierge attestation services for foreign portfolios if required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

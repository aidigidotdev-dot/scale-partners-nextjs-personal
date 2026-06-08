/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, XCircle, Shield, Award, Landmark, Zap, Globe, Building2 } from 'lucide-react';
import { PageId } from '../types';

interface ComparisonBlockProps {
  setPage?: (page: PageId) => void;
}

export default function ComparisonBlock({ setPage }: ComparisonBlockProps) {
  const comparisonData = {
    title: "The Scale Partners Difference",
    badge: "D33 Strategic Mandate Alignment",
    subtitle: "How Scale Partners compares to typical business setup agents in the United Arab Emirates",
    description: "Aligning your entity directly with the UAE National Agenda. We provide structured compliance, direct official API integrations, and guaranteed corporate bank account clearance, rather than superficial agent introductions.",
    criteria: [
      {
        factor: "D33 & National Agenda Alignment",
        specialist: {
          supported: true,
          text: "Certified under the Dubai D33 Mandate to drive foreign direct investment, establishing direct registration logs with Emirate Ministries."
        },
        competitors: {
          supported: false,
          text: "Unlicensed volume registrars operating purely for individual desk fee placements with no strategic national coordination."
        }
      },
      {
        factor: "Corporate Bank Account Setup SLA",
        specialist: {
          supported: true,
          text: "Direct API pipelines into Wio Premium, Mashreq, and ENBD. Account clearing processes initiated synchronously with the trade license."
        },
        competitors: {
          supported: false,
          text: "Generic introducer letters leaving you wait-listed for 3 to 6 months with standard compliance rejection risks."
        }
      },
      {
        factor: "Regulatory OECD & Corporate Tax Audits",
        specialist: {
          supported: true,
          text: "Bespoke legal compiling matching MoF 9% corporate tax protection standards. Handled by licensed LL.M. tax associates."
        },
        competitors: {
          supported: false,
          text: "Simple template filings that lead to future regulatory administrative fines and merchant payment gateway holds."
        }
      },
      {
        factor: "Transparent Setup Fee Structure",
        specialist: {
          supported: true,
          text: "Absolute zero hidden costs. All multi-emirate registrar fees, official government processing cards, and active stamp systems disclosed upfront."
        },
        competitors: {
          supported: false,
          text: "Low starting bait rates followed by mandatory year-end local sponsor, office renewal, and immigration portal updates."
        }
      },
      {
        factor: "Official Administrative Sequence Speed",
        specialist: {
          supported: true,
          text: "Under 24 Hours. Parallel bio-clearances and instant digital registrar access bypassing standard manual queues."
        },
        competitors: {
          supported: false,
          text: "Standard 7 to 15 business days due to batch processing delays and manual registry coordination."
        }
      }
    ],
    mandates: [
      {
        icon: Landmark,
        title: "D33 Economic Acceleration",
        desc: "Designed to support the official UAE target to double Dubai's economy by 2033 by deploying compliant, investable, and high-growth corporate entities."
      },
      {
        icon: Shield,
        title: "Federal Tax Shield Alignment",
        desc: "Full structural synchronization with the Ministry of Finance guidelines to safeguard domestic assets while ensuring perfect AML compliance."
      },
      {
        icon: Zap,
        title: "Direct Fast-Track Processing",
        desc: "Integrated with official DET and Free Zone APIs for instantaneous 24-hour business setup approval sequences."
      }
    ]
  };

  return (
    <div 
      id="corporate_comparison_hub" 
      style={{
        backgroundImage: `url('/assets/invoice_accounting_hands.png')`,
      }}
      className="py-24 bg-fixed bg-cover bg-center font-sans relative overflow-hidden border-t border-b border-zinc-200"
    >
      {/* Light gradient wash overlay where image shows through softly */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/92 to-white pointer-events-none z-0"></div>

      {/* Decorative Premium Soft Glow Filters */}
      <div className="absolute top-0 right-0 w-[55%] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(18,183,106,0.06),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[55%] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.04),transparent_50%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-[#08854C] px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-mono text-[10px] font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#12B76A]" />
            <span>{comparisonData.badge}</span>
          </span>
          <h2 className="font-serif text-[28px] sm:text-[38px] font-semibold text-zinc-900 tracking-tight leading-tight">
            {comparisonData.title}
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-zinc-500 leading-relaxed font-sans font-normal">
            {comparisonData.subtitle}
          </p>
        </div>

        {/* SIDE-BY-SIDE COMPARISON CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Scale Partners Elite Advantage */}
          <div className="bg-gradient-to-br from-[#12B76A]/50 via-emerald-500/25 to-transparent p-[1.5px] rounded-2xl shadow-[0_30px_70px_rgba(18,183,106,0.12)] lg:-translate-y-3 lg:scale-[1.01] transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-[15px] space-y-6 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
              
              {/* Premium Floating Sovereign Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[8.5px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center space-x-1 border border-emerald-400/25 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>Sovereign Standard</span>
              </div>

              <div className="flex items-center space-x-3 pb-4 border-b border-zinc-100">
                <span className="w-3.5 h-3.5 rounded-full bg-[#12B76A] shadow-[0_0_12px_rgba(18,183,106,0.6)]"></span>
                <div>
                  <h3 className="text-[18.5px] font-bold text-zinc-900 font-sans tracking-tight">Scale Partners Elite Advancements</h3>
                  <span className="text-[10.5px] font-mono uppercase text-[#08854C] font-bold">Recommended Solution</span>
                </div>
              </div>
              <div className="space-y-6">
                {comparisonData.criteria.map((item, index) => (
                  <div key={index} className="space-y-2 text-left text-[13px]">
                    <strong className="block text-zinc-800 font-sans font-semibold tracking-tight">{item.factor}</strong>
                    <div className="flex items-start space-x-2.5 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10 shadow-2xs hover:bg-emerald-500/8 transition-colors duration-250">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-650 leading-relaxed font-sans">{item.specialist.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Typical Registration Agencies */}
          <div className="bg-white/70 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-zinc-200/60 shadow-xs space-y-6 relative overflow-hidden opacity-95">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100/30 rounded-full blur-2xl"></div>
            <div className="flex items-center space-x-3 pb-4 border-b border-zinc-200">
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              <div>
                <h3 className="text-[18px] font-bold text-zinc-450 font-sans tracking-tight">Typical Registration Agencies</h3>
                <span className="text-[10.5px] font-mono uppercase text-zinc-400 font-bold">Unregulated Volume Models</span>
              </div>
            </div>
            <div className="space-y-6">
              {comparisonData.criteria.map((item, index) => (
                <div key={index} className="space-y-2 text-left text-[13px]">
                  <strong className="block text-zinc-400 font-sans font-semibold tracking-tight">{item.factor}</strong>
                  <div className="flex items-start space-x-2.5 bg-zinc-50/80 p-4 rounded-xl border border-zinc-200/20 opacity-80">
                    <XCircle className="w-5 h-5 text-zinc-450 shrink-0 mt-0.5" />
                    <span className="text-zinc-500 leading-relaxed font-sans">{item.competitors.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* JURISDICTION COMPARISON GRID (Mainland vs Free Zone) */}
        <div className="mb-20 bg-white border border-zinc-150 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] text-left relative z-10">
          
          <div className="pb-6 mb-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-[20px] font-bold text-zinc-900 font-sans tracking-tight">Mainland vs Free Zone Jurisdiction Comparison</h3>
              <p className="text-[13.5px] text-zinc-500 font-sans mt-1">Understanding the trade boundaries, municipal access, office flexibility, and setup cost differences.</p>
            </div>
            <div className="flex space-x-2 shrink-0">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-emerald-500/15">
                <span>Active Comparison Matrix</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Dimensions (Hidden on mobile, layout as rows on mobile instead) */}
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-between py-6 pr-4">
              <div className="space-y-12">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Key Dimension</div>
                
                <div className="space-y-2 h-[120px] flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-zinc-900 leading-tight">UAE Onshore Commerce</h4>
                  <p className="text-[12px] text-zinc-450 leading-normal">Ability to trade directly in the local UAE market and coordinate onshore deals.</p>
                </div>
                
                <div className="space-y-2 h-[120px] flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-zinc-900 leading-tight">Government Procurement</h4>
                  <p className="text-[12px] text-zinc-450 leading-normal">Direct bidding access for municipal, federal, or government tenders.</p>
                </div>

                <div className="space-y-2 h-[120px] flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-zinc-900 leading-tight">Office Requirements</h4>
                  <p className="text-[12px] text-zinc-450 leading-normal">Obligatory physical premises and workspace leasing restrictions.</p>
                </div>

                <div className="space-y-2 h-[120px] flex flex-col justify-center">
                  <h4 className="text-[14px] font-bold text-zinc-900 leading-tight">Initial Setup Cost</h4>
                  <p className="text-[12px] text-zinc-450 leading-normal">Upfront capital requirement for registration and initial regulatory licensing.</p>
                </div>
              </div>
            </div>

            {/* Middle Column: Mainland Corporate Setup */}
            <div className="lg:col-span-4 bg-emerald-500/[0.02] border-2 border-emerald-500/15 rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_40px_rgba(18,183,106,0.02)]">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-mono font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Direct Access
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-3.5 pb-4 border-b border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-zinc-900 leading-tight">Mainland Entity</h3>
                    <span className="text-[9.5px] font-mono uppercase text-[#08854C] font-semibold">Department of Economy (DET)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">UAE Onshore Commerce</span>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-800">Direct Onshore Trade (Unrestricted)</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Ability to trade directly in the local UAE market and coordinate onshore deals.</p>
                  </div>

                  {/* Feature 2 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">Government Procurement</span>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-800">Full Tendering Access (Municipal & Federal)</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Direct bidding access for municipal, federal, or government tenders.</p>
                  </div>

                  {/* Feature 3 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">Office Requirements</span>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-800">Physical Premises Required (9 sqm per visa ratio)</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Obligatory physical premises and workspace leasing restrictions.</p>
                  </div>

                  {/* Feature 4 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">Initial Setup Cost</span>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-800">Higher Capital Output (Regulatory DET Fees)</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Upfront capital requirement for registration and initial regulatory licensing.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  if (setPage) {
                    setPage('setup-mainland');
                  } else {
                    window.location.href = '/setup-mainland';
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 bg-zinc-950 text-white hover:bg-emerald-600 px-5 py-3 rounded-xl text-[12.5px] font-semibold tracking-tight transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer border-0"
              >
                <span>Structure Mainland Setup</span>
                <span>→</span>
              </button>
            </div>

            {/* Right Column: Free Zone Authority */}
            <div className="lg:col-span-4 bg-white border border-zinc-150 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.01)] hover:border-zinc-250 transition-all duration-300">
              
              <div className="space-y-8">
                <div className="flex items-center space-x-3 pb-4 border-b border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-500 flex items-center justify-center border border-zinc-150 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-zinc-900 leading-tight">Free Zone Entity</h3>
                    <span className="text-[9.5px] font-mono uppercase text-zinc-400 font-semibold">Specialized Customs Enclaves</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">UAE Onshore Commerce</span>
                    <div className="flex items-start space-x-2.5">
                      <XCircle className="w-4.5 h-4.5 text-zinc-350 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-650">Restricted to Zone / Local Agent Required</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Ability to trade directly in the local UAE market and coordinate onshore deals.</p>
                  </div>

                  {/* Feature 2 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">Government Procurement</span>
                    <div className="flex items-start space-x-2.5">
                      <XCircle className="w-4.5 h-4.5 text-zinc-350 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-500">Excluded from Mainland Public Bidding</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Direct bidding access for municipal, federal, or government tenders.</p>
                  </div>

                  {/* Feature 3 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">Office Requirements</span>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-700">Highly Flexible (Virtual, Shared, or Flexi-Desks)</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Obligatory physical premises and workspace leasing restrictions.</p>
                  </div>

                  {/* Feature 4 */}
                  <div className="space-y-1.5 h-auto lg:h-[120px] flex flex-col justify-center text-left">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest lg:hidden">Initial Setup Cost</span>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[13.5px] font-medium text-zinc-700">Cost-Effective Startup Packages Available</div>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-light mt-1 pl-7 lg:hidden">Upfront capital requirement for registration and initial regulatory licensing.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  if (setPage) {
                    setPage('setup-freezone');
                  } else {
                    window.location.href = '/setup-freezone';
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 bg-zinc-950 text-white hover:bg-emerald-600 px-5 py-3 rounded-xl text-[12.5px] font-semibold tracking-tight transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer border-0"
              >
                <span>Structure Free Zone Setup</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

        {/* GOVERNMENT MANDATES HIGHLIGHT CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisonData.mandates.map((mandate, idx) => {
            const Icon = mandate.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/90 backdrop-blur-md hover:bg-white border border-zinc-200/50 p-6 rounded-2xl shadow-[0_15px_40px_rgba(122,154,133,0.04)] hover:shadow-[0_20px_50px_rgba(18,183,106,0.06)] hover:border-emerald-500/20 transition-all duration-300 hover:scale-[1.015] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#08854C] flex items-center justify-center shrink-0 border border-emerald-500/15">
                  <Icon className="w-4.5 h-4.5 text-[#08854C]" />
                </div>
                <h3 className="text-[15px] font-bold text-zinc-900 tracking-tight">
                  {mandate.title}
                </h3>
                <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans">
                  {mandate.desc}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

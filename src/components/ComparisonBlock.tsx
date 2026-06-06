/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, XCircle, Shield, Award, Landmark, Zap } from 'lucide-react';

export default function ComparisonBlock() {
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
          text: "Absoluted zero hidden costs. All multi-emirate registrar fees, official government processing cards, and active stamp systems disclosed upfront."
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
    <div id="corporate_comparison_hub" className="py-20 bg-gradient-to-b from-white via-[#00d4aa]/5 to-white font-sans relative overflow-hidden border-t border-zinc-100">
      {/* Decorative Premium Soft Glow Filters */}
      <div className="absolute top-0 right-0 w-[45%] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(0,212,170,0.06),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[45%] h-[400px] bg-[radial-gradient(circle_at_bottom_left,rgba(0,212,170,0.05),transparent_50%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <span className="inline-flex items-center space-x-1.5 bg-[#00d4aa]/15 text-[#009c80] px-3.5 py-1.5 rounded-full border border-[#00d4aa]/20 font-mono text-[10px] font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-gold-500" />
            <span>{comparisonData.badge}</span>
          </span>
          <h2 className="font-serif text-[28px] sm:text-[38px] font-semibold text-zinc-900 tracking-tight leading-tight">
            {comparisonData.title}
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-zinc-500 leading-relaxed font-sans font-normal">
            {comparisonData.subtitle}
          </p>
        </div>

        {/* SIDE-BY-SIDE COMPARISON CARDS (NO TABLE - CLEANER RESPONSIVE CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Scale Partners Elite Advantage */}
          <div className="bg-gradient-to-br from-[#00d4aa]/10 via-white to-[#00d4aa]/5 p-8 sm:p-10 rounded-2xl border border-[#00d4aa]/25 shadow-md space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4aa]/10 rounded-full blur-2xl"></div>
            <div className="flex items-center space-x-3 pb-4 border-b border-zinc-150">
              <span className="w-3 h-3 rounded-full bg-[#00d4aa]"></span>
              <div>
                <h3 className="text-[18px] font-bold text-zinc-900 font-sans tracking-tight">Scale Partners Elite Advancements</h3>
                <span className="text-[10.5px] font-mono uppercase text-[#009c80] font-bold">Recommended Sovereign Standard</span>
              </div>
            </div>
            <div className="space-y-6">
              {comparisonData.criteria.map((item, index) => (
                <div key={index} className="space-y-2 text-left text-[13px]">
                  <strong className="block text-zinc-850 font-sans font-semibold tracking-tight">{item.factor}</strong>
                  <div className="flex items-start space-x-2.5 bg-[#00d4aa]/5 p-4 rounded-xl border border-[#00d4aa]/15 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 leading-relaxed font-sans">{item.specialist.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Typical Registration Agencies */}
          <div className="bg-gradient-to-br from-zinc-50/50 via-white to-zinc-50/30 p-8 sm:p-10 rounded-2xl border border-zinc-200 shadow-xs space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-200/20 rounded-full blur-2xl"></div>
            <div className="flex items-center space-x-3 pb-4 border-b border-zinc-200">
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              <div>
                <h3 className="text-[18px] font-bold text-zinc-500 font-sans tracking-tight">Typical Registration Agencies</h3>
                <span className="text-[10.5px] font-mono uppercase text-zinc-400 font-bold">Unregulated Volume Models</span>
              </div>
            </div>
            <div className="space-y-6">
              {comparisonData.criteria.map((item, index) => (
                <div key={index} className="space-y-2 text-left text-[13px]">
                  <strong className="block text-zinc-450 font-sans font-semibold tracking-tight">{item.factor}</strong>
                  <div className="flex items-start space-x-2.5 bg-zinc-50/80 p-4 rounded-xl border border-zinc-200/20 opacity-80">
                    <XCircle className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-500 leading-relaxed font-sans">{item.competitors.text}</span>
                  </div>
                </div>
              ))}
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
                className="bg-white hover:bg-zinc-50/50 border border-zinc-150 p-6 rounded-2xl shadow-2xs hover:shadow-xs transition-all duration-300 hover:scale-[1.01] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-[#00d4aa]/10 text-[#009c80] flex items-center justify-center shrink-0 border border-[#00d4aa]/20">
                  <Icon className="w-4.5 h-4.5 text-[#009c80]" />
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

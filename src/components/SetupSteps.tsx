"use client";

import { useState } from 'react';
import { Compass, Landmark, FileText, CheckSquare, ChevronRight, Activity, CreditCard, ShieldCheck } from 'lucide-react';

export default function SetupSteps() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNum: "01",
      icon: Compass,
      title: "Define Business Activity",
      subtitle: "Regulatory Mapping",
      desc: "Identify your target market and choose from over 2,000+ pre-approved commercial, media, industrial, or professional activities. Correct classification dictates your corporate tax eligibility.",
      insiderTip: "SaaS & AI consultancies can often qualify for strategic digital service classifications with reduced filing requirements."
    },
    {
      stepNum: "02",
      icon: Landmark,
      title: "Choose Jurisdiction Zone",
      subtitle: "Mainland vs. Free Zone",
      desc: "Determine if your business requires a Free Zone vehicle (best for 100% foreign equity & tech startups) or a Mainland license (essential for direct local physical trade and physical UAE office spaces).",
      insiderTip: "Meydan and Shams present the lowest entry-tier digital setup rates. DMCC is premium but preferred for commodity trade."
    },
    {
      stepNum: "03",
      icon: FileText,
      title: "Name Registry & Gateway Scans",
      subtitle: "Sovereign Submission",
      desc: "Submit your chosen trade name options and digital passport scans. We coordinate directly with DET or native registrars to issue direct trade name approvals and preliminary security clearances.",
      insiderTip: "Avoid using restricted geographic words, trademarked brands, or religious abbreviations in your proposed trade name."
    },
    {
      stepNum: "04",
      icon: CreditCard,
      title: "Visas & VIP Bank Onboardings",
      subtitle: "Residency & Funding",
      desc: "Our dedicated PRO navigates medical fitness tests, biometric queues, and Golden Visa files. Concurrently, we fast-track your multi-currency corporate banking setups with Wio, Mashreq, and ENBD.",
      insiderTip: "Opening an account with modern digital neo-banks like Wio takes only 48 hours with our pre-cleared partner portal."
    }
  ];

  return (
    <section id="business_setup_steps" className="relative py-16 bg-[#FBFBFD] border-b border-zinc-100 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-500 px-3 py-1 bg-zinc-50 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-gold-500/10">
              <Activity className="w-3.5 h-3.5 text-gold-500" />
              <span>LOGISTICAL FLOWSHEET</span>
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-sans font-light text-zinc-900 tracking-tight leading-snug">
              Steps for Business Setup in Dubai
            </h2>
            <p className="text-[14px] text-zinc-500">
              Clear corporate creation milestones managed securely from draft to first local transaction.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2 text-[12px] font-mono text-zinc-400 font-semibold select-none">
            <span>REGISTRATION FLOW</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-350" />
            <span className="text-gold-500">ACTIVE INTERACTIVE COMPILER</span>
          </div>
        </div>

        {/* Dynamic Dual-Column Interaction Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Timeline Step Navigation (List of steps) */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((st, idx) => {
              const IconComp = st.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`border text-left p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden flex items-start space-x-4 ${
                    isSelected 
                      ? 'bg-white border-transparent shadow-[0_15px_45px_rgba(18,183,106,0.07)] ring-1 ring-zinc-100' 
                      : 'bg-zinc-50/50 border-zinc-200 hover:border-zinc-350 hover:bg-white'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                    isSelected ? 'bg-brand-grad text-white' : 'bg-white text-zinc-400 border border-zinc-200'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-zinc-450 uppercase tracking-widest">
                        {st.subtitle}
                      </span>
                      <strong className={`font-mono text-[14px] transition-colors ${
                        isSelected ? 'text-gold-500' : 'text-zinc-350'
                      }`}>
                        STEP {st.stepNum}
                      </strong>
                    </div>
                    <h3 className="text-[15.5px] font-bold text-zinc-900">{st.title}</h3>
                    <p className="text-[13.5px] text-zinc-500 leading-relaxed font-light">
                      {isSelected ? st.desc : `${st.desc.substring(0, 95)}...`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Context Advisory Board Visual Panel */}
          <div className="lg:col-span-5 sticky top-28 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-semibold block">
                STEP {steps[activeStep].stepNum} • LIVE INSIDER INTELLIGENCE
              </span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-600 bg-emerald-50 border border-emerald-100/30 px-3.5 py-1.5 rounded-full text-[12px] font-medium font-sans">
                <CheckSquare className="w-4 h-4 text-emerald-500" />
                <span>Critical Compliance Prerequisite</span>
              </div>
              
              <h4 className="text-[17px] font-bold text-zinc-900 tracking-tight leading-snug">
                {steps[activeStep].title} Action Plan
              </h4>
              
              <p className="text-[13px] text-zinc-600 font-sans leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* Insider view card */}
              <div className="bg-amber-50/40 border border-amber-200/50 p-4 rounded-2xl space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-amber-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>ADVOCATE INSIDER INTEL</span>
                </span>
                <p className="text-[12.5px] text-zinc-700 font-sans italic leading-relaxed">
                  "{steps[activeStep].insiderTip}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span>Sovereign Registry SLA</span>
              <strong className="text-zinc-700">24-Hour Express Gateway</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

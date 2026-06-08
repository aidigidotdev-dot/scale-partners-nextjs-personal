import { Landmark, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function GovernmentDepartments() {
  const departments = [
    {
      name: "Department of Economy & Tourism (DET)",
      acronym: "DET Dubai",
      scope: "Mainland & Trade Licensing",
      desc: "The primary government regulator for onshore commercial activity. DET is responsible for issuing mainland corporate licenses, approving commercial names, and verifying national physical registry coordinates.",
      speed: "Fast-tracked in 4 Hours through Scale Partners' API gateway"
    },
    {
      name: "Ministry of Finance (MoF)",
      acronym: "MoF UAE",
      scope: "Tax & Financial Compliance",
      desc: "Supervises the federal UAE Corporate Tax framework, administers national economic substance filings, and releases formal guidelines governing double-taxation treaties.",
      speed: "Direct integration for Tax Registration Numbers (TRN)"
    },
    {
      name: "Ministry of Human Resources & Emiratisation (MoHRE)",
      acronym: "MoHRE",
      scope: "Labor & Work Visas",
      desc: "Governs corporate employment quotas, evaluates formal labor contracts, manages company quota eligibility, and issues official work permits for team members.",
      speed: "Approval issued within 24 to 48 hours of initial filing"
    },
    {
      name: "Federal Authority for Identity & Citizenship (ICP)",
      acronym: "ICP & GDRFA",
      scope: "Residencies & Golden Visas",
      desc: "The supreme directorate managing physical immigration, biometric scanning registries, investor residence permits, and high-prestige 10-year Golden Visa approvals.",
      speed: "VIP biometric slots cleared on day of application"
    }
  ];

  return (
    <section id="government_departments" className="py-16 bg-white font-sans text-left border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-500 px-3 py-1 bg-zinc-50 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-gold-500/10">
              <Landmark className="w-3.5 h-3.5 text-gold-500" />
              <span>OFFICIAL CLEARANCES</span>
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-sans font-light text-zinc-900 tracking-tight leading-snug">
              Direct Government Integrations
            </h2>
            <p className="text-[14px] text-zinc-500">
              Scale Partners operates with direct, pre-approved electronic links and PRO authority across key GCC ministries and Dubai regulatory departments.
            </p>
          </div>
          
          <div className="bg-emerald-50/50 border border-emerald-100/50 px-4 py-2 rounded-xl flex items-center space-x-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-[11px] text-zinc-700 font-mono">100% SECURE GOVERNMENT API CHANNELS</span>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {departments.map((dept, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-50/50 border border-zinc-200 rounded-2xl p-5 sm:p-6 hover:bg-white hover:shadow-[0_20px_50px_rgba(18,183,106,0.04)] hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-400 font-bold block">
                      {dept.acronym} • {dept.scope}
                    </span>
                    <h3 className="text-[15.5px] font-bold text-zinc-900 tracking-tight">
                      {dept.name}
                    </h3>
                  </div>
                </div>

                <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans font-light">
                  {dept.desc}
                </p>
              </div>

              {/* Status footer inside each card */}
              <div className="mt-5 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-[11px] font-sans">
                <span className="text-emerald-600 font-medium inline-flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{dept.speed}</span>
                </span>
                
                <span className="text-zinc-450 flex items-center space-x-1 text-[10px] font-mono">
                  <span>Authorized</span>
                  <ExternalLink className="w-3 h-3 text-zinc-300" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

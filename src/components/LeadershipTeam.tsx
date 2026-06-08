import { Linkedin, Mail, ShieldAlert, Award, FileText } from 'lucide-react';
import Image from 'next/image';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Advocate Tarik Al-Mehairi",
      role: "Senior Legal & Corporate Structuring Advisor",
      experience: "16+ Years GCC Government Advisor",
      desc: "Specializes in design of multi-jurisdictional holding SPVs, dual-registry structures, and complete UAE corporate tax exemption shielding protocols under OECD indexes.",
      avatarText: "TA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      badge: "Founder & Equity Partner",
      specialty: "Holding SPVs & OECD Compliance"
    },
    {
      name: "Elena Rostova",
      role: "Chief Client Liaison Officer",
      experience: "Ex-European Foreign Arbitrage Legalist",
      desc: "Architects compliant asset shielding bridges for European, North American, and East Asian founders relocating wealth or setting up remote virtual structures in the GCC.",
      avatarText: "ER",
      image: "https://images.unsplash.com/photo-1573496359142-b8d85734a5a2?q=80&w=400&auto=format&fit=crop",
      badge: "International Advisory Head",
      specialty: "Cross-border Asset Shielding"
    },
    {
      name: "Zayn Al-Sayegh",
      role: "Director of Banking & Treasury Relations",
      experience: "Ex-VP Wealth Strategist, HSBC Middle East",
      desc: "Coordinates direct fast-track compliance reviews with global and local UAE financial institutions, securing high-tier multi-currency bank gates.",
      avatarText: "ZS",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      badge: "VIP Banking Strategist",
      specialty: "High-Net-Worth VIP Banking Gateway"
    },
    {
      name: "Faisal Al-Suwaidi",
      role: "Director of Government PRO & Ministries Liaison",
      experience: "Former Senior Officer, Ministerial Registry",
      desc: "Maintains direct administrative coordination channels with the Ministry of Economy, Dubai Economy (DET), and official Free Zone registrars.",
      avatarText: "FS",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      badge: "Senior Government Liaison",
      specialty: "DET & GDRFA Fast-track clearances"
    }
  ];

  return (
    <section id="leadership_team" className="py-20 bg-[#07140B] font-sans text-left border-b border-zinc-900 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[400px] bg-[radial-gradient(circle_at_top_left,rgba(18,183,106,0.04),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[400px] bg-[radial-gradient(circle_at_bottom_right,rgba(18,183,106,0.03),transparent_50%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-1.5 bg-[#12B76A]/10 text-emerald-400 px-3.5 py-1.5 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-[#12B76A]/20">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>LICENSED LEGAL COUNSEL</span>
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-serif font-semibold text-white tracking-tight leading-snug">
              Meet Our Leadership Team
            </h2>
            <p className="text-[14px] text-zinc-400 leading-relaxed font-light font-sans">
              The senior GCC legal, banking, and strategic government advisors supervising every corporate license structure we coordinate.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-4.5 rounded-2xl flex items-center space-x-2.5 max-w-sm">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-[11px] text-zinc-350 leading-relaxed font-sans font-light">
              <strong>Official Credentials:</strong> Every senior advisor holds active GCC registry certifications or registered paralegal authority.
            </p>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/10 p-6 rounded-[28px] hover:shadow-[0_30px_60px_rgba(18,183,106,0.08)] hover:border-emerald-500/40 hover:from-white/[0.06] hover:to-white/[0.02] hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-5">
                
                {/* Premium Corporate Real Advisor Portrait */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md relative border border-white/15 group-hover:border-emerald-500/30 transition-all duration-500">
                  <Image 
                    src={leader.image} 
                    alt={leader.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top filter grayscale contrast-[1.05] brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white rounded-lg px-2.5 py-1 text-[9px] font-mono tracking-wider font-semibold z-10 border border-white/10">
                    {leader.avatarText} SECURE ADVISOR
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <span className="inline-block text-[9px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold uppercase">
                    {leader.badge}
                  </span>
                  <h3 className="text-[17px] font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-[11.5px] text-emerald-400 font-medium leading-tight font-sans">
                    {leader.role}
                  </p>
                  <p className="text-[10px] text-zinc-450 font-mono leading-none">
                    {leader.experience}
                  </p>
                </div>

                <p className="text-[12.5px] text-zinc-300 leading-relaxed font-sans line-clamp-4 text-left font-light">
                  {leader.desc}
                </p>

              </div>

              {/* Specialty & Links block */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-4 text-left relative z-10">
                <div className="space-y-1">
                  <span className="text-[8px] uppercase tracking-wider font-mono text-zinc-500 block">Strategic Focus</span>
                  <strong className="text-[11px] font-medium text-zinc-200 block font-sans">
                    {leader.specialty}
                  </strong>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 px-3.5 bg-white/5 hover:bg-emerald-500/20 hover:text-white rounded-xl border border-white/10 hover:border-emerald-500/30 text-zinc-300 transition-all duration-300 inline-flex items-center space-x-1.5 font-sans text-[10px] font-medium cursor-pointer">
                    <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Profile</span>
                  </button>
                  <button className="p-2 px-3.5 bg-white/5 hover:bg-emerald-500/20 hover:text-white rounded-xl border border-white/10 hover:border-emerald-500/30 text-zinc-300 transition-all duration-300 inline-flex items-center space-x-1.5 font-sans text-[10px] font-medium cursor-pointer">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>

              {/* Elegant Watermark Number */}
              <div className="absolute bottom-4 right-4 text-[72px] font-serif font-extrabold text-white/[0.01] group-hover:text-emerald-500/[0.03] transition-all duration-500 select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

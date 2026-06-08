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
    <section id="leadership_team" className="py-16 bg-white font-sans text-left border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-500 px-3 py-1 bg-zinc-50 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-gold-500/10">
              <Award className="w-3.5 h-3.5 text-gold-500" />
              <span>LICENSED LEGAL COUNSEL</span>
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-sans font-light text-zinc-900 tracking-tight leading-snug">
              Meet Our Leadership Team
            </h2>
            <p className="text-[14px] text-zinc-500">
              The senior GCC legal, banking, and strategic government advisors supervising every corporate license structure we coordinate.
            </p>
          </div>
          
          <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex items-center space-x-2.5 max-w-sm">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-[11px] text-zinc-650 leading-tight">
              <strong>Official Credentials:</strong> Every senior advisor holds active GCC registry certifications or registered paralegal authority.
            </p>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200 rounded-2xl p-5 sm:p-6 hover:shadow-[0_20px_50px_rgba(18,183,106,0.05)] hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Premium Corporate Real Advisor Portrait */}
                <div className="w-full h-56 rounded-xl overflow-hidden shadow-sm relative border border-zinc-200/60">
                  <Image 
                    src={leader.image} 
                    alt={leader.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white rounded-lg px-2.5 py-1 text-[10px] font-mono tracking-wider font-semibold z-10">
                    {leader.avatarText} SECURE ADVISOR
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9.5px] font-mono tracking-widest text-emerald-600 font-bold uppercase block">
                    {leader.badge}
                  </span>
                  <h3 className="text-[15.5px] font-bold text-zinc-900 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-[11.5px] text-gold-500 font-medium leading-tight">
                    {leader.role}
                  </p>
                  <p className="text-[10px] text-zinc-400 font-mono leading-none">
                    {leader.experience}
                  </p>
                </div>

                <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans line-clamp-4">
                  {leader.desc}
                </p>

              </div>

              {/* Specialty & Links block */}
              <div className="mt-6 pt-4 border-t border-zinc-100 space-y-3.5">
                <div className="space-y-1">
                  <span className="text-[8px] uppercase tracking-wider font-mono text-zinc-400 block">Strategic Focus</span>
                  <strong className="text-[11px] font-medium text-zinc-700 block">
                    {leader.specialty}
                  </strong>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-1 px-2.5 bg-zinc-50 hover:bg-zinc-100 rounded-lg border border-zinc-200 text-zinc-400 hover:text-zinc-700 transition-colors inline-flex items-center space-x-1 font-sans text-[10px] font-medium">
                    <Linkedin className="w-3 h-3 text-gold-500/80" />
                    <span>Profile</span>
                  </button>
                  <button className="p-1 px-2.5 bg-zinc-50 hover:bg-zinc-100 rounded-lg border border-zinc-200 text-zinc-400 hover:text-gold-500 transition-colors inline-flex items-center space-x-1 font-sans text-[10px] font-medium">
                    <Mail className="w-3 h-3" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

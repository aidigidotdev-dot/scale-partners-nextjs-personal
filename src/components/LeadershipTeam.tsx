import { Linkedin, Mail, ShieldAlert, Award } from 'lucide-react';
import Image from 'next/image';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Selim James Ellouze",
      role: "Partner & Chief Growth Officer at Four Roads Group",
      experience: "20+ Years UAE, Europe & North Africa",
      avatarText: "SJE",
      image: "/assets/selim-james-ellouze.jpeg",
      badge: "Partner & Chief Growth Officer",
      specialty: "Strategic Growth, Partnerships & Investment"
    },
    {
      name: "Iqbal Hussain",
      role: "Group CEO",
      experience: "Executive Leadership",
      avatarText: "IH",
      image: "/assets/iqbal-hussain.png",
      badge: "Group CEO",
      specialty: "Executive Strategy & Group Leadership"
    },
    {
      name: "Khizer Abbas",
      role: "Founder and Managing Director",
      experience: "Founder Leadership",
      avatarText: "KA",
      image: "/assets/khizer-abbas.jpg",
      badge: "Founder & Managing Director",
      specialty: "Company Formation & Operations Leadership"
    },
    {
      name: "S. Mohana Kumar",
      role: "Partner AML and Compliance",
      experience: "AML & Compliance Partner",
      avatarText: "SMK",
      image: "/assets/s-mohana-kumar.jpg",
      badge: "Partner AML & Compliance",
      specialty: "AML, Due Diligence & Compliance Controls"
    }
  ];

  return (
    <section id="leadership_team" className="home-page-section py-20 bg-[#07140B] font-sans text-left border-b border-zinc-900 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[400px] bg-[radial-gradient(circle_at_top_left,rgba(18,183,106,0.04),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[400px] bg-[radial-gradient(circle_at_bottom_right,rgba(18,183,106,0.03),transparent_50%)] pointer-events-none z-0"></div>

      <div className="home-wide-container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        
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
            <p className="text-[11px] text-white leading-relaxed font-sans font-light">
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

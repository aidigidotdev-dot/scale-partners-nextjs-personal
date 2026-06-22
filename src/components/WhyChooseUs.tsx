import { useRef } from 'react';
import { Shield, Sparkles, Zap, MapPin, Users, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WhyChooseUs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector('div');
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // space-x-6 is 24px
        const scrollAmount = cardWidth + gap;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const points = [
    {
      icon: Zap,
      title: "4-Hour Fast Track Licensing",
      desc: "Our direct API integration with the Dubai Department of Economy and Tourism (DET) bypasses traditional agency lines, allowing us to deliver certified corporate licenses in absolute record time.",
      benefit: "Saves up to 5 business days of manual queues"
    },
    {
      icon: Shield,
      title: "Global Tax & Asset Shielding",
      desc: "Every corporate setup is pre-audited against the latest 2026 OECD tax indices and local UAE corporate tax regulations, completely shielding your international passive holdings & profits.",
      benefit: "Optimized corporate asset governance protection"
    },
    {
      icon: MapPin,
      title: "Exclusive Registrar Gateways",
      desc: "Special status channels inside prime free zones of Meydan, IFZA, Shams, and DMCC. Lock in lower registrar entry fees and obtain priority review with direct submission clearance.",
      benefit: "Guaranteed executive residency visa pathways"
    },
    {
      icon: Users,
      title: "Dedicated Multi-lingual Counsel",
      desc: "Work with single-point-of-contact senior advisors speaking fluent English, Arabic, Russian, French, and Mandarin. No support tickets or generic operators; only direct legal counsel.",
      benefit: "Unlimited executive account coordination"
    }
  ];

  return (
    <section id="why_choose_scale_partners" className="home-page-section relative py-16 bg-white border-t border-b border-zinc-100 font-sans">
      <div className="home-wide-container max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-12">
        
        {/* Editorial Heading & Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="inline-flex items-center space-x-1.5 bg-gold-400/10 text-gold-650 px-3 py-1 rounded-full border border-gold-300/20 font-mono text-[9.5px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>EXECUTIVE ADVISORY STANDARDS</span>
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-sans font-light text-zinc-900 tracking-tight leading-snug">
              Why global founders choose <span className="text-gold-500 font-medium">Scale Partners</span>
            </h2>
            <p className="text-[14px] text-zinc-500 font-sans leading-relaxed">
              We operate beyond standard agency registrations. We architect custom, fully tax-optimized holding structures and high-speed UAE corporate vehicles tailored to protect international equity.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center space-x-2.5 shrink-0 self-start md:self-end">
            <button 
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-650 hover:bg-white hover:text-gold-500 hover:border-gold-500/30 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-650 hover:bg-white hover:text-gold-500 hover:border-gold-500/30 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Multi-Column Corporate Value Slider */}
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
        >
          {points.map((pt, idx) => {
            const IconComponent = pt.icon;
            return (
              <div 
                key={idx} 
                className="w-[290px] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-[0_22px_60px_rgba(0,0,0,0.06)] hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between group snap-start"
              >
                <div className="space-y-4">
                  {/* Icon Block */}
                  <div className="p-3 bg-white border border-zinc-200 text-gold-500 rounded-xl inline-block group-hover:bg-gold-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-bold text-zinc-900 tracking-tight">
                      {pt.title}
                    </h3>
                    <p className="text-[13px] text-zinc-500 leading-relaxed font-sans">
                      {pt.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-200/55 flex items-center space-x-2 text-[12px] font-medium text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{pt.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Elegant Bottom CTA Callout */}
        <div className="mt-12 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
            style={{ backgroundImage: `url('/assets/invoice_accounting_hands.png')` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-brand-grad opacity-[0.90] z-10 pointer-events-none"></div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none z-10"></div>
          
          <div className="space-y-1 text-center md:text-left relative z-20">
            <span className="text-[10px] tracking-widest font-mono text-emerald-300 uppercase font-semibold">DUBAI TAX & LICENSE COMPLIANCE</span>
            <p className="text-[16px] sm:text-[18px] font-light text-white leading-tight">
              Looking for a custom tax holding architecture?
            </p>
            <p className="text-[12px] text-zinc-200/95 font-light">
              Get an instant strategic recommendation based on your company registration requirements in Dubai.
            </p>
          </div>
          <div className="relative z-20 shrink-0">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-white/10 px-3.5 py-2 rounded-full border border-white/15">
                ● 100% REGULATORY COMPLIANT
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

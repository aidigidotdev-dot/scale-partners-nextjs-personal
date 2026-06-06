"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { PageId } from '../types';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Globe, 
  Scale, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  ChevronRight,
  Shield,
  Award,
  BookOpen
} from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';
import SetupSteps from './SetupSteps';
import LeadershipTeam from './LeadershipTeam';
import RecentBlogs from './RecentBlogs';
import GovernmentDepartments from './GovernmentDepartments';
import OurPodcast from './OurPodcast';

interface HeroSectionProps {
  setPage: (page: PageId) => void;
  openContactModal: () => void;
}

export default function HeroSection({ setPage, openContactModal }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSimulationStep, setActiveSimulationStep] = useState<'freezone' | 'mainland'>('freezone');
  
  // High-Trust Advisory Board profile (For E-E-A-T authority indices)
  const leadAuthor = {
    name: "Advocate Tarik Al-Mehairi",
    title: "Senior Corporate Structuring Advisor",
    signature: "T. Al-Mehairi",
    avatarText: "TM",
    org: "Scale Partners UAE",
    credentials: "LLB (Hons, Dubai) • Author of 'GCC Regulatory Playbook'"
  };

  const trustFactors = [
    { label: "Foreign Ownership", value: "100%", desc: "Direct equity shielding in mainland & free zones" },
    { label: "Licensing Speed SLA", value: "24 Hours", desc: "Digital registrar gateways bypassing queues" },
    { label: "Assets Under Placement", value: "$1.4 Billion+", desc: "Supervising complex merchant configurations" },
    { label: "Residencies Cleared", value: "1,200+", desc: "100% security clear rate on Golden Tracks" },
  ];

  const valueProps = [
    {
      icon: Building2,
      title: "Company Setup & Corporate Architecture",
      desc: "Deploy legal structures optimized for global venture capital, corporate tax safety, and asset shielding across 45+ jurisdictions.",
      link: "setup-freezone" as PageId
    },
    {
      icon: Scale,
      title: "Corporate Tax Strategy & Reporting",
      desc: "Protect operations under the 9% UAE corporate tax frameworks with secure exemptions, VAT clearances, and GAAP bookkeeping.",
      link: "finance-tax" as PageId
    },
    {
      icon: ShieldCheck,
      title: "Golden Visas & Executive Residency",
      desc: "Direct administrative clearance for 10-year Golden Visas, family sponsorships, and local corporate registry status.",
      link: "visa-golden" as PageId
    }
  ];

  // Logos array simulating premium partner authorities
  const partnersLogos = [
    { name: "Meydan Free Zone", tag: "MEYDAN", desc: "Digital Commerce" },
    { name: "IFZA Dubai", tag: "IFZA", desc: "B2B Silicon Oasis" },
    { name: "DMCC JLT", tag: "DMCC", desc: "Commodities & Web3" },
    { name: "Shams Sharjah", tag: "SHAMS", desc: "Media & Agency" },
    { name: "RAKEZ Ras Al Khaimah", tag: "RAKEZ", desc: "Logistics & Plants" },
    { name: "DWTC Zayed Road", tag: "DWTC", desc: "VIP Commerce Hub" },
  ];

  // Interactive 3D constellation simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseSpeed: number;
      pulseFactor: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 48; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseFactor: Math.random() * Math.PI
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital rings in 3D perspective
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(1.5, 0.6); // 3D Perspective tilt
      
      ctx.beginPath();
      ctx.arc(0, 0, 180, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 320, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Render & dynamic link particles
      particles.forEach((p, idx) => {
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse scale
        p.pulseFactor += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulseFactor) * 0.5;

        // Attract lightly to mouse pointer
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 200) {
          p.x += dx * 0.001;
          p.y += dy * 0.001;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        // Clean white glowing particles matching the minimalist layout
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.fill();

        // Connect near particle nodes (Constellation)
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p.x - p2.x;
          const distDy = p.y - p2.y;
          const dist = Math.sqrt(distDx * distDx + distDy * distDy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);  return (
    <div className="relative bg-[#FBFBFD] font-sans">
      
      {/* HERO REGION WITH SOLID GRADIENT BACKGROUND */}
      <div className="relative pt-[110px] pb-16 overflow-hidden bg-brand-grad text-white">
        
        {/* 3D FLOATING CONSTELLATION BACKSTAGE */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full block"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* TOP LEVEL TAGS: Trust Endorsement Indicator */}
          <div className="flex justify-center xl:justify-start">
            <div className="inline-flex items-center space-x-2.5 bg-white/10 text-white border border-white/20 px-4.5 py-1.5 rounded-full shadow-sm mb-6 animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                VERIFIED JURISDICTION DESK • PLATINUM REGISTRY PARTNER
              </span>
            </div>
          </div>

          {/* HERO COPY GRID - Fully optimized for SEO, GEO, AEO queries */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-transparent">
            
            {/* Main Editorial Text Block */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-7">
              
              <h1 className="font-sans text-[38px] sm:text-[52px] lg:text-[60px] font-extralight text-white leading-[1.2] tracking-wide">
                Setup Your Business<br />
                <span className="text-emerald-200 font-light italic">
                  in Dubai in 4 Hours.
                </span>
              </h1>
              
              {/* GEO/AEO Rich Descriptive Abstract targeting prime corporate keywords */}
              <p className="max-w-xl mx-auto xl:mx-0 font-sans text-zinc-100/90 text-[14.5px] sm:text-[16px] leading-[1.7] tracking-wide font-light">
                Scale Partners is the Top Rated Business Setup & Professional Services in Dubai. We design custom-structured <strong className="font-semibold text-white">Dubai Mainland approvals</strong>, secure <strong className="font-bold text-white">exempt Free Zone companies</strong>, and establish high-speed structures. We coordinate directly with official government registrars to remove administrative friction entirely.
              </p>

              {/* HIGH-PREMIUM INTERACTIVE CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero_cta_evaluator_prime"
                  onClick={() => setPage('calculator')}
                  className="w-full sm:w-auto bg-white text-[#0066ff] hover:opacity-95 hover:scale-[1.015] active:scale-95 px-8 py-4 rounded-full font-sans text-[14.5px] font-bold tracking-tight transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 border-0 cursor-pointer shrink-0"
                >
                  <span>Initialize 24h Setup Session</span>
                  <ArrowRight className="w-4 h-4 text-[#0066ff]" />
                </button>
              </div>

              {/* TRUST BADGES & REGULATORY COMPLIANCE SEALS */}
              <div className="pt-6 border-t border-white/10 max-w-xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-300 block mb-3.5 text-center lg:text-left select-none font-bold">Verified Corporate Trust Badges</span>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
                  
                  {/* Badge 1 */}
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl flex items-center space-x-2 shadow-2xs hover:scale-[1.01] transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-[#00d4aa]" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9.5px] font-mono text-zinc-300 uppercase tracking-tight block">DET License Status</span>
                      <strong className="text-[11.5px] font-semibold text-white font-sans tracking-tight block">A+ Rated Registered Agent</strong>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl flex items-center space-x-2 shadow-2xs hover:scale-[1.01] transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#00d4aa]" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9.5px] font-mono text-zinc-300 uppercase tracking-tight block">Corporate Registry</span>
                      <strong className="text-[11.5px] font-semibold text-white font-sans tracking-tight block">MoF Regulatory Cleared</strong>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl flex items-center space-x-2 shadow-2xs hover:scale-[1.01] transition-transform font-sans">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4 text-[#00d4aa]" />
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[9.5px] font-mono text-zinc-300 uppercase tracking-tight block">Direct Encryption</span>
                      <strong className="text-[11.5px] font-semibold text-white font-sans tracking-tight block">SSL Secure & ISO Compliant</strong>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR: HIGHLY INTUITIVE PRESENTATION OF PATHWAYS */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 font-sans text-white text-left">
              
              <div className="relative bg-white/12 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] shadow-white/5 overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl"></div>
                
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                  <span className="font-mono text-[9.5px] text-zinc-150 uppercase tracking-[0.2em] font-bold">
                    OFFICIAL JURISDICTION PORTALS
                  </span>
                </div>

                {/* TWO PRIME JURISDICTION PACKAGES HIGHLIGHTS */}
                <div className="space-y-4">
                  
                  {/* Free Zone Package */}
                  <div className="bg-white/10 border border-white/15 p-4.5 rounded-2xl relative transition-all hover:bg-white/15 hover:border-white/25 shadow-xs">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-300 block">Option 1</span>
                        <h3 className="text-[15.5px] font-bold text-white tracking-wide">Free Zone Enterprise</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] uppercase font-mono text-white/50 block">Fees Starting</span>
                        <strong className="text-[17px] font-semibold text-white font-mono leading-none">AED 12,400*</strong>
                      </div>
                    </div>
                    <p className="text-[11.5px] text-zinc-150 leading-relaxed font-light mb-2.5">
                      Ideal for tech, web3, and professional consultants. Includes up to 3 allocated partner/employment visas and virtual flexi-desk approval.
                    </p>
                    <div className="flex items-center space-x-4 text-[11px] text-zinc-200">
                      <span className="flex items-center gap-1.5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4aa] stroke-[2.25] shrink-0" /> Flexi-desk Approved
                      </span>
                      <span className="flex items-center gap-1.5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4aa] stroke-[2.25] shrink-0" /> 100% Repatriation
                      </span>
                    </div>
                  </div>

                  {/* Mainland Package */}
                  <div className="bg-white/10 border border-white/15 p-4.5 rounded-2xl relative transition-all hover:bg-white/15 hover:border-white/25 shadow-xs">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-300 block">Option 2</span>
                        <h3 className="text-[15.5px] font-bold text-white tracking-wide">Mainland Corporate Setup</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] uppercase font-mono text-white/50 block">Fees Starting</span>
                        <strong className="text-[17px] font-semibold text-white font-mono leading-none">AED 21,900*</strong>
                      </div>
                    </div>
                    <p className="text-[11.5px] text-zinc-150 leading-relaxed font-light mb-2.5">
                      Required for local UAE physical trade and contract bidding. Unlimited team visas and direct Dubai Economy (DET) registry files coverage.
                    </p>
                    <div className="flex items-center space-x-4 text-[11px] text-zinc-200">
                      <span className="flex items-center gap-1.5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4aa] stroke-[2.25] shrink-0" /> Unlimited Licenses
                      </span>
                      <span className="flex items-center gap-1.5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4aa] stroke-[2.25] shrink-0" /> Local Branch Options
                      </span>
                    </div>
                  </div>

                </div>

                {/* DYNAMIC MULTI-YEAR DISCOUNT BANNER */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-[#00d4aa]/10 border border-emerald-400/25 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-inner">
                  <div className="space-y-0.5">
                    <span className="text-[9.5px] font-mono text-emerald-300 uppercase tracking-widest block font-bold">
                      EXCLUSIVE COMPLIANCE BENEFIT
                    </span>
                    <p className="text-[13px] font-semibold text-white leading-tight">
                      15% OFF On Multi-Year Licenses
                    </p>
                  </div>
                  <div className="bg-white text-emerald-700 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm font-mono tracking-tighter shrink-0 select-none">
                    ACTIVE 2026
                  </div>
                </div>

                {/* ENQUIRE NOW BUTTON & RATINGS SUMMARY */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    id="hero_enquire_now_prompt_action"
                    onClick={openContactModal}
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold font-sans text-[13.5px] rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md active:scale-95 cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                  <div className="text-right leading-none space-y-1">
                    <span className="text-[9px] text-white/50 block font-mono font-medium">SOVEREIGN OFFICIAL PORTAL</span>
                    <span className="text-[11px] text-zinc-200 leading-tight block">Approved Dubai Registry Partner</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* LIGHT BODY WRAPPER FOR THE REST OF HOMEPAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 py-12">
          <div className="text-center space-y-1.5">
            <span className="text-[9.5px] font-mono tracking-[0.25em] text-zinc-450 uppercase block font-semibold">
              Sovereign Clearance Integration Portfolio
            </span>
            <p className="text-[11.5px] text-zinc-400 font-sans">
              Scale Partners delivers official registry submissions directly to registered emirates registrars.
            </p>
          </div>

          {/* Sleek, interactive Horizontal brand grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-3">
            {partnersLogos.map((logo, indx) => {
              const matchingPageIds = ['fz-meydan', 'fz-ifza', 'fz-dmcc', 'fz-shams', 'fz-rakez', 'fz-dwtc'];
              return (
                <div
                  key={indx}
                  onClick={() => {
                    setPage(matchingPageIds[indx] as PageId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md hover:scale-[1.01] p-3.5 rounded-xl text-center space-y-1.5 transition-all cursor-pointer group"
                >
                  <span className="text-[10px] font-bold tracking-widest text-zinc-300 group-hover:text-[#0066ff] transition-colors block font-mono">
                    {logo.tag}
                  </span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-zinc-700 group-hover:text-zinc-950 leading-none">
                      {logo.name.split(' ')[0]} Free Zone
                    </h5>
                    <span className="text-[8.5px] text-zinc-400 uppercase tracking-widest block font-mono mt-0.5">
                      {logo.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      {/* Dynamic Brand-level sections */}
      <WhyChooseUs />
      <SetupSteps />

      {/* MID-HOME GRADIENT COLOR BREAKER BLOCK */}
      <div className="w-full bg-brand-grad py-16 text-white my-16 relative overflow-hidden text-left">
        {/* Constellation Canvas style drift backdrop */}
        <div className="absolute inset-0 bg-black/[0.08] mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center space-x-1.5 bg-white/10 text-emerald-300 px-3 py-1 rounded-full border border-white/10 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span>Sovereign Corporate Security Track</span>
            </span>
            <h2 className="font-sans text-[26px] sm:text-[34px] font-light text-white tracking-wide leading-tight">
              A bespoke approach to protecting global wealth.
            </h2>
            <p className="text-[13px] sm:text-[14px] text-zinc-100/90 max-w-2xl font-light leading-relaxed">
              We design robust holdings, bypass administrative queues, and protect dynamic corporate assets under the 2026 OECD tax framework indices. Maintain complete operational harmony across zones.
            </p>
          </div>

          {/* Statistics Grid embedded beautifully as part of the color breaker */}
          <div id="mid_stats_panel" className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/15">
            {trustFactors.map((factor, index) => (
              <div key={index} className="space-y-1 md:space-y-1.5">
                <div className="text-[34px] md:text-[44px] font-sans font-extralight text-white tracking-wide leading-none">
                  {factor.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
                  {factor.label}
                </div>
                <p className="text-[11.5px] text-zinc-100/90 leading-tight font-light">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Lead Advisory Profile embedded inside the color breaker - Premium High-Contrast Solid White Card */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-xl text-left text-zinc-900 transition-all duration-300 hover:shadow-2xl hover:border-zinc-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-zinc-900 text-white rounded-2xl font-sans font-semibold text-[16px] flex items-center justify-center border border-zinc-950 shrink-0">
                  {leadAuthor.avatarText}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#0066ff] font-bold block tracking-wider leading-none">
                    Verified Coordinating Author & Senior Legal Reviewer
                  </span>
                  <h4 className="text-[17px] font-bold text-zinc-900 leading-none">{leadAuthor.name}</h4>
                  <p className="text-[12.5px] text-zinc-500 font-sans font-light leading-normal">{leadAuthor.credentials}</p>
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2 text-[12.5px] self-start sm:self-center font-mono text-zinc-650">
                <span className="text-zinc-400 mr-2">Authorized Org:</span>
                <strong className="text-zinc-800 font-semibold">{leadAuthor.org}</strong>
              </div>
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-zinc-700 leading-relaxed italic border-l-2 border-[#0066ff] pl-4 font-light">
              "Every legal structure compiled by Scale Partners is manually audited against Dubai Economy and Tourism regulations and updated 2026 OECD tax indices. We ensure your corporate assets remain shielded from local risks, ensuring complete operational holding harmony."
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-zinc-150 text-[11.5px] text-zinc-500 font-light">
              <span className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-[#0066ff]" />
                <span>Full compliance standing with GCC Ministries of Economy</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4 text-[#0066ff]" />
                <span>Publisher of official UAE regulatory setup whitepapers</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Re-open main container for the rest of homepage elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 py-12">

        {/* SECTION 5.5: EXQUISITE GOOGLE REVIEWS SHOWCASE */}
        <div className="pt-16 border-t border-zinc-200/80 space-y-8 bg-transparent">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#0066ff] font-bold block">
                Corporate Reputation & Compliance Standing
              </span>
              <h3 className="font-sans text-[26px] sm:text-[32px] font-light text-zinc-900 tracking-wide leading-none">
                4.9/5 on Google Business Specialist Indexes
              </h3>
              <p className="text-[13px] text-zinc-500 font-sans">
                Review verified corporate setups, direct DET registry files, and strategic tax exemption clearances.
              </p>
            </div>
            
            {/* Aggregate Google rating summary with icon */}
            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl flex items-center space-x-3 self-center md:self-end">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-left font-sans">
                <span className="text-[12.5px] font-bold text-zinc-800 block leading-tight">184 Verified Reviews</span>
                <span className="text-[10px] text-zinc-400 block font-mono">GOOGLE VERIFIED SPECIALIST</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus Vance",
                role: "Managing Director, NexusFlow software holding",
                review: "Scale Partners handled our entire DET mainland licensing structure and tax registration. Handled in under 24 hours without a single office visit. Clean, transparent corporate setups at its pinnacle.",
                rating: 5,
                date: "2 days ago",
                avatar: "MV"
              },
              {
                name: "Amara Al-Suwaidi",
                role: "Founder, Oryx Luxury Trading",
                review: "Absolute class. The cost estimator was exactly aligned with the real registry fee breakdown. They fast-tracked our corporate account with Wio and set up our virtual desk smoothly.",
                rating: 5,
                date: "1 week ago",
                avatar: "AA"
              },
              {
                name: "Dr. Robert Chen",
                role: "Chief Compliance Officer, BioGen UAE",
                review: "Setting up biotech holding branches is complex, but senior advisor advocate Tarik Al-Mehairi managed the complete ministerial registrations. Flawless 10-year Golden Visa tracking.",
                rating: 5,
                date: "3 weeks ago",
                avatar: "RC"
              }
            ].map((rev, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 p-5 rounded-2xl space-y-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-zinc-350 transition-all font-sans relative">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-700 text-[13px] border border-zinc-200">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-bold text-zinc-900">{rev.name}</h4>
                      <p className="text-[10px] text-zinc-500 leading-tight">{rev.role}</p>
                    </div>
                  </div>
                  
                  {/* Google Icon */}
                  <svg className="w-4 h-4 opacity-70 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                
                <div className="flex space-x-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[10px] text-zinc-400 font-mono ml-2 font-medium">{rev.date}</span>
                </div>
                
                <p className="text-[12.5px] text-zinc-600 leading-relaxed italic">
                  "{rev.review}"
                </p>
                
                <div className="text-[9.5px] font-mono font-bold text-emerald-600 flex items-center space-x-1 uppercase tracking-wide bg-emerald-50/50 py-1 px-2.5 rounded-lg border border-emerald-100/30 self-start inline-block">
                  <span>✓ Verified Setup Entry</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: HIGH-AESTHETIC CORE SERVICES BLOCK */}
        <div className="pt-8 space-y-12">
          
          <div className="text-center space-y-2.5 max-w-xl mx-auto">
            <span className="text-[10.5px] uppercase font-mono tracking-[0.25em] text-zinc-500 font-bold block">
              Strategic Jurisdictional Arbitrage
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-sans font-light text-zinc-900 tracking-wide leading-snug">
              Bespoke legal channels built to defend asset value.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div 
                  key={idx} 
                  id={`feature_bento_item_${idx}`}
                  className="bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-gold-300/20 transition-all duration-300 flex flex-col justify-between hover:scale-[1.01]"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-red-400/5 text-gold-600 rounded-xl inline-block">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-zinc-900 tracking-tight">
                      {prop.title}
                    </h3>
                    <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans">
                      {prop.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setPage(prop.link);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-6 text-[12.5px] font-semibold text-gold-600 hover:text-gold-700 flex items-center space-x-1 transition-colors group self-start"
                  >
                    <span>Analyze Compliant Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Dynamic Leadership, Registries, Media, and Educational sections */}
      <LeadershipTeam />
      <GovernmentDepartments />
      <OurPodcast />
      <RecentBlogs />

    </div>
  );
}

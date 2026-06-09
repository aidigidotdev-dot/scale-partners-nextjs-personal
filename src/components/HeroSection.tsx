"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import Image from 'next/image';
import { PageId } from '../types';
import { 
  Building2, 
  ArrowRight, 
  Globe, 
  Scale, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  ChevronRight,
  ChevronLeft,
  FileText,
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
  const [activeSimulationStep, setActiveSimulationStep] = useState<'freezone' | 'mainland'>('freezone');
  
  // High-Trust Advisory Board profile (For trust indices)
  const leadAuthor = {
    name: "Advocate Tarik Al-Mehairi",
    title: "Senior Corporate Structuring Advisor",
    signature: "T. Al-Mehairi",
    avatarText: "TM",
    org: "Scale Partners UAE",
    credentials: "LLB (Hons, Dubai) • Author of 'GCC Regulatory Playbook'"
  };

  const trustFactors = [
    { label: "Structures Processed", value: "AED 8B+", desc: "AED 8B+ Corporate Structures Processed" },
    { label: "Companies Registered", value: "30,000+", desc: "30,000+ Companies Registered in the UAE" },
    { label: "Free Zones Supported", value: "45+", desc: "45+ Free Zones Supported nationwide" },
    { label: "Operating Experience", value: "12+ Years", desc: "12+ Years Operating with 100% UAE Focus" },
  ];

  const divisionsScrollRef = useRef<HTMLDivElement>(null);

  const handleDivisionsScroll = (direction: 'left' | 'right') => {
    if (divisionsScrollRef.current) {
      const container = divisionsScrollRef.current;
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

  const divisions = [
    {
      title: "Business Setup & Company Formation",
      icon: Building2,
      pageId: 'setup-freezone' as PageId,
      bullets: [
        "Mainland & Free Zone Setup",
        "Name Reservation",
        "Trade License Processing",
        "Government Liaison",
        "24-Hour Fast Track"
      ],
      cta: "Explore Setup Solutions"
    },
    {
      title: "Trade Licensing & Activity Structuring",
      icon: FileText,
      pageId: 'lic-ecommerce' as PageId,
      bullets: [
        "Activity Mapping & Optimization",
        "E-Commerce & Trading Licenses",
        "Holding Company Structures",
        "DET Portal Coordination",
        "Compliance Fine Mitigation"
      ],
      cta: "Explore License Types"
    },
    {
      title: "Corporate Tax Strategy & GAAP Accounting",
      icon: Scale,
      pageId: 'finance-tax' as PageId,
      bullets: [
        "9% Corporate Tax Mitigation",
        "TRN Registration & VAT Filing",
        "GAAP/IFRS Compliant Ledgers",
        "Shielding Assets from Penalties",
        "Annual Audit Supervision"
      ],
      cta: "Explore Tax & Accounting"
    },
    {
      title: "VIP Corporate Bank Account Opening",
      icon: Lock,
      pageId: 'finance-banking' as PageId,
      bullets: [
        "Pre-Approved Bank Pipelines",
        "VIP Fast-Track KYC Queues",
        "Multi-Currency IBAN Accounts",
        "Merchant Gateways Integration",
        "Zero Friction Onboarding"
      ],
      cta: "Explore Banking Solutions"
    }
  ];

  // Mainland Registry Authorities
  const mainlandLogos = [
    { name: "Dubai DED", src: "/assets/imgi_103_dubai-ded.jpg" },
    { name: "Abu Dhabi DED", src: "/assets/imgi_104_abu-dhabi-ded.jpg" },
    { name: "Sharjah DED", src: "/assets/imgi_107_sharjah-ded.jpg" },
    { name: "UAQ DED", src: "/assets/imgi_108_uaq-ded.jpg" },
    { name: "Fujairah DED", src: "/assets/imgi_105_fujairah-ded.jpg" },
    { name: "RAK Govt", src: "/assets/imgi_106_rak-govt.jpg" }
  ];

  // Free Zone Registry Authorities
  const freeZoneLogos = [
    { name: "Meydan", src: "/assets/imgi_29_Meydan.webp" },
    { name: "IFZA", src: "/assets/imgi_44_IFZA.webp" },
    { name: "DMCC", src: "/assets/imgi_96_dmcc-fz.jpg" },
    { name: "DIFC", src: "/assets/imgi_38_DIFC.webp" },
    { name: "ADGM", src: "/assets/imgi_34_ADGM.webp" },
    { name: "DAFZ", src: "/assets/imgi_37_DAFZ.webp" },
    { name: "JAFZA", src: "/assets/imgi_45_JAFZA.webp" },
    { name: "DSO", src: "/assets/imgi_40_Dubai-silicon.webp" },
    { name: "DWTC", src: "/assets/imgi_42_DWTC.webp" },
    { name: "Shams", src: "/assets/imgi_32_SHAMS.webp" },
    { name: "RAKEZ", src: "/assets/imgi_30_RAKEZ.webp" },
    { name: "SRTIP", src: "/assets/imgi_33_SRTIP.webp" },
    { name: "SAIF", src: "/assets/imgi_31_SAIF.webp" }
  ];



  return (
    <div className="relative bg-white font-sans">
      
      {/* HERO REGION WITH VIDEO BACKGROUND */}
      <div className="relative pt-[110px] pb-16 overflow-hidden text-white bg-[#07140B]">
        
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/assets/dubai_skyline.mp4" type="video/mp4" />
        </video>

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07140B]/90 to-[#0B2E16]/70 z-10 pointer-events-none" />
        


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          
          {/* TOP LEVEL TAGS: Trust Endorsement Indicator */}
          <div className="flex justify-center lg:justify-start">
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
                Scale Smarter.<br />
                <span className="text-emerald-400 font-light">
                  Grow Faster.
                </span>
              </h1>
              
              {/* GEO/AEO Rich Descriptive Abstract targeting prime corporate keywords */}
              <p className="max-w-xl mx-auto lg:mx-0 font-sans text-zinc-100/90 text-[14.5px] sm:text-[16px] leading-[1.7] tracking-wide font-light">
                The UAE entry point for global founders, Scale Partners is the <strong className="font-semibold text-emerald-400">safest path into the UAE</strong>. We design secure, compliant corporate structures, protect your assets under the 9% corporate tax framework, and manage your entire mainland or free zone licensing process with absolute risk mitigation.
              </p>

              {/* Premium Trust Badges Grid (Sovereign Trust Indicators) */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4 max-w-2xl mx-auto lg:mx-0">
                {/* Row 1: Key Trust Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-zinc-200 border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-light">AED 8B+ Processed</span>
                  </div>
                  <div className="hidden sm:block text-white/20">|</div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-light">30,000+ Companies</span>
                  </div>
                  <div className="hidden sm:block text-white/20">|</div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-light">12+ Years Operating</span>
                  </div>
                </div>

                {/* Row 2: Setup Portfolios */}
                <div className="grid grid-cols-3 gap-4 text-left">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">Free Zone</h4>
                      <p className="text-[10px] text-zinc-400 font-sans leading-normal">100% Ownership</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">Mainland</h4>
                      <p className="text-[10px] text-zinc-400 font-sans leading-normal">Trade Anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white leading-tight">Offshore</h4>
                      <p className="text-[10px] text-zinc-400 font-sans leading-normal">Global Structuring</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HIGH-PREMIUM INTERACTIVE CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero_cta_evaluator_prime"
                  onClick={() => setPage('calculator')}
                  className="w-full sm:w-auto bg-white text-gold-700 hover:opacity-95 hover:scale-[1.015] active:scale-95 px-8 py-4 rounded-full font-sans text-[14.5px] font-bold tracking-tight transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 border-0 cursor-pointer shrink-0"
                >
                  <span>Initialize 24h Setup Session</span>
                  <ArrowRight className="w-4 h-4 text-gold-500" />
                </button>
              </div>

              {/* Reviews & Credibility Bar (GCC and Global Platforms) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-4 gap-x-8 pt-6 border-t border-white/10 max-w-2xl mx-auto lg:mx-0">
                {/* Google Reviews */}
                <div className="flex items-center space-x-3 text-left">
                  <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <div>
                    <h5 className="text-[12.5px] font-bold text-white leading-none">3,000+ Reviews</h5>
                    <div className="flex items-center space-x-1.5 mt-1">
                      <span className="text-[10px] text-zinc-400 font-mono leading-none">4.8/5 Rating</span>
                      <div className="flex -space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block text-white/10 h-8 w-px self-center"></div>

                {/* Trustpilot-style Rating */}
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-5.5 h-5.5 bg-[#00B67A] rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-[12.5px] font-bold text-white leading-none">600+ Reviews</h5>
                    <div className="flex items-center space-x-1.5 mt-1">
                      <span className="text-[10px] text-zinc-400 font-mono leading-none">4.9/5 Rating</span>
                      <div className="flex -space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-2.5 h-2.5 text-[#00B67A] fill-[#00B67A]" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block text-white/10 h-8 w-px self-center"></div>

                {/* Third Rating */}
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-5.5 h-5.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-[12.5px] font-bold text-white leading-none">500+ Reviews</h5>
                    <div className="flex items-center space-x-1.5 mt-1">
                      <span className="text-[10px] text-zinc-400 font-mono leading-none">4.7/5 Rating</span>
                      <div className="flex -space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
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
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] stroke-[2.25] shrink-0" /> Flexi-desk Approved
                      </span>
                      <span className="flex items-center gap-1.5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] stroke-[2.25] shrink-0" /> 100% Repatriation
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
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] stroke-[2.25] shrink-0" /> Unlimited Licenses
                      </span>
                      <span className="flex items-center gap-1.5 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] stroke-[2.25] shrink-0" /> Local Branch Options
                      </span>
                    </div>
                  </div>

                </div>

                {/* DYNAMIC MULTI-YEAR DISCOUNT BANNER */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-[#22C55E]/10 border border-emerald-400/25 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-inner">
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

        {/* SECTION 6: HIGH-AESTHETIC CORE SERVICES BLOCK */}
        <div className="pt-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3 text-left max-w-2xl">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-[#08854C] px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-mono text-[10px] font-bold uppercase tracking-wider">
                <span>Strategic Jurisdictional Arbitrage</span>
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-serif font-semibold text-zinc-900 tracking-tight leading-tight">
                End-to-End Business Setup Services in Dubai
              </h2>
              <p className="text-[14px] sm:text-[15px] text-zinc-500 font-sans">
                Dedicated divisions to structure, register, protect, and finance your business operations in the UAE.
              </p>
            </div>

            {/* Slider controls */}
            <div className="flex items-center space-x-2.5 shrink-0 self-start md:self-end">
              <button 
                onClick={() => handleDivisionsScroll('left')}
                className="p-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-white hover:text-emerald-500 hover:border-emerald-500/30 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleDivisionsScroll('right')}
                className="p-3 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-white hover:text-emerald-500 hover:border-emerald-500/30 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core Corporate Divisions Slider Row */}
          <div 
            ref={divisionsScrollRef}
            className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
          >
            {divisions.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx} 
                  className="w-[290px] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 bg-zinc-50/70 border border-zinc-200/60 p-6 sm:p-8 rounded-2xl hover:bg-white hover:shadow-[0_20px_50px_rgba(18,183,106,0.04)] hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between group snap-start space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zinc-200/50">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#08854C] flex items-center justify-center border border-emerald-500/15">
                        <Icon className="w-5 h-5 text-[#08854C]" />
                      </div>
                      <h3 className="text-[16.5px] font-bold text-zinc-900 tracking-tight font-sans text-left">
                        {sec.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2.5 text-[13px] text-zinc-650 leading-relaxed font-sans text-left">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2">
                          <span className="text-emerald-500 font-bold shrink-0">✔</span>
                          <span className="text-zinc-700 font-light">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* BANKING LOGOS GRID INSIDE CARD 4 */}
                    {sec.title === "VIP Corporate Bank Account Opening" && (
                      <div className="mt-4 pt-4 border-t border-zinc-200/50 space-y-2">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block text-left">Pre-Integrated Banking Partners:</span>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { name: 'Wio', src: '/assets/imgi_65_WIO.png' },
                            { name: 'ENBD', src: '/assets/imgi_115_enbd-logo.jpg' },
                            { name: 'Mashreq', src: '/assets/imgi_111_mashreq-logo.jpg' },
                            { name: 'FAB', src: '/assets/imgi_116_fab-bank-logo.jpg' },
                            { name: 'ADIB', src: '/assets/imgi_112_adib-logo-1.jpg' },
                            { name: 'RAK-BANK', src: '/assets/imgi_114_rak-bank-logo.jpg' },
                            { name: 'Emirates-islamic', src: '/assets/imgi_113_emirates-islamic-logo.jpg' },
                            { name: 'HSBC', src: '/assets/imgi_117_hsbc-logo.jpg' }
                          ].map((bank) => (
                            <div key={bank.name} className="h-8 bg-white border border-zinc-150 rounded-lg flex items-center justify-center p-1.5 hover:border-emerald-500/20 transition-all shadow-3xs">
                              <img 
                                src={bank.src} 
                                alt={bank.name} 
                                className="h-full w-full object-contain transition-all duration-300" 
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setPage(sec.pageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center space-x-1.5 text-[13px] font-semibold text-emerald-600 hover:text-emerald-700 font-sans self-start cursor-pointer border-0 bg-transparent p-0"
                  >
                    <span>{sec.cta}</span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* LICENSING AUTHORITIES LOGO MARQUEE */}
          <div className="pt-10 border-t border-zinc-150 space-y-6">
            <div className="text-center space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#08854C] font-bold block">
                Authorized Mainland Registry Departments
              </span>
              <p className="text-[11.5px] text-zinc-400 font-sans">
                Scale Partners integrates official mainland company formations directly with prime UAE Department of Economic Development (DED) branches.
              </p>
            </div>

            {/* Auto-scroll marquee for mainland authorities */}
            <div className="w-full overflow-hidden relative py-4 select-none">
              <div className="flex animate-marquee gap-4 items-center">
                {[...mainlandLogos, ...mainlandLogos].map((logo, indx) => (
                  <div 
                    key={indx} 
                    className="h-20 w-[180px] shrink-0 relative flex items-center justify-center transition-all"
                  >
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      fill
                      sizes="180px"
                      className="object-contain transition-all duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* SECTION: EXQUISITE GOOGLE REVIEWS SHOWCASE */}
        <div className="space-y-8 bg-transparent">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] uppercase font-mono tracking-wider text-gold-500 font-bold block">
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
              <div key={idx} className="bg-white border border-zinc-200/80 p-5 rounded-2xl space-y-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-zinc-350 transition-all font-sans relative text-left">
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
                
                <p className="text-[12.5px] text-zinc-650 leading-relaxed italic font-sans">
                  "{rev.review}"
                </p>
                
                <div className="text-[9.5px] font-mono font-bold text-emerald-600 flex items-center space-x-1 uppercase tracking-wide bg-emerald-50/50 py-1 px-2.5 rounded-lg border border-emerald-100/30 self-start inline-block">
                  <span>✓ Verified Setup Entry</span>
                </div>
              </div>
            ))}
          </div>
                {/* Sovereign Free Zone Registry Partners */}
        <div className="pt-16 border-t border-zinc-200/80 space-y-6 overflow-hidden">
          <div className="text-center space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#08854C] font-bold block">
              Authorized Free Zone Registry Partners
            </span>
            <p className="text-[11.5px] text-zinc-400 font-sans">
              Scale Partners integrates official company setups directly with prime UAE Free Zone registrar departments.
            </p>
          </div>

          {/* Auto-scroll marquee for free zone authorities */}
          <div className="w-full overflow-hidden relative py-4 select-none">
            <div className="flex animate-marquee gap-4 items-center">
              {[...freeZoneLogos, ...freeZoneLogos].map((logo, indx) => {
                const pageIdMapping: Record<string, string> = {
                  Meydan: 'fz-meydan',
                  IFZA: 'fz-ifza',
                  DMCC: 'fz-dmcc',
                  DIFC: 'fz-dwtc',
                  ADGM: 'fz-dwtc',
                  DAFZ: 'fz-dwtc',
                  JAFZA: 'fz-dwtc',
                  DSO: 'fz-dwtc',
                  DWTC: 'fz-dwtc',
                  Shams: 'fz-shams',
                  RAKEZ: 'fz-rakez',
                  SRTIP: 'fz-shams',
                  SAIF: 'fz-shams'
                };
                const targetPage = pageIdMapping[logo.name] || 'setup-freezone';

                return (
                  <div 
                    key={indx} 
                    onClick={() => {
                      setPage(targetPage as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="h-20 w-[180px] shrink-0 relative flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                  >
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      fill
                      sizes="180px"
                      className="object-contain transition-all duration-300" 
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>  </div>
      </div>

      <WhyChooseUs />
      <SetupSteps />
      {/* SECTION: ACCOUNTING & TAX SERVICES FOR NEW BUSINESSES IN DUBAI */}
      <section className="py-20 border-t border-zinc-100 bg-white font-sans text-left relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-[#08854C] px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-mono text-[10px] font-bold uppercase tracking-wider">
                <span>Statutory Fiscal Shield</span>
              </span>
              <h2 className="font-serif text-[30px] sm:text-[38px] font-semibold text-zinc-900 tracking-tight leading-tight">
                Accounting & Tax Services for New Businesses in Dubai
              </h2>
              
              <div className="space-y-4 text-[14.5px] text-zinc-550 leading-relaxed font-sans font-light">
                <p>
                  Operating a corporate entity in the UAE requires strict adherence to the federal 9% Corporate Tax framework and standard 5% VAT filing rules. Our chartered accountants build and maintain IFRS-compliant ledger systems tailored specifically to protect your business margins.
                </p>
                <p>
                  From securing your Tax Registration Number (TRN) to preparing quarterly audit bundles and navigating transfer pricing documentation, we coordinate directly with the Federal Tax Authority (FTA) so you avoid unexpected administrative compliance fines.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setPage('finance-tax');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-xl font-sans text-[13.5px] font-bold tracking-tight transition-all duration-300 shadow-md border-0 cursor-pointer"
                >
                  <span>Optimize Tax Structure</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Card */}
            <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl border border-zinc-800">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
              <div className="text-[10px] tracking-widest uppercase font-mono text-emerald-400 font-bold">FTA Compliance Checklist</div>
              <h3 className="font-serif text-[18px] text-white">Sovereign Audit Prevention Matrix</h3>
              
              <div className="space-y-4 border-t border-white/10 pt-4 text-[12.5px] text-zinc-300">
                {[
                  "Dual-ledger IFRS accounting audits by licensed chartered agents",
                  "9% Corporate Tax registration & strategic exemption filing",
                  "Standard 5% VAT ledger auditing and quarterly return logs",
                  "Transfer pricing alignment preventing retrospective audits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#12B76A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: VIP CORPORATE BANK ACCOUNT OPENING SECTION */}
      <section className="py-20 border-t border-zinc-100 bg-zinc-50/40 font-sans text-left relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Colored Bank Logos Grid */}
            <div className="lg:col-span-5 space-y-4 order-last lg:order-first">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">Pre-Approved Banking Partners:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Wio Bank", src: "/assets/imgi_65_WIO.png" },
                  { name: "Emirates NBD", src: "/assets/imgi_115_enbd-logo.jpg" },
                  { name: "Mashreq Bank", src: "/assets/imgi_111_mashreq-logo.jpg" },
                  { name: "First Abu Dhabi Bank", src: "/assets/imgi_116_fab-bank-logo.jpg" },
                  { name: "Abu Dhabi Islamic Bank", src: "/assets/imgi_112_adib-logo-1.jpg" },
                  { name: "RAK BANK", src: "/assets/imgi_114_rak-bank-logo.jpg" },
                  { name: "Emirates Islamic", src: "/assets/imgi_113_emirates-islamic-logo.jpg" },
                  { name: "HSBC Bank", src: "/assets/imgi_117_hsbc-logo.jpg" },
                  { name: "Euro Pacific Bank", src: "/assets/imgi_118_euro-pacific-logo.jpg" }
                ].map((bank, idx) => (
                  <div key={idx} className="h-16 bg-white border border-zinc-200/80 rounded-2xl flex items-center justify-center p-3 shadow-3xs hover:shadow-2xs transition-all hover:border-emerald-500/20">
                    <div className="relative w-full h-full">
                      <Image 
                        src={bank.src} 
                        alt={bank.name} 
                        fill
                        sizes="(max-width: 768px) 50vw, 15vw"
                        className="object-contain" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-[#08854C] px-3.5 py-1.5 rounded-full border border-emerald-500/20 font-mono text-[10px] font-bold uppercase tracking-wider">
                <span>AML Priority Corridors</span>
              </span>
              <h2 className="font-serif text-[30px] sm:text-[38px] font-semibold text-zinc-900 tracking-tight leading-tight">
                VIP Corporate Bank Account Opening Section
              </h2>
              
              <div className="space-y-4 text-[14.5px] text-zinc-550 leading-relaxed font-sans font-light">
                <p>
                  Securing active multi-currency banking is critical for international trade, payment processing, and treasury management. We provide direct pre-approved pipelines to top UAE banking institutions including Emirates NBD, Mashreq, and digital-first gateways like Wio Business.
                </p>
                <p>
                  Our banking relations team guides you through the complex corporate AML and KYC screening queues, verifying your shareholder dossier before submission. This guarantees your business secures active corporate IBANs with zero administrative friction.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setPage('finance-banking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-xl font-sans text-[13.5px] font-bold tracking-tight transition-all duration-300 shadow-md border-0 cursor-pointer"
                >
                  <span>Explore Banking Corridors</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MID-HOME GRADIENT COLOR BREAKER BLOCK (SOVEREIGN VISA & RESIDENCE SERVICES) */}
      <div className="w-full bg-breaker-parallax-section py-16 text-white my-16 relative overflow-hidden text-left z-20">
        {/* Constellation Canvas style drift backdrop */}
        <div className="absolute inset-0 bg-black/[0.08] mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center space-x-1.5 bg-white/10 text-emerald-300 px-3 py-1 rounded-full border border-white/10 font-mono text-[10px] font-bold uppercase tracking-wider">
              <span>VIP Residency & Residence Channels</span>
            </span>
            <h2 className="font-sans text-[26px] sm:text-[34px] font-light text-white tracking-wide leading-tight">
              Sovereign Visa & 10-Year Golden Visa Pathways
            </h2>
            <p className="text-[13px] sm:text-[14px] text-zinc-100/90 max-w-2xl font-light leading-relaxed">
              We coordinate directly with federal immigration authorities to process your residency documents, family sponsorships, and executive Golden Visas. Bypass standard queues with complete legal compliance.
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
                  <span className="text-[10px] font-mono uppercase text-gold-500 font-bold block tracking-wider leading-none">
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

            <p className="text-[13.5px] sm:text-[14px] text-zinc-700 leading-relaxed italic border-l-2 border-gold-500 pl-4 font-light">
              "Every residency and golden visa dossier is pre-audited against GDRFA and ICP regulatory frameworks. We ensure all personal and investor structures are fully aligned with immigration protocols, enabling zero-friction residency stamping."
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-zinc-200/60 text-[11.5px] text-zinc-500 font-light">
              <span className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-gold-500" />
                <span>Full compliance standing with GCC Ministries of Economy</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4 text-gold-500" />
                <span>Publisher of official UAE residency compliance guidelines</span>
              </span>
            </div>
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

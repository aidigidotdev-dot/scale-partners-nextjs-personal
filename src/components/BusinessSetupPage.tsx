"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import Image from 'next/image';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  ShieldAlert, 
  Compass, 
  FileText, 
  Briefcase, 
  Percent, 
  Coins, 
  BookOpen, 
  Building,
  Award,
  Share2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import FreeZoneNavigator from './FreeZoneNavigator';
import { motion } from 'motion/react';

interface BusinessSetupPageProps {
  type: 'mainland' | 'freezone' | 'offshore';
  setPage: (page: PageId) => void;
  openContactModal: () => void;
  onSelectFreeZone?: (freeZoneName: string, estimatedCost: number) => void;
}

export default function BusinessSetupPage({ type, setPage, openContactModal, onSelectFreeZone }: BusinessSetupPageProps) {
  
  const expertMap = {
    mainland: {
      name: "Advocate Tarik Al-Mehairi",
      role: "Senior Corporate Structuring Specialist",
      credentials: "LLB (Hons, Dubai), Al-Karimi Corporate Associate",
      experience: "14+ Years in DIFC & DET Mainland setups",
      bio: "Tarik translates complex UAE corporate laws into secure growth architectures. He has advised over 650 multinational founders entering Dubai, Sharjah, & Jebel Ali trade hubs.",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      avatarText: "TM"
    },
    freezone: {
      name: "Elena Rostova",
      role: "Free Zone Setup Lead Advisor",
      credentials: "M.B.A. (Finance), Lead Onboarding Desk",
      experience: "9+ Years in Free Zone Licensing & Visas",
      bio: "Elena streamlines company setup and visa processing in Dubai's premium Free Zones, coordinating directly with registry officers to bypass traditional delays.",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      avatarText: "ER"
    },
    offshore: {
      name: "Zayn Shah",
      role: "VIP Secretarial & Banking Specialist",
      credentials: "B.Sc. (Banking & Corporate Finance)",
      experience: "8+ Years in VIP Corporate Banking & PRO Services",
      bio: "Zayn Shah coordinates high-end introductions with premier UAE corporate banks, managing document notarization, labor quotas, and direct state clearing.",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      avatarText: "ZS"
    }
  };
  const currentExpert = expertMap[type];

  const contentMap = {
    mainland: {
      tag: "Direct Market Supremacy",
      title: "Mainland Corporate Registration",
      subtitle: "Trade inside and outside the UAE with no geographic limits. Fully aligned with the Department of Economy and Tourism (DET).",
      image1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      image1Label: "COORDINATING MAINLAND ADVISOR",
      image1Heading: "Advocate Tarik Al-Mehairi, DET Registry Advisor",
      image1Desc: "Licensed directly next to the administrative offices of the Department of Economy and Tourism, granting immediate regional market access.",
      image2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
      image2Label: "REGIONAL WHOLESALE IMPORT EXPORT LOGISTICS",
      image2Heading: "Continuous Mainland Trade & Warehousing Network",
      image2Desc: "Allows direct commercialization with both UAE custom mainland and global B2B/B2C layers under unlimited physical visa sponsorship.",
      benefits: [
        { title: "No Tech Barriers or Limits", desc: "Allows direct commercialization with both UAE custom mainland and global B2B/B2C layers." },
        { title: "100% Foreign Ownership", desc: "No local Emirati nominee requirements for the vast majority of commercial and service licenses." },
        { title: "Unlimited Visas Sponsorship", desc: "Visa volume is purely linked to physical office square meters (9 sqm per visa ratio)." },
        { title: "Govt Bidding Access", desc: "Direct eligibility to bid on lucrative public sector local, municipal, or federal tenders." }
      ],
      preRequisites: [
        "Select physical or virtual office lease (Estidama support included)",
        "Minimum 1 designated general manager or executive director",
        "Verification of unique trade name with DET registers"
      ],
      steps: [
        { step: "01", title: "Activity Classification", desc: "Identify exact commercial, industrial, or professional registries." },
        { step: "02", title: "Trade Name Reservation", desc: "Submit 3 distinct naming proposals to the DET portal." },
        { step: "03", title: "Initial Approval & MOA", desc: "Drafting the Memorandums of Association with Scale legal clearing desk." },
        { step: "04", title: "Licensing & Office Lease", desc: "Affixing physical spot leases or virtual desk approvals to unlock operation." }
      ]
    },
    freezone: {
      tag: "Sovereign Customs Exclusion",
      title: "Free Zone Corporate Hubs",
      subtitle: "Optimize corporate assets with physical setups placed inside specialized UAE tax-free business enclosures.",
      image1: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
      image1Label: "FREE ZONE ADVISORY PLANNERS",
      image1Heading: "Elena Rostova, Free Zone Setup Lead Advisor",
      image1Desc: "Accelerate institutional growth inside JLT Commodities, Meydan SaaS, or IFZA holding grids with premium zero-duty coordinates.",
      image2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
      image2Label: "GLOBAL COMMODITIES & CAPITAL REPATRIATIONS",
      image2Heading: "Immediate Central Multi-Currency Bank Introductions",
      image2Desc: "Deploy capital yields directly to holdco vaults and corporate relationship relationship desks, fully shielded from arbitrary audit holds.",
      benefits: [
        { title: "Specialized Sector Hubs", desc: "Deploy inside DMCC (Commodities), Meydan (Tech/AI), or DAFZA (Airport/Logistics) networks." },
        { title: "100% Customs Exemption", desc: "Zero import-export duties specifically within free zone customs gates." },
        { title: "Immediate Capital Repatriation", desc: "Zero controls on global capital moving back to holdcos or founder banks." },
        { title: "Accelerated Digitized Setup", desc: "Remote setups with no physical medical clearances required on immediate launch." }
      ],
      preRequisites: [
        "Determine the specific Free Zone authority matching your sector focus",
        "Choose flexi-desk or dedicated shared physical desk space",
        "Clearance under the designated Free Zone registry rules"
      ],
      steps: [
        { step: "01", title: "Select Free Zone Authority", desc: "We map cost-optimal zones (Meydan, IFZA, or DMCC) based on sectors." },
        { step: "02", title: "Secure Portal Submission", desc: "Digital verification of ultimate beneficial owners and key passports." },
        { step: "03", title: "Registry Board Issuance", desc: "Allocation of corporate charter, share registry certificates, and license." },
        { step: "04", title: "Establishment Card Activations", desc: "Triggering company file to allow visa allocation and sponsor hires." }
      ]
    },
    offshore: {
      tag: "Asset Protection Vehicles",
      title: "Offshore International Corporate vehicles",
      subtitle: "Engineered specifically for asset preservation, holding corporations, global trade, and intellectual property shielding.",
      image1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
      image1Label: "TRUST & WEALTH SHIELDING PLANNERS",
      image1Heading: "Zayn Shah, Strategic International Advisor",
      image1Desc: "Isolate parent holding company litigation liabilities and private family shares behind UAE's most rigorous legal trust walls.",
      image2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
      image2Label: "PRIVATE COUNCILS & INTEROPERABILITY",
      image2Heading: "Double Taxation Asset Preservation Escrow",
      image2Desc: "Protect real-estate deeds, international cash-flow channels, and intellectual property rights under absolute compliance protocols.",
      benefits: [
        { title: "Absolute Shielding & Privacy", desc: "Registry records are non-public, protecting critical founder assets." },
        { title: "Optimized Holding Vectors", desc: "Hold complex real-estate or global equity portfolios safely inside UAE law." },
        { title: "No Local Presence Mandatory", desc: "Zero requirement for physical desks, resident managers, or active physical audits." },
        { title: "Ultra-Fast Deployment", desc: "Establish RAK ICC or JAFZA Offshore structures inside 72 hours." }
      ],
      preRequisites: [
        "A designated registered agent in the UAE (Scale Partners holds active JAFZA & RAK ICC licenses)",
        "Minimum 1 active shareholder and 2 designated director roles",
        "Letter of reference from shareholder's personal bank history"
      ],
      steps: [
        { step: "01", title: "Corporate Charter Draft", desc: "Structuring Articles of Association configured for secure holding control." },
        { step: "02", title: "Agent Asset Registration", desc: "Scale Partners mounts the application through our exclusive fast-track desk." },
        { step: "03", title: "Registry Board Approval", desc: "Issuance of non-resident certificate of incorporation." },
        { step: "04", title: "Global Accounts Interoperability", desc: "Assisting setup of non-resident corporate banking lines." }
      ]
    }
  };

  const current = contentMap[type];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="pt-[115px] pb-24 bg-white min-h-screen font-sans relative overflow-hidden"
    >
      {/* SOFT AMBIENT BRAND GREEN GLOWS FOR ULTRA-PREMIUM VIBES */}
      <div className="absolute top-0 right-0 w-[55%] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(18,183,106,0.045),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[450px] bg-[radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.03),transparent_45%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Navigation Indicator / Back */}
        <div className="mb-8 relative z-10">
          <button 
            id={`back_btn_${type}`}
            onClick={() => { setPage('home'); window.scrollTo({top:0, behavior: 'smooth'}); }}
            className="text-[12px] font-mono uppercase tracking-wider text-zinc-400 hover:text-gold-600 transition-colors flex items-center space-x-1"
          >
            <span>Overview</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-850 font-semibold">{current.title}</span>
          </button>
        </div>

        {/* Page Heading (Apple Minimal Grid style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-zinc-100 pb-16 mb-16 relative z-10">
          <div className="lg:col-span-7 space-y-4 font-sans">
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] text-gold-600 font-bold block">
              {current.tag}
            </span>
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[54px] font-semibold text-zinc-900 leading-[1.1] tracking-tight">
              {current.title}
            </h1>
            <p className="font-sans text-zinc-500 text-[15.5px] sm:text-[17.5px] leading-relaxed max-w-2xl font-normal">
              {current.subtitle}
            </p>


            {/* Premium Photo 1: Dubai skyline branding image */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md h-[240px] mt-6 relative group z-10 animate-fade-in">
              <Image 
                src={current.image1 || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"} 
                alt={current.title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/95 via-[#08854C]/35 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-[10px] font-mono uppercase tracking-[0.2em] text-white border border-white/10 mb-1.5 shadow-3xs">{current.image1Label}</span>
                <h3 className="font-serif text-[18px] sm:text-[22px] text-white font-medium mt-1 leading-snug">{current.image1Heading}</h3>
                <p className="text-[12px] text-zinc-300 max-w-xl mt-1 font-sans">
                  {current.image1Desc}
                </p>
              </div>
            </div>

            {/* Dynamic Certified Trust Badges Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-b border-zinc-200/60/40 py-6 relative z-10 bg-zinc-50/40 px-6 rounded-2xl mt-6 animate-fade-in_500">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3">
                <div className="p-2 bg-white rounded-lg border border-zinc-200 shrink-0 shadow-2xs text-gold-600">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-900 font-mono uppercase tracking-tight">ISO-905 Registrars</h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Global Setup Compliance</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3">
                <div className="p-2 bg-white rounded-lg border border-zinc-200 shrink-0 shadow-2xs text-gold-600">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-900 font-mono uppercase tracking-tight">DET AEO Stamp</h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Sovereign Authority Approved</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3 col-span-2 md:col-span-1">
                <div className="p-2 bg-white rounded-lg border border-zinc-200 shrink-0 shadow-2xs text-gold-600 mx-auto md:mx-0">
                  <Building className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-900 font-mono uppercase tracking-tight">Authorized Escrows</h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Sovereign Asset Vault Cleared</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Prerequisites for Registry Approval */}
            <div className="bg-gradient-to-br from-zinc-50/70 via-white to-[#22C55E]/5 border border-zinc-200/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22C55E]/5 rounded-full blur-xl"></div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-450 font-semibold relative z-10">
                Prerequisites for Registry Approval
              </div>
              
              <ul className="space-y-3.5 relative z-10 font-sans">
                {current.preRequisites.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[13px] text-zinc-650 leading-snug bg-white/60 p-2.5 rounded-lg border border-zinc-100/50">
                     <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                     <span>{req}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-zinc-200/60/80 flex flex-wrap gap-3.5 relative z-10">
                <button
                  id={`calc_btn_pre_${type}`}
                  onClick={() => setPage('calculator')}
                  className="bg-brand-grad text-white text-[13px] font-bold px-5 py-3 rounded-xl flex items-center space-x-1.5 transition-all shadow-sm border-0 hover:scale-[1.015] cursor-pointer"
                >
                  <span>Calculate Setup Fees</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-350" />
                </button>
                <button
                  id={`consult_btn_pre_${type}`}
                  onClick={openContactModal}
                  className="bg-white border border-zinc-200 text-zinc-800 text-[13px] font-semibold px-5 py-3 rounded-xl hover:bg-zinc-50 transition-colors shadow-2xs cursor-pointer"
                >
                  <span>Request Strategic Consultation</span>
                </button>
              </div>
            </div>

            {/* 2. Expert Reviewer (Author) Card */}
            <div className="bg-white rounded-2xl border border-zinc-150 p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Verified Registry Advisor (Author)</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 font-sans">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-md border border-zinc-200 relative bg-zinc-50">
                    {currentExpert.avatarUrl ? (
                      <Image 
                        src={currentExpert.avatarUrl} 
                        alt={`${currentExpert.name} Portrait`} 
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-grad text-white font-serif font-bold text-[14px] flex items-center justify-center">
                        {currentExpert.avatarText}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-zinc-900 leading-tight">{currentExpert.name}</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5">{currentExpert.role}</p>
                  </div>
                </div>

                <p className="text-[12px] text-zinc-650 leading-relaxed italic border-l-2 border-emerald-600 pl-3.5 font-sans">
                  "{currentExpert.bio}"
                </p>

                <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200/60 grid grid-cols-2 gap-2 text-[11px] text-zinc-550 font-sans">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Credentials</span>
                    <strong className="text-zinc-800 font-medium truncate" title={currentExpert.credentials}>{currentExpert.credentials.split(',')[0]}</strong>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Experience</span>
                    <strong className="text-zinc-800 font-medium">{currentExpert.experience}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Social Share Buttons */}
            <div className="bg-white rounded-2xl border border-zinc-150 p-6 space-y-4 shadow-sm text-left font-sans">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <Share2 className="w-4 h-4 text-emerald-600" />
                <span>Share This Directory</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                    const shareTitle = typeof window !== "undefined" ? document.title : "";
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex flex-col items-center justify-center p-2.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[10px] text-zinc-700 transition-all font-semibold font-sans gap-1 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-600" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
                
                <button
                  onClick={() => {
                    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                    const shareTitle = typeof window !== "undefined" ? document.title : "";
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex flex-col items-center justify-center p-2.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[10px] text-zinc-700 transition-all font-semibold font-sans gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-zinc-600" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X (Twitter)</span>
                </button>
                
                <button
                  onClick={() => {
                    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                    const shareTitle = typeof window !== "undefined" ? document.title : "";
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " - " + shareUrl)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex flex-col items-center justify-center p-2.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[10px] text-zinc-700 transition-all font-semibold font-sans gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-zinc-600" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.738-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.06 1.953 12.01 1.953c-5.438 0-9.864 4.372-9.868 9.8-.001 1.724.463 3.411 1.343 4.908L2.484 20.3l3.163-.83.003-.001z"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* 4. Contact Details & Address Card */}
            <div className="bg-white rounded-2xl border border-zinc-150 p-6 space-y-4 shadow-sm text-left font-sans">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Registry Location Info</span>
              </div>
              
              <div className="space-y-3 font-sans text-[12.5px] text-zinc-650">
                <div className="flex items-start space-x-2.5">
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0 mt-0.5 animate-pulse">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-zinc-400 block font-bold">Headquarters</span>
                    <a 
                      href="https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-900 font-semibold hover:text-emerald-600 transition-colors leading-relaxed"
                    >
                      1703, Conrad Tower,<br />
                      World Trade Center, Dubai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2.5">
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-zinc-400 block font-bold">Direct Line</span>
                    <a href="tel:+97143607999" className="text-zinc-900 font-bold hover:text-emerald-600 transition-colors">
                      04-360-7999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-zinc-400 block font-bold">Email Desk</span>
                    <a href="mailto:info@fourroadsgroup.com" className="text-zinc-900 font-semibold hover:text-emerald-600 transition-colors">
                      info@fourroadsgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Pre-approved Corporate Trust Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-t border-b border-zinc-100 py-6 relative z-10 bg-zinc-50/40 px-6 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">Sovereign Registry</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Licensed DET & Free-Zone Agent</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">OECD Dual-Compliant</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Dual-layer holding structure protection</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">Direct Bank Desk</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Fast-track priority IBAN allocation</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">ISO 9001 Counsel</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Accredited management standards</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid - BEAUTIFULLY SHADED WRAPPER */}
        <div className="bg-gradient-to-br from-[#fafaf8] via-zinc-50/35 to-white border border-zinc-200/60 p-6 sm:p-10 rounded-2xl relative overflow-hidden mb-20 shadow-xs z-10">
          <div className="absolute top-5 right-5 w-36 h-36 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 mb-10 relative z-10 animate-fade-in_500">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-bold block">Structural Virtues</span>
            <h2 className="text-[24px] sm:text-[28px] font-serif font-semibold text-zinc-900 tracking-tight">
              Operational Perks & Capital Protections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4.5 relative z-10">
            {current.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white hover:bg-zinc-50/50 p-5 rounded-xl border border-zinc-100 shadow-2xs hover:shadow-xs transition-all hover:scale-[1.01] space-y-3">
                <span className="text-[11px] font-mono tracking-wider text-gold-600 font-bold uppercase block">0{idx + 1}</span>
                <h3 className="text-[15px] font-semibold text-zinc-900 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Image 3: Corporate Client Council Meeting */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md h-[280px] relative group z-10 animate-fade-in">
          <Image 
            src={current.image2 || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"}
            alt={current.title + " Operations HQ"}
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/95 via-[#08854C]/35 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-[10px] font-mono uppercase tracking-[0.2em] text-white border border-white/10 mb-1.5 shadow-3xs">{current.image2Label}</span>
            <h3 className="font-serif text-[20px] sm:text-[24px] text-white font-medium mt-1 leading-snug">{current.image2Heading}</h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-300 max-w-xl mt-1 font-sans">
              {current.image2Desc}
            </p>
          </div>
        </div>

        {/* Setup Milestones */}
        <div className="bg-gradient-to-tr from-[#0C2E1A] via-[#12B76A] to-[#22C55E] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden mb-20 shadow-lg border-0">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]"></div>
          
          <div className="max-w-xl space-y-4 mb-12 relative z-10">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-white/90 font-bold">The Standard Deployment Timeline</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold text-white tracking-tight">
              How We Streamline Your Application.
            </h2>
            <p className="text-white/85 text-[13.5px] leading-relaxed">
              We eliminated bureaucratic queues. Scale Partners delegates specialized task units to carry your license folder directly through state registration systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {current.steps.map((item, idx) => (
              <div key={idx} className="space-y-3 border-l border-white/30 pl-6 relative">
                <div className="text-[12px] font-mono tracking-widest text-white/90 font-bold mb-2">
                  STAGE {item.step}
                </div>
                <h3 className="text-[15.5px] font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-[12.5px] text-emerald-100/95 leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FREE ZONE INTEGRATED NAVIGATOR & STRATEGY RECO (Option to Choose, comparison table, activity details, disclaimers) */}
        {type === 'freezone' && (
          <div className="mb-20">
            <FreeZoneNavigator 
              onSelectFreeZone={onSelectFreeZone || ((name) => console.log(name))}
              openContactModal={openContactModal}
            />
          </div>
        )}

        {/* JURISDICTIONS COMPARE PANEL - BEAUTIFULLY COMPRESSED & SHADED */}
        <div className="border border-[#22C55E]/25 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#22C55E]/5 via-[#fefdfb]/80 to-zinc-50/45 shadow-xs relative overflow-hidden z-10 font-sans">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#22C55E]/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="text-center max-w-xl mx-auto space-y-3 mb-10 relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold block">Comparing Structural Vectors</span>
            <h2 className="font-serif text-[22px] sm:text-[26px] font-semibold text-zinc-900 tracking-tight">
              Select the Ideal Jurisdiction Alignment
            </h2>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full min-w-[750px] text-left border-collapse bg-white/70 backdrop-blur-xs rounded-xl overflow-hidden border border-zinc-200/60/45 font-sans">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/60 font-mono text-[10.5px]">
                  <th className="py-4.5 px-4 uppercase text-zinc-450 w-1/4 select-none">Criterion</th>
                  <th className="py-4.5 px-4 font-semibold text-zinc-850 w-1/4">Mainland (DET)</th>
                  <th className="py-4.5 px-4 font-semibold text-zinc-850 w-1/4">Free Zone Hubs</th>
                  <th className="py-4.5 px-4 font-semibold text-zinc-850 w-1/4">Offshore Holdcos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100/80">
                <tr className="hover:bg-zinc-50/35 transition-all text-[12.5px]">
                  <td className="py-4 px-4 font-medium text-zinc-550">Corporate Ownership</td>
                  <td className="py-4 px-4 text-zinc-800 font-semibold text-emerald-600">100% Expatriate Owned</td>
                  <td className="py-4 px-4 text-zinc-800 font-semibold text-emerald-600">100% Expatriate Owned</td>
                  <td className="py-4 px-4 text-zinc-800 font-semibold text-emerald-600">100% Expatriate Owned</td>
                </tr>
                <tr className="hover:bg-zinc-50/35 transition-all text-[12.5px]">
                  <td className="py-4 px-4 font-medium text-zinc-550">Geographic Trade Freedom</td>
                  <td className="py-4 px-4 text-zinc-800 font-semibold">Unlimited (Local & Global)</td>
                  <td className="py-4 px-4 text-zinc-700">Zone Borders & Global only</td>
                  <td className="py-4 px-4 text-zinc-700">Global & holding layers only</td>
                </tr>
                <tr className="hover:bg-zinc-50/35 transition-all text-[12.5px]">
                  <td className="py-4 px-4 font-medium text-zinc-550">Physical Office Need</td>
                  <td className="py-4 px-4 text-zinc-800 font-semibold">Mandatory (or Approved Virtual)</td>
                  <td className="py-4 px-4 text-zinc-700">Optional (Desks permitted)</td>
                  <td className="py-4 px-4 text-zinc-700">Forbidden (Agent care only)</td>
                </tr>
                <tr className="hover:bg-zinc-50/35 transition-all text-[12.5px]">
                  <td className="py-4 px-4 font-medium text-zinc-550">Immigration Visas volume</td>
                  <td className="py-4 px-4 text-zinc-800">Linked strictly to physical space</td>
                  <td className="py-4 px-4 text-zinc-700">Pre-allocated (1 to 6 visas limit)</td>
                  <td className="py-4 px-4 text-zinc-650">Zero Visa Sponsorship</td>
                </tr>
                <tr className="hover:bg-zinc-50/35 transition-all text-[12.5px]">
                  <td className="py-4 px-4 font-medium text-zinc-550">Audit Requirements</td>
                  <td className="py-4 px-4 text-zinc-800">Mandatory under Corporate Law</td>
                  <td className="py-4 px-4 text-zinc-700">Varies (Authoritative laws check)</td>
                  <td className="py-4 px-4 text-zinc-650">Non-mandatory registry files</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

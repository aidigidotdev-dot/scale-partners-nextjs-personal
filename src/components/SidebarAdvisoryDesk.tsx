"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Share2, 
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useQuote } from "./QuoteProvider";

export type ExpertType = "tarik" | "elena" | "zayn" | "amina_mansoor" | "amina_haddad";

interface SidebarAdvisoryDeskProps {
  expert: ExpertType;
}

interface ExpertDetails {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  avatarUrl: string;
  avatarText: string;
}

const EXPERT_DATA: Record<ExpertType, ExpertDetails> = {
  tarik: {
    name: "Advocate Tarik Al-Mehairi",
    role: "Senior Corporate Structuring Specialist",
    credentials: "LLB (Hons, Dubai), Al-Karimi Corporate Associate",
    experience: "14+ Years in DIFC & DET Mainland setups",
    bio: "Tarik translates complex UAE corporate laws into secure growth architectures. He has advised over 650 multinational founders entering Dubai, Sharjah, & Jebel Ali trade hubs.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    avatarText: "TM"
  },
  elena: {
    name: "Elena Rostova",
    role: "Free Zone Setup Lead Advisor",
    credentials: "M.B.A. (Finance), Lead Onboarding Desk",
    experience: "9+ Years in Free Zone Licensing & Visas",
    bio: "Elena streamlines company setup and visa processing in Dubai's premium Free Zones, coordinating directly with registry officers to bypass traditional delays.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    avatarText: "ER"
  },
  zayn: {
    name: "Zayn Shah",
    role: "VIP Secretarial & Banking Specialist",
    credentials: "B.Sc. (Banking & Corporate Finance)",
    experience: "8+ Years in VIP Corporate Banking & PRO Services",
    bio: "Zayn Shah coordinates high-end introductions with premier UAE corporate banks, managing document notarization, labor quotas, and direct state clearing.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    avatarText: "ZS"
  },
  amina_mansoor: {
    name: "Amina Al-Mansoor",
    role: "Senior Associate, Sovereign Registry Advisory Desk",
    credentials: "LL.M. (Corporate Law), Sovereign Registry Desk",
    experience: "10+ Years in UAE Corporate Formations",
    bio: "Amina Al-Mansoor specializes in regulatory licensing protocols, Mainland DET setups, and resolving complex compliance and structuring challenges.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    avatarText: "AM"
  },
  amina_haddad: {
    name: "Amina Al-Haddad",
    role: "Director of Regulatory Licensing",
    credentials: "MSc (Int'l Finance & Laws, London)",
    experience: "11+ Years liaising with free zone registrars",
    bio: "Amina coordinates instant electronic setups across Northern Free Zones and resolves complex compliance, capital clearances, and corporate holding configurations.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    avatarText: "AH"
  }
};

export default function SidebarAdvisoryDesk({ expert }: SidebarAdvisoryDeskProps) {
  const currentExpert = EXPERT_DATA[expert] || EXPERT_DATA.tarik;
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");
  const { openBlankModal } = useQuote();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
      setShareTitle(document.title || "Scale Partners Corporate Advisory");
    }
  }, []);

  const handleShare = (platform: "linkedin" | "twitter" | "whatsapp") => {
    let url = "";
    switch (platform) {
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " - " + shareUrl)}`;
        break;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-zinc-50 border-t border-b border-zinc-200/80 py-16 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title for the entire block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-zinc-200 gap-4">
          <div className="space-y-1 text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#08854C] font-bold block">
              PORTAL REGISTRY & COMPLIANCE DESK
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] font-medium text-zinc-900 leading-tight">
              Scale Partners Onboarding & Expert Advisory
            </h2>
          </div>
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full text-[11px] text-[#08854C] font-sans font-medium self-start md:self-auto shadow-3xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Active Registered Consultant Assigned</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Expert Advisor Profile (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-zinc-150 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Verified Registry Advisor (Author)</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-md border border-zinc-200 relative bg-zinc-50">
                    <Image 
                      src={currentExpert.avatarUrl} 
                      alt={`${currentExpert.name} Portrait`} 
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-zinc-900 leading-tight">{currentExpert.name}</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5">{currentExpert.role}</p>
                  </div>
                </div>

                <p className="text-[12px] text-zinc-650 leading-relaxed italic border-l-2 border-emerald-600 pl-3.5">
                  "{currentExpert.bio}"
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-zinc-550 font-sans mt-6">
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Credentials</span>
                <strong className="text-zinc-800 font-medium truncate" title={currentExpert.credentials}>{currentExpert.credentials.split(',')[0]}</strong>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Experience</span>
                <strong className="text-zinc-800 font-medium">{currentExpert.experience}</strong>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Status</span>
                <strong className="text-[#08854C] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#08854C] rounded-full animate-ping"></span>
                  <span>Registered</span>
                </strong>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Advisory Desk (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-zinc-150 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Direct Advisory Desk</span>
              </div>

              <div className="space-y-3 font-sans text-[12.5px] text-zinc-650">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[9.5px] uppercase font-mono text-zinc-400">Landline Channel</span>
                    <a href="tel:+97143607999" className="text-zinc-900 font-bold hover:text-emerald-600 transition-colors">
                      04-360-7999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[9.5px] uppercase font-mono text-zinc-400">WhatsApp Advisor</span>
                    <a 
                      href="https://wa.me/97143607999" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-900 font-bold hover:text-emerald-600 transition-colors"
                    >
                      +971 4 360 7999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[9.5px] uppercase font-mono text-zinc-400">Email Registry Inbox</span>
                    <a href="mailto:info@fourroadsgroup.com" className="text-zinc-900 font-semibold hover:text-emerald-600 transition-colors">
                      info@fourroadsgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-3.5 border-t border-zinc-100 text-[12px] mt-4">
              <MapPin className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9.5px] uppercase font-mono text-zinc-400">Corporate Headquarters</span>
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
          </div>

          {/* Column 3: Share Directory & Action (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-zinc-150 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <Share2 className="w-4 h-4 text-emerald-600" />
                <span>Share This Directory</span>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleShare("linkedin")}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[12px] text-zinc-700 transition-all font-semibold font-sans"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-600 shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Share on LinkedIn</span>
                </button>

                <button
                  onClick={() => handleShare("twitter")}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[12px] text-zinc-700 transition-all font-semibold font-sans"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-600 shrink-0" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Share on X (Twitter)</span>
                </button>

                <button
                  onClick={() => handleShare("whatsapp")}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[12px] text-zinc-700 transition-all font-semibold font-sans"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-600 shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.738-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.06 1.953 12.01 1.953c-5.438 0-9.864 4.372-9.868 9.8-.001 1.724.463 3.411 1.343 4.908L2.484 20.3l3.163-.83.003-.001z"/>
                  </svg>
                  <span>Share on WhatsApp</span>
                </button>
              </div>
            </div>

            <button
              onClick={openBlankModal}
              className="w-full py-3 bg-brand-grad hover:scale-[1.01] active:scale-95 text-white rounded-xl text-[13.5px] font-bold tracking-tight transition-all flex items-center justify-center space-x-1.5 shadow-md border-0 cursor-pointer mt-4"
            >
              <span>Initialize 24h Setup Session</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

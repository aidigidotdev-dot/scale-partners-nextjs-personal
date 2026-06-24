"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Script from "next/script";
import {
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Sparkles, 
  FileText,
  X,
  ShieldAlert
} from "lucide-react";
import { CostBreakdown } from "../types";
import { sendLeadEmail } from "../lib/leadEmail";

interface ContactFormProps {
  preloadedQuote?: CostBreakdown;
  preloadedSelections?: {
    jurisdiction: string;
    activity: string;
    visas: number;
    office: string;
  };
  onClose?: () => void;
}

export default function ContactForm({ preloadedQuote, preloadedSelections, onClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("Technology & Professional Services");
  const [otherSector, setOtherSector] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fullName = name.trim();
  const nameParts = fullName.split(/\s+/).filter(Boolean);
  const crmFirstName = nameParts[0] || "";
  const crmLastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : nameParts[0] || "";

  const setupPath = [
    {
      step: "01",
      title: "Share details",
      text: "Contact, sector, notes.",
      meta: "2 min"
    },
    {
      step: "02",
      title: "Advisor assigned",
      text: "Matched to your setup type.",
      meta: "<15 min"
    },
    {
      step: "03",
      title: "Plan confirmed",
      text: "Route, documents, next move.",
      meta: "24h"
    }
  ];

  const handleSubmit = (e: FormEvent) => {
    if (!consent) {
      e.preventDefault();
      setShowConsentError(true);
      return;
    }
    setShowConsentError(false);
    if (!name || !email || !phone) {
      e.preventDefault();
      return;
    }

    void sendLeadEmail({
      source: preloadedQuote && preloadedSelections ? "Configured Quote Callback Form" : "Contact Callback Form",
      name,
      email,
      phone,
      message: notes,
      fields: {
        Sector: sector,
        Jurisdiction: preloadedSelections?.jurisdiction,
        Activity: preloadedSelections?.activity,
        Visas: preloadedSelections?.visas,
        Office: preloadedSelections?.office,
        EstimatedTotal: preloadedQuote?.total ? `AED ${preloadedQuote.total.toLocaleString()}` : undefined,
      },
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-sp-mintBg relative overflow-hidden text-left font-sans">
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=cbb7d74af16ca230373bb799ddef24925c24a16b4432eefb5b0db46783ca010efa41c5dcebf71d9d67b29217ccec22ffgidb26d5c1186a08fea5061d2fe384767e3569a99866201478a00be28d09e79c452gid8b4f15aafc00f9e2cdba3db53ca7cec459c408f3d84db796e2e75d4546c6f0f9gidd41bebc36940686d375d40be77e78aa080d4e6414c369daa776652cb141583d5&tw=0ac1bcc3a48c6247fd64cbf9f7562559d26ae51378b0d1a30e05bdc3a522aed4"
        strategy="afterInteractive"
      />
      {isSubmitted ? (
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Success Info (Left Side) */}
          <div id="contact_success_block" className="w-full md:w-[58%] p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-6 animate-fade-in bg-sp-mintBg">
            <div className="w-20 h-20 bg-sp-glass rounded-full flex items-center justify-center text-sp-emerald border border-sp-border shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-[28px] font-semibold text-sp-forest tracking-tight">Setup Session Initialized</h3>
              <p className="text-[14px] text-sp-sage max-w-sm mx-auto font-sans leading-relaxed">
                Your request is in. A senior advisor will contact you within 15 minutes.
              </p>
            </div>
            <div className="w-full max-w-md rounded-2xl border border-sp-border bg-white p-4 text-left shadow-[0_10px_30px_rgba(18,183,106,0.08)]">
              <div className="text-[11px] uppercase tracking-normal text-sp-emerald font-semibold mb-3">
                Next Steps
              </div>
              <div className="space-y-3">
                {setupPath.map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-sp-glass text-sp-emerald text-[10px] font-bold flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-[13px] text-sp-forest font-medium leading-tight">{item.title}</div>
                      <p className="text-[11px] text-sp-sage leading-snug mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-[11.5px] font-mono text-sp-forest flex items-center space-x-1.5 bg-sp-glass border border-sp-border px-4 py-2 rounded-full font-semibold">
                <Clock className="w-4 h-4 text-sp-emerald animate-pulse" />
                <span>Response SLA: &lt; 15 Mins</span>
              </div>
              {onClose && (
                <button 
                  id="contact_success_close"
                  onClick={onClose}
                  className="bg-brand-grad text-white text-[13px] font-bold px-6 py-3.5 rounded-xl transition-all border-0 hover:scale-[1.015] active:scale-95 cursor-pointer shadow-md"
                >
                  Return to Dashboard
                </button>
              )}
            </div>
          </div>

          {/* Right Panel (Hero Graphic) */}
          <div className="relative w-full md:w-[42%] p-8 lg:p-12 text-white flex flex-col justify-between overflow-hidden border-t md:border-t-0 md:border-l border-sp-border">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" 
                alt="Dubai Skyline" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover brightness-[0.5] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E16]/80 via-[#061D0E]/70 to-[#041209]/85 mix-blend-multiply"></div>
            </div>

            {onClose && (
              <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all duration-200 focus:outline-none z-20 cursor-pointer border border-white/5 backdrop-blur-md">
                <X className="w-4 h-4 stroke-[2]" />
              </button>
            )}

            <div className="relative z-10 h-full flex flex-col justify-between space-y-8 flex-grow">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sp-neon font-bold block">
                  REGISTRY PORTAL CONNECTED
                </span>
                <h4 className="font-serif text-[22px] font-semibold text-white leading-snug">
                  Your Dubai Venture Starts Here.
                </h4>
              </div>

              <div className="space-y-4 bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-sp-emerald flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[12px] font-bold text-white block">Official Channel Partners</span>
                    <span className="text-[10.5px] text-zinc-200 block">Direct API interfaces with DET and Free Zones.</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-zinc-300 leading-normal border-t border-white/10 pt-4 text-left">
                Scale Partners Corporate Advisory<br />
                <a href="https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="hover:text-sp-emerald transition-colors font-medium">
                  1703, Conrad Tower,<br />
                  World Trade Center, Dubai
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          
          {/* Main Booking Panel (Left Side) */}
          <div id="contact_main_form" className="w-full md:w-[58%] p-6 lg:p-8 flex flex-col justify-between">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sp-glass border border-sp-border text-[11px] font-medium text-sp-forest">
                <Sparkles className="w-3 h-3 text-sp-emerald" />
                Priority Advisory Desk
              </span>
              <span className="hidden">
                <span className="text-amber-500">★★★★★</span> 4.9/5 TrustScore
              </span>
            </div>

            {/* Header & Subtitle */}
            <div className="mb-4">
              <h1 className="contact-modal-title text-2xl lg:text-3xl text-sp-forest tracking-tight leading-tight mb-2">
                Speak with a <span className="font-semibold text-sp-emerald">Senior Advisor</span>
              </h1>
              <p className="text-[14px] text-sp-sage leading-relaxed font-normal max-w-xl">
                Enter your details. We will call back within 15 minutes.
              </p>
            </div>

            {/* Callback Intake Form */}
            <iframe name="zoho_crm_lead_target" title="Zoho CRM lead submission" className="hidden" />
            <form
              id="webform7452864000000701015"
              name="WebToLeads7452864000000701015"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              method="POST"
              acceptCharset="UTF-8"
              target="zoho_crm_lead_target"
              onSubmit={handleSubmit}
              className="space-y-2.5"
            >
              <input type="hidden" name="xnQsjsdp" value="161079c95565f8d0c2294e3dadb29eb5ef5e551104b178842ac4215ba6a9e22a" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="fabfde2720ed89013401fff0d1c12a689bd63f0ca48bcb7cd91fc028b55d38e3b6fbeca3db07275abfa1038b85e0b8d9" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="null" />
              <input type="hidden" name="First Name" value={crmFirstName} />
              <input type="hidden" name="Last Name" value={crmLastName} />
              <input type="hidden" name="Email" value={email} />
              <input type="hidden" name="Mobile" value={phone} />
              <input type="hidden" name="aG9uZXlwb3Q" value="" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[12px] tracking-normal font-medium text-sp-forest">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Alexander Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-sp-border rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-normal text-sp-forest"
                  />
                </div>
                {/* Contact Email */}
                <div className="space-y-1.5">
                  <label className="block text-[12px] tracking-normal font-medium text-sp-forest">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="alexander@mercerholdings.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-sp-border rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-normal text-sp-forest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Active Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block text-[12px] tracking-normal font-medium text-sp-forest">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-sp-border rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-normal text-sp-forest"
                  />
                </div>
                {/* Sector / Business Nature */}
                <div className="space-y-1.5">
                  <label className="block text-[12px] tracking-normal font-medium text-sp-forest">
                    Business sector
                  </label>
                  <div className="relative">
                    <select 
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-sp-border rounded-xl text-[15px] text-sp-forest focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all appearance-none font-normal"
                    >
                      <option>Technology & Professional Services</option>
                      <option>Finance & Investment</option>
                      <option>Trade & Logistics</option>
                      <option>Real Estate & Development</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-sp-sage">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {sector === "Other" && (
                <div className="space-y-1.5">
                  <label className="block text-[12px] tracking-normal font-medium text-sp-forest">
                    Specify business sector <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Healthcare, education, consulting"
                    value={otherSector}
                    onChange={(e) => setOtherSector(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-sp-border rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-normal text-sp-forest"
                  />
                </div>
              )}

              {/* Operational Notes */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[12px] tracking-normal font-medium text-sp-forest">
                    Notes
                  </label>
                  <span className="text-[11px] text-sp-sage font-medium">Optional</span>
                </div>
                <textarea 
                  rows={2}
                  placeholder="e.g. Establishing a tech-holding structure seeking a 10-Year Golden Visa pathway."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-sp-border rounded-xl text-[15px] placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all resize-none font-normal leading-normal text-sp-forest"
                />
              </div>

              {/* GDPR Legal Consent Checkbox */}
              <div className={`flex items-start space-x-2 pt-1 p-2 rounded-lg transition-all duration-300 ${showConsentError ? 'bg-red-50/85 border border-red-200/50 shadow-sm' : 'border border-transparent'}`}>
                <input 
                  id="gdpr_consent"
                  type="checkbox" 
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (e.target.checked) setShowConsentError(false);
                  }}
                  className={`w-3.5 h-3.5 mt-0.5 rounded cursor-pointer accent-sp-emerald focus:ring-2 ${
                    showConsentError 
                      ? 'border-red-400 text-red-600 focus:ring-red-200' 
                      : 'border-sp-border text-sp-emerald focus:ring-sp-neon/15'
                  }`}
                />
                <label 
                  htmlFor="gdpr_consent" 
                  className={`text-[11px] leading-snug font-sans font-light cursor-pointer select-none transition-colors duration-300 ${
                    showConsentError ? 'text-red-700 font-medium' : 'text-sp-sage'
                  }`}
                >
                  I consent to be contacted and to secure processing of my details. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Premium Gradient Submit Button */}
              <button 
                id="contact_form_submit"
                type="submit"
                disabled={loading}
                className="w-full mt-1.5 py-3 bg-gradient-to-r from-[#0C2E1A] via-[#12B76A] to-[#22C55E] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:opacity-95 hover:shadow-[0_4px_30px_rgba(18,183,106,0.4)] hover:brightness-105 transition-all duration-300 shadow-[0_4px_25px_rgba(18,183,106,0.25)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed border-0"
              >
                {loading ? (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-100">Allocating Partner Director...</span>
                ) : (
                  "Request Call Back"
                )}
              </button>
            </form>
          </div>

          {/* Premium Right Sidebar (Right Side) */}
          <div className="relative w-full md:w-[42%] p-6 lg:p-8 text-white flex flex-col justify-between overflow-hidden border-t md:border-t-0 md:border-l border-sp-border">
            
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" 
                alt="Dubai Downtown" 
                fill 
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover brightness-[0.5] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E16]/80 via-[#061D0E]/70 to-[#041209]/85 mix-blend-multiply"></div>
            </div>

            {onClose && (
              <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all duration-200 focus:outline-none z-20 cursor-pointer border border-white/5 backdrop-blur-md">
                <X className="w-4 h-4 stroke-[2]" />
              </button>
            )}

            {/* Content Container (z-20) */}
            <div className="relative z-10 h-full flex flex-col justify-between space-y-4 flex-grow">
              
              {/* Top Branding Block */}
              <div>
                <p className="text-[9px] tracking-[0.2em] uppercase font-light text-sp-sage mb-0.5">
                  Scale Partners UAE
                </p>
                <h2 className="text-xl font-extralight tracking-tight mb-2">
                  {preloadedQuote && preloadedSelections ? 'Configured Summary' : 'Dubai Launchdesk'}
                </h2>
                
              </div>

              {/* Dynamic Body Content */}
              {preloadedQuote && preloadedSelections ? (
                /* Dynamic quotation details rendered in the premium skyline style */
                <div id="contact_quotation_review" className="space-y-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-sp-emerald font-bold mb-1">
                    <FileText className="w-4 h-4" />
                    <span>Configuration Details</span>
                  </div>

                  <div className="space-y-2.5 text-[12.5px] border-t border-white/10 pt-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-zinc-350 font-light">Jurisdiction</span>
                      <span className="text-white font-medium">{preloadedSelections.jurisdiction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-355 font-light">License Type</span>
                      <span className="text-white font-medium">{preloadedSelections.activity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sp-emerald font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-sp-emerald rounded-full animate-ping"></span>
                        <span>{preloadedSelections.visas} Resident(s)</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-355 font-light">Workspace</span>
                      <span className="text-white font-medium">{preloadedSelections.office}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 flex justify-between items-baseline">
                    <span className="text-[12.5px] font-bold text-zinc-300">Estimated Total</span>
                    <span className="text-[22px] font-mono font-bold text-sp-emerald">AED {preloadedQuote.total.toLocaleString()}</span>
                  </div>
                </div>
              ) : (
                /* Default session flow cards */
                <div className="space-y-2">
                  <p className="text-[12px] tracking-normal font-medium text-sp-sage/85 mb-1.5 text-left">
                    Session Flow
                  </p>

                  <div className="space-y-2">
                    {setupPath.map((item, index) => {
                      const Icon = index === 0 ? FileText : index === 1 ? Phone : CheckCircle2;
                      return (
                        <div key={item.step} className="group flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] hover:bg-white/[0.08] hover:border-sp-emerald/40 hover:shadow-[0_4px_20px_rgba(18,183,106,0.1)] transition-all duration-300 backdrop-blur-md text-left">
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-sp-emerald group-hover:text-sp-neon group-hover:bg-sp-emerald/10 group-hover:border-sp-emerald/20 shrink-0 mt-0.5 transition-all duration-300 font-bold">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[9px] font-mono text-sp-emerald">{item.step}</span>
                              <h3 className="text-[12.5px] font-medium tracking-normal text-white/90 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                              <span className="text-[9.5px] text-white/45">{item.meta}</span>
                            </div>
                            <p className="text-[10.5px] text-white/55 group-hover:text-white/75 font-light mt-0.5 leading-normal transition-colors duration-300 font-sans">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Office Info */}
              <div className="pt-2 border-t border-white/10 text-left space-y-0.5">
                <span className="text-[10px] text-sp-emerald font-medium">
                  Headquarters
                </span>
                <p className="text-[10px] text-zinc-350 font-sans leading-tight font-light">
                  <a href="https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="hover:text-sp-emerald transition-colors font-medium">Conrad Tower, WTC, Dubai</a>
                </p>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}

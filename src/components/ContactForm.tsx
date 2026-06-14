"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
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
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setShowConsentError(true);
      return;
    }
    setShowConsentError(false);
    if (!name || !email || !phone) return;

    setLoading(true);
    // Simulate high-end submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-sp-mintBg relative overflow-hidden text-left font-sans">
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
                Welcome to Scale Partners. A Senior Onboarding Director has been assigned to your file and will contact you via WhatsApp or email within **15 minutes** to guide your next steps.
              </p>
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
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sp-glass border border-sp-border text-[9px] tracking-widest uppercase font-semibold text-sp-forest">
                <Sparkles className="w-3 h-3 text-sp-emerald" />
                Priority Advisory Desk
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50/50 border border-sp-border text-[10px] font-medium text-sp-forest">
                <span className="text-amber-500">★★★★★</span> 4.9/5 TrustScore
              </span>
            </div>

            {/* Header & Subtitle */}
            <div className="mb-3">
              <p className="text-[9.5px] tracking-[0.2em] uppercase font-semibold text-sp-sage mb-1">
                Scale Smarter. Grow Faster.
              </p>
              <h1 className="contact-modal-title text-2xl lg:text-3xl text-sp-forest tracking-tight leading-tight mb-2">
                Speak with a <span className="font-semibold text-sp-emerald">Senior Advisor</span>
              </h1>
              <p className="text-[12.5px] text-sp-sage leading-relaxed font-light max-w-xl">
                Expert solutions that streamline your business, strengthen finances and drive growth. Initiate premium structures, tax advisory templates and secure DET registration pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
              {[
                { step: "01", title: "Share Details", text: "Tell us your activity, contact and visa needs." },
                { step: "02", title: "Route Check", text: "We match mainland or free zone options." },
                { step: "03", title: "Advisor Call", text: "A senior advisor confirms next steps within 15 minutes." }
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-sp-border bg-white px-3 py-2.5 shadow-[0_4px_18px_rgba(18,183,106,0.05)]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-sp-glass text-sp-emerald text-[10px] font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <h3 className="process-card-title text-[11px] text-sp-forest leading-none">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-sp-sage leading-snug font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Callback Intake Form */}
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] tracking-wider uppercase font-semibold text-sp-forest">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Alexander Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-sp-border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-light text-sp-forest"
                  />
                </div>
                {/* Contact Email */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] tracking-wider uppercase font-semibold text-sp-forest">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="alexander@mercerholdings.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-sp-border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-light text-sp-forest"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Active Phone / WhatsApp */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] tracking-wider uppercase font-semibold text-sp-forest">
                    Active Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-sp-border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all font-light text-sp-forest"
                  />
                </div>
                {/* Sector / Business Nature */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] tracking-wider uppercase font-semibold text-sp-forest">
                    Sector / Business Nature
                  </label>
                  <div className="relative">
                    <select 
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-sp-border rounded-xl text-sm text-sp-forest focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all appearance-none font-light"
                    >
                      <option>Technology & Professional Services</option>
                      <option>Finance & Investment</option>
                      <option>Trade & Logistics</option>
                      <option>Real Estate & Development</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-sp-sage">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Notes */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-[9.5px] tracking-wider uppercase font-semibold text-sp-forest">
                    Operational Notes / Sector Specifications
                  </label>
                  <span className="text-[8px] text-sp-sage uppercase tracking-wider font-semibold">Optional</span>
                </div>
                <textarea 
                  rows={2}
                  placeholder="e.g. Establishing a tech-holding structure seeking a 10-Year Golden Visa pathway."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-sp-border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-sp-emerald/40 focus:ring-2 focus:ring-sp-neon/10 transition-all resize-none font-light leading-normal text-sp-forest"
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
                  I consent to the secure collection & processing of my contact information under UAE & GDPR regulations. <span className="text-red-500">*</span>
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
                
                {/* Live Status Indicator */}
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sp-neon animate-pulse"></span>
                  <span className="text-[9.5px] text-white/80 font-light tracking-wide">
                    Live Desk Active <span className="text-white/40">(Callback Guarantee: &lt;15m)</span>
                  </span>
                </div>
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
                /* Default List of exactly 3 premium solutions cards to fit the screen size, styled with hover states */
                <div className="space-y-2">
                  <p className="text-[9.5px] tracking-[0.25em] uppercase font-semibold text-sp-sage/75 mb-1.5 text-left">
                    Expert UAE Solutions
                  </p>

                  <div className="space-y-2">
                    {/* Solution 1 */}
                    <div className="group flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.08] hover:border-sp-emerald/40 hover:shadow-[0_4px_20px_rgba(18,183,106,0.1)] transition-all duration-300 backdrop-blur-md text-left cursor-pointer">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-sp-emerald group-hover:text-sp-neon group-hover:bg-sp-emerald/10 group-hover:border-sp-emerald/20 shrink-0 mt-0.5 transition-all duration-300 font-bold">
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3 className="text-[11.5px] font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">Management Services</h3>
                        <p className="text-[9.5px] text-white/50 group-hover:text-white/70 font-light mt-0.5 leading-normal transition-colors duration-300 font-sans">Corporate administration & sovereign compliance management desk</p>
                      </div>
                    </div>

                    {/* Solution 2 */}
                    <div className="group flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.08] hover:border-sp-emerald/40 hover:shadow-[0_4px_20px_rgba(18,183,106,0.1)] transition-all duration-300 backdrop-blur-md text-left cursor-pointer">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-sp-emerald group-hover:text-sp-neon group-hover:bg-sp-emerald/10 group-hover:border-sp-emerald/20 shrink-0 mt-0.5 transition-all duration-300 font-bold">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3 className="text-[11.5px] font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">Accounting & Bookkeeping</h3>
                        <p className="text-[9.5px] text-white/50 group-hover:text-white/70 font-light mt-0.5 leading-normal transition-colors duration-300 font-sans">Tax-ready bookkeeping records and expert corporate accounting</p>
                      </div>
                    </div>

                    {/* Solution 3 */}
                    <div className="group flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.08] hover:border-sp-emerald/40 hover:shadow-[0_4px_20px_rgba(18,183,106,0.1)] transition-all duration-300 backdrop-blur-md text-left cursor-pointer">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-sp-emerald group-hover:text-sp-neon group-hover:bg-sp-emerald/10 group-hover:border-sp-emerald/20 shrink-0 mt-0.5 transition-all duration-300 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3 className="text-[11.5px] font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">Audit & Compliance</h3>
                        <p className="text-[9.5px] text-white/50 group-hover:text-white/70 font-light mt-0.5 leading-normal transition-colors duration-300 font-sans">Compliance optimization and 9% Corporate Tax audits defense</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Office Info */}
              <div className="pt-2 border-t border-white/10 text-left space-y-0.5">
                <span className="text-[8.5px] font-mono uppercase text-sp-emerald tracking-wider font-bold">
                  Corporate Headquarters
                </span>
                <p className="text-[9.5px] text-zinc-350 font-sans leading-tight font-light">
                  Scale Partners Corporate Advisory | <a href="https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="hover:text-sp-emerald transition-colors font-medium">1703, Conrad Tower, WTC, Dubai</a>
                </p>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}

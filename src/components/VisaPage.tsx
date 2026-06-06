"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Image from 'next/image';
import { PageId } from '../types';
import { 
  Award, 
  Users, 
  FileSignature, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Briefcase, 
  MapPin, 
  HelpCircle,
  Building2,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { motion } from 'motion/react';

interface VisaPageProps {
  type: 'golden' | 'residence' | 'pro';
  setPage: (page: PageId) => void;
  openContactModal: () => void;
}

export default function VisaPage({ type, setPage, openContactModal }: VisaPageProps) {
  
  // Eligibility auditor state variables
  const [selectedTrack, setSelectedTrack] = useState<string>('executive');
  const [capitalValue, setCapitalValue] = useState<string>('30k');
  const [ownsRealEstate, setOwnsRealEstate] = useState<string>('no');
  const [eligibilityResult, setEligibilityResult] = useState<{
    status: 'high' | 'medium' | 'review';
    title: string;
    description: string;
  } | null>(null);

  // Lead Generation state (Mandatory to unlock recommendation audit)
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);
  const [leadError, setLeadError] = useState<string>('');
  const [showEligibilityReport, setShowEligibilityReport] = useState<boolean>(false);

  const handleCheckEligibility = () => {
    let status: 'high' | 'medium' | 'review' = 'review';
    let title = 'General Residency File Review Required';
    let description = 'Based on your selections, you represent a standard candidate for the 2-Year Strategic Investor Visa. Some additional criteria notarizations (e.g., certificate authentication) are needed to approve entry.';

    if (type === 'golden') {
      if (selectedTrack === 'executive' && capitalValue === '30k') {
        status = 'high';
        title = 'Golden Visa Eligible (Senior Executive Corridor)';
        description = 'Excellent. Proving a basic salary of AED 30,000+ matched with an attested Bachelor\'s degree places you on our accelerated elite channel. Processing is extremely high success rate.';
      } else if (selectedTrack === 'property' && ownsRealEstate === 'yes') {
        status = 'high';
        title = 'Golden Visa Eligible (Real Estate Path)';
        description = 'Outstanding. Your real estate assets exceeding AED 2 Million qualifies you instantly for 10-year residency credentials. We can coordinate directly with the Dubai Land Department.';
      } else if (selectedTrack === 'talent') {
        status = 'medium';
        title = 'Special Recognition Channel Eligible';
        description = 'Your technical or creative background is perfect for creative nominations. Our legal team will request a recommendation code from standard UAE governmental councils.';
      } else {
        status = 'review';
        title = 'Immigration Council Evaluation Required';
        description = 'We recommend setting up a standard 2-Year Investor Visa first, then upgrading dynamically to 10-Year Golden tiers upon reaching strategic thresholds (such as salary attestation or property acquisition).';
      }
    } else {
      // Standard residence visa
      if (selectedTrack === 'executive' || selectedTrack === 'property') {
        status = 'high';
        title = 'High Feasibility - Investor Residency Corridor';
        description = 'You are perfectly eligible for 2-Year Investor residency. By registering a corporate seat in one of our allied Free Zones or Mainland structures, your residency card can be stamped in 72 hours.';
      } else {
        status = 'high';
        title = 'Residence Partner Visa Corridor';
        description = 'Suitable. We will establish simple establishment structures inside central Dubai DET or Meydan, unlocking continuous operations and rapid bank pre-approvals.';
      }
    }

    setEligibilityResult({ status, title, description });
    setShowEligibilityReport(true);
  };

  const contentMap = {
    golden: {
      tag: "Sovereign Elite Status",
      title: "UAE Golden Visa Program",
      subtitle: "Secure 10-year luxury residency in Dubai without requiring a local employer sponsor. Preserve absolute global tax mobility.",
      highlights: [
        "Sponsor all direct family members (spouse, children of any age) under 10-year residency.",
        "Zero minimum stay criteria—keep status alive even if out-of-country for over 6 months.",
        "Sponsor domestic staff volumes without statutory constraints.",
        "Priority Esaad Privilege Card unlocking massive discounts across UAE premium stores."
      ],
      tracks: [
        { title: "Property Investor", value: "AED 2 Million+", desc: "Hold real estate deeds valued at over AED 2M (equity can be leveraged or mortgaged with local UAE central bank approved lenders)." },
        { title: "Senior Executives", value: "AED 30k Monthly", desc: "For key executives holding accredited degrees and proving a monthly basic salary exceeding AED 30,000 inside the UAE." },
        { title: "Tech & AI Creators", value: "State Approved", desc: "For outstanding tech talent, AI developers, and creators backed by recommendations from ministries or state councils." }
      ],
      process: [
        { number: "01", name: "Initial Eligibility Audit", desc: "Scale Partner experts audit your degree certifications, salary slips, or property titles." },
        { number: "02", name: "Accreditation Submission", desc: "We seek formal state recommendation from Dubai Land Department, DET, or Ministry of Talent." },
        { number: "03", name: "File Transfer & Medical", desc: "Express VIP VIP medical screenings in private suites. Speed-run biometrics under 1 hour." },
        { number: "04", name: "10-Yr Visa Vignette & ID", desc: "Formal stamp and Golden Emirates ID card hand-delivered by our premium courier." }
      ],
      image1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
      image1Label: "GOLDEN RESIDENCY LEAD ADVISOR",
      image1Alt: "Advocate Tarik Al-Mehairi, Golden Visa expert",
      image1Desc: "Enjoy permanent 10-year family-sponsored status under golden visas structured by our executive advisor Tarik Al-Mehairi.",
      image2: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200&auto=format&fit=crop",
      image2Label: "GDRFA SYSTEM LEVEL CORRIDORS",
      image2Desc: "Our executive legal liaisons submit accredited files directly to senior immigration deans.",
      image3: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      image3Label: "ELITE CONCIERGE RESIDENCY",
      image3Heading: "Accredited Golden Passports & Asset Credentials",
      image3Desc: "All premium 10-year files undergo priority pre-checks. Scale Partners minimizes biometric queue times."
    },
    residence: {
      tag: "Corporate Resident Visas",
      title: "Investor & Partner Residency",
      subtitle: "The standard 2-year business-person residency. Simple, ultra-solid, configured instantly upon corporate registry.",
      highlights: [
        "Enables immediate opening of robust premium personal bank accounts (ENBD, Mashreq, Wio).",
        "Allows direct lease of luxury villas & properties in Dubai's premier residential areas.",
        "Simple sponsorship pathways for family, parents, and private drivers.",
        "Eligible for immediate conversion or upgrade to Golden tiers upon key milestones."
      ],
      tracks: [
        { title: "Company Partner", value: "72 Hr Registration", desc: "Secure investor status immediately by allocating shares inside a Mainland or Free Zone company structure." },
        { title: "Standard Employment", value: "Managerial Tiers", desc: "Visa sponsorship for executive recruits, senior technicians, and continuous operations teams." },
        { title: "Retiree Residency", value: "AED 1M Property", desc: "Eligible for active retirees containing steady wealth or real estate equity inside UAE borders." }
      ],
      process: [
        { number: "01", name: "Company File Creation", desc: "We trigger the Establishment Card on your corporate registry." },
        { number: "02", name: "Entry Permit Issuance", desc: "Electronic E-Visa permit issued. Access the country immediately through fast queues." },
        { number: "03", name: "Status Change & VIP Medical", desc: "In-country status adjustment followed by luxury VIP clinic diagnostics." },
        { number: "04", name: "Embrace ID Issuance", desc: "Fingerprint biometrics completion followed by physical card dispatch." }
      ],
      image1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      image1Label: "PARTNER RESIDENCY LEAD ADVISOR",
      image1Alt: "Elena Rostova, Investor & Partner Visa expert",
      image1Desc: "Establish an instant 2-year residency framework matching official trade registry files under lead advisor Elena Rostova.",
      image2: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1200&auto=format&fit=crop",
      image2Label: "DIRECT ESTABLISHMENT CREATION",
      image2Desc: "Every 2-year standard application secures immediate biometric clearance logs in central Dubai.",
      image3: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      image3Label: "MERCEDES S-CLASS ESCORT TRANSIT",
      image3Heading: "VIP Biometric Screening & Fast Card Delivery",
      image3Desc: "We coordinate chauffeured transfers for your medical screening and deliver your physical Emirates ID card to your door."
    },
    pro: {
      tag: "Sovereign Concierge Desk",
      title: "Corporate PRO & Licensing Care",
      subtitle: "Delegate your administrative overhead. Total maintenance of trade licenses, quota allocations, and state clearing.",
      highlights: [
        "Corporate Trade License statutory renewals (DET, IFZA, Meydan, DMCC, JAFZA).",
        "Corporate bank account maintenance and continuous address validation support.",
        "Employee labor quota approvals, work permit drafts, and visa cancelation desks.",
        "Fully managed document notarization, legal Arabic drafting, and ministerial clearances."
      ],
      tracks: [
        { title: "On-demand clearances", value: "Clear Per-Task Fee", desc: "Urgent state clearances, trademark protections, and legal notarizations billed dynamically." },
        { title: "Dedicated Retainer Desk", value: "Gold Care tier", desc: "Continuous monitoring of all corporate files, staff visas, and license health under strict SLAs." },
        { title: "Establishment Audit", value: "Complimentary Desk", desc: "Evaluation of present licensing errors, visa penalties, or registry issues to clean up compliance." }
      ],
      process: [
        { number: "01", name: "Scale Desk Audit", desc: "Continuous health tracking of your corporate registry folders." },
        { number: "02", name: "Action Alerts dispatch", desc: "We anticipate trade renewal or visa milestones 60 days before expiration." },
        { number: "03", name: "Direct Courier dispatch", desc: "We pick up passports, notarizations, and original deeds from your residence." },
        { number: "04", name: "State Portals update", desc: "Instant digital updates made across Immigration, Labor, and Tax systems." }
      ],
      image1: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
      image1Label: "SOVEREIGN CORPORATE SECRETARIAL PRO DESK",
      image1Alt: "Zayn Shah, VIP secretarial and banking specialist",
      image1Desc: "Outsource traditional administrative bottlenecks. Zayn Shah and our strategic legal teams act as your local state registrar agents.",
      image2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      image2Label: "MINISTERIAL LEGAL NOTARIZATION",
      image2Desc: "Immediate authentication, Arabic drafting, and labor quota approvals under strict corporate SLA matrices.",
      image3: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      image3Label: "PERMANENT LICENSING AUDITS",
      image3Heading: "Sovereign Labor Quotas & Registrar Clearing Logs",
      image3Desc: "All legal operations are tracked through live digital registry corridors, preserving premium standing for your corporate file."
    }
  };

  const current = contentMap[type];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="pt-[100px] pb-24 bg-gold-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Indicator / Back */}
        <div className="mb-8">
          <button 
            id={`back_btn_visa_${type}`}
            onClick={() => { setPage('home'); window.scrollTo({top:0}); }}
            className="text-[12px] font-mono uppercase tracking-wider text-zinc-400 hover:text-gold-600 transition-colors flex items-center space-x-1"
          >
            <span>Overview</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-800 font-semibold">{current.title}</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-16 border-b border-zinc-100">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] text-gold-600 font-bold block">
              {current.tag}
            </span>
            <h1 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] font-semibold text-zinc-900 leading-[1.15] tracking-tight">
              {current.title}
            </h1>
            <p className="font-sans text-zinc-500 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl">
              {current.subtitle}
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4 font-sans">
              <button
                id="visa_book_consult"
                onClick={openContactModal}
                className="bg-brand-grad text-white px-6 py-3.5 rounded-xl font-sans text-[13.5px] font-bold tracking-tight transition-all duration-300 shadow-md flex items-center space-x-2 border-0 hover:scale-[1.015]"
              >
                <span>Book VIP Residency Audit</span>
                <ArrowRight className="w-4 h-4 text-gold-350" />
              </button>
            </div>

            {/* Premium Photo 1: Dynamic High Status Global Executive */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm h-[200px] mt-6 relative group">
              <Image 
                src={current.image1} 
                alt={current.image1Alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end justify-between z-10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-100 font-semibold">{current.image1Label}</span>
                <span className="text-[10px] text-zinc-300 font-sans mt-0.5">{current.image1Desc}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gold-50/20 border border-gold-300/10 rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[12px] font-mono uppercase tracking-widest text-gold-600 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Exclusion Privileges & Safeguards</span>
              </div>
              <p className="text-[12px] text-zinc-500 leading-relaxed font-serif italic">
                "Our immigration lawyers handle submissions directly with GDRFA authorities to avoid queue delays."
              </p>
              <div className="space-y-2 border-t border-zinc-100 pt-4">
                {current.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-[12.5px] text-zinc-600 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Pre-approved Residence Trust Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-t border-b border-zinc-150/40 py-6 relative z-10 bg-zinc-50/40 px-6 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shrink-0 shadow-3xs text-gold-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">GDRFA Registered</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Direct state clearing portal priority</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shrink-0 shadow-3xs text-gold-600">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">99.4% Stamp Success</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Highest verified executive approvals</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shrink-0 shadow-3xs text-gold-600">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">Private Lounge VIP</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Mercedes screen escort transit</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shrink-0 shadow-3xs text-gold-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">Full MOFA Attestation</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Attested degrees & global filings</p>
            </div>
          </div>
        </div>

        {/* Photo 2: Dynamic Elite legal client counsel meeting */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm h-[200px] relative group z-10">
          <Image 
            src={current.image2} 
            alt={current.image2Label} 
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end justify-between z-10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-100 font-semibold">{current.image2Label}</span>
            <span className="text-[10px] text-zinc-300 font-sans mt-0.5">{current.image2Desc}</span>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="space-y-8 mb-20 font-sans">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-bold">Residency Vector Selection</span>
            <h2 className="text-[24px] sm:text-[28px] font-serif font-semibold text-zinc-900 tracking-tight">
              Sovereign Entry Tracks & Capital Thresholds
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {current.tracks.map((track, idx) => (
              <div key={idx} className="bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10.5px] font-mono tracking-wider text-zinc-400 font-semibold uppercase">Category 0{idx + 1}</span>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[17px] font-semibold text-zinc-900 tracking-tight">
                      {track.title}
                    </h3>
                  </div>
                  <div className="text-[20px] font-serif text-gold-600 font-semibold leading-none">
                    {track.value}
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {track.desc}
                  </p>
                </div>
                <button
                  onClick={openContactModal}
                  className="mt-6 text-[12px] font-mono uppercase tracking-wider text-gold-600 hover:text-gold-700 flex items-center space-x-1.5 font-semibold"
                >
                  <span>Inquire Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SECURE ELIGIBILITY CHECKER TOOL */}
        {type !== 'pro' && (
          <div id="eligibility_auditor_card" className="bg-white border border-zinc-200/70 rounded-3xl p-6 sm:p-10 mb-20 shadow-[0_24px_65px_rgba(30,41,59,0.03)] relative overflow-hidden text-left space-y-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[80px]"></div>
            
            <div className="border-b border-zinc-100 pb-5">
              <span className="font-mono text-[9.5px] text-gold-600 uppercase tracking-widest font-bold block mb-1">Interactive Audit Portal</span>
              <h2 className="font-serif text-[24px] sm:text-[30px] font-semibold text-zinc-900 tracking-tight">Sovereign Residency Eligibility Auditor</h2>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-sans max-w-2xl mt-1.5">
                Calculate your statistical pass probability across UAE Federal Authority for Identity & Citizenship (ICP) checkpoints in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Question Form (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3 font-sans">
                  <label className="text-[12.5px] uppercase font-mono tracking-wider font-bold text-zinc-700 flex items-center space-x-1.5">
                    <Briefcase className="w-4 h-4 text-gold-600" />
                    <span>Select target track or category of interest:</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'executive', name: 'Executive/Degree Holder' },
                      { id: 'property', name: 'Premium Property Investor' },
                      { id: 'talent', name: 'Outstanding Tech/AI Executive' }
                    ].map(track => (
                      <button
                        key={track.id}
                        onClick={() => setSelectedTrack(track.id)}
                        className={`text-left p-3 rounded-xl border text-[11.5px] leading-snug transition-all ${
                          selectedTrack === track.id 
                            ? 'border-[#00d4aa] bg-[#00d4aa]/5 text-zinc-900 font-semibold shadow-xs' 
                            : 'border-zinc-200 text-zinc-500 hover:border-zinc-350 bg-zinc-50/20'
                        }`}
                      >
                        {track.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 font-sans">
                  <label className="text-[12.5px] uppercase font-mono tracking-wider font-bold text-zinc-700 flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-gold-600" />
                    <span>Monthly foreign/UAE dividend or salary yield:</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: '30k', name: 'AED 30,000+ ($8.2k USD)' },
                      { id: '20k', name: 'AED 20,000 - 29,999' },
                      { id: 'under', name: 'Under AED 20,000' }
                    ].map(salary => (
                      <button
                        key={salary.id}
                        onClick={() => setCapitalValue(salary.id)}
                        className={`text-left p-3 rounded-xl border text-[11.5px] leading-snug transition-all ${
                          capitalValue === salary.id 
                            ? 'border-[#00d4aa] bg-[#00d4aa]/5 text-zinc-900 font-semibold shadow-xs' 
                            : 'border-zinc-200 text-zinc-500 hover:border-zinc-350 bg-zinc-50/20'
                        }`}
                      >
                        {salary.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 font-sans">
                  <label className="text-[12.5px] uppercase font-mono tracking-wider font-bold text-zinc-700 flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-gold-600" />
                    <span>Do you own property in Dubai worth AED 2 Million+?</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 max-w-sm">
                    {[
                      { id: 'yes', name: 'Yes (Fully Held or Mortgaged)' },
                      { id: 'no', name: 'No Property / Not Yet' }
                    ].map(property => (
                      <button
                        key={property.id}
                        onClick={() => setOwnsRealEstate(property.id)}
                        className={`text-center p-3 rounded-xl border text-[11.5px] leading-snug transition-all ${
                          ownsRealEstate === property.id 
                            ? 'border-[#00d4aa] bg-[#00d4aa]/5 text-zinc-900 font-semibold shadow-xs' 
                            : 'border-zinc-200 text-zinc-505 hover:border-zinc-350 bg-zinc-50/20'
                        }`}
                      >
                        {property.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCheckEligibility}
                  className="w-full py-4 rounded-xl bg-brand-grad text-white text-[13px] font-bold tracking-tight transition-transform hover:scale-[1.005] shadow-md text-center border-0"
                >
                  Verify Residency Track Credentials
                </button>

              </div>

              {/* Response Card (5 Cols) Gated with GDPR Form */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                {!showEligibilityReport ? (
                  <div className="h-full min-h-[320px] bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                    <div className="space-y-4">
                      <span className="font-mono text-[9px] text-gold-600 uppercase tracking-widest font-bold block">Status Checklist</span>
                      <h3 className="font-serif text-[18px] font-semibold text-zinc-900 tracking-tight">ICP Gateway Unchecked</h3>
                      <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans">
                        Configure your Track Selection indicators on the left and click Verify. Our analytical portal scans federal visa thresholds in parallel.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-zinc-200/50 text-[11px] text-zinc-500 space-y-2.5 font-sans">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                        <span>University Degree attestation audit</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Security clearance verification logs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                        <span>GDRFA system compatibility indices</span>
                      </div>
                    </div>
                  </div>
                ) : !leadSubmitted ? (
                  <div className="h-full bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-5 animate-fade-in text-left">
                    <div className="space-y-1.5 border-b border-white/[0.06] pb-4">
                      <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest font-bold block">Sovereign Compliance Gate</span>
                      <h3 className="font-serif text-[19px] font-semibold text-white tracking-tight">Unlock Audit Evaluation</h3>
                      <p className="text-[11.5px] text-zinc-300 leading-relaxed font-sans font-normal">
                        Please provide your coordinates below to release your custom eligibility pass percentage and obtain an attested copy of the criteria.
                      </p>
                    </div>

                    {leadError && (
                      <div className="p-3 bg-red-500/15 border border-red-500/35 text-red-200 rounded-xl text-[11px] font-medium leading-normal">
                        {leadError}
                      </div>
                    )}

                    <div className="space-y-3 font-sans">
                      <div className="space-y-1 border-0">
                        <label className="text-[10px] font-mono text-zinc-400 uppercase font-semibold block">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-950 border border-white/[0.08] rounded-xl px-4 py-2.5 text-[12px] text-white focus:outline-none focus:border-[#00d4aa] transition-all placeholder:text-zinc-650"
                          placeholder="e.g. Liam Sterling"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1 border-0">
                        <label className="text-[10px] font-mono text-zinc-400 uppercase font-semibold block">Corporate Email</label>
                        <input
                          type="email"
                          className="w-full bg-slate-950 border border-white/[0.08] rounded-xl px-4 py-2.5 text-[12px] text-white focus:outline-none focus:border-[#00d4aa] transition-all placeholder:text-zinc-650"
                          placeholder="e.g. liam@sterling.co"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1 border-0">
                        <label className="text-[10px] font-mono text-zinc-400 uppercase font-semibold block">Mobile Number</label>
                        <input
                          type="tel"
                          className="w-full bg-slate-950 border border-white/[0.08] rounded-xl px-4 py-2.5 text-[12px] text-white focus:outline-none focus:border-[#00d4aa] transition-all placeholder:text-zinc-650"
                          placeholder="e.g. +971 50 123 4567"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      id="eligibility_unlock_report_btn"
                      onClick={() => {
                        if (!leadName.trim() || !leadEmail.trim() || !leadPhone.trim()) {
                          setLeadError('Please supply all credentials to extract your visa feasibility report.');
                          return;
                        }
                        setLeadError('');
                        setLeadSubmitted(true);
                      }}
                      className="w-full py-3 bg-brand-grad hover:opacity-95 text-white rounded-xl text-[12.5px] font-bold tracking-tight transition-transform hover:scale-[1.01] shadow-lg text-center border-0"
                    >
                      Extract Feasibility Report
                    </button>

                    <p className="text-[9px] text-zinc-500 text-center italic font-sans leading-none">
                      🔒 Data encrypted securely with licensed corporate compliance brokers.
                    </p>
                  </div>
                ) : (
                  <div className="h-full bg-gradient-to-tr from-[#0052ff] via-[#00a3ff] to-[#00d4aa] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left space-y-6 animate-fade-in border-0 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#faf9f0] uppercase tracking-widest font-bold">ICP AUDIT PASSED</span>
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase border ${
                          eligibilityResult?.status === 'high' 
                            ? 'bg-emerald-450/20 text-white border-white/20' 
                            : 'bg-amber-450/20 text-white border-white/20'
                        }`}>
                          {eligibilityResult?.status === 'high' ? 'High Feasibility' : 'Review Track'}
                        </span>
                      </div>

                      <div className="space-y-1.5 border-0">
                        <h3 className="font-serif text-[20px] font-semibold text-white tracking-tight">
                          {eligibilityResult?.title}
                        </h3>
                        <p className="text-[12px] text-white/95 font-mono leading-relaxed">
                          Assigned File Key: <strong className="text-white">#ICA-{Math.floor(100000 + Math.random() * 900000)}</strong>
                        </p>
                      </div>

                      <div className="text-[12.5px] text-white leading-relaxed bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl font-sans">
                        <span className="text-[10px] text-yellow-250 uppercase font-bold block mb-1">Status Summary for {leadName}</span>
                        {eligibilityResult?.description}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-4 font-sans pb-0 relative z-10">
                      <button
                        onClick={() => {
                          setShowEligibilityReport(false);
                          setLeadSubmitted(false);
                        }}
                        className="text-[11px] text-white/80 hover:text-white transition-colors"
                      >
                        ← Recheck options
                      </button>
                      <button
                        onClick={openContactModal}
                        className="bg-white hover:bg-zinc-50 text-[#0066ff] font-bold text-[12px] px-4 py-2.5 rounded-xl transition-all shadow-md border-0"
                      >
                        Submit Attested Copy
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Photo 3: Dynamic Luxury Private Medical Screen VIP Transit */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md h-[260px] relative group z-10">
          <Image 
            src={current.image3}
            alt={current.image3Heading}
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-400 font-bold">{current.image3Label}</span>
            <h3 className="font-serif text-[20px] sm:text-[24px] text-white font-medium mt-1 leading-snug">{current.image3Heading}</h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-300 max-w-xl mt-1 font-sans">
              {current.image3Desc}
            </p>
          </div>
        </div>

        {/* Sovereign Process Flow */}
        <div className="bg-gradient-to-tr from-[#0052ff] via-[#00a3ff] to-[#00d4aa] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden mb-20 shadow-lg border-0 animate-fade-in">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]"></div>
          
          <div className="max-w-xl space-y-4 mb-12 relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#faf9f0] font-bold">The Fast-Track Pipeline</span>
            <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold tracking-tight text-white animate-fade-in">
              Seamless. Absolute. Handled.
            </h2>
            <p className="text-white/90 text-[13.5px] leading-relaxed">
              We oversee the process end-to-end. We deploy private Mercedes V-Class vehicles for your medical screening block, turning statutory compliance into a premium corporate amenity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 animate-fade-in">
            {current.process.map((step, idx) => (
              <div key={idx} className="space-y-3 border-l border-white/20 pl-6">
                <div className="text-[32px] font-serif text-white/35 font-semibold leading-none">
                  {step.number}
                </div>
                <h3 className="text-[15.5px] font-semibold text-white tracking-tight">
                  {step.name}
                </h3>
                <p className="text-[12.5px] text-white/95 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

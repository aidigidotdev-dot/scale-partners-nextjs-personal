"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Image from 'next/image';
import {
  Building2, 
  Globe, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Printer, 
  Mail, 
  Phone,
  BookmarkCheck,
  ShieldCheck
} from 'lucide-react';
import { CostBreakdown } from '../types';
import { sendLeadEmail } from '../lib/leadEmail';

interface CostCalculatorProps {
  onQuoteSubmit: (breakdown: CostBreakdown, selections: {
    jurisdiction: string;
    activity: string;
    visas: number;
    office: string;
  }) => void;
  openContactModal: () => void;
}

export default function CostCalculator({ onQuoteSubmit, openContactModal }: CostCalculatorProps) {
  const [step, setStep] = useState(1);
  
  // States of selection
  const [jurisdiction, setJurisdiction] = useState<'mainland' | 'freezone'>('freezone');
  const [activity, setActivity] = useState<'service' | 'commercial' | 'ecommerce'>('service');
  const [visasCount, setVisasCount] = useState<number>(1);
  const [officeType, setOfficeType] = useState<'virtual' | 'flexi' | 'dedicated'>('virtual');

  // Lead Generation state (Mandatory to unlock calculations)
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [leadError, setLeadError] = useState<string>('');

  // Multi-step calculations
  const calculateCosts = (): CostBreakdown => {
    const jurisdictionFee = jurisdiction === 'mainland' ? 12500 : 8500;
    
    let activityFee = 1500;
    if (activity === 'commercial') activityFee = 2500;
    if (activity === 'ecommerce') activityFee = 2000;

    const visaFee = visasCount * 3200; // 3,200 AED per visa file

    let officeFee = 4500;
    if (officeType === 'flexi') officeFee = 6500;
    if (officeType === 'dedicated') officeFee = 18500;

    const adminFee = 1500; // Agent administration and filing fee
    const total = jurisdictionFee + activityFee + visaFee + officeFee + adminFee;

    return {
      jurisdictionFee,
      activityFee,
      visaFee,
      officeFee,
      adminFee,
      total
    };
  };

  const costs = calculateCosts();

  const handleApplyQuotation = () => {
    onQuoteSubmit(costs, {
      jurisdiction: jurisdiction === 'mainland' ? 'Mainland (DET)' : 'Free Zone Authority',
      activity: activity.charAt(0).toUpperCase() + activity.slice(1) + ' License',
      visas: visasCount,
      office: officeType.charAt(0).toUpperCase() + officeType.slice(1) + ' Office Solution'
    });
  };

  return (
    <div className="pt-[100px] pb-24 bg-white min-h-screen relative overflow-hidden">
      {/* SOFT AMBIENT BRAND GREEN GLOWS FOR ULTRA-PREMIUM VIBES */}
      <div className="absolute top-0 right-0 w-[55%] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(18,183,106,0.045),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[450px] bg-[radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.03),transparent_45%)] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Tag */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-1 border border-gold-300/15 bg-gold-50/50 px-3.5 py-1 rounded-full backdrop-blur-sm">
            <Calculator className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 font-semibold">Scale Cost Engine</span>
          </div>
          <h1 className="font-serif text-[38px] sm:text-[46px] font-semibold text-zinc-900 leading-tight tracking-tight">
            UAE License Cost Estimator
          </h1>
          <p className="font-sans text-zinc-500 text-[14.5px] max-w-lg mx-auto">
            Design your ideal business framework dynamically. Receive pricing clarity on government fees and visa Clearances in real-time.
          </p>
        </div>

        {/* Cost Calculator Banner Photo */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-zinc-200/50 shadow-md h-[200px] mb-12 relative group z-10 animate-fade-in">
          <Image 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" 
            alt="License Cost Estimator" 
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/95 via-[#08854C]/35 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-400 font-bold">REAL-TIME BUDGET MODELING</span>
            <h3 className="font-serif text-[18px] sm:text-[22px] text-white font-medium mt-1 leading-snug">Statutory Fee Calculator</h3>
            <p className="text-[12px] text-zinc-300 max-w-xl mt-1 font-sans">
              Evaluate economic zones, license codes, and visa quotas under verified government portal indexes.
            </p>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Wizard form (8 Cols) */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-100/85 rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Step Progress indicators */}
            <div className="flex justify-between items-center pb-6 border-b border-zinc-200/50">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center space-x-2">
                  <div 
                    onClick={() => setStep(s)}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-[12px] font-semibold cursor-pointer transition-colors ${
                      step === s 
                        ? 'bg-brand-grad text-white font-bold' 
                        : step > s 
                          ? 'bg-gold-500 text-zinc-950 font-bold' 
                          : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
                    }`}
                  >
                    {s}
                  </div>
                  <span className={`text-[11.5px] font-medium hidden sm:inline ${step === s ? 'text-zinc-900 font-bold' : 'text-zinc-400'}`}>
                    {s === 1 ? 'Jurisdiction' : s === 2 ? 'Activity' : s === 3 ? 'Residency' : 'Office'}
                  </span>
                </div>
              ))}
            </div>

            {/* STEP 1: Jurisdiction */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold">Step 01 / Authority Target</span>
                  <h3 className="text-[18px] font-semibold text-zinc-900 tracking-tight">Select your UAE Territory Alignment</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    id="calc_jurisdiction_freezone"
                    onClick={() => setJurisdiction('freezone')}
                    className={`border-2 rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md ${
                      jurisdiction === 'freezone' 
                        ? 'border-gold-500 bg-gold-50/10' 
                        : 'border-zinc-200 hover:border-zinc-300 bg-white'
                    }`}
                  >
                    <div className="relative w-full h-28 rounded-xl overflow-hidden mb-3">
                      <Image 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" 
                        alt="Free Zone Authority" 
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/70 via-transparent to-transparent"></div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-1.5 bg-gold-50 rounded-lg text-gold-600">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${jurisdiction === 'freezone' ? 'border-gold-500' : 'border-zinc-300'}`}>
                        {jurisdiction === 'freezone' && <div className="w-2 h-2 bg-gold-500 rounded-full"></div>}
                      </div>
                    </div>
                    <h4 className="text-[14.5px] font-semibold text-zinc-900">Free Zone Authority</h4>
                    <p className="text-[11.5px] text-zinc-500 leading-normal mt-1 font-sans">
                      Optimized for global services, absolute corporate tax exemption, and simplified digital reporting.
                    </p>
                  </div>

                  <div 
                    id="calc_jurisdiction_mainland"
                    onClick={() => setJurisdiction('mainland')}
                    className={`border-2 rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md ${
                      jurisdiction === 'mainland' 
                        ? 'border-gold-500 bg-gold-50/10' 
                        : 'border-zinc-200 hover:border-zinc-300 bg-white'
                    }`}
                  >
                    <div className="relative w-full h-28 rounded-xl overflow-hidden mb-3">
                      <Image 
                        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop" 
                        alt="Mainland (DET)" 
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/70 via-transparent to-transparent"></div>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-1.5 bg-gold-50 rounded-lg text-gold-600">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${jurisdiction === 'mainland' ? 'border-gold-500' : 'border-zinc-300'}`}>
                        {jurisdiction === 'mainland' && <div className="w-2 h-2 bg-gold-500 rounded-full"></div>}
                      </div>
                    </div>
                    <h4 className="text-[14.5px] font-semibold text-zinc-900">Mainland (DET)</h4>
                    <p className="text-[11.5px] text-zinc-500 leading-normal mt-1 font-sans">
                      Unlocks total access directly with local UAE clients and public B2B entities without geographical borders.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Activity License */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold">Step 02 / Industry Segment</span>
                  <h3 className="text-[18px] font-semibold text-zinc-900 tracking-tight">Select your Primary License Type</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'service', label: 'Professional / Service', cost: 'AED 1,500', desc: 'Sectors: Consulting, Technology, Advisory services, Media, and Digital Agencies.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop' },
                    { id: 'commercial', label: 'Commercial / Trading', cost: 'AED 2,500', desc: 'Sectors: Domestic trade, physical imports, export operations, and logistics.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
                    { id: 'ecommerce', label: 'E-Commerce Retail', cost: 'AED 2,000', desc: 'Sectors: Consumer online portals, dropshipping, and digital checkout brands.', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop' }
                  ].map((act) => (
                    <div 
                      key={act.id}
                      id={`calc_activity_${act.id}`}
                      onClick={() => setActivity(act.id as any)}
                      className={`border-2 rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between ${
                        activity === act.id 
                          ? 'border-gold-500 bg-gold-50/10' 
                          : 'border-zinc-200 bg-white hover:border-zinc-300'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="relative w-full h-24 rounded-xl overflow-hidden">
                          <Image 
                            src={act.image} 
                            alt={act.label} 
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/70 via-transparent to-transparent"></div>
                        </div>
                        <div>
                          <div className="text-[13.5px] font-semibold text-zinc-900 leading-snug">{act.label}</div>
                          <p className="text-[11px] text-zinc-500 font-sans mt-1 leading-normal">{act.desc}</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-zinc-100 mt-3 flex justify-between items-baseline">
                        <span className="text-[9.5px] text-zinc-400 font-mono font-semibold uppercase">Est. Cost</span>
                        <div className="text-[13px] font-mono font-bold text-gold-700">{act.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Visas allocation */}
            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold">Step 03 / Visa Logistics</span>
                  <h3 className="text-[18px] font-semibold text-zinc-900 tracking-tight">How many Resident Visas are required?</h3>
                </div>

                <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-[14.5px] font-bold text-zinc-800">Visa Quota Target</span>
                    <p className="text-[12px] text-zinc-500 max-w-sm leading-normal font-sans">
                      Each resident slot includes electronic medical clearing suites, GDRFA state registrations, and physical biometric Emirates ID issuance fees.
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 border border-zinc-200 rounded-xl p-1 bg-zinc-50 shrink-0">
                    <button 
                      id="calc_visa_decrement"
                      onClick={() => setVisasCount(Math.max(0, visasCount - 1))}
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[18px] text-zinc-600 hover:bg-white hover:text-zinc-900 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-mono text-[16px] font-bold text-zinc-900">
                      {visasCount}
                    </span>
                    <button 
                      id="calc_visa_increment"
                      onClick={() => setVisasCount(Math.min(6, visasCount + 1))}
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[18px] text-zinc-600 hover:bg-white hover:text-zinc-900 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div id="visas_limit_note" className="flex items-center space-x-2.5 bg-zinc-50 border border-zinc-100 rounded-xl p-3 text-[11.5px] text-zinc-500">
                  <Users className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Maximum allocated limit on flexi-desks is usually 3-4 visas. Larger targets warrant dedicated corporate desk rentals.</span>
                </div>
              </div>
            )}

            {/* STEP 4: Commercial Space */}
            {step === 4 && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold">Step 04 / Facility Selection</span>
                  <h3 className="text-[18px] font-semibold text-zinc-900 tracking-tight">Select your Workspace Option</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'virtual', name: 'Virtual Address', cost: 'AED 4,500', desc: 'Valid address for DET/freezone compliant registrations without active physical lease keys.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop' },
                    { id: 'flexi', name: 'Flexi Shared Desk', cost: 'AED 6,500', desc: 'Dedicated shared workspace desk inside premium co-working suites in central Dubai. Perfect for startup visas.', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600&auto=format&fit=crop' },
                    { id: 'dedicated', name: 'Dedicated Office', cost: 'AED 18,500', desc: 'Independent physical lockable executive room. Unlocks unlimited resident visa quotas under labor rules.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop' }
                  ].map((office) => (
                    <div 
                      key={office.id}
                      id={`calc_office_${office.id}`}
                      onClick={() => setOfficeType(office.id as any)}
                      className={`border-2 rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between ${
                        officeType === office.id 
                          ? 'border-gold-500 bg-gold-50/10' 
                          : 'border-zinc-200 bg-white hover:border-zinc-300'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="relative w-full h-24 rounded-xl overflow-hidden">
                          <Image 
                            src={office.image} 
                            alt={office.name} 
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/70 via-transparent to-transparent"></div>
                        </div>
                        <div>
                          <div className="text-[13.5px] font-semibold text-zinc-900 leading-snug">{office.name}</div>
                          <p className="text-[11px] text-zinc-500 font-sans mt-1 leading-normal">{office.desc}</p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-zinc-100 mt-3 flex justify-between items-baseline">
                        <span className="text-[9.5px] text-zinc-400 font-mono font-semibold uppercase">Annual Rent</span>
                        <div className="text-[13px] font-mono font-bold text-gold-700">{office.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next/Back Wizard controls */}
            <div className="flex justify-between items-center pt-4 border-t border-zinc-200/50">
              <button
                id="calc_wizard_back"
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                className={`px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-colors ${
                  step === 1 
                    ? 'text-zinc-300 cursor-not-allowed' 
                    : 'text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                Previous Stage
              </button>

              {step < 4 ? (
                <button
                  id="calc_wizard_next"
                  onClick={() => setStep(step + 1)}
                  className="bg-brand-grad text-white px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all flex items-center space-x-1.5 border-0 hover:scale-[1.015]"
                >
                  <span>Build Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  id="calc_wizard_finish"
                  onClick={handleApplyQuotation}
                  className="bg-gold-500 text-zinc-950 hover:bg-gold-600 px-6 py-3 rounded-xl text-[13px] font-bold tracking-tight transition-all flex items-center space-x-1.5 shadow-sm"
                >
                  <BookmarkCheck className="w-4 h-4" />
                  <span>Mount Calculated Quotation</span>
                </button>
              )}
            </div>

          </div>

          {/* Premium Preview/Invoice Sidebar (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-[#0C2E1A] via-[#12B76A] to-[#22C55E] text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl border-0">
            <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-overlay">
              <Image 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop" 
                alt="Dubai Skyline Overlay"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none z-0"></div>
            
            {!leadSubmitted ? (
              <div className="space-y-5 animate-fade-in text-left relative z-10">
                <div className="space-y-1.5 border-b border-white/20 pb-4">
                  <span className="font-mono text-[9px] text-[#faf9f0] uppercase tracking-widest font-bold block">Sovereign Lead Clearance</span>
                  <h3 className="font-serif text-[19px] font-semibold text-white tracking-tight">Unlock Secure Price Estimate</h3>
                  <p className="text-[12px] text-white/90 leading-relaxed font-sans">
                    Submit your credentials below to initialize the live regulatory pricing matrices and receive a certified breakdown via email.
                  </p>
                </div>

                {leadError && (
                  <div className="p-3 bg-red-500/20 border border-red-500/35 text-white rounded-xl text-[11.5px] font-medium leading-relaxed">
                    {leadError}
                  </div>
                )}

                <div className="space-y-3 font-sans">
                  <div className="space-y-1 border-0">
                    <label className="text-[11px] font-mono text-white/90 uppercase font-semibold block">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] text-white focus:outline-none focus:border-white transition-all placeholder:text-white/60"
                      placeholder="e.g. Alexander Vance"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1 border-0">
                    <label className="text-[11px] font-mono text-white/90 uppercase font-semibold block">Corporate Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] text-white focus:outline-none focus:border-white transition-all placeholder:text-white/60"
                      placeholder="e.g. alex@vance-holdings.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1 border-0">
                    <label className="text-[11px] font-mono text-white/90 uppercase font-semibold block">Mobile Number</label>
                    <input
                      type="tel"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] text-white focus:outline-none focus:border-white transition-all placeholder:text-white/60"
                      placeholder="e.g. +971 50 123 4567"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  id="calc_unlock_prices_btn"
                  onClick={() => {
                    if (!leadName.trim() || !leadEmail.trim() || !leadPhone.trim()) {
                      setLeadError('All coordinates are required to unlock regulatory files.');
                      return;
                    }
                    setLeadError('');
                    void sendLeadEmail({
                      source: 'Cost Calculator Lead',
                      name: leadName,
                      email: leadEmail,
                      phone: leadPhone,
                      fields: {
                        Jurisdiction: jurisdiction,
                        Activity: activity,
                        Visas: visasCount,
                        OfficeType: officeType,
                        JurisdictionFee: `AED ${costs.jurisdictionFee.toLocaleString()}`,
                        ActivityFee: `AED ${costs.activityFee.toLocaleString()}`,
                        VisaFee: `AED ${costs.visaFee.toLocaleString()}`,
                        OfficeFee: `AED ${costs.officeFee.toLocaleString()}`,
                        AdminFee: `AED ${costs.adminFee.toLocaleString()}`,
                        EstimatedTotal: `AED ${costs.total.toLocaleString()}`,
                      },
                    });
                    setLeadSubmitted(true);
                  }}
                  className="w-full py-3.5 bg-white text-gold-500 hover:bg-zinc-50 rounded-xl text-[13px] font-bold tracking-tight transition-transform hover:scale-[1.015] shadow-lg text-center border-0"
                >
                  Retrieve Live Price Model
                </button>

                <p className="text-[9.5px] text-white/80 text-center italic leading-normal font-sans">
                  🛡️ GDPR Compliant. Your information is locked directly with statutory licensed legal registry agents.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-white/20 pb-4 relative z-10">
                  <span className="font-mono text-[10px] text-[#faf9f0] uppercase tracking-widest font-bold block">Live Cost break-down</span>
                  <span className="font-mono text-[10.5px] text-white/80 font-bold uppercase">AED Valuation</span>
                </div>

                {/* Invoice Line-items */}
                <div className="space-y-4 relative z-10">
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[13px] font-bold text-white block font-sans">License & Jurisdiction</span>
                      <span className="text-[10.5px] text-white/85 font-sans block">{jurisdiction === 'mainland' ? 'Mainland (DET DET Registration)' : 'Free Zone Authority Registry'}</span>
                    </div>
                    <span className="text-[13px] font-mono text-white font-bold">AED {costs.jurisdictionFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[13px] font-bold text-white block font-sans">Industry License Code</span>
                      <span className="text-[10.5px] text-white/85 font-sans block">{activity.charAt(0).toUpperCase() + activity.slice(1)} Alignment Fee</span>
                    </div>
                    <span className="text-[13px] font-mono text-white font-bold">AED {costs.activityFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[13px] font-bold text-white block font-sans">Residency Visas ({visasCount})</span>
                      <span className="text-[10.5px] text-white/85 font-sans block">{visasCount * 3200} AED static government quota cost</span>
                    </div>
                    <span className="text-[13px] font-mono text-white font-bold">AED {costs.visaFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[13px] font-bold text-white block font-sans">Workspace / Office Desk</span>
                      <span className="text-[10.5px] text-white/85 font-sans block">{officeType.charAt(0).toUpperCase() + officeType.slice(1)} Space selection</span>
                    </div>
                    <span className="text-[13px] font-mono text-white font-bold">AED {costs.officeFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-start border-b border-white/20 pb-4">
                    <div>
                      <span className="text-[13px] font-bold text-white block font-sans">Agent Advisory & Filing</span>
                      <span className="text-[10.5px] text-[#faf9f0] font-sans block">Government portal handling under Scale</span>
                    </div>
                    <span className="text-[13px] font-mono text-white font-bold">AED {costs.adminFee.toLocaleString()}</span>
                  </div>

                  {/* Total Summary */}
                  <div className="pt-2">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[10.5px] uppercase font-mono text-white/90 font-bold block">Fully Estimated Budget</span>
                        <span className="text-[11px] text-white/80 block font-serif italic">Valid for 30 business days</span>
                      </div>
                      <span className="text-[30px] font-mono font-bold text-white leading-none tracking-tight">
                        AED {costs.total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Quick trust metrics */}
                <div className="border-t border-white/20 pt-5 space-y-3.5 relative z-10">
                  <div className="flex items-center space-x-2.5 text-[11px] text-white/90 font-sans font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#faf9f0] shrink-0" />
                    <span>Zero hidden compliance filing costs. Full breakdown transparently certified for <strong>{leadName}</strong>.</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 font-sans">
                    <button
                      id="calc_estimate_pdf"
                      onClick={handleApplyQuotation}
                      className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11.5px] py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1 transition-colors font-semibold"
                    >
                      <Mail className="w-3.5 h-3.5 text-white" />
                      <span>Email Quote</span>
                    </button>
                    <button
                      id="calc_estimate_consult"
                      onClick={openContactModal}
                      className="bg-white hover:bg-zinc-50 text-gold-700 text-[11.5px] font-bold py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1 transition-colors"
                    >
                      <span>Book Partner</span>
                    </button>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

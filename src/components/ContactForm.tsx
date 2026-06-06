"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Sparkles, 
  FileText 
} from 'lucide-react';
import { CostBreakdown } from '../types';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setLoading(true);
    // Simulate high-end submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-2xl p-6 sm:p-10 relative">
      {isSubmitted ? (
        <div id="contact_success_block" className="text-center py-16 space-y-6 animate-fade-in">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 mx-auto border border-gold-300/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-[26px] font-semibold text-zinc-900 tracking-tight">Consultation Secured</h3>
            <p className="text-[14px] text-zinc-500 max-w-sm mx-auto font-sans leading-relaxed">
              Welcome to Scale Partners. A Senior Onboarding Director has been assigned to your file and will contact you via WhatsApp / email inside 15 minutes.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="text-[11px] font-mono text-zinc-400 flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Response SLA: 15 Mins</span>
            </div>
            {onClose && (
              <button 
                id="contact_success_close"
                onClick={onClose}
                className="bg-brand-grad text-white text-[12.5px] font-bold px-5 py-2.5 rounded-lg transition-all border-0 hover:scale-[1.015]"
              >
                Close Panel
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Booking Panel */}
          <div id="contact_main_form" className="lg:col-span-7 space-y-6">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-bold block">Secure Allocation</span>
              <h2 className="font-serif text-[28px] font-semibold text-zinc-900 tracking-tight">Speak with a Partner</h2>
              <p className="text-[13px] text-zinc-500 font-sans">
                Initiate security clearances, tax mapping, and corporate setups directly under Scale guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-zinc-400 block font-semibold">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Alexander Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-gold-500 text-[13.5px] p-3 rounded-xl transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-zinc-400 block font-semibold">Contact Email</label>
                  <input 
                    type="email"
                    required
                    placeholder="alexander@mercerholdings.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-gold-500 text-[13.5px] p-3 rounded-xl transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-zinc-400 block font-semibold">Active Phone / WhatsApp Number</label>
                <input 
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-gold-500 text-[13.5px] p-3 rounded-xl transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-zinc-400 block font-semibold">Operational notes / Sector specifications</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Establishing a tech-funding holding structure seeking a 10-Year Golden Visa pathway."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-gold-500 text-[13.5px] p-3 rounded-xl transition-all resize-none"
                />
              </div>

              <button 
                id="contact_form_submit"
                type="submit"
                disabled={loading}
                className="w-full bg-brand-grad text-white font-bold py-3.5 rounded-xl text-[14px] transition-all flex items-center justify-center space-x-2 shadow-md border-0 hover:scale-[1.015]"
              >
                {loading ? (
                  <span className="font-mono text-[12px] uppercase tracking-widest text-zinc-400">Allocating Director...</span>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4 text-gold-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar / Preloaded Quote Details if any */}
          <div className="lg:col-span-5 bg-gold-50/20 border border-gold-300/10 rounded-xl p-5 sm:p-6 space-y-6">
            
            {preloadedQuote && preloadedSelections ? (
              <div id="contact_quotation_review" className="space-y-4">
                <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-gold-600 font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Configured License Quote</span>
                </div>

                <div className="space-y-3 border-t border-zinc-100/80 pt-4">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-zinc-500">Jurisdiction</span>
                    <span className="text-zinc-800 font-semibold">{preloadedSelections.jurisdiction}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-zinc-500">Industry License</span>
                    <span className="text-zinc-800 font-semibold">{preloadedSelections.activity}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-zinc-500">Visas count</span>
                    <span className="text-zinc-800 font-semibold">{preloadedSelections.visas} Residents</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-zinc-500">Workspace Option</span>
                    <span className="text-zinc-800 font-semibold">{preloadedSelections.office}</span>
                  </div>
                </div>

                <div className="border-t border-zinc-100/80 pt-4 mt-4 flex justify-between items-baseline">
                  <span className="text-[12px] font-bold text-zinc-700">Estimated Total</span>
                  <span className="text-[20px] font-mono font-bold text-gold-600">AED {preloadedQuote.total.toLocaleString()}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-gold-600 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sovereign Standard SLAs</span>
                </div>

                <div className="space-y-4 border-t border-zinc-100/80 pt-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[13px] font-semibold text-zinc-900">15-Min Response SLA</h4>
                      <p className="text-[11.5px] text-zinc-550 leading-relaxed">Our partner desk is connected directly with immigration and DET officers under active SLAs.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[13px] font-semibold text-zinc-900">VIP Private Suites</h4>
                      <p className="text-[11.5px] text-zinc-550 leading-relaxed">Complimentary chauffeur pick-up service during medical screenings and fingerprint biometric clearances.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-zinc-100 text-center sm:text-left space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">Corporate Headquarters</span>
              <p className="text-[11.5px] text-zinc-500 font-sans leading-relaxed">
                Scale Partners Corporate Advisory<br />
                Tower 3, The Boulevard Chambers,<br />
                Downtown Dubai, United Arab Emirates
              </p>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

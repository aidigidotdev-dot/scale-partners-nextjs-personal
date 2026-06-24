/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Sliders, 
  Building2, 
  Sparkles, 
  Globe, 
  Users, 
  Check, 
  HelpCircle, 
  Briefcase, 
  ShieldCheck, 
  DollarSign, 
  ChevronRight, 
  Building,
  Flag,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { sendLeadEmail } from '../lib/leadEmail';

interface FreeZone {
  id: string;
  name: string;
  location: string;
  startingPrice: number;
  setupTime: string;
  visaCost: number;
  keyBenefit: string;
  pros: string[];
  physicalAuditRequired: boolean;
  score: number;
  bestFor: string;
}

interface MatchmakerToolProps {
  onSelectSetup: (setupName: string, estimatedCost: number) => void;
  openContactModal: () => void;
}

export default function MatchmakerTool({ onSelectSetup, openContactModal }: MatchmakerToolProps) {
  // Free Zones Reference Data
  const freeZones: FreeZone[] = [
    {
      id: 'meydan',
      name: 'Meydan Free Zone',
      location: 'Dubai (Meydan Hotel)',
      startingPrice: 12500,
      setupTime: '2-3 Days',
      visaCost: 3500,
      keyBenefit: 'Exclusive digital setups, Wio pre-approvals, premium central Dubai hotel context.',
      pros: ['100% remote instant setup', 'Wio Premium corporate corridor', 'Up to 3,500 activities bundled'],
      physicalAuditRequired: false,
      score: 9.8,
      bestFor: 'E-Commerce, Technology, Digital Media'
    },
    {
      id: 'ifza',
      name: 'IFZA Dubai',
      location: 'Dubai (Silicon Oasis)',
      startingPrice: 13900,
      setupTime: '3-4 Days',
      visaCost: 3750,
      keyBenefit: 'Multi-year advance registration discounts and optimal asset-protecting holding company cells.',
      pros: ['Flexible resident staff visa upgrades', 'Exempt from submitting yearly audits', 'No upfront capital proof'],
      physicalAuditRequired: false,
      score: 9.4,
      bestFor: 'General Trading, B2B, Holding Groups'
    },
    {
      id: 'dmcc',
      name: 'DMCC (Dubai Multi Commodities)',
      location: 'Dubai (JLT - Downtown South)',
      startingPrice: 26000,
      setupTime: '8-10 Days',
      visaCost: 4200,
      keyBenefit: 'Ecosystem authority for Commodities, Precious Metals, & Cryptocurrency clusters.',
      pros: ['Sovereign global prestige', 'Direct early VC networking avenues', 'Highly favored by tier-1 banks'],
      physicalAuditRequired: true,
      score: 9.6,
      bestFor: 'Crypto, Energy Trading, Commodities'
    },
    {
      id: 'shams',
      name: 'Shams (Sharjah Media City)',
      location: 'Sharjah (20 mins to Dubai Airport)',
      startingPrice: 8900,
      setupTime: '1-2 Days',
      visaCost: 3200,
      keyBenefit: 'Cheapest active license packages in the UAE for creators and freelancers.',
      pros: ['Lowest initial entry barrier', '6 staff visas on virtual flexi-desk plans', 'Fast 24-hour setup approvals'],
      physicalAuditRequired: false,
      score: 9.2,
      bestFor: 'Creators, Freelancers, Solopreneurs'
    },
    {
      id: 'rakez',
      name: 'RAKEZ (Ras Al Khaimah Economic Zone)',
      location: 'Ras Al Khaimah (45 mins to Dubai)',
      startingPrice: 11200,
      setupTime: '4-5 Days',
      visaCost: 3100,
      keyBenefit: 'Premium heavy manufacturing, assembly, and custom logistics infrastructure.',
      pros: ['Affordable physical warehousing', 'Dual-licensure domestic paths', 'Cheapest work permit renewals'],
      physicalAuditRequired: true,
      score: 9.0,
      bestFor: 'Logistics, Heavy Assembly, Production'
    },
    {
      id: 'dwtc',
      name: 'DWTC (Dubai World Trade Centre)',
      location: 'Dubai (Sheikh Zayed Road)',
      startingPrice: 21000,
      setupTime: '5-7 Days',
      visaCost: 3900,
      keyBenefit: 'Sheikh Zayed Road physical office suites adjacent to regional convention networks.',
      pros: ['Premium multinational prestige', 'Accelerated tier-1 investor KYC', 'Flexible convention suite layouts'],
      physicalAuditRequired: true,
      score: 9.3,
      bestFor: 'Event Agencies, Financial Advisories'
    }
  ];

  // Form State variables
  const [activity, setActivity] = useState<string>('tech');
  const [urgency, setUrgency] = useState<string>('soon');
  const [partnersCount, setPartnersCount] = useState<string>('1');
  const [nationality, setNationality] = useState<string>('west');
  const [officeType, setOfficeType] = useState<string>('virtual');

  // Lead Generation states (Mandatory decides result revealing)
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [leadError, setLeadError] = useState<string>('');
  const [leadCompleted, setLeadCompleted] = useState<boolean>(false);
  const [showLeadForm, setShowLeadForm] = useState<boolean>(false);

  // Recommendation Output State
  const [recommendation, setRecommendation] = useState<{
    zoneType: 'mainland' | 'freezone';
    bestFreeZone: FreeZone;
    reason: string;
    totalEstCost: number;
    showResult: boolean;
  } | null>(null);

  // Run matching logic
  const handleMatch = () => {
    let zoneType: 'mainland' | 'freezone' = 'freezone';
    let bestFzId = 'meydan';
    let explanation = '';

    // Step 1: Mainland vs Free Zone determination
    if (activity === 'retail' || officeType === 'physical_retail') {
      zoneType = 'mainland';
      explanation = 'Based on your requirement for local physical retail channels or a standard brick-and-mortar face in local residential areas, a Mainland (Dubai DET) setup is legally required. Free Zones operate under dual-custom lines and restrict physical sales inside the domestic UAE marketplace.';
    } else {
      zoneType = 'freezone';
      explanation = 'A Free Zone setup is highly recommended for your corporate profile. It ensures 100% foreign equity shielding, exempts you from committing local partners, offers direct corporate tax advantages under officially designated free zones, and bypasses local municipal warehouse constraints.';
    }

    // Step 2: If Free Zone, find the optimal match
    if (activity === 'tech' || activity === 'consulting') {
      if (officeType === 'physical_office') {
        bestFzId = 'dmcc';
        explanation += ' Within the Free Zone ecosystem, DMCC is selected due to your preference for physical office suites. Located directly in Jumeirah Lake towers, DMCC features a massive technology, crypto, and service hub that local and global banking officers hold in very high regard.';
      } else {
        bestFzId = 'meydan';
        explanation += ' Meydan Free Zone is the perfect match. Starting at just 12,500 AED, it allows professional consultancies and digital tech platforms to operate completely remotely step-free. Plus, Meydan offers instant pre-integrated corporate bank account lanes with Wio Business.';
      }
    } else if (activity === 'media') {
      bestFzId = 'shams';
      explanation += ' Sharjah Media City (Shams) represents your absolute most cost-effective path. It provides creators and agency developers with an instant 24-48h license approval starting at 8,900 AED and permits structuring up to 6 remote staff visas without physical office costs.';
    } else if (activity === 'holding') {
      bestFzId = 'ifza';
      explanation += ' IFZA Dubai is your premier alignment. It is highly optimized for asset-holding conglomerates, exempting founders from submitting annual corporate financial audits, requiring zero local partner verification, and offering up to 30% advance registration discounts.';
    } else if (activity === 'crypto') {
      bestFzId = 'dmcc';
      explanation += ' DMCC (Dubai Multi Commodities Centre) is the gold standard for blockchain and web3 development. It features a specialized Crypto Valley ecosystem with customized licensing rules, direct investor networks, and exceptional corporate prestige.';
    } else if (activity === 'logistics' || activity === 'industrial') {
      bestFzId = 'rakez';
      explanation += ' RAKEZ (Ras Al Khaimah Economic Zone) is recommended. It is explicitly set up to accommodate heavy assembly, manufacturing plants, and storage warehouses. RAKEZ offers physical industrial leasing plots that are up to 60% cheaper than central Dubai ports.';
    } else {
      // Trading
      if (partnersCount === '3') {
        bestFzId = 'ifza';
        explanation += ' IFZA is selected for your multi-partner trading architecture. It simplifies corporate governance filings and offers modular warehouse extensions without requiring audited fiscal report declarations.';
      } else {
        bestFzId = 'meydan';
        explanation += ' Meydan Free Zone is recommended for standard trading, as they allow choose up to 3 activity types (including general e-commerce and wholesale trade) under a single zero-upcharge base fee.';
      }
    }

    // Additional modifiers based on nationality, urgency, and partners
    if (urgency === 'urgent' && zoneType === 'freezone') {
      if (bestFzId !== 'shams' && bestFzId !== 'meydan') {
        explanation += ' Since you selected an urgent 24-48 hour launch timeline, our licensed agents will fast-track this registration synchronously to secure your registry code in record speed.';
      }
    }

    if (nationality === 'uae_gcc') {
      explanation += ' Note: As a GCC national, you are also eligible for specialized government-sponsored fee credits and accelerated local business license allocations.';
    }

    const matchedFz = freeZones.find(fz => fz.id === bestFzId) || freeZones[0];

    // Estimate costs
    let calculatedCost = matchedFz.startingPrice;
    if (partnersCount === '2') {
      calculatedCost += (matchedFz.visaCost + 1500); 
    } else if (partnersCount === '3') {
      calculatedCost += (matchedFz.visaCost * 2) + 2500;
    }

    setRecommendation({
      zoneType,
      bestFreeZone: matchedFz,
      reason: explanation,
      totalEstCost: zoneType === 'mainland' ? 18500 : calculatedCost,
      showResult: true
    });

    if (!leadCompleted) {
      setShowLeadForm(true);
    }
  };

  const handleApply = () => {
    if (!recommendation) return;
    const name = recommendation.zoneType === 'mainland' 
      ? 'Dubai mainland Corporate Entity' 
      : `${recommendation.bestFreeZone.name} Strategic setup`;
    onSelectSetup(name, recommendation.totalEstCost);
    openContactModal();
  };

  return (
    <section id="corporate_matchmaker_section" className="py-20 bg-[#070b13] text-white relative overflow-hidden border-t border-zinc-800">
      
      {/* Decorative Radial Background Shadows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#22C55E]/10 blur-[155px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center space-x-1 bg-[#22C55E]/10 text-[#22C55E] px-3.5 py-1 rounded-full border border-[#22C55E]/25 font-mono text-[10.5px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Scale Partners Decision Engine</span>
          </span>
          <h2 className="font-serif text-[28px] sm:text-[38px] font-semibold text-white tracking-tight leading-none">
            Sovereign UAE Matchmaker Tool
          </h2>
          <p className="text-[13px] sm:text-[14.5px] text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Answer 5 simple structural questions to determine if your enterprise matches a <strong className="text-white">Mainland</strong> authority or which <strong className="text-white">Free Zone</strong> guarantees maximum strategic advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Matchmaker Wizard (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/[0.04] flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Question 1: Activity */}
              <div className="space-y-2.5">
                <label className="text-[12.5px] font-serif font-semibold tracking-wide text-zinc-200 flex items-center space-x-1.5">
                  <Briefcase className="w-4 h-4 text-gold-400" />
                  <span>1. What is your primary trade or corporate activity?</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'tech', label: 'Tech / AI / SaaS' },
                    { id: 'consulting', label: 'Consulting / Advisory' },
                    { id: 'media', label: 'Creative / Media / Agency' },
                    { id: 'trading', label: 'General Goods Trading' },
                    { id: 'crypto', label: 'Crypto & Blockchain' },
                    { id: 'holding', label: 'Asset/IP Holding Co' },
                    { id: 'logistics', label: 'Logistics & Assembly' },
                    { id: 'retail', label: 'Local Store / Retail Outlet' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActivity(item.id)}
                      className={`text-left p-2.5 rounded-xl border text-[11.5px] transition-all ${
                        activity === item.id 
                          ? 'border-[#22C55E] bg-brand-grad/15 text-white font-semibold' 
                          : 'border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white bg-slate-950/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Urgency */}
              <div className="space-y-2.5">
                <label className="text-[12.5px] font-serif font-semibold tracking-wide text-zinc-200 flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>2. What is your desired corporate release timeline?</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'urgent', label: '24-48 Hours' },
                    { id: 'soon', label: '1 - 2 Weeks' },
                    { id: 'explore', label: 'Just Planning' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setUrgency(item.id)}
                      className={`text-center p-2.5 rounded-xl border text-[11px] transition-all ${
                        urgency === item.id 
                          ? 'border-[#22C55E] bg-brand-grad/15 text-white font-semibold' 
                          : 'border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white bg-slate-950/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Shareholders / Partners */}
              <div className="space-y-2.5">
                <label className="text-[12.5px] font-serif font-semibold tracking-wide text-zinc-200 flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-gold-400" />
                  <span>3. How many partners/shareholders are in the entity?</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1', label: 'Single Founder' },
                    { id: '2', label: '2 Strategic Partners' },
                    { id: '3', label: '3+ Shareholders / Corp' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setPartnersCount(item.id)}
                      className={`text-center p-2.5 rounded-xl border text-[11.5px] transition-all ${
                        partnersCount === item.id 
                          ? 'border-[#22C55E] bg-brand-grad/15 text-white font-semibold' 
                          : 'border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white bg-slate-950/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Nationality Profile */}
              <div className="space-y-2.5">
                <label className="text-[12.5px] font-serif font-semibold tracking-wide text-zinc-200 flex items-center space-x-1.5">
                  <Flag className="w-4 h-4 text-gold-400" />
                  <span>4. What is the manager/UBO\'s primary nationality block?</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'west', label: 'EU / UK / US / CA' },
                    { id: 'uae_gcc', label: 'UAE / GCC National' },
                    { id: 'asia', label: 'India / Pakistan' },
                    { id: 'other', label: 'Other International' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setNationality(item.id)}
                      className={`text-center p-2 rounded-xl border text-[11px] transition-all ${
                        nationality === item.id 
                          ? 'border-[#22C55E] bg-brand-grad/15 text-white font-semibold' 
                          : 'border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white bg-slate-950/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 5: Office strategy */}
              <div className="space-y-2.5">
                <label className="text-[12.5px] font-serif font-semibold tracking-wide text-zinc-200 flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-gold-400" />
                  <span>5. What is your office space / physical desk constraint?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'virtual', label: 'Virtual Flexi Desk (100% Remote)' },
                    { id: 'physical_office', label: 'Private Physical Office Suite' },
                    { id: 'physical_retail', label: 'Local Retail Shopfront (Mainland)' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setOfficeType(item.id)}
                      className={`text-left p-2.5 rounded-xl border text-[11px] transition-all leading-snug ${
                        officeType === item.id 
                          ? 'border-[#22C55E] bg-brand-grad/15 text-white font-semibold' 
                          : 'border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white bg-slate-950/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <button
              onClick={handleMatch}
              className="mt-6 w-full py-4 rounded-xl bg-brand-grad hover:opacity-95 text-white text-[13.5px] font-bold shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center space-x-2 border-0"
            >
              <span>Compile Recommendation Matrix</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

          </div>

          {/* Results Block / Sidebar Callout (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {!recommendation?.showResult ? (
              <div className="h-full min-h-[350px] bg-gradient-to-br from-[#0c152a] via-[#09101f] to-[#060a12] border border-[#22C55E]/25 rounded-2xl p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center text-gold-400">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="text-[20px] font-serif font-semibold text-white tracking-tight">
                    Sovereign Engine Standby
                  </h3>
                  <p className="text-[12.5px] text-zinc-400 leading-relaxed font-sans">
                    Once you submit your primary corporate guidelines, our analytical engine translates current ministerial regulatory logs in parallel to isolate your highest growth, lowest cost gateway.
                  </p>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-xl border border-white/[0.03] space-y-3 text-[11.5px] text-zinc-400 leading-relaxed text-left">
                  <span className="text-[9.5px] font-mono tracking-wider text-gold-400 font-bold uppercase block">Compliance Guards Engaged:</span>
                  <p>✓ 100% Corporate Tax Safe Guards</p>
                  <p>✓ Fast-track Wio Bank Pre-cleared Corridors</p>
                  <p>✓ Double Tax Treaty Shield compliance verification</p>
                </div>
              </div>
            ) : showLeadForm && !leadCompleted ? (
              <div className="h-full bg-gradient-to-br from-[#0c152a] via-[#09101f] to-[#060a12] border border-[#22C55E]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-5 animate-fade-in text-left">
                <div className="space-y-1.5 border-b border-white/[0.05] pb-4">
                  <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest font-bold block">Sovereign Compliance Gate</span>
                  <h3 className="font-serif text-[19px] font-semibold text-white tracking-tight">Generate Matchmaker Report</h3>
                  <p className="text-[11.5px] text-zinc-300 leading-relaxed font-sans">
                    Submit your primary corporate credentials to unlock the recommended jurisdiction report and live pricing matrix.
                  </p>
                </div>

                {leadError && (
                  <div className="p-3 bg-red-500/15 border border-red-500/35 text-red-200 rounded-xl text-[11px] font-medium leading-normal">
                    {leadError}
                  </div>
                )}

                <div className="space-y-3 font-sans">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase font-semibold block">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-950 border border-white/[0.1] rounded-xl px-4 py-3 text-[12px] text-white focus:outline-none focus:border-[#22C55E] transition-all placeholder:text-zinc-600"
                      placeholder="e.g. Liam Sterling"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1 session-no-gap">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase font-semibold block">Corporate Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-950 border border-white/[0.1] rounded-xl px-4 py-3 text-[12px] text-white focus:outline-none focus:border-[#22C55E] transition-all placeholder:text-zinc-600"
                      placeholder="e.g. liam@sterling-holdings.co"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1 session-no-gap">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase font-semibold block">Mobile Number</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-950 border border-white/[0.1] rounded-xl px-4 py-3 text-[12px] text-white focus:outline-none focus:border-[#22C55E] transition-all placeholder:text-zinc-600"
                      placeholder="e.g. +971 50 123 4567"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  id="match_unlock_results_btn"
                  onClick={() => {
                    if (!leadName.trim() || !leadEmail.trim() || !leadPhone.trim()) {
                      setLeadError('Contact coordinates are vital to decrypt compliance recommendation logs.');
                      return;
                    }
                    setLeadError('');
                    void sendLeadEmail({
                      source: 'Free Zone Matchmaker Lead',
                      name: leadName,
                      email: leadEmail,
                      phone: leadPhone,
                      fields: {
                        Activity: activity,
                        Urgency: urgency,
                        PartnersCount: partnersCount,
                        Nationality: nationality,
                        OfficeType: officeType,
                        RecommendedType: recommendation?.zoneType,
                        RecommendedZone: recommendation?.zoneType === 'freezone' ? recommendation.bestFreeZone.name : 'Dubai Mainland',
                        RecommendedLocation: recommendation?.zoneType === 'freezone' ? recommendation.bestFreeZone.location : 'Dubai',
                        EstimatedTotal: recommendation?.totalEstCost ? `AED ${recommendation.totalEstCost.toLocaleString()}` : undefined,
                        Reason: recommendation?.reason,
                      },
                    });
                    setLeadCompleted(true);
                  }}
                  className="w-full py-3 bg-brand-grad hover:opacity-95 text-white rounded-xl text-[12.5px] font-bold tracking-tight transition-transform hover:scale-[1.01] shadow-lg text-center border-0"
                >
                  Unlock Live Recommendation Portfolio
                </button>

                <p className="text-[9px] text-zinc-500 text-center italic font-sans">
                  🛡️ Certified GDPR Safe. Data locked with static jurisdictional agents.
                </p>
              </div>
            ) : (
              <div className="h-full bg-gradient-to-br from-[#0c152a] via-[#09101f] to-[#060a12] border border-[#22C55E]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 animate-fade-in text-left">
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#22C55E] font-bold block mb-1">RECOMMENDED ALIGNMENT</span>
                    <h3 className="font-serif text-[24px] font-semibold text-white tracking-tight capitalize">
                      {recommendation.zoneType === 'mainland' ? 'Sovereign Mainland setup' : `${recommendation.bestFreeZone.name}`}
                    </h3>
                    <p className="text-[11.5px] text-zinc-400">
                      Primary Jurisdiction: <strong className="text-zinc-200 capitalize">{recommendation.zoneType === 'mainland' ? 'Dubai DET Ministry' : `${recommendation.bestFreeZone.location}`}</strong>
                    </p>
                  </div>

                  <div className="bg-[#091a33]/80 p-4 border border-[#22C55E]/10 rounded-xl space-y-1 font-mono text-center">
                    <span className="text-[9px] text-zinc-450 uppercase block">Estimated Setup Cost Pathway</span>
                    <span className="text-[22px] font-bold text-gold-400 font-mono">AED {recommendation.totalEstCost.toLocaleString()}</span>
                    <span className="text-[9.5px] text-zinc-455 block italic">Includes base licensing & primary partner visa allocation</span>
                  </div>

                  <div className="text-[12.5px] text-zinc-300 leading-relaxed bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                    <span className="text-[10px] text-gold-400 uppercase font-bold block mb-1">Advisory Reasoning Match</span>
                    {recommendation.reason}
                  </div>

                  {recommendation.zoneType === 'freezone' && (
                    <div className="grid grid-cols-2 gap-3 text-[11.5px]">
                      <div>
                        <span className="text-zinc-500 block uppercase font-mono text-[9px]">SLA Duration</span>
                        <strong className="text-zinc-200">{recommendation.bestFreeZone.setupTime}</strong>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase font-mono text-[9px]">Audit filing required</span>
                        <strong className="text-zinc-200">{recommendation.bestFreeZone.physicalAuditRequired ? 'Yes (Strict)' : 'No (Exempted)'}</strong>
                      </div>
                    </div>
                  )}

                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setRecommendation(null);
                      setShowLeadForm(false);
                    }}
                    className="text-[11px] text-zinc-400 hover:text-white transition-colors"
                  >
                    ← Mod requirements
                  </button>
                  <button
                    onClick={handleApply}
                    className="bg-brand-grad text-white font-bold text-[12.5px] px-5 py-3 rounded-xl hover:opacity-95 transition-all border-0"
                  >
                    Lock & Apply Setup
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* Live Free Zones Comparison Table (Matrix of benefits) - LIGHT BACKGROUND & THIN 1PX BORDERS & RADIAL SHADOWS */}
        <div id="free_zone_matrix_container" className="mt-16 p-6 sm:p-10 bg-white border border-zinc-200/80 rounded-3xl text-left space-y-8 shadow-[0_24px_70px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {/* Subtle Radial shadow spotlight around the grid */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#22C55E]/[0.05] blur-[100px]"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-gold-400/[0.04] blur-[120px]"></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-200/60 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-wider uppercase text-gold-600 font-bold block">SOVEREIGN DATABASE CAPABILITIES</span>
              <h3 className="font-serif text-[24px] font-semibold text-zinc-900 tracking-tight">Active Free Zone Comparative Matrix</h3>
            </div>
            <p className="text-[12.5px] text-zinc-500 max-w-md leading-relaxed font-sans">
              Direct comparisons of the standard legal benefits across major UAE economic zones registered within our executive broker panel.
            </p>
          </div>

          <div className="relative z-10 overflow-x-auto rounded-xl border border-zinc-200/70 bg-zinc-55/10">
            <table className="w-full text-left border-collapse min-w-[800px] text-[12.5px]">
              <thead>
                <tr className="border-b border-zinc-200/85 bg-zinc-50/80 text-[10.5px] font-mono uppercase text-zinc-500 select-none">
                  <th className="py-4 px-5">Economic Zone</th>
                  <th className="py-4 px-5">Target Activity Strengths</th>
                  <th className="py-4 px-5">Starting price</th>
                  <th className="py-4 px-5">Registration SLA</th>
                  <th className="py-4 px-5">Yearly Audit Exemption</th>
                  <th className="py-4 px-5">Standard Visa charge</th>
                  <th className="py-4 px-5">Key Administrative Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-150 text-[12.5px] text-zinc-700 font-sans">
                {freeZones.map(fz => (
                  <tr key={fz.id} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="py-4 px-5 font-bold text-zinc-900 flex items-center space-x-1.5 border-b-0 whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                      <span>{fz.name}</span>
                    </td>
                    <td className="py-4 px-5 text-zinc-500 leading-snug">{fz.bestFor}</td>
                    <td className="py-4 px-5 font-mono text-zinc-900 font-bold">AED {fz.startingPrice.toLocaleString()}</td>
                    <td className="py-4 px-5 font-mono text-zinc-650">{fz.setupTime}</td>
                    <td className="py-4 px-5">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                        fz.physicalAuditRequired 
                          ? 'bg-amber-50 text-amber-705 border-amber-200/60' 
                          : 'bg-emerald-50 text-emerald-705 border-emerald-200/60'
                      }`}>
                        {fz.physicalAuditRequired ? 'Mandatory Submission' : 'Exempted Authority'}
                      </span>
                    </td>
                    <td className="py-4 px-5 font-mono text-zinc-500">AED {fz.visaCost.toLocaleString()}</td>
                    <td className="py-4 px-5 text-[11.5px] text-zinc-550 italic font-sans max-w-[220px] truncate" title={fz.keyBenefit}>
                      {fz.keyBenefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="relative z-10 text-[9.5px] text-zinc-400 uppercase font-mono tracking-wider italic text-center pt-2">
            * Standardized pricing matrices strictly mapped coordinates. Registered authorized provider system ID No. #89210-DUBAI.
          </p>
        </div>

      </div>

    </section>
  );
}

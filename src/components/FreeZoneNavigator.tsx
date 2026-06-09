/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Building2, 
  Check, 
  HelpCircle, 
  Sparkles, 
  DollarSign, 
  Users, 
  Building, 
  ExternalLink,
  Sliders,
  ChevronRight,
  ShieldCheck,
  Percent,
  Search,
  BookOpen
} from 'lucide-react';

interface FreeZone {
  id: string;
  name: string;
  location: string;
  logoText: string;
  bestFor: string;
  startingPrice: number;
  setupTime: string;
  visaCost: number;
  keyBenefit: string;
  pros: string[];
  cons: string[];
  cheapestActivities: string;
  industryMatch: string[];
  physicalAuditRequired: boolean;
  score: number;
}

interface FreeZoneNavigatorProps {
  onSelectFreeZone: (freeZoneName: string, estimatedCost: number) => void;
  openContactModal: () => void;
}

export default function FreeZoneNavigator({ onSelectFreeZone, openContactModal }: FreeZoneNavigatorProps) {
  // Free Zones Data
  const freeZones: FreeZone[] = [
    {
      id: 'meydan',
      name: 'Meydan Free Zone',
      location: 'Dubai (Meydan Hotel)',
      logoText: 'MFZ',
      bestFor: 'E-Commerce, Consulting, Tech Startups, Digital Media',
      startingPrice: 12500,
      setupTime: '2-3 Business Days',
      visaCost: 3500,
      keyBenefit: 'Exclusive digital setups, Wio Bank priority pre-approvals, and premium Downtown-adjacent address.',
      pros: [
        '100% remote instant setup without physical medical initial steps',
        'Direct digital integration with Wio Business & corporate bank corridors',
        'Prestigious address matching within the Meydan Racecourse Hotel complex',
        'Includes over 3,500 business activities under a single license'
      ],
      cons: [
        'No direct warehouse physical storage or light industrial solutions'
      ],
      cheapestActivities: 'Digital marketing, consulting, SaaS development & e-commerce (starting at 12,500 AED, activity charges are grouped as zero-cost additions).',
      industryMatch: ['consulting', 'ecommerce', 'tech'],
      physicalAuditRequired: false,
      score: 9.8
    },
    {
      id: 'ifza',
      name: 'IFZA (International Free Zone Authority)',
      location: 'Dubai (Silicon Oasis)',
      logoText: 'IFZA',
      bestFor: 'General Trading, B2B Services, Holdco Structures',
      startingPrice: 13900,
      setupTime: '3-4 Business Days',
      visaCost: 3750,
      keyBenefit: 'Most flexible workspace upgrade pathways and popular holding company architecture frameworks.',
      pros: [
        'Highly popular with European and UK corporate founders',
        'Extremely flexible visa packages (upgrade without changing license core)',
        'Permits multi-year advance licensing discounts (up to 30% reduction)',
        'Exempt from submitting yearly corporate financial audit records to registrar'
      ],
      cons: [
        'Located in outbound Dubai outskirts (greater transit distance to central DIFC/Downtown)'
      ],
      cheapestActivities: 'Sourcing, general advisory, corporate holding, and import/export general trading (general license bundle starts at 13,900 AED).',
      industryMatch: ['trading', 'consulting', 'holding'],
      physicalAuditRequired: false,
      score: 9.4
    },
    {
      id: 'dmcc',
      name: 'DMCC (Dubai Multi Commodities Centre)',
      location: 'Dubai (JLT - Downtown South)',
      logoText: 'DMCC',
      bestFor: 'Commodities, Crypto, Gold, Global Corporate HQ',
      startingPrice: 26000,
      setupTime: '8-10 Business Days',
      visaCost: 4200,
      keyBenefit: 'Voted World\'s Best Free Zone. Highest global stature and specialized diamond/gold/crypto trade floors.',
      pros: [
        'Unrivaled international prestige and reputation among international tier-1 banks',
        'Dedicated physical ecosystems for Crypto, Gaming, Tea, Coffee, and Gold',
        'Excellent high-end office suites situated in Jumeirah Lake Towers sector',
        'Strong network for raising early-stage venture capital and commodity debt'
      ],
      cons: [
        'Substantially higher initial registration and compliance maintenance fees',
        'Physical office lease or physical flexi-box share is strictly mandatory',
        'Submission of yearly audited corporate financials is mandatory'
      ],
      cheapestActivities: 'High-volume trading and crypto service platforms (activities carry premium regulatory approvals but include global network clearance).',
      industryMatch: ['crypto', 'trading', 'tech'],
      physicalAuditRequired: true,
      score: 9.6
    },
    {
      id: 'shams',
      name: 'Shams (Sharjah Media City)',
      location: 'Sharjah (20 mins to Dubai Airport)',
      logoText: 'SHAMS',
      bestFor: 'Media Production, Creators, Freelancers, Solopreneurs',
      startingPrice: 8900,
      setupTime: '1-2 Business Days',
      visaCost: 3200,
      keyBenefit: 'Cheapest active license packages in the UAE. Turnkey e-commerce and media setup with minimal red tape.',
      pros: [
        'Lowest overall entry barrier starting cost for solo founders and freelancers',
        'Super-fast 24h approval on primary commercial and creative activities',
        'Allows selecting up to 6 visas on a cost-effective virtual flexi-desk plan',
        'No physical bank letter or previous bank statement references needed to initiate'
      ],
      cons: [
        'Company registration is based in Sharjah, which can slow down certain local Dubai-tier bank setups'
      ],
      cheapestActivities: 'Copywriting, software design, influencer management, photography, and simple media trading start as low as 8,900 AED.',
      industryMatch: ['media', 'consulting', 'ecommerce'],
      physicalAuditRequired: false,
      score: 9.2
    },
    {
      id: 'rakez',
      name: 'RAKEZ (Ras Al Khaimah Economic Zone)',
      location: 'Ras Al Khaimah (45 mins to Dubai)',
      logoText: 'RAK',
      bestFor: 'Manufacturing, Custom Engineering, Distribution, Storage',
      startingPrice: 11200,
      setupTime: '4-5 Business Days',
      visaCost: 3100,
      keyBenefit: 'Most affordable large-scale industrial warehouses and dual-license options.',
      pros: [
        'Bespoke, highly affordable physical manufacturing plants and custom land leases',
        'Dual-licensing capability (operate inside the Freezone and a domestic Mainland branch)',
        'Significantly cheaper worker visa fees compared to central Dubai authorities',
        'Ideal logistics pipeline linked direct to Saqr Port (region\'s largest bulk port)'
      ],
      cons: [
        'Geographically situated 1 hour north of Dubai, requiring long travel for city meetings'
      ],
      cheapestActivities: 'Assembly, packing, metal fabrication, logistics brokering, and heavy general supply licenses.',
      industryMatch: ['industrial', 'trading'],
      physicalAuditRequired: true,
      score: 9.0
    },
    {
      id: 'dwtc',
      name: 'DWTC (Dubai World Trade Centre)',
      location: 'Dubai (Sheikh Zayed Road)',
      logoText: 'DWTC',
      bestFor: 'Events Providers, Regional Offices, High-End Business Advisory',
      startingPrice: 21000,
      setupTime: '5-7 Business Days',
      visaCost: 3900,
      keyBenefit: 'Prime position directly adjoining the UAE\'s largest commercial convention center.',
      pros: [
        'Ultra-prime geography on Sheikh Zayed Road directly in the business heart of Dubai',
        'Favorable regulatory framework matching high-level multinational service groups',
        'Flexible options for large-scale multi-level office complexes',
        'Excellent networking positioning for hosting and sponsoring international exhibitions'
      ],
      cons: [
        'Premium rental fee parameters make desk space and office setups quite costly'
      ],
      cheapestActivities: 'Event coordination, commercial advisory, luxury travel consultations, and global holding groups.',
      industryMatch: ['consulting', 'holding'],
      physicalAuditRequired: true,
      score: 9.3
    }
  ];

  // Tab State
  const [activeTab, setActiveTab] = useState<'chooser' | 'recommender' | 'comparison'>('recommender');

  // Chooser State
  const [selectedFreeZoneId, setSelectedFreeZoneId] = useState<string>('meydan');
  const selectedZone = freeZones.find(z => z.id === selectedFreeZoneId) || freeZones[0];

  // Recommender Wizard State
  const [industry, setIndustry] = useState<string>('tech');
  const [visaCount, setVisaCount] = useState<string>('0');
  const [officeStyle, setOfficeStyle] = useState<string>('virtual');
  const [budgetTier, setBudgetTier] = useState<string>('cost');
  const [recommendedZone, setRecommendedZone] = useState<FreeZone | null>(null);
  const [recomReason, setRecomReason] = useState<string>('');

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Handle recommendation calculations
  const calculateRecommendation = () => {
    let matchId = 'meydan';
    let explanation = '';

    if (industry === 'tech') {
      if (budgetTier === 'cost') {
        matchId = 'meydan';
        explanation = 'Meydan is the absolute optimal choice. It provides virtual desk setups in a premium location at 12,500 AED. Tech setups do not require physical offices here, and Meydan offers Wio Bank priority APIs, ensuring your tech business secures a corporate bank IBAN in record speed.';
      } else {
        matchId = 'dmcc';
        explanation = 'Since you seek a higher budget plan, DMCC is the perfect match. Located directly in JLT, DMCC hosts a thriving Crypto and Gaming Centre. It will elevate your venture\'s prestige and unlock access to local venture funds, despite requiring physical desk leases.';
      }
    } else if (industry === 'media') {
      matchId = 'shams';
      explanation = 'Sharjah Media City (Shams) is unbeatable for media and creative sectors. Starting at just 8,900 AED, it represents the absolute cheapest licensing pathway in the UAE. Media activities incur no extra compliance duties here, and up to 6 visas can be sponsored remotely on virtual packages.';
    } else if (industry === 'trading') {
      if (budgetTier === 'cost') {
        matchId = 'ifza';
        explanation = 'IFZA (Dubai Silicon Oasis) offers highly cost-effective professional and general trading setups without reporting mandatory audits. If you do not require a physical warehouse right away, IFZA virtual office plans yield superior savings.';
      } else {
        matchId = 'dmcc';
        explanation = 'DMCC represents the gold standard for global trading. If you trade physical commodities or export premium assets, DMCC\'s direct transit hubs and commodity exchanges provide the backing elite global partners expect.';
      }
    } else if (industry === 'industrial') {
      matchId = 'rakez';
      explanation = 'RAKEZ is explicitly designed for industrial activity types. Industrial or assembly licenses are cheaper here, and RAKEZ provides highly affordable physical warehouses and land plots with robust logistics networks linked to Ras Al Khaimah ports.';
    } else if (industry === 'holding') {
      matchId = 'ifza';
      explanation = 'IFZA is highly recommended for asset protection holding corporations. It provides the optimal legal structure to shield intellectual property, global stocks, and real estate, requiring no yearly financial reports and zero local presence.';
    } else {
      // default fallback based on budget
      if (budgetTier === 'cost') {
        matchId = 'shams';
        explanation = 'Based on your requirement for lower fees, Sharjah Media City (Shams) is selected. It features fast 24h approval timelines and cheapest base costs, ensuring you launch operations with minimum upfront capital friction.';
      } else {
        matchId = 'meydan';
        explanation = 'Meydan Free Zone represents the most balanced digital-first Dubai hub. Featuring instant setups, zero audit overheads, and immediate corporate bank connections, it fits modern consultancies perfectly.';
      }
    }

    const zone = freeZones.find(z => z.id === matchId) || freeZones[0];
    
    // Activity pricing warning adjustments
    let actualExplanation = explanation;
    if (officeStyle === 'physical' && zone.id === 'meydan') {
      actualExplanation += ' Note: If you require a physical brick-and-mortar office, we recommend switching to IFZA or DMCC, as Meydan focuses primarily on scalable virtual/shared configurations.';
    } else if (parseInt(visaCount) > 3 && zone.id === 'shams') {
      actualExplanation += ' Additionally, Shams easily scales to accommodate up to 6 virtual desks, meaning you can hire multinational staff at lower visa fees.';
    }

    setRecommendedZone(zone);
    setRecomReason(actualExplanation);
  };

  const handleApplyRecommendation = (zone: FreeZone) => {
    // calculate an estimated custom cost based on selections
    const base = zone.startingPrice;
    const visas = parseInt(visaCount) || 0;
    const visaCost = visas * zone.visaCost;
    const officeCost = officeStyle === 'physical' ? 18000 : 0;
    const estimate = base + visaCost + officeCost;

    onSelectFreeZone(zone.name, estimate);
    openContactModal();
  };

  // Filter free zones for chooser search
  const filteredZones = freeZones.filter(z => 
    z.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    z.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="free_zone_navigator_module" className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm mt-12">
      
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white p-6 sm:p-8 relative">
        <div className="absolute right-6 top-6 opacity-10 pointer-events-none">
          <Sliders className="w-24 h-24 stroke-[1]" />
        </div>
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center space-x-1.5 bg-gold-400/10 text-gold-300 text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-gold-300/25">
            <Sparkles className="w-3 h-3" />
            <span>Scale Partners Intelligence</span>
          </div>
          <h3 className="font-serif text-[24px] sm:text-[28px] font-semibold tracking-tight leading-tight">
            Select, Compare & Recommend UAE Free Zones
          </h3>
          <p className="text-[13px] text-zinc-300 font-sans leading-relaxed">
            There are over 45 Free Zones in the UAE, each with different cost profiles and activity allowances. 
            Use our interactive framework below to map your needs to the most cost-effective authority.
          </p>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-zinc-100 bg-zinc-50/50">
        <button
          id="tab_trigger_recommender"
          onClick={() => { setActiveTab('recommender'); setRecommendedZone(null); }}
          className={`flex-1 py-4 text-center text-[12px] font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 ${
            activeTab === 'recommender' 
              ? 'border-gold-500 text-gold-600 bg-white' 
              : 'border-transparent text-zinc-400 hover:text-zinc-700'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Smart recommender</span>
        </button>
        <button
          id="tab_trigger_chooser"
          onClick={() => setActiveTab('chooser')}
          className={`flex-1 py-4 text-center text-[12px] font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 ${
            activeTab === 'chooser' 
              ? 'border-gold-500 text-gold-600 bg-white' 
              : 'border-transparent text-zinc-400 hover:text-zinc-700'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Browse Free Zones</span>
        </button>
        <button
          id="tab_trigger_comparison"
          onClick={() => setActiveTab('comparison')}
          className={`flex-1 py-4 text-center text-[12px] font-mono uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 ${
            activeTab === 'comparison' 
              ? 'border-gold-500 text-gold-600 bg-white' 
              : 'border-transparent text-zinc-400 hover:text-zinc-700'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Comparison Matrix</span>
        </button>
      </div>

      {/* Content Space */}
      <div className="p-6 sm:p-8 bg-white">
        
        {/* RECOMMENDER TAB */}
        {activeTab === 'recommender' && (
          <div className="space-y-6 animate-fade-in">
            {!recommendedZone ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Form Inputs */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h4 className="text-[14px] font-semibold text-zinc-800">1. Select Primary Industry / Activity Category</h4>
                    <p className="text-[11.5px] text-zinc-400">Certain activity types are significantly cheaper or only available in specific hubs.</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'tech', label: 'Tech / AI / SaaS' },
                        { id: 'ecommerce', label: 'E-Commerce / Retail' },
                        { id: 'trading', label: 'Trading (Physical)' },
                        { id: 'consulting', label: 'Professional Consulting' },
                        { id: 'media', label: 'Creative & Media' },
                        { id: 'holding', label: 'Asset Holding / Stock Holding' },
                        { id: 'industrial', label: 'Logistics & Industrial' }
                      ].map(ind => (
                        <button
                          key={ind.id}
                          onClick={() => setIndustry(ind.id)}
                          className={`text-left p-3 rounded-xl border text-[12.5px] transition-all font-medium ${
                            industry === ind.id 
                              ? 'border-gold-500 bg-gold-50/50 text-gold-600 font-semibold shadow-sm' 
                              : 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white'
                          }`}
                        >
                          {ind.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[14px] font-semibold text-zinc-800">2. Required Visa Sponsorship (Resident Visas)</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: '0', label: 'None (Investor Only)' },
                        { id: '1', label: '1 Visa' },
                        { id: '2', label: '2 Visas' },
                        { id: '5', label: '3 to 6 Visas' }
                      ].map(vis => (
                        <button
                          key={vis.id}
                          onClick={() => setVisaCount(vis.id)}
                          className={`text-center p-2.5 rounded-xl border text-[11.5px] transition-all font-medium ${
                            visaCount === vis.id 
                              ? 'border-gold-500 bg-gold-50/50 text-gold-600 font-semibold shadow-sm' 
                              : 'border-zinc-200 hover:border-zinc-400 text-zinc-700 bg-white'
                          }`}
                        >
                          {vis.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[14px] font-semibold text-zinc-800">3. Workspace Strategy</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setOfficeStyle('virtual')}
                        className={`text-left p-3.5 rounded-xl border transition-all ${
                          officeStyle === 'virtual' 
                            ? 'border-gold-500 bg-gold-50/50 text-gold-600 shadow-sm' 
                            : 'border-zinc-200 hover:border-zinc-300 text-zinc-700'
                        }`}
                      >
                        <span className="font-semibold text-[13px] block">Virtual / Flexi Desk</span>
                        <span className="text-[11px] text-zinc-400 block mt-0.5">Most common. Remote setup with digital address logs. Only pay starting from 0 AED up-charge.</span>
                      </button>
                      <button
                        onClick={() => setOfficeStyle('physical')}
                        className={`text-left p-3.5 rounded-xl border transition-all ${
                          officeStyle === 'physical' 
                            ? 'border-gold-500 bg-gold-50/50 text-gold-600 shadow-sm' 
                            : 'border-zinc-200 hover:border-zinc-300 text-zinc-700'
                        }`}
                      >
                        <span className="font-semibold text-[13px] block">Dedicated Office Suite</span>
                        <span className="text-[11px] text-zinc-400 block mt-0.5">Exclusive physical desk / private partitions. Best for high-growth corporate structures.</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[14px] font-semibold text-zinc-800">4. Targeted Base Budget Profile</h4>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setBudgetTier('cost')}
                        className={`flex-1 py-3 px-4 rounded-xl border text-[12.5px] transition-all font-semibold ${
                          budgetTier === 'cost' 
                            ? 'border-gold-500 bg-gold-50/50 text-gold-600 shadow-sm' 
                            : 'border-zinc-200 hover:border-zinc-300 text-zinc-500'
                        }`}
                      >
                        Cost-Optimal & Fast Setup
                      </button>
                      <button
                        onClick={() => setBudgetTier('premium')}
                        className={`flex-1 py-3 px-4 rounded-xl border text-[12.5px] transition-all font-semibold ${
                          budgetTier === 'premium' 
                            ? 'border-gold-500 bg-gold-50/50 text-gold-600 shadow-sm' 
                            : 'border-zinc-200 hover:border-zinc-300 text-zinc-500'
                        }`}
                      >
                        Premium / High Reputation Hub
                      </button>
                    </div>
                  </div>

                  <button
                    id="trigger_alignment_calc"
                    onClick={calculateRecommendation}
                    className="w-full bg-brand-grad text-white font-bold py-4 rounded-xl text-[13.5px] transition-all flex items-center justify-center space-x-2 shadow-sm hover:scale-[1.015] border-0"
                  >
                    <span>Determine Recommended Jurisdiction Alignment</span>
                    <ChevronRight className="w-4 h-4 text-gold-400" />
                  </button>
                </div>

                {/* Left Side Static Guide and Explanations */}
                <div className="bg-brand-dark-grad rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between text-white shadow-emerald-glow border-0 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl pointer-events-none"></div>
                  <div className="space-y-4 relative z-10 text-left">
                    <div className="flex items-center space-x-2 text-emerald-300 font-bold font-mono text-[11px] uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-450" />
                      <span>Registry Regulatory Safeguards</span>
                    </div>
                    <h5 className="text-[18px] font-serif font-light text-white leading-tight">
                      Why does activity select matter?
                    </h5>
                    <ul className="space-y-4 text-[12.5px] text-emerald-100/90 leading-relaxed font-sans font-light">
                      <li className="flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                        <span><strong className="text-white font-semibold">Meydan & Shams</strong> offer zero-cost bundled activities. You can register up to 3 activities for the exact same base registration fee, whereas other hubs charge up to 1,500 AED per activity.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                        <span><strong className="text-white font-semibold">DMCC & DIFC</strong> are world-class financial zones that permit cryptocurrency utility setups and commodities brokering, but strictly enforce a physical desk occupancy and yearly fiscal audits.</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                        <span><strong className="text-white font-semibold">IFZA Dubai</strong> doesn't require initial local bank pre-approval checks or audited filing records, representing the fastest holding entity portal in Dubai outskirts.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4.5 space-y-2 mt-4 relative z-10 text-left">
                    <div className="flex items-center space-x-2 text-[10px] text-emerald-350 font-mono">
                      <Percent className="w-3.5 h-3.5 text-emerald-400" />
                      <span>LEAD GENERATOR & STRATEGY ASSURANCE</span>
                    </div>
                    <p className="text-[11.5px] text-emerald-100/80 leading-relaxed italic font-light">
                      This recommendation tool instantly compiles matching criteria to bypass standard desk queues. Submitted setups are routed directly to licensed registrars.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Recommendation Result screen
              <div className="p-1 border border-gold-500/30 bg-gold-50/10 rounded-2xl animate-fade-in">
                <div className="bg-white rounded-xl p-6 sm:p-8 space-y-6">
                  
                  {/* Result Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-zinc-100">
                    <div className="space-y-1">
                      <span className="text-[10.5px] font-mono uppercase tracking-widest text-gold-600 font-bold block">Exclusive Algorithmic Match</span>
                      <h4 className="font-serif text-[24px] font-semibold text-zinc-900 tracking-tight">
                        {recommendedZone.name}
                      </h4>
                      <p className="text-[12px] text-zinc-400 font-sans flex items-center space-x-1.5">
                        <span>Base Authority Fee:</span>
                        <span className="text-zinc-800 font-semibold font-mono">AED {recommendedZone.startingPrice.toLocaleString()}</span>
                        <span>•</span>
                        <span>Setup Lead SLA:</span>
                        <span className="text-zinc-800 font-semibold">{recommendedZone.setupTime}</span>
                      </p>
                    </div>

                    <div className="bg-gold-50 border border-gold-300/30 text-gold-600 font-mono text-[14px] font-bold px-4 py-2 rounded-xl flex items-center space-x-1">
                      <span>Authority Rating:</span>
                      <span className="text-zinc-950 text-[18px]">{recommendedZone.score}</span>
                      <span className="text-zinc-400">/10</span>
                    </div>
                  </div>

                  {/* Recommendation explanation */}
                  <div className="bg-zinc-50/50 rounded-xl p-5 border border-zinc-100 text-[13.5px] text-zinc-700 leading-relaxed">
                    <p className="font-medium text-zinc-900 mb-1">Scale Partners Recommendation Basis:</p>
                    {recomReason}
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-3">
                      <span className="text-[11.5px] font-mono tracking-wider uppercase text-zinc-400 font-semibold">Bespoke Perks & Strengths</span>
                      <ul className="space-y-2.5">
                        {recommendedZone.pros.map((pro, index) => (
                          <li key={index} className="flex items-start space-x-2 text-[12.5px] text-zinc-600">
                            <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[11.5px] font-mono tracking-wider uppercase text-zinc-400 font-semibold block mb-1">Cheapest Activity Specifics</span>
                        <p className="text-[12.5px] text-zinc-650 leading-relaxed italic bg-gold-50/20 p-3 rounded-lg border border-gold-300/10">
                          {recommendedZone.cheapestActivities}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-1">
                        <div>
                          <span className="text-[11px] font-mono uppercase text-zinc-400 block">Workspace Class</span>
                          <span className="text-[13px] font-semibold text-zinc-800 capitalize">{officeStyle} Desk</span>
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase text-zinc-400 block">Yearly Audit Required</span>
                          <span className="text-[13px] font-semibold text-zinc-800">
                            {recommendedZone.physicalAuditRequired ? 'Yes (Strict Enforcement)' : 'No (Exempted Registry)'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100/80">
                    <button
                      id="rec_back_to_wizard"
                      onClick={() => setRecommendedZone(null)}
                      className="text-[12.5px] font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
                    >
                      ← Modify setup requirements
                    </button>

                    <div className="flex gap-3">
                      <button
                        id="apply_freezone_rec"
                        onClick={() => handleApplyRecommendation(recommendedZone)}
                        className="bg-brand-grad text-white text-[13px] font-bold px-6 py-3.5 rounded-xl flex items-center space-x-1.5 transition-all shadow-sm hover:scale-[1.015] border-0"
                      >
                        <span>Apply & Secure This Setup Portfolio</span>
                        <ChevronRight className="w-4 h-4 text-gold-400" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        )}

        {/* CHOOSE FREE ZONE TAB */}
        {activeTab === 'chooser' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* Left Column: Search & List */}
              <div className="w-full md:w-5/12 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search Free Zone e.g. Meydan..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-gold-500 focus:outline-none text-[13px] pl-10 pr-4 py-3 rounded-xl transition-all"
                  />
                </div>

                <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                  {filteredZones.map(zone => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedFreeZoneId(zone.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                        selectedFreeZoneId === zone.id 
                          ? 'border-gold-500 bg-gold-50/55 shadow-sm' 
                          : 'border-zinc-100 hover:border-zinc-200 bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="w-7 h-7 rounded-lg bg-brand-grad text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-xs border-0">
                            {zone.logoText}
                          </span>
                          <span className={`text-[13.5px] font-semibold ${selectedFreeZoneId === zone.id ? 'text-gold-700' : 'text-zinc-800'}`}>
                            {zone.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans truncate max-w-[190px]">{zone.location}</p>
                      </div>

                      <div className="text-right space-y-0.5">
                        <span className="text-[10px] text-zinc-400 font-mono block">From</span>
                        <span className="text-[13.5px] font-mono font-bold text-zinc-800">AED {zone.startingPrice.toLocaleString()}</span>
                      </div>
                    </button>
                  ))}

                  {filteredZones.length === 0 && (
                    <p className="text-[12px] text-zinc-400 text-center py-8">No Free Zones matching your parameters. Try another name.</p>
                  )}
                </div>
              </div>

              {/* Right Column: Detailed View of selected zone */}
              <div className="w-full md:w-7/12 border border-zinc-100 bg-zinc-50/20 rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold-600 font-bold">Standard Authority Profile</span>
                    <span className="text-[12px] text-zinc-400">Registry Score: <strong className="text-zinc-800">{selectedZone.score}/10</strong></span>
                  </div>
                  <h4 className="font-serif text-[22px] font-semibold text-zinc-900 tracking-tight">{selectedZone.name}</h4>
                  <p className="text-[12.5px] text-zinc-500">{selectedZone.location} • Setup time: <strong>{selectedZone.setupTime}</strong></p>
                </div>

                <div className="border-t border-zinc-200/60 pt-4 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-0.5">Primary Alignment / Best For</span>
                    <p className="text-[13px] font-semibold text-zinc-800">{selectedZone.bestFor}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-0.5">Sector Specific Price Advantages</span>
                    <p className="text-[12.5px] text-zinc-650 leading-relaxed bg-zinc-50 p-3 rounded-xl border border-zinc-100 italic">
                      {selectedZone.cheapestActivities}
                    </p>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">Pros</span>
                    <ul className="space-y-2">
                      {selectedZone.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-[12.5px] text-zinc-750">
                          <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedZone.cons && selectedZone.cons.length > 0 && (
                    <div className="space-y-2 pt-1 border-t border-zinc-100">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block">Constraints / Considerations</span>
                      <ul className="space-y-1.5">
                        {selectedZone.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-[12px] text-zinc-500">
                            <span className="text-zinc-300 font-bold shrink-0">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Selected Zone CTA */}
                <div className="pt-5 border-t border-zinc-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-zinc-400 font-mono block">Estimated Base Setup</span>
                    <span className="text-[18px] font-mono font-bold text-gold-600">AED {selectedZone.startingPrice.toLocaleString()}</span>
                  </div>

                  <button
                    id={`select_freezone_${selectedZone.id}`}
                    onClick={() => {
                      onSelectFreeZone(selectedZone.name, selectedZone.startingPrice);
                      openContactModal();
                    }}
                    className="bg-brand-grad text-white text-[12.5px] font-bold px-5 py-3 rounded-xl flex items-center space-x-1.5 transition-all shadow-sm hover:scale-[1.015] border-0"
                  >
                    <span>Choose this Free Zone</span>
                    <ChevronRight className="w-4 h-4 text-gold-300" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* COMPARISON TAB */}
        {activeTab === 'comparison' && (
          <div className="space-y-6 animate-fade-in">
            <div className="overflow-x-auto rounded-xl border border-zinc-200/60">
              <table className="w-full min-w-[750px] text-left border-collapse bg-white">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/50">
                    <th className="p-4 text-[11px] font-mono uppercase text-zinc-400 w-1/5">Free Zone Details</th>
                    <th className="p-4 text-[11px] font-mono uppercase text-zinc-400 w-1/5">Primary Sector Focus</th>
                    <th className="p-4 text-[11px] font-mono uppercase text-zinc-400 w-15%">Starting Cost</th>
                    <th className="p-4 text-[11px] font-mono uppercase text-zinc-400 w-15%">Setup Time</th>
                    <th className="p-4 text-[11px] font-mono uppercase text-zinc-400 w-15%">Yearly Audit Needed</th>
                    <th className="p-4 text-[11px] font-mono uppercase text-zinc-400 w-1/5">Cost Advantage Highlight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-[12.5px] text-zinc-750">
                  {freeZones.map(zone => (
                    <tr key={zone.id} className="hover:bg-gold-50/10 transition-colors">
                      <td className="p-4 font-semibold text-zinc-900 flex items-center space-x-1.5">
                        <span className="text-gold-500">•</span>
                        <span>{zone.name}</span>
                      </td>
                      <td className="p-4 text-zinc-500 font-sans">{zone.bestFor}</td>
                      <td className="p-4 font-mono font-semibold text-zinc-800">AED {zone.startingPrice.toLocaleString()}</td>
                      <td className="p-4 text-zinc-650">{zone.setupTime}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                          zone.physicalAuditRequired 
                            ? 'bg-orange-50 text-orange-600' 
                            : 'bg-green-50 text-green-600'
                        }`}>
                          {zone.physicalAuditRequired ? 'Yes (Enforced)' : 'No (Exempt)'}
                        </span>
                      </td>
                      <td className="p-4 text-[11.5px] italic text-zinc-500 font-sans leading-snug">
                        {zone.cheapestActivities.split(' (')[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-zinc-50/50 border border-zinc-200/40 rounded-xl p-4 text-[11.5px] text-zinc-450 leading-relaxed">
              <span className="font-semibold block mb-0.5 text-[12px] text-zinc-700">Cost Strategy Clearance:</span>
              Note that pricing parameters exclude optional visa cost structures (standard visa deposits start at AED 3,500 depending on biometric thresholds and security verification approvals of the country of origin).
            </div>
          </div>
        )}

        {/* STRATEGIC FINE-PRINT & LEAD-GEN DISCLAIMER */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-zinc-400">
          <div className="space-y-1 max-w-2xl font-sans leading-relaxed">
            <p>
              <strong>Official Registered Agent Disclaimer:</strong> Scale Partners is an approved, registered corporate sponsor and advisory agent authorized by the respective UAE Free Zone authorities listed.
            </p>
            <p>
              Costs presented are standardized estimates with all standard regulatory licensing fees accounted for. Full exact pricing clearing calculations require verification of specific corporate registry names and individual partner biometric security clearing clearances.
            </p>
          </div>
          <div className="shrink-0 bg-gold-100/40 text-gold-700 border border-gold-300/10 px-3.5 py-2 rounded-xl text-right">
            <span className="font-mono block">Registered Provider No.</span>
            <span className="font-semibold font-mono block">#89210 / DUBAI</span>
          </div>
        </div>

      </div>

    </div>
  );
}

"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Image from 'next/image';
import { PageId } from '../types';
import { 
  Scale, 
  Receipt, 
  Wallet, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Percent, 
  Coins, 
  ShieldCheck, 
  Building,
  Award,
  ShieldAlert,
  Building2
} from 'lucide-react';
import { motion } from 'motion/react';

interface FinancePageProps {
  type: 'tax' | 'accounting' | 'banking';
  setPage: (page: PageId) => void;
  openContactModal: () => void;
}

export default function FinancePage({ type, setPage, openContactModal }: FinancePageProps) {
  const [estProfit, setEstProfit] = useState(500000); // 500k AED by default

  // Tax simulator numbers
  const TAX_FREE_THRESHOLD = 375000;
  const corporateTaxRate = 0.09;
  const taxableProfit = Math.max(0, estProfit - TAX_FREE_THRESHOLD);
  const estimatedTax = taxableProfit * corporateTaxRate;
  const effectiveRate = estProfit > 0 ? (estimatedTax / estProfit) * 100 : 0;

  const contentMap = {
    tax: {
      tag: "Sovereign Fiscal Alignment",
      title: "Corporate Tax & VAT Advisory",
      subtitle: "Navigate the newly introduced 9% UAE Corporate Tax, coordinate voluntary registrations, and optimize global tax exemptions.",
      features: [
        { title: "Corporate Tax Strategy", desc: "Design legal tax optimization configurations aligning parent-holding setups, TRANSFER pricing configurations, and double tax treaties." },
        { title: "VAT Compliant Returns", desc: "Structured filing logs under the Federal Tax Authority (FTA). Handle 5% standard VAT returns without administrative penalties." },
        { title: "Free Zone Exemption Audit", desc: "Ensure your Free Zone holds 'Qualifying Intellectual Income' tags to maintain the 0% historic tax tier." }
      ],
      highlights: [
        "First AED 375,000 of taxable profit is strictly taxed at 0%.",
        "Qualifying Free Zone Persons are eligible for 0% corporate tax audits.",
        "Generous corporate group relief rules for associated entities."
      ],
      image1: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
      image1Label: "SOVEREIGN TAX & FTA COMPLIANCE ADVISORS",
      image1Desc: "Scale Partners structures multi-jurisdictional tax profiles under direct supervision of senior FTA-registered tax planners.",
      image2: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      image2Label: "FEDERAL TAX RESIDENCY COMPLIANCE",
      image2Heading: "Strategic Treaty Planning & VAT Audit Logs",
      image2Desc: "All international client entities are pre-registered with official FTA portals, enabling zero-friction corporate filing cycles."
    },
    accounting: {
      tag: "Permanent Ledger Controls",
      title: "Accounting & Continuous Bookkeeping",
      subtitle: "Secure audit-ready accounting files using our continuous bookkeeping services. Structured for corporate tax inspections.",
      features: [
        { title: "Dual-Ledger Accounting", desc: "IFRS-compliant ledgers backed by fully certified, credentialed Chartered Accountants based in Dubai." },
        { title: "Dynamic P&L & Balance Sheets", desc: "Live access to secure financial reports, corporate asset evaluations, and cashflow logs." },
        { title: "Corporate Tax Reconciliation", desc: "Continuous mapping of tax write-offs, deductible executive benefits, and depreciation vectors." }
      ],
      highlights: [
        "IFRS & FTA compliant monthly bookkeeping standard.",
        "Fully reconciled monthly bank & credit card transactions statements.",
        "Pre-audited quarterly financial bundles delivered to board directors."
      ],
      image1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      image1Label: "SOVEREIGN LEDGER & FINANCIAL OFFICERS",
      image1Desc: "Chartered senior auditing managers build immaculate financial histories fully prepared for Federal Tax Authority audit requests.",
      image2: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
      image2Label: "CONTINUOUS STATEMENT BALANCING",
      image2Heading: "Full Monthly Escrow & P&L Analysis Reports",
      image2Desc: "Continuous dual-entry accounting guarantees your balance sheet remains fully prepared for licensing deans."
    },
    banking: {
      tag: "Premium Financial Onboarding",
      title: "VIP Corporate Banking opening",
      subtitle: "Bypass the traditional 60-day corporate queue. We coordinate high-end introductions with premier UAE corporate banks.",
      features: [
        { title: "Fast-Track Digital Solutions", desc: "Coordinate business application with premium digital banks like Wio for immediate setups inside 48 hours." },
        { title: "Full-Tier Tier-1 Account Introductions", desc: "Direct client partner desk introductions with Emirates NBD, Mashreq, and First Abu Dhabi Bank (FAB)." },
        { title: "Dual-Currency Escrow setups", desc: "Complex investor account configurations tailored for trade finance, multi-currency settlements (USD, EUR, AED), and holding custody." }
      ],
      highlights: [
        "Direct personal connection with assigned VIP banking relationship directors.",
        "Pre-screening on AML compliance and complex shareholder profiles.",
        "Guaranteed onboarding file verification prior to submission."
      ],
      image1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
      image1Label: "FAST-TRACK CORPORATE BANKING COMPLIANCE LIAISONS",
      image1Desc: "Bypass traditional 60-day delays with designated digital and Tier-1 banker desk corridors led by senior banking officers.",
      image2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      image2Label: "DIRECT CAPITAL SHIELD ACCOUNTING",
      image2Heading: "Dual-Currency Broker Escrow & Capital Access",
      image2Desc: "We establish high-altitude commercial bank desks at Emirates NBD, Mashreq, and Abu Dhabi Treasury channels."
    }
  };

  const current = contentMap[type];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="pt-[100px] pb-24 bg-gold-50 min-h-screen relative overflow-hidden"
    >
      {/* SOFT AMBIENT BRAND GREEN GLOWS FOR ULTRA-PREMIUM VIBES */}
      <div className="absolute top-0 right-0 w-[55%] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(18,183,106,0.045),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[450px] bg-[radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.03),transparent_45%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Indicator / Back */}
        <div className="mb-8">
          <button 
            id={`back_btn_fin_${type}`}
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
            <h1 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] font-semibold text-zinc-900 leading-[1.12] tracking-tight">
              {current.title}
            </h1>
            <p className="font-sans text-zinc-500 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl">
              {current.subtitle}
            </p>
            
            <div className="pt-4 font-sans">
              <button
                id="fin_cta_book"
                onClick={openContactModal}
                className="bg-brand-grad text-white px-6 py-3.5 rounded-xl font-sans text-[13.5px] font-bold tracking-tight transition-all duration-300 shadow-md flex items-center space-x-2 border-0 hover:scale-[1.015]"
              >
                <span>Consult Senior Advisory Partner</span>
                <ArrowRight className="w-4 h-4 text-gold-350" />
              </button>
            </div>

            {/* Photo 1: Dynamic High Status Corporate Ledger & Banking */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm h-[200px] mt-6 relative group">
              <Image 
                src={current.image1} 
                alt={current.title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/90 via-[#08854C]/25 to-transparent p-5 flex flex-col justify-end z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-[10px] font-mono uppercase tracking-widest text-white border border-white/10 mb-1.5 shadow-3xs">{current.image1Label}</span>
                <p className="text-[12.5px] text-zinc-100 font-sans mt-0.5">{current.image1Desc}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gold-50/20 border border-gold-300/10 rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[12px] font-mono uppercase tracking-widest text-gold-600 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Compliance Matrix</span>
              </div>
              <div className="space-y-2.5 border-t border-zinc-100 pt-4">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-[12.5px] text-zinc-600 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Pre-approved Tax & Banking Trust Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-t border-b border-zinc-200/60/40 py-6 relative z-10 bg-zinc-50/40 px-6 rounded-2xl animate-fade-in_500">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">FTA Audited</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Federal Tax Authority filing agent</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">9% Corporate Ready</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Tax registration cert issued in 7 days</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">Premium Account Liaisons</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Dedicated Emirates NBD & FAB desks</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-3.5">
            <div className="p-2.5 bg-white rounded-xl border border-zinc-200/60/60 shrink-0 shadow-3xs text-gold-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[11.5px] font-bold text-zinc-900 font-mono tracking-tight uppercase">ISO 27001 Encrypted</h4>
              <p className="text-[10.5px] text-zinc-500 font-sans mt-0.5">Secure dual-token client ledger custody</p>
            </div>
          </div>
        </div>

        {/* Dynamic Tax Tool block ONLY on tax tab */}
        {type === 'tax' && (
          <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 sm:p-10 mb-16 space-y-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-bold">Interactive Asset Simulator</span>
              <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-zinc-900 tracking-tight mt-1">
                9% Corporate Tax Liability Estimator
              </h2>
              <p className="text-[13px] text-zinc-500 mt-1">
                Understand your fiscal leverage. Slid the profit bracket to estimate your standard compliance liability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-[13px] font-bold text-zinc-700">Estimated Annual Corporate Profit</label>
                    <span className="text-[18px] font-bold font-mono text-zinc-900">AED {estProfit.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range"
                    min="100000"
                    max="3000000"
                    step="50000"
                    value={estProfit}
                    onChange={(e) => setEstProfit(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-[10.5px] text-zinc-400 font-mono">
                    <span>AED 100K</span>
                    <span>AED 1.5M</span>
                    <span>AED 3M+</span>
                  </div>
                </div>

                {/* Styled SVG breakdown chart rendering mathematically */}
                <div className="p-4 bg-white border border-zinc-100 rounded-xl space-y-2.5">
                  <div className="text-[11px] font-mono uppercase text-zinc-400">Profit Structuring Breakdown</div>
                  
                  <div className="h-6 w-full bg-zinc-100 rounded-full overflow-hidden flex">
                    {/* Tax Free Portion */}
                    <div 
                      className="h-full bg-gold-400 transition-all duration-300"
                      style={{ width: `${Math.min(100, (TAX_FREE_THRESHOLD / estProfit) * 100)}%` }}
                    ></div>
                    {/* Taxable Portion */}
                    {estProfit > TAX_FREE_THRESHOLD && (
                      <div 
                        className="h-full bg-zinc-800 transition-all duration-300"
                        style={{ width: `${Math.max(0, 100 - (TAX_FREE_THRESHOLD / estProfit) * 100)}%` }}
                      ></div>
                    )}
                  </div>

                  <div className="flex justify-between text-[11px] font-sans">
                    <span className="flex items-center space-x-1.5 text-zinc-600">
                      <span className="w-2.5 h-2.5 bg-gold-400 rounded-sm"></span>
                      <span>Tax-exempt zone (AED {Math.min(estProfit, TAX_FREE_THRESHOLD).toLocaleString()})</span>
                    </span>
                    {estProfit > TAX_FREE_THRESHOLD && (
                      <span className="flex items-center space-x-1.5 text-zinc-600">
                        <span className="w-2.5 h-2.5 bg-zinc-800 rounded-sm"></span>
                        <span>Taxable portion (AED {taxableProfit.toLocaleString()})</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Tax Output Screen (Apple Style glass card) */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#0C2E1A] via-[#12B76A] to-[#22C55E] text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl border-0">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="text-[10px] tracking-widest uppercase font-mono text-white/90 font-bold relative z-10">Calculated Liability</div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-baseline border-b border-white/25 pb-3">
                    <span className="text-[12.5px] text-white/85">Tax Exempt Profit</span>
                    <span className="text-[13.5px] font-mono text-white font-semibold">AED {Math.min(estProfit, TAX_FREE_THRESHOLD).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/25 pb-3">
                    <span className="text-[12.5px] text-white/85">Taxable portion (9%)</span>
                    <span className="text-[13.5px] font-mono text-white font-semibold">AED {taxableProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <div>
                      <span className="text-[12.5px] font-bold text-white block">Est. Annual Tax</span>
                      <span className="text-[11px] text-white/80 block font-mono">Effective Rate: {effectiveRate.toFixed(1)}%</span>
                    </div>
                    <span className="text-[26px] font-bold font-mono text-white leading-none">
                      AED {Math.round(estimatedTax).toLocaleString()}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={openContactModal}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-zinc-950 text-[13px] font-semibold py-3 rounded-xl transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Lock Compliance Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Photo 2: Dynamic Premium Advisory Boardroom Workspace */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md h-[260px] relative group z-10">
          <Image 
            src={current.image2}
            alt={current.image2Heading}
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/95 via-[#08854C]/35 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-[10.5px] font-mono uppercase tracking-[0.2em] text-white border border-white/10 mb-1.5 shadow-3xs">{current.image2Label}</span>
            <h3 className="font-serif text-[20px] sm:text-[24px] text-white font-medium mt-1 leading-snug">{current.image2Heading}</h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-300 max-w-xl mt-1 font-sans">
              {current.image2Desc}
            </p>
          </div>
        </div>

        {/* Value Prop Columns */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-bold">Frictionless Systems</span>
            <h2 className="text-[24px] sm:text-[28px] font-serif font-semibold text-zinc-900 tracking-tight">
              A Complete Service Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {current.features.map((feature, idx) => (
              <div key={idx} className="border-t border-zinc-200/80 pt-6 space-y-3">
                <span className="text-[11.5px] font-mono tracking-wider text-gold-600 font-semibold">SUITE 0{idx + 1}</span>
                <h3 className="text-[16.5px] font-semibold text-zinc-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-sans">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {type === 'banking' && (
          <div className="mt-20 pt-16 border-t border-zinc-200/85 space-y-8 animate-fade-in_500">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#08854C] font-bold block">
                Pre-Approved Correspondent Networks
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-serif font-semibold text-zinc-900 tracking-tight">
                Supported UAE & International Corporate Banks
              </h2>
              <p className="text-[13px] text-zinc-500 font-sans max-w-2xl leading-relaxed">
                We coordinate setup corridors directly with premier regional and international banking institutions, bypassing traditional AML screening queues.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Wio Bank", src: "/assets/imgi_65_WIO.png" },
                { name: "Emirates NBD", src: "/assets/imgi_115_enbd-logo.jpg" },
                { name: "Mashreq Bank", src: "/assets/imgi_111_mashreq-logo.jpg" },
                { name: "First Abu Dhabi Bank", src: "/assets/imgi_116_fab-bank-logo.jpg" },
                { name: "Abu Dhabi Islamic Bank", src: "/assets/imgi_112_adib-logo-1.jpg" },
                { name: "RAK BANK", src: "/assets/imgi_114_rak-bank-logo.jpg" },
                { name: "Emirates Islamic", src: "/assets/imgi_113_emirates-islamic-logo.jpg" },
                { name: "HSBC Bank", src: "/assets/imgi_117_hsbc-logo.jpg" },
                { name: "Euro Pacific Bank", src: "/assets/imgi_118_euro-pacific-logo.jpg" },
                { name: "ICICI Bank", src: "/assets/imgi_119_icici-logo.jpg" }
              ].map((bank, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-zinc-200/80 rounded-2xl p-5 flex items-center justify-center h-20 shadow-3xs hover:border-emerald-500/25 hover:shadow-2xs transition-all duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={bank.src} 
                      alt={bank.name} 
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-contain transition-all duration-300" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}

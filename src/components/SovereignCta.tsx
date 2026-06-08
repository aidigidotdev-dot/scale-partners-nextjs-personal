"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect } from 'react';
import { PageId } from '../types';
import { MessageSquare, ShieldCheck, Clock, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

interface SovereignCtaProps {
  currentPage: PageId;
  openContactModal: () => void;
}

export default function SovereignCta({ currentPage, openContactModal }: SovereignCtaProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle Neurolink Constellation Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || 800);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseSpeed: number;
      pulseFactor: number;
    }> = [];

    // Initialize particles (32 particles for a subtle look)
    for (let i = 0; i < 32; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 0.8,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        pulseFactor: Math.random() * Math.PI
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & dynamic link particles
      particles.forEach((p, idx) => {
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse scale
        p.pulseFactor += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulseFactor) * 0.3;

        // Attract lightly to mouse pointer if close
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 150) {
          p.x += dx * 0.0008;
          p.y += dy * 0.0008;
        }

        // Draw particle node (very subtle opacity)
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.fill();

        // Connect near particle nodes (Constellation)
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p.x - p2.x;
          const distDy = p.y - p2.y;
          const dist = Math.sqrt(distDx * distDx + distDy * distDy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 90) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define WhatsApp Phone Number and Message based on page context
  const whatsAppPhone = '971501234567'; // Premium UAE business line
  
  // Custom Dynamic Content Generator
  const getCtaContent = () => {
    // 1. Company Setup Category
    if (
      currentPage === 'setup-mainland' || 
      currentPage === 'setup-freezone' || 
      currentPage === 'setup-offshore' ||
      currentPage.startsWith('fz-') ||
      currentPage.startsWith('lic-')
    ) {
      return {
        badge: "Urgent: Setup Slot Clearance status",
        title: "Dubai Fast-Track Setup Slots are Strictly Limited This Quarter",
        fomo: "Only 3 pre-approved corporate registry slots remain for guaranteed fast-track approval. Avoid administrative delays, secure Wio corporate banking lanes, and start trading tomorrow.",
        benefits: [
          "100% Hassle-Free Direct Portal Filing - Skip the Queues",
          "Pre-Approved Business license Deliverable within 24 Hours",
          "Zero Local Directory Sponsor required - Retain 100% Equity",
          "Priority pre-vetted corporate bank channels with Wio Bank"
        ],
        disclaimer: "Please speak to an official structuring representative to evaluate mainland vs. free zone legal pathways and guarantee compliance under the new 2026 OECD regulatory amendments. Delaying filing may subject operations to retroactive compliance penalty matrices.",
        whatsAppMessage: "Hi Scale Partners, I want to set up an economic company in Dubai. Please check my eligibility for fast-track 24h approval slots.",
        ctaText: "Check Free Zone Licensing Slots on WhatsApp"
      };
    }
    
    // 2. Residence & Golden Visa Category
    if (currentPage === 'visa-golden' || currentPage === 'visa-residence' || currentPage === 'visa-pro') {
      return {
        badge: "Quota Warning: GDRFA & ICP Channels",
        title: "Golden Visa Regulations are Restructuring. Secure Status Today",
        fomo: "Strategic VIP residency allocations are processed dynamically by UAE immigration authorities. Secure your certified senior executive or investor file clearance slot today before federal quotas reset.",
        benefits: [
          "Complete Document Attestation & Priority Medical Escort Service",
          "Skip standard employment restrictions - No local partner required",
          "Continuous 10-Year residency safeguards on Golden Visa corridors",
          "Immediate residency card stamping in 72 hours max"
        ],
        disclaimer: "Residency approvals are strictly subject to official ICP security checkpoints. Consult with an accredited visa officer directly on how to maximize your specific chances of securing secure 10-year Golden Visa status.",
        whatsAppMessage: "Hi Scale Partners, I am interested in securing a VIP UAE residency card or Golden Visa. Please advise how to maximize my chances of clearance.",
        ctaText: "Verify Golden Visa Eligibility on WhatsApp"
      };
    }

    // 3. Financial Regulatory & Advisory Category
    if (currentPage === 'finance-tax' || currentPage === 'finance-accounting' || currentPage === 'finance-banking') {
      return {
        badge: "Compliance Risk Assessment",
        title: "Federal Tax Audits are Actively Rising. Protect Corporate Wealth",
        fomo: "The Federal Tax Authority (FTA) is actively reviewing transfer pricing and VAT registrations. Secure legal corporate accounting representation today to legally shield profits under the 9% tax exempt corridors.",
        benefits: [
          "Direct licensed FTA Agent Representation & complete Penalty Shielding",
          "Seamless corporate bank account setup and AML priority clearance",
          "Certified GAAP-attested audit reports and exemption registrations",
          "Continuous active compliance advisory preventing retroactive audits"
        ],
        disclaimer: "Federal compliance mandates declare that corporate tax returns must match strict filing timelines. Speak to a chartered public accountant today to implement robust bookkeeping. Retroactive registration delays incur severe statutory penalty logs.",
        whatsAppMessage: "Hi Scale Partners, I need assistance with Corporate Tax compliance, corporate accounting or banking structures. Please guide me on audit prevention.",
        ctaText: "Request Certified Tax Counsel on WhatsApp"
      };
    }

    // 4. Calculator / Home / Fallback Category
    return {
      badge: "Institutional Cost Freeze Alert",
      title: "Lock In Guaranteed Setup Rates Before Portal Fee Adjustments",
      fomo: "Government registry portal pricing is highly dynamic. Speak to a licensed business setup consultant today to legally freeze standard AED pricing for the next 30 business days and lock in fast-track lanes.",
      benefits: [
        "100% Certified Quote Guarantee - Absolute Zero Hidden Costs",
        "Pre-Cleared Priority Lanes with prominent UAE financial institutions",
        "Custom tax-optimal structural blueprints reviewed by senior legal counsel",
        "Complete administrative coordination from setup to visa stamping"
      ],
      disclaimer: "Corporate setup processes are subject to DET and Economic Zone registrar approval parameters. Always seek licensed corporate advice to verify company scopes, activity selections, and visa quota alignment structures.",
      whatsAppMessage: "Hi Scale Partners, I calculated my estimated corporate fees. I want to freeze this rate and consult an expert structure partner.",
      ctaText: "Secure Cost Estimate & Consultation on WhatsApp"
    };
  };

  const cta = getCtaContent();
  const encodedMsg = encodeURIComponent(cta.whatsAppMessage);
  const whatsAppLink = `https://wa.me/${whatsAppPhone}?text=${encodedMsg}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12 relative animate-fade-in">
      {/* Container holding premium styling: dark background, micro subtle gradient, border */}
      <div className="relative overflow-hidden bg-[#07140B] rounded-3xl p-1 sm:p-1.5 transition-all">
        {/* Border Image emulation using gradient backdrop with padding */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12B76A] via-[#22C55E] to-[#10b981] rounded-3xl pointer-events-none opacity-[0.45]"></div>
        
        {/* Core content area inside gradient border */}
        <div className="relative bg-[#07140B]/95 rounded-[22px] px-6 sm:px-10 py-10 sm:py-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Subtle Neurolink Constellation Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden rounded-[22px]">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full block"
            />
          </div>

          {/* Ambient light turquoise/blue spotlights behind the text */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[22px] z-0">
            <div className="absolute top-[-25%] left-[-20%] w-[50%] h-[50%] rounded-full bg-[#22C55E]/[0.12] blur-[100px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#22C55E]/[0.12] blur-[120px]"></div>
          </div>

          <div className="lg:col-span-12 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-5 gap-3.5">
            <div className="flex items-center space-x-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 font-bold uppercase">
                {cta.badge}
              </span>
            </div>
            
            <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-[11px] text-amber-300 font-sans font-medium self-start md:self-auto">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Only 3 Pre-Approved Structuring Slots Open Today</span>
            </div>
          </div>

          {/* Left Block: The Main Value Prop (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 relative z-10 text-left">
            <div className="space-y-4">
              <h2 className="font-sans text-[28px] sm:text-[36px] font-light text-white leading-[1.2] tracking-wide">
                {cta.title}
              </h2>
              
              <div className="p-4 bg-white/5 border border-[#22C55E]/20 rounded-2xl flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[13px] text-zinc-100 leading-relaxed font-sans font-semibold">
                  {cta.fomo}
                </p>
              </div>
            </div>

            {/* Benefits Block */}
            <div className="space-y-3.5 font-sans pt-2">
              <span className="text-[10.5px] uppercase font-mono tracking-wider font-bold text-zinc-350 block">Consultation Priority Advantages:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cta.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-zinc-200 leading-tight font-medium font-sans">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Instant WhatsApp CTA & Disclaimer Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 relative z-10 text-left bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-bold block">Certified Advisory Gateway</span>
              </div>
              
              <p className="text-[12px] text-zinc-300 leading-relaxed font-sans font-light">
                Establish direct secure communications with licensed Scale Partners coordinators on corporate registries. Fully encrypted, secure, and hassle-free representation.
              </p>
            </div>

            <div className="space-y-3">
              <a
                id="whats_app_cta_trigger"
                href={whatsAppLink}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="w-full py-4 bg-brand-grad text-white hover-bg-brand-grad rounded-xl text-[13.5px] font-bold tracking-tight transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.015] border border-[#22C55E]/40"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white shrink-0 fill-current" />
                <span>{cta.ctaText}</span>
              </a>

              <button
                onClick={openContactModal}
                className="w-full py-3 bg-white/5 text-white hover:bg-white/10 border border-white/15 rounded-xl text-[12.5px] font-semibold transition-all text-center block cursor-pointer"
              >
                Or Book Standard Callback
              </button>
            </div>

            <div className="border-t border-white/10 pt-3 flex items-start space-x-2">
              <HelpCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-zinc-400 italic leading-snug font-sans">
                Scale Partners does not charge for initial feasibility slots. Your preliminary consultation is 100% confidential.
              </p>
            </div>
          </div>

          {/* Wide Disclaimer block spanning base */}
          <div className="lg:col-span-12 border-t border-white/10 pt-5 font-sans leading-relaxed text-[11px] text-zinc-400 text-left">
            <span className="font-mono text-[9px] uppercase tracking-wider font-bold block text-zinc-350 mb-1">
              Federal Statutory Advisory Disclaimer:
            </span>
            <p>{cta.disclaimer}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

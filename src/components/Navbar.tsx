"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from '../types';
import Image from 'next/image';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Building2, 
  Compass, 
  Landmark, 
  Calculator, 
  Award, 
  Users, 
  FileSignature, 
  Receipt, 
  Scale, 
  Wallet,
  Globe
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setPage: (page: PageId) => void;
  openContactModal: () => void;
}

export default function Navbar({ currentPage, setPage, openContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = (pageId: PageId) => {
    setPage(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav categories structure mimicking premium directories like inzone.ae but refined
  const navigationItems = [
    {
      label: 'Business Setup',
      id: 'setup',
      items: [
        { name: 'Mainland Company Setup', description: 'Maximum freedom, trade directly with UAE local market with 100% ownership.', icon: Building2, id: 'setup-mainland' as PageId },
        { name: 'Free Zone Ecosystems', description: 'Zero corporate tax zones, 100% import/export tax exemption, simplified setup.', icon: Globe, id: 'setup-freezone' as PageId },
        { name: 'Offshore Vehicles', description: 'International operations, maximum privacy, physical space not required.', icon: Compass, id: 'setup-offshore' as PageId },
        { name: 'Cost Estimator Engine', description: 'Tailor-make your corporate license quote with our dynamic budget calculator.', icon: Calculator, id: 'calculator' as PageId },
      ]
    },
    {
      label: 'Free Zones',
      id: 'freezones_mega',
      gridCols: 2,
      items: [
        { name: 'Meydan Free Zone', description: 'Nad Al Sheba digital hub starting at 12,500 AED with zero-audit exemptions.', icon: Building2, id: 'fz-meydan' as PageId },
        { name: 'IFZA Silicon Oasis', description: 'High-end multi-year discount setups & robust holding structures.', icon: Landmark, id: 'fz-ifza' as PageId },
        { name: 'DMCC Central Hub', description: 'Premium JLT district commodities, metal, and cryptocurrency trading.', icon: Compass, id: 'fz-dmcc' as PageId },
        { name: 'Shams Sharjah City', description: 'Cheapest starting registry package for creative freelancers (8,900 AED).', icon: Globe, id: 'fz-shams' as PageId },
        { name: 'RAKEZ Industrial', description: 'Excellent Northern UAE manufacturing, packing, and warehouse units.', icon: Building2, id: 'fz-rakez' as PageId },
        { name: 'DWTC Trade Center', description: 'Premium corporate offices situated centrally on Sheikh Zayed Road.', icon: Award, id: 'fz-dwtc' as PageId },
      ]
    },
    {
      label: 'Licensing',
      id: 'licensing_mega',
      gridCols: 2,
      items: [
        { name: 'E-Commerce License', description: 'Setup online stores with fully pre-approved Stripe payment integration.', icon: Globe, id: 'lic-ecommerce' as PageId },
        { name: 'General Trading', description: 'Import and export multiple non-conflicting products under one unified seal.', icon: Compass, id: 'lic-trading' as PageId },
        { name: 'Commercial & Services', description: 'Intellectual advice, digital agencies, and tech SaaS consultancies.', icon: Building2, id: 'lic-commercial' as PageId },
        { name: 'Media & Creative', description: 'Simplified permits for publishers, content creators, and influencers.', icon: Award, id: 'lic-media' as PageId },
        { name: 'Heavy Industrial', description: 'Operational setups with civil defense and waste coordination.', icon: Scale, id: 'lic-industrial' as PageId },
        { name: 'Holding SPVs', description: 'Isolate brand risk and safeguard global active equity structures.', icon: Landmark, id: 'lic-holding' as PageId },
      ]
    },
    {
      label: 'Financials & Visas',
      id: 'finance',
      items: [
        { name: 'UAE Golden Visa', description: '10-Year prestigious residency for investors, directors, and outstanding talents.', icon: Award, id: 'visa-golden' as PageId },
        { name: 'Investor Residency', description: '2-Year corporate residency, secure family status, and local sponsor pathways.', icon: Users, id: 'visa-residence' as PageId },
        { name: 'Corporate Tax & VAT', description: 'Mitigate standard 9% corporate tax structures and file quarterly reports.', icon: Scale, id: 'finance-tax' as PageId },
        { name: 'VIP Corporate Banking', description: 'Client onboardings with premier banks including Wio, ENBD, and Mashreq.', icon: Wallet, id: 'finance-banking' as PageId },
      ]
    }
  ];

  return (
    <header id="site_header" className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Logo Brand Symbol */}
          <div 
            id="brand_logo" 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <Image 
              src="/assets/logo_transparent.png" 
              alt="Scale Partners Logo" 
              width={82} 
              height={50} 
              className="object-contain max-h-[54px] w-auto shrink-0 transition-transform group-hover:scale-[1.015]"
            />
            <span className="brand-wordmark whitespace-nowrap shrink-0 text-[18px] sm:text-[20px] xl:text-[22px] leading-none text-[#07140B]">
              Scale Partners
            </span>
          </div>

          {/* Desktop Navigation Link Directory */}
          <nav id="desktop_nav" className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
            {navigationItems.map((category) => (
              <div 
                key={category.id} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  id={`nav_dropdown_trigger_${category.id}`}
                  className={`px-3 xl:px-4 py-2 rounded-full font-sans text-[14px] xl:text-[15px] nav-header-link flex items-center space-x-1 transition-colors whitespace-nowrap ${
                    category.items.some(item => item.id === currentPage) 
                      ? 'text-gold-600' 
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span>{category.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === category.id ? 'rotate-180' : ''}`} />
                </button>

                {/* Submenu Dropdown Panel */}
                {activeDropdown === category.id && (
                  <div 
                    id={`nav_dropdown_panel_${category.id}`}
                    className={`absolute top-full ${
                      category.id === 'finance' ? 'right-0' : 'left-1/2 -translate-x-1/2'
                    } ${
                      category.gridCols === 2 ? 'w-[680px]' : 'w-[360px]'
                    } bg-white rounded-2xl border border-zinc-100 shadow-xl p-4 animate-fade-in z-50 mt-0 before:absolute before:inset-x-0 before:-top-4 before:h-4 before:content-['']`}
                  >
                    <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 px-2 py-1 mb-2">
                      Scale {category.label}
                    </div>
                    
                    <div className={category.gridCols === 2 ? 'grid grid-cols-2 gap-2' : 'space-y-1'}>
                      {category.items.map((subitem) => {
                        const Icon = subitem.icon;
                        const isSelected = currentPage === subitem.id;
                        return (
                          <button
                            key={subitem.id}
                            id={`nav_subitem_link_${subitem.id}`}
                            onClick={() => handleLinkClick(subitem.id)}
                            className={`w-full text-left p-3 rounded-xl flex items-start space-x-3 transition-colors group ${
                              isSelected ? 'bg-gold-50/50 border-l-[3px] border-gold-500 pl-2.5' : 'hover:bg-zinc-50'
                            }`}
                          >
                            <div className={`p-2 rounded-lg transition-colors ${
                              isSelected 
                                ? 'bg-emerald-500/15 text-emerald-600' 
                                : 'bg-emerald-500/5 text-emerald-500 group-hover:bg-emerald-500/15 group-hover:text-emerald-600'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className={`text-[13px] font-semibold tracking-tight transition-colors ${isSelected ? 'text-[#08854C]' : 'text-zinc-800 group-hover:text-[#08854C]'}`}>
                                {subitem.name}
                              </div>
                              <p className="text-[11px] text-zinc-500 leading-snug font-sans font-normal mt-0.5">
                                {subitem.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              id="nav_item_calculator"
              onClick={() => handleLinkClick('calculator')}
              className={`px-3 xl:px-4 py-2 rounded-full font-sans text-[14px] xl:text-[15px] nav-header-link transition-colors whitespace-nowrap ${
                currentPage === 'calculator' ? 'text-gold-600 bg-gold-500/5' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Cost Estimator
            </button>
          </nav>

          {/* Action Button & Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              id="nav_cta_consult"
              onClick={openContactModal}
              className="bg-brand-grad text-white px-4 xl:px-5 py-3 rounded-full font-sans text-[13px] nav-header-link tracking-tight transition-all duration-300 shadow-sm flex items-center justify-center border-0 hover:scale-[1.015] whitespace-nowrap text-center"
            >
              <span>Initialize 24h Setup Session</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile_menu_toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:text-[#22C55E] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div id="mobile_drawer" className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-zinc-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-72px)] z-40">
          <div className="p-5 space-y-6">
            
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-zinc-400 px-2 py-1">Navigation</div>
              <button
                onClick={() => handleLinkClick('home')}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-medium flex items-center ${
                  currentPage === 'home' ? 'bg-gold-50 text-gold-700 font-semibold' : 'text-zinc-700'
                }`}
              >
                Corporate Overview
              </button>
              <button
                onClick={() => handleLinkClick('calculator')}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-medium flex items-center ${
                  currentPage === 'calculator' ? 'bg-gold-50 text-gold-700 font-semibold' : 'text-zinc-700'
                }`}
              >
                Cost Estimator Engine
              </button>
            </div>

            {navigationItems.map((category) => (
              <div key={category.id} className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-zinc-400 px-2 py-1">
                  {category.label}
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {category.items.map((subitem) => {
                    const isSelected = currentPage === subitem.id;
                    return (
                      <button
                        key={subitem.id}
                        onClick={() => handleLinkClick(subitem.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl flex flex-col transition-colors ${
                          isSelected ? 'bg-gold-50 text-gold-700 font-semibold' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                        }`}
                      >
                        <span className="text-[13.5px] font-medium">{subitem.name}</span>
                        <span className="text-[11px] text-zinc-500 font-normal leading-tight mt-0.5">{subitem.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-zinc-100">
              <button
                onClick={openContactModal}
                className="w-full bg-brand-grad text-white py-3.5 px-4 rounded-xl text-[14.5px] font-bold tracking-tight transition-all text-center flex items-center justify-center space-x-2 shadow-sm border-0"
              >
                <span>Setup Your Dubai Business in 24 Hours</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </button>
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
}

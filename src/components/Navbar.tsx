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
  Award,
  Users,
  Scale,
  Wallet,
  Globe,
  Briefcase,
  MapPin,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setPage: (page: PageId) => void;
  openContactModal: () => void;
}

type NavItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  id: string;
};

type FreeZoneGroup = {
  tier: string;
  items: Array<{ name: string; id: string }>;
};

export default function Navbar({ currentPage, setPage, openContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeFreeZoneGroup, setActiveFreeZoneGroup] = useState('Dubai Free Zones');

  const handleLinkClick = (pageId: string) => {
    setPage(pageId as PageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const pageHref = (pageId: string) => pageId === 'home' ? '/' : '/' + pageId;

  const liveFreeZoneIds = new Set(['fz-dmcc']);

  const freeZoneMenuGroups: FreeZoneGroup[] = [
    {
      tier: 'Dubai Free Zones',
      items: [
        { name: 'DMCC', id: 'fz-dmcc' },
        { name: 'Jebel Ali Free Zone (JAFZA)', id: 'fz-jafza' },
        { name: 'International Free Zone Authority (IFZA)', id: 'fz-ifza' },
        { name: 'Meydan Free Zone', id: 'fz-meydan' },
        { name: 'DIFC', id: 'fz-difc' },
        { name: 'DAFZA', id: 'fz-dafza' },
        { name: 'Dubai Internet City', id: 'fz-dubai-internet-city' },
        { name: 'Dubai CommerCity', id: 'fz-dubai-commercity' },
        { name: 'Dubai Technology Entrepreneur Campus', id: 'fz-dtec' },
        { name: 'Dubai Gold and Diamond Park', id: 'fz-dubai-gold-and-diamond-park' },
        { name: 'Dubai Health Care City', id: 'fz-dhcc' },
        { name: 'Dubai China Center Free Zone', id: 'fz-dubai-china-center' },
        { name: 'Dubai World Trade Centre', id: 'fz-dwtc' },
        { name: 'Dubai Textile City', id: 'fz-dubai-textile-city' },
        { name: 'Dubai Creative Clusters Authority (DCCA)', id: 'fz-dcca' },
        { name: 'Dubai Silicon Oasis (DSO)', id: 'fz-dso' },
        { name: 'Dubai South Free Zone', id: 'fz-dubai-south' },
      ],
    },
    {
      tier: 'Abu Dhabi Free Zones',
      items: [
        { name: 'Abu Dhabi Global Market', id: 'fz-adgm' },
        { name: 'Khalifa Industrial Zone Abu Dhabi', id: 'fz-kizad' },
        { name: 'Masdar City Free Zone', id: 'fz-masdar-city' },
        { name: 'twofour54', id: 'fz-twofour54' },
        { name: 'Abu Dhabi Airports Free Zone (ADAFZ)', id: 'fz-adafz' },
      ],
    },
    {
      tier: 'Sharjah Free Zones',
      items: [
        { name: 'Sharjah Media City', id: 'fz-shams' },
        { name: 'SRTIP', id: 'fz-srtip' },
        { name: 'SAIF Free Zone', id: 'fz-saif-zone' },
        { name: 'SPC', id: 'fz-spc' },
        { name: 'Hamriyah Free Zone Authority', id: 'fz-hfza' },
      ],
    },
    {
      tier: 'Fujairah Free Zones',
      items: [
        { name: 'Fujairah Free Zone (FFZ)', id: 'fz-ffz' },
        { name: 'Fujairah Creative City (FCC)', id: 'fz-fcc' },
        { name: 'Fujairah Oil Industry Zone (FOIZ)', id: 'fz-foiz' },
      ],
    },
    {
      tier: 'Ajman Free Zones',
      items: [
        { name: 'Ajman Free Zone', id: 'fz-ajman-free-zone' },
        { name: 'Ajman Media City Free Zone', id: 'fz-ajman-media-city' },
        { name: 'Ajman NuVentures Centre Free Zone', id: 'fz-ajman-nuventures-centre' },
        { name: 'Al Zorah Free Zone', id: 'fz-al-zorah' },
        { name: 'Ajman Car Souq Free Zone', id: 'fz-ajman-car-souq' },
      ],
    },
  ];

  const publishedFreeZoneMenuGroups = freeZoneMenuGroups
    .map((group) => ({ ...group, items: group.items.filter((item) => liveFreeZoneIds.has(item.id)) }))
    .filter((group) => group.items.length > 0);

  const allFreeZoneIds = publishedFreeZoneMenuGroups.flatMap((group) => group.items.map((item) => item.id));
  const activeFreeZoneMenuGroup = publishedFreeZoneMenuGroups.find((group) => group.tier === activeFreeZoneGroup) ?? publishedFreeZoneMenuGroups[0];

  const navigationItems: Array<{
    label: string;
    id: string;
    gridCols?: number;
    items: NavItem[];
  }> = [
    {
      label: 'Business Setup',
      id: 'setup',
      items: [
        { name: 'Business Setup in Dubai', description: 'Complete UAE launch guide covering licensing, visas, banking, tax, and compliance.', icon: Briefcase, id: 'business-setup-dubai' },
        { name: 'Mainland Company Setup', description: 'Maximum freedom, trade directly with UAE local market with 100% ownership.', icon: Building2, id: 'setup-mainland' },
        { name: 'Free Zone Ecosystems', description: 'Zero corporate tax zones, 100% import/export tax exemption, simplified setup.', icon: Globe, id: 'setup-freezone' },
        { name: 'Offshore Vehicles', description: 'International operations, maximum privacy, physical space not required.', icon: Compass, id: 'setup-offshore' },
      ],
    },
    {
      label: 'Free Zones',
      id: 'freezones_mega',
      items: [],
    },
    {
      label: 'Licensing',
      id: 'licensing_mega',
      gridCols: 2,
      items: [
        { name: 'E-Commerce License', description: 'Setup online stores with fully pre-approved Stripe payment integration.', icon: Globe, id: 'lic-ecommerce' },
        { name: 'General Trading', description: 'Import and export multiple non-conflicting products under one unified seal.', icon: Compass, id: 'lic-trading' },
        { name: 'Commercial & Services', description: 'Intellectual advice, digital agencies, and tech SaaS consultancies.', icon: Building2, id: 'lic-commercial' },
        { name: 'Media & Creative', description: 'Simplified permits for publishers, content creators, and influencers.', icon: Award, id: 'lic-media' },
        { name: 'Heavy Industrial', description: 'Operational setups with civil defense and waste coordination.', icon: Scale, id: 'lic-industrial' },
        { name: 'Holding SPVs', description: 'Isolate brand risk and safeguard global active equity structures.', icon: Landmark, id: 'lic-holding' },
      ],
    },
    {
      label: 'Financials & Visas',
      id: 'finance',
      items: [
        { name: 'UAE Golden Visa', description: '10-Year prestigious residency for investors, directors, and outstanding talents.', icon: Award, id: 'visa-golden' },
        { name: 'Investor Residency', description: '2-Year corporate residency, secure family status, and local sponsor pathways.', icon: Users, id: 'visa-residence' },
        { name: 'Corporate Tax & VAT', description: 'Mitigate standard 9% corporate tax structures and file quarterly reports.', icon: Scale, id: 'finance-tax' },
        { name: 'VIP Corporate Banking', description: 'Client onboardings with premier banks including Wio, ENBD, and Mashreq.', icon: Wallet, id: 'finance-banking' },
      ],
    },
  ];

  const isCategorySelected = (category: { id: string; items: NavItem[] }) => {
    if (category.id === 'freezones_mega') return allFreeZoneIds.includes(currentPage);
    return category.items.some((item) => item.id === currentPage);
  };

  return (
    <header id="site_header" className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div
            id="brand_logo"
            className="flex items-center cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <Image
              src="/assets/logo_transparent.png"
              alt="Scale Partners Logo"
              width={140}
              height={50}
              className="object-contain max-h-[54px] w-auto shrink-0 transition-transform group-hover:scale-[1.015]"
            />
          </div>

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
                    isCategorySelected(category)
                      ? 'text-gold-600'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span>{category.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === category.id ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === category.id && category.id === 'freezones_mega' && (
                  <div
                    id="nav_dropdown_panel_freezones_mega"
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] max-h-[calc(100vh-96px)] overflow-visible bg-white rounded-2xl border border-zinc-100 shadow-xl p-4 animate-fade-in z-50 mt-0 before:absolute before:inset-x-0 before:-top-4 before:h-4 before:content-['']"
                  >
                    <div className="mb-3 flex items-center justify-between border-b border-zinc-100 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">Scale Free Zones</div>
                          <div className="text-[15px] font-semibold tracking-tight text-zinc-900">Browse by emirate</div>
                        </div>
                      </div>
                      <a
                        href={pageHref('setup-freezone')}
                        className="flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-50/60 px-3 py-2 text-[12px] font-semibold text-gold-700 transition-colors hover:bg-gold-100/70"
                      >
                        <span>Free Zone overview</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    <div className="grid grid-cols-[245px_1fr] gap-4">
                      <div className="space-y-1 border-r border-zinc-100 pr-4">
                        {publishedFreeZoneMenuGroups.map((group) => {
                          const isActiveGroup = activeFreeZoneMenuGroup.tier === group.tier;
                          const hasCurrentPage = group.items.some((item) => item.id === currentPage);
                          return (
                            <button
                              key={group.tier}
                              type="button"
                              onMouseEnter={() => setActiveFreeZoneGroup(group.tier)}
                              onFocus={() => setActiveFreeZoneGroup(group.tier)}
                              className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-colors ${
                                isActiveGroup || hasCurrentPage
                                  ? 'bg-emerald-500/10 text-[#08854C]'
                                  : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <MapPin className={`h-4 w-4 ${isActiveGroup || hasCurrentPage ? 'text-emerald-600' : 'text-zinc-400 group-hover:text-emerald-500'}`} />
                                <span className="text-[13px] font-semibold">{group.tier}</span>
                              </span>
                              <span className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-zinc-400">{group.items.length}</span>
                                <ArrowRight className={`h-3.5 w-3.5 transition-transform ${isActiveGroup ? 'translate-x-0.5 text-emerald-600' : 'text-zinc-300 group-hover:translate-x-0.5 group-hover:text-emerald-500'}`} />
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="min-h-[248px] rounded-xl bg-zinc-50/70 p-3">
                        <div className="mb-2 flex items-center justify-between px-1">
                          <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-zinc-400">{activeFreeZoneMenuGroup.tier}</div>
                          <div className="text-[11px] text-zinc-400">{activeFreeZoneMenuGroup.items.length} pages</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {activeFreeZoneMenuGroup.items.map((item) => {
                            const isSelected = currentPage === item.id;
                            return (
                              <a
                                key={item.id}
                                id={`nav_freezone_link_${item.id}`}
                                href={pageHref(item.id)}
                                className={`group flex min-h-10 w-full items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 text-left text-[12.5px] leading-snug shadow-sm ring-1 ring-zinc-100 transition-colors ${
                                  isSelected
                                    ? 'text-gold-700 font-semibold ring-gold-500/25 bg-gold-50'
                                    : 'text-zinc-700 hover:text-[#08854C] hover:ring-emerald-500/20'
                                }`}
                              >
                                <span>{item.name}</span>
                                <ArrowRight className={`h-3.5 w-3.5 shrink-0 transition-all ${isSelected ? 'text-gold-600 opacity-100' : 'text-zinc-300 opacity-0 group-hover:translate-x-0.5 group-hover:text-emerald-500 group-hover:opacity-100'}`} />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeDropdown === category.id && category.id !== 'freezones_mega' && (
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

          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="nav_cta_consult"
              onClick={openContactModal}
              className="bg-brand-grad text-white px-4 xl:px-5 py-3 rounded-full font-sans text-[13px] nav-header-link tracking-tight transition-all duration-300 shadow-sm flex items-center justify-center border-0 hover:scale-[1.015] whitespace-nowrap text-center"
            >
              <span>Initialize 24h Setup Session</span>
            </button>
          </div>

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
            </div>

            {navigationItems.map((category) => (
              <div key={category.id} className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-zinc-400 px-2 py-1">
                  {category.label}
                </div>

                {category.id === 'freezones_mega' ? (
                  <div className="space-y-3">
                    {publishedFreeZoneMenuGroups.map((group) => (
                      <div key={group.tier} className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-2">
                        <div className="flex items-center gap-2 px-2 py-1.5 text-[12px] font-semibold text-[#08854C]">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{group.tier}</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {group.items.map((item) => {
                            const isSelected = currentPage === item.id;
                            return (
                              <a
                                key={item.id}
                                href={pageHref(item.id)}
                                className={`block w-full rounded-lg px-3 py-2 text-left text-[13px] leading-tight transition-colors ${
                                  isSelected ? 'bg-gold-50 text-gold-700 font-semibold' : 'text-zinc-600 hover:bg-white hover:text-zinc-900'
                                }`}
                              >
                                {item.name}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
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
                )}
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


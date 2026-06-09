"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Image from 'next/image';
import { 
  Building, 
  MapPin, 
  Clock, 
  Award, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  UserCheck, 
  DollarSign, 
  Briefcase, 
  BookOpen, 
  FileText, 
  Network, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  HelpCircle,
  Building2,
  Share2,
  Mail,
  Phone
} from 'lucide-react';
import { PageId } from '../types';

interface DirectoryPagesProps {
  page: PageId;
  setPage: (page: PageId) => void;
  onApplySetup: (name: string, cost: number) => void;
  openContactModal: () => void;
}

export default function DirectoryPages({ page, setPage, onApplySetup, openContactModal }: DirectoryPagesProps) {
  
  // Interactive Custom Pricing Form State
  const [calcActivity, setCalcActivity] = useState<string>('tech');
  const [calcVisas, setCalcVisas] = useState<number>(1);
  const [calcName, setCalcName] = useState<string>('');
  const [calcEmail, setCalcEmail] = useState<string>('');
  const [calcPhone, setCalcPhone] = useState<string>('');
  const [quoteCalculated, setQuoteCalculated] = useState<boolean>(false);
  const [calculatedTotal, setCalculatedTotal] = useState<number>(0);
  const [formError, setFormError] = useState<string>('');

  // Active Comparison list of page comparison IDs
  const [comparedZones, setComparedZones] = useState<string[]>(['fz-ifza', 'fz-shams']);

  // Local comparison zones list
  const lookupComparisonZones = [
    { id: 'fz-meydan', name: 'Meydan Free Zone', basePrice: 12500, visaCost: 3500, speed: '2-3 Days', location: 'Dubai (Nad Al Sheba)' },
    { id: 'fz-ifza', name: 'IFZA Dubai', basePrice: 13900, visaCost: 3750, speed: '3-4 Days', location: 'Dubai (Silicon Oasis)' },
    { id: 'fz-dmcc', name: 'DMCC Dubai', basePrice: 26000, visaCost: 4200, speed: '8-10 Days', location: 'Dubai (JLT)' },
    { id: 'fz-shams', name: 'Shams Sharjah', basePrice: 8900, visaCost: 3200, speed: '1-2 Days', location: 'Sharjah' },
    { id: 'fz-rakez', name: 'RAKEZ Ras Al Khaimah', basePrice: 11200, visaCost: 3100, speed: '4-5 Days', location: 'Ras Al Khaimah' },
    { id: 'fz-dwtc', name: 'DWTC Zayed Road', basePrice: 21000, visaCost: 3900, speed: '5-7 Days', location: 'Dubai (Zayed Road)' }
  ];

  const handleToggleComparison = (id: string) => {
    if (comparedZones.includes(id)) {
      setComparedZones(comparedZones.filter(item => item !== id));
    } else {
      if (comparedZones.length >= 3) {
        return;
      }
      setComparedZones([...comparedZones, id]);
    }
  };

  // Expert advisor data (Simulates a world-class legal consulting board)
  const advisors = {
    tarik: {
      name: "Advocate Tarik Al-Mehairi",
      role: "Senior Corporate Structuring Specialist",
      credentials: "LLB (Hons, Dubai), Al-Karimi Corporate Associate",
      experience: "14+ Years in DIFC & DET Mainland setups",
      bio: "Tarik translates complex UAE corporate laws into secure growth architectures. He has advised over 650 multinational founders entering Dubai, Sharjah, & Jebel Ali trade hubs.",
      avatarText: "TM",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    amina: {
      name: "Amina Al-Haddad",
      role: "Director of Regulatory Licensing",
      credentials: "MSc (Int'l Finance & Laws, London)",
      experience: "11+ Years liaising with free zone registrars",
      bio: "Amina coordinates instant electronic setups across Northern Free Zones and resolves complex compliance, capital clearances, and corporate holding configurations.",
      avatarText: "AH",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    }
  };

  // Get current content representation
  const getContent = () => {
    switch (page) {
      // ----------------------------------------------------
      // FREE ZONES JURISDICTION SPECIFIC PAGES
      // ----------------------------------------------------
      case 'fz-meydan':
        return {
          title: "Meydan Free Zone Setup Directory",
          subtitle: "Digital-First Dubai Hub at Meydan Racecourse",
          price: 12500,
          location: "Nad Al Sheba, Dubai (Meydan Hotel)",
          speed: "2-3 Business Days",
          score: 9.8,
          industry: "E-Commerce, Consulting, SaaS, Technology, Digital Media",
          overview: "Meydan Free Zone offers an advanced, highly scalable electronic setup. Ideal for international founders, e-commerce stores, and local consulting agencies operating remotely without physical office burdens.",
          whyThis: "Meydan sits uniquely under a prestigious hotel resort boundary, yielding immediate premium association without requiring physical desk leases. Direct API corridors to digital banking platforms like Wio Business guarantee immediate post-registration commercial account priority.",
          cheapestActivities: [
            "Online digital retail (E-commerce setups are packaged under zero-cost activity groupings)",
            "Strategic business advisory & corporate management consulting",
            "SaaS, web portals, & software engineering platforms"
          ],
          visasCost: 3500,
          process: [
            "Instant name allocation search and structural security login registry",
            "Submission of passport copies alongside biometric scan (completed fully online)",
            "Establishment of Virtual Shared Flexi Desk coordinate system",
            "Immediate routing to Wio Business or ADIB for instant corporate IBAN creation"
          ],
          advisor: advisors.tarik,
          faq: [
            { q: "Is a physical office required in Meydan?", a: "No. Meydan is designed around virtual and flexible workspace options. Founders operating worldwide can easily set up a company online without having to rent local property." },
            { q: "Do members have to submit yearly financial audits?", a: "No. Meydan Free Zone officially waives the yearly corporate financial audit submission requirement for standard commercial and consultancy licenses." },
            { q: "Can we trade physical products under Meydan?", a: "Yes. Meydan is highly flexible and permits choosing up to 3 separate activity divisions (including import/export trading) under a single base license fee." }
          ]
        };

      case 'fz-ifza':
        return {
          title: "IFZA Dubai Silicon Oasis Registration Guide",
          subtitle: "Flexible holding setups & high multi-year registration discounts",
          price: 13900,
          location: "Dubai Silicon Oasis, Outskirts Sector",
          speed: "3-4 Business Days",
          score: 9.4,
          industry: "B2B, Holding Companies, Import/Export, General Traders",
          overview: "IFZA (International Free Zone Authority) is a global ecosystem renowned for premium B2B scalability. Ideal for institutional holding corporate cells and multi-partner consultancies looking to upgrade from virtual desks to large offices.",
          whyThis: "IFZA offers exceptional, multi-year license discounts (up to 30% reduction for 3-year advance renewals) and is fully integrated with Dubai Silicon Oasis authority structures, making it highly secure for asset holding.",
          cheapestActivities: [
            "General asset investment & intellectual property holding company setups",
            "General wholesale commercial trading (import & export channels)",
            "Technical advisories & corporate recruitment structures"
          ],
          visasCost: 3750,
          process: [
            "Corporate charter structuring & partner registry name selection",
            "UBO (Ultimate Beneficial Owner) declaration & biometric data logging",
            "Office lease certificate issuance (virtual desk space is standard)",
            "Issuance of primary trade certificate & immediate visa clearance portal log"
          ],
          advisor: advisors.amina,
          faq: [
            { q: "Can holding companies register in IFZA?", a: "Yes. IFZA is one of the most cost-effective and secure free zones in Dubai for registering intellectual property holding firms and stocks holding." },
            { q: "Does IFZA require high capital deposits?", a: "No. While you register a capitalization value on paper (typically AED 50,000 to 100,000), submitting physical bank deposit receipts is not required." }
          ]
        };

      case 'fz-dmcc':
        return {
          title: "DMCC JLT Premium Regulatory Hub setup",
          subtitle: "Voted World's Best Capital Markets & Commodity Trade Authority",
          price: 26000,
          location: "Jumeirah Lake Towers (JLT), Central Dubai",
          speed: "8-10 Business Days",
          score: 9.6,
          industry: "Energy Trading, Cryptocurrency, Precious Metals, Gold, Global Corporate HQ",
          overview: "DMCC is Dubai's elite, award-winning commodities and crypto trade authority. Situated directly in the JLT district, it represents the absolute peak of corporate prestige, favored by high-tier institutional investors.",
          whyThis: "If your firm manages physical metal distribution, crypto platforms, or requires premium prestige for merchant agreements with global banks, DMCC offers specialized trade ecosystems and unparalleled financial integration.",
          cheapestActivities: [
            "Cryptocurrency utility tokens & gaming development advisory",
            "Gold, diamond, and heavy commodity broker services",
            "Multinational corporate headquarter structuring"
          ],
          visasCost: 4200,
          process: [
            "Regulatory pre-approval submission with complete business prospectus",
            "Registry name lock, passport biometric screening, & background verification check",
            "Mandatory physical flexi-office lease or physical workspace registration",
            "Corporate banking profile setup and final registry ledger authentication"
          ],
          advisor: advisors.tarik,
          faq: [
            { q: "Is a physical office mandatory for DMCC?", a: "Yes. Under DMCC structural laws, companies must secure a physical office suite or an approved physical shared flexi-desk agreement in the JLT sector." },
            { q: "Are yearly structural financial audits required?", a: "Yes. All DMCC-registered businesses must submit a yearly audited financial statement compiled by an approved local audit firm to maintain compliance." }
          ]
        };

      case 'fz-shams':
        return {
          title: "Shams Sharjah Media City License Portfolio",
          subtitle: "Cheapest UAE License for Freelancers & Solo Creators",
          price: 8900,
          location: "Sharjah, UAE (20 minutes to Dubai Intl Airport)",
          speed: "1-2 Business Days",
          score: 9.2,
          industry: "Creative, Freelancers, Media agencies, Marketing & Web design",
          overview: "Sharjah Media City (Shams) represents the absolute lowest cost entry pathway for registration. Created specifically for creators, writers, influencers, and digital consultants who want a quick, affordable launch.",
          whyThis: "Shams permits operating up to 6 visas on a base virtual flexi desk plan. This saves founders thousands of dirhams in physical real estate rental fees while giving instant access to the UAE commercial ecosystem.",
          cheapestActivities: [
            "Influencer promotional campaigns & social media management",
            "Software creation, copywriting, & commercial graphic design",
            "Online business development consultancies"
          ],
          visasCost: 3200,
          process: [
            "Name submission and instant online setup portal entry (2 hours)",
            "Digital upload of passport parameters and resident identification records",
            "Issuance of digital commercial license ledger",
            "Routing to electronic biometric screening booking for visa-seeking partners"
          ],
          advisor: advisors.amina,
          faq: [
            { q: "How fast is Shams company setup?", a: "Our average setup time for Sharjah Media City is under 24 to 48 hours for standard consulting and media activities." },
            { q: "Can dynamic bank accounts be opened in Dubai for a Sharjah entity?", a: "Yes, though the board of registry is Sharjah, the company remains fully valid across the UAE, and major Dubai banks regularly greenlight Shams accounts." }
          ]
        };

      case 'fz-rakez':
        return {
          title: "RAKEZ Ras Al Khaimah Logistics & Logistics Setup",
          subtitle: "Bespoke heavy manufacturing & industrial warehousing options",
          price: 11200,
          location: "Ras Al Khaimah, UAE (45 minutes to Dubai)",
          speed: "4-5 Business Days",
          score: 9.0,
          industry: "Industrial, Manufacturing, Heavy Logistics, Bulk Packaging, Assembly plants",
          overview: "RAKEZ (Ras Al Khaimah Economic Zone) is the premier Northern Emirates industrial and logistics powerhouse. Perfect for physical processing facilities, large assembly warehouses, and global supply import channels.",
          whyThis: "Industrial logistics plots are up to 60% cheaper to lease in RAKEZ compared to central Dubai. Dual-license functionality also permits operating domestic mainland branches without registering separate capital pools.",
          cheapestActivities: [
            "Commodity assembly & wholesale product packaging",
            "Industrial logistics orchestration & raw materials trading",
            "Machinery, steel, and electronic parts fabrication"
          ],
          visasCost: 3100,
          process: [
            "Pre-clearance of chemical/logistics blueprints with Civil Defense advisors",
            "Securing dedicated physical warehouse or land plot lease terms",
            "Establishment of dual-license mainland branch pathways (Optional)",
            "Issuance of structural factory operational permits & biometric corporate registration"
          ],
          advisor: advisors.tarik,
          faq: [
            { q: "Are custom warehouses available in RAKEZ?", a: "Yes, RAKEZ provides highly affordable customizable physical warehouses, manufacturing plants, and storage facilities directly linked to ocean ports." },
            { q: "Is visa processing cheaper in Ras Al Khaimah?", a: "Significantly. Government and medical-biometric fees are standard, but the licensing body charges much less for staff visa registrations." }
          ]
        };

      case 'fz-dwtc':
        return {
          title: "DWTC Dubai World Trade Centre Business Setup",
          subtitle: "The Business Center of Sheikh Zayed Road, Central Dubai",
          price: 21000,
          location: "Sheikh Zayed Road, Dubai World Trade Centre Complex",
          speed: "5-7 Business Days",
          score: 9.3,
          industry: "Event Management, Regional Multinationals, Wealth Managers",
          overview: "DWTC is an ultra-prime free zone authority situated in the financial heartland of Dubai on Sheikh Zayed Road. Outstanding corporate positioning designed for major regional offices and elite B2B meeting desks.",
          whyThis: "DWTC permits direct integration with Dubai's largest international conference center, ensuring exceptional public association and direct walking proximity to class-A executive transport, hotels, and legal corridors.",
          cheapestActivities: [
            "International conference management & corporate event coordination",
            "Wealth management advisories & premium regional board holding units",
            "Commercial asset representation & international brokerage"
          ],
          visasCost: 3900,
          process: [
            "Corporate resolution drafting and structure registry name search Approval",
            "Securing space reservation within the central World Trade Centre tower systems",
            "Security clearing check and electronic UBO ledger registry logging",
            "Trade license delivery and rapid local bank executive priority profiling"
          ],
          advisor: advisors.amina,
          faq: [
            { q: "Does DWTC require physical office leasing?", a: "Yes, DWTC centers on premium physical presence on Sheikh Zayed Road. Desk shares or offices are standard prerequisites for active trade licenses." },
            { q: "Is DWTC aligned with high-end banking?", a: "Extremely. Having a DWTC office on Sheikh Zayed Road dramatically simplifies KYC approval times at tier-1 international banks." }
          ]
        };

      // ----------------------------------------------------
      // LICENSE TYPE SPECIFIC PAGES
      // ----------------------------------------------------
      case 'lic-ecommerce':
        return {
          title: "E-Commerce License UAE",
          subtitle: "Official Licensing & Strategy Guide for Online Retail in Dubai",
          price: 12500,
          location: "Official UAE Licensing Hub",
          speed: "2-3 Business Days",
          score: 9.7,
          industry: "E-Commerce, Dropshipping, Web Stores, Retail Platforms",
          overview: "An E-Commerce license allows you to sell products and digital assets online legitimately across the GCC. Scale Partners streamlines the process of linking your license to payment providers like Stripe and Checkout.",
          whyThis: "Failing to secure a verified e-commerce trade license in the UAE leads to immediate local payment merchant gateway rejection and potential customs inventory seizures. We align you with free zones that do not charge extra on e-commerce activity bundles.",
          cheapestActivities: [
            "Single-brand dropshipping & multi-vendor wholesale web stores",
            "Digital asset licensing & subscriptions (SaaS distribution hubs)",
            "Logistics integration with regional fulfillment warehouses (Dubaipost)"
          ],
          visasCost: 3500,
          process: [
            "Selection of responsive digital trade registry names matching domain names",
            "Registering payment processing gateways with official corporate ledgers",
            "Securing flexi desk digital logistics compliance coordinates",
            "Delivery of complete operating license with global trade clearance rights"
          ],
          advisor: advisors.tarik,
          faq: [
            { q: "Can I use Stripe with a UAE E-Commerce license?", a: "Absolutely. Stripe, Checkout.com, and local networks require an active corporate trade license and a corporate bank account to activate processing pipelines." },
            { q: "Is a physical warehouse required to dropship?", a: "No. For standard dropshipping, virtual workspace coordinates are 100% compliant and accepted by the Department of Economy and Tourism and Free Zone systems." }
          ]
        };

      case 'lic-trading':
        return {
          title: "General Trading License UAE",
          subtitle: "Import, Export & Wholesale Distribution Authority",
          price: 13900,
          location: "Official UAE Licensing Hub",
          speed: "3-4 Business Days",
          score: 9.5,
          industry: "Wholesale, Electronics distribution, Fashion supply, Foodstuffs distribution",
          overview: "A General Trading license offers unparalleled freedom. It allows corporate entities to import, export, and trade diverse goods (e.g., electronics, cosmetics, apparel) simultaneously under one secure license.",
          whyThis: "Simple commercial licenses restrict you to specific product lists. A General Trading validation allows global trade across multiple industries without requiring continuous regulatory updates.",
          cheapestActivities: [
            "Global product sourcing, custom brokering, & redistribution routing",
            "Raw materials trading, heavy machinery components shipping",
            "Consumer goods imports & regional packaging"
          ],
          visasCost: 3500,
          process: [
            "Corporate charter structuring & partner registry name selection",
            "UBO (Ultimate Beneficial Owner) declaration & biometric data logging",
            "Establishing logistics warehouse agreements (Meydan, IFZA, or RAKEZ coordinates)",
            "Customs code issuance and corporate logistics clearing registry"
          ],
          advisor: advisors.tarik,
          faq: [
            { q: "How do I secure a UAE Customs Code?", a: "Once your General Trading license is issued, our PRO desk submits it to Dubai Customs, securing your official customs code within 48 hours." },
            { q: "Are separate licenses needed for distinct products?", a: "No, a General Trading license explicitly permits the import and trade of multiple non-conflicting product groups under one unified structure." }
          ]
        };

      case 'lic-commercial':
        return {
          title: "Commercial & Business Services License",
          subtitle: "Consultancies, SaaS Platforms, Agencies & B2B Structuring",
          price: 12500,
          location: "Official UAE Licensing Hub",
          speed: "2-3 Business Days",
          score: 9.6,
          industry: "Consultants, Tech Agencies, Marketing partners, SaaS companies",
          overview: "Designed for service-oriented firms, from marketing agencies to tech platforms. This license provides structural authorization to deliver intellectual and technology-driven operations globally.",
          whyThis: "Scale Partners integrates your consulting structure with premium local banks and coordinates instant VAT tax setup logs, enabling stress-free regional corporate billing.",
          cheapestActivities: [
            "Digital marketing, branding & SEO services optimization",
            "Capital risk consulting and business expansion plans advisory",
            "SaaS software architecture development and licenses distribution"
          ],
          visasCost: 3500,
          process: [
            "Name allocation check & legal structure setup",
            "Virtual flexi desk coordinate mapping",
            "Payment processing gateways integration & VAT setup logistics matching",
            "Trade license delivery and priority bank corporate profiling"
          ],
          advisor: advisors.amina,
          faq: [
            { q: "Can consulting firms operate remotely?", a: "Yes. UAE service-based consultancies can operate 100% remotely with virtual desk coordinates, while maintaining standard compliance levels." },
            { q: "Are professional services exempt from corporate tax?", a: "If your taxable income is below AED 375,000, you qualify for 0% corporate tax under Small Business Relief schemes. Over this threshold, standard corporate tax is 9%." }
          ]
        };

      case 'lic-media':
        return {
          title: "Media, Publishing & Creative License UAE",
          subtitle: "Perfect for Freelance Creators, Publishers & agencies",
          price: 8900,
          location: "Official UAE Licensing Hub",
          speed: "1-2 Business Days",
          score: 9.4,
          industry: "Influencers, Content creators, Photographers, Copywriters, Publishing platforms",
          overview: "Created specifically for creators, writers, influencers, and creative directors looking to establish an official, tax-free business entity and secure local residency visas.",
          whyThis: "Operating a commercial media business or paid influencer services without an official Trade License violates local media regulation codes. We provide fast, cost-effective creative permits with zero bureaucratic delays.",
          cheapestActivities: [
            "Creative copywriting, digital art, & UI/UX design portfolios",
            "Social media influencer promotional content creation",
            "Photography & video production advisories"
          ],
          visasCost: 3200,
          process: [
            "Online submission of name choice & creative business scope",
            "Instant creation of electronic registry file & document screening",
            "Issuance of Digital Freelance Permit or commercial media license",
            "Emirates ID & residency visa clearing (completed on-site or virtual scan)"
          ],
          advisor: advisors.amina,
          faq: [
            { q: "Do I need a National Media Council (NMC) license?", a: "For freelancers and creative consultants, Shams and similar free zones package media activities so that separate NMC filings are not required." },
            { q: "Can a freelancer open a corporate bank account in the UAE?", a: "Yes. Our team structures your creative business registration so that you can open a dedicated corporate bank account as a corporate entity." }
          ]
        };

      case 'lic-industrial':
        return {
          title: "Industrial & Manufacturing License UAE",
          subtitle: "Heavy Assembly, Packing & Factory Operations",
          price: 11200,
          location: "Official UAE Licensing Hub",
          speed: "4-5 Business Days",
          score: 9.1,
          industry: "Manufacturers, Packaging firms, Metal assembly shops, Chemical processors",
          overview: "Designed for businesses involved in converting raw materials or assembling components into finished goods. Requires official clearance from environmental and civil defense regulatory groups.",
          whyThis: "Scale Partners matches your manufacturing operation with cost-effective industrial zones (like RAKEZ) that feature cheap power grids, cargo ports, and zero-tax customs corridors.",
          cheapestActivities: [
            "Household products packaging & bulk commodities assembly",
            "Electronics assembly, metal forging & logistics supply",
            "Chemical packaging compliance & logistics distribution"
          ],
          visasCost: 3100,
          process: [
            "Environmental impact review approval and local civil defense log mapping",
            "Inspecting and signing lease contracts for industrial warehouse facilities",
            "Factory facility installation monitoring alongside municipal inspectors",
            "Trade license delivery and final logistics activation"
          ],
          advisor: advisors.tarik,
          faq: [
            { q: "Is municipal inspection mandatory?", a: "Yes. All physical industrial processing and assembly plants must pass standard local safety, waste, and fire inspections prior to operational launch." },
            { q: "Can products be sold directly to the UAE domestic market?", a: "Yes. However, you must route local domestic sales through a licensed mainland distributor, or hold a dual-licensing mainland branch permission." }
          ]
        };

      case 'lic-holding':
        return {
          title: "Holding Company & SPV Setup Guide",
          subtitle: "Secure Asset Protection & International Equity Management",
          price: 13900,
          location: "Official UAE Licensing Hub",
          speed: "3-4 Business Days",
          score: 9.6,
          industry: "Wealth management, IP protection, Family offices, Stocks holding",
          overview: "A Holding Company or Special Purpose Vehicle (SPV) is a secure corporate shell designed only to hold assets (such as stocks, branding rights, or real estate) without engaging in active retail.",
          whyThis: "This structure creates a robust legal barrier, safeguarding your intellectual property and global wealth from direct operating liabilities, with zero corporate tax overhead.",
          cheapestActivities: [
            "IP management and licensing rights allocation",
            "Global shares tracking and family trust administration portfolios",
            "Real estate and international land assets administration"
          ],
          visasCost: 3500,
          process: [
            "Securing high-level corporate name clearance with free zone deans",
            "UBO (Ultimate Beneficial Owner) ledger charting & asset source screening",
            "Issuance of secure holding corporate coordinates & tax certificates",
            "Routing to international banking desks for global asset custodian setup"
          ],
          advisor: advisors.amina,
          faq: [
            { q: "Does a UAE holding company pay corporate taxes?", a: "No. Dividends and capital gains received from qualifying retail participations are generally exempted from the UAE's 9% corporate tax." },
            { q: "Is a physical office required to manage global shares?", a: "No. UAE holding companies and SPVs operate highly efficiently on virtual desk logs without requiring active commercial space." }
          ]
        };

      default:
        return null;
    }
  };

  const content: any = getContent();

  if (content) {
    const pageImageMap: Record<string, {
      image1: string;
      image1Label: string;
      image1Heading: string;
      image1Desc: string;
      image2: string;
      image2Label: string;
      image2Heading: string;
      image2Desc: string;
    }> = {
      'fz-meydan': {
        image1: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        image1Label: "MEYDAN PRESTIGE DIGITAL BUSINESS HQ",
        image1Heading: "Prestige Corporate Suites at Meydan Dubai",
        image1Desc: "Located in the elite Meydan Hotel Resort boundary, presenting premium brand associations with digital API licensing coordinates of real expert advisors.",
        image2: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        image2Label: "FAST-TRACK BANKING ACCESS CORRIDORS",
        image2Heading: "Sovereign ADIB & Wio Business Onboarding Desks",
        image2Desc: "Each Meydan corporate suite file is pre-cleared by our dedicated deans with live digital merchant logs."
      },
      'fz-ifza': {
        image1: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
        image1Label: "IFZA SILICON OASIS ECOSYSTEM",
        image1Heading: "Continuous Multi-Year Holding Structures",
        image1Desc: "The prime gateway for institutional consultancies and high-status global holding families overseen by our partner advisors.",
        image2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        image2Label: "B2B SCALED AUDITING CHAMBERS",
        image2Heading: "Sovereign Financial Reconciliations & Escrow",
        image2Desc: "Protect capital yields without standard local filing constraints, fully structured under custom bylaws."
      },
      'fz-dmcc': {
        image1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        image1Label: "DMCC JLT HEADQUARTERS DISTRICT",
        image1Heading: "Sovereign Precious Metals & Commodities Vault Flow",
        image1Desc: "Voted world's best commodities terminal, housing global financial boardrooms and elite investment desks run by registered clearing brokers.",
        image2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        image2Label: "COMMODITIES REGISTERED CUSTODIAN",
        image2Heading: "Continuous Multi-Currency Escrow Corridors",
        image2Desc: "Maintain active dual-currency investment channels in Emirates NBD and First Abu Dhabi central divisions."
      },
      'fz-shams': {
        image1: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        image1Label: "SHAMS SHARJAH MEDIA DISTRICT",
        image1Heading: "SaaS & Digital Content Production Studios",
        image1Desc: "Optimized for visual media, creative agencies, and cross-border digital platforms under elite advisory managers.",
        image2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
        image2Label: "CREATIVE SECTOR LABS",
        image2Heading: "Intellectual Property & Franchise Registration Desks",
        image2Desc: "Establish virtual desk locations and allocate up to 6 investor visas under express procedures."
      },
      'fz-rakez': {
        image1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        image1Label: "RAKEZ INDUSTRIAL DEEPWATER SEAPORT",
        image1Heading: "Industrial Logistics & Heavy Packaging Warehouses",
        image1Desc: "Northern Emirates manufacturing and distribution center, governed by active on-site factory managers and logistical clearing deans.",
        image2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        image2Label: "BULK CARGO CUSTOMS PORT",
        image2Heading: "Zero-Duty Customs Approvals & Freight Corridors",
        image2Desc: "Direct integration with sea border guards ensures instant, seamless goods delivery logs."
      },
      'fz-dwtc': {
        image1: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
        image1Label: "DWTC FINANCIAL COMPLEX SECTOR",
        image1Heading: "Premium Sheikh Zayed Road Financial Offices",
        image1Desc: "Surrounded by Dubai's most historic corporate high-rises, guided by wealth management directors and family offices.",
        image2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
        image2Label: "FAMILY WEALTH ESCROW COUNCILS",
        image2Heading: "Dual-Category Financial Licensing Safeguards",
        image2Desc: "Operate across Free Zone limits and Mainland advisory channels on the same regulatory file."
      },
      'lic-ecommerce': {
        image1: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
        image1Label: "DIGITAL MERCHANT SETUPS",
        image1Heading: "Standard Credit Card Processor Gateway Corridors",
        image1Desc: "Unlock instant merchant profiles on Stripe, Adyen, and PayPal under professional online retail strategy consultants.",
        image2: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        image2Label: "B2C COURIER & DHL ROUTING DESK",
        image2Heading: "Fast-Track Custom Clearance Integration Logs",
        image2Desc: "Our legal representatives map operations directly inside dnata and Dubai custom gates."
      },
      'lic-trading': {
        image1: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
        image1Label: "GLOBAL TRADING HOUSES",
        image1Heading: "Chartered Import & Export Asset Operations",
        image1Desc: "Perfect for physical commodities bulk trading, petroleum, clothing, and construction materials.",
        image2: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        image2Label: "TRADE FINANCE ESCROW",
        image2Heading: "Sovereign Letters of Credit & Bank Treasury Channels",
        image2Desc: "Enjoy direct personal access to assigned premium Dubai banker relationship managers."
      },
      'lic-commercial': {
        image1: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        image1Label: "B2B ADVISORY OFFICES",
        image1Heading: "Mainland Corporate Structures & Board Seats",
        image1Desc: "Professional business setups designed to serve mainland companies with 100% foreign equity under designated executive partners.",
        image2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        image2Label: "SOVEREIGN LOCAL AGENT REGISTRY",
        image2Heading: "Sovereign Non-Operational Partner Protections",
        image2Desc: "Our legal firm acts as your formal, non-interfering local agent to protect ownership of key assets."
      },
      'lic-media': {
        image1: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        image1Label: "CREATIVE PRODUCTION CHANNELS",
        image1Heading: "Sovereign Intellectual Property & Broadcasting Permits",
        image1Desc: "Perfect for cinematic producers, digital content designers, and high-status modeling agencies overseen by our creative director consultants.",
        image2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        image2Label: "TRADEMARK SHIELDS",
        image2Heading: "Continuous Ministry of Economy Trademark Audits",
        image2Desc: "Ensure proprietary marketing codes and digital creative copyrights are legally guarded."
      },
      'lic-industrial': {
        image1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        image1Label: "ADVANCED MANUFACTURING CORRIDORS",
        image1Heading: "High-Capacity Automation & Logistical Assembly",
        image1Desc: "Heavy industry setups backing metallurgy packaging lines and high-output manufacturing sectors led by active developers.",
        image2: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        image2Label: "CIVIL DEFENSE INSPECTIONS",
        image2Heading: "Continuous Factory Environmental Health Clearances",
        image2Desc: "Bypass municipal safety bottlenecks with assigned civil defense deans."
      },
      'lic-holding': {
        image1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        image1Label: "FAMILY OFFICES & SPVS",
        image1Heading: "Sovereign SPV Custodians & Holding Structures",
        image1Desc: "Protect real estate assets, private stocks, and intellectual brands with total confidentiality under premium advisor audit reviews.",
        image2: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        image2Label: "FAMILY TRUST PROTECTION",
        image2Heading: "Ultimate Beneficial Owner Shielding & Capital Access Channels",
        image2Desc: "Ensure absolute privacy and transfer global assets with zero operates tax or double taxation issues."
      }
    };

    const visuals = pageImageMap[page];
    if (visuals) {
      Object.assign(content, visuals);
    }
  }

  if (!content) {
    return (
      <div className="p-8 text-center text-zinc-500">
        <p>Page metadata load failed. Returning to standard directories.</p>
        <button onClick={() => setPage('home')} className="mt-4 bg-brand-grad border-0 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm hover:scale-[1.01] transition-transform">Back Home</button>
      </div>
    );
  }

  return (
    <div className="pt-[110px] pb-24 bg-white min-h-screen font-sans relative overflow-hidden">
      {/* SOFT AMBIENT BRAND GREEN GLOWS FOR ULTRA-PREMIUM VIBES */}
      <div className="absolute top-0 right-0 w-[50%] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(18,183,106,0.05),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[400px] bg-[radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.04),transparent_45%)] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs & Back Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 font-sans relative z-20">
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-zinc-400">
            <button onClick={() => setPage('home')} className="hover:text-sp-emerald transition-colors cursor-pointer">Home</button>
            <span className="text-zinc-300">/</span>
            {page.startsWith('fz-') ? (
              <>
                <button onClick={() => setPage('setup-freezone')} className="hover:text-sp-emerald transition-colors cursor-pointer">Free Zones Setup</button>
                <span className="text-zinc-300">/</span>
                <span className="text-zinc-850 font-semibold">{content.title.split(' ')[0]}</span>
              </>
            ) : (
              <>
                <span className="text-zinc-350">Licensing Solutions</span>
                <span className="text-zinc-300">/</span>
                <span className="text-zinc-850 font-semibold">{content.title}</span>
              </>
            )}
          </div>
          
          <button 
            id={`back_to_menu_from_${page}`}
            onClick={() => setPage(page.startsWith('fz-') ? 'setup-freezone' : 'setup-mainland')}
            className="flex items-center space-x-1.5 text-[12px] font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer border border-zinc-200 hover:border-zinc-300 px-3.5 py-2 rounded-xl bg-white shadow-3xs"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Return to Jurisdictions Index</span>
          </button>
        </div>

        {/* Dynamic Authority Body Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Informational Engine (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Fact Card */}
            <div className="bg-gradient-to-br from-sp-mintBg/80 via-white to-white rounded-2xl border border-sp-border p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden">
              <span className="inline-flex items-center space-x-1.5 text-[9.5px] font-mono tracking-wider text-[#08854C] font-bold uppercase bg-emerald-50 border border-sp-border px-3 py-1 rounded-full shadow-3xs">
                <Sparkles className="w-3.5 h-3.5 text-sp-emerald" />
                <span>UAE Approved Commercial Registry Office</span>
              </span>
              
              <div className="space-y-2">
                <h1 className="font-serif text-[28px] sm:text-[34px] font-semibold text-zinc-900 tracking-tight leading-tight">
                  {content.title}
                </h1>
                <p className="text-[13.5px] text-zinc-500 max-w-2xl font-sans font-light leading-relaxed">
                  {content.subtitle}
                </p>
              </div>

              {/* Author & Verification Signal Section */}
              <div className="flex items-center space-x-2.5 pt-2.5 border-t border-zinc-100/60 pb-1.5 font-sans">
                <div className="w-7 h-7 rounded-full bg-brand-grad text-white font-serif font-bold text-[10px] flex items-center justify-center shrink-0 shadow-xs border-0">
                  {content.advisor.avatarText}
                </div>
                <div className="text-[11.5px] text-zinc-550 flex items-center flex-wrap gap-1.5 font-sans font-light">
                  <span>Written & verified by</span>
                  <span className="font-bold text-zinc-800">{content.advisor.name}</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-500">{content.advisor.experience} active registry practice</span>
                  <span className="bg-emerald-50 text-emerald-700 text-[9.5px] px-2 py-0.5 rounded-full font-mono font-bold flex items-center space-x-1 border border-emerald-150">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span>Registrar Verified</span>
                  </span>
                </div>
              </div>

              {/* Fast Fact Pill Box Bar - Redesigned as Premium Dashboard Widgets */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-100/60">
                <div className="bg-zinc-50/60 border border-zinc-100/80 p-3 rounded-xl hover:bg-zinc-100/40 transition-all duration-300 text-left">
                  <span className="text-[9px] uppercase font-mono text-zinc-450 block mb-0.5">Starting Setup Cost</span>
                  <p className="text-[14.5px] font-mono font-bold text-[#22C55E]">AED {content.price.toLocaleString()}</p>
                </div>
                <div className="bg-zinc-50/60 border border-zinc-100/80 p-3 rounded-xl hover:bg-zinc-100/40 transition-all duration-300 text-left">
                  <span className="text-[9px] uppercase font-mono text-zinc-450 block mb-0.5">SLA Processing Time</span>
                  <p className="text-[13px] font-sans font-semibold text-zinc-850">{content.speed}</p>
                </div>
                <div className="bg-zinc-50/60 border border-zinc-100/80 p-3 rounded-xl hover:bg-zinc-100/40 transition-all duration-300 text-left">
                  <span className="text-[9px] uppercase font-mono text-zinc-450 block mb-0.5">Registry Quality Rating</span>
                  <p className="text-[13px] font-sans font-semibold text-zinc-850">{content.score} / 10</p>
                </div>
                <div className="bg-zinc-50/60 border border-zinc-100/80 p-3 rounded-xl hover:bg-zinc-100/40 transition-all duration-300 text-left">
                  <span className="text-[9px] uppercase font-mono text-zinc-450 block mb-0.5">Est. Visa Cost Deposit</span>
                  <p className="text-[13px] font-mono font-semibold text-zinc-850">AED {content.visasCost.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Cinematic Photo 1: Dynamic Premium Venue Location */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md h-[240px] relative group z-10 animate-fade-in opacity-100 transition-opacity">
              <Image 
                src={content.image1 || "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=1200&auto=format&fit=crop"} 
                alt={content.title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/95 via-[#08854C]/35 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-[10px] font-mono uppercase tracking-[0.2em] text-white border border-white/10 mb-1.5 shadow-3xs">{content.image1Label}</span>
                <h3 className="font-serif text-[18px] sm:text-[22px] text-white font-medium mt-1 leading-snug">{content.image1Heading}</h3>
                <p className="text-[12.5px] text-zinc-300 max-w-xl mt-1 font-sans">
                  {content.image1Desc}
                </p>
              </div>
            </div>

            {/* Dynamic Certified Trust Badges Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-b border-zinc-200/60/40 py-6 relative z-10 bg-zinc-50/40 px-6 rounded-2xl animate-fade-in">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2 bg-white rounded-lg border border-zinc-200 shrink-0 shadow-2xs text-gold-600">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-900 font-mono uppercase tracking-tight">FTA Partner Stamp</h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Corporate Tax Certified Desk</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="p-2 bg-white rounded-lg border border-zinc-200 shrink-0 shadow-2xs text-gold-600">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-900 font-mono uppercase tracking-tight">Executive Escrow</h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Sovereign Asset Protection</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left col-span-2 md:col-span-1">
                <div className="p-2 bg-white rounded-lg border border-zinc-200 shrink-0 shadow-2xs text-gold-600">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-900 font-mono uppercase tracking-tight">DET Approved Partner</h4>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Direct Registrar Level APIs</p>
                </div>
              </div>
            </div>

             {/* In-Depth Overview (In-Depth Strategy Content) - BEAUTIFUL SHADED GRADIENT PANEL */}
            <div className="bg-gradient-to-br from-zinc-50 via-zinc-50/50 to-[#22C55E]/5 rounded-2xl border border-zinc-200/60 p-6 sm:p-8 space-y-5 shadow-sm font-sans relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22C55E]/5 rounded-full blur-xl"></div>
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[16px] pb-3 border-b border-zinc-200/60 relative z-10">
                <BookOpen className="w-4 h-4 text-gold-500" />
                <h2>Comprehensive Registry Analysis & Strategy</h2>
              </div>
              
              <p className="text-[13.5px] text-zinc-650 leading-relaxed relative z-10 font-sans">
                {content.overview}
              </p>

              <div className="space-y-1 bg-white p-4.5 rounded-xl border border-zinc-200/60/80 shadow-xs relative z-10 animate-fade-in_500">
                <span className="text-[10.5px] font-mono text-gold-700 font-bold block uppercase tracking-wider">Strategic Business Leverage Advantage</span>
                <p className="text-[13px] text-zinc-700 leading-relaxed font-sans">{content.whyThis}</p>
              </div>

              <div className="pt-2 relative z-10">
                <h3 className="text-[13px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">Cheapest Activity Advantages</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {content.cheapestActivities.map((act, index) => (
                    <div key={index} className="flex items-start space-x-2.5 text-[12.5px] text-zinc-700 bg-white p-3.5 rounded-xl border border-zinc-100 shadow-2xs hover:scale-[1.01] transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cinematic Photo 2: Dynamic Operational Venue */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md h-[240px] relative group z-10 animate-fade-in opacity-100 transition-opacity">
              <Image 
                src={content.image2 || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"} 
                alt={content.title + " Operations HQ"} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.015] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E16]/95 via-[#08854C]/35 to-transparent flex flex-col justify-end p-6 sm:p-8 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-xs text-[10px] font-mono uppercase tracking-[0.2em] text-white border border-white/10 mb-1.5 shadow-3xs">{content.image2Label}</span>
                <h3 className="font-serif text-[18px] sm:text-[22px] text-white font-medium mt-1 leading-snug">{content.image2Heading}</h3>
                <p className="text-[12.5px] text-zinc-300 max-w-xl mt-1 font-sans">
                  {content.image2Desc}
                </p>
              </div>
            </div>

            {/* In-Depth Step-by-Step Processing Timeline - PREMIUM WARM AMBER DESK PANEL */}
            <div className="bg-gradient-to-br from-[#faf9f6] to-amber-50/20 rounded-2xl border border-zinc-200/60 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[16px] pb-3 border-b border-zinc-200/60">
                <Clock className="w-4 h-4 text-gold-600" />
                <h2>Official Administrative Setup Sequence</h2>
              </div>

              <div className="relative border-l-2 border-gold-300/30 pl-6 ml-3 space-y-6">
                {content.process.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Circle Indicator */}
                    <span className="absolute -left-[31.5px] top-1 w-5.5 h-5.5 rounded-full bg-white border-2 border-gold-650 text-[10.5px] font-bold flex items-center justify-center text-gold-700 shadow-xs group-hover:bg-gold-650 group-hover:text-white transition-all">
                      {index + 1}
                    </span>
                    <div className="bg-white border border-zinc-100 p-4 rounded-xl shadow-2xs space-y-1 hover:border-gold-350/30 hover:shadow-xs transition-all">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">Phase {index + 1}</span>
                      <p className="text-[13px] font-medium text-zinc-800 leading-relaxed pl-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic FAQs Section Specific to target setup - COMPLIANT SHADED CONTAINER */}
            <div className="bg-gradient-to-br from-[#22C55E]/5 via-zinc-50/40 to-white rounded-2xl border border-[#22C55E]/20 p-6 sm:p-8 space-y-5 shadow-sm relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#22C55E]/5 rounded-full blur-2xl"></div>
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[16px] pb-3 border-b border-zinc-200/60 relative z-10">
                <HelpCircle className="w-4 h-4 text-gold-500" />
                <h2>Registration FAQs & Compliance Guide</h2>
              </div>

              <div className="space-y-3.5 relative z-10">
                {content.faq.map((faq_item, ind) => (
                  <div key={ind} className="bg-white/95 backdrop-blur-xs border border-zinc-200/60/60 p-4.5 rounded-xl hover:border-[#22C55E]/40 shadow-2xs hover:shadow-xs transition-all space-y-2">
                    <h3 className="text-[13.5px] font-bold text-zinc-900 flex items-start space-x-2">
                      <span className="text-gold-650 font-mono font-bold">Q:</span>
                      <span>{faq_item.q}</span>
                    </h3>
                    <p className="text-[12.5px] text-zinc-650 leading-relaxed font-sans pl-5 border-l border-gold-450/30">
                      {faq_item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>            {/* INTERACTIVE COMPONENT: CHOOSE ACTIVITY FORM & PRICE CALCULATOR */}
            {page.startsWith('fz-') && (
              <div id="fz_interactive_calculator_card" className="bg-gradient-to-tr from-[#0C2E1A] via-[#12B76A] to-[#22C55E] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border-0 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#faf9f0] font-bold block">Tailored Price Allocation</span>
                  <h3 className="font-serif text-[20px] font-semibold tracking-tight text-white">Generate Instant Verified Setup Cost</h3>
                  <p className="text-[12px] text-white/90 leading-relaxed">
                    Select your core activity classification and the total visa allocations needed to secure instant, certified pricing with direct registry clearance logs.
                  </p>
                </div>

                {!quoteCalculated ? (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!calcName.trim() || !calcEmail.trim()) {
                      setFormError('Please enter your name and email to proceed.');
                      return;
                    }
                    setFormError('');
                    const total = content.price + (calcVisas * content.visasCost);
                    setCalculatedTotal(total);
                    setQuoteCalculated(true);
                  }} className="space-y-4 relative z-10">
                    {formError && (
                      <div className="p-3 bg-red-500/20 border border-red-500/30 text-white rounded-xl text-[12px] font-medium leading-relaxed">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Activity Select */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[11.5px] font-mono uppercase text-white/85 font-semibold block">Business Activity Class</label>
                        <select
                          value={calcActivity}
                          onChange={(e) => setCalcActivity(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] text-white focus:outline-none focus:border-white transition-all font-sans"
                        >
                          <option value="Technology / Software" className="text-zinc-900">Technology / AI / Software</option>
                          <option value="E-Commerce Retail" className="text-zinc-900">E-Commerce / Online Retail</option>
                          <option value="Professional Consulting" className="text-zinc-900">Professional Consulting / Services</option>
                          <option value="General Goods Trading" className="text-zinc-900">General Goods Commercial Trading</option>
                          <option value="Asset holding" className="text-zinc-900">Asset & Intellectual Property Holding</option>
                        </select>
                      </div>

                      {/* Visa Count selection */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[11.5px] font-mono uppercase text-white/85 font-semibold block">Resident Visa Count</label>
                        <select
                          value={calcVisas}
                          onChange={(e) => setCalcVisas(parseInt(e.target.value))}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] text-white focus:outline-none focus:border-white transition-all font-sans"
                        >
                          <option value="0" className="text-zinc-900">0 Visas (Owner/Investor Only)</option>
                          <option value="1" className="text-zinc-900">1 Resident Visa</option>
                          <option value="2" className="text-zinc-900">2 Staff Visas</option>
                          <option value="3" className="text-zinc-900">3 Staff Visas</option>
                          <option value="4" className="text-zinc-900">4 Staff Visas</option>
                          <option value="5" className="text-zinc-900">5 Staff Visas</option>
                          <option value="6" className="text-zinc-900">6 Staff Visas (Max Virtual Plan)</option>
                        </select>
                      </div>
                    </div>

                    {/* Personal contact forms */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-white/85 uppercase font-semibold block">Founder Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Advocate Founder Name"
                          value={calcName}
                          onChange={(e) => setCalcName(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] placeholder-white/50 text-white focus:outline-none focus:border-white transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono text-white/85 uppercase font-semibold block">Corporate Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="fdi@scale-partners.com"
                            value={calcEmail}
                            onChange={(e) => setCalcEmail(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] placeholder-white/50 text-white focus:outline-none focus:border-white transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-mono text-white/85 uppercase font-semibold block">Mobile Number</label>
                          <input
                            type="tel"
                            placeholder="+971 50 123 4567"
                            value={calcPhone}
                            onChange={(e) => setCalcPhone(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[12.5px] placeholder-white/50 text-white focus:outline-none focus:border-white transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-gold-500 font-bold py-3.5 rounded-xl text-[13.5px] shadow-lg transition-transform hover:scale-[1.005] border-0"
                    >
                      Process Registry Pricing Quote
                    </button>
                  </form>
                ) : (
                  <div className="space-y-5 animate-fade-in text-left relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 space-y-3.5">
                      <div className="flex justify-between items-baseline pb-2 border-b border-white/25">
                        <span className="text-[11.5px] text-white/85 font-mono">Registry Category:</span>
                        <span className="text-[13px] text-white font-bold capitalize">{content.title.split(' ')[0]}</span>
                      </div>
                      
                      <div className="space-y-1.5 text-[12.5px] text-white/90 font-mono">
                        <div className="flex justify-between">
                          <span>Base Authority License Fee:</span>
                          <span className="text-white">AED {content.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Selected Activity Licensing:</span>
                          <span className="text-white font-semibold">AED 0 (Free Bundle)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Resident Visa Fees ({calcVisas} allocations):</span>
                          <span className="text-white font-semibold flex-end">AED {(calcVisas * content.visasCost).toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/25 flex justify-between items-baseline font-sans">
                        <span className="text-[12.5px] text-[#faf9f0] uppercase font-extrabold font-mono">Custom Total Quote:</span>
                        <strong className="text-[20px] font-bold text-white font-mono">AED {calculatedTotal.toLocaleString()}</strong>
                      </div>
                    </div>

                    <p className="text-[11.5px] text-white/80 text-center italic font-sans">
                      ✓ Generated for <strong>{calcName}</strong>. Standard 24h setup guarantees applied.
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setQuoteCalculated(false)}
                        className="flex-1 bg-white/10 border border-white/20 text-white text-[12.5px] py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold"
                      >
                        ← Recalculate
                      </button>
                      <button
                        onClick={() => onApplySetup(`${content.title} (Pre-calculated)`, calculatedTotal)}
                        className="flex-2 bg-white text-gold-500 font-bold text-[12.5px] py-3 rounded-lg transition-transform hover:scale-[1.01] shadow-md text-center border-0"
                      >
                        Lock & Register License
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* INTERACTIVE COMPONENT: ACTIVE FREE ZONE COMPARISON TOOL */}
            {page.startsWith('fz-') && (
              <div id="fz_active_comparisons_card" className="bg-white rounded-2xl border border-zinc-200/60 p-6 sm:p-8 space-y-6 shadow-sm text-left">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5">
                    <Building2 className="w-4 h-4 text-gold-650" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 font-bold">Live Comparative Matrix</span>
                  </div>
                  <h3 className="font-serif text-[19px] font-semibold text-zinc-900 tracking-tight">Active Free Zone Comparison</h3>
                  <p className="text-[12px] text-zinc-500 leading-relaxed">
                    Toggle other jurisdictions in real-time to compare administrative fees, geographic proximities, and setup SLAs side-by-side with <strong className="text-zinc-800">{content.title.split(' ')[0]}</strong>.
                  </p>
                </div>

                {/* Multiselection badges */}
                <div className="space-y-2">
                  <span className="text-[10.5px] font-mono text-zinc-400 uppercase block">Select Authorities to compare:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {lookupComparisonZones.map(zone => {
                      const isCurrent = zone.id === page;
                      const isSelected = comparedZones.includes(zone.id);
                      if (isCurrent) return null;
                      return (
                        <button
                          key={zone.id}
                          onClick={() => handleToggleComparison(zone.id)}
                          className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                            isSelected 
                              ? 'bg-[#22C55E]/10 text-zinc-900 border border-[#22C55E]/20 shadow-2xs font-semibold' 
                              : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200'
                          }`}
                        >
                          <span className="mr-1">{isSelected ? '✓' : '+'}</span>
                          {zone.name.split(' (')[0].split(' Dubai')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Comparison Scores Table */}
                <div className="overflow-x-auto rounded-xl border border-zinc-200/60 bg-zinc-50/25">
                  <table className="w-full min-w-[700px] text-left border-collapse text-[12px]">
                    <thead>
                      <tr className="bg-zinc-50 text-[10px] font-mono uppercase text-zinc-500 border-b border-zinc-200/60">
                        <td className="p-3">Jurisdiction</td>
                        <td className="p-3">Base Price</td>
                        <td className="p-3">Visa Cost</td>
                        <td className="p-3">Location Context</td>
                        <td className="p-3">Setup SLA</td>
                        <td className="p-3 text-right">Route option</td>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 font-sans text-zinc-700">
                      {/* Current Page Zone */}
                      <tr className="bg-[#22C55E]/5 font-medium text-zinc-900">
                        <td className="p-3 flex items-center space-x-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                          <span>{content.title.split(' Setup')[0].split(' License')[0]}</span>
                          <span className="text-[9px] bg-[#22C55E]/10 text-gold-500 px-1 rounded uppercase font-mono block">Current</span>
                        </td>
                        <td className="p-3 font-mono font-semibold">AED {content.price.toLocaleString()}</td>
                        <td className="p-3 font-mono">AED {content.visasCost.toLocaleString()}</td>
                        <td className="p-3 truncate max-w-[140px] text-zinc-400" title={content.location}>{content.location.split(' (')[0]}</td>
                        <td className="p-3">{content.speed}</td>
                        <td className="p-3 text-right">
                          <span className="text-[10px] font-mono text-gold-500 block bg-[#22C55E]/10 px-2 py-0.5 rounded text-center font-bold">Active Page</span>
                        </td>
                      </tr>

                      {/* Filter matches which are in selection and compare list */}
                      {lookupComparisonZones.filter(z => comparedZones.includes(z.id)).map(zone => (
                        <tr key={zone.id} className="hover:bg-zinc-50/50 transition-colors animate-fade-in">
                          <td className="p-3 font-semibold text-zinc-850">{zone.name}</td>
                          <td className="p-3 font-mono">AED {zone.basePrice.toLocaleString()}</td>
                          <td className="p-3 font-mono text-zinc-500">AED {zone.visaCost.toLocaleString()}</td>
                          <td className="p-3 text-zinc-500 truncate max-w-[140px]">{zone.location}</td>
                          <td className="p-3 text-zinc-650">{zone.speed}</td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => {
                                setPage(zone.id as PageId);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="text-[10.5px] leading-none font-bold text-indigo-700 hover:text-indigo-900 hover:underline inline-flex items-center space-x-0.5"
                            >
                              <span>Switch</span>
                              <ChevronRight className="w-3 h-3 text-indigo-700" />
                            </button>
                          </td>
                        </tr>
                      ))}

                      {comparedZones.length === 0 && (
                        <tr>
                          <td colSpan={6} className="p-4 text-center text-[11px] text-zinc-400 italic">
                            Select other economic economic zones above to run comparisons.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Expert Sidebar Panel (1 Column, Sticky) */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-[115px] h-fit">
            
            {/* 1. Expert Reviewer (Author) Card */}
            <div className="bg-white rounded-2xl border border-zinc-150 p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Verified Registry Advisor (Author)</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-md border border-zinc-200 relative bg-zinc-50">
                    {content.advisor.avatarUrl ? (
                      <Image 
                        src={content.advisor.avatarUrl} 
                        alt={`${content.advisor.name} Portrait`} 
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-grad text-white font-serif font-bold text-[14px] flex items-center justify-center">
                        {content.advisor.avatarText}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-zinc-900 leading-tight">{content.advisor.name}</h4>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5">{content.advisor.role}</p>
                  </div>
                </div>

                <p className="text-[12px] text-zinc-650 leading-relaxed italic border-l-2 border-emerald-600 pl-3.5">
                  "{content.advisor.bio}"
                </p>

                <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200/60 grid grid-cols-2 gap-2 text-[11px] text-zinc-550 font-sans">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Credentials</span>
                    <strong className="text-zinc-800 font-medium truncate" title={content.advisor.credentials}>{content.advisor.credentials.split(',')[0]}</strong>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-zinc-400">Experience</span>
                    <strong className="text-zinc-800 font-medium">{content.advisor.experience}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Social Share Buttons (Placed Strategically under Author) */}
            <div className="bg-white rounded-2xl border border-zinc-150 p-6 space-y-4 shadow-sm text-left">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <Share2 className="w-4 h-4 text-emerald-600" />
                <span>Share This Directory</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                    const shareTitle = typeof window !== "undefined" ? document.title : "";
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex flex-col items-center justify-center p-2.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[10px] text-zinc-700 transition-all font-semibold font-sans gap-1 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-600" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
                
                <button
                  onClick={() => {
                    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                    const shareTitle = typeof window !== "undefined" ? document.title : "";
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex flex-col items-center justify-center p-2.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[10px] text-zinc-700 transition-all font-semibold font-sans gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-zinc-600" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X (Twitter)</span>
                </button>
                
                <button
                  onClick={() => {
                    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
                    const shareTitle = typeof window !== "undefined" ? document.title : "";
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " - " + shareUrl)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex flex-col items-center justify-center p-2.5 bg-zinc-50 border border-zinc-200 hover:border-zinc-350 hover:bg-zinc-100 rounded-xl text-[10px] text-zinc-700 transition-all font-semibold font-sans gap-1 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-zinc-600" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.738-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.06 1.953 12.01 1.953c-5.438 0-9.864 4.372-9.868 9.8-.001 1.724.463 3.411 1.343 4.908L2.484 20.3l3.163-.83.003-.001z"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* 3. Contact Details & Address Card (Updated Correct Info) */}
            <div className="bg-white rounded-2xl border border-zinc-150 p-6 space-y-4 shadow-sm text-left">
              <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-[11px] font-mono uppercase tracking-wider pb-3 border-b border-zinc-100">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Registry Location Info</span>
              </div>
              
              <div className="space-y-3 font-sans text-[12.5px] text-zinc-650">
                <div className="flex items-start space-x-2.5">
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0 mt-0.5 animate-pulse">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-zinc-400 block font-bold">Headquarters</span>
                    <a 
                      href="https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-900 font-semibold hover:text-emerald-600 transition-colors leading-relaxed"
                    >
                      1703, Conrad Tower,<br />
                      World Trade Center, Dubai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2.5">
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-zinc-400 block font-bold">Direct Line</span>
                    <a href="tel:+97143607999" className="text-zinc-900 font-bold hover:text-emerald-600 transition-colors">
                      04-360-7999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-zinc-400 block font-bold">Email Desk</span>
                    <a href="mailto:info@fourroadsgroup.com" className="text-zinc-900 font-semibold hover:text-emerald-600 transition-colors">
                      info@fourroadsgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Lead Application Action Card */}
            <div className="bg-gradient-to-tr from-[#0C2E1A] via-[#12B76A] to-[#22C55E] text-white rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden shadow-xl border-0">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-mono uppercase text-[#faf9f0] font-bold tracking-wider">Fast-track entry</span>
                <h3 className="font-serif text-[20px] font-semibold tracking-tight text-white">Activate This Registry</h3>
                <p className="text-[11.5px] text-white/95 font-sans leading-relaxed">
                  Lock in this portfolio framework instantly. We coordinates directly with official registrars to bypass offline desk wait times.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 border border-white/20 rounded-xl space-y-1 text-center font-mono relative z-10">
                <span className="text-[10px] text-white/85 uppercase block">Estimated Base Booking Price</span>
                <span className="text-[20px] font-bold text-white font-sans">AED {content.price.toLocaleString()}</span>
              </div>

              <button
                id={`apply_action_for_${page}`}
                onClick={() => onApplySetup(content.title, content.price)}
                className="w-full bg-white text-gold-550 text-[13px] font-bold py-3.5 rounded-xl transition-all hover:scale-[1.015] flex items-center justify-center space-x-1 shadow-md border-0 relative z-10 cursor-pointer"
              >
                <span>Initiate Business Registration</span>
                <ChevronLeft className="w-4 h-4 rotate-180 text-gold-550" />
              </button>

              <div className="text-center relative z-10">
                <button 
                  onClick={openContactModal}
                  className="text-[11px] text-white/80 hover:text-white underline transition-colors cursor-pointer bg-transparent border-0"
                >
                  or schedule standard advisory session
                </button>
              </div>
            </div>

            {/* 5. Map coordinate simulation card */}
            {page.startsWith('fz-') && (
              <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
                <div className="h-40 bg-zinc-100 relative flex items-center justify-center p-4">
                  
                  {/* Styled Map Background Grid */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Simulated Center pin */}
                  <div className="z-10 bg-white border border-zinc-200 p-3 rounded-xl flex items-center space-x-2 shadow-md">
                    <span className="w-3 h-3 rounded-full bg-gold-600 animate-ping absolute -top-1 -right-1"></span>
                    <MapPin className="w-4 h-4 text-gold-650" />
                    <div>
                      <span className="text-[11px] font-bold block text-zinc-800">{content.title.split(' ')[0]}</span>
                      <span className="text-[8.5px] text-zinc-400 block tracking-tight">Authorized Registry Coordinates</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm text-[8.5px] text-white px-2 py-0.5 rounded-full font-mono">
                    PROXIMITY RADAR: ENABLED
                  </div>
                </div>

                <div className="p-4 bg-zinc-50/50 border-t border-zinc-100 text-[11.5px] text-zinc-500 leading-normal font-sans">
                  <span className="font-semibold block text-zinc-800 mb-0.5">Physical Access Address:</span>
                  Scale Partners executive services complexes are licensed to deliver biometric clearance direct to respective registry halls in {content.location}.
                </div>
              </div>
            )}

            {/* 6. Official Registered Broker Logo Endorsement */}
            <div className="bg-gold-50/25 border border-gold-300/10 rounded-2xl p-5 text-center space-y-3 font-sans">
              <div className="flex items-center justify-center space-x-1.5 uppercase tracking-[0.15em] font-mono text-[9px] text-zinc-450 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Approved Corporate Trustee</span>
              </div>
              <p className="text-[11px] text-zinc-450 leading-relaxed font-sans font-light">
                Corporate licensing processes undergo real-time biometric and electronic verification, strictly matching Dubai Economy & Tourism protocols.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

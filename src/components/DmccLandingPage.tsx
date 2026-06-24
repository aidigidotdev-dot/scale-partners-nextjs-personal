'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Coins,
  FileCheck2,
  FileText,
  Gem,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  MapPin,
  Network,
  IdCard,
  ReceiptText,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from 'lucide-react';
import { PageId } from '../types';
import { useQuote } from './QuoteProvider';

const trustItems = [
  {
    icon: Landmark,
    value: '26,000+',
    label: 'DMCC Member Companies',
  },
  {
    icon: CheckCircle2,
    value: '1,000+',
    label: 'Licensed Activities',
  },
  {
    icon: Clock3,
    value: '10 Days',
    label: 'Typical Setup Timeline',
  },
];

const bestFor = [
  {
    icon: Gem,
    title: 'Commodity & Precious Metal Traders',
    signal: 'Trade Credibility',
    text: 'DMCC is strongest when the business model needs a serious trade ecosystem, recognized counterparties, and a premium Dubai address.',
    bullets: ['Gold, diamonds, metals, agri-products', 'Brokerage or physical trading workflows', 'Supplier and buyer credibility'],
  },
  {
    icon: Globe2,
    title: 'Import, Export & Global Trading Firms',
    signal: 'Global Routing',
    text: 'Founders using Dubai as a hub for cross-border trade benefit from DMCC credibility, JLT access, and strong commercial positioning.',
    bullets: ['General trading and product-specific trade', 'Regional headquarters setup', 'Multi-country supplier relationships'],
  },
  {
    icon: Network,
    title: 'Crypto, AI, Gaming & Tech Operators',
    signal: 'Ecosystem Access',
    text: 'DMCC has active ecosystems for digital assets, AI, gaming, and technology businesses that need community, events, and structured licensing.',
    bullets: ['Web3 support activities', 'Software and AI services', 'Gaming and digital product companies'],
  },
  {
    icon: Landmark,
    title: 'Consultants, Holdings & Family Offices',
    signal: 'Premium Structure',
    text: 'DMCC works well for founders who want a high-trust free zone for advisory, asset holding, group structures, or regional management.',
    bullets: ['Consulting and management services', 'SPVs and holding companies', 'Family office and investment structures'],
  },
];

const licenseTypes = [
  {
    icon: BriefcaseBusiness,
    title: 'Commercial / Trading License',
    tag: 'Most common for trade',
    text: 'Used for buying, selling, importing, exporting, distribution, brokerage, and product-specific trading activities. DMCC is especially attractive where the product category benefits from trade credibility and a Dubai hub address.',
    examples: ['General trading', 'Precious metals and stones', 'Food, agri, energy, equipment, and sector-specific goods'],
  },
  {
    icon: FileCheck2,
    title: 'Service / Professional License',
    tag: 'Consulting and digital services',
    text: 'Suitable for advisory, consultancy, management, technology, marketing, software, and professional service models where the company is not primarily holding inventory.',
    examples: ['Management consultancy', 'IT and software services', 'Marketing, media, and business support'],
  },
  {
    icon: Layers3,
    title: 'Industrial / Light Production License',
    tag: 'Operational review needed',
    text: 'For businesses that include manufacturing, processing, assembly, or value-added production. These activities need closer review because approvals, premises, and operational fit can affect the setup path.',
    examples: ['Assembly and processing', 'Packaging or finishing', 'Specialized production workflows'],
  },
  {
    icon: Network,
    title: 'Ecosystem-Specific Activity',
    tag: 'Premium positioning',
    text: 'DMCC has sector ecosystems for commodities, crypto, gaming, AI, e-commerce, financial services, and more. The activity wording matters because it shapes regulator comfort, banking, and future amendments.',
    examples: ['Crypto support and blockchain services', 'AI and technology services', 'Gaming, e-commerce, and digital trade'],
  },
];

const legalStructures = [
  {
    icon: Users,
    name: 'Individual Shareholder Company',
    best: 'Solo founders or partner-owned businesses',
    details: 'A new DMCC company owned by one or more individuals. This is usually the most direct route when the founder wants clean ownership and quick documentation.',
    requirements: ['Passport, address proof, visa/EID if applicable', 'Shareholder, director, manager, and signatory details', 'UBO declaration and activity details'],
  },
  {
    icon: Building2,
    name: 'Subsidiary Company',
    best: 'Existing groups expanding into Dubai',
    details: 'A DMCC entity owned by an existing local or foreign company. This is useful for groups that want a regional subsidiary with separate licensing, office, visas, and banking.',
    requirements: ['Parent company incorporation documents', 'Board resolution and ownership chart', 'Attested corporate documents where required'],
  },
  {
    icon: Landmark,
    name: 'Branch Office',
    best: 'Foreign or UAE companies needing a regional presence',
    details: 'A branch is an extension of the parent entity rather than a separate shareholder-owned subsidiary. It is useful when brand continuity and parent-company backing matter.',
    requirements: ['Parent license and constitutional documents', 'Board resolution to open branch', 'Manager appointment and activity alignment'],
  },
  {
    icon: ShieldCheck,
    name: 'SPV / Holding Company',
    best: 'Asset holding, investments, and group control',
    details: 'DMCC supports structuring routes for holding companies and SPVs through licensed channels. These are designed for asset management, group ownership, and risk separation.',
    requirements: ['Clear asset or investment purpose', 'Ownership and control documentation', 'Registered agent or additional review where applicable'],
  },
];

const processSteps = [
  {
    icon: SearchCheck,
    step: '01',
    title: 'Discovery & Activity Mapping',
    timeline: 'Day 1',
    text: 'We identify your exact activity, shareholder structure, visa needs, office requirement, and banking profile before any application is filed.',
  },
  {
    icon: BadgeCheck,
    step: '02',
    title: 'Name, Structure & Pre-Approval',
    timeline: 'Days 1-3',
    text: 'The company name, legal structure, shareholder details, and activity wording are prepared for DMCC pre-approval through the online flow.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Document Submission & Signing',
    timeline: 'Days 3-6',
    text: 'Passports, address proof, corporate documents, UBO information, resolutions, and forms are checked, uploaded, signed, and corrected where needed.',
  },
  {
    icon: Building2,
    step: '04',
    title: 'Office Solution Selection',
    timeline: 'Days 5-8',
    text: 'A flexi desk, serviced office, or physical office path is selected based on activity, visa quota, banking comfort, and budget.',
  },
  {
    icon: ReceiptText,
    step: '05',
    title: 'Payment, License & E-License',
    timeline: 'Around 10 working days',
    text: 'Once approvals, documents, office selection, and payment are complete, the DMCC e-license is issued electronically.',
  },
  {
    icon: WalletCards,
    step: '06',
    title: 'Post-License Execution',
    timeline: 'After issuance',
    text: 'We move into establishment card, visas, corporate bank account preparation, accounting setup, tax registrations, and renewal calendar.',
  },
];

const documentGroups = [
  {
    title: 'Individual Shareholders',
    items: ['Passport copy for each shareholder, director, manager, and signatory', 'UAE residence visa and Emirates ID copy if applicable', 'Proof of residential address such as utility bill or bank statement', 'Passport-style photo and contact details', 'CV or business profile for sensitive activities if requested'],
  },
  {
    title: 'Corporate Shareholders',
    items: ['Certificate of incorporation or registration', 'Memorandum and Articles of Association or equivalent charter', 'Board resolution approving the DMCC company or branch', 'Shareholding structure and UBO ownership chart', 'Good standing, incumbency, or attestation documents where applicable'],
  },
  {
    title: 'Business & Office File',
    items: ['Proposed company names and selected license activities', 'Brief business model, target markets, suppliers, and customer profile', 'Office lease, flexi desk, or property documents after selection', 'Bank reference or capital deposit evidence if requested', 'Extra regulator approvals for restricted or sensitive activities'],
  },
];

const officeOptions = [
  {
    title: 'Special / Standard Flexi Desk',
    text: 'Lean option for founders who need a registered DMCC address and a lower starting footprint. Visa quota and renewal package eligibility must be checked before selecting it.',
    fit: 'Startups, solo founders, early trading entities',
  },
  {
    title: 'Co-Working & Serviced Office',
    text: 'A stronger option for founders who want a more credible physical presence, meeting access, and smoother banking conversations without committing to a large office.',
    fit: 'Consultants, tech companies, small teams',
  },
  {
    title: 'Dedicated Physical Office',
    text: 'Best for regulated activities, larger teams, higher visa needs, bank-heavy profiles, or businesses that want a visible operating base in JLT or Uptown Dubai.',
    fit: 'Trading firms, subsidiaries, medium and large companies',
  },
];

const packages = [
  {
    name: 'DMCC Starter Review',
    price: 'AED 10,345+',
    label: 'Eligible authority package range',
    text: 'A lean review for founders comparing DMCC against lower-cost free zones. We confirm eligibility, activity fit, office route, and true first-year cost before you commit.',
    included: ['Activity and structure review', 'Cost scenario for flexi desk route', 'Document checklist and risk notes'],
  },
  {
    name: 'DMCC Core Formation',
    price: 'AED 27,900+',
    label: 'Common ecosystem package benchmark',
    text: 'Designed for founders who already know DMCC is the right fit and want licensing, document handling, office selection, and post-license next steps coordinated.',
    included: ['DMCC application support', 'Office option matching', 'License, establishment card, visa, and bank pack coordination'],
    featured: true,
  },
  {
    name: 'DMCC Corporate Desk',
    price: 'Custom quote',
    label: 'For branch, subsidiary, trading, or office-heavy setups',
    text: 'Built for corporate shareholders, commodity traders, branch offices, larger teams, and businesses needing stronger banking, compliance, and premises planning.',
    included: ['Corporate shareholder document handling', 'Physical office and visa planning', 'Accounting, audit, tax, and renewal handover'],
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Premium Free Zone Reputation',
    text: 'DMCC is a high-recognition Dubai free zone. That reputation matters when counterparties, banks, investors, and suppliers are evaluating your company.',
  },
  {
    icon: MapPin,
    title: 'JLT Business District Address',
    text: "A DMCC address places the company inside Jumeirah Lakes Towers, one of Dubai's most established mixed-use commercial districts.",
  },
  {
    icon: Network,
    title: 'Sector Ecosystems',
    text: 'Founders can plug into communities around commodities, crypto, AI, gaming, e-commerce, financial services, energy, and other specialist sectors.',
  },
  {
    icon: Scale,
    title: 'Tax-Efficient Free Zone Positioning',
    text: 'DMCC is treated as a qualified free zone for UAE corporate tax purposes, with 0% available on qualifying income subject to the applicable UAE rules.',
  },
  {
    icon: ShieldCheck,
    title: 'Ownership and Repatriation',
    text: 'Free zone setup allows 100% foreign ownership and capital repatriation, helping international founders retain control over the structure.',
  },
  {
    icon: CalendarCheck,
    title: 'Multi-Year Planning Options',
    text: 'DMCC supports multi-year licensing and renewal packages, which can help founders plan operating costs and reduce yearly admin friction.',
  },
];

const visaOptions = [
  {
    title: 'Investor / Partner Visa',
    text: 'For shareholders who want UAE residence through the DMCC company. The process usually follows license issuance, establishment card, entry permit, medical test, Emirates ID biometrics, and visa stamping/residence completion.',
  },
  {
    title: 'Employee Visa',
    text: 'For staff hired by the DMCC company. Visa quota is influenced by the office solution, license activity, job role, and authority rules at the time of application.',
  },
  {
    title: 'Family Sponsorship',
    text: 'Once the investor or employee has an eligible UAE residence visa and meets income/accommodation requirements, family sponsorship can be planned separately.',
  },
  {
    title: 'Remote Management',
    text: 'The company can often be managed remotely after formation, but UAE residence visa applicants must visit the UAE for medical fitness and Emirates ID biometrics.',
  },
];

const scalePartners = [
  'We start with activity wording, banking logic, visa needs, and office fit before filing.',
  'We prepare a clean document pack for shareholders, directors, signatories, and UBO disclosure.',
  'We help founders avoid under-budgeting by showing license, office, visa, renewal, and compliance costs together.',
  'We build the bank narrative early so the company is not licensed in a way that creates KYC friction later.',
  'We stay involved after issuance for visas, renewal, accounting, corporate tax, VAT, and compliance calendars.',
];

const renewalSteps = [
  {
    title: 'Renewal Review',
    text: 'Check license activity, office contract, establishment card, visa status, UBO details, amendments, and any pending authority actions.',
  },
  {
    title: 'Cost Confirmation',
    text: 'Confirm the applicable renewal package, office/flexi desk fee, establishment card, visa items, NOCs, penalties if any, and priority service options.',
  },
  {
    title: 'Portal Submission',
    text: 'Submit the renewal request through the DMCC portal, complete document updates, pay authority fees, and track approval through issuance.',
  },
  {
    title: 'Post-Renewal Handover',
    text: 'Update the renewal calendar, compliance tracker, accounting/audit plan, visa schedule, and bank record pack for the next operating year.',
  },
];

const complianceItems = [
  {
    title: 'UBO and Ownership Records',
    text: 'Maintain accurate Ultimate Beneficial Owner information and update it when ownership, control, directors, or signatories change.',
  },
  {
    title: 'License Activity Discipline',
    text: 'Operate only within approved activities. Add, amend, or remove activities before contracts or invoices move outside the licensed scope.',
  },
  {
    title: 'Office and Lease Validity',
    text: 'Keep the registered office, flexi desk, serviced office, or physical lease active because it affects license renewal, visas, and authority records.',
  },
  {
    title: 'Accounting and Audit Readiness',
    text: 'Maintain clean books, invoices, bank statements, contracts, and annual accounts. Audit or financial statement submission should be planned early when required by DMCC, banks, activity, or group policy.',
  },
  {
    title: 'Corporate Tax, VAT and ESR',
    text: 'Assess corporate tax registration, qualifying free zone income, VAT threshold, transfer pricing, and Economic Substance obligations for relevant activities.',
  },
  {
    title: 'Visa and Labour Records',
    text: 'Track establishment card, visa renewals, Emirates ID, insurance, role changes, cancellations, and quota needs before deadlines hit.',
  },
];

const comparisons = [
  {
    zone: 'DMCC',
    position: 'Premium trade and corporate hub',
    best: 'Commodities, trading, crypto/tech, corporate offices',
    office: 'Registered DMCC address required; flexi desk to physical offices',
    cost: 'Higher, but stronger credibility',
  },
  {
    zone: 'IFZA',
    position: 'Flexible Dubai free zone',
    best: 'Consulting, holding, general services, cost-sensitive founders',
    office: 'Virtual/flexi options depending package',
    cost: 'Often more cost-efficient than DMCC',
  },
  {
    zone: 'Meydan',
    position: 'Fast digital-first Dubai setup',
    best: 'Solo founders, digital services, lean e-commerce',
    office: 'Lean address/flexi style options',
    cost: 'Lower entry cost',
  },
  {
    zone: 'RAKEZ / Shams',
    position: 'Value-led Northern Emirates options',
    best: 'Industrial, media, freelancers, lower-cost launches',
    office: 'Flexible packages, location varies',
    cost: 'Usually lower than DMCC',
  },
];

const faqs = [
  {
    q: 'How long does DMCC company formation take?',
    a: 'DMCC states that company registration typically takes around 10 working days, depending on complete documents, activity review, office selection, payment, and approvals.',
  },
  {
    q: 'Can I set up a DMCC company remotely?',
    a: 'Yes. DMCC offers a digital setup process for application, document upload, payment, and signing. If you apply for a UAE residence visa afterward, you must come to the UAE for medical fitness and Emirates ID biometrics.',
  },
  {
    q: 'Does DMCC require an office?',
    a: 'Yes. A DMCC company needs a registered address within DMCC. Depending on the activity, budget, visa needs, and banking profile, this can be a flexi desk, serviced office, co-working solution, or dedicated physical office.',
  },
  {
    q: 'What is the starting cost for DMCC setup?',
    a: 'DMCC publishes package ranges that can start from AED 10,345 and vary significantly by package, activity, license duration, and office inclusion. Many premium ecosystem packages sit higher, so an exact quote should be confirmed before filing.',
  },
  {
    q: 'How many visas can a DMCC company get?',
    a: 'The visa allocation depends on the office solution, license activity, and DMCC rules at the time of application. A larger physical office usually supports a stronger visa position than a lean flexi desk.',
  },
  {
    q: 'Is DMCC better than IFZA or Meydan?',
    a: 'DMCC is usually better when prestige, trading credibility, JLT presence, commodities, crypto/tech ecosystem access, or banking confidence matters. IFZA or Meydan may be better for leaner budgets or simpler consulting structures.',
  },
  {
    q: 'Can a DMCC company open a UAE bank account?',
    a: 'Yes, but bank approval is never automatic. A strong bank pack should explain the activity, shareholders, source of funds, expected turnover, counterparties, office setup, and contract flow.',
  },
  {
    q: 'Do DMCC companies have ongoing compliance?',
    a: 'Yes. Expect license renewal, office validity, UBO updates, accounting records, corporate tax assessment, VAT review where relevant, visa tracking, and activity discipline. Some businesses also need extra regulator approvals or audit planning.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C7A969]/25 bg-[#F8F4EA] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[#8A6A1F]">
        <Sparkles className="h-3.5 w-3.5" />
        <span>{eyebrow}</span>
      </div>
      <h2 className={`dmcc-section-title text-[30px] leading-[1.14] sm:text-[38px] lg:text-[44px] ${tone === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-[14.5px] leading-7 sm:text-[16px] ${tone === 'dark' ? 'text-white/68' : 'text-zinc-600'}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({ children, onClick, dark = false }: { children: React.ReactNode; onClick: () => void; dark?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold transition-all duration-300 ${
        dark
          ? 'bg-white text-[#07140B] hover:bg-[#F7FBF8]'
          : 'bg-brand-grad text-white shadow-[0_18px_45px_rgba(18,183,106,0.22)] hover:scale-[1.01]'
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function SecondaryButton({ children, onClick, dark = false }: { children: React.ReactNode; onClick: () => void; dark?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-[13px] font-semibold transition-colors ${
        dark
          ? 'border-white/25 bg-white/5 text-white hover:bg-white/10'
          : 'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50'
      }`}
    >
      {children}
    </button>
  );
}

export default function DmccLandingPage() {
  const router = useRouter();
  const { openBlankModal, handleFreeZoneSelected } = useQuote();

  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  const quoteDmcc = () => handleFreeZoneSelected('DMCC Dubai', 27900);
  const dmccWhatsAppUrl = 'https://wa.me/971552051241?text=Hello%20Scale%20Partners%20Advisory%20Desk.%20I%20would%20like%20to%20speak%20to%20an%20advisor%20about%20DMCC%20company%20setup.';
  const [activeProcessIndex, setActiveProcessIndex] = React.useState(0);
  const processRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const processProgress = ((activeProcessIndex + 1) / processSteps.length) * 100;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          const index = Number(visibleEntry.target.dataset.processIndex);
          if (!Number.isNaN(index)) {
            setActiveProcessIndex(index);
          }
        }
      },
      {
        rootMargin: '-22% 0px -38% 0px',
        threshold: [0.35, 0.55, 0.75],
      }
    );

    processRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dmcc-page overflow-x-clip bg-white font-sans text-zinc-950">
      <section className="home-hero relative overflow-hidden bg-[#07140B] pt-[88px] pb-10 text-white sm:pt-[96px] sm:pb-12 lg:pt-[104px] lg:pb-14">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none"
        >
          <source src="/assets/dubai_skyline.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#07140B]/90 to-[#0B2E16]/70 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_78%_35%,rgba(34,197,94,0.16),transparent_34%),linear-gradient(90deg,rgba(7,20,11,0.34),transparent_64%)] pointer-events-none" />

        <div className="home-hero-inner relative z-30 mx-auto max-w-[1760px] px-5 sm:px-7 lg:px-8 xl:px-10">
          <div className="home-hero-grid grid grid-cols-1 items-center gap-10 bg-transparent pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-14 lg:pt-8 xl:gap-20 xl:pt-10">
            <div className="home-hero-copy space-y-5 text-center sm:space-y-6 lg:col-span-8 lg:text-left xl:col-span-7">
              <div className="mx-auto hidden max-w-full items-center space-x-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-sm backdrop-blur-md lg:mx-0 lg:inline-flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white sm:text-[10px] sm:tracking-[0.2em]">
                  DMCC JLT REGISTRY DESK
                </span>
              </div>

              <h1 className="hero-brand-headline mx-auto max-w-[360px] font-sans text-[43px] leading-[1.05] tracking-normal text-white sm:max-w-none sm:text-[58px] sm:leading-[1.08] lg:mx-0 lg:text-[66px] xl:text-[72px]">
                Setup Your<br />
                <span className="text-emerald-400">DMCC Company</span>
              </h1>

              <p className="home-hero-lede mx-auto max-w-[330px] font-sans text-[15.5px] leading-[1.6] tracking-normal text-zinc-100/90 sm:max-w-xl sm:text-[18px] sm:leading-[1.5] lg:mx-0 lg:max-w-[600px] lg:text-[17.5px] xl:max-w-[620px] xl:text-[18.5px]">
                Launch inside Dubai Multi Commodities Centre with a clear advisory path for licensing, JLT office selection, visas, banking-ready documentation, renewal, and ongoing compliance.
              </p>

              <div className="home-setup-types mx-auto grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-3 lg:mx-0 lg:max-w-[590px]">
                {[
                  { icon: Landmark, title: 'JLT Hub', subtitle: 'Premium address' },
                  { icon: Clock3, title: '10 Days', subtitle: 'Typical setup' },
                  { icon: WalletCards, title: 'Banking', subtitle: 'KYC-ready file' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-3 rounded-full border border-white/12 bg-black/10 px-3.5 py-2.5 backdrop-blur-md transition-all duration-300"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-400 group-hover:text-[#07140B]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1 text-left">
                        <h4 className="text-[12.5px] font-semibold leading-tight text-white">{item.title}</h4>
                        <p className="text-[10px] leading-tight text-zinc-300/85">{item.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row sm:gap-4 sm:pt-2 lg:justify-start">
                <button
                  onClick={quoteDmcc}
                  className="home-hero-cta flex w-full max-w-[330px] shrink-0 cursor-pointer items-center justify-center space-x-2 rounded-full border-0 bg-white px-8 py-4 font-sans text-[14.5px] font-bold tracking-tight text-gold-700 shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-[1.015] hover:opacity-95 active:scale-95 sm:w-auto sm:max-w-none"
                >
                  <span>Get DMCC Setup Quote</span>
                  <ArrowRight className="h-4 w-4 text-gold-500" />
                </button>
                <a
                  href={dmccWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full max-w-[330px] cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/10 px-8 py-4 font-sans text-[14.5px] font-bold tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 active:scale-95 sm:w-auto sm:max-w-none"
                >
                  Speak to an Advisor
                </a>
              </div>

              <div className="dmcc-hero-proof mx-auto grid max-w-2xl grid-cols-1 justify-items-center gap-4 border-t border-white/10 pt-5 sm:grid-cols-3 sm:justify-items-stretch lg:mx-0">
                {[
                  { icon: ShieldCheck, value: 'Activity', label: 'License route review' },
                  { icon: CheckCircle2, value: 'Visa', label: 'Investor and employee planning' },
                  { icon: Building2, value: 'Office', label: 'JLT workspace guidance' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <React.Fragment key={item.label}>
                      <div className="flex w-[220px] items-center justify-start space-x-3 text-left sm:w-auto sm:border-l sm:border-white/10 sm:pl-5 first:sm:border-l-0 first:sm:pl-0">
                        <Icon className="h-5.5 w-5.5 shrink-0 text-emerald-400" />
                        <div>
                          <h5 className="text-[12.5px] font-bold leading-none text-white">{item.value}</h5>
                          <span className="mt-1 block font-mono text-[10px] leading-none text-zinc-400">{item.label}</span>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-trust-strip relative z-20 bg-white">
        <div className="home-wide-container mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="home-trust-strip-card grid grid-cols-1 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_22px_60px_rgba(7,20,11,0.08)] sm:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="group flex items-center justify-center gap-4 border-b border-zinc-200/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50/60 hover:shadow-[0_18px_45px_rgba(18,183,106,0.10)] sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-6 lg:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-[17px] leading-tight text-zinc-950 lg:text-[18px]">{item.value}</div>
                  <div className="mt-0.5 text-[12px] leading-tight text-zinc-500">{item.label}</div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      <section className="home-content-sections home-wide-container relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-12">
        <div className="border-b border-zinc-200/70 py-6 lg:py-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 text-left lg:col-span-6">
              <span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#08854C]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>About DMCC Dubai</span>
              </span>
              <div className="space-y-3">
                <h2 className="max-w-2xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">
                  DMCC: Dubai's Premium Free Zone For Trade And Technology
                </h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-500">
                  DMCC sits in Jumeirah Lakes Towers and is one of Dubai's most recognized free zones for founders who want more than a basic company license.
                </p>
                <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-500">
                  It is built for businesses that care about reputation, sector ecosystems, office flexibility, banking readiness, visa planning, and long-term compliance from the first filing.
                </p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: FileText, label: 'License route' },
                  { icon: Landmark, label: 'JLT office' },
                  { icon: WalletCards, label: 'Banking pack' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-3 shadow-[0_10px_26px_rgba(7,20,11,0.04)]">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-[#08854C]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-[12.5px] font-medium leading-tight text-zinc-800">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <button
                  onClick={quoteDmcc}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-brand-grad px-6 py-3.5 text-[13.5px] font-semibold tracking-normal text-white shadow-[0_14px_32px_rgba(18,183,106,0.22)] transition-all duration-300 hover:scale-[1.01] active:scale-95 sm:w-auto"
                >
                  <span>Plan DMCC Setup</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-[12px] text-zinc-500">
                  Activity, office, visa, and banking route mapped together.
                </span>
              </div>
            </div>

            <div className="hidden lg:col-span-6 lg:block">
              <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-zinc-900 shadow-[0_28px_70px_rgba(7,20,11,0.18)]">
                <Image
                  src="/assets/dubai_skyline_financial.png"
                  alt="Dubai business district office view"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07140B]/88 via-[#07140B]/25 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      'Premium JLT address',
                      '1,000+ activities',
                      'Renewal and compliance',
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-3.5 py-3 backdrop-blur-md">
                        <CheckCircle2 className="mb-2 h-4 w-4 text-emerald-300" />
                        <span className="block text-[11.5px] leading-tight text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07140B] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-28">
        <Image
          src="/assets/dubai_skyline_financial.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,11,0.96)_0%,rgba(7,20,11,0.90)_48%,rgba(7,20,11,0.97)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-300/20 bg-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ideal Profiles</span>
              </span>
              <h2 className="mt-4 max-w-3xl font-serif text-[31px] font-semibold leading-tight tracking-normal text-white sm:text-[40px]">
                Who DMCC Is Best For
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/68">
                DMCC is the better choice when your company needs more than a low-cost license. It suits founders who want credibility, office presence, sector access, banking confidence, and a structure that can grow.
              </p>
            </div>

            <div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.06] backdrop-blur-md">
              {[
                ['Premium', 'Positioning'],
                ['JLT', 'Address'],
                ['Banking', 'Readiness'],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-white/10 px-4 py-4 text-center last:border-r-0">
                  <div className="text-[18px] leading-tight text-white">{value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {bestFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="dmcc-best-card group relative min-h-[410px] overflow-hidden rounded-[22px] bg-white/[0.075] p-6 backdrop-blur-xl"
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-[#07140B]">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <span className="font-mono text-[11px] text-white/30">0{index + 1}</span>
                    </div>

                    <div className="mt-7">
                      <span className="inline-flex rounded-full border border-[#C7A969]/25 bg-[#C7A969]/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-[#E6D49C]">
                        {item.signal}
                      </span>
                      <h3 className="mt-4 text-[21px] leading-[1.2] text-white">{item.title}</h3>
                      <p className="mt-4 text-[13px] leading-6 text-white/62">{item.text}</p>
                    </div>

                    <ul className="mt-auto space-y-2.5 pt-6">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-[12.5px] leading-5 text-white/78">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-12%] top-16 h-[360px] w-[360px] rounded-full bg-emerald-500/[0.055] blur-3xl" />
          <div className="absolute left-[-10%] bottom-10 h-[280px] w-[280px] rounded-full bg-[#C7A969]/[0.075] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#08854C]">
                <FileText className="h-3.5 w-3.5" />
                <span>License Selection</span>
              </span>
              <h2 className="mt-4 max-w-2xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">
                Types Of Licenses Available In DMCC
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
                The right license is not just a label. It affects permitted activity, approvals, office fit, banking story, contracts, tax review, and future amendments.
              </p>
            </div>

            <div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_22px_60px_rgba(7,20,11,0.08)]">
              {[
                ['Trade', 'Commercial'],
                ['Services', 'Professional'],
                ['Tech', 'Ecosystems'],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-zinc-200/70 px-4 py-4 text-center last:border-r-0">
                  <div className="text-[18px] leading-tight text-zinc-950">{value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="dmcc-license-feature relative overflow-hidden rounded-[24px] bg-[#07140B] p-7 text-white shadow-[0_28px_70px_rgba(7,20,11,0.18)] lg:sticky lg:top-28 lg:min-h-[540px] lg:self-start">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.20),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <h3 className="mt-7 text-[28px] leading-tight text-white sm:text-[32px]">
                  Choose The Right DMCC License Route
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-white/68">
                  Before filing, we map what you sell, who you invoice, whether you hold stock, how many visas you need, and what banks will expect to see in your company profile.
                </p>
                <div className="mt-auto grid gap-3 pt-8">
                  {[
                    'What products or services will the company sell?',
                    'Who will the company invoice: UAE, GCC, or global clients?',
                    'Will the company hold stock, broker deals, or provide services?',
                    'How many investor or employee visas are needed?',
                    'What proof will banks expect from the activity?',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 backdrop-blur-md">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                      <span className="text-[12.5px] text-white/82">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={quoteDmcc}
                  className="relative z-10 mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#07140B] transition-all duration-300 hover:bg-emerald-50"
                >
                  <span>Check My License Fit</span>
                  <ArrowRight className="h-4 w-4 text-[#08854C]" />
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {licenseTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="dmcc-license-row group relative overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(7,20,11,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-[0_24px_58px_rgba(7,20,11,0.10)] sm:p-6"
                  >
                    <div className="relative z-10 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-start">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-[#08854C] transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                          <Icon className="h-5.5 w-5.5" />
                        </div>
                        <div>
                          <div className="font-mono text-[11px] text-zinc-350">0{index + 1}</div>
                          <h3 className="mt-1 text-[20px] leading-tight text-zinc-950">{item.title}</h3>
                          <span className="mt-3 inline-flex rounded-full bg-[#F8F4EA] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-[#8A6A1F]">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-[13.5px] leading-7 text-zinc-600">{item.text}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.examples.map((example) => (
                            <span key={example} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11.5px] text-zinc-600 transition-colors group-hover:border-emerald-500/20 group-hover:bg-emerald-50/70">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7FBF8] px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-24 h-[320px] w-[320px] rounded-full bg-emerald-500/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#08854C]">
              <Scale className="h-3.5 w-3.5" />
              <span>Legal Structure</span>
            </span>
            <h2 className="mt-4 font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">
              Legal Structures For Company Formation In DMCC
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
              The right structure depends on who owns the company, whether a parent entity is involved, and how the Dubai entity will hold assets, invoice clients, hire staff, or represent a wider group.
            </p>
          </div>

          <div className="mt-12 rounded-[28px] border border-zinc-200/80 bg-white p-4 shadow-[0_26px_70px_rgba(7,20,11,0.08)] sm:p-5">
            <div className="grid gap-3 lg:grid-cols-4">
              {legalStructures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="dmcc-structure-node group relative min-h-[230px] overflow-hidden rounded-[22px] bg-[#F7FBF8] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_46px_rgba(7,20,11,0.10)]">
                    {index < legalStructures.length - 1 && (
                      <div className="absolute right-[-18px] top-1/2 z-20 hidden h-px w-9 bg-gradient-to-r from-emerald-400/60 to-transparent lg:block" />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#08854C] shadow-[0_10px_24px_rgba(7,20,11,0.06)] transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                          <Icon className="h-5.5 w-5.5" />
                        </div>
                        <span className="font-mono text-[11px] text-zinc-350">0{index + 1}</span>
                      </div>
                      <h3 className="mt-5 text-[19px] leading-tight text-zinc-950">{item.name}</h3>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.13em] text-[#8A6A1F]">{item.best}</p>
                      <p className="mt-4 text-[12.5px] leading-6 text-zinc-600">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 grid gap-6 rounded-[24px] bg-[#07140B] p-6 text-white sm:p-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">DMCC Structure Advisory</span>
                <h3 className="mt-3 text-[26px] leading-tight text-white sm:text-[32px]">
                  Choose The Right DMCC Legal Structure Before You File
                </h3>
                <p className="mt-4 max-w-3xl text-[14px] leading-7 text-white/66 sm:text-[15px]">
                  Share your ownership plan, parent-company status, visa needs, and banking goals. We will map the cleanest DMCC structure and document route before the application starts.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <button
                  onClick={quoteDmcc}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-semibold text-[#07140B] transition-all duration-300 hover:bg-emerald-50 sm:w-auto"
                >
                  <span>Get Structure Advice</span>
                  <ArrowRight className="h-4 w-4 text-[#08854C]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-12%] top-20 h-[340px] w-[340px] rounded-full bg-emerald-500/[0.05] blur-3xl" />
          <div className="absolute right-[-10%] bottom-24 h-[360px] w-[360px] rounded-full bg-[#C7A969]/[0.08] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-9 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[30px] bg-[#07140B] p-6 text-white shadow-[0_30px_90px_rgba(7,20,11,0.18)] sm:p-8 lg:sticky lg:top-28">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(52,211,153,0.16),transparent_34%),linear-gradient(140deg,rgba(255,255,255,0.08),transparent_34%)]" />
            <div className="relative z-10">
              <span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-300/20 bg-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                <Clock3 className="h-3.5 w-3.5" />
                <span>Timeline</span>
              </span>
              <h2 className="mt-5 max-w-xl font-serif text-[31px] font-semibold leading-tight tracking-normal text-white sm:text-[40px]">
                How To Set Up A DMCC Company
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/68">
                A premium DMCC setup is not just filing forms. It is a sequenced route where activity, ownership, office, visa, payment, and banking logic are aligned before submission.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Current Phase</div>
                    <div className="mt-2 text-[22px] leading-tight text-white">
                      Step {processSteps[activeProcessIndex]?.step}
                      <span className="text-white/35"> / {String(processSteps.length).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Typical Window</div>
                    <div className="mt-2 text-[15px] font-semibold text-emerald-200">
                      {processSteps[activeProcessIndex]?.timeline}
                    </div>
                  </div>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-[#C7A969] transition-all duration-700 ease-out"
                    style={{ width: `${processProgress}%` }}
                  />
                </div>
                <p className="mt-4 text-[13px] leading-6 text-white/56">
                  {processSteps[activeProcessIndex]?.title}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 border-y border-white/10 py-5">
                {[
                  ['01', 'Route'],
                  ['10', 'Working Days'],
                  ['06', 'Phases'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 px-3 text-center last:border-r-0">
                    <div className="text-[24px] leading-tight text-white">{value}</div>
                    <div className="mt-1 text-[10px] uppercase leading-4 tracking-[0.12em] text-white/42">{label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={quoteDmcc}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-semibold text-[#07140B] transition-all duration-300 hover:bg-emerald-50"
              >
                <span>Plan My Setup Timeline</span>
                <ArrowRight className="h-4 w-4 text-[#08854C]" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-zinc-200 md:block" />
            <div
              className="absolute left-4 top-0 hidden w-px bg-gradient-to-b from-emerald-400 via-emerald-500 to-[#C7A969] transition-all duration-700 ease-out md:block"
              style={{ height: `${processProgress}%` }}
            />
            <div className="space-y-5">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                const isActive = index <= activeProcessIndex;
                return (
                  <div
                    key={item.step}
                    ref={(node) => {
                      processRefs.current[index] = node;
                    }}
                    data-process-index={index}
                    className="relative md:pl-14"
                  >
                    <div
                      className={`absolute left-0 top-7 z-20 hidden h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 md:flex ${
                        isActive
                          ? 'border-emerald-400 bg-[#07140B] shadow-[0_0_0_8px_rgba(18,183,106,0.10),0_0_30px_rgba(18,183,106,0.24)]'
                          : 'border-zinc-200 bg-white shadow-[0_8px_20px_rgba(7,20,11,0.06)]'
                      }`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full transition-colors ${isActive ? 'bg-emerald-300' : 'bg-zinc-300'}`} />
                    </div>

                    <div
                      className={`dmcc-process-card group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 sm:p-6 ${
                        isActive
                          ? 'border-emerald-500/35 bg-white shadow-[0_24px_70px_rgba(7,20,11,0.10)]'
                          : 'border-zinc-200/80 bg-[#FBFCFB] shadow-[0_14px_38px_rgba(7,20,11,0.045)]'
                      } hover:-translate-y-1 hover:border-emerald-500/35 hover:shadow-[0_26px_72px_rgba(7,20,11,0.11)]`}
                    >
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                                isActive ? 'bg-[#07140B] text-emerald-300' : 'bg-emerald-500/10 text-[#08854C]'
                              } group-hover:bg-emerald-500 group-hover:text-white`}
                            >
                              <Icon className="h-5.5 w-5.5" />
                            </div>
                            <div>
                              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-350">Step {item.step}</div>
                              <h3 className="mt-1 text-[20px] leading-tight text-zinc-950 sm:text-[22px]">{item.title}</h3>
                            </div>
                          </div>
                          <span
                            className={`rounded-full px-3 py-1 text-[11px] transition-colors ${
                              isActive ? 'bg-emerald-50 text-[#08854C]' : 'bg-zinc-100 text-zinc-500'
                            }`}
                          >
                            {item.timeline}
                          </span>
                        </div>
                        <p className="mt-5 text-[13.5px] leading-7 text-zinc-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBF8] px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Document Pack"
            title="Documents required for DMCC company formation"
            text="DMCC may request additional documents depending on the structure, shareholder nationality, regulated activity, corporate shareholder chain, or business model. The goal is to submit a complete file the first time."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {documentGroups.map((group) => (
              <div key={group.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
                <FileText className="h-7 w-7 text-[#08854C]" />
                <h3 className="mt-4 text-[18px] text-zinc-950">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[13px] leading-6 text-zinc-600">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#12B76A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7FBF8] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-12%] top-10 h-[280px] w-[280px] rounded-full bg-emerald-500/[0.045] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C7A969]/25 bg-[#F8F4EA] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A6A1F]">
              <Coins className="h-3.5 w-3.5" />
              <span>Pricing Logic</span>
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">
              Packages And Cost Estimate
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-7 text-zinc-600 sm:text-[15.5px]">
              DMCC pricing depends on the package, activity, office route, establishment card, visas, and support scope. Use these as planning benchmarks before the final authority quote.
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-4xl overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white shadow-[0_16px_42px_rgba(7,20,11,0.045)] sm:grid-cols-3">
            {[
              ['Starting Reference', 'AED 10,345+'],
              ['Core Benchmark', 'AED 27,900+'],
              ['Final Quote', 'Route Based'],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-zinc-200/80 px-5 py-4 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">{label}</div>
                <div className="mt-1 text-[19px] leading-tight text-zinc-950">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-stretch">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`dmcc-pricing-card group relative flex min-h-full flex-col overflow-hidden rounded-[22px] border p-5 transition-all duration-300 sm:p-6 ${
                  item.featured
                    ? 'order-first border-[#07140B] bg-[#07140B] text-white shadow-[0_22px_62px_rgba(7,20,11,0.15)] lg:order-none'
                    : 'border-zinc-200/80 bg-white text-zinc-950 shadow-[0_14px_38px_rgba(7,20,11,0.045)] hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-[0_22px_56px_rgba(7,20,11,0.08)]'
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          item.featured ? 'bg-emerald-300/12 text-emerald-200' : 'bg-emerald-500/10 text-[#08854C]'
                        }`}
                      >
                        {item.featured ? 'Recommended' : 'Planning Route'}
                      </span>
                      <h3 className={`mt-4 text-[20px] leading-tight ${item.featured ? 'text-white' : 'text-zinc-950'}`}>{item.name}</h3>
                    </div>
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${item.featured ? 'bg-white/10 text-[#C7A969]' : 'bg-[#F7FBF8] text-[#08854C]'}`}>
                      {item.featured ? <Award className="h-5 w-5" /> : <WalletCards className="h-5 w-5" />}
                    </div>
                  </div>

                  <div className={`mt-5 text-[31px] leading-none ${item.featured ? 'text-white' : 'text-[#08854C]'}`}>{item.price}</div>
                  <p className={`mt-2 text-[11px] uppercase leading-5 tracking-[0.13em] ${item.featured ? 'text-[#C7A969]' : 'text-zinc-500'}`}>
                    {item.label}
                  </p>
                  <p className={`mt-4 text-[13px] leading-6 ${item.featured ? 'text-white/70' : 'text-zinc-600'}`}>{item.text}</p>

                  <ul className={`mt-5 space-y-2.5 border-t pt-5 ${item.featured ? 'border-white/10' : 'border-zinc-200/80'}`}>
                    {item.included.map((included) => (
                      <li key={included} className={`flex gap-2.5 text-[12.5px] leading-5 ${item.featured ? 'text-white/80' : 'text-zinc-700'}`}>
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${item.featured ? 'text-[#34D399]' : 'text-[#12B76A]'}`} />
                        <span>{included}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={quoteDmcc}
                    className={`mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition-all duration-300 ${
                      item.featured
                        ? 'bg-white text-[#07140B] hover:bg-emerald-50'
                        : 'bg-brand-grad text-white shadow-[0_14px_32px_rgba(18,183,106,0.16)] hover:scale-[1.01]'
                    }`}
                  >
                    <span>Get Exact Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-[12.5px] leading-6 text-zinc-500">
            Final pricing is confirmed after activity mapping, office selection, visa assumptions, and document review.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C7A969]/25 bg-[#F8F4EA] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A6A1F]">
                <Building2 className="h-3.5 w-3.5" />
                <span>Office Requirement</span>
              </span>
              <h2 className="mt-4 max-w-xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">
                Office And Flexi Desk Requirements
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-7 text-zinc-600 sm:text-[15.5px]">
                Every DMCC company needs a registered DMCC address. The right workspace should match your visa plan, banking profile, activity, and first-year budget.
              </p>
              <div className="mt-5 flex items-start gap-2.5 rounded-[18px] border border-emerald-500/15 bg-emerald-500/[0.04] px-4 py-3 text-[12.5px] leading-6 text-zinc-600">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#12B76A]" />
                <span>Choose the office route after reviewing activity, visa count, bank target, renewal package, and operating model.</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white shadow-[0_18px_50px_rgba(7,20,11,0.055)]">
              <div className="hidden grid-cols-[1.05fr_0.95fr_1.2fr] border-b border-zinc-200/80 bg-[#F7FBF8] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 md:grid">
                <div>Workspace Route</div>
                <div>Best Fit</div>
                <div>Planning Note</div>
              </div>
              {officeOptions.map((item, index) => {
                const icons = [MapPin, BriefcaseBusiness, Building2];
                const Icon = icons[index] ?? Building2;
                return (
                  <div key={item.title} className="grid gap-4 border-b border-zinc-200/80 px-5 py-5 last:border-b-0 md:grid-cols-[1.05fr_0.95fr_1.2fr] md:items-start">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-[#08854C]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-350 md:hidden">Workspace Route</div>
                        <h3 className="mt-1 text-[17px] leading-tight text-zinc-950 md:mt-0">{item.title}</h3>
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-350 md:hidden">Best Fit</div>
                      <p className="mt-1 text-[13px] leading-6 text-[#8A6A1F] md:mt-0">{item.fit}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-350 md:hidden">Planning Note</div>
                      <p className="mt-1 text-[13px] leading-6 text-zinc-600 md:mt-0">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Benefits"
            title="Why founders choose DMCC"
            text="DMCC is best presented as a premium free zone for founders who want long-term credibility, not only first-year savings."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-[#08854C]" />
                  <h3 className="mt-5 text-[18px] text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-zinc-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07140B] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Residence"
            title="Visa options for DMCC business owners and employees"
            text="Visa planning should happen before office selection because the office route can influence quota, cost, timeline, and future hiring flexibility."
            tone="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {visaOptions.map((item) => (
              <div key={item.title} className="rounded-[8px] border border-white/12 bg-white/[0.06] p-6">
                <IdCard className="h-6 w-6 text-[#C7A969]" />
                <h3 className="mt-4 text-[18px] text-white">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Scale Partners"
              title="Why Scale Partners for DMCC setup"
              text="A premium free zone deserves careful structuring. We do not treat DMCC as a form-filling exercise; we align the activity, office, visa, banking, and compliance plan from the start."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton onClick={quoteDmcc}>Start DMCC Setup</PrimaryButton>
              <SecondaryButton onClick={() => setPage('finance-banking')}>Review Banking Support</SecondaryButton>
            </div>
          </div>
          <div className="rounded-[8px] border border-zinc-200 bg-[#F7FBF8] p-6">
            <ul className="space-y-4">
              {scalePartners.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-7 text-zinc-700">
                  <Handshake className="mt-1 h-5 w-5 shrink-0 text-[#08854C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBF8] px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Renewal"
            title="DMCC business license renewal process and cost"
            text="Renewal cost depends on license duration, office or flexi desk package, establishment card, visa position, penalties, amendments, and selected renewal package."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {renewalSteps.map((item, index) => (
              <div key={item.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
                <Clock3 className="h-6 w-6 text-[#08854C]" />
                <div className="mt-4 text-[11px] uppercase tracking-[0.14em] text-zinc-400">Renewal step {index + 1}</div>
                <h3 className="mt-2 text-[18px] text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-zinc-200">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['Basic Flexi Package', 'AED 35,564', 'Includes one-year license renewal, establishment card, special flexi desk, and one residency visa under current published package terms.'],
                ['Flexi Boost Package', 'AED 43,720+', 'Standard flexi desk renewal path with priority-style benefits and multi-year options available.'],
                ['Prime Business Package', 'AED 76,140', 'Three-year package positioned for medium and large companies with physical offices.'],
              ].map(([name, price, text]) => (
                <div key={name} className="border-l border-zinc-200 pl-4">
                  <h3 className="text-[15px] text-zinc-950">{name}</h3>
                  <div className="mt-2 text-[25px] text-[#08854C]">{price}</div>
                  <p className="mt-2 text-[12.5px] leading-6 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Compliance"
            title="Ongoing compliance requirements for a DMCC company"
            text="A DMCC company should be managed like a serious operating entity. Clean records protect renewal, bank relationships, tax position, and future investor due diligence."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {complianceItems.map((item) => (
              <div key={item.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
                <ReceiptText className="h-6 w-6 text-[#08854C]" />
                <h3 className="mt-4 text-[18px] text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07140B] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Comparison"
            title="DMCC vs other UAE free zones"
            text="The best free zone is the one that fits the business model. DMCC wins on reputation and ecosystem; other zones can win on simplicity or lower first-year spend."
            tone="dark"
          />
          <div className="mt-10 overflow-hidden rounded-[8px] border border-white/12">
            <div className="hidden grid-cols-[0.8fr_1.1fr_1.3fr_1.1fr_0.9fr] bg-white/10 px-5 py-4 text-[11px] uppercase tracking-[0.14em] text-white/55 lg:grid">
              <div>Zone</div>
              <div>Position</div>
              <div>Best for</div>
              <div>Office</div>
              <div>Cost profile</div>
            </div>
            {comparisons.map((item) => (
              <div key={item.zone} className="grid gap-3 border-t border-white/10 px-5 py-5 text-[13px] text-white/76 lg:grid-cols-[0.8fr_1.1fr_1.3fr_1.1fr_0.9fr]">
                <div className="text-[16px] text-white">{item.zone}</div>
                <div>{item.position}</div>
                <div>{item.best}</div>
                <div>{item.office}</div>
                <div className="text-[#C7A969]">{item.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQs"
            title="DMCC company setup questions"
            text="These are the questions founders usually ask before choosing DMCC over a cheaper free zone."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-[8px] border border-zinc-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] text-zinc-950">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-[13.5px] leading-7 text-zinc-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-7 lg:px-10 lg:pb-32">
        <div className="mx-auto overflow-hidden rounded-[8px] bg-[#07140B] text-white shadow-[0_30px_100px_rgba(7,20,11,0.18)]">
          <div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_0.55fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#C7A969]">
                <Coins className="h-3.5 w-3.5" />
                <span>Final CTA</span>
              </div>
              <h2 className="max-w-3xl text-[32px] leading-[1.12] text-white sm:text-[44px]">
                Build your DMCC company with the right license, office, visa, and banking plan from day one.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70">
                Send us your activity, shareholder structure, visa requirement, and budget. We will map the DMCC route, compare alternatives, and give you a practical first-year cost view before filing.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <PrimaryButton onClick={quoteDmcc} dark>
                Get DMCC Setup Quote
              </PrimaryButton>
              <SecondaryButton onClick={openBlankModal} dark>
                Book Advisory Call
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

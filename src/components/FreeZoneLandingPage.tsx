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
import type { FreeZonePageInput } from '../lib/freeZonePages';

type IconType = React.ComponentType<{ className?: string }>;

type CardItem = {
  icon?: IconType;
  title: string;
  signal?: string;
  tag?: string;
  text: string;
  bullets?: string[];
  examples?: string[];
  fit?: string;
  price?: string;
  label?: string;
  included?: string[];
  featured?: boolean;
};

function isVerify(value: string) {
  return (value || '').trim().startsWith('[');
}

function cleanSentence(value: string) {
  return (value || '').replace(/\s+/g, ' ').trim().replace(/\.$/, '');
}

function firstSentence(value: string) {
  const cleaned = cleanSentence(value);
  const match = cleaned.match(/^(.+?[.!?])\s/);
  return (match ? match[1] : cleaned).replace(/\.$/, '');
}

function lowerFirst(value: string) {
  const cleaned = cleanSentence(value);
  return cleaned.charAt(0).toLowerCase() + cleaned.slice(1);
}

function shortLocation(value: string) {
  return cleanSentence(value).split(';')[0].split('.')[0].slice(0, 120);
}

function hasNumericPrice(value: string) {
  return /AED\s*[0-9]/i.test(value || '');
}

function priceLabel(value: string) {
  if (isVerify(value) || !hasNumericPrice(value)) return 'Custom quote';
  return value.replace(/;.*$/, '').slice(0, 88);
}

function compactCostValue(value: string) {
  if (isVerify(value) || !hasNumericPrice(value)) return 'Custom package';
  const match = value.match(/AED\s*([0-9][0-9,]*)/i);
  if (match) return `AED ${match[1]}+`;
  return firstSentence(value).slice(0, 34);
}

function compactTimelineValue(value: string) {
  if (isVerify(value)) return 'Timeline mapped';
  const range = value.match(/(\d+\s*[-]\s*\d+)\s*(?:business\s*)?days/i);
  if (range) return `${range[1].replace(/\s+/g, '')} days`;
  return 'Timeline mapped';
}

function compactMemberCountValue(value: string) {
  if (isVerify(value) || /^authority profile$/i.test(cleanSentence(value))) return 'Free zone profile';
  return firstSentence(value).slice(0, 34);
}

function compactVerifyLabel(value: string, fallback: string) {
  if (fallback.toLowerCase().includes('setup cost')) return 'Setup cost planning';
  if (fallback.toLowerCase().includes('authority profile')) return 'Authority and location fit';
  if (fallback.toLowerCase().includes('formation timeline')) return 'Formation timeline planning';
  return fallback;
}
function cleanPublicText(value: string) {
  return cleanSentence(value)
    .replace(/\s*\[[^\]]*verify[^\]]*\]/gi, '')
    .replace(/\s*\[[^\]]*limited public info[^\]]*\]/gi, '')
    .replace(/\s*\[[^\]]*sparse public data[^\]]*\]/gi, '')
    .replace(/\bVerify current[^.]*\.?/gi, '')
    .replace(/\bVerify before publishing[^.]*\.?/gi, '')
    .replace(/\bSparse public data[^.]*\.?/gi, '')
    .replace(/\bLimited public info[^.]*\.?/gi, '')
    .replace(/\bNOTE\b[^.]*\.?/gi, '')
    .replace(/\bDifferentiate\s+(?:on|from|this)[^.]*\.?/gi, '')
    .replace(/\bThis is NOT[^.]*\.?/gi, '')
    .replace(/\bNOT\s+[^.]*\.?/g, '')
    .replace(/\bOWN\b/g, 'own')
    .replace(/\btreat structurally differently\.?/gi, '')
    .replace(/\s+\(Sharjah; grouped here as a research zone\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function publicPageName(page: FreeZonePageInput) {
  if (page.headingName === 'DCCA') return 'DCCA Licensing';
  if (page.headingName === 'KIZAD / KEZAD') return 'KEZAD';
  return page.headingName;
}

function publicCompanyName(page: FreeZonePageInput) {
  if (page.headingName === 'DCCA') return 'Dubai Creative Cluster';
  return publicPageName(page);
}

function emirateFromLocation(page: FreeZonePageInput) {
  const haystack = (page.location + ' ' + page.zone + ' ' + page.positioning).toLowerCase();
  if (haystack.includes('abu dhabi') || haystack.includes('auh')) return 'Abu Dhabi';
  if (haystack.includes('sharjah')) return 'Sharjah';
  if (haystack.includes('fujairah')) return 'Fujairah';
  if (haystack.includes('ajman')) return 'Ajman';
  return 'Dubai';
}

function aboutSeoHeading(page: FreeZonePageInput) {
  const name = publicPageName(page);
  const haystack = (page.positioning + ' ' + page.licenseTypes + ' ' + page.rawInput).toLowerCase();

  if (page.headingName === 'DCCA') return 'DCCA Business Licensing Across Dubai Creative Clusters';
  if (/financial|fund|bank|asset|wealth|common-law|dfsa|fsra/.test(haystack)) return name + ' Company Setup for Financial Services';
  if (/health|clinic|medical|doctor|wellness/.test(haystack)) return name + ' Company Setup for Healthcare Businesses';
  if (/oil|bunkering|petrochemical|energy/.test(haystack)) return name + ' Company Setup for Oil and Energy Businesses';
  if (/gold|diamond|jewellery|precious/.test(haystack)) return name + ' Company Setup for Gold and Jewellery Businesses';
  if (/textile|garment|apparel/.test(haystack)) return name + ' Company Setup for Textile Trading';
  if (/automotive|car souq|vehicle/.test(haystack)) return name + ' Company Setup for Automotive Trading';
  if (/e-commerce|commercity|online retail|marketplace/.test(haystack)) return name + ' E-commerce Company Setup';
  if (/media|creative|film|content|publishing|gaming|production/.test(haystack)) return name + ' Company Setup for Media and Creative Businesses';
  if (/tech|software|innovation|research|ai|internet|silicon|startup|cleantech|sustainability|r&d/.test(haystack)) return name + ' Company Setup for Technology Businesses';
  if (/industrial|warehouse|logistics|port|airport|cargo|manufacturing|trade|re-export|shipping/.test(haystack)) return name + ' Company Formation for Trade and Logistics';

  return name + ' Company Formation in ' + emirateFromLocation(page) + ' Free Zone';
}

function publicPositioningLine(page: FreeZonePageInput) {
  const name = publicPageName(page);

  if (page.headingName === 'DCCA') {
    return 'DCCA licensing covers Dubai creative, media, technology and education cluster businesses.';
  }

  const cleaned = cleanPublicText(page.positioning);
  const sentence = firstSentence(cleaned);
  if (!sentence) return name + ' is a UAE free zone option for company formation.';
  if (new RegExp('^' + name + '\\s+is\\s+', 'i').test(sentence)) return sentence + '.';
  return name + ' is ' + lowerFirst(sentence) + '.';
}


function publicComparisonLine(page: FreeZonePageInput) {
  const sentence = firstSentence(cleanPublicText(page.comparisonStance));
  if (!sentence) {
    return publicPageName(page) + ' should be compared against lower-cost, more sector-specific and infrastructure-led UAE free zones before filing.';
  }
  return sentence + (/[.!?]$/.test(sentence) ? '' : '.');
}

function publicWrongChoiceSentence(page: FreeZonePageInput) {
  const name = publicPageName(page);
  const haystack = (page.positioning + ' ' + page.licenseTypes + ' ' + page.rawInput).toLowerCase();

  if (/financial|fund|bank|asset|wealth|common-law|dfsa|fsra/.test(haystack)) {
    return name + ' is wrong for ordinary trading, non-regulated consulting or founders who do not need a financial-centre regulator.';
  }

  if (/health|clinic|medical|doctor|wellness/.test(haystack)) {
    return name + ' is wrong for non-health businesses and for founders who cannot support clinical licensing, professional approvals and medical compliance.';
  }

  if (/industrial|warehouse|logistics|port|airport|cargo|manufacturing|oil|gold|diamond|jewellery|automotive|textile|facility|land/.test(haystack)) {
    return name + ' is wrong for desk-only service founders who do not need specialist premises, trade infrastructure or a sector cluster.';
  }

  if (/media|creative|film|content|publishing|gaming|production|tech|software|innovation|research|ai|internet|silicon|startup|cleantech|sustainability|e-commerce|commercity/.test(haystack)) {
    return name + ' is wrong when the activity falls outside its sector focus or when the main priority is the cheapest generic UAE license.';
  }

  return name + ' is wrong when another UAE free zone gives a better price, location, sector regulator or physical-premises route for the same activity.';
}
function publicOperationalSummary(page: FreeZonePageInput) {
  const location = cleanPublicText(page.location);
  const licenseTypes = cleanPublicText(page.licenseTypes);
  const locationText = location ? page.zone + ' operates from ' + location + '.' : 'Confirm the current ' + publicPageName(page) + ' address before filing.';
  const licenseText = licenseTypes ? 'License routes include ' + licenseTypes + '.' : 'License routes should be confirmed with the authority before filing.';
  return locationText + ' ' + licenseText;
}

function splitLicenseLabels(value: string) {
  if (!value || value.trim().startsWith('[')) return ['Commercial / Trading', 'Professional / Service', 'Industrial / Facility', 'Regulated / Special Approval'];
  const first = value.split('.')[0];
  const raw = first
    .replace(/Offers\s+/i, '')
    .replace(/licences|licenses/gi, '')
    .split(/,|;| plus | and /i)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/\s+licen[cs]e$/i, '').trim());

  const labels: string[] = [];
  raw.forEach((item) => {
    const normalized = item.replace(/\s+/g, ' ');
    if (normalized && !labels.some((label) => label.toLowerCase() === normalized.toLowerCase())) labels.push(normalized);
  });
  while (labels.length < 4) labels.push(['Service / Consultancy', 'Commercial / Trading', 'Special Approval', 'Office-Linked Activity'][labels.length]);
  return labels.slice(0, 4);
}

function sectorWord(page: FreeZonePageInput) {
  const haystack = `${page.positioning} ${page.licenseTypes} ${page.rawInput}`.toLowerCase();
  if (/financial|fund|bank|asset|wealth|common-law/.test(haystack)) return 'regulated finance';
  if (/health|clinic|medical|doctor|wellness/.test(haystack)) return 'healthcare';
  if (/media|creative|film|content|publishing|gaming/.test(haystack)) return 'media and creative';
  if (/tech|software|innovation|research|ai|startup|internet/.test(haystack)) return 'technology';
  if (/industrial|warehouse|logistics|port|airport|cargo|manufacturing|oil|automotive|textile/.test(haystack)) return 'trade and infrastructure';
  if (/e-commerce|commerce|online/.test(haystack)) return 'digital commerce';
  return 'business setup';
}

function needsPhysicalRoute(page: FreeZonePageInput) {
  return /industrial|warehouse|logistics|port|airport|cargo|manufacturing|oil|health|clinic|gold|diamond|jewellery|automotive|textile|land|facility|studio|lab/i.test(`${page.positioning} ${page.licenseTypes} ${page.rawInput}`);
}

function buildBestFor(page: FreeZonePageInput): CardItem[] {
  const icons = [Users, Globe2, Network, Landmark];
  return page.bestFor.slice(0, 4).map((profile, index) => ({
    icon: icons[index],
    title: profile,
    signal: ['Founder Fit', 'Activity Fit', 'Operating Fit', 'Scale Fit'][index],
    text: `${publicPageName(page)} is a relevant option for ${lowerFirst(profile)} because ${publicPositioningLine(page).replace(/\.$/, '')}.`,
    bullets: [
      `License wording should match the actual ${sectorWord(page)} activity.`,
      `Workspace planning should reflect ${shortLocation(page.location)}.`,
      `Banking and compliance notes should explain why ${page.headingName} is the right jurisdiction.`,
    ],
  }));
}

function buildLicenseCards(page: FreeZonePageInput): CardItem[] {
  const icons = [BriefcaseBusiness, FileCheck2, Layers3, Network];
  return splitLicenseLabels(page.licenseTypes).map((label, index) => ({
    icon: icons[index],
    title: label.includes('License') ? label : `${label} License`,
    tag: ['Primary route', 'Activity route', 'Approval check', 'Scope review'][index],
    text: `${page.headingName} uses this route when the business model, client contracts, invoices, premises and authority activity list all point to ${lowerFirst(label)}.`,
    examples: [
      `Confirm permitted activities with ${page.headingName}`,
      'Map UAE, GCC and international invoicing',
      'Check banking evidence before filing',
    ],
  }));
}

function buildLegalStructures(page: FreeZonePageInput): CardItem[] {
  return [
    {
      icon: Users,
      title: 'Individual Shareholder Company',
      tag: 'Solo or partner-owned setup',
      text: `${page.headingName} can be used by individual shareholders when ownership, manager roles, UBO declarations and visa plans are straightforward.`,
    },
    {
      icon: Building2,
      title: 'Subsidiary Company',
      tag: 'Existing group expansion',
      text: `${page.headingName} can house a subsidiary when a foreign or UAE parent company needs a separately licensed operating entity.`,
    },
    {
      icon: Landmark,
      title: 'Branch Office',
      tag: 'Parent-company extension',
      text: `A branch route may fit ${page.headingName} when brand continuity, parent-company control and aligned licensed activities matter more than separate shareholding.`,
    },
    {
      icon: ShieldCheck,
      title: 'Holding / SPV Route',
      tag: 'Asset or group control',
      text: `${page.headingName} may support holding or SPV-style structures where the activity list, regulator and bank profile accept the intended purpose.`,
    },
  ];
}

function buildProcessSteps(page: FreeZonePageInput): CardItem[] {
  const timeline = page.verifiedNumbers.timeline;
  return [
    { icon: SearchCheck, title: 'Discovery & Activity Mapping', tag: 'Step 01', signal: 'Day 1', text: `${page.headingName} setup starts by mapping the exact activity, shareholder file, visa plan, office route and banking narrative.` },
    { icon: BadgeCheck, title: 'Name, Structure & Pre-Approval', tag: 'Step 02', signal: 'Early filing', text: `The proposed company name, legal structure and activity wording are checked against ${page.headingName} rules before documents are signed.` },
    { icon: FileText, title: 'Document Submission & Signing', tag: 'Step 03', signal: 'Document stage', text: `Passports, corporate papers, UBO data, resolutions and application forms are prepared for the ${page.headingName} authority file.` },
    { icon: Building2, title: 'Office Or Facility Selection', tag: 'Step 04', signal: 'Workspace stage', text: `${page.headingName} requires the workspace route to match the activity, visa quota, banking comfort and location reality at ${shortLocation(page.location)}.` },
    { icon: ReceiptText, title: 'Payment, License & E-License', tag: 'Step 05', signal: timeline, text: `After approvals, payment and workspace confirmation, the authority issues the ${page.headingName} license or confirms the next regulated step.` },
    { icon: WalletCards, title: 'Post-License Execution', tag: 'Step 06', signal: 'After issuance', text: `The post-license stage covers establishment card, visas, bank pack, accounting, corporate tax review and the renewal calendar for ${page.headingName}.` },
  ];
}

function buildDocuments(page: FreeZonePageInput) {
  return [
    {
      title: 'Individual Shareholders',
      items: ['Passport copy for each shareholder, director, manager and signatory', 'UAE residence visa and Emirates ID if already resident', 'Proof of residential address and contact details', `Business profile explaining why ${page.headingName} fits the activity`, 'Passport photo and authority forms where required'],
    },
    {
      title: 'Corporate Shareholders',
      items: ['Certificate of incorporation or registration', 'Memorandum, articles or equivalent constitutional document', `Board resolution approving the ${page.headingName} company or branch`, 'Shareholding chart and UBO ownership trail', 'Good standing, incumbency or attestation documents where required'],
    },
    {
      title: 'Business & Premises File',
      items: [`Selected ${page.headingName} license activities and proposed names`, 'Business model, target markets, suppliers and expected counterparties', `Workspace, office, warehouse or facility route for ${shortLocation(page.location)}`, 'Banking evidence such as contracts, invoices or source-of-funds notes', 'Extra regulator approvals for restricted or sensitive activities'],
    },
  ];
}

function buildPackages(page: FreeZonePageInput): CardItem[] {
  const cost = page.verifiedNumbers.setupCostRange;
  return [
    { title: `${page.headingName} Starter Review`, price: priceLabel(cost), label: 'Authority cost review', text: `A lean review for founders checking whether ${page.headingName} is the right fit before they commit to license, workspace and visa costs.`, included: ['Activity and structure check', 'Cost and renewal risk notes', 'Document checklist before filing'] },
    { title: `${page.headingName} Core Formation`, price: priceLabel(cost), label: 'Most founder routes start here', text: `Designed for founders who have selected ${page.headingName} and want the license, document handling, workspace route and post-license next steps coordinated.`, included: [`${page.headingName} application support`, 'License and office route coordination', 'Establishment card, visa and bank pack handover'], featured: true },
    { title: `${page.headingName} Corporate Desk`, price: 'Custom quote', label: 'For complex or premises-heavy setups', text: `Built for corporate shareholders, regulated activities, physical premises, larger visa needs or banking-heavy ${page.headingName} structures.`, included: ['Corporate shareholder document handling', 'Office, facility and visa planning', 'Accounting, tax and renewal handover'] },
  ];
}

function buildOfficeOptions(page: FreeZonePageInput): CardItem[] {
  const physical = needsPhysicalRoute(page);
  return [
    { title: 'Shared Desk / Registered Address', fit: 'Lean founders and low-headcount companies', text: `${page.headingName} may allow a lean registered-address route where the activity, visa quota and authority package support it.` },
    { title: 'Private Office / Serviced Office', fit: 'Teams, banking-sensitive files and client-facing firms', text: `A private or serviced office gives the ${page.headingName} company a stronger premises story for banks, staff and counterparties.` },
    { title: physical ? 'Warehouse / Specialist Facility' : 'Flexi Desk / Coworking Route', fit: physical ? 'Trade, regulated, production or infrastructure operations' : 'Remote-first founders and service teams', text: physical ? `${page.headingName} should be checked for warehouses, land, labs, studios, clinics, retail units or other specialist facilities before filing.` : `${page.headingName} workspace should stay proportional to the visa plan, renewal package and real operating model.` },
  ];
}

function buildBenefits(page: FreeZonePageInput): CardItem[] {
  return [
    { icon: Award, title: 'Authority Fit', text: publicPositioningLine(page) },
    { icon: MapPin, title: 'Location Fit', text: `${page.headingName} is tied to ${shortLocation(page.location)}, so the address and operating geography should support the business model.` },
    { icon: FileCheck2, title: 'License Route Clarity', text: `The license categories for ${page.headingName} must be checked against the contract, invoice and activity wording before filing.` },
    { icon: Scale, title: 'Free Zone Tax Planning', text: `${page.headingName} companies can plan around UAE free-zone corporate tax rules, but qualifying income, substance and records must be reviewed.` },
    { icon: ShieldCheck, title: 'Ownership Control', text: `A ${page.headingName} company can support foreign ownership and repatriation planning within the applicable UAE free-zone framework.` },
    { icon: SearchCheck, title: 'When This Zone Is Wrong', text: publicWrongChoiceSentence(page) },
  ];
}

function buildVisas(page: FreeZonePageInput): CardItem[] {
  return [
    { title: 'Investor / Partner Visa', text: `${page.headingName} shareholders can plan UAE residence after license issuance, establishment-card approval and the required medical fitness and Emirates ID steps.` },
    { title: 'Employee Visa', text: `Employee visa capacity for ${page.headingName} depends on the authority package, office route, role, activity and current quota rules.` },
    { title: 'Family Sponsorship', text: `Family sponsorship can be planned after the investor or employee residence visa is active and UAE income and accommodation requirements are satisfied.` },
    { title: 'Remote Management', text: `${page.headingName} may support remote company management, but residence visa applicants still need UAE medical fitness and Emirates ID biometrics.` },
  ];
}

function buildScalePartners(page: FreeZonePageInput) {
  return [
    `We test whether ${page.headingName} matches the business model before treating it as a filing exercise.`,
    `We turn ${page.headingName} activity wording into a bank-ready explanation of clients, contracts, invoices and funds flow.`,
    `We show setup cost, renewal cost, workspace cost and visa assumptions together so the budget is not fictional.`,
    `We prepare shareholder, director, UBO and corporate documents around the authority's real review path.`,
    `We stay involved after issuance for visas, banking readiness, accounting, corporate tax, VAT and renewal calendars.`,
  ];
}

function buildRenewalSteps(page: FreeZonePageInput): CardItem[] {
  return [
    { title: 'Renewal Review', text: `Check the ${page.headingName} license activity, office contract, establishment card, visa files, UBO details and any amendments before renewal.` },
    { title: 'Cost Confirmation', text: `Confirm ${page.headingName} renewal fees, workspace charges, establishment card fees, visa items, penalties and authority service options.` },
    { title: 'Authority Submission', text: `Submit the renewal file through the relevant ${page.headingName} channel and track payment, document updates and approval.` },
    { title: 'Post-Renewal Handover', text: `Update the ${page.headingName} compliance calendar, accounting file, visa tracker, bank records and next renewal deadline.` },
  ];
}

function buildCompliance(page: FreeZonePageInput): CardItem[] {
  return [
    { title: 'UBO and Ownership Records', text: `Maintain accurate UBO, shareholder, director and signatory records for the ${page.headingName} company.` },
    { title: 'License Activity Discipline', text: `The ${page.headingName} company should invoice only activities covered by its approved license wording.` },
    { title: 'Office and Lease Validity', text: `Keep the ${page.headingName} office, desk, warehouse, facility or lease route valid because it affects renewal and visas.` },
    { title: 'Accounting Records', text: `Keep invoices, contracts, bank statements and annual accounts ready for tax, bank and authority review.` },
    { title: 'Corporate Tax and VAT', text: `Review UAE corporate tax, qualifying free-zone income, VAT threshold, transfer pricing and substance for the ${page.headingName} activity.` },
    { title: 'Visa and Establishment Card', text: `Track establishment-card validity, visa renewals, Emirates ID, insurance, cancellations and quota needs before deadlines.` },
  ];
}

function buildComparisons(page: FreeZonePageInput) {
  const office = needsPhysicalRoute(page) ? 'Physical premises or specialist facility may matter' : 'Flexi, coworking or office route depends on package';
  return [
    { zone: publicPageName(page), position: publicPositioningLine(page), best: page.bestFor[0], office, cost: hasNumericPrice(page.verifiedNumbers.setupCostRange) ? compactCostValue(page.verifiedNumbers.setupCostRange) : 'Activity-based package' },
    { zone: 'IFZA / Meydan', position: 'Low-cost Dubai setup options', best: 'Lean service, consulting and e-commerce founders', office: 'Usually lighter desk or digital-first routes', cost: 'Often cheaper for simple SMEs' },
    { zone: 'DMCC', position: 'Premium Dubai corporate hub', best: 'Credibility-led trading, services and holding companies', office: 'Registered office route required', cost: 'Usually higher than budget zones' },
    { zone: 'Sector alternative', position: publicComparisonLine(page), best: page.bestFor[1] || 'Sector-specific founders', office: 'Depends on the competing authority', cost: 'Compare after activity mapping' },
  ];
}

function buildFaqs(page: FreeZonePageInput) {
  return [
    { q: `How long does ${page.headingName} company formation take?`, a: `${page.headingName} formation timeline is ${page.verifiedNumbers.timeline}. The final window depends on complete documents, activity approval, workspace selection, payment and any regulated-sector checks.` },
    { q: `What is the starting cost for ${page.headingName} setup?`, a: publicSetupCostAnswer(page) },
    { q: `Who is ${page.headingName} best for?`, a: `${page.headingName} is best for ${page.bestFor.join('; ')}.` },
    { q: `What licenses does ${page.headingName} issue?`, a: `${page.headingName} license routes include ${page.licenseTypes}. The exact activity wording should be confirmed before filing.` },
    { q: `Where is ${page.headingName} located?`, a: `${page.headingName} is linked to ${page.location}. Location matters for address credibility, logistics, sector ecosystem and office planning.` },
    { q: `Can a ${page.headingName} company sponsor visas?`, a: `A ${page.headingName} company can usually plan investor and employee visas after licensing, but quota depends on the authority package, office route, role and current rules.` },
    { q: `What does ${page.headingName} renewal cost?`, a: `${page.headingName} renewal fees are ${page.verifiedNumbers.renewalFees}. Confirm the current authority schedule before renewal because office, establishment card, visas and penalties can change the total.` },
    { q: `When is ${page.headingName} the wrong choice?`, a: `${publicWrongChoiceSentence(page)} We compare cheaper, sector-specific and infrastructure-led alternatives before filing.` },
  ];
}

function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'light' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center'; tone?: 'light' | 'dark' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C7A969]/25 bg-[#F8F4EA] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[#8A6A1F]">
        <Sparkles className="h-3.5 w-3.5" />
        <span>{eyebrow}</span>
      </div>
      <h2 className={`dmcc-section-title text-[30px] leading-[1.14] sm:text-[38px] lg:text-[44px] ${tone === 'dark' ? 'text-white' : 'text-zinc-950'}`}>{title}</h2>
      {text && <p className={`mt-4 text-[14.5px] leading-7 sm:text-[16px] ${tone === 'dark' ? 'text-white/68' : 'text-zinc-600'}`}>{text}</p>}
    </div>
  );
}

function publicFeeValue(value: string, type: 'setup' | 'renewal' = 'setup') {
  if (isVerify(value)) return type === 'renewal' ? 'Renewal plan' : 'Custom package';
  if (!hasNumericPrice(value)) return type === 'renewal' ? 'Renewal plan' : 'Custom package';
  return cleanPublicText(value) || (type === 'renewal' ? 'Renewal plan' : 'Custom package');
}

function publicSetupCostAnswer(page: FreeZonePageInput) {
  const value = page.verifiedNumbers.setupCostRange;
  if (!hasNumericPrice(value)) {
    return `${page.headingName} setup pricing is prepared after activity mapping, shareholder review, workspace selection, establishment card planning and visa assumptions. This gives founders a clean first-year budget without showing an unsupported public fee.`;
  }
  return `${page.headingName} setup cost range is ${value}. Treat this as a planning benchmark until license, workspace, establishment card and visa assumptions are confirmed.`;
}
function PrimaryButton({ children, onClick, dark = false }: { children: React.ReactNode; onClick: () => void; dark?: boolean }) {
  return (
    <button onClick={onClick} className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold transition-all duration-300 ${dark ? 'bg-white text-[#07140B] hover:bg-[#F7FBF8]' : 'bg-brand-grad text-white shadow-[0_18px_45px_rgba(18,183,106,0.22)] hover:scale-[1.01]'}`}>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function SecondaryButton({ children, onClick, dark = false }: { children: React.ReactNode; onClick: () => void; dark?: boolean }) {
  return (
    <button onClick={onClick} className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-[13px] font-semibold transition-colors ${dark ? 'border-white/25 bg-white/5 text-white hover:bg-white/10' : 'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50'}`}>
      {children}
    </button>
  );
}

export default function FreeZoneLandingPage({ page }: { page: FreeZonePageInput }) {
  const router = useRouter();
  const { openBlankModal, handleFreeZoneSelected } = useQuote();
  const setPage = (pageId: PageId) => router.push(pageId === 'home' ? '/' : `/${pageId}`);
  const quoteZone = () => handleFreeZoneSelected(page.headingName, page.quoteBasePrice);
  const whatsAppUrl = `https://wa.me/971526692157?text=${encodeURIComponent(`Hello Scale Partners Advisory Desk. I would like to discuss ${page.headingName} company setup.`)}`;

  const bestFor = React.useMemo(() => buildBestFor(page), [page]);
  const licenseTypes = React.useMemo(() => buildLicenseCards(page), [page]);
  const legalStructures = React.useMemo(() => buildLegalStructures(page), [page]);
  const processSteps = React.useMemo(() => buildProcessSteps(page), [page]);
  const documentGroups = React.useMemo(() => buildDocuments(page), [page]);
  const packages = React.useMemo(() => buildPackages(page), [page]);
  const officeOptions = React.useMemo(() => buildOfficeOptions(page), [page]);
  const benefits = React.useMemo(() => buildBenefits(page), [page]);
  const visaOptions = React.useMemo(() => buildVisas(page), [page]);
  const scalePartners = React.useMemo(() => buildScalePartners(page), [page]);
  const renewalSteps = React.useMemo(() => buildRenewalSteps(page), [page]);
  const complianceItems = React.useMemo(() => buildCompliance(page), [page]);
  const comparisons = React.useMemo(() => buildComparisons(page), [page]);
  const faqs = React.useMemo(() => buildFaqs(page), [page]);
  const [activeProcessIndex, setActiveProcessIndex] = React.useState(0);
  const processRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const processProgress = ((activeProcessIndex + 1) / processSteps.length) * 100;
  const publicName = publicPageName(page);
  const companyName = publicCompanyName(page);
  const aboutHeading = aboutSeoHeading(page);
  const positioningSummary = publicPositioningLine(page);
  const operationalSummary = publicOperationalSummary(page);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visibleEntry?.target instanceof HTMLElement) {
        const index = Number(visibleEntry.target.dataset.processIndex);
        if (!Number.isNaN(index)) setActiveProcessIndex(index);
      }
    }, { rootMargin: '-22% 0px -38% 0px', threshold: [0.35, 0.55, 0.75] });
    processRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [processSteps.length]);

  const heroChips = [
    { icon: MapPin, title: page.headingName, subtitle: shortLocation(page.location) },
    { icon: Coins, title: compactCostValue(page.verifiedNumbers.setupCostRange), subtitle: 'Setup cost range' },
    { icon: Clock3, title: compactTimelineValue(page.verifiedNumbers.timeline), subtitle: 'Typical timeline' },
  ];

  const statItems = [
    { icon: Coins, value: compactCostValue(page.verifiedNumbers.setupCostRange), label: compactVerifyLabel(page.verifiedNumbers.setupCostRange, `${publicName} setup cost range`) },
    { icon: Landmark, value: compactMemberCountValue(page.verifiedNumbers.memberCount), label: compactVerifyLabel(page.verifiedNumbers.memberCount, `${publicName} authority profile`) },
    { icon: Clock3, value: compactTimelineValue(page.verifiedNumbers.timeline), label: compactVerifyLabel(page.verifiedNumbers.timeline, `${publicName} formation timeline`) },
  ];

  return (
    <div className="dmcc-page overflow-x-clip bg-white font-sans text-zinc-950">
      <section className="home-hero relative overflow-hidden bg-[#07140B] pt-[88px] pb-10 text-white sm:pt-[96px] sm:pb-12 lg:pt-[104px] lg:pb-14">
        <video autoPlay loop muted playsInline className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none">
          <source src="/assets/dubai_skyline.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#07140B]/90 to-[#0B2E16]/70 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_78%_35%,rgba(34,197,94,0.16),transparent_34%),linear-gradient(90deg,rgba(7,20,11,0.34),transparent_64%)] pointer-events-none" />
        <div className="home-hero-inner relative z-30 mx-auto max-w-[1760px] px-5 sm:px-7 lg:px-8 xl:px-10">
          <div className="home-hero-grid grid grid-cols-1 items-center gap-10 bg-transparent pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-14 lg:pt-8 xl:gap-20 xl:pt-10">
            <div className="home-hero-copy space-y-5 text-center sm:space-y-6 lg:col-span-8 lg:text-left xl:col-span-7">
              <div className="mx-auto hidden max-w-full items-center space-x-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-sm backdrop-blur-md lg:mx-0 lg:inline-flex">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span></span>
                <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white sm:text-[10px] sm:tracking-[0.2em]">{publicName} Registry Desk</span>
              </div>
              <h1 className="hero-brand-headline mx-auto max-w-[720px] font-sans text-[43px] leading-[1.05] tracking-normal text-white sm:max-w-none sm:text-[58px] sm:leading-[1.08] lg:mx-0 lg:text-[66px] xl:text-[72px]">
                Setup Your<br /><span className="text-emerald-400">{companyName} Company</span>
              </h1>
              <p className="home-hero-lede mx-auto max-w-[330px] font-sans text-[15.5px] leading-[1.6] tracking-normal text-zinc-100/90 sm:max-w-xl sm:text-[18px] sm:leading-[1.5] lg:mx-0 lg:max-w-[660px] lg:text-[17.5px] xl:max-w-[720px] xl:text-[18.5px]">
                {positioningSummary} Build the license, office, visa, banking and renewal path around that reality.
              </p>
              <div className="home-setup-types mx-auto grid max-w-3xl grid-cols-1 gap-2.5 sm:grid-cols-3 lg:mx-0 lg:max-w-[760px]">
                {heroChips.map((item) => { const Icon = item.icon; return (
                  <div key={item.subtitle} className="group flex min-w-0 items-center gap-3 rounded-full border border-white/12 bg-black/10 px-3.5 py-2.5 backdrop-blur-md transition-all duration-300">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-400 group-hover:text-[#07140B]"><Icon className="h-4 w-4" /></div>
                    <div className="min-w-0 flex-1 text-left"><h4 className="text-[12.5px] font-semibold leading-tight text-white">{item.title}</h4><p className="mt-0.5 text-[10px] leading-tight text-zinc-300/85">{item.subtitle}</p></div>
                  </div>
                ); })}
              </div>
              <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row sm:gap-4 sm:pt-2 lg:justify-start">
                <button onClick={quoteZone} className="home-hero-cta flex w-full max-w-[330px] shrink-0 cursor-pointer items-center justify-center space-x-2 rounded-full border-0 bg-white px-8 py-4 font-sans text-[14.5px] font-bold tracking-tight text-gold-700 shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-[1.015] hover:opacity-95 active:scale-95 sm:w-auto sm:max-w-none"><span>Get {publicName} Setup Quote</span><ArrowRight className="h-4 w-4 text-gold-500" /></button>
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex w-full max-w-[330px] cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/10 px-8 py-4 font-sans text-[14.5px] font-bold tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 active:scale-95 sm:w-auto sm:max-w-none">Speak to an Advisor</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-trust-strip relative z-20 bg-white">
        <div className="home-wide-container mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="home-trust-strip-card grid grid-cols-1 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_22px_60px_rgba(7,20,11,0.08)] sm:grid-cols-3">
            {statItems.map((item) => { const Icon = item.icon; return (
              <div key={item.label} className="group flex items-center justify-center gap-4 border-b border-zinc-200/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50/60 hover:shadow-[0_18px_45px_rgba(18,183,106,0.10)] sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-6 lg:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white"><Icon className="h-5 w-5" /></div>
                <div className="min-w-0 text-left"><div className="text-[19px] font-semibold leading-tight text-zinc-950 lg:text-[21px]">{item.value}</div><div className="mt-0.5 text-[12px] leading-tight text-zinc-500">{item.label}</div></div>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="home-content-sections home-wide-container relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-12">
        <div className="border-b border-zinc-200/70 py-6 lg:py-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 text-left lg:col-span-6">
              <span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#08854C]"><ShieldCheck className="h-3.5 w-3.5" /><span>About {publicName}</span></span>
              <div className="space-y-3">
                <h2 className="max-w-2xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">{aboutHeading}</h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-500">{positioningSummary}</p>
                <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-500">{operationalSummary}</p>
              </div>
              <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {['License route', 'Office route', 'Banking pack'].map((label, index) => { const Icon = [FileText, Landmark, WalletCards][index]; return (
                  <div key={label} className="flex items-center gap-2.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-3 shadow-[0_10px_26px_rgba(7,20,11,0.04)]"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-[#08854C]"><Icon className="h-4.5 w-4.5" /></div><span className="text-[12.5px] font-medium leading-tight text-zinc-800">{label}</span></div>
                ); })}
              </div>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center"><button onClick={quoteZone} className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-brand-grad px-6 py-3.5 text-[13.5px] font-semibold tracking-normal text-white shadow-[0_14px_32px_rgba(18,183,106,0.22)] transition-all duration-300 hover:scale-[1.01] active:scale-95 sm:w-auto"><span>Plan {publicName} Setup</span><ArrowRight className="h-4 w-4" /></button><span className="text-[12px] text-zinc-500">Activity, office, visa, and banking route mapped together.</span></div>
            </div>
            <div className="hidden lg:col-span-6 lg:block"><div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-zinc-900 shadow-[0_28px_70px_rgba(7,20,11,0.18)]"><Image src="/assets/dubai_skyline_financial.png" alt="Dubai business district office view" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#07140B]/88 via-[#07140B]/25 to-transparent"></div><div className="absolute inset-x-0 bottom-0 p-6 text-white"><div className="grid grid-cols-3 gap-3">{['Authority fit', sectorWord(page), 'Renewal plan'].map((item) => (<div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-3.5 py-3 backdrop-blur-md"><CheckCircle2 className="mb-2 h-4 w-4 text-emerald-300" /><span className="block text-[11.5px] leading-tight text-white/90">{item}</span></div>))}</div></div></div></div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07140B] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-28">
        <Image src="/assets/dubai_skyline_financial.png" alt="" fill sizes="100vw" className="absolute inset-0 object-cover opacity-[0.18]" /><div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,11,0.96)_0%,rgba(7,20,11,0.90)_48%,rgba(7,20,11,0.97)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1320px]"><div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"><div className="max-w-3xl"><span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-300/20 bg-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md"><Sparkles className="h-3.5 w-3.5" /><span>Ideal Profiles</span></span><h2 className="mt-4 max-w-3xl font-serif text-[31px] font-semibold leading-tight tracking-normal text-white sm:text-[40px]">Who {publicName} Is Best For</h2><p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/68">{publicName} is best assessed by activity fit, premises needs, visa planning and authority rules. The strongest profiles are the ones whose operating model matches this authority.</p></div><div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.06] backdrop-blur-md">{['Fit', 'Location', 'Cost'].map((value) => (<div key={value} className="border-r border-white/10 px-4 py-4 text-center last:border-r-0"><div className="text-[18px] leading-tight text-white">{value}</div><div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">Review</div></div>))}</div></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">{bestFor.map((item, index) => { const Icon = item.icon || Users; return (<div key={item.title} className="dmcc-best-card group relative min-h-[410px] overflow-hidden rounded-[22px] bg-white/[0.075] p-6 backdrop-blur-xl" style={{ animationDelay: `${index * 0.08}s` }}><div className="relative z-10 flex h-full flex-col"><div className="flex items-start justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-[#07140B]"><Icon className="h-5.5 w-5.5" /></div><span className="font-mono text-[11px] text-white/30">0{index + 1}</span></div><div className="mt-7"><span className="inline-flex rounded-full border border-[#C7A969]/25 bg-[#C7A969]/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-[#E6D49C]">{item.signal}</span><h3 className="mt-4 text-[21px] leading-[1.2] text-white">{item.title}</h3><p className="mt-4 text-[13px] leading-6 text-white/62">{item.text}</p></div><ul className="mt-auto space-y-2.5 pt-6">{item.bullets?.map((bullet) => (<li key={bullet} className="flex gap-2 text-[12.5px] leading-5 text-white/78"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /><span>{bullet}</span></li>))}</ul></div></div>); })}</div>
        </div>
      </section>

      <section className="relative bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="relative z-10 mx-auto max-w-[1320px]"><div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><div className="max-w-3xl"><span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#08854C]"><FileText className="h-3.5 w-3.5" /><span>License Selection</span></span><h2 className="mt-4 max-w-2xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">Types Of Licenses Available In {publicName}</h2><p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-500">{page.headingName} license selection should answer what the company sells, who it invoices, where it operates and what evidence banks or regulators will expect.</p></div><div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_22px_60px_rgba(7,20,11,0.08)]">{splitLicenseLabels(page.licenseTypes).slice(0,3).map((value) => (<div key={value} className="border-r border-zinc-200/70 px-4 py-4 text-center last:border-r-0"><div className="text-[17px] leading-tight text-zinc-950">{value}</div><div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400">Route</div></div>))}</div></div><div className="mt-10 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div className="dmcc-license-feature relative overflow-hidden rounded-[24px] bg-[#07140B] p-7 text-white shadow-[0_28px_70px_rgba(7,20,11,0.18)] lg:sticky lg:top-28 lg:min-h-[540px] lg:self-start"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.20),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" /><div className="relative z-10 flex h-full flex-col"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300"><FileCheck2 className="h-6 w-6" /></div><h3 className="mt-7 text-[28px] leading-tight text-white sm:text-[32px]">Choose The Right {publicName} License Route</h3><p className="mt-4 text-[14px] leading-7 text-white/68">{page.headingName} license planning starts with activity scope, customer geography, stock or service flow, visa needs and banking evidence.</p><div className="mt-auto grid gap-3 pt-8">{['What products or services will the company sell?', 'Who will the company invoice: UAE, GCC, or global clients?', 'Will the company hold stock, broker deals, produce goods, or provide services?', 'How many investor or employee visas are needed?', 'What proof will banks or regulators expect?'].map((item) => (<div key={item} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 backdrop-blur-md"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" /><span className="text-[12.5px] text-white/82">{item}</span></div>))}</div><button onClick={quoteZone} className="relative z-10 mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#07140B] transition-all duration-300 hover:bg-emerald-50"><span>Check My License Fit</span><ArrowRight className="h-4 w-4 text-[#08854C]" /></button></div></div><div className="grid gap-4">{licenseTypes.map((item, index) => { const Icon = item.icon || FileText; return (<div key={`${item.title}-${index}`} className="dmcc-license-row group relative overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white p-5 shadow-[0_16px_42px_rgba(7,20,11,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-[0_24px_58px_rgba(7,20,11,0.10)] sm:p-6"><div className="relative z-10 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-start"><div className="flex gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-[#08854C] transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white"><Icon className="h-5.5 w-5.5" /></div><div><div className="font-mono text-[11px] text-zinc-350">0{index + 1}</div><h3 className="mt-1 text-[20px] leading-tight text-zinc-950">{item.title}</h3><span className="mt-3 inline-flex rounded-full bg-[#F8F4EA] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-[#8A6A1F]">{item.tag}</span></div></div><div><p className="text-[13.5px] leading-7 text-zinc-600">{item.text}</p><div className="mt-5 flex flex-wrap gap-2">{item.examples?.map((example) => (<span key={example} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11.5px] text-zinc-600 transition-colors group-hover:border-emerald-500/20 group-hover:bg-emerald-50/70">{example}</span>))}</div></div></div></div>); })}</div></div></div></section>

      <section className="relative bg-[#F7FBF8] px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="relative z-10 mx-auto max-w-[1320px]"><SectionHeading eyebrow="Legal Structure" title={`Legal Structures For Company Formation In ${page.headingName}`} text={`The right ${page.headingName} structure depends on who owns the company, how the business invoices, whether a parent entity is involved and what banks will need to understand.`} align="center" /><div className="mt-12 rounded-[28px] border border-zinc-200/80 bg-white p-4 shadow-[0_26px_70px_rgba(7,20,11,0.08)] sm:p-5"><div className="grid gap-3 lg:grid-cols-4">{legalStructures.map((item, index) => { const Icon = item.icon || Building2; return (<div key={item.title} className="dmcc-structure-node group relative min-h-[230px] overflow-hidden rounded-[22px] bg-[#F7FBF8] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_46px_rgba(7,20,11,0.10)]"><div className="relative z-10"><div className="flex items-center justify-between gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#08854C] shadow-[0_10px_24px_rgba(7,20,11,0.06)] transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white"><Icon className="h-5.5 w-5.5" /></div><span className="font-mono text-[11px] text-zinc-350">0{index + 1}</span></div><h3 className="mt-5 text-[19px] leading-tight text-zinc-950">{item.title}</h3><p className="mt-2 text-[11px] uppercase tracking-[0.13em] text-[#8A6A1F]">{item.tag}</p><p className="mt-4 text-[12.5px] leading-6 text-zinc-600">{item.text}</p></div></div>); })}</div><div className="mt-4 grid gap-6 rounded-[24px] bg-[#07140B] p-6 text-white sm:p-8 lg:grid-cols-[1fr_0.45fr] lg:items-center"><div><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">{page.headingName} Structure Advisory</span><h3 className="mt-3 text-[26px] leading-tight text-white sm:text-[32px]">Choose The Right {page.headingName} Legal Structure Before You File</h3><p className="mt-4 max-w-3xl text-[14px] leading-7 text-white/66 sm:text-[15px]">Share your ownership plan, parent-company status, visa needs and banking goals. We will map the cleanest route before the application starts.</p></div><div className="flex flex-col gap-3 lg:items-end"><button onClick={quoteZone} className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-semibold text-[#07140B] transition-all duration-300 hover:bg-emerald-50 sm:w-auto"><span>Get Structure Advice</span><ArrowRight className="h-4 w-4 text-[#08854C]" /></button></div></div></div></div></section>

      <section className="relative bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="relative z-10 mx-auto grid max-w-[1320px] gap-9 lg:grid-cols-[0.74fr_1.26fr] lg:items-start"><div className="relative overflow-hidden rounded-[30px] bg-[#07140B] p-6 text-white shadow-[0_30px_90px_rgba(7,20,11,0.18)] sm:p-8 lg:sticky lg:top-28"><div className="relative z-10"><span className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-300/20 bg-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-200"><Clock3 className="h-3.5 w-3.5" /><span>Timeline</span></span><h2 className="mt-5 max-w-xl font-serif text-[31px] font-semibold leading-tight tracking-normal text-white sm:text-[40px]">How To Set Up A {page.headingName} Company</h2><p className="mt-4 text-[15px] leading-7 text-white/68">A {page.headingName} setup is a sequenced route where activity, ownership, office, visa, payment and banking logic are aligned before submission.</p><div className="mt-8 border-t border-white/10 pt-6"><div className="flex items-end justify-between gap-5"><div><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Current Phase</div><div className="mt-2 text-[22px] leading-tight text-white">Step {String(activeProcessIndex + 1).padStart(2, '0')}<span className="text-white/35"> / {String(processSteps.length).padStart(2, '0')}</span></div></div><div className="text-right"><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Typical Window</div><div className="mt-2 text-[15px] font-semibold text-emerald-200">{processSteps[activeProcessIndex]?.signal}</div></div></div><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-[#C7A969] transition-all duration-700 ease-out" style={{ width: `${processProgress}%` }} /></div><p className="mt-4 text-[13px] leading-6 text-white/56">{processSteps[activeProcessIndex]?.title}</p></div><button onClick={quoteZone} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-semibold text-[#07140B] transition-all duration-300 hover:bg-emerald-50"><span>Plan My Setup Timeline</span><ArrowRight className="h-4 w-4 text-[#08854C]" /></button></div></div><div className="relative"><div className="absolute bottom-0 left-4 top-0 hidden w-px bg-zinc-200 md:block" /><div className="absolute left-4 top-0 hidden w-px bg-gradient-to-b from-emerald-400 via-emerald-500 to-[#C7A969] transition-all duration-700 ease-out md:block" style={{ height: `${processProgress}%` }} /><div className="space-y-5">{processSteps.map((item, index) => { const Icon = item.icon || Clock3; const isActive = index <= activeProcessIndex; return (<div key={item.title} ref={(node) => { processRefs.current[index] = node; }} data-process-index={index} className="relative md:pl-14"><div className={`absolute left-0 top-7 z-20 hidden h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 md:flex ${isActive ? 'border-emerald-400 bg-[#07140B] shadow-[0_0_0_8px_rgba(18,183,106,0.10),0_0_30px_rgba(18,183,106,0.24)]' : 'border-zinc-200 bg-white shadow-[0_8px_20px_rgba(7,20,11,0.06)]'}`}><span className={`h-2.5 w-2.5 rounded-full transition-colors ${isActive ? 'bg-emerald-300' : 'bg-zinc-300'}`} /></div><div className={`dmcc-process-card group relative overflow-hidden rounded-[24px] border p-5 transition-all duration-500 sm:p-6 ${isActive ? 'border-emerald-500/35 bg-white shadow-[0_24px_70px_rgba(7,20,11,0.10)]' : 'border-zinc-200/80 bg-[#FBFCFB] shadow-[0_14px_38px_rgba(7,20,11,0.045)]'} hover:-translate-y-1 hover:border-emerald-500/35 hover:shadow-[0_26px_72px_rgba(7,20,11,0.11)]`}><div className="relative z-10"><div className="flex flex-wrap items-start justify-between gap-4"><div className="flex items-center gap-4"><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? 'bg-[#07140B] text-emerald-300' : 'bg-emerald-500/10 text-[#08854C]'} group-hover:bg-emerald-500 group-hover:text-white`}><Icon className="h-5.5 w-5.5" /></div><div><div className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-350">{item.tag}</div><h3 className="mt-1 text-[20px] leading-tight text-zinc-950 sm:text-[22px]">{item.title}</h3></div></div><span className={`rounded-full px-3 py-1 text-[11px] transition-colors ${isActive ? 'bg-emerald-50 text-[#08854C]' : 'bg-zinc-100 text-zinc-500'}`}>{item.signal}</span></div><p className="mt-5 text-[13.5px] leading-7 text-zinc-600">{item.text}</p></div></div></div>); })}</div></div></div></section>

      <section className="bg-[#F7FBF8] px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><SectionHeading eyebrow="Document Pack" title={`Documents required for ${page.headingName} company formation`} text={`${page.headingName} may request additional documents depending on shareholder nationality, corporate ownership, regulated activity, office route or business model.`} /><div className="mt-10 grid gap-5 lg:grid-cols-3">{documentGroups.map((group) => (<div key={group.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm"><FileText className="h-7 w-7 text-[#08854C]" /><h3 className="mt-4 text-[18px] text-zinc-950">{group.title}</h3><ul className="mt-5 space-y-3">{group.items.map((item) => (<li key={item} className="flex gap-3 text-[13px] leading-6 text-zinc-600"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#12B76A]" /><span>{item}</span></li>))}</ul></div>))}</div></div></section>

      <section className="relative bg-[#F7FBF8] px-5 py-16 sm:px-7 lg:px-10 lg:py-20"><div className="relative z-10 mx-auto max-w-[1320px]"><div className="mx-auto max-w-3xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-[#C7A969]/25 bg-[#F8F4EA] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A6A1F]"><Coins className="h-3.5 w-3.5" /><span>Pricing Logic</span></span><h2 className="mx-auto mt-4 max-w-2xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">Setup Packages and Cost Planning</h2><p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-7 text-zinc-600 sm:text-[15.5px]">{page.headingName} pricing is planned around the approved activity, legal structure, workspace route, establishment card, visa count and renewal scope.</p></div><div className="mx-auto mt-7 grid max-w-4xl overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white shadow-[0_16px_42px_rgba(7,20,11,0.045)] sm:grid-cols-3">{[['Setup Planning', publicFeeValue(page.verifiedNumbers.setupCostRange, 'setup')], ['Renewal Planning', publicFeeValue(page.verifiedNumbers.renewalFees, 'renewal')], ['Quote Basis', 'Activity + workspace']].map(([label, value]) => (<div key={label} className="border-b border-zinc-200/80 px-5 py-4 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">{label}</div><div className="mt-1 text-[19px] leading-tight text-zinc-950">{value}</div></div>))}</div><div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-stretch">{packages.map((item) => (<div key={item.title} className={`dmcc-pricing-card group relative flex min-h-full flex-col overflow-hidden rounded-[22px] border p-5 transition-all duration-300 sm:p-6 ${item.featured ? 'order-first border-[#07140B] bg-[#07140B] text-white shadow-[0_22px_62px_rgba(7,20,11,0.15)] lg:order-none' : 'border-zinc-200/80 bg-white text-zinc-950 shadow-[0_14px_38px_rgba(7,20,11,0.045)] hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-[0_22px_56px_rgba(7,20,11,0.08)]'}`}><div className="relative z-10 flex h-full flex-col"><div className="flex items-start justify-between gap-4"><div><span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${item.featured ? 'bg-emerald-300/12 text-emerald-200' : 'bg-emerald-500/10 text-[#08854C]'}`}>{item.featured ? 'Recommended' : 'Planning Route'}</span><h3 className={`mt-4 text-[20px] leading-tight ${item.featured ? 'text-white' : 'text-zinc-950'}`}>{item.title}</h3></div><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${item.featured ? 'bg-white/10 text-[#C7A969]' : 'bg-[#F7FBF8] text-[#08854C]'}`}>{item.featured ? <Award className="h-5 w-5" /> : <WalletCards className="h-5 w-5" />}</div></div><div className={`mt-5 text-[31px] leading-none ${item.featured ? 'text-white' : 'text-[#08854C]'}`}>{item.price}</div><p className={`mt-2 text-[11px] uppercase leading-5 tracking-[0.13em] ${item.featured ? 'text-[#C7A969]' : 'text-zinc-500'}`}>{item.label}</p><p className={`mt-4 text-[13px] leading-6 ${item.featured ? 'text-white/70' : 'text-zinc-600'}`}>{item.text}</p><ul className={`mt-5 space-y-2.5 border-t pt-5 ${item.featured ? 'border-white/10' : 'border-zinc-200/80'}`}>{item.included?.map((included) => (<li key={included} className={`flex gap-2.5 text-[12.5px] leading-5 ${item.featured ? 'text-white/80' : 'text-zinc-700'}`}><CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${item.featured ? 'text-[#34D399]' : 'text-[#12B76A]'}`} /><span>{included}</span></li>))}</ul><button onClick={quoteZone} className={`mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition-all duration-300 ${item.featured ? 'bg-white text-[#07140B] hover:bg-emerald-50' : 'bg-brand-grad text-white shadow-[0_14px_32px_rgba(18,183,106,0.16)] hover:scale-[1.01]'}`}><span>Get Exact Quote</span><ArrowRight className="h-4 w-4" /></button></div></div>))}</div><p className="mx-auto mt-5 max-w-3xl text-center text-[12.5px] leading-6 text-zinc-500">Final pricing is prepared after activity mapping, office selection, visa assumptions and document review.</p></div></section>

      <section className="px-5 py-16 sm:px-7 lg:px-10 lg:py-20"><div className="mx-auto max-w-[1160px]"><div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div><span className="inline-flex items-center gap-2 rounded-full border border-[#C7A969]/25 bg-[#F8F4EA] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A6A1F]"><Building2 className="h-3.5 w-3.5" /><span>Office Requirement</span></span><h2 className="mt-4 max-w-xl font-serif text-[31px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[40px]">Office And Flexi Desk Requirements</h2><p className="mt-4 max-w-xl text-[14.5px] leading-7 text-zinc-600 sm:text-[15.5px]">Every {page.headingName} company needs an address or workspace route that matches authority rules, visa planning, banking expectations and the real operating model.</p><div className="mt-5 flex items-start gap-2.5 rounded-[18px] border border-emerald-500/15 bg-emerald-500/[0.04] px-4 py-3 text-[12.5px] leading-6 text-zinc-600"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#12B76A]" /><span>Choose the office route after reviewing activity, visa count, bank target, renewal package, and operating model.</span></div></div><div className="overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white shadow-[0_18px_50px_rgba(7,20,11,0.055)]"><div className="hidden grid-cols-[1.05fr_0.95fr_1.2fr] border-b border-zinc-200/80 bg-[#F7FBF8] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 md:grid"><div>Workspace Route</div><div>Best Fit</div><div>Planning Note</div></div>{officeOptions.map((item, index) => { const icons = [MapPin, BriefcaseBusiness, Building2]; const Icon = icons[index] ?? Building2; return (<div key={item.title} className="grid gap-4 border-b border-zinc-200/80 px-5 py-5 last:border-b-0 md:grid-cols-[1.05fr_0.95fr_1.2fr] md:items-start"><div className="flex items-start gap-3.5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-[#08854C]"><Icon className="h-4.5 w-4.5" /></div><div><div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-350 md:hidden">Workspace Route</div><h3 className="mt-1 text-[17px] leading-tight text-zinc-950 md:mt-0">{item.title}</h3></div></div><div><div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-350 md:hidden">Best Fit</div><p className="mt-1 text-[13px] leading-6 text-[#8A6A1F] md:mt-0">{item.fit}</p></div><div><div className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-350 md:hidden">Planning Note</div><p className="mt-1 text-[13px] leading-6 text-zinc-600 md:mt-0">{item.text}</p></div></div>); })}</div></div></div></section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><SectionHeading eyebrow="Benefits" title={`Why founders choose ${page.headingName}`} text={`${page.headingName} should be selected for its own strengths, not because another free-zone page used a persuasive generic claim.`} /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{benefits.map((item) => { const Icon = item.icon || Award; return (<div key={item.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm"><Icon className="h-7 w-7 text-[#08854C]" /><h3 className="mt-5 text-[18px] text-zinc-950">{item.title}</h3><p className="mt-3 text-[13px] leading-6 text-zinc-600">{item.text}</p></div>); })}</div></div></section>

      <section className="bg-[#07140B] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr]"><SectionHeading eyebrow="Residence" title={`Visa options for ${page.headingName} business owners and employees`} text="Visa planning should happen before office selection because the office route can influence quota, cost, timeline, and future hiring flexibility." tone="dark" /><div className="grid gap-4 sm:grid-cols-2">{visaOptions.map((item) => (<div key={item.title} className="rounded-[8px] border border-white/12 bg-white/[0.06] p-6"><IdCard className="h-6 w-6 text-[#C7A969]" /><h3 className="mt-4 text-[18px] text-white">{item.title}</h3><p className="mt-3 text-[13px] leading-6 text-white/70">{item.text}</p></div>))}</div></div></section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div><SectionHeading eyebrow="Scale Partners" title={`Why Scale Partners for ${page.headingName} setup`} text={`${page.headingName} setup needs the activity, office, visa, banking and compliance plan aligned from the start.`} /><div className="mt-8 flex flex-col gap-3 sm:flex-row"><PrimaryButton onClick={quoteZone}>Start {publicName} Setup</PrimaryButton><SecondaryButton onClick={() => setPage('finance-banking')}>Review Banking Support</SecondaryButton></div></div><div className="rounded-[8px] border border-zinc-200 bg-[#F7FBF8] p-6"><ul className="space-y-4">{scalePartners.map((item) => (<li key={item} className="flex gap-3 text-[14px] leading-7 text-zinc-700"><Handshake className="mt-1 h-5 w-5 shrink-0 text-[#08854C]" /><span>{item}</span></li>))}</ul></div></div></section>

      <section className="bg-[#F7FBF8] px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><SectionHeading eyebrow="Renewal" title={`${page.headingName} business license renewal process and cost`} text={`${page.headingName} renewal cost depends on license type, workspace, establishment card, visas, penalties, amendments and the current authority fee schedule.`} /><div className="mt-10 grid gap-4 lg:grid-cols-4">{renewalSteps.map((item, index) => (<div key={item.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm"><Clock3 className="h-6 w-6 text-[#08854C]" /><div className="mt-4 text-[11px] uppercase tracking-[0.14em] text-zinc-400">Renewal step {index + 1}</div><h3 className="mt-2 text-[18px] text-zinc-950">{item.title}</h3><p className="mt-3 text-[13px] leading-6 text-zinc-600">{item.text}</p></div>))}</div><div className="mt-6 rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-zinc-200"><div className="grid gap-4 md:grid-cols-3">{[['License Renewal', publicFeeValue(page.verifiedNumbers.renewalFees, 'renewal'), `Confirm ${page.headingName} authority renewal fees before filing.`], ['Workspace Renewal', 'Quoted with office route', `Confirm desk, office, warehouse or facility renewal for ${page.headingName}.`], ['Visa And Card Renewal', 'Quoted with visa plan', `Confirm establishment card and visa renewal costs for ${page.headingName}.`]].map(([name, price, text]) => (<div key={name} className="border-l border-zinc-200 pl-4"><h3 className="text-[15px] text-zinc-950">{name}</h3><div className="mt-2 text-[25px] text-[#08854C]">{price}</div><p className="mt-2 text-[12.5px] leading-6 text-zinc-600">{text}</p></div>))}</div></div></div></section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><SectionHeading eyebrow="Compliance" title={`Ongoing compliance requirements for a ${page.headingName} company`} text={`${page.headingName} companies should keep clean records because renewal, visas, bank relationships, tax position and investor diligence all depend on file quality.`} /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{complianceItems.map((item) => (<div key={item.title} className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm"><ReceiptText className="h-6 w-6 text-[#08854C]" /><h3 className="mt-4 text-[18px] text-zinc-950">{item.title}</h3><p className="mt-3 text-[13px] leading-6 text-zinc-600">{item.text}</p></div>))}</div></div></section>

      <section className="bg-[#07140B] px-5 py-20 text-white sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><SectionHeading eyebrow="Comparison" title={`${page.headingName} vs other UAE free zones`} text={publicComparisonLine(page)} tone="dark" /><div className="mt-10 overflow-hidden rounded-[8px] border border-white/12"><div className="hidden grid-cols-[0.8fr_1.1fr_1.3fr_1.1fr_0.9fr] bg-white/10 px-5 py-4 text-[11px] uppercase tracking-[0.14em] text-white/55 lg:grid"><div>Zone</div><div>Position</div><div>Best for</div><div>Office</div><div>Cost profile</div></div>{comparisons.map((item) => (<div key={item.zone} className="grid gap-3 border-t border-white/10 px-5 py-5 text-[13px] text-white/76 lg:grid-cols-[0.8fr_1.1fr_1.3fr_1.1fr_0.9fr]"><div className="text-[16px] text-white">{item.zone}</div><div>{item.position}</div><div>{item.best}</div><div>{item.office}</div><div className="text-[#C7A969]">{item.cost}</div></div>))}</div></div></section>

      <section className="px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr]"><SectionHeading eyebrow="FAQs" title={`${page.headingName} company setup questions`} text={`These are the questions founders usually ask before choosing ${page.headingName} over another UAE free zone.`} /><div className="space-y-3">{faqs.map((faq) => (<details key={faq.q} className="group rounded-[8px] border border-zinc-200 bg-white p-5 shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] text-zinc-950"><span>{faq.q}</span><ChevronDown className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" /></summary><p className="mt-4 text-[13.5px] leading-7 text-zinc-600">{faq.a}</p></details>))}</div></div></section>

      <section className="px-5 pb-24 sm:px-7 lg:px-10 lg:pb-32"><div className="mx-auto overflow-hidden rounded-[8px] bg-[#07140B] text-white shadow-[0_30px_100px_rgba(7,20,11,0.18)]"><div className="grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_0.55fr] lg:items-center lg:px-14 lg:py-16"><div><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#C7A969]"><Coins className="h-3.5 w-3.5" /><span>Final CTA</span></div><h2 className="max-w-3xl text-[32px] leading-[1.12] text-white sm:text-[44px]">Build your {page.headingName} company with the right license, office, visa, and banking plan from day one.</h2><p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70">Send us your activity, shareholder structure, visa requirement and budget. We will map the {page.headingName} route, compare alternatives and give you a practical first-year cost view before filing.</p></div><div className="flex flex-col gap-3"><PrimaryButton onClick={quoteZone} dark>Get {publicName} Setup Quote</PrimaryButton><SecondaryButton onClick={openBlankModal} dark>Book Advisory Call</SecondaryButton></div></div></div></section>
    </div>
  );
}

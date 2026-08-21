import type { Metadata } from 'next';

const siteName = 'Scale Partners';

function metadata(title: string, description: string, canonical: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: 'website',
    },
  };
}

export const routeMetadata = {
  home: metadata(
    'Scale Partners | Business Setup & Corporate Advisory in Dubai',
    'Scale Partners helps founders and companies choose the right UAE mainland, free zone, offshore, visa, tax, accounting and banking route before filing.',
    '/',
  ),
  'business-setup-dubai': metadata(
    'Business Setup in Dubai | Company Formation UAE | Scale Partners',
    'Set up a company in Dubai with mainland, free zone, offshore, visa, banking, tax and compliance guidance from Scale Partners.',
    '/business-setup-dubai',
  ),
  'setup-mainland': metadata(
    'Mainland Company Setup in Dubai | Scale Partners UAE',
    'Dubai mainland company setup guidance covering DET licensing, commercial activities, office planning, visas, banking and compliance.',
    '/setup-mainland',
  ),
  'setup-freezone': metadata(
    'UAE Free Zone Company Setup | Scale Partners Dubai',
    'Compare UAE free zone company setup routes, licenses, office options, visa planning, banking readiness and renewal considerations.',
    '/setup-freezone',
  ),
  'setup-offshore': metadata(
    'Offshore Company Formation UAE | Scale Partners',
    'UAE offshore company formation guidance for holding, asset ownership, international structuring and bank-readiness planning.',
    '/setup-offshore',
  ),
  'visa-golden': metadata(
    'UAE Golden Visa Advisory | Scale Partners Dubai',
    'UAE Golden Visa eligibility guidance for investors, entrepreneurs, executives, specialists and family residence planning.',
    '/visa-golden',
  ),
  'visa-residence': metadata(
    'UAE Residence Visa Services | Scale Partners Dubai',
    'UAE residence visa planning for founders, shareholders, employees and families linked to company setup and renewal routes.',
    '/visa-residence',
  ),
  'visa-pro': metadata(
    'UAE PRO Services & Visa Processing | Scale Partners',
    'UAE PRO services for establishment cards, visas, Emirates ID, renewals, amendments, document processing and government coordination.',
    '/visa-pro',
  ),
  'finance-tax': metadata(
    'UAE Corporate Tax Advisory | Scale Partners Dubai',
    'UAE corporate tax, VAT, free-zone qualifying income and compliance planning for mainland, free zone and offshore structures.',
    '/finance-tax',
  ),
  'finance-accounting': metadata(
    'Accounting Services UAE | Scale Partners Dubai',
    'Accounting, bookkeeping, VAT, corporate tax recordkeeping and renewal-ready finance support for UAE companies.',
    '/finance-accounting',
  ),
  'finance-banking': metadata(
    'UAE Business Bank Account Support | Scale Partners',
    'UAE business banking support for company setup files, bank-ready narratives, activity evidence, compliance documents and account applications.',
    '/finance-banking',
  ),
  contact: metadata(
    'Contact Scale Partners | UAE Corporate Advisory Desk',
    'Contact Scale Partners for UAE business setup, free zone selection, visa, tax, accounting and banking advisory support.',
    '/contact',
  ),
  'about-us': metadata(
    'About Scale Partners | UAE Corporate Advisory Team',
    'Learn about Scale Partners and its UAE corporate advisory approach for company formation, visas, banking, tax and compliance.',
    '/about-us',
  ),
  'privacy-policy': metadata(
    'Privacy Policy | Scale Partners Corporate Advisory',
    'Read the Scale Partners privacy policy for website enquiries, lead submissions, cookies, analytics and contact data handling.',
    '/privacy-policy',
  ),
  'terms-and-conditions': metadata(
    'Terms & Conditions | Scale Partners Corporate Advisory',
    'Read the Scale Partners website terms covering advisory information, quotations, client responsibilities, third-party decisions and liability.',
    '/terms-and-conditions',
  ),
  'fz-dmcc': metadata(
    'DMCC Company Formation in Dubai | Scale Partners',
    'Set up a DMCC company in Dubai with licensing, office, visa, banking, renewal and compliance support from Scale Partners.',
    '/fz-dmcc',
  ),
  'lic-commercial': metadata(
    'Commercial License UAE | Scale Partners Dubai',
    'UAE commercial license guidance for trading, import-export, distribution, activity selection, office planning and banking readiness.',
    '/lic-commercial',
  ),
  'lic-trading': metadata(
    'Trading License UAE | Scale Partners Dubai',
    'UAE trading license setup guidance for mainland and free zone routes, activity wording, customs, office options, visas and bank files.',
    '/lic-trading',
  ),
  'lic-media': metadata(
    'Media License UAE | Scale Partners Dubai',
    'UAE media license guidance for creators, agencies, production, marketing, content businesses, freelancers and creative free zones.',
    '/lic-media',
  ),
  'lic-industrial': metadata(
    'Industrial License UAE | Scale Partners Dubai',
    'UAE industrial license guidance for manufacturing, warehousing, logistics, facility planning, approvals, visas and compliance.',
    '/lic-industrial',
  ),
  'lic-holding': metadata(
    'Holding Company License UAE | Scale Partners',
    'UAE holding company setup guidance for asset ownership, group control, SPV planning, banking, tax and renewal considerations.',
    '/lic-holding',
  ),
  'lic-ecommerce': metadata(
    'E-commerce License UAE | Scale Partners Dubai',
    'UAE e-commerce license guidance for online sellers, marketplaces, payment flows, fulfillment, free zone selection and banking readiness.',
    '/lic-ecommerce',
  ),
} satisfies Record<string, Metadata>;

export type RouteMetadataKey = keyof typeof routeMetadata;

export const legacyDirectorySlugs: RouteMetadataKey[] = [
  'lic-commercial',
  'lic-trading',
  'lic-media',
  'lic-industrial',
  'lic-holding',
  'lic-ecommerce',
];

export function metadataForSlug(slug: string): Metadata | undefined {
  return routeMetadata[slug as RouteMetadataKey];
}

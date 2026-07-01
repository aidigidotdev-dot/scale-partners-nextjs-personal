"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { PageId } from '../types';

interface SeoEngineProps {
  page: PageId;
}

export default function SeoEngine({ page }: SeoEngineProps) {
  useEffect(() => {
    // 1. Meta Mapping
    let title = 'Scale Partners | Business Setup in Dubai & UAE Free Zones';
    let description = 'Scale Partners is the UAE\'s premier legal advisory for market entry, mainland configurations, and corporate expansion. Professional, precise licensing and visa services.';
    let schemaJson: Record<string, any> | Record<string, any>[] = [];

    // Helper URLs
    const siteUrl = window.location.origin;

    // Breadcrumbs base
    const baseBreadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        }
      ]
    };

    // Generic FAQ mapping for standard pages
    const mainFaqs = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cheapest free zone for business setup in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cheapest options include Sharjah Media City (Shams) starting at approximately AED 8,900 and Meydan Free Zone starting at AED 12,500. Exact prices vary based on requested visa allocations and commercial activity groups."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to establish a Free Zone company in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For virtual/digital-first hubs like Meydan and Shams, setup clears in 1 to 3 business days. Premium, highly-regulated hubs like DMCC take from 8 to 10 working days due to physical lease verification and audit checks."
          }
        },
        {
          "@type": "Question",
          "name": "Are physical office spaces mandatory for all UAE companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Most modern service, e-commerce, and consultancy sectors are permitted to register under virtual desk directories or Shared Flexi Desk plans, eliminating high upfront office rent costs."
          }
        }
      ]
    };

    switch (page) {
      case 'home':
        title = 'Scale Partners Dubai | Premier Corporate Setup & Advisory';
        description = 'Professional corporate services, multi-currency banking, and premium residency solutions for Dubai & UAE setups. Voted elite UAE registration agent.';
        schemaJson = [
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${siteUrl}/#agency`,
            "name": "Scale Partners Corporate Services",
            "image": "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
            "url": siteUrl,
            "telephone": "+97143921000",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Meydan Racecourse Hotel Complex, Office 302",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.1568,
              "longitude": 55.3051
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/scalepartnersuae"
            ]
          },
          mainFaqs
        ];
        break;

      case 'business-setup-dubai':
        title = 'Business Setup in Dubai | Company Formation UAE | Scale Partners';
        description = 'Detailed business setup in Dubai guide covering mainland, free zone, offshore company formation, licensing, visas, banking, tax, and compliance support.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Business Setup in Dubai",
          "item": `${siteUrl}/business-setup-dubai`
        });
        schemaJson = [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Setup in Dubai",
            "serviceType": "UAE company formation and corporate advisory",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Scale Partners Corporate Advisory"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "description": "Mainland, free zone, and offshore business setup guidance with license, visa, banking, tax, and compliance support.",
            "url": `${siteUrl}/business-setup-dubai`
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best option for business setup in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best route depends on business activity, customer location, visa needs, office requirements, and banking profile. Scale Partners compares mainland, free zone, and offshore routes before submission."
                }
              },
              {
                "@type": "Question",
                "name": "How long does company formation in Dubai take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simple free zone setups can move quickly once documents are ready. Mainland and regulated activities may require extra approvals, lease steps, or authority review."
                }
              },
              {
                "@type": "Question",
                "name": "Can Scale Partners help after the license is issued?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Support can include corporate tax registration, VAT, bookkeeping, bank account preparation, visas, renewals, and ongoing compliance."
                }
              }
            ]
          }
        ];
        break;

      case 'setup-mainland':
        title = 'Mainland Business Setup Dubai | Corporate LLC Licensing';
        description = 'Scale your operations under full local commercial clearance. Secure 100% foreign ownership corporate license with full Dubai Department of Economy and Tourism (DET) approvals.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Mainland setup",
          "item": `${siteUrl}/#setup-mainland`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Dubai Mainland Business LLC Setup Portfolios",
            "description": "Premium mainland license advisory with Dubai Economy and Tourism portal coordination and local corporate sponsorship clearance.",
            "offers": {
              "@type": "Offer",
              "price": "18500",
              "priceCurrency": "AED",
              "valueAddedTaxIncluded": "false",
              "url": `${siteUrl}/#setup-mainland`
            }
          }
        ];
        break;

      case 'setup-freezone':
        title = 'UAE Free Zone Business Setup | Cost-Effective Registry';
        description = 'Establish your tax-exempt corporate presence. Optimize and search over 45 UAE Free Zone authorities with starting base packages from 8,900 AED.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Free Zone setups",
          "item": `${siteUrl}/#setup-freezone`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UAE Free Zone Company Registration Pack",
            "description": "Comprehensive Free Zone company registry portfolio across elite Dubai, Sharjah, RAK and Abu Dhabi jurisdictions.",
            "offers": {
              "@type": "Offer",
              "price": "8900",
              "priceCurrency": "AED",
              "valueAddedTaxIncluded": "false",
              "url": `${siteUrl}/#setup-freezone`
            }
          },
          mainFaqs
        ];
        break;

      case 'setup-offshore':
        title = 'Offshore Company Setup UAE | Premium Asset Protection';
        description = 'Establish pristine, secure corporate vehicle frameworks under JAFZA or RAK ICC guidelines. Comprehensive international tax structuring & security.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Offshore structuring",
          "item": `${siteUrl}/#setup-offshore`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "International Holding & Offshore Setup Port",
            "description": "High-security JAFZA & RAK ICC holding instruments with global asset administration authorization.",
            "offers": {
              "@type": "Offer",
              "price": "12000",
              "priceCurrency": "AED",
              "valueAddedTaxIncluded": "false",
              "url": `${siteUrl}/#setup-offshore`
            }
          }
        ];
        break;

      // FREE ZONE SPECIFIC PAGES (SEO Directory Pages)
      case 'fz-meydan':
        title = 'Meydan Free Zone Dubai Setup | Cost, Visas & Instant Registration';
        description = 'Apply for Meydan Free Zone company registration instantly. Starting at 12,500 AED. Zero-audit virtual desk setups with direct pre-approved corporate banking integration.';
        baseBreadcrumbs.itemListElement.push(
          { "@type": "ListItem", "position": 2, "name": "Free Zone setups", "item": `${siteUrl}/#setup-freezone` },
          { "@type": "ListItem", "position": 3, "name": "Meydan Free Zone", "item": `${siteUrl}/#fz-meydan` }
        );
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Meydan Free Zone License Pack",
            "description": "Digital-first instant commerce, media, tech or consulting setup at Dubai Meydan Racecourse Hotel. Includes up to 3 activity divisions.",
            "offers": {
              "@type": "Offer",
              "price": "12500",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#fz-meydan`,
              "priceValidUntil": "2027-01-01"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is a physical company audit mandatory in Meydan Free Zone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Meydan Free Zone has officially exempted registered companies from submitting mandatory yearly audited financial statements to the registrar, lowering administrative overhead."
                }
              },
              {
                "@type": "Question",
                "name": "Does Meydan Free Zone support corporate banking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Meydan is globally recognized for its partnership with Wio Bank, enabling newly registered digital ventures to secure local corporate IBANs with priority processing APIs."
                }
              }
            ]
          }
        ];
        break;

      case 'fz-ifza':
        title = 'IFZA Dubai Business Setup Guide | Silicon Oasis Cost Matching';
        description = 'Register your agency or general trader under IFZA Dubai. Multi-year advance discounts, zero-audit filing structures, and executive holding company frameworks.';
        baseBreadcrumbs.itemListElement.push(
          { "@type": "ListItem", "position": 2, "name": "Free Zones", "item": `${siteUrl}/#setup-freezone` },
          { "@type": "ListItem", "position": 3, "name": "IFZA Dubai", "item": `${siteUrl}/#fz-ifza` }
        );
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "IFZA Dubai Company Setup Strategy",
            "description": "Highly scalable professional and commercial licenses with advanced multi-year registry savings packages.",
            "offers": {
              "@type": "Offer",
              "price": "13900",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#fz-ifza`
            }
          }
        ];
        break;

      case 'fz-dmcc':
        title = 'DMCC Company Formation in Dubai | JLT License, Office & Visa Support';
        description = 'Set up your DMCC company in Dubai with licensing, office selection, visa, banking readiness, renewal, and compliance support for serious founders.';
        baseBreadcrumbs.itemListElement.push(
          { "@type": "ListItem", "position": 2, "name": "Free Zones", "item": `${siteUrl}/setup-freezone` },
          { "@type": "ListItem", "position": 3, "name": "DMCC Company Formation", "item": `${siteUrl}/fz-dmcc` }
        );
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "DMCC Company Formation Advisory",
            "description": "DMCC licensing, office selection, visa planning, banking readiness, renewal, and compliance support.",
            "offers": {
              "@type": "Offer",
              "price": "27900",
              "priceCurrency": "AED",
              "url": `${siteUrl}/fz-dmcc`
            }
          }
        ];
        break;

      case 'fz-shams':
        title = 'Shams Sharjah Media City Setup | Cheaper UAE License Package';
        description = 'The cheapest official UAE business setup portal. Shams media and consulting registrations start at just 8,900 AED with full virtual office capabilities.';
        baseBreadcrumbs.itemListElement.push(
          { "@type": "ListItem", "position": 2, "name": "Free Zones", "item": `${siteUrl}/#setup-freezone` },
          { "@type": "ListItem", "position": 3, "name": "Shams Sharjah Media City", "item": `${siteUrl}/#fz-shams` }
        );
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Shams Media & Solopreneur License package",
            "description": "Fast 24-hour approval license format for creators, freelancers, and virtual agencies.",
            "offers": {
              "@type": "Offer",
              "price": "8900",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#fz-shams`
            }
          }
        ];
        break;

      case 'fz-rakez':
        title = 'RAKEZ Industrial Setup & Manufacturing License Packages';
        description = 'Ras Al Khaimah Economic Zone business setup. Dedicated logistics, metal fabrication, assembly plants, and physical warehouses starting at 11,200 AED.';
        baseBreadcrumbs.itemListElement.push(
          { "@type": "ListItem", "position": 2, "name": "Free Zones", "item": `${siteUrl}/#setup-freezone` },
          { "@type": "ListItem", "position": 3, "name": "RAKEZ Ras Al Khaimah", "item": `${siteUrl}/#fz-rakez` }
        );
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "RAKEZ Corporate Logistics & Assembly License Plan",
            "description": "Bespoke heavy-equipment, logistics, packing, and raw material assembly licenses with optional dual-presence branch permissions.",
            "offers": {
              "@type": "Offer",
              "price": "11200",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#fz-rakez`
            }
          }
        ];
        break;

      case 'fz-dwtc':
        title = 'DWTC Dubai World Trade Centre Business Setup | Sheikh Zayed Road';
        description = 'Prime commercial office setup on Sheikh Zayed Road. Host international networks, regional offices, and advisory consultancies in UAE\'s convention heartland.';
        baseBreadcrumbs.itemListElement.push(
          { "@type": "ListItem", "position": 2, "name": "Free Zones", "item": `${siteUrl}/#setup-freezone` },
          { "@type": "ListItem", "position": 3, "name": "DWTC Dubai", "item": `${siteUrl}/#fz-dwtc` }
        );
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "DWTC Event & Multilateral Office Registry Package",
            "description": "Premium multi-office commercial setup matching global asset protection indices directly in central Dubai.",
            "offers": {
              "@type": "Offer",
              "price": "21000",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#fz-dwtc`
            }
          }
        ];
        break;

      // LICENSE TYPE SPECIFIC PAGES
      case 'lic-ecommerce':
        title = 'E-Commerce License UAE | Sell Online Legally in Dubai';
        description = 'Detailed checklist for obtaining an e-commerce corporate setup in the UAE. Register payment gateways, digital inventories, and shipping logs starting at 12,500 AED.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "E-Commerce Licensing Guide",
          "item": `${siteUrl}/#lic-ecommerce`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UAE Digital Retail & E-Commerce Corporate License Pack",
            "description": "Full-compliance digital authorization enabling stripe, checkout, and local merchant integration across free zone and mainland directories.",
            "offers": {
              "@type": "Offer",
              "price": "12500",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#lic-ecommerce`
            }
          }
        ];
        break;

      case 'lic-trading':
        title = 'General Trading License UAE | Import & Export Procedures';
        description = 'Official compliance framework for international trading, warehousing, and commercial distribution. Setup trade routes securely across Dubai Silicon Oasis or Jebel Ali.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "General Trading License",
          "item": `${siteUrl}/#lic-trading`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Trading and Commercial Logistics License Portfolio",
            "description": "Full commercial trading framework representing worldwide import/export, local warehousing representation, and customs clearing clearances.",
            "offers": {
              "@type": "Offer",
              "price": "13900",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#lic-trading`
            }
          }
        ];
        break;

      case 'lic-commercial':
        title = 'Commercial & Service License Dubai | Consulting & Agency Setups';
        description = 'Become an approved business consultant, SaaS platform, or marketing agency in Dubai. Cost breakdowns, virtual desks, and banking pathways.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Commercial Services License",
          "item": `${siteUrl}/#lic-commercial`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Professional Consultancy & Services Corporate License",
            "description": "Comprehensive corporate advisory service structure with full legal registry setup and bank account clearance assistance.",
            "offers": {
              "@type": "Offer",
              "price": "12500",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#lic-commercial`
            }
          }
        ];
        break;

      case 'lic-media':
        title = 'Media & Creative Licensing Dubai | Influencers & Content Creators';
        description = 'Establish your official creative agency or freelance permit in the UAE. Turnkey production, photography, writing, and digital publishing permissions.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Media & Creative License",
          "item": `${siteUrl}/#lic-media`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Media production and Influence Registration permits",
            "description": "Simplified creative licensing package supporting 100% content ownership with zero audit duties.",
            "offers": {
              "@type": "Offer",
              "price": "8900",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#lic-media`
            }
          }
        ];
        break;

      case 'lic-industrial':
        title = 'Industrial Manufacturing License UAE | Warehouse Assembly Packages';
        description = 'Establish a physical factory, processing plant, or logistics distribution terminal in the UAE. RAKEZ and JAFZA industrial licensing pathways.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Industrial Licensing Guide",
          "item": `${siteUrl}/#lic-industrial`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Heavy Industrial Processing & Assembly License Layout",
            "description": "Full custom plant operational permits with chemical hazard, utility flow, and ocean freight logistics clearances.",
            "offers": {
              "@type": "Offer",
              "price": "11200",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#lic-industrial`
            }
          }
        ];
        break;

      case 'lic-holding':
        title = 'Holding Company Setup UAE | Asset Protection & IP Shielding';
        description = 'Isolate corporate risk. Configure a dedicated UAE Special Purpose Vehicle (SPV) or Holdco matching high-end protection guidelines. Instant registrations.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Holding Company Setup",
          "item": `${siteUrl}/#lic-holding`
        });
        schemaJson = [
          baseBreadcrumbs,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Asset protection holding and SPV instrument config",
            "description": "Zero corporate liability instruments paired with tax-exempt international shares storage portfolios.",
            "offers": {
              "@type": "Offer",
              "price": "13900",
              "priceCurrency": "AED",
              "url": `${siteUrl}/#lic-holding`
            }
          }
        ];
        break;

      case 'calculator':
        title = 'UAE Company Setup Cost Estimator | Instant Custom Breakdown';
        description = 'Calculate corporate registration and residency visa costs instantly. Real-time authority fees, activity fees, and workspace licensing totals transparently displayed.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Cost Estimator",
          "item": `${siteUrl}/#calculator`
        });
        schemaJson = [
          baseBreadcrumbs,
          mainFaqs
        ];
        break;

      case 'about-us':
        title = 'About Scale Partners | UAE Corporate Advisory Team';
        description = 'Learn how Scale Partners supports UAE company formation, licensing, visa, banking, tax, renewal, and compliance planning for founders and corporate shareholders.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": `${siteUrl}/about-us`
        });
        schemaJson = [
          baseBreadcrumbs
        ];
        break;

      case 'privacy-policy':
        title = 'Privacy Policy | Scale Partners Corporate Advisory';
        description = 'Read how Scale Partners handles website enquiries, advisory intake details, communications, cookies, retention, and privacy requests.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": `${siteUrl}/privacy-policy`
        });
        schemaJson = [
          baseBreadcrumbs
        ];
        break;

      case 'terms-and-conditions':
        title = 'Terms & Conditions | Scale Partners Corporate Advisory';
        description = 'Review the terms for using the Scale Partners website, advisory information, quotations, third-party authority coordination, and client responsibilities.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Terms & Conditions",
          "item": `${siteUrl}/terms-and-conditions`
        });
        schemaJson = [
          baseBreadcrumbs
        ];
        break;

      case 'contact':
        title = 'Book Corporate Consultation | Scale Partners Expert Advisors';
        description = 'Schedule a secure, white-glove 1-on-1 session with our licensed registration specialists. Complete UAE company setup planning, bank setups, and golden visa filings.';
        baseBreadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": `${siteUrl}/contact`
        });
        schemaJson = [
          baseBreadcrumbs
        ];
        break;

      default:
        break;
    }

    // Apply Meta Tags
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Apply JSON-LD Script
    let schemaScript = document.getElementById('seo-schema-markup') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'seo-schema-markup';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(schemaJson, null, 2);

    // Clean up if component unmounts (optional but good practice)
    return () => {
      // Keep state intact to prevent flickering, or could clear schema
    };
  }, [page]);

  return null; // Side-effect only component
}

import type { Metadata } from 'next';
import React from 'react';
import { permanentRedirect } from 'next/navigation';
import DirectorySlugClient from '@/src/components/DirectorySlugClient';
import FreeZoneLandingPage from '@/src/components/FreeZoneLandingPage';
import { freeZoneAliasRedirects, freeZonePages, freeZonePagesBySlug } from '@/src/lib/freeZonePages';
import { legacyDirectorySlugs, metadataForSlug } from '@/src/lib/routeMetadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function publicFreeZoneField(value: string) {
  return (value || '')
    .replace(/\s*\[[^\]]*(?:verify|limited public info|sparse public data)[^\]]*\]/gi, '')
    .replace(/\bVerify current[^.]*\.?/gi, '')
    .replace(/\bVerify before publishing[^.]*\.?/gi, '')
    .replace(/\bSparse public data[^.]*\.?/gi, '')
    .replace(/\bLimited public info[^.]*\.?/gi, '')
    .replace(/\bSTRUCTURAL NOTE\b[^.]*\.?/gi, '')
    .replace(/\bNOTE\b[^.]*\.?/gi, '')
    .replace(/\bDifferentiate\s+(?:on|from|this)[^.]*\.?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function pageTitle(name: string) {
  return `${name} Company Formation | Scale Partners UAE`;
}

function pageDescription(name: string) {
  return `${name} company setup guidance for UAE founders, covering license routes, office planning, visas, banking, renewal costs and free-zone fit before filing.`;
}

export function generateStaticParams() {
  return [
    ...freeZonePages.map((page) => ({ slug: page.slug })),
    ...legacyDirectorySlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = freeZoneAliasRedirects[slug] || slug;
  const freeZonePage = freeZonePagesBySlug[canonicalSlug];

  if (!freeZonePage) return metadataForSlug(slug) || {};

  const title = pageTitle(freeZonePage.headingName);
  const description = pageDescription(freeZonePage.headingName);
  const canonical = `/${canonicalSlug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function DirectorySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const canonicalSlug = freeZoneAliasRedirects[slug];

  if (canonicalSlug) {
    permanentRedirect(`/${canonicalSlug}`);
  }

  const freeZonePage = freeZonePagesBySlug[slug];

  if (freeZonePage) {
    return (
      <FreeZoneLandingPage
        page={{
          ...freeZonePage,
          positioning: publicFreeZoneField(freeZonePage.positioning),
          comparisonStance: publicFreeZoneField(freeZonePage.comparisonStance),
          rawInput: '',
        }}
      />
    );
  }

  return <DirectorySlugClient slug={slug} />;
}
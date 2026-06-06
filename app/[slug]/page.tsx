'use client';

import React, { use } from 'react';
import DirectoryPages from '@/src/components/DirectoryPages';
import { useQuote } from '@/src/components/QuoteProvider';
import { useRouter } from 'next/navigation';
import { PageId } from '@/src/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DirectorySlugPage({ params }: PageProps) {
  const { slug } = use(params);
  const { openBlankModal, handleFreeZoneSelected } = useQuote();
  const router = useRouter();
  
  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  // Ensure slug corresponds directly to legacy PageId mappings
  const pageId = slug as PageId;

  return (
    <DirectoryPages 
      page={pageId} 
      setPage={setPage} 
      onApplySetup={handleFreeZoneSelected}
      openContactModal={openBlankModal}
    />
  );
}

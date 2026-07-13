'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DirectoryPages from './DirectoryPages';
import { useQuote } from './QuoteProvider';
import { PageId } from '../types';

export default function DirectorySlugClient({ slug }: { slug: string }) {
  const { openBlankModal, handleFreeZoneSelected } = useQuote();
  const router = useRouter();

  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <DirectoryPages
      page={slug as PageId}
      setPage={setPage}
      onApplySetup={handleFreeZoneSelected}
      openContactModal={openBlankModal}
    />
  );
}

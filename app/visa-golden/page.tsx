'use client';

import React from 'react';
import VisaPage from '@/src/components/VisaPage';
import { useQuote } from '@/src/components/QuoteProvider';
import { useRouter } from 'next/navigation';
import { PageId } from '@/src/types';

export default function VisaGoldenPage() {
  const { openBlankModal } = useQuote();
  const router = useRouter();
  
  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <VisaPage 
      type="golden" 
      setPage={setPage} 
      openContactModal={openBlankModal} 
    />
  );
}

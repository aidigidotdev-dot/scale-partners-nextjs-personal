'use client';

import React from 'react';
import BusinessSetupPage from '@/src/components/BusinessSetupPage';
import { useQuote } from '@/src/components/QuoteProvider';
import { useRouter } from 'next/navigation';
import { PageId } from '@/src/types';

export default function SetupOffshorePage() {
  const { openBlankModal } = useQuote();
  const router = useRouter();
  
  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <BusinessSetupPage 
      type="offshore" 
      setPage={setPage} 
      openContactModal={openBlankModal} 
    />
  );
}

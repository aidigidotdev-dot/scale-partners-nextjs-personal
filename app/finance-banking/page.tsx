'use client';

import React from 'react';
import FinancePage from '@/src/components/FinancePage';
import { useQuote } from '@/src/components/QuoteProvider';
import { useRouter } from 'next/navigation';
import { PageId } from '@/src/types';

export default function FinanceBankingPage() {
  const { openBlankModal } = useQuote();
  const router = useRouter();
  
  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <FinancePage 
      type="banking" 
      setPage={setPage} 
      openContactModal={openBlankModal} 
    />
  );
}

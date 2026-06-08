'use client';

import React from 'react';
import CostCalculator from '@/src/components/CostCalculator';
import { useQuote } from '@/src/components/QuoteProvider';
import { useRouter } from 'next/navigation';
import { PageId } from '@/src/types';

export default function CalculatorPage() {
  const { openBlankModal, handleQuoteCalculated } = useQuote();
  const router = useRouter();
  
  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <CostCalculator 
      onQuoteSubmit={handleQuoteCalculated} 
      openContactModal={openBlankModal} 
    />
  );
}

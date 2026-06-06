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
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4">
      <CostCalculator 
        onQuoteSubmit={handleQuoteCalculated} 
        openContactModal={openBlankModal} 
      />
    </div>
  );
}

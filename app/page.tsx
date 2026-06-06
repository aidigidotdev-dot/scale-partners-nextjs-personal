'use client';

import React from 'react';
import HeroSection from '@/src/components/HeroSection';
import { useQuote } from '@/src/components/QuoteProvider';
import { useRouter } from 'next/navigation';
import { PageId } from '@/src/types';

export default function HomePage() {
  const { openBlankModal } = useQuote();
  const router = useRouter();
  
  const setPage = (page: PageId) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <div className="animate-fade-in">
      <HeroSection setPage={setPage} openContactModal={openBlankModal} />
    </div>
  );
}

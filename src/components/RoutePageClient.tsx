'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';
import BusinessSetupPage from './BusinessSetupPage';
import VisaPage from './VisaPage';
import FinancePage from './FinancePage';
import { useQuote } from './QuoteProvider';
import type { PageId } from '../types';

type RoutePageClientProps = {
  page: PageId;
};

export default function RoutePageClient({ page }: RoutePageClientProps) {
  const { openBlankModal, handleFreeZoneSelected } = useQuote();
  const router = useRouter();

  const setPage = (nextPage: PageId) => {
    router.push(nextPage === 'home' ? '/' : `/${nextPage}`);
  };

  if (page === 'home') {
    return (
      <div className="animate-fade-in">
        <HeroSection setPage={setPage} openContactModal={openBlankModal} />
      </div>
    );
  }

  if (page === 'setup-mainland') {
    return <BusinessSetupPage type="mainland" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'setup-freezone') {
    return <BusinessSetupPage type="freezone" setPage={setPage} openContactModal={openBlankModal} onSelectFreeZone={handleFreeZoneSelected} />;
  }

  if (page === 'setup-offshore') {
    return <BusinessSetupPage type="offshore" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'visa-golden') {
    return <VisaPage type="golden" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'visa-residence') {
    return <VisaPage type="residence" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'visa-pro') {
    return <VisaPage type="pro" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'finance-tax') {
    return <FinancePage type="tax" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'finance-accounting') {
    return <FinancePage type="accounting" setPage={setPage} openContactModal={openBlankModal} />;
  }

  if (page === 'finance-banking') {
    return <FinancePage type="banking" setPage={setPage} openContactModal={openBlankModal} />;
  }

  return null;
}

'use client';

import React, { createContext, useContext, useState } from 'react';
import { CostBreakdown } from '../types';

interface QuoteContextType {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  quoteBreakdown: CostBreakdown | undefined;
  setQuoteBreakdown: (breakdown: CostBreakdown | undefined) => void;
  quoteSelection: {
    jurisdiction: string;
    activity: string;
    visas: number;
    office: string;
  } | undefined;
  setQuoteSelection: (selection: any) => void;
  handleQuoteCalculated: (breakdown: CostBreakdown, selections: any) => void;
  handleFreeZoneSelected: (freeZoneName: string, estimatedCost: number) => void;
  openBlankModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteBreakdown, setQuoteBreakdown] = useState<CostBreakdown | undefined>(undefined);
  const [quoteSelection, setQuoteSelection] = useState<any>(undefined);

  const handleQuoteCalculated = (breakdown: CostBreakdown, selections: any) => {
    setQuoteBreakdown(breakdown);
    setQuoteSelection(selections);
    setModalOpen(true);
  };

  const handleFreeZoneSelected = (freeZoneName: string, estimatedCost: number) => {
    const breakdown: CostBreakdown = {
      jurisdictionFee: estimatedCost,
      activityFee: 0,
      visaFee: 3500,
      officeFee: 0,
      adminFee: 0,
      total: estimatedCost + 3500
    };
    
    setQuoteBreakdown(breakdown);
    setQuoteSelection({
      jurisdiction: `${freeZoneName} (Pre-selected Free Zone)`,
      activity: "Custom Licensing Activity Bundle",
      visas: 1,
      office: "Virtual / Flexi Desk Plan"
    });
    setModalOpen(true);
  };

  const openBlankModal = () => {
    setQuoteBreakdown(undefined);
    setQuoteSelection(undefined);
    setModalOpen(true);
  };

  return (
    <QuoteContext.Provider value={{
      modalOpen,
      setModalOpen,
      quoteBreakdown,
      setQuoteBreakdown,
      quoteSelection,
      setQuoteSelection,
      handleQuoteCalculated,
      handleFreeZoneSelected,
      openBlankModal
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error('useQuote must be used within a QuoteProvider');
  return context;
}

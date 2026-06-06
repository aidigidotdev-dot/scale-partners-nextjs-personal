'use client';

import React from 'react';
import ContactForm from '@/src/components/ContactForm';
import { useQuote } from '@/src/components/QuoteProvider';

export default function ContactPage() {
  const { quoteBreakdown, quoteSelection } = useQuote();

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 animate-fade-in">
      <ContactForm 
        preloadedQuote={quoteBreakdown}
        preloadedSelections={quoteSelection}
      />
    </div>
  );
}

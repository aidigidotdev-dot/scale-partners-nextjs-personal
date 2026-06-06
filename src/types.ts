/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'setup-mainland'
  | 'setup-freezone'
  | 'setup-offshore'
  | 'visa-golden'
  | 'visa-residence'
  | 'visa-pro'
  | 'finance-tax'
  | 'finance-accounting'
  | 'finance-banking'
  | 'calculator'
  | 'contact'
  | 'fz-meydan'
  | 'fz-ifza'
  | 'fz-dmcc'
  | 'fz-shams'
  | 'fz-rakez'
  | 'fz-dwtc'
  | 'lic-commercial'
  | 'lic-trading'
  | 'lic-media'
  | 'lic-industrial'
  | 'lic-holding'
  | 'lic-ecommerce';

export interface SetupActivity {
  id: string;
  name: string;
  category: string;
  baseCost: number;
}

export interface CostBreakdown {
  jurisdictionFee: number;
  activityFee: number;
  visaFee: number;
  officeFee: number;
  adminFee: number;
  total: number;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  notes?: string;
  jurisdiction?: 'mainland' | 'freezone' | 'offshore';
  calculatedQuote?: CostBreakdown;
  selectedActivity?: string;
  visaCount?: number;
  officeType?: string;
  submittedAt: string;
}

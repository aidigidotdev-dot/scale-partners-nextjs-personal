import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['finance-banking'];

export default function FinanceBankingPage() {
  return <RoutePageClient page="finance-banking" />;
}
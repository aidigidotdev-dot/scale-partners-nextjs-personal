import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['finance-tax'];

export default function FinanceTaxPage() {
  return <RoutePageClient page="finance-tax" />;
}
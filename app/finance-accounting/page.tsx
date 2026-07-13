import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['finance-accounting'];

export default function FinanceAccountingPage() {
  return <RoutePageClient page="finance-accounting" />;
}
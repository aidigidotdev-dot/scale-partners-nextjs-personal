import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['calculator'];

export default function CalculatorPage() {
  return <RoutePageClient page="calculator" />;
}
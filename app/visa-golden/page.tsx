import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['visa-golden'];

export default function VisaGoldenPage() {
  return <RoutePageClient page="visa-golden" />;
}
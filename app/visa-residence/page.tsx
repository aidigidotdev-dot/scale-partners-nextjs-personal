import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['visa-residence'];

export default function VisaResidencePage() {
  return <RoutePageClient page="visa-residence" />;
}
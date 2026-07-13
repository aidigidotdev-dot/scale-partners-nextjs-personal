import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['visa-pro'];

export default function VisaProPage() {
  return <RoutePageClient page="visa-pro" />;
}
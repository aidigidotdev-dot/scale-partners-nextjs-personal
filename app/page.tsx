import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['home'];

export default function HomePage() {
  return <RoutePageClient page="home" />;
}
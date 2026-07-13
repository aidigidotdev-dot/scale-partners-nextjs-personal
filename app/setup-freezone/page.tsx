import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['setup-freezone'];

export default function SetupFreezonePage() {
  return <RoutePageClient page="setup-freezone" />;
}
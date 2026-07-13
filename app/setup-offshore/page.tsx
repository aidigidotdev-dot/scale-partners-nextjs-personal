import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['setup-offshore'];

export default function SetupOffshorePage() {
  return <RoutePageClient page="setup-offshore" />;
}
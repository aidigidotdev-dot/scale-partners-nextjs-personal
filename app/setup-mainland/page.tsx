import RoutePageClient from '@/src/components/RoutePageClient';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['setup-mainland'];

export default function SetupMainlandPage() {
  return <RoutePageClient page="setup-mainland" />;
}
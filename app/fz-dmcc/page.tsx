import DmccLandingPage from '@/src/components/DmccLandingPage';
import { routeMetadata } from '@/src/lib/routeMetadata';

export const metadata = routeMetadata['fz-dmcc'];

export default function DmccPage() {
  return <DmccLandingPage />;
}
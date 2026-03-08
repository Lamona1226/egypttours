import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Manage Bookings | Egypt Tourism',
  description: 'Review and update booking requests.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Manage Bookings" subtitle="Review and update booking requests." />
      <p className="text-slate-700">Starter content for the manage bookings page.</p>
    </div>
  );
}

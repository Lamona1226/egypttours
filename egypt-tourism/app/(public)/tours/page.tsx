import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Single Day Trips | Egypt Tourism',
  description: 'Browse all single-day tours.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Single Day Trips" subtitle="Browse all single-day tours." />
      <p className="text-slate-700">Starter content for the single day trips page.</p>
    </div>
  );
}

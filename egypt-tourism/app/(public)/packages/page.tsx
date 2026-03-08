import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Tour Packages | Egypt Tourism',
  description: 'Explore our multi-day packages.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Tour Packages" subtitle="Explore our multi-day packages." />
      <p className="text-slate-700">Starter content for the tour packages page.</p>
    </div>
  );
}

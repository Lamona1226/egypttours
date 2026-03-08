import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Travel Guide | Egypt Tourism',
  description: 'Essential tips for exploring Egypt.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Travel Guide" subtitle="Essential tips for exploring Egypt." />
      <p className="text-slate-700">Starter content for the travel guide page.</p>
    </div>
  );
}

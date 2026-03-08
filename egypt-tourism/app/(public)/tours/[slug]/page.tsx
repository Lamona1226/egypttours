import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Tour Detail | Egypt Tourism',
  description: 'Tour details and availability.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Tour Detail" subtitle="Tour details and availability." />
      <p className="text-slate-700">Starter content for the tour detail page.</p>
    </div>
  );
}

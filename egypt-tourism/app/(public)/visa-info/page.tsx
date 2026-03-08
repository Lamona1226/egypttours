import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Visa Information | Egypt Tourism',
  description: 'Latest Egypt visa guidance.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Visa Information" subtitle="Latest Egypt visa guidance." />
      <p className="text-slate-700">Starter content for the visa information page.</p>
    </div>
  );
}

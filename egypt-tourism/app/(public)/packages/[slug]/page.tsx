import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Package Detail | Egypt Tourism',
  description: 'View package details.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Package Detail" subtitle="View package details." />
      <p className="text-slate-700">Starter content for the package detail page.</p>
    </div>
  );
}

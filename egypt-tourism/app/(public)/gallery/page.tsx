import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Gallery | Egypt Tourism',
  description: 'Explore beautiful moments from Egypt.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Gallery" subtitle="Explore beautiful moments from Egypt." />
      <p className="text-slate-700">Starter content for the gallery page.</p>
    </div>
  );
}

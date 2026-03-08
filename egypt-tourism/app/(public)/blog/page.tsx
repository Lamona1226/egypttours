import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Blog | Egypt Tourism',
  description: 'Travel stories and tips for Egypt.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Blog" subtitle="Travel stories and tips for Egypt." />
      <p className="text-slate-700">Starter content for the blog page.</p>
    </div>
  );
}

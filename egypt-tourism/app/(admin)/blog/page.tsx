import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Manage Blog Posts | Egypt Tourism',
  description: 'Draft and publish articles.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Manage Blog Posts" subtitle="Draft and publish articles." />
      <p className="text-slate-700">Starter content for the manage blog posts page.</p>
    </div>
  );
}

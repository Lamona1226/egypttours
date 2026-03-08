import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Egypt Tourism',
  description: 'Overview of platform metrics.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Admin Dashboard" subtitle="Overview of platform metrics." />
      <p className="text-slate-700">Starter content for the admin dashboard page.</p>
    </div>
  );
}

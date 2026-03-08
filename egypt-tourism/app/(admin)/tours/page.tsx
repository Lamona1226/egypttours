import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Manage Tours | Egypt Tourism',
  description: 'Create and edit tours.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Manage Tours" subtitle="Create and edit tours." />
      <p className="text-slate-700">Starter content for the manage tours page.</p>
    </div>
  );
}

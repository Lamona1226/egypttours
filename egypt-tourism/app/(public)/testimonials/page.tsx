import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Testimonials | Egypt Tourism',
  description: 'What our travelers say.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Testimonials" subtitle="What our travelers say." />
      <p className="text-slate-700">Starter content for the testimonials page.</p>
    </div>
  );
}

import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'About Us | Egypt Tourism',
  description: 'Learn more about our Egypt travel experts.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="About Us" subtitle="Learn more about our Egypt travel experts." />
      <p className="text-slate-700">Starter content for the about us page.</p>
    </div>
  );
}

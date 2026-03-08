import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Contact Us | Egypt Tourism',
  description: 'Get in touch for custom itineraries.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Contact Us" subtitle="Get in touch for custom itineraries." />
      <p className="text-slate-700">Starter content for the contact us page.</p>
    </div>
  );
}

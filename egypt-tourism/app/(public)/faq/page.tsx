import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'FAQ | Egypt Tourism',
  description: 'Common questions before you travel.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="FAQ" subtitle="Common questions before you travel." />
      <p className="text-slate-700">Starter content for the faq page.</p>
    </div>
  );
}

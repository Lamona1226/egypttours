import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';

export const metadata: Metadata = {
  title: 'Blog Post | Egypt Tourism',
  description: 'Read a full blog article.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Blog Post" subtitle="Read a full blog article." />
      <p className="text-slate-700">Starter content for the blog post page.</p>
    </div>
  );
}

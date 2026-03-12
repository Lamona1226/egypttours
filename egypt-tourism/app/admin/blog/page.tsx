import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Manage Blog Posts | Egypt Tour and Adventure',
  description: 'Draft and publish articles.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#134645]">Manage Blog Posts</h1>
      <p className="text-[#53685E]">Draft and publish articles.</p>
    </div>
  );
}

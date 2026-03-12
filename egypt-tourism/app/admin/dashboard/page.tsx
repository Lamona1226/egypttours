import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Egypt Tour and Adventure',
  description: 'Overview of platform metrics.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#134645]">Dashboard</h1>
      <p className="text-[#53685E]">Overview of platform metrics.</p>
    </div>
  );
}

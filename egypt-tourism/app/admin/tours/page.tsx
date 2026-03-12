import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Tours | Egypt Tour and Adventure',
  description: 'Create and edit tours.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#134645]">Manage Tours</h1>
      <p className="text-[#53685E]">Create and edit tours.</p>
    </div>
  );
}

import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Manage Bookings | Egypt Tour and Adventure',
  description: 'Review and update booking requests.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#134645]">Manage Bookings</h1>
      <p className="text-[#53685E]">Review and update booking requests.</p>
    </div>
  );
}

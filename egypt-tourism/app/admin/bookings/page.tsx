import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Bookings | Egypt Tours',
  description: 'Review and update booking requests.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
      <p className="text-gray-600">Review and update booking requests.</p>
    </div>
  );
}

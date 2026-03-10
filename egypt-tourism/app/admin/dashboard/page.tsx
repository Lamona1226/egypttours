import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Egypt Tours',
  description: 'Overview of platform metrics.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-600">Overview of platform metrics.</p>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Blog Posts | Egypt Tours',
  description: 'Draft and publish articles.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Manage Blog Posts</h1>
      <p className="text-gray-600">Draft and publish articles.</p>
    </div>
  );
}

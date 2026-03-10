import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Tours | Egypt Tours',
  description: 'Create and edit tours.',
};

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Manage Tours</h1>
      <p className="text-gray-600">Create and edit tours.</p>
    </div>
  );
}

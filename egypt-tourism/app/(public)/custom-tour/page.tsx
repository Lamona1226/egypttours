import { Metadata } from 'next';
import CustomTourForm from '@/components/custom-tour/CustomTourForm';

export const metadata: Metadata = {
  title: 'Create Your Own Trip | Egypt Tours',
  description: 'Tell us your dream Egypt experience and we will make it happen.',
};

export default function Page() {
  return (
    <div>
      <section className="bg-slate-800 py-16 text-center text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Create Your Own Trip</h1>
          <p className="mt-3 text-lg text-gray-300">
            Tell us your dream Egypt experience and we&apos;ll make it happen
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <CustomTourForm />
      </div>
    </div>
  );
}

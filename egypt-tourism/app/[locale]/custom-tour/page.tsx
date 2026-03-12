import type {Metadata} from 'next';
import PageBanner from '@/components/shared/PageBanner';
import { unstable_setRequestLocale } from 'next-intl/server';
import CustomTourForm from '@/components/custom-tour/CustomTourForm';

export const metadata: Metadata = {
  title: 'Custom Egypt Tour | Egypt Tour and Adventure',
  description:
    'Design a fully custom Egypt itinerary with help from our Egyptologist team — tailored to your dates, interests and budget.',
};

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}): JSX.Element {
  unstable_setRequestLocale(locale);
  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner
          title="Create Your Custom Egypt Tour"
          subtitle="Tell us how you like to travel and we’ll craft a trip that matches your pace, style and bucket-list stops."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-bold text-[#134645]">Tell us about your dream trip</h2>
            <p className="mt-2 text-sm text-[#53685E]">
              Share your preferred dates, destinations, budget and travel style. Our team will build a
              tailored itinerary and send it to you on WhatsApp.
            </p>
            <div className="mt-6">
              <CustomTourForm />
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
            <h3 className="text-lg font-bold text-[#134645]">Why travelers love custom tours</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#53685E]">
              <li>Flexible dates, hotel category and daily pace.</li>
              <li>Choose exactly which cities, temples and experiences to include.</li>
              <li>Perfect for families, honeymoons and small groups.</li>
              <li>Local support from our Cairo-based team before and during your trip.</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}


import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import PageBanner from '@/components/shared/PageBanner';
import Breadcrumb from '@/components/shared/Breadcrumb';
import BookingForm from '@/components/booking/BookingForm';
import type {TourPackage} from '@/types';

const packages: TourPackage[] = [
  {
    id: 'p1',
    slug: 'cairo-luxor-5-days',
    title: 'Cairo & Luxor Explorer – 5 Days',
    description:
      'See the Pyramids, Egyptian Museum, Karnak and Luxor Temple with internal flights and guided visits included.',
    pricePerPerson: 650,
    durationDays: 5,
  },
  {
    id: 'p2',
    slug: 'egypt-explorer-7-days',
    title: 'Egypt Highlights – 7 Days',
    description:
      'A balanced 7-day itinerary combining Cairo, Giza Plateau, Luxor and a Nile evening experience.',
    pricePerPerson: 980,
    durationDays: 7,
  },
  {
    id: 'p3',
    slug: 'nile-cruise-4-days',
    title: 'Classic Nile Cruise – 4 Days',
    description:
      'Sail between Aswan and Luxor with visits to Kom Ombo, Edfu and the West Bank temples.',
    pricePerPerson: 720,
    durationDays: 4,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {title: 'Package not found | Egypt Tour and Adventure'};

  return {
    title: `${pkg.title} | Egypt Tour and Adventure`,
    description: pkg.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<JSX.Element> {
  const {slug} = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner title={pkg.title} subtitle={pkg.description} />
      </section>

      <Breadcrumb
        items={[
          {label: 'Home', href: '/'},
          {label: 'Packages', href: '/packages'},
          {label: pkg.title},
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pt-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#D2C6B8] bg-[#D2C6B8] p-6">
            <h2 className="text-xl font-bold text-[#134645]">Package Overview</h2>
            <p className="mt-3 text-[#134645]">
              {pkg.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#134645]">
              <span className="rounded-full border border-[#96A69E] bg-[#F5F0EC] px-3 py-1">
                From ${pkg.pricePerPerson} per person
              </span>
              <span className="rounded-full border border-[#96A69E] bg-[#F5F0EC] px-3 py-1">
                {pkg.durationDays} days
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
            <h3 className="text-lg font-bold text-[#134645]">What&apos;s included</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-[#53685E]">
              <li>Airport transfers and ground transport as per itinerary.</li>
              <li>Licensed Egyptologist guide for key sightseeing days.</li>
              <li>Entrance fees to main monuments listed in the program.</li>
              <li>Accommodation in carefully selected 3–5★ hotels or cruise ships.</li>
            </ul>
            <p className="mt-3 text-xs text-[#96A69E]">
              Exact inclusions may vary slightly based on your travel dates and preferences. Our team
              will confirm everything before you book.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
            <h3 className="text-lg font-bold text-[#134645]">Looking for a different combination?</h3>
            <p className="mt-2 text-sm text-[#53685E]">
              If you want to adjust hotel category, add extra nights in Cairo or extend your Nile
              time, our team can customize this package for you.
            </p>
            <Link
              href="/custom-tour"
              className="mt-3 inline-flex items-center text-sm font-semibold text-[#108E81] hover:text-[#277971]"
            >
              Design a custom tour instead →
            </Link>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <BookingForm packageTitle={pkg.title} tourPrice={pkg.pricePerPerson} />
        </aside>
      </section>
    </div>
  );
}


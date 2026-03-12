import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import PageBanner from '@/components/shared/PageBanner';
import Breadcrumb from '@/components/shared/Breadcrumb';
import BookingForm from '@/components/booking/BookingForm';
import TourTimeline from '@/components/tours/TourTimeline';
import type {Tour} from '@/types';

const tours: Tour[] = [
  {
    id: '1',
    slug: 'giza-pyramids',
    title: 'Giza Pyramids Tour',
    description:
      'Explore the Great Pyramids, the Sphinx, and the Valley Temple with an expert Egyptologist guide.',
    pricePerPerson: 85,
    durationHours: 8,
    category: 'Historical',
  },
  {
    id: '2',
    slug: 'luxor-east-bank',
    title: 'Luxor East Bank',
    description: 'Visit the magnificent Karnak Temple and Luxor Temple on a guided full-day tour.',
    pricePerPerson: 95,
    durationHours: 7,
    category: 'Historical',
  },
  {
    id: '3',
    slug: 'nile-felucca-sunset',
    title: 'Nile Felucca Sunset',
    description: 'Sail the Nile on a traditional felucca at sunset with tea and light refreshments included.',
    pricePerPerson: 45,
    durationHours: 3,
    category: 'Cultural',
  }
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return {title: 'Tour not found | Egypt Tour and Adventure'};
  return {
    title: `${tour.title} | Egypt Tour and Adventure`,
    description: tour.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<JSX.Element> {
  const {slug} = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const timelineItems =
    tour.slug === 'giza-pyramids'
      ? [
          {time: '08:00 AM', activity: 'Hotel pickup from Cairo'},
          {time: '09:00 AM', activity: 'Arrive at Giza Plateau, meet your Egyptologist guide'},
          {time: '09:30 AM', activity: 'Explore the Great Pyramid of Khufu'},
          {time: '11:00 AM', activity: 'Visit the Great Sphinx and Valley Temple'},
          {time: '12:30 PM', activity: 'Lunch break at local restaurant (not included)'},
          {time: '02:00 PM', activity: 'Egyptian Museum visit (optional add-on)'},
          {time: '04:00 PM', activity: 'Return transfer to Cairo hotel'},
        ]
      : [];

  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner title={tour.title} subtitle={tour.description} />
      </section>

      <Breadcrumb
        items={[
          {label: 'Home', href: '/'},
          {label: 'Tours', href: '/tours'},
          {label: tour.title},
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#D2C6B8] bg-[#D2C6B8] p-6">
            <h2 className="text-xl font-bold text-[#134645]">Tour Overview</h2>
            <p className="mt-3 text-[#134645]">{tour.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#134645]">
              <span className="rounded-full border border-[#96A69E] bg-[#F5F0EC] px-3 py-1">
                From ${tour.pricePerPerson} {`per person`}
              </span>
              <span className="rounded-full border border-[#96A69E] bg-[#F5F0EC] px-3 py-1">
                Duration: {tour.durationHours} hours
              </span>
              {tour.category && (
                <span className="rounded-full border border-[#96A69E] bg-[#F5F0EC] px-3 py-1">
                  Category: {tour.category}
                </span>
              )}
            </div>
          </div>

          {timelineItems.length > 0 && (
            <div className="rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
              <h3 className="text-lg font-bold text-[#134645]">Your Day at a Glance</h3>
              <p className="mt-2 text-sm text-[#53685E]">
                A typical schedule for this tour. Exact timings may vary slightly based on traffic and season.
              </p>
              <div className="mt-4">
                <TourTimeline items={timelineItems} />
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
            <h3 className="text-lg font-bold text-[#134645]">What’s included</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[#53685E]">
              <li>Hotel pickup and drop-off (where available)</li>
              <li>Licensed Egyptologist guide</li>
              <li>Flexible group sizes (private or small group)</li>
              <li>Support via WhatsApp during your trip</li>
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <BookingForm tourTitle={tour.title} tourPrice={tour.pricePerPerson} />
        </aside>
      </div>
    </div>
  );
}


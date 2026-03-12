import type {Metadata} from 'next';
import PageBanner from '@/components/shared/PageBanner';
import { unstable_setRequestLocale } from 'next-intl/server';
import ToursListing from '@/components/tours/ToursListing';
import type {Tour} from '@/types';

export const metadata: Metadata = {
  title: 'Tours | Egypt Tour and Adventure',
  description: 'Browse our handpicked Egypt tours led by certified Egyptologist guides.',
};

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
  },
  {
    id: '4',
    slug: 'white-desert-safari',
    title: 'White Desert Safari',
    description: 'A surreal desert escape with chalk formations, dunes and stargazing — ideal for first-timers.',
    pricePerPerson: 150,
    durationHours: 10,
    category: 'Desert',
  },
  {
    id: '5',
    slug: 'red-sea-snorkeling',
    title: 'Red Sea Snorkeling Trip',
    description: 'Snorkel crystal-clear reefs with vibrant marine life and relax on a boat cruise day.',
    pricePerPerson: 70,
    durationHours: 8,
    category: 'Adventure',
  },
  {
    id: '6',
    slug: 'cairo-food-culture-walk',
    title: 'Cairo Food & Culture Walk',
    description: 'Taste authentic street food with a local guide and learn Cairo’s culture through its flavors.',
    pricePerPerson: 55,
    durationHours: 4,
    category: 'Cultural',
  },
];

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
          title="Our Egypt Tours"
          subtitle="Handcrafted experiences led by certified Egyptologist guides"
        />
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <ToursListing tours={tours} />
      </div>
    </div>
  );
}


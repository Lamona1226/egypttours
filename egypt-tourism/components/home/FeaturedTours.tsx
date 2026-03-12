import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import TourCard from '@/components/tours/TourCard';
import {Tour} from '@/types';

const featured: Tour[] = [
  {
    id: '1',
    slug: 'giza-pyramids',
    title: 'Giza Pyramids Tour',
    description: 'Explore the Great Pyramids, the Sphinx, and the Valley Temple with an expert Egyptologist guide.',
    pricePerPerson: 85,
    durationHours: 8,
  },
  {
    id: '2',
    slug: 'luxor-east-bank',
    title: 'Luxor East Bank',
    description: 'Visit the magnificent Karnak Temple and Luxor Temple on a guided full-day tour.',
    pricePerPerson: 95,
    durationHours: 7,
  },
  {
    id: '3',
    slug: 'nile-felucca-sunset',
    title: 'Nile Felucca Sunset',
    description: 'Sail the Nile on a traditional felucca at sunset with tea and light refreshments included.',
    pricePerPerson: 45,
    durationHours: 3,
  },
];

export default async function FeaturedTours() {
  const t = await getTranslations('tours');

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-[#134645]">
        {t('title')}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[#53685E]">
        {t('subtitle')}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/tours"
          className="inline-block rounded-md px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#277971]"
          style={{ backgroundColor: '#108E81' }}
        >
          View All Tours
        </Link>
      </div>
    </section>
  );
}

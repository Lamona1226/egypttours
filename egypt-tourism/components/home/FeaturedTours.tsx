import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import TourCard from '@/components/tours/TourCard';
import { prisma } from '@/lib/prisma';

export default async function FeaturedTours() {
  const t = await getTranslations('tours');
  const tours = await prisma.tour.findMany({
    where: { isActive: true },
    take: 4,
    orderBy: { createdAt: 'desc' },
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-[#134645]">
        {t('title')}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[#53685E]">
        {t('subtitle')}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
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

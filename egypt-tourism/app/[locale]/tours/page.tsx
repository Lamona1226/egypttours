import { prisma } from '@/lib/prisma';
import type {Metadata} from 'next';
import PageBanner from '@/components/shared/PageBanner';
import { unstable_setRequestLocale } from 'next-intl/server';
import ToursListing from '@/components/tours/ToursListing';

export const metadata: Metadata = {
  title: 'Tours | Egypt Tour and Adventure',
  description: 'Browse our handpicked Egypt tours led by certified Egyptologist guides.',
};

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<JSX.Element> {
  unstable_setRequestLocale(locale);
  const tours = await prisma.tour.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  });
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


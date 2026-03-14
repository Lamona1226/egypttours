import type {Metadata} from 'next';
import PageBanner from '@/components/shared/PageBanner';
import { unstable_setRequestLocale } from 'next-intl/server';
import PackageCard from '@/components/packages/PackageCard';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Egypt Tour Packages | Egypt Tour and Adventure',
  description: 'Multi-day Egypt tour packages combining Cairo, Luxor, Aswan, the Nile and the Red Sea.',
};

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<JSX.Element> {
  unstable_setRequestLocale(locale);
  const packages = await prisma.tourPackage.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner
          title="Egypt Tour Packages"
          subtitle="Handpicked multi-day itineraries designed by our Egyptologist team"
        />
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}


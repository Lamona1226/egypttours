import type {Metadata} from 'next';
import PageBanner from '@/components/shared/PageBanner';
import PackageCard from '@/components/packages/PackageCard';
import type {TourPackage} from '@/types';

export const metadata: Metadata = {
  title: 'Egypt Tour Packages | Egypt Tour and Adventure',
  description: 'Multi-day Egypt tour packages combining Cairo, Luxor, Aswan, the Nile and the Red Sea.',
};

const packages: TourPackage[] = [
  {
    id: 'p1',
    slug: 'cairo-luxor-5-days',
    title: 'Cairo & Luxor Explorer – 5 Days',
    description:
      'See the Pyramids, Egyptian Museum, Karnak and Luxor Temple with flights between Cairo and Luxor included.',
    pricePerPerson: 650,
    durationDays: 5,
  },
  {
    id: 'p2',
    slug: 'egypt-explorer-7-days',
    title: 'Egypt Highlights – 7 Days',
    description:
      'A week-long adventure covering Cairo, Giza Plateau, Luxor and a relaxing Nile evening experience.',
    pricePerPerson: 980,
    durationDays: 7,
  },
  {
    id: 'p3',
    slug: 'nile-cruise-4-days',
    title: 'Classic Nile Cruise – 4 Days',
    description:
      'Sail between Aswan and Luxor with guided visits to Kom Ombo, Edfu and the West Bank monuments.',
    pricePerPerson: 720,
    durationDays: 4,
  },
];

export default function Page(): JSX.Element {
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


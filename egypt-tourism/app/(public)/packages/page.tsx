import { Metadata } from 'next';
import Link from 'next/link';
import { Bed, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Day Tour Packages | Egypt Tours',
  description: 'Immersive Egypt experiences over 3+ days. Explore our curated multi-day tour packages.',
};

interface Package {
  id: string;
  slug: string;
  title: string;
  durationDays: number;
  pricePerPerson: number;
  accommodation: string;
  description: string;
  highlights: string[];
}

const packages: Package[] = [
  {
    id: '1',
    slug: 'cairo-luxor-5-days',
    title: 'Cairo & Luxor Explorer',
    durationDays: 5,
    pricePerPerson: 899,
    accommodation: '4-star hotels included',
    description: 'Experience the best of Cairo and Luxor with guided tours of the Pyramids, Karnak Temple, and Valley of the Kings.',
    highlights: ['Giza Pyramids', 'Egyptian Museum', 'Karnak Temple', 'Valley of the Kings', 'Luxor Temple'],
  },
  {
    id: '2',
    slug: 'egypt-explorer-7-days',
    title: 'Egypt Full Explorer',
    durationDays: 7,
    pricePerPerson: 1299,
    accommodation: '4-star hotels + Nile cruise cabin',
    description: 'The ultimate Egypt experience covering Cairo, a Nile cruise from Luxor to Aswan, and Abu Simbel temple.',
    highlights: ['Pyramids & Sphinx', 'Nile Cruise', 'Valley of the Kings', 'Abu Simbel', 'Aswan High Dam', 'Philae Temple'],
  },
  {
    id: '3',
    slug: 'nile-cruise-4-days',
    title: 'Classic Nile Cruise',
    durationDays: 4,
    pricePerPerson: 699,
    accommodation: '5-star Nile cruise ship',
    description: 'Sail the legendary Nile River on a luxury cruise from Luxor to Aswan visiting ancient temples along the way.',
    highlights: ['Karnak Temple', 'Edfu Temple', 'Kom Ombo Temple', 'Aswan', 'Philae Temple'],
  },
  {
    id: '4',
    slug: 'sinai-red-sea-4-days',
    title: 'Sinai & Red Sea Adventure',
    durationDays: 4,
    pricePerPerson: 599,
    accommodation: 'Beach resort included',
    description: 'Climb Mount Sinai at sunrise, snorkel in the Red Sea, and relax on pristine beaches.',
    highlights: ['Mount Sinai Sunrise', 'St Catherine Monastery', 'Red Sea Snorkeling', 'Dahab Blue Hole', 'Beach Day'],
  },
];

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative flex h-52 items-center justify-center bg-amber-100 text-amber-400">
        Package Image
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: '#C9A84C' }}
        >
          {pkg.durationDays} Days / {pkg.durationDays - 1} Nights
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
          <Bed className="h-4 w-4" />
          {pkg.accommodation}
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-gray-600">{pkg.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {pkg.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Tag className="h-3 w-3" />
              From
            </span>
            <p className="text-lg font-bold text-gray-900">${pkg.pricePerPerson}
              <span className="text-sm font-normal text-gray-500"> / person</span>
            </p>
          </div>

          <Link
            href={`/packages/${pkg.slug}`}
            className="rounded-md px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C9A84C' }}
          >
            View Package
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <section className="bg-slate-800 py-16 text-center text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Multi-Day Tour Packages</h1>
          <p className="mt-3 text-lg text-gray-300">
            Immersive Egypt experiences over 3+ days
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}

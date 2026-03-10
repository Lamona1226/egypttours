import { Metadata } from 'next';
import ToursListing from '@/components/tours/ToursListing';
import { Tour } from '@/types';

export const metadata: Metadata = {
  title: 'Single Day Tours | Egypt Tours',
  description: "Explore Egypt's wonders in a day with our expert-guided single day tours.",
};

const tours: Tour[] = [
  {
    id: '1',
    slug: 'giza-pyramids',
    title: 'Giza Pyramids & Sphinx Tour',
    category: 'Historical',
    durationHours: 8,
    pricePerPerson: 85,
    description: 'Visit the Great Pyramids, the Sphinx, and the Valley Temple with an expert Egyptologist guide.',
    images: ['/images/tours/giza.jpg'],
  },
  {
    id: '2',
    slug: 'luxor-valley-of-kings',
    title: 'Valley of the Kings Explorer',
    category: 'Historical',
    durationHours: 10,
    pricePerPerson: 120,
    description: "Descend into ancient royal tombs and explore the magnificent temples of Luxor's west bank.",
    images: ['/images/tours/luxor.jpg'],
  },
  {
    id: '3',
    slug: 'desert-safari-adventure',
    title: 'White Desert Safari',
    category: 'Desert',
    durationHours: 12,
    pricePerPerson: 150,
    description: 'Journey into the surreal White Desert with its chalk-white rock formations and overnight camping.',
    images: ['/images/tours/desert.jpg'],
  },
  {
    id: '4',
    slug: 'cairo-food-culture-walk',
    title: 'Cairo Food & Culture Walk',
    category: 'Cultural',
    durationHours: 5,
    pricePerPerson: 55,
    description: 'Taste authentic Egyptian street food and explore the vibrant bazaars of Old Cairo.',
    images: ['/images/tours/cairo-food.jpg'],
  },
  {
    id: '5',
    slug: 'red-sea-snorkeling',
    title: 'Red Sea Snorkeling Trip',
    category: 'Adventure',
    durationHours: 7,
    pricePerPerson: 75,
    description: 'Dive into crystal-clear waters and discover colorful coral reefs and tropical marine life.',
    images: ['/images/tours/red-sea.jpg'],
  },
  {
    id: '6',
    slug: 'siwa-oasis-expedition',
    title: 'Siwa Oasis Expedition',
    category: 'Adventure',
    durationHours: 14,
    pricePerPerson: 180,
    description: 'Explore the remote Siwa Oasis with its salt lakes, ancient oracle temple, and Berber culture.',
    images: ['/images/tours/siwa.jpg'],
  },
];

export default function Page() {
  return (
    <div>
      {/* Page Banner */}
      <section className="bg-slate-800 py-16 text-center text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Single Day Tours</h1>
          <p className="mt-3 text-lg text-gray-300">
            Explore Egypt&apos;s wonders in a day
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <ToursListing tours={tours} />
      </div>
    </div>
  );
}

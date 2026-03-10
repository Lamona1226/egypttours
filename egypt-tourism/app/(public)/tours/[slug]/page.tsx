import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, Tag, CheckCircle, XCircle, MapPin } from 'lucide-react';
import BookingForm from '@/components/booking/BookingForm';

interface TourDetail {
  slug: string;
  title: string;
  category: string;
  durationHours: number;
  pricePerPerson: number;
  description: string;
  included: string[];
  excluded: string[];
  meetingPoint: string;
}

const tours: TourDetail[] = [
  {
    slug: 'giza-pyramids',
    title: 'Giza Pyramids & Sphinx Tour',
    category: 'Historical',
    durationHours: 8,
    pricePerPerson: 85,
    description:
      'Embark on an unforgettable journey to the last remaining wonder of the ancient world. Your expert Egyptologist guide will lead you through the Great Pyramids of Giza, the mysterious Sphinx, and the ancient Valley Temple. Learn the fascinating history behind these 4,500-year-old monuments while enjoying stunning photo opportunities at every turn.',
    included: [
      'Hotel pickup & drop-off',
      'Expert Egyptologist guide',
      'Entry tickets to all sites',
      'Bottled water',
      'Air-conditioned vehicle',
    ],
    excluded: [
      'Personal expenses & tips',
      'Camel ride (available on-site)',
      'Lunch',
    ],
    meetingPoint: 'Your hotel lobby in Cairo or Giza — pickup between 7:00–8:00 AM',
  },
  {
    slug: 'luxor-valley-of-kings',
    title: 'Valley of the Kings Explorer',
    category: 'Historical',
    durationHours: 10,
    pricePerPerson: 120,
    description:
      'Descend into the ancient royal tombs of Egypt\'s most powerful pharaohs on Luxor\'s west bank. Visit the Valley of the Kings, the Temple of Hatshepsut, and the Colossi of Memnon with a knowledgeable local guide who brings thousands of years of history to life.',
    included: [
      'Hotel pickup & drop-off in Luxor',
      'Licensed Egyptologist guide',
      'Entry tickets to 3 tombs',
      'Bottled water & snacks',
      'Air-conditioned minibus',
    ],
    excluded: [
      'Photography tickets inside tombs',
      'Personal expenses & tips',
      'Lunch',
    ],
    meetingPoint: 'Your hotel lobby in Luxor — pickup at 6:30 AM',
  },
  {
    slug: 'desert-safari-adventure',
    title: 'White Desert Safari',
    category: 'Desert',
    durationHours: 12,
    pricePerPerson: 150,
    description:
      'Journey deep into Egypt\'s Western Desert to witness the surreal chalk-white rock formations of the White Desert. This full-day adventure takes you through the Black Desert, Crystal Mountain, and into the heart of one of nature\'s most extraordinary landscapes.',
    included: [
      'Cairo pickup & drop-off',
      'Desert guide & 4x4 vehicle',
      'Lunch & refreshments',
      'Sand-boarding equipment',
      'All park entry fees',
    ],
    excluded: [
      'Personal expenses & tips',
      'Travel insurance',
      'Overnight camping gear (optional add-on)',
    ],
    meetingPoint: 'Cairo hotel lobby — departure at 5:00 AM',
  },
  {
    slug: 'cairo-food-culture-walk',
    title: 'Cairo Food & Culture Walk',
    category: 'Cultural',
    durationHours: 5,
    pricePerPerson: 55,
    description:
      'Taste your way through Old Cairo on this immersive food and culture walking tour. Sample authentic Egyptian street food — from koshari and ful medames to fresh-baked feteer — while exploring vibrant souks, historic mosques, and hidden alleyways with a passionate local guide.',
    included: [
      'Local food guide',
      'All food tastings (8+ dishes)',
      'Bottled water',
      'Mosque entry where applicable',
    ],
    excluded: [
      'Hotel transfer (meeting point only)',
      'Personal purchases at souks',
      'Tips for the guide',
    ],
    meetingPoint: 'Khan El-Khalili Gate, Al-Muizz Street — 10:00 AM',
  },
  {
    slug: 'red-sea-snorkeling',
    title: 'Red Sea Snorkeling Trip',
    category: 'Adventure',
    durationHours: 7,
    pricePerPerson: 75,
    description:
      'Dive into the crystal-clear waters of the Red Sea and discover vibrant coral reefs teeming with tropical marine life. This boat trip visits two of the best snorkeling spots near Hurghada, perfect for beginners and experienced snorkelers alike.',
    included: [
      'Hotel pickup & drop-off in Hurghada',
      'Boat trip with crew',
      'Snorkeling equipment',
      'Buffet lunch on board',
      'Soft drinks & water',
    ],
    excluded: [
      'Underwater camera rental',
      'Personal expenses & tips',
      'Travel insurance',
    ],
    meetingPoint: 'Your hotel lobby in Hurghada — pickup at 8:00 AM',
  },
  {
    slug: 'siwa-oasis-expedition',
    title: 'Siwa Oasis Expedition',
    category: 'Adventure',
    durationHours: 14,
    pricePerPerson: 180,
    description:
      'Explore the remote Siwa Oasis, a breathtaking paradise tucked away in Egypt\'s Western Desert. Visit the Oracle Temple of Amun, swim in Cleopatra\'s Spring, watch the sunset over the Great Sand Sea, and experience the unique Berber culture of this magical oasis town.',
    included: [
      'Transport from Cairo or Alexandria',
      'English-speaking guide',
      'Entry to all sites',
      'Lunch & refreshments',
      '4x4 desert excursion',
    ],
    excluded: [
      'Personal expenses & tips',
      'Overnight accommodation',
      'Travel insurance',
    ],
    meetingPoint: 'Cairo hotel lobby — departure at 4:00 AM (or Alexandria at 6:00 AM)',
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return { title: 'Tour Not Found | Egypt Tours' };
  }

  return {
    title: `${tour.title} | Egypt Tours`,
    description: tour.description.slice(0, 160),
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) notFound();

  return (
    <div>
      {/* Hero image placeholder */}
      <div className="flex h-64 w-full items-center justify-center bg-amber-100 text-lg text-amber-400">
        Tour Image — {tour.title}
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-10 lg:col-span-2">
          {/* Title & meta */}
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: '#C9A84C' }}
            >
              {tour.category}
            </span>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              {tour.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {tour.durationHours} hours
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                From ${tour.pricePerPerson} / person
              </span>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">About This Tour</h2>
            <p className="mt-3 leading-relaxed text-gray-600">{tour.description}</p>
          </div>

          {/* Included */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">What&apos;s Included</h2>
            <ul className="mt-3 space-y-2">
              {tour.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">What&apos;s Excluded</h2>
            <ul className="mt-3 space-y-2">
              {tour.excluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Meeting Point */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Meeting Point</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
              {tour.meetingPoint}
            </p>
          </div>
        </div>

        {/* Right column — sticky booking card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
              <p className="text-sm text-gray-500">From</p>
              <p className="text-3xl font-bold text-gray-900">
                ${tour.pricePerPerson}
              </p>
              <p className="text-sm text-gray-500">per person</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

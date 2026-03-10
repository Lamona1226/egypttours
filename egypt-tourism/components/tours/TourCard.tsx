import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';
import { Tour } from '@/types';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative flex h-48 items-center justify-center bg-amber-100 text-sm text-amber-400">
        Tour Image
        {tour.category && (
          <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#C9A84C' }}>
            {tour.category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{tour.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">{tour.description}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {tour.durationHours}h
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            From ${tour.pricePerPerson}
          </span>
        </div>

        <Link
          href={`/tours/${tour.slug}`}
          className="mt-5 inline-block rounded-md px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#C9A84C' }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

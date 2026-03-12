import TourCard from './TourCard';
import TourCardSkeleton from '@/components/shared/TourCardSkeleton';
import { Tour } from '@/types';

interface TourGridProps {
  tours: Tour[];
  loading?: boolean;
}

export default function TourGrid({ tours, loading }: TourGridProps) {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <TourCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <p className="py-12 text-center text-[#134645]">
        No tours found for this category.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

import TourCard from './TourCard';
import { Tour } from '@/types';

interface TourGridProps {
  tours: Tour[];
}

export default function TourGrid({ tours }: TourGridProps) {
  if (tours.length === 0) {
    return (
      <p className="py-12 text-center text-gray-400">
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

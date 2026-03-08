import TourGrid from '@/components/tours/TourGrid';
import { Tour } from '@/types';

interface FeaturedToursProps {
  tours: Tour[];
}

export default function FeaturedTours({ tours }: FeaturedToursProps): JSX.Element {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Featured Tours</h2>
      <TourGrid tours={tours} />
    </section>
  );
}

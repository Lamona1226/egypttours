import TourCard from './TourCard';
import { Tour } from '@/types';

interface TourGridProps {
  tours: Tour[];
}

export default function TourGrid({ tours }: TourGridProps): JSX.Element {
  return <div className="grid gap-4 md:grid-cols-3">{tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}</div>;
}

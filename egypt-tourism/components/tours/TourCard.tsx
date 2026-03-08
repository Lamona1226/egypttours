import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Tour } from '@/types';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps): JSX.Element {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{tour.title}</h3>
      <p className="text-sm text-slate-600">{tour.description}</p>
      <p className="mt-2 text-sm">{tour.durationHours} hours · ${tour.pricePerPerson}</p>
      <Link href={`/tours/${tour.slug}`} className="mt-3 inline-block text-brand">View details</Link>
    </Card>
  );
}

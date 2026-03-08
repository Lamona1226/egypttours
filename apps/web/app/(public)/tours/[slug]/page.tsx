import { BookingForm } from '@/components/booking/booking-form';

interface TourPageProps {
  params: {
    slug: string;
  };
}

export default function TourDetailsPage({ params }: TourPageProps) {
  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <header>
        <h1 className="text-3xl font-bold">Tour: {params.slug}</h1>
        <p className="mt-2 text-slate-600">Tour details page scaffold.</p>
      </header>

      <BookingForm tourSlug={params.slug} />
    </article>
  );
}

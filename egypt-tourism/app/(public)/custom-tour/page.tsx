import { Metadata } from 'next';
import PageBanner from '@/components/shared/PageBanner';
import BookingForm from '@/components/booking/BookingForm';

export const metadata: Metadata = {
  title: 'Custom Tour | Egypt Tourism',
  description: 'Create a custom private itinerary in Egypt.'
};

export default function Page(): JSX.Element {
  return (
    <div className="space-y-6">
      <PageBanner title="Custom Tour" subtitle="Tell us your preferences and we will craft a perfect itinerary." />
      <BookingForm />
    </div>
  );
}

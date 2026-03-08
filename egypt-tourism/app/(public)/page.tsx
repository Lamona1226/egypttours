import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';

export const metadata: Metadata = {
  title: 'Home | Egypt Tourism',
  description: 'Explore Egypt tours, packages, and authentic travel experiences.'
};

const featured = [
  { id: '1', slug: 'giza-pyramids', title: 'Giza Pyramids Tour', description: 'Explore the pyramids and Sphinx.', pricePerPerson: 85, durationHours: 8 },
  { id: '2', slug: 'luxor-east-bank', title: 'Luxor East Bank', description: 'Visit Karnak and Luxor Temple.', pricePerPerson: 95, durationHours: 7 }
];

export default function Page(): JSX.Element {
  return (
    <div className="space-y-10">
      <HeroSection />
      <FeaturedTours tours={featured} />
      <WhyChooseUs />
      <TestimonialsPreview />
    </div>
  );
}

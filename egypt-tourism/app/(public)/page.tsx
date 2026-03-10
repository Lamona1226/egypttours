import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';

export const metadata: Metadata = {
  title: 'Home | Egypt Tours',
  description: 'Expert-guided tours from Cairo to Aswan. Pay only when you arrive in Egypt.',
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedTours />
      <WhyChooseUs />
      <TestimonialsPreview />
    </>
  );
}

import type {Metadata} from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import {Car, Hotel, UserCheck, Ship} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | Egypt Tour and Adventure',
  description:
    'Expert-guided tours from Cairo to Aswan. Pay only when you arrive in Egypt.',
};

export default function Page(): JSX.Element {
  return (
    <>
      <HeroSection />
      <TrustBar />

      {/* Services strip */}
      <section className="bg-[#F5F0EC] border-y border-[#D2C6B8] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Car,
                title: 'Airport Transfers',
                price: 'From $15',
              },
              {
                icon: Hotel,
                title: 'Hotel Booking',
                price: 'From $20',
              },
              {
                icon: UserCheck,
                title: 'Private Guide',
                price: 'From $45',
              },
              {
                icon: Ship,
                title: 'Nile Cruises',
                price: 'From $299',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-[#D2C6B8] p-5 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-full bg-[#EAF4F3] flex items-center justify-center mb-1">
                    <Icon className="h-5 w-5 text-[#108E81]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#134645]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-[#108E81]">
                    {item.price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#108E81] hover:text-[#134645]"
            >
              <span>View All Services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedTours />
      <WhyChooseUs />
      <TestimonialsPreview />
    </>
  );
}


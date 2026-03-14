import { prisma } from '@/lib/prisma';
import PageBanner from '@/components/shared/PageBanner';
import { Star, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traveler Reviews | Egypt Tour and Adventure',
  description: 'Read genuine reviews from travelers who explored Egypt with us.',
};

const FLAGS: Record<string, string> = {
  'United Kingdom':'🇬🇧','Germany':'🇩🇪','France':'🇫🇷',
  'United States':'🇺🇸','Italy':'🇮🇹','Russia':'🇷🇺',
  'Saudi Arabia':'🇸🇦','Poland':'🇵🇱','China':'🇨🇳',
  'Australia':'🇦🇺','Canada':'🇨🇦','Netherlands':'🇳🇱',
};

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    where: { approved: true },
    orderBy: { createdAt: 'desc' },
  });

  const wa  = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''}`;
  const avg = testimonials.length
    ? (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)
    : '4.9';

  return (
    <div className="bg-[#F5F0EC] min-h-screen">
      <PageBanner
        title="What Our Travelers Say"
        subtitle="Genuine reviews from verified international travelers"
      />

      {/* Overall rating banner */}
      <section className="bg-[#134645] py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl font-bold text-[#BBA27E]">{avg}</div>          <div className="flex justify-center gap-1 my-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#BBA27E] text-[#BBA27E]" />
            ))}
          </div>
          <p className="text-[#D2C6B8]">
            Based on {testimonials.length} verified reviews
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-[#D2C6B8] p-6 shadow-sm
                         hover:shadow-md hover:border-[#108E81]/40 transition-all"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#BBA27E] text-[#BBA27E]" />
                ))}
              </div>
              <p className="text-[#53685E] text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-[#D2C6B8] pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#108E81] flex items-center
                               justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.authorName.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#134645] text-sm">{t.authorName}</p>
                  <p className="text-xs text-[#96A69E]">
                    {FLAGS[t.country] ?? '🌍'} {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-[#134645] rounded-2xl p-10">
          <p className="text-white font-bold text-2xl mb-2">Share Your Experience</p>
          <p className="text-[#D2C6B8] mb-6">
            Did you travel with us? We would love to hear your story.
          </p>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white
                       font-bold px-8 py-3 rounded-xl hover:bg-[#20B85A] transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Send Us Your Review on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
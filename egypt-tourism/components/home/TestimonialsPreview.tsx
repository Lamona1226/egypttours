import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'United Kingdom',
    rating: 5,
    text: 'An absolutely magical experience! Our guide knew every hidden corner of Luxor. The pay-on-arrival policy made booking stress-free.',
  },
  {
    name: 'James Cooper',
    country: 'United States',
    rating: 5,
    text: 'The Giza Pyramids tour exceeded all expectations. Small group, knowledgeable guide, and incredible photo opportunities.',
  },
  {
    name: 'Laura Bianchi',
    country: 'Italy',
    rating: 5,
    text: 'From the Nile cruise to the Valley of the Kings, every detail was perfectly planned. I felt safe and welcomed the entire trip.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#BBA27E] text-[#BBA27E]" />
      ))}
    </div>
  );
}

export default function TestimonialsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-[#134645]">What Travelers Say</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[#53685E]">
        Real reviews from real adventurers
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-[#96A69E] bg-[#BBA27E] p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <Stars count={t.rating} />
            <p className="mt-4 text-sm leading-relaxed text-[#134645]">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-5 border-t pt-4">
              <p className="text-sm font-semibold text-[#134645]">{t.name}</p>
              <p className="text-xs text-[#134645]">{t.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

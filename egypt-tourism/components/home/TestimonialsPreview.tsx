import { Star } from 'lucide-react';
import { prisma } from '@/lib/prisma';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#BBA27E] text-[#BBA27E]" />
      ))}
    </div>
  );
}

export default async function TestimonialsPreview() {
  const testimonials = await prisma.testimonial.findMany({
    where: { approved: true },
    take: 3,
  });
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-[#134645]">What Travelers Say</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[#53685E]">
        Real reviews from real adventurers
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-xl border border-[#96A69E] bg-[#BBA27E] p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <Stars count={t.rating} />
            <p className="mt-4 text-sm leading-relaxed text-[#134645]">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-5 border-t pt-4">
              <p className="text-sm font-semibold text-[#134645]">{t.authorName}</p>
              <p className="text-xs text-[#134645]">{t.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

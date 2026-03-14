'use client';
import { useState } from 'react';
import { ChevronDown, MessageCircle, Search } from 'lucide-react';
import PageBanner from '@/components/shared/PageBanner';

const FAQS = [
  { cat: 'booking',  q: 'How do I book a tour?', a: 'Fill out our booking form on any tour page, or send us a WhatsApp message. We confirm your booking within 24 hours and send all details before your arrival in Egypt.' },
  { cat: 'payments', q: 'Do I pay online or in Egypt?', a: 'All payments are made in cash upon arrival in Egypt. We require no upfront online payment — zero financial risk for you.' },
  { cat: 'tours',    q: 'Are the guides certified Egyptologists?', a: 'Yes. Every guide holds an official Egyptology certification from an accredited Egyptian university and has a minimum of 8 years field experience.' },
  { cat: 'tours',    q: 'What is the best time of year to visit Egypt?', a: 'October to April is ideal — cooler temperatures and lower humidity. December and January are the most popular months. Summer is hot but less crowded and more affordable.' },
  { cat: 'visa',     q: 'Do I need a visa to visit Egypt?', a: 'Most nationalities o' },
  { cat: 'safety',   q: 'Is Egypt safe for tourists?', a: "Egypt's major tourist destinations — Cairo, Luxor, Aswan, and the Red Sea — are very safe and heavily patrolled. Our guides are first-aid trained and carry emergency contacts at all times." },
  { cat: 'tours',    q: 'What is the maximum group size?', a: 'Maximum 12 people per tour. Private tours for individuals, couples, and families are also available at a small supplement.' },
  { cat: 'packing',  q: 'What should I wear at temples?', a: 'Modest lightweight clothing — covered shoulders and knees. Comfortable walking shoes are essential. We send a full packing guide after booking.' },
];

const CATS = ['all','booking','tours','payments','visa','safety','packing'];
const LABELS: Record<string,string> = {
  all:'All Questions', booking:'Booking', tours:'Tours',
  payments:'Payments', visa:'Visa & Entry', safety:'Safety', packing:'Packing',
};

export default function FaqPage() {
  const [open, setOpen]     = useState<number | null>(null);
  const [cat, setCat]       = useState('all');
  const [search, setSearch] = useState('');

  const filtered = FAQS.filter(f =>
    (cat === 'all' || f.cat === cat) &&
    (search === '' ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase()))
  );

  const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''}`;

  return (
    <div className="bg-[#F5F0EC] min-h-screen">
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your Egypt adventure"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute start-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#96A69E]" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full ps-12 pe-4 py-3 rounded-xl border border-[#D2C6B8]
                       bg-white text-[#134645] placeholder-[#96A69E]
                       focus:outline-none focus:border-[#108E81] transition-colors"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-all',
                cat === c
                  ? 'bg-[#108E81] text-white border-[#108E81]'
                  : 'bg-white text-[#53685E] border-[#D2C6B8] hover:border-[#108E81] hover:text-[#108E81]',
              ].join(' ')}
            >
              {LABELS[c]}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-center text-[#96A69E] py-12">No questions found.</p>
          )}
          {filtered.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#D2C6B8] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-start
                           text-[#134645] font-semibold hover:text-[#108E81] transition-colors"
              >
                <span className="border-s-4 border-[#108E81] ps-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 ms-4 transition-transform
                    ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 ps-9 text-[#53685E] text-sm leading-relaxed
                                border-t border-[#D2C6B8] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#134645] rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">Still have questions?</p>
          <p className="text-[#D2C6B8] mb-6">Our team is available 24/7 on WhatsApp</p>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white
                       font-bold px-8 py-3 rounded-xl hover:bg-[#20B85A] transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
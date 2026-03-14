import PageBanner from '@/components/shared/PageBanner';
import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, Globe, Zap, Clock, Star, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egypt Travel Guide | Egypt Tour and Adventure',
  description: 'Complete Egypt travel guide — regions, practical tips, best time to visit.',
};

const REGIONS = [
  {
    name: 'Cairo & Giza',
    img: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=800',
    desc: "Egypt's bustling capital and home to the Great Pyramids, the Sphinx, the Egyptian Museum, and the vibrant Khan El Khalili bazaar.",
    highlights: ['Great Pyramid of Giza','The Sphinx','Egyptian Museum','Khan El Khalili','Islamic Cairo'],
  },
  {
    name: 'Luxor',
    img: 'https://images.unsplash.com/photo-1562679299-1f8dea4edc60?w=800',
    desc: "The world's greatest open-air museum — home to Karnak Temple, the Valley of the Kings, and Luxor Temple.",
    highlights: ['Karnak Temple','Valley of the Kings','Luxor Temple','Hatshepsut Temple','Colossi of Memnon'],
  },
  {
    name: 'Aswan',
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    desc: "Egypt's southernmost Nile city. Visit the High Dam, Philae Temple, and sail at sunset on a traditional felucca.",
    highlights: ['High Dam','Philae Temple','Unfinished Obelisk','Felucca Ride','Abu Simbel (day trip)'],
  },
  {
    name: 'Red Sea Riviera',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    desc: 'World-class snorkeling and diving in Hurghada and Sharm El-Sheikh. Coral reefs and warm clear water year-round.',
    highlights: ['Coral reef snorkeling','PADI diving','Beach resorts','Boat trips','Water sports'],
  },
  {
    name: 'Western Desert',
    img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
    desc: 'The White Desert, Black Desert, and Siwa Oasis — some of the most surreal landscapes on Earth.',
    highlights: ['White Desert','Black Desert','Siwa Oasis','Crystal Mountain','Stargazing camps'],
  },
];

const PRACTICAL = [
  { Icon: DollarSign, label: 'Currency',     value: 'Egyptian Pound (EGP). USD and EUR widely accepted at tourist sites.' },
  { Icon: Globe,      label: 'Language',     value: 'Arabic is official. English is widely spoken in tourist areas.' },
  { Icon: Star,       label: 'Religion',     value: 'Predominantly Muslim. Cover shoulders and knees at religious sites.' },
  { Icon: Zap,        label: 'Electricity',  value: '220V / 50Hz. European round pin plugs (Type C/F).' },
  { Icon: Clock,      label: 'Time Zone',    value: 'UTC+2 (Cairo Time). No daylight saving time.' },
  { Icon: MapPin,     label: 'Tipping',      value: 'Tipping (baksheesh) is customary. Budget 10–15 EGP for small services.' },
];

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function TravelGuidePage() {
  return (
    <div className="bg-[#F5F0EC] min-h-screen">
      <PageBanner
        title="Egypt Travel Guide"
        subtitle="Everything you need to know before your first visit to Egypt"
      />

      {/* Regions */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#134645] text-center mb-8">Regions of Egypt</h2>
        <div className="space-y-8">
          {REGIONS.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                          gap-6 bg-white rounded-2xl border border-[#D2C6B8] overflow-hidden shadow-sm`}
            >
              <div className="relative md:w-2/5 h-56 md:h-auto flex-shrink-0">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#134645] mb-2">{r.name}</h3>
                <p className="text-[#53685E] text-sm leading-relaxed mb-4">{r.desc}</p>
                <p className="text-xs font-bold text-[#134645] uppercase tracking-wider mb-2">
                  Highlights
                </p>
                <ul className="flex flex-wrap gap-2">
                  {r.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-xs bg-[#EAF4F3] text-[#108E81] px-3 py-1 rounded-full font-medium"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical info */}
      <section className="bg-[#134645] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Practical Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRACTICAL.map(({ Icon, label, value }, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#BBA27E] flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#134645]" />
                  </div>
                  <p className="text-[#BBA27E] font-bold text-sm">{label}</p>
                </div>
                <p className="text-[#D2C6B8] text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>        </div>
      </section>

      {/* Best time to visit */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#134645] text-center mb-6">Best Time to Visit</h2>
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
          {MONTHS.map((m, i) => {
            const peak     = i >= 9 || i <= 2;
            const shoulder = i === 3 || i === 8;
            return (
              <div
                key={m}
                className={[
                  'rounded-lg p-2 text-center text-xs font-medium',
                  peak     ? 'bg-[#108E81] text-white'   :
                  shoulder ? 'bg-[#BBA27E] text-[#134645]' :
                             'bg-[#D2C6B8] text-[#53685E]',
                ].join(' ')}
              >
                {m}
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-3 justify-center text-xs text-[#53685E]">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#108E81] inline-block" /> Best (Oct–Apr)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#BBA27E] inline-block" /> Good (Apr, Sep)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#D2C6B8] inline-block" /> Hot (May–Aug)
          </span>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-[#108E81] text-white
                       font-bold px-8 py-3 rounded-xl hover:bg-[#134645] transition-colors"
          >
            Browse All Tours →
          </Link>
        </div>
      </section>
    </div>
  );
}
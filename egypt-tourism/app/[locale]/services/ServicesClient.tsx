'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  Car,
  Hotel,
  Building2,
  UserCheck,
  Ship,
  FileText,
  Camera,
  Smartphone,
  DollarSign,
  PawPrint,
  Wind,
  Waves,
  CheckCircle2,
  MessageCircle,
  Star,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import PageBanner from '@/components/shared/PageBanner';

const SERVICES = [
  {
    id: 'transfer',
    icon: Car,
    category: 'transfers',
    price: '$15',
    priceUnit: 'per_vehicle',
    badge: 'popular',
    accentColor: '#108E81',
    bgColor: '#EAF4F3',
    includes: 6,
  },
  {
    id: 'hotel',
    icon: Hotel,
    category: 'accommodation',
    price: '$20',
    priceUnit: 'per_night',
    badge: 'popular',
    accentColor: '#277971',
    bgColor: '#E5EFEE',
    includes: 6,
  },
  {
    id: 'apartment',
    icon: Building2,
    category: 'accommodation',
    price: '$35',
    priceUnit: 'per_night',
    badge: null,
    accentColor: '#53685E',
    bgColor: '#ECF0EE',
    includes: 6,
  },
  {
    id: 'guide',
    icon: UserCheck,
    category: 'guides',
    price: '$45',
    priceUnit: 'per_person',
    badge: 'popular',
    accentColor: '#134645',
    bgColor: '#E8EDEC',
    includes: 6,
  },
  {
    id: 'cruise',
    icon: Ship,
    category: 'cruise',
    price: '$299',
    priceUnit: 'per_person',
    badge: 'premium',
    accentColor: '#108E81',
    bgColor: '#EAF4F3',
    includes: 6,
  },
  {
    id: 'visa',
    icon: FileText,
    category: 'visa',
    price: null,
    priceUnit: null,
    badge: 'free',
    accentColor: '#277971',
    bgColor: '#E5EFEE',
    includes: 6,
  },
  {
    id: 'photography',
    icon: Camera,
    category: 'photography',
    price: '$120',
    priceUnit: 'per_trip',
    badge: 'new',
    accentColor: '#BBA27E',
    bgColor: '#F5EEE5',
    includes: 6,
  },
  {
    id: 'sim',
    icon: Smartphone,
    category: 'extras',
    price: '$10',
    priceUnit: 'per_trip',
    badge: null,
    accentColor: '#53685E',
    bgColor: '#ECF0EE',
    includes: 6,
  },
  {
    id: 'currency',
    icon: DollarSign,
    category: 'extras',
    price: null,
    priceUnit: null,
    badge: 'free',
    accentColor: '#134645',
    bgColor: '#E8EDEC',
    includes: 6,
  },
  {
    id: 'camel',
    icon: PawPrint,
    category: 'extras',
    price: '$25',
    priceUnit: 'per_person',
    badge: null,
    accentColor: '#BBA27E',
    bgColor: '#F5EEE5',
    includes: 6,
  },
  {
    id: 'balloon',
    icon: Wind,
    category: 'extras',
    price: '$89',
    priceUnit: 'per_person',
    badge: 'premium',
    accentColor: '#108E81',
    bgColor: '#EAF4F3',
    includes: 6,
  },
  {
    id: 'diving',
    icon: Waves,
    category: 'extras',
    price: '$65',
    priceUnit: 'per_person',
    badge: null,
    accentColor: '#277971',
    bgColor: '#E5EFEE',
    includes: 6,
  },
];

const BADGE_STYLES: Record<
  'popular' | 'new' | 'premium' | 'free',
  { bg: string; text: string }
> = {
  popular: { bg: '#134645', text: '#D2C6B8' },
  new: { bg: '#108E81', text: '#FFFFFF' },
  premium: { bg: '#BBA27E', text: '#134645' },
  free: { bg: '#277971', text: '#FFFFFF' },
};

export default function ServicesClient() {
  const t = useTranslations('services');
  const [activeCategory, setActiveCategory] = useState('all');
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const whatsappNumber = rawNumber.replace(/\D/g, '') || '201XXXXXXXXX';

  const categories = [
    'all',
    'transfers',
    'accommodation',
    'guides',
    'tours',
    'cruise',
    'visa',
    'photography',
    'extras',
  ];

  const filtered =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t('cta_button'),
  )}`;

  return (
    <div className="bg-[#F5F0EC] min-h-screen">
      <PageBanner title={t('page_title')} subtitle={t('page_subtitle')} />

      {/* Intro strip */}
      <section className="bg-[#134645] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t('intro_title')}
          </h2>
          <p className="text-[#D2C6B8] text-lg leading-relaxed max-w-3xl mx-auto">
            {t('intro_body')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            {[
              { number: '2,000+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support' },
              { number: '15+', label: 'Years Experience' },
              { number: '12', label: 'Services Offered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#BBA27E]">
                  {stat.number}
                </div>
                <div className="text-[#96A69E] text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-40 bg-[#F5F0EC] border-b border-[#D2C6B8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div
            className="flex gap-2 overflow-x-auto pb-1
                       [&::-webkit-scrollbar]:hidden
                       [-ms-overflow-style:none]
                       [scrollbar-width:none]"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 border flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#108E81] text-white border-[#108E81] shadow-sm'
                      : 'bg-white text-[#53685E] border-[#D2C6B8] hover:border-[#108E81] hover:text-[#108E81]'
                  }`}
              >
                {t(`categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((service) => {
            const Icon = service.icon;
            const badge = service.badge as
              | 'popular'
              | 'new'
              | 'premium'
              | 'free'
              | null;
            const badgeStyle = badge ? BADGE_STYLES[badge] : null;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#D2C6B8] overflow-hidden
                           shadow-sm hover:shadow-lg hover:border-[#108E81]/40
                           transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative p-6 pb-5"
                  style={{ backgroundColor: service.bgColor }}
                >
                  {badge && badgeStyle && (
                    <span
                      className="absolute top-4 end-4 text-xs font-bold
                                 px-2.5 py-1 rounded-full uppercase tracking-wide"
                      style={{
                        backgroundColor: badgeStyle.bg,
                        color: badgeStyle.text,
                      }}
                    >
                      {t(`badge_${badge}`)}
                    </span>
                  )}

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#134645] leading-snug">
                    {t(`${service.id}.title`)}
                  </h3>
                  <p className="text-[#53685E] text-sm mt-1">
                    {t(`${service.id}.subtitle`)}
                  </p>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#53685E] text-sm leading-relaxed mb-5">
                    {t(`${service.id}.description`)}
                  </p>

                  <div className="mb-5">
                    <p className="text-xs font-bold text-[#134645] uppercase tracking-wider mb-3">
                      {t('included_title')}
                    </p>
                    <ul className="space-y-2">
                      {Array.from({ length: service.includes }, (_, i) => i + 1).map(
                        (n) => (
                          <li
                            key={n}
                            className="flex items-start gap-2 text-sm text-[#53685E]"
                          >
                            <CheckCircle2
                              className="h-4 w-4 flex-shrink-0 mt-0.5"
                              style={{ color: service.accentColor }}
                            />
                            <span>{t(`${service.id}.included_${n}`)}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {['transfer', 'hotel', 'apartment', 'visa', 'photography', 'balloon'].includes(
                    service.id,
                  ) && (
                    <div className="rounded-lg bg-[#F5F0EC] border border-[#D2C6B8] px-4 py-3 mb-5">
                      <p className="text-xs text-[#53685E] italic leading-relaxed">
                        {t(`${service.id}.note`)}
                      </p>
                    </div>
                  )}

                  <div className="flex-1" />

                  <div className="flex items-center justify-between pt-4 border-t border-[#D2C6B8] mt-4">
                    <div>
                      {service.price ? (
                        <>
                          <span className="text-xs text-[#96A69E]">
                            {t('from_price', { price: service.price })}
                          </span>
                          {service.priceUnit && (
                            <span className="text-xs text-[#96A69E] ms-1">
                              {t(service.priceUnit)}
                            </span>
                          )}
                        </>
                      ) : (
                        <span
                          className="text-sm font-bold"
                          style={{ color: service.accentColor }}
                        >
                          {t('contact_price')}
                        </span>
                      )}
                    </div>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello! I am interested in your ${t(
                          `${service.id}.title`,
                        )} service.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl
                                 text-sm font-semibold text-white transition-all duration-200
                                 hover:opacity-90 hover:scale-105 active:scale-95"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t('book_service')}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="h-12 w-12 text-[#D2C6B8] mx-auto mb-4" />
            <p className="text-[#96A69E] text-lg">No services found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA banner */}
      <section className="bg-[#134645] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-[#BBA27E] text-[#BBA27E]"
              />
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-[#D2C6B8] text-lg mb-8 max-w-2xl mx-auto">
            {t('cta_body')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         bg-[#25D366] hover:bg-[#20B85A] text-white
                         font-bold px-8 py-4 rounded-xl transition-all
                         duration-200 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t('cta_button')}
            </a>
            <Link
              href="/custom-tour"
              className="inline-flex items-center justify-center gap-2
                         border-2 border-[#BBA27E] text-[#BBA27E]
                         hover:bg-[#BBA27E] hover:text-[#134645]
                         font-bold px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Sparkles className="h-5 w-5" />
              {t('cta_custom')}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why book with us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Star,
              title: '24/7 Support',
              body: 'We are always available on WhatsApp — day or night, even on Egyptian public holidays.',
            },
            {
              icon: DollarSign,
              title: 'Pay in Egypt',
              body: 'No upfront online payment. Pay cash when you arrive — zero financial risk for you.',
            },
            {
              icon: UserCheck,
              title: 'Certified Experts',
              body: 'All our guides and staff are certified by the Egyptian Ministry of Tourism.',
            },
            {
              icon: Star,
              title: '4.9/5 Rated',
              body: 'Rated 4.9 out of 5 by over 847 verified international travelers on Google.',
            },
          ].map((item) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#D2C6B8] p-6
                           text-center hover:border-[#108E81]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4F3] flex items-center justify-center mx-auto mb-4">
                  <ItemIcon className="h-6 w-6 text-[#108E81]" />
                </div>
                <h3 className="font-bold text-[#134645] mb-2">{item.title}</h3>
                <p className="text-[#53685E] text-sm leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}


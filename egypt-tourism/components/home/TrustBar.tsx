'use client';

import {Star} from 'lucide-react';
import {useTranslations} from 'next-intl';

const stats = [
  {number: '2,000+', labelKey: 'tourists'},
  {number: '500+', labelKey: 'tours'},
  {number: '15+', labelKey: 'experience'},
  {number: '50+', labelKey: 'countries'},
];

export default function TrustBar() {
  const t = useTranslations('trust');

  return (
    <section className="w-full bg-[#134645]">
      {/* Stats Row */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.labelKey}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1
                  ? 'md:border-r md:border-[#BBA27E]/30'
                  : ''
              }`}
            >
              <span className="text-3xl md:text-4xl font-bold text-[#BBA27E]">
                {stat.number}
              </span>
              <span className="mt-1 text-sm text-white">{t(stat.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Summary Strip */}
      <div className="border-t border-[#BBA27E]/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#BBA27E] text-[#BBA27E]"
              />
            ))}
          </div>
          <span className="text-sm text-[#D2C6B8]">
            Rated 4.9/5 from 847 verified reviews
          </span>
        </div>
      </div>
    </section>
  );
}

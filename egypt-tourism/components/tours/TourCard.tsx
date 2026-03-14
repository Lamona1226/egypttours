'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Clock, Tag} from 'lucide-react';
import {Tour} from '@/types';
import {useTranslations} from 'next-intl';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({tour}: TourCardProps) {
  const t = useTranslations('tours');

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group block"
    >
      <article className="cursor-pointer overflow-hidden rounded-xl border border-[#96A69E] bg-[#BBA27E] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#108E81]/20">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={tour.images?.[0] ?? 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=800'}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {tour.category && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{backgroundColor: '#108E81'}}
          >
            {tour.category}
          </span>
        )}

        <div className="p-5">
          <h3 className="text-lg font-bold text-[#134645]">{tour.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-[#134645]">{tour.description}</p>

          <div className="mt-4 flex items-center gap-4 text-sm text-[#134645]">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {tour.durationHours} {t('hours')}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span className="font-bold text-[#108E81]">
                {t('from')} ${tour.pricePerPerson} {t('per_person')}
              </span>
            </span>
          </div>

          <div
            className="mt-5 inline-block rounded-md px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#134645]"
            style={{backgroundColor: '#108E81'}}
          >
          {t('view_details')}
          </div>
        </div>
      </article>
    </Link>
  );
}

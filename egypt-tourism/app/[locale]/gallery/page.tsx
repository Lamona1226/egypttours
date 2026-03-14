'use client';
import { useState } from 'react';
import Image from 'next/image';
import PageBanner from '@/components/shared/PageBanner';
import { X } from 'lucide-react';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0d?w=800', alt: 'Great Pyramid of Giza', category: 'cairo' },
  { src: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800', alt: 'The Sphinx at Giza', category: 'cairo' },
  { src: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800', alt: 'Cairo cityscape', category: 'cairo' },
  { src: 'https://images.unsplash.com/photo-1562679299-1f8dea4edc60?w=800', alt: 'Luxor Temple at night', category: 'luxor' },
  { src: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800', alt: 'Karnak Temple columns', category: 'luxor' },
  { src: 'https://images.unsplash.com/photo-1568750895079-e4b35b7bef78?w=800', alt: 'Abu Simbel temples', category: 'aswan' },
  { src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800', alt: 'Aswan on the Nile', category: 'aswan' },
  { src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800', alt: 'White Desert formations', category: 'desert' },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', alt: 'Sahara Desert dunes', category: 'desert' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', alt: 'Red Sea coral reef', category: 'redsea' },
  { src: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800', alt: 'Felucca on the Nile', category: 'nile' },
  { src: 'https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800', alt: 'Snorkeling Red Sea', category: 'redsea' },
];

const FILTERS = [
  { key: 'all',    label: 'All Photos' },
  { key: 'cairo',  label: 'Cairo & Giza' },
  { key: 'luxor',  label: 'Luxor' },
  { key: 'aswan',  label: 'Aswan' },
  { key: 'desert', label: 'Desert' },
  { key: 'redsea', label: 'Red Sea' },
  { key: 'nile',   label: 'Nile' },
];

export default function GalleryPage() {
  const [active, setActive]   = useState('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'all' ? PHOTOS : PHOTOS.filter(p => p.category === active);

  return (
    <div className="bg-[#F5F0EC] min-h-screen">
      <PageBanner title="Egypt Photo Gallery" subtitle="Explore the beauty of Egypt through our lens" />

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-[#F5F0EC] border-b border-[#D2C6B8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto"
             style={{ scrollbarWidth: 'none' }}>
          {FILTERS.map(f => (
            <button
              key={f.key}              onClick={() => setActive(f.key)}
              className={[
                'whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium',
                'border flex-shrink-0 transition-all duration-200',
                active === f.key
                  ? 'bg-[#108E81] text-white border-[#108E81]'
                  : 'bg-white text-[#53685E] border-[#D2C6B8] hover:border-[#108E81] hover:text-[#108E81]',
              ].join(' ')}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photo.src)}
              className="relative aspect-square overflow-hidden rounded-xl
                         cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#134645]/0 group-hover:bg-[#134645]/30
                              transition-all duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium opacity-0
                                 group-hover:opacity-100 transition-opacity">
                  {photo.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 end-4 text-white bg-white/20 rounded-full p-2
                       hover:bg-white/40 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={lightbox}
              alt="Full size photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}

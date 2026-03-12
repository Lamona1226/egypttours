'use client';

import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const allTours = [
  { slug: 'giza-pyramids', title: 'Giza Pyramids & Sphinx Tour', category: 'Historical' },
  { slug: 'luxor-valley-of-kings', title: 'Valley of the Kings Explorer', category: 'Historical' },
  { slug: 'white-desert-safari', title: 'White Desert Safari', category: 'Desert' },
  { slug: 'cairo-food-culture-walk', title: 'Cairo Food & Culture Walk', category: 'Cultural' },
  { slug: 'red-sea-snorkeling', title: 'Red Sea Snorkeling Trip', category: 'Adventure' },
  { slug: 'siwa-oasis-expedition', title: 'Siwa Oasis Expedition', category: 'Adventure' },
  { slug: 'cairo-luxor-5-days', title: 'Cairo & Luxor Explorer', category: 'Package' },
  { slug: 'egypt-explorer-7-days', title: 'Egypt Full Explorer', category: 'Package' },
  { slug: 'nile-cruise-4-days', title: 'Classic Nile Cruise', category: 'Package' },
  { slug: 'sinai-red-sea-4-days', title: 'Sinai & Red Sea Adventure', category: 'Package' },
];

export function searchTours(query: string) {
  if (query.trim().length === 0) return [];
  return allTours
    .filter(
      (t) =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 5);
}

export function tourPath(slug: string, category: string) {
  return category === 'Package' ? `/packages/${slug}` : `/tours/${slug}`;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = searchTours(query);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false);
      setQuery('');
    }
  }

  function handleSelect(slug: string, category: string) {
    router.push(tourPath(slug, category));
    setOpen(false);
    setQuery('');
  }

  return (
    <div ref={ref} className="relative hidden md:block">
      <div
        className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-200 ${
          focused
            ? 'w-72 border-[#108E81] bg-white shadow-sm'
            : 'w-56 border-transparent bg-gray-100'
        }`}
      >
        <Search className="h-4 w-4 shrink-0 text-[#53685E]" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setFocused(true);
            setOpen(true);
          }}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Search tours..."
          className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-xl border border-[#96A69E] bg-white shadow-xl">
          {results.map((tour) => (
            <button
              key={tour.slug}
              onMouseDown={() => handleSelect(tour.slug, tour.category)}
              className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#F5F0EC]"
            >
              <span className="text-sm font-medium text-[#134645]">
                {tour.title}
              </span>
              <span
                className="ml-2 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: '#108E81' }}
              >
                {tour.category}
              </span>
            </button>
          ))}
        </div>
      )}

      {open && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute right-0 top-12 z-50 w-80 rounded-xl border border-[#96A69E] bg-white px-4 py-4 text-center shadow-xl">
          <p className="text-sm text-gray-400">
            No tours found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}

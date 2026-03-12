'use client';

import {useState, useEffect, Suspense} from 'react';
import {useRouter, useSearchParams, usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';

const categories = [
  {value: 'All', key: 'filter_all'},
  {value: 'Historical', key: 'filter_historical'},
  {value: 'Adventure', key: 'filter_adventure'},
  {value: 'Cultural', key: 'filter_cultural'},
  {value: 'Desert', key: 'filter_desert'},
  {value: 'Beach', key: 'filter_beach'},
  {value: 'Nile Cruise', key: 'filter_nile'},
];

function FilterButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = useTranslations('tours');
  const [active, setActive] = useState('All');

  useEffect(() => {
    setActive(searchParams.get('category') || 'All');
  }, [searchParams]);

  function handleClick(category: string) {
    setActive(category);
    if (category === 'All') {
      router.push(pathname, { scroll: false });
    } else {
      router.push(`${pathname}?category=${category}`, { scroll: false });
    }
    
    // Smooth scroll to the grid
    const target = document.getElementById('tour-grid');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleClick(cat.value)}
          aria-pressed={active === cat.value}
          aria-label={`Filter by ${cat.value} tours`}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            active === cat.value
              ? 'text-white'
              : 'bg-[#F5F0EC] text-[#53685E] hover:bg-[#D2C6B8]'
          }`}
          style={active === cat.value ? {backgroundColor: '#108E81'} : undefined}
        >
          {t(cat.key)}
        </button>
      ))}
    </div>
  );
}

export default function TourFilter() {
  return (
    <Suspense fallback={<div className="h-10 animate-pulse bg-[#F5F0EC] rounded-full" />}>
      <FilterButtons />
    </Suspense>
  );
}
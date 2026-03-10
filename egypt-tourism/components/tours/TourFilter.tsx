'use client';
import { useState } from 'react';

const categories = [
  'All',
  'Historical',
  'Adventure',
  'Cultural',
  'Desert',
  'Beach',
  'Nile Cruise',
];

interface TourFilterProps {
  onFilterChange: (category: string) => void;
}

export default function TourFilter({ onFilterChange }: TourFilterProps) {
  const [active, setActive] = useState('All');

  function handleClick(category: string) {
    setActive(category);
    onFilterChange(category);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            active === cat
              ? 'text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          style={active === cat ? { backgroundColor: '#C9A84C' } : undefined}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
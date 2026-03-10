'use client';

import { useState } from 'react';
import TourFilter from '@/components/tours/TourFilter';
import TourGrid from '@/components/tours/TourGrid';
import { Tour } from '@/types';

interface ToursListingProps {
  tours: Tour[];
}

export default function ToursListing({ tours }: ToursListingProps) {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? tours
      : tours.filter(
          (t) => t.category?.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <div className="space-y-8">
      <TourFilter onFilterChange={setFilter} />
      <TourGrid tours={filtered} />
    </div>
  );
}

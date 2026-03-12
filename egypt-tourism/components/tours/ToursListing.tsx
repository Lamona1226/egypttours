'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TourFilter from '@/components/tours/TourFilter';
import TourGrid from '@/components/tours/TourGrid';
import { Tour } from '@/types';

interface ToursListingProps {
  tours: Tour[];
}

function ToursGridContent({ tours, loading }: { tours: Tour[], loading: boolean }) {
  const searchParams = useSearchParams();
  const filter = searchParams.get('category') || 'All';

  const filtered =
    filter === 'All'
      ? tours
      : tours.filter(
          (t) => t.category?.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <div id="tour-grid">
      <TourGrid tours={filtered} loading={loading} />
    </div>
  );
}

export default function ToursListing({ tours }: ToursListingProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tours && tours.length >= 0) {
      setLoading(false);
    }
  }, [tours]);

  return (
    <div className="space-y-8">
      <TourFilter />
      <Suspense fallback={<div id="tour-grid"><TourGrid tours={tours} loading={true} /></div>}>
        <ToursGridContent tours={tours} loading={loading} />
      </Suspense>
    </div>
  );
}

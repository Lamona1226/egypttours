'use client';

import { Input } from '@/components/ui/input';

interface TourFilterProps {
  onKeywordChange?: (value: string) => void;
}

export default function TourFilter({ onKeywordChange }: TourFilterProps): JSX.Element {
  return (
    <div className="grid gap-3 rounded-md border p-4 md:grid-cols-3">
      <Input placeholder="Category" onChange={(e) => onKeywordChange?.(e.target.value)} />
      <Input placeholder="Duration" />
      <Input placeholder="Max Price" type="number" />
    </div>
  );
}

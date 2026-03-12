import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { TourPackage } from '@/types';

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps): JSX.Element {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{pkg.title}</h3>
      <p className="text-sm text-[#134645]">{pkg.description}</p>
      <p className="mt-2 text-sm">{pkg.durationDays} days · ${pkg.pricePerPerson}</p>
      <Link href={`/packages/${pkg.slug}`} className="text-[#108E81] hover:text-[#277971]">View package</Link>
    </Card>
  );
}

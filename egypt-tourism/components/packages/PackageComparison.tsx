import { TourPackage } from '@/types';

interface PackageComparisonProps {
  packages: TourPackage[];
}

export default function PackageComparison({ packages }: PackageComparisonProps): JSX.Element {
  return (
    <div className="overflow-x-auto rounded-md border">
      <table className="w-full text-sm">
        <thead><tr><th className="p-2 text-left">Package</th><th className="p-2">Days</th><th className="p-2">Price</th></tr></thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id} className="border-t"><td className="p-2">{pkg.title}</td><td className="p-2 text-center">{pkg.durationDays}</td><td className="p-2 text-center">${pkg.pricePerPerson}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

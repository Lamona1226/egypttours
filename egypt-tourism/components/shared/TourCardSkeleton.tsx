export default function TourCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#96A69E] bg-[#BBA27E] shadow-sm">
      {/* Image area */}
      <div className="h-48 w-full animate-pulse rounded-t-xl bg-gray-200" />

      {/* Content area */}
      <div className="p-5">
        {/* Title line */}
        <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-gray-200" />

        {/* Description line 1 */}
        <div className="mb-2 h-3 w-full animate-pulse rounded bg-gray-100" />

        {/* Description line 2 */}
        <div className="mb-4 h-3 w-2/3 animate-pulse rounded bg-gray-100" />

        {/* Bottom row */}
        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />

        {/* Button area */}
        <div className="mt-4 h-9 w-28 animate-pulse rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

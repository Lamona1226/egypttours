import Link from 'next/link';

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps): JSX.Element {
  return (
    <section className="rounded-xl bg-slate-900 p-8 text-white">
      <h1 className="text-4xl font-bold">Discover Timeless Egypt</h1>
      <p className="mt-3 max-w-2xl">Curated day tours and multi-day packages with expert local guides.</p>
      <Link href="/tours" className="mt-6 inline-block rounded-md bg-brand px-5 py-2">Explore Tours</Link>
    </section>
  );
}

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-slate-800">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Discover the Magic of Ancient Egypt
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-200">
          Expert-guided tours from Cairo to Aswan. Pay only when you arrive in Egypt.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/tours"
            className="rounded-md px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C9A84C' }}
          >
            Explore Tours
          </Link>
          <Link
            href="/packages"
            className="rounded-md border-2 px-8 py-3 text-sm font-semibold transition-colors hover:bg-[#C9A84C] hover:text-white"
            style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

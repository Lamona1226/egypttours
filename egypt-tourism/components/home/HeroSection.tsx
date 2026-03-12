'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

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
      <div className="absolute inset-0 bg-[#134645]/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {t('title')}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#D2C6B8]">
          {t('subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/tours"
            className="rounded-md px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#277971]"
            style={{ backgroundColor: '#108E81' }}
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/packages"
            className="rounded-md border-2 px-8 py-3 text-sm font-semibold transition-colors hover:bg-[#BBA27E] hover:text-[#134645]"
            style={{ borderColor: '#BBA27E', color: '#BBA27E' }}
          >
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import {getTranslations} from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('not_found');

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#134645] px-4 text-center">
      <p className="text-9xl font-extrabold text-[#BBA27E]">404</p>

      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{t('title')}</h1>

      <p className="mt-3 max-w-md text-base text-[#D2C6B8]">{t('body')}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[#108E81] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#277971]"
        >
          {t('cta_home')}
        </Link>
        <Link
          href="/tours"
          className="rounded-lg border-2 border-[#BBA27E] px-6 py-3 text-sm font-semibold text-[#BBA27E] transition-colors hover:bg-[#BBA27E] hover:text-[#134645]"
        >
          {t('cta_tours')}
        </Link>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 200"
          className="w-full animate-pulse"
          preserveAspectRatio="none"
          style={{animationDuration: '4s'}}
        >
          <path
            d="M0,160 C240,100 480,180 720,140 C960,100 1200,180 1440,120 L1440,200 L0,200 Z"
            fill="#BBA27E"
            fillOpacity="0.2"
          />
          <path
            d="M0,180 C360,130 720,190 1080,150 C1260,130 1380,170 1440,160 L1440,200 L0,200 Z"
            fill="#BBA27E"
            fillOpacity="0.12"
          />
        </svg>
      </div>
    </div>
  );
}

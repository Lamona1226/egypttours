'use client';

import Link from 'next/link';
import {AlertTriangle} from 'lucide-react';
import {useTranslations} from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const t = useTranslations('error');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#134645] px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-[#BBA27E]" />

      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{t('title')}</h1>

      <p className="mt-3 max-w-md text-base text-[#D2C6B8]">
        {t('body')}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <span className="mt-2 block text-sm opacity-80">{error.message}</span>
        )}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-[#108E81] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#277971]"
        >
          {t('cta_retry')}
        </button>
        <Link
          href="/"
          className="rounded-lg border-2 border-[#BBA27E] px-6 py-3 text-sm font-semibold text-[#BBA27E] transition-colors hover:bg-[#BBA27E] hover:text-[#134645]"
        >
          {t('cta_home')}
        </Link>
      </div>
    </div>
  );
}

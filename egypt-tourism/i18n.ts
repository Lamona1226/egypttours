import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ar', 'de', 'fr', 'it', 'ru', 'zh', 'pl'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is supported
  if (!locales.includes(locale as string)) {
    notFound();
  }

  return {
    locale,
    messages: (
      await import(`./messages/${locale}.json`)
    ).default,
  };
});


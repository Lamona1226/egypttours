import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import('./public/locales/en.json')).default
  };
});

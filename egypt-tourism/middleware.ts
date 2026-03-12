import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'ar', 'de', 'fr', 'it', 'ru', 'zh', 'pl'] as const;

export default createMiddleware({
  locales,
  defaultLocale: 'en',

  // 'as-needed' = English stays at / with no /en prefix
  // All other locales get their prefix: /ar /de /fr etc.
  localePrefix: 'as-needed',

  // IMPORTANT: set to false so visiting / does NOT
  // redirect to /en based on browser language.
  // Without this, English users on / get redirected
  // to /en and then the [locale] folder misses them.
  localeDetection: false,
});

export const config = {
  // Match all paths EXCEPT:
  // - API routes (/api/*)
  // - Next.js internals (/_next/*)
  // - Static files (anything with a file extension)
  // - Admin routes (/admin/*)
  matcher: [
    '/((?!api|_next|_vercel|admin|.*\\..*).*)',
  ],
};


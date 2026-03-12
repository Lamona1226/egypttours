'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {ChevronDown, Globe} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

const LANGUAGES = [
  {code: 'en', label: 'English', flag: '🇬🇧'},
  {code: 'ar', label: 'العربية', flag: '🇸🇦'},
  {code: 'de', label: 'Deutsch', flag: '🇩🇪'},
  {code: 'fr', label: 'Français', flag: '🇫🇷'},
  {code: 'it', label: 'Italiano', flag: '🇮🇹'},
  {code: 'ru', label: 'Русский', flag: '🇷🇺'},
  {code: 'zh', label: '中文', flag: '🇨🇳'},
  {code: 'pl', label: 'Polski', flag: '🇵🇱'},
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Find CURRENT language object using locale CODE not index
  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function switchLocale(newLocale: string) {
    const locales = ['en','ar','de','fr','it','ru','zh','pl'];

    // Get the raw pathname from the browser
    let cleanPath = window.location.pathname;

    // Remove any existing locale prefix from the path
    for (const loc of locales) {
      // Match /ar, /ar/, /ar/something
      if (cleanPath === `/${loc}`) {
        cleanPath = '/';
        break;
      }
      if (cleanPath.startsWith(`/${loc}/`)) {
        cleanPath = cleanPath.slice(loc.length + 1); // remove /xx
        break;
      }
    }

    // Ensure cleanPath always starts with /
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }

    // Build the new path:
    // English = no prefix (just /)
    // Others  = /xx or /xx/path
    let newPath: string;
    if (newLocale === 'en') {
      newPath = cleanPath; // '/' or '/tours' etc — no prefix
    } else {
      newPath = cleanPath === '/'
        ? `/${newLocale}`
        : `/${newLocale}${cleanPath}`;
    }

    router.push(newPath);
    router.refresh();
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-[#96A69E] bg-[#F5F0EC] px-3 py-2 text-sm text-[#134645] transition-all duration-200 hover:border-[#108E81] hover:text-[#108E81]"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-[100] mt-2 w-48 overflow-hidden rounded-xl border border-[#D2C6B8] bg-[#F5F0EC] py-2 shadow-xl">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => switchLocale(lang.code)}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                locale === lang.code
                  ? 'bg-[#D2C6B8]/60 font-semibold text-[#108E81]'
                  : 'text-[#134645] hover:bg-[#D2C6B8] hover:text-[#108E81]'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
              {locale === lang.code && <span className="text-xs font-bold text-[#108E81]">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


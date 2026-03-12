'use client';

import Link from 'next/link';
import {useState, useEffect, useRef} from 'react';
import {Search} from 'lucide-react';
import {useRouter, usePathname} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import Image from 'next/image';
import MobileNav from './MobileNav';
import SearchBar, {searchTours, tourPath} from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';

const rawLinks = [
  {href: '/', key: 'home'},
  {href: '/tours', key: 'tours'},
  {href: '/packages', key: 'packages'},
  {href: '/services', key: 'services'},
  {href: '/blog', key: 'blog'},
  {href: '/about', key: 'about'},
  {href: '/contact', key: 'contact'},
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [mobileQuery, setMobileQuery] = useState('');
  const mobileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const tNav = useTranslations('nav');

  const links = rawLinks.map((link) => ({
    href: `/${locale === 'en' ? '' : locale}${link.href}`.replace('//', '/'),
    key: link.key,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileSearch(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mobileResults = searchTours(mobileQuery);

  function handleMobileSelect(slug: string, category: string) {
    router.push(tourPath(slug, category));
    setMobileSearch(false);
    setMobileQuery('');
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F5F0EC]/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-sm border-b border-[#D2C6B8]' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href={locale === 'en' ? '/' : `/${locale}`}
          className="group flex items-center gap-2 transition-opacity hover:opacity-90 md:gap-3"
        >
          <Image
            src="/images/Logo.png"
            alt="Egypt Tour and Adventure Logo"
            width={64}
            height={64}
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-14 lg:h-16"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-black uppercase leading-none tracking-widest text-[#134645] sm:text-base lg:text-xl">
              EGYPT TOUR
            </span>
            <span className="mt-1 text-[10px] font-bold leading-none tracking-[0.15em] text-[#BBA27E] sm:text-xs lg:tracking-[0.2em]">
              And Adventure
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'font-semibold text-[#BBA27E]'
                    : 'text-gray-700 hover:text-[#BBA27E]'
                }`}
              >
                {tNav(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <SearchBar />
          <button
            onClick={() => setMobileSearch(!mobileSearch)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[#134645] hover:bg-gray-100 md:hidden"
          >
            <Search className="h-5 w-5" />
          </button>
          <MobileNav links={links} />
        </div>
      </div>

      {/* Mobile search dropdown */}
      {mobileSearch && (
        <div ref={mobileRef} className="border-t bg-[#F5F0EC] px-4 pb-3 pt-2 md:hidden">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
            <input
              type="text"
              autoFocus
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setMobileSearch(false);
                  setMobileQuery('');
                }
              }}
              placeholder="Search tours..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {mobileResults.length > 0 && (
            <div className="mt-2 overflow-hidden rounded-xl border border-[#96A69E] bg-white shadow-lg">
              {mobileResults.map((tour) => (
                <button
                  key={tour.slug}
                  onClick={() => handleMobileSelect(tour.slug, tour.category)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#F5F0EC]"
                >
                  <span className="text-sm font-medium text-[#134645]">
                    {tour.title}
                  </span>
                  <span
                    className="ml-2 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-white"
                    style={{ backgroundColor: '#108E81' }}
                  >
                    {tour.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {mobileQuery.trim().length > 0 && mobileResults.length === 0 && (
            <div className="mt-2 rounded-xl border border-[#96A69E] bg-white px-4 py-4 text-center shadow-lg">
              <p className="text-sm text-[#53685E]">
                No tours found for &ldquo;{mobileQuery}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

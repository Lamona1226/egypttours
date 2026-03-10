'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import MobileNav from './MobileNav';
import SearchBar, { searchTours, tourPath } from './SearchBar';

const links = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [mobileQuery, setMobileQuery] = useState('');
  const mobileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold" style={{ color: '#C9A84C' }}>
          Egypt Tours
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#C9A84C]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SearchBar />
          <button
            onClick={() => setMobileSearch(!mobileSearch)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <Search className="h-5 w-5" />
          </button>
          <MobileNav links={links} />
        </div>
      </div>

      {/* Mobile search dropdown */}
      {mobileSearch && (
        <div ref={mobileRef} className="border-t bg-white px-4 pb-3 pt-2 md:hidden">
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
            <div className="mt-2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
              {mobileResults.map((tour) => (
                <button
                  key={tour.slug}
                  onClick={() => handleMobileSelect(tour.slug, tour.category)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-amber-50"
                >
                  <span className="text-sm font-medium text-gray-800">
                    {tour.title}
                  </span>
                  <span
                    className="ml-2 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-white"
                    style={{ backgroundColor: '#C9A84C' }}
                  >
                    {tour.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {mobileQuery.trim().length > 0 && mobileResults.length === 0 && (
            <div className="mt-2 rounded-xl border border-gray-100 bg-white px-4 py-4 text-center shadow-lg">
              <p className="text-sm text-gray-400">
                No tours found for &ldquo;{mobileQuery}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

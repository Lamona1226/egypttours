'use client';

import Link from 'next/link';
import { useState } from 'react';

interface MobileNavProps {
  links: Array<{ href: string; label: string }>;
}

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full border-t bg-white px-4 py-3 shadow-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/custom-tour"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md py-2 text-center text-sm font-semibold text-white"
            style={{ backgroundColor: '#C9A84C' }}
          >
            Create Your Trip
          </Link>
        </nav>
      )}
    </div>
  );
}

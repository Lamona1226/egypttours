'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  links: Array<{ href: string; label: string }>;
}

export default function MobileNav({ links }: MobileNavProps): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button onClick={() => setOpen(!open)}>Menu</Button>
      {open && (
        <nav className="mt-2 rounded-md border bg-white p-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block py-1 text-sm">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

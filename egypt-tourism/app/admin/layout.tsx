'use client';

import { redirect } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Map, CalendarCheck, FileText } from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/tours', label: 'Tours', icon: Map },
  { href: '/admin/bookings', label: 'Bookings', icon: CalendarCheck },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const isAuthenticated = true;
  const pathname = usePathname();
  if (!isAuthenticated) redirect('/admin/login');

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 flex h-screen w-60 shrink-0 flex-col bg-[#134645] text-[#D2C6B8]">
        <div className="border-b border-white/10 px-5 py-5">
          <Link href="/admin/dashboard" className="text-lg font-bold text-white">
            Admin Panel
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive ? 'bg-[#108E81] text-white' : 'text-[#D2C6B8] hover:bg-[#194033] hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
          })}
        </nav>

        <div className="border-t border-white/10 px-5 py-4 text-xs text-[#96A69E]">
          Egypt Tour and Adventure Admin
        </div>
      </aside>

      <main className="flex-1 bg-[#F5F0EC] p-8">{children}</main>
    </div>
  );
}

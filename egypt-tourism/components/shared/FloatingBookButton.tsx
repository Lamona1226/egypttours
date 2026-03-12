'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function FloatingBookButton() {
  return (
    <Link
      href="/custom-tour"
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-center rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 bg-[#108E81] hover:bg-[#134645] shadow-[#108E81]/40"
      style={{
        width: '80px',
        height: '80px',
      }}
      title="Create Your Own Trip"
    >
      <Sparkles className="h-6 w-6 text-white" />
      <span className="mt-1 px-1 text-center text-[9px] font-bold leading-tight text-white">
        Create Your Trip
      </span>
    </Link>
  );
}

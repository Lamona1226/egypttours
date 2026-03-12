'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ShieldCheck, Star, Users } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const tourCategories = [
  { href: '/tours?category=pyramids', label: 'Pyramids & Giza' },
  { href: '/tours?category=nile', label: 'Nile Cruises' },
  { href: '/tours?category=luxor', label: 'Luxor & Aswan' },
  { href: '/tours?category=desert', label: 'Desert Safari' },
  { href: '/tours?category=red-sea', label: 'Red Sea & Diving' },
  { href: '/tours?category=cairo', label: 'Cairo Day Tours' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+20 100 000 0000';

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <footer className="bg-[#134645] text-[#D2C6B8]">
      {/* Newsletter Bar */}
      <div className="bg-[#134645] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-[#BBA27E]">Get Egypt Travel Tips & Exclusive Deals</h3>
            <p className="mt-1 text-sm text-[#D2C6B8]">
              Join 3,000+ travelers who receive our weekly Egypt travel newsletter
            </p>
          </div>
          <div className="w-full md:w-auto">
            {subscribed ? (
              <p className="rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white">
                Thank you! Check your inbox.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-l-lg border-none bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#BBA27E]"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-r-lg bg-[#108E81] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#277971]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#BBA27E]">Egypt Tour and Adventure</h3>
            <p className="text-sm leading-relaxed">
              Discover the wonders of Egypt with our expertly curated tours. From the
              ancient pyramids to the vibrant streets of Cairo, we bring you
              unforgettable experiences across the land of the pharaohs.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 py-1 transition-colors hover:bg-[#BBA27E]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#BBA27E]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="py-1 transition-colors hover:text-[#BBA27E]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="py-1 transition-colors hover:text-[#BBA27E]">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#BBA27E]">Tours</h3>
            <ul className="space-y-2 text-sm">
              {tourCategories.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="py-1 transition-colors hover:text-[#BBA27E]">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#BBA27E]">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#BBA27E]" />
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 transition-colors hover:text-[#BBA27E]"
                >
                  {whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#BBA27E]" />
                <a href="mailto:info@egypttouradventure.com" className="py-1 transition-colors hover:text-[#BBA27E]">
                  info@egypttouradventure.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#BBA27E]" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#53685E] bg-[#194033]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-[#96A69E] sm:flex-row sm:text-left">
            <span>&copy; {new Date().getFullYear()} Egypt Tour and Adventure. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Payment on arrival &mdash; No online payment required</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-medium text-[#BBA27E]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" /> Secure Booking
            </span>
            <span className="hidden opacity-30 sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4" /> 4.9/5 Rated
            </span>
            <span className="hidden opacity-30 sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" /> 2000+ Tourists
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

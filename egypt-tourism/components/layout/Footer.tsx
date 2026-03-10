import Link from 'next/link';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

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
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+20 100 000 0000';

  return (
    <footer className="bg-[#1A1A2E] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Egypt Tours</h3>
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#C9A84C]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-[#C9A84C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Tours</h3>
            <ul className="space-y-2 text-sm">
              {tourCategories.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="transition-colors hover:text-[#C9A84C]">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#C9A84C]"
                >
                  {whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                <a href="mailto:info@egypttours.com" className="transition-colors hover:text-[#C9A84C]">
                  info@egypttours.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A84C]" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-4 text-center text-xs text-gray-400 sm:flex-row sm:justify-between sm:text-left">
          <span>&copy; {new Date().getFullYear()} Egypt Tours. All rights reserved.</span>
          <span>Payment on arrival &mdash; No online payment required</span>
        </div>
      </div>
    </footer>
  );
}

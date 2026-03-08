import Link from 'next/link';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {}

const links = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Header({}: HeaderProps): JSX.Element {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="font-bold">Egypt Tourism</Link>
        <nav className="hidden gap-4 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}

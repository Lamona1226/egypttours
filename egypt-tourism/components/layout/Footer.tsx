import Link from 'next/link';

interface FooterProps {}

export default function Footer({}: FooterProps): JSX.Element {
  return (
    <footer className="mt-12 border-t bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-4 p-6 text-sm md:grid-cols-3">
        <div>© {new Date().getFullYear()} Egypt Tourism</div>
        <div className="space-y-1">
          <Link href="/about" className="block">About</Link>
          <Link href="/faq" className="block">FAQ</Link>
        </div>
        <div>Follow us: Instagram · Facebook · YouTube</div>
      </div>
    </footer>
  );
}

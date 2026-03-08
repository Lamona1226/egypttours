import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin', 'arabic'] });

export const metadata: Metadata = {
  title: 'Egypt Tourism',
  description: 'Premium tours and packages across Egypt.'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

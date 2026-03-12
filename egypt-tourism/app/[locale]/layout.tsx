import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingBookButton from '@/components/shared/FloatingBookButton';
import ScrollToTop from '@/components/shared/ScrollToTop';
import WhatsAppChatBubble from '@/components/shared/WhatsAppChatBubble';

const inter = Inter({ subsets: ['latin'] });

const locales = ['en', 'ar', 'de', 'fr', 'it', 'ru', 'zh', 'pl'];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: 'Egypt Tour and Adventure',
    description: t('subtitle'),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale — redirect to 404 if unsupported
  if (!locales.includes(locale)) {
    notFound();
  }

  // Fetch all messages for the current locale
  // getMessages() reads from i18n.ts automatically
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body className={`${inter.className} bg-[#F5F0EC]`}>
        {/* 
          NextIntlClientProvider MUST wrap everything.
          Passing messages here makes ALL translation keys
          available to every client component on the page.
        */}
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <FloatingBookButton />
          <WhatsAppChatBubble />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


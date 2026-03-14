import { prisma } from '@/lib/prisma';
import PageBanner from '@/components/shared/PageBanner';
import BlogListingClient from '@/components/blog/BlogListingClient';
import { formatBlogPostToArticle } from '@/lib/blog-utils'; // Import the utility function
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Egypt Travel Blog | Egypt Tour and Adventure',
  description:
    'Expert guides, hidden gems, and practical Egypt travel tips curated by our Egyptologist team.',
};

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<JSX.Element> {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('blog');
  const blogPosts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
  });

  const articles = blogPosts.map(formatBlogPostToArticle);

  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner
          title={t('title')}
          subtitle={t('subtitle')}
        />
      </section>

      <BlogListingClient articles={articles} />
    </div>
  );
}
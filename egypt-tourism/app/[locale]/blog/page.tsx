import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import PageBanner from '@/components/shared/PageBanner';
import BlogListingClient from '@/components/blog/BlogListingClient';
import {articles} from '@/lib/blogData';

export const metadata: Metadata = {
  title: 'Egypt Travel Blog | Egypt Tour and Adventure',
  description:
    'Expert guides, hidden gems, and practical Egypt travel tips curated by our Egyptologist team.',
};

export default async function Page(): Promise<JSX.Element> {
  const t = await getTranslations('blog');
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner
          title={t('title')}
          subtitle={t('subtitle')}
        />
      </section>

      <BlogListingClient articles={sorted} />
    </div>
  );
}


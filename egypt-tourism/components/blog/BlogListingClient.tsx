'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Clock, TrendingUp, Tag, Lightbulb, Search } from 'lucide-react';
import type { Article } from '@/types';
import ArticleCard from './ArticleCard';

const categories = [
  'All',
  'History & Culture',
  'Adventure',
  'Nile & Cruises',
  'Desert & Safari',
  'Food & Cuisine',
  'Travel Tips',
  'Visa & Entry',
] as const;

interface BlogListingClientProps {
  articles: Article[];
}

export default function BlogListingClient({ articles }: BlogListingClientProps): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success'>('idle');

  const [featured, rest] = useMemo(() => {
    if (!articles.length) return [undefined, [] as Article[]];
    return [articles[0], articles.slice(1)];
  }, [articles]);

  const filtered = useMemo(() => {
    let list = rest;
    if (activeCategory !== 'All') {
      list = list.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [rest, activeCategory, searchQuery]);

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const mostRead = useMemo(
    () => [...articles].sort((a, b) => b.readTime - a.readTime).slice(0, 4),
    [articles],
  );

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Featured hero */}
      {featured && (
        <section className="mb-12 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="h-80 rounded-2xl bg-[#D2C6B8]" />
          <div className="flex flex-col justify-between rounded-2xl bg-[#134645] p-6 sm:p-8">
            <div>
              <span className="inline-flex rounded-full bg-[#108E81] px-3 py-1 text-xs font-semibold text-white">
                {featured.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm text-[#D2C6B8]">{featured.excerpt}</p>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#108E81] text-sm font-semibold uppercase text-white">
                  {featured.authorInitials}
                </div>
                <div className="flex flex-col text-xs text-[#D2C6B8]">
                  <span className="font-semibold text-white">By {featured.author}</span>
                  <span>
                    {new Date(featured.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1 text-sm font-medium text-[#BBA27E]">
                  <Clock className="h-4 w-4" />
                  {featured.readTime} min read
                </span>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#BBA27E] px-5 py-2 text-sm font-bold text-[#134645] transition-colors hover:bg-[#D2C6B8]"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main + sidebar layout */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        {/* Left: filters + grid */}
        <div>
          {/* Category tabs */}
          <div className="mb-4 overflow-x-auto">
            <div className="flex min-w-max items-center gap-2 pb-1">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setVisibleCount(6);
                    }}
                    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#108E81] text-white'
                        : 'border border-[#D2C6B8] bg-[#F5F0EC] text-[#53685E] hover:bg-[#D2C6B8]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <div className="flex items-center gap-2 rounded-full border border-[#D2C6B8] bg-[#F5F0EC] px-4 py-2">
              <Search className="h-4 w-4 shrink-0 text-[#53685E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search articles..."
                className="w-full bg-transparent text-sm text-[#134645] outline-none placeholder:text-[#96A69E]"
              />
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + 6)}
                className="rounded-full border-2 border-[#108E81] px-8 py-3 text-sm font-semibold text-[#108E81] transition-colors hover:bg-[#108E81] hover:text-white"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>

        {/* Right: sidebar widgets */}
        <aside className="space-y-8 lg:sticky lg:top-24">
          {/* Most Read */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#108E81]" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#134645]">
                Most Read
              </h2>
            </div>
            <div className="divide-y divide-[#D2C6B8] rounded-xl border border-[#D2C6B8] bg-[#F5F0EC]">
              {mostRead.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-[#D2C6B8]/40"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#108E81] text-xs font-semibold text-white">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium text-[#134645] line-clamp-2">
                      {article.title}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-xs text-[#96A69E]">
                      <Clock className="h-3 w-3" />
                      {article.readTime} min read
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Topics */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#108E81]" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#134645]">
                Topics
              </h2>
            </div>
            <div className="space-y-2 rounded-xl border border-[#D2C6B8] bg-[#F5F0EC] p-4 text-sm">
              {[
                { label: 'History & Culture', count: 12 },
                { label: 'Adventure', count: 8 },
                { label: 'Nile & Cruises', count: 6 },
                { label: 'Desert & Safari', count: 5 },
                { label: 'Food & Cuisine', count: 7 },
                { label: 'Travel Tips', count: 9 },
                { label: 'Visa & Entry', count: 4 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 text-[#134645] transition-colors hover:text-[#108E81]"
                >
                  <span>{item.label}</span>
                  <span className="rounded-full bg-[#D2C6B8] px-2 text-xs font-semibold text-[#134645]">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="rounded-xl bg-[#134645] p-5 text-sm">
            {newsletterState === 'idle' ? (
              <>
                <h2 className="text-base font-bold text-white">Get Weekly Travel Tips</h2>
                <p className="mt-1 text-[#D2C6B8]">Join 3,000+ travelers</p>
                <form
                  className="mt-4 space-y-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterState('success');
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full rounded-lg bg-white px-3 py-2 text-sm text-[#134645] outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#BBA27E] px-3 py-2 text-sm font-bold text-[#134645] transition-colors hover:bg-[#D2C6B8]"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            ) : (
              <p className="text-sm font-semibold text-[#D2C6B8]">
                Thank you! ✓ You&apos;re now subscribed to our Egypt travel tips.
              </p>
            )}
          </section>

          {/* Quick Facts */}
          <section className="rounded-xl border border-[#D2C6B8] bg-[#F5F0EC] p-5 text-sm">
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-[#BBA27E]" />
              <h2 className="text-sm font-semibold text-[#134645]">Did You Know?</h2>
            </div>
            <div className="space-y-2">
              {[
                'Egypt has more ancient monuments than any country on Earth.',
                'The Nile is the longest river in the world at 6,650 km.',
                'Egyptians invented the 365-day calendar over 5,000 years ago.',
              ].map((fact) => (
                <p
                  key={fact}
                  className="border-l-4 border-[#108E81] pl-3 text-xs text-[#53685E]"
                >
                  {fact}
                </p>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}


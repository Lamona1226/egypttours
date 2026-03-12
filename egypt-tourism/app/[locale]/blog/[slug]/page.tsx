import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {
  Calendar,
  ChevronRight,
  Clock,
  Copy,
  Facebook,
  MessageCircle,
  Twitter,
} from 'lucide-react';
import ArticleCard from '@/components/blog/ArticleCard';
import Breadcrumb from '@/components/shared/Breadcrumb';
import TourCard from '@/components/tours/TourCard';
import {articles} from '@/lib/blogData';
import type {Tour} from '@/types';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {title: 'Article not found | Egypt Tour and Adventure'};
  return {
    title: `${article.title} | Egypt Tour and Adventure`,
    description: article.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<JSX.Element> {
  const {slug} = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const mostRead = [...articles].sort((a, b) => b.readTime - a.readTime).slice(0, 4);

  const relatedTours: Tour[] = [
    {
      id: 'rt1',
      slug: 'giza-pyramids',
      title: 'Giza Pyramids & Sphinx Tour',
      description:
        'Half-day guided visit to the Great Pyramid, Sphinx and Valley Temple with hotel pickup.',
      pricePerPerson: 85,
      durationHours: 6,
      category: 'Historical',
    },
    {
      id: 'rt2',
      slug: 'luxor-east-bank',
      title: 'Luxor Temples Day Tour',
      description:
        'Guided exploration of Karnak and Luxor Temples with an expert Egyptologist guide.',
      pricePerPerson: 95,
      durationHours: 8,
      category: 'Historical',
    },
    {
      id: 'rt3',
      slug: 'nile-felucca-sunset',
      title: 'Nile Sunset Felucca Sail',
      description:
        'Relaxing evening sail on a traditional felucca boat with tea and light refreshments.',
      pricePerPerson: 45,
      durationHours: 3,
      category: 'Cultural',
    },
  ];

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="bg-[#134645] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[#96A69E]">
            <Link href="/" className="hover:text-[#BBA27E]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-[#96A69E]" />
            <Link href="/blog" className="hover:text-[#BBA27E]">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-[#96A69E]" />
            <span className="text-[#D2C6B8]">{article.category}</span>
            <ChevronRight className="h-4 w-4 text-[#96A69E]" />
            <span className="line-clamp-1 text-[#D2C6B8]">{article.title}</span>
          </nav>

          <span className="inline-flex rounded-full bg-[#108E81] px-3 py-1 text-xs font-semibold text-white">
            {article.category}
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-[#D2C6B8]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#108E81] text-sm font-bold text-white">
                {article.authorInitials}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">{article.author}</span>
                <span className="flex items-center gap-2 text-xs text-[#96A69E]">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(article.date)}
                  <span className="mx-1">•</span>
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime} min read
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Share on X"
                className="rounded-full p-2 text-[#D2C6B8] transition hover:bg-white/5 hover:text-[#BBA27E]"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Share on Facebook"
                className="rounded-full p-2 text-[#D2C6B8] transition hover:bg-white/5 hover:text-[#BBA27E]"
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Share on WhatsApp"
                className="rounded-full p-2 text-[#D2C6B8] transition hover:bg-white/5 hover:text-[#BBA27E]"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Copy link"
                className="rounded-full p-2 text-[#D2C6B8] transition hover:bg-white/5 hover:text-[#BBA27E]"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          {label: 'Home', href: '/'},
          {label: 'Blog', href: '/blog'},
          {label: article.title},
        ]}
      />

      {/* Main */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <article className="min-w-0">
          <div className="mb-8 flex h-96 w-full items-center justify-center rounded-2xl bg-[#D2C6B8] text-sm font-semibold text-[#96A69E]">
            Article Featured Image
          </div>

          <div className="text-lg leading-8 text-[#134645]">
            <p className="text-[#53685E]">
              Luxor is an open-air museum of ancient Egypt — towering columns, carved reliefs and
              royal tombs surrounded by the quiet rhythm of the Nile. If you want to feel the full
              magic of the New Kingdom, Luxor is where it happens.
            </p>
            <p className="mt-5 text-[#53685E]">
              This guide breaks down when to go, which temples to prioritize, and practical tips that
              make your day smoother (and cooler).
            </p>

            <h2 className="mt-10 text-2xl font-bold text-[#108E81]">The Best Time to Visit Luxor</h2>
            <p className="mt-4 text-[#53685E]">
              The most comfortable months are October through April, when daytime temperatures are
              mild and you can explore without fighting extreme heat. December and January bring the
              highest crowds—especially around holidays—so book guides and drivers early if you want
              a stress-free experience.
            </p>
            <p className="mt-5 text-[#53685E]">
              If you’re visiting between May and September, start at sunrise and plan indoor breaks
              (museums, cafes) around midday. Luxor’s stone temples absorb heat quickly, and the
              difference between 8 AM and 1 PM can feel dramatic.
            </p>

            <blockquote className="my-6 rounded-r-lg border-l-4 border-[#BBA27E] bg-[#F5F0EC] py-3 pl-5 italic text-[#134645]">
              “Egypt is not a country we live in, but a country that lives within us.”
            </blockquote>

            <h2 className="mt-10 text-2xl font-bold text-[#108E81]">Top Temples You Cannot Miss</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#53685E]">
              <li>
                <strong className="text-[#134645] font-bold">Karnak Temple Complex</strong> — The
                grandest temple site in Egypt, with an awe-inspiring forest of columns.
              </li>
              <li>
                <strong className="text-[#134645] font-bold">Luxor Temple</strong> — Perfect at
                sunset, with a beautiful avenue of sphinxes and glowing sandstone.
              </li>
              <li>
                <strong className="text-[#134645] font-bold">Temple of Hatshepsut</strong> — A
                dramatic terraced temple built into the cliffs of Deir el-Bahari.
              </li>
              <li>
                <strong className="text-[#134645] font-bold">Valley of the Kings</strong> — Royal
                tombs with vivid paintings; go early for the coolest, quietest visit.
              </li>
              <li>
                <strong className="text-[#134645] font-bold">Temple of Edfu</strong> — One of the
                best-preserved temples in Egypt, ideal on a Nile route.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-[#108E81]">Practical Travel Tips for Luxor</h2>
            <p className="mt-4 text-[#53685E]">
              Use a private driver or a trusted taxi for the West Bank—it saves time and keeps your
              day flexible. Many top sites are spread out, and a driver who knows the local routes
              can help you avoid peak congestion.
            </p>
            <p className="mt-5 text-[#53685E]">
              Consider hiring a licensed Egyptologist guide. They’ll connect the dots between
              temples, dynasties and symbolism—turning carvings into stories. If you shop in markets,
              bargaining is normal; stay friendly, smile, and don’t be afraid to walk away.
            </p>
            <p className="mt-5 text-[#53685E]">
              Dress modestly and comfortably—light fabrics, covered shoulders, and sturdy shoes.
              Bring water, sunscreen and a hat, especially outside the winter months.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-[#108E81]">How to Book a Luxor Day Tour</h2>
            <p className="mt-4 text-[#53685E]">
              Egypt Tour and Adventure offers expert-guided Luxor day tours with hotel pickup, a
              licensed Egyptologist guide, and flexible group sizes—private or small group. Browse
              options and request availability on our tours page.
              <Link href="/tours" className="ml-2 text-[#108E81] underline hover:text-[#277971]">
                Browse tours →
              </Link>
            </p>
          </div>

          {/* Author */}
          <div className="mt-12 flex gap-4 rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#108E81] text-2xl font-bold text-white">
              AH
            </div>
            <div>
              <p className="text-xs text-[#96A69E]">Written by</p>
              <p className="text-lg font-bold text-[#134645]">Ahmed Hassan</p>
              <p className="text-sm text-[#53685E]">
                Senior Egyptologist &amp; Tour Guide — 12 years experience
              </p>
              <p className="mt-2 text-sm text-[#53685E]">
                Expert in ancient Egyptian history, hieroglyphics, and archaeological sites across
                the Nile Valley.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm text-[#96A69E]">Tags:</span>
            {['Luxor', 'Temples', 'Ancient Egypt', 'Day Tours', 'Egypt Travel'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D2C6B8] bg-[#F5F0EC] px-3 py-1 text-xs text-[#53685E]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Related articles */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#134645]">You Might Also Like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>

          {/* Related tours */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#134645]">Tours You Might Like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="rounded-xl bg-[#134645] p-5">
            <h3 className="text-lg font-bold text-white">Explore Luxor with an Expert</h3>
            <p className="mt-1 text-sm text-[#D2C6B8]">Private guided tours with hotel pickup</p>
            <div className="mt-4 h-32 rounded-lg bg-[#D2C6B8]" />
            <p className="mt-3 font-bold text-[#BBA27E]">Luxor Full Day Tour</p>
            <p className="text-sm text-white">From $65 per person</p>
            <Link
              href="/tours"
              className="mt-4 block w-full rounded-lg bg-[#108E81] py-2 text-center text-sm font-semibold text-white transition hover:bg-[#277971]"
            >
              Book This Tour
            </Link>
          </div>

          <div className="rounded-xl border border-[#D2C6B8] bg-[#F5F0EC] p-5">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-lg font-bold text-[#134645]">Most Read</h3>
            </div>
            <div className="divide-y divide-[#D2C6B8]">
              {mostRead.map((a, idx) => (
                <Link
                  key={a.id}
                  href={`/blog/${a.slug}`}
                  className="flex items-start gap-3 py-3 transition hover:text-[#108E81]"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#108E81] text-xs font-bold text-white">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-semibold text-[#134645]">{a.title}</p>
                    <p className="mt-1 text-xs text-[#96A69E]">{a.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#134645] p-5">
            <h3 className="text-lg font-bold text-white">Get Weekly Travel Tips</h3>
            <p className="mt-1 text-sm text-[#D2C6B8]">Join 3,000+ travelers</p>
            <input
              className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-sm outline-none"
              placeholder="Your email address"
            />
            <button
              type="button"
              className="mt-2 w-full rounded-lg bg-[#BBA27E] py-2 text-sm font-bold text-[#134645] transition hover:bg-[#D2C6B8]"
            >
              Subscribe
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}


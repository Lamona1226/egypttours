import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import type { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article }: ArticleCardProps): JSX.Element {
  const { slug, title, excerpt, category, author, authorInitials, readTime, date } = article;

  return (
    <article className="group flex flex-col">
      {/* Image area */}
      <div className="relative h-48 w-full rounded-t-xl bg-[#D2C6B8]">
        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-[#108E81] px-2 py-1 text-xs font-semibold text-white">
          {category}
        </span>

        {/* Read time badge */}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#134645]/80 px-2 py-1 text-xs font-medium text-white">
          <Clock className="h-3 w-3" />
          {readTime} min
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col rounded-b-xl border border-[#D2C6B8] bg-[#F5F0EC] p-5">
        <Link href={`/blog/${slug}`} className="block">
          <h3 className="line-clamp-2 text-lg font-bold text-[#134645] transition-colors group-hover:text-[#108E81]">
            {title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm text-[#53685E]">{excerpt}</p>

        <div className="mt-4 border-t border-[#D2C6B8] pt-4">
          <div className="flex items-center justify-between gap-3">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#108E81] text-xs font-semibold uppercase text-white">
                {authorInitials}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[#134645]">{author}</span>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1 text-xs text-[#96A69E]">
              <Calendar className="h-3 w-3" />
              <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="mt-3 block text-sm font-semibold text-[#108E81] transition-colors hover:text-[#134645]"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}


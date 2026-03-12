import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `https://egypttouradventure.com${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#53685E]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {isLast ? (
                  <span className="font-medium text-[#134645]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-[#BBA27E]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#96A69E]" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

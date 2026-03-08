import { Metadata } from 'next';

export function buildMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
    alternates: { canonical: process.env.NEXT_PUBLIC_SITE_URL }
  };
}

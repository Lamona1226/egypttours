import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

interface SEOHeadProps {
  title: string;
  description: string;
}

export function getSEOHead({ title, description }: SEOHeadProps): Metadata {
  return buildMetadata(title, description);
}

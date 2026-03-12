export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  pricePerPerson: number;
  durationHours: number;
  category?: string;
  images?: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  description: string;
  pricePerPerson: number;
  durationDays: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorInitials: string;
  readTime: number;
  date: string;
  tags: string[];
}

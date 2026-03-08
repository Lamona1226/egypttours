export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  pricePerPerson: number;
  durationHours: number;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  description: string;
  pricePerPerson: number;
  durationDays: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
}

export type WeekdayKey = "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado";

export interface WeeklyMenuDay {
  key: WeekdayKey;
  shortLabel: string;
  dayLabel: string;
  dishTitle: string;
  sides: string[];
  image: string | null;
}

export interface Product {
  slug: string;
  name: string;
  description?: string;
  image: string;
}

export interface Drink {
  slug: string;
  name: string;
  image: string;
}

export interface GalleryItem {
  slug: string;
  image: string;
  alt: string;
}

export interface SpecialOffer {
  active: boolean;
  title?: string;
  description?: string;
  image?: string;
  dateLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

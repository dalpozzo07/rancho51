import type { Product } from "@/types";

export interface Salgado extends Product {
  /** Exibido na seleção curta da home ("Os Brutos do Rancho"). */
  featured: boolean;
}

export const SALGADOS: Salgado[] = [
  { slug: "coxinha-bruta", name: "Coxinha Bruta do Rancho", image: "/images/salgados/coxinha-bruta.png", featured: true },
  { slug: "bolinho-de-carne", name: "Bolinho de Carne do Rancho", image: "/images/salgados/bolinho-de-carne.png", featured: true },
  { slug: "pastel-de-frango", name: "Pastel de Frango", image: "/images/salgados/pastel-de-frango.png", featured: true },
  { slug: "mini-pizza-de-frango", name: "Mini Pizza de Frango", image: "/images/salgados/mini-pizza-de-frango.png", featured: true },
  { slug: "quibe", name: "Quibe Bruto do Rancho", image: "/images/salgados/quibe.png", featured: false },
  { slug: "esfirra-de-frango", name: "Esfirra Caipira de Frango", image: "/images/salgados/esfirra-de-frango.png", featured: false },
  { slug: "enroladinho-de-vina", name: "Enroladinho de Vina 51", image: "/images/salgados/enroladinho-de-vina.png", featured: false },
  { slug: "pastel-de-pizza", name: "Pastel de Pizza", image: "/images/salgados/pastel-de-pizza.png", featured: false },
];

export const FEATURED_SALGADOS = SALGADOS.filter((item) => item.featured);

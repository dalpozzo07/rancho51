import type { GalleryItem } from "@/types";

/**
 * Galeria enxuta por enquanto: só entram fotos reais que já temos.
 * Fotos de ambiente/bastidores do salão ainda estão pendentes — adicionar aqui assim que chegarem.
 * A ordem/posição de cada item é mapeada pelo slug em sections/Gallery.tsx (composição fixa, tipo bento).
 */
export const GALLERY: GalleryItem[] = [
  { slug: "feijoada", image: "/images/menu/sabado-feijoada.png", alt: "Feijoada completa do Rancho 51 em marmita, com a churrasqueira acesa ao fundo" },
  { slug: "batata-frita", image: "/images/porcoes/batata-frita.png", alt: "Porção de batata frita do Rancho 51" },
  { slug: "marmita-grande", image: "/images/marmitas/marmita-grande.png", alt: "Marmita grande do Rancho 51" },
  { slug: "coxinha-bruta", image: "/images/salgados/coxinha-bruta.png", alt: "Coxinha Bruta do Rancho" },
  { slug: "frango-frito", image: "/images/porcoes/frango-frito.png", alt: "Porção de frango frito do Rancho 51" },
  { slug: "tilapia", image: "/images/porcoes/tilapia.png", alt: "Porção de tilápia do Rancho 51" },
];

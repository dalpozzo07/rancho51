export interface StoryChapter {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    eyebrow: "01 — O Fogo",
    title: "O fogo não é decoração.",
    text: "Churrasqueira acesa desde cedo, do jeito que sempre foi. Sem pressa, sem atalho.",
    image: "/images/hero/hero-marmita-pequena.png",
    alt: "Frango grelhado na churrasqueira acesa do Rancho 51",
  },
  {
    eyebrow: "02 — O Tempero",
    title: "Tempero de casa. Sempre foi assim.",
    text: "Sal na medida, receita que não muda, feita como se fosse pra família.",
    image: "/images/salgados/coxinha-bruta.png",
    alt: "Coxinha Bruta do Rancho recém-feita",
  },
  {
    eyebrow: "03 — A Fartura",
    title: "Porção que enche a mesa.",
    text: "Serve com fartura, do jeito Rancho — se sobrar, foi você que não quis mais.",
    image: "/images/porcoes/calabresa.png",
    alt: "Porção farta de calabresa do Rancho 51",
  },
  {
    eyebrow: "04 — O Cuidado",
    title: "Autêntico até nos detalhes.",
    text: "Cardápio novo a cada dia da semana, ingrediente escolhido a dedo, servido na hora.",
    image: "/images/menu/sabado-feijoada.png",
    alt: "Feijoada completa do Rancho 51, com a churrasqueira acesa ao fundo",
  },
];

import type { WeeklyMenuDay } from "@/types";

export const WEEKLY_MENU: WeeklyMenuDay[] = [
  {
    key: "segunda",
    shortLabel: "SEG",
    dayLabel: "Segunda — Dia do Frango",
    dishTitle: "Frango à Parmegiana",
    sides: ["Arroz branco", "Feijão", "Batata rústica", "Saladas variadas"],
    image: null,
  },
  {
    key: "terca",
    shortLabel: "TER",
    dayLabel: "Terça — Dia da Carne",
    dishTitle: "Escondidinho de Carne de Panela com Queijo",
    sides: ["Arroz branco", "Feijão", "Farofa crocante", "Saladas variadas"],
    image: null,
  },
  {
    key: "quarta",
    shortLabel: "QUA",
    dayLabel: "Quarta — Dia da Massa",
    dishTitle: "Pirogue à Bolonhesa",
    sides: ["Arroz branco", "Feijão", "Frango assado", "Saladas variadas"],
    image: null,
  },
  {
    key: "quinta",
    shortLabel: "QUI",
    dayLabel: "Quinta — Sabor do Rancho",
    dishTitle: "Pernil Suíno Assado ao Molho Especial",
    sides: ["Arroz com açafrão", "Feijão", "Mandioca dourada", "Couve refogada", "Saladas variadas"],
    image: null,
  },
  {
    key: "sexta",
    shortLabel: "SEX",
    dayLabel: "Sexta — Sextôu Especial",
    dishTitle: "Bife a Cavalo",
    sides: ["Arroz branco", "Feijão", "Batata frita", "Farofa de bacon"],
    image: null,
  },
  {
    key: "sabado",
    shortLabel: "SÁB",
    dayLabel: "Sábado — Feijoada do Rancho",
    dishTitle: "Feijoada Completa",
    sides: ["Arroz", "Couve", "Torresmo", "Farofa", "Laranja", "Vinagrete"],
    image: "/images/menu/sabado-feijoada.png",
  },
];

/** Dia exibido por padrão ao carregar a seção — o único com foto definitiva por enquanto. */
export const DEFAULT_MENU_DAY: WeeklyMenuDay["key"] = "sabado";

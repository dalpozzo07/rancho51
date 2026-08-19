import type { SpecialOffer } from "@/types";

/**
 * Bloco reutilizável para eventos/pratos especiais ("Hoje no Rancho").
 * Fica inativo (a seção some da página) até alguém preencher um evento real aqui —
 * evita mostrar data ou prato inventado.
 */
export const CURRENT_SPECIAL: SpecialOffer = {
  active: false,
};

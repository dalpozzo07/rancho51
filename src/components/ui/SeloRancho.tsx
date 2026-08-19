import { cn } from "@/lib/utils";

/**
 * Selo circular — como uma marca de ferro em madeira. Uso moderado:
 * rodapé, confirmações de pedido, pratos especiais.
 */
export function SeloRancho({ className, size = 96 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 130 130"
      className={cn(className)}
      role="img"
      aria-label="Selo Rancho 51 — Autêntico até nos detalhes"
    >
      <circle cx="65" cy="65" r="58" fill="none" stroke="var(--color-amber)" strokeWidth="1.5" />
      <circle cx="65" cy="65" r="48" fill="none" stroke="var(--color-amber-dim)" strokeWidth="1" />
      <path id="seloArcTop" d="M 20 65 A 45 45 0 0 1 110 65" fill="none" />
      <text fontFamily="var(--font-body)" fontWeight="600" fontSize="6.4" letterSpacing="0.15em" fill="var(--color-text-dim)">
        <textPath href="#seloArcTop" startOffset="50%" textAnchor="middle">
          AUTÊNTICO ATÉ NOS DETALHES
        </textPath>
      </text>
      <text
        x="65"
        y="80"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="600"
        fontSize="30"
        fill="var(--color-amber-soft)"
      >
        51
      </text>
    </svg>
  );
}

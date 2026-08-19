import { cn } from "@/lib/utils";

/**
 * Divisor de seção inspirado no corte transversal de uma tora — os anéis da
 * rodela de madeira da marca. Substitui o <hr> genérico entre blocos importantes.
 */
export function Corte51({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex w-full max-w-wrap items-center px-6", className)} aria-hidden="true">
      <div className="h-px flex-1 bg-border" />
      <svg width="56" height="52" viewBox="0 0 56 52" className="mx-4 shrink-0">
        <circle cx="28" cy="26" r="21" fill="none" stroke="var(--color-amber-dim)" strokeWidth="1" />
        <circle cx="28" cy="26" r="14" fill="none" stroke="var(--color-amber-dim)" strokeWidth="1" />
        <circle cx="28" cy="26" r="7" fill="none" stroke="var(--color-amber)" strokeWidth="1" />
        <circle cx="28" cy="26" r="2" fill="var(--color-ember)" />
      </svg>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

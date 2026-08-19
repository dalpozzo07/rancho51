import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CURRENT_SPECIAL } from "@/data/specials";

/** Some da página quando não há nenhum evento/especial ativo em data/specials.ts. */
export function SpecialOfTheDay() {
  if (!CURRENT_SPECIAL.active) return null;

  return (
    <section className="border-b border-border-soft bg-surface py-20">
      <div className="mx-auto max-w-wrap px-6">
        <Reveal className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
          {CURRENT_SPECIAL.image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
              <Image src={CURRENT_SPECIAL.image} alt={CURRENT_SPECIAL.title ?? "Especial do Rancho"} fill className="object-cover" />
            </div>
          )}
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-ember-soft">
              Hoje no Rancho
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-extrabold tracking-tight text-ink">
              {CURRENT_SPECIAL.title}
            </h2>
            {CURRENT_SPECIAL.dateLabel && <p className="mt-1 text-sm text-amber-soft">{CURRENT_SPECIAL.dateLabel}</p>}
            {CURRENT_SPECIAL.description && <p className="mt-4 text-ink-dim">{CURRENT_SPECIAL.description}</p>}
            {CURRENT_SPECIAL.ctaHref && CURRENT_SPECIAL.ctaLabel && (
              <div className="mt-6">
                <Button href={CURRENT_SPECIAL.ctaHref}>{CURRENT_SPECIAL.ctaLabel}</Button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

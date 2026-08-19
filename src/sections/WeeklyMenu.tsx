"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { DEFAULT_MENU_DAY, WEEKLY_MENU } from "@/data/weekly-menu";
import type { WeekdayKey } from "@/types";

export function WeeklyMenu() {
  const [activeDay, setActiveDay] = useState<WeekdayKey>(DEFAULT_MENU_DAY);
  const day = WEEKLY_MENU.find((d) => d.key === activeDay) ?? WEEKLY_MENU[0];

  return (
    <section id="cardapio-semana" className="section-glow-amber border-b border-border-soft bg-bg-soft py-24">
      <div className="mx-auto max-w-wrap px-6">
        <SectionHeading
          eyebrow="Cardápio da Semana"
          title="Um prato diferente pra cada dia"
          description="Escolha o dia e veja o que sai da churrasqueira e do fogão do Rancho."
        />

        <div className="mt-10 flex gap-1 overflow-x-auto border-b border-border pb-px" role="tablist" aria-label="Dias da semana">
          {WEEKLY_MENU.map((d) => {
            const isActive = d.key === activeDay;
            return (
              <button
                key={d.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveDay(d.key)}
                className={cn(
                  "relative shrink-0 px-4 py-3 font-body text-xs font-semibold tracking-[0.08em] transition-colors sm:px-6 sm:text-sm",
                  isActive ? "text-amber-soft" : "text-ink-faint hover:text-ink-dim"
                )}
              >
                {d.shortLabel}
                {isActive && (
                  <motion.span
                    layoutId="weekly-menu-underline"
                    className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-ember to-amber shadow-[0_0_8px_rgba(211,162,83,0.55)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={day.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-8 md:grid-cols-2 md:items-center md:gap-14"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-surface">
              {day.image ? (
                <Image
                  src={day.image}
                  alt={day.dishTitle}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <svg width="40" height="38" viewBox="0 0 56 52" aria-hidden="true">
                    <circle cx="28" cy="26" r="21" fill="none" stroke="var(--color-amber-dim)" strokeWidth="1" />
                    <circle cx="28" cy="26" r="7" fill="none" stroke="var(--color-amber-dim)" strokeWidth="1" />
                  </svg>
                  <p className="font-body text-xs uppercase tracking-[0.1em] text-ink-faint">Foto em breve</p>
                </div>
              )}
            </div>

            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-amber">
                {day.dayLabel}
              </span>
              <h3 className="mt-2 text-balance font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {day.dishTitle}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {day.sides.map((side) => (
                  <li key={side} className="font-body text-sm text-ink-dim">
                    {side}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

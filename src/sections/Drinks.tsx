import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DRINKS } from "@/data/drinks";

export function Drinks() {
  return (
    <section className="section-glow-amber border-b border-border-soft bg-bg-soft py-16">
      <div className="mx-auto max-w-wrap px-6">
        <SectionHeading eyebrow="Bebidas" title="Pra acompanhar" align="center" className="mx-auto" />

        <div className="mt-8 flex gap-5 overflow-x-auto pb-2">
          {DRINKS.map((drink) => (
            <div key={drink.slug} className="flex w-20 shrink-0 flex-col items-center gap-2 text-center sm:w-24">
              <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border-soft bg-surface">
                <Image src={drink.image} alt={drink.name} fill sizes="96px" className="object-cover" />
              </div>
              <span className="font-body text-[11px] text-ink-faint">{drink.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DELIVERY_LINKS } from "@/data/site-config";
import { MARMITAS } from "@/data/marmitas";

export function Marmitas() {
  return (
    <section className="section-glow-wood border-b border-border-soft bg-bg py-24">
      <div className="mx-auto max-w-wrap px-6">
        <SectionHeading
          eyebrow="Marmitas"
          title="Do tamanho da sua fome"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {MARMITAS.map((marmita, index) => (
            <Reveal key={marmita.slug} delay={index * 0.08}>
              <div className="group border border-border-soft bg-surface transition-colors hover:border-amber-dim">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={marmita.image}
                    alt={marmita.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">{marmita.name}</h3>
                  <p className="mt-2 text-sm text-ink-dim">{marmita.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={DELIVERY_LINKS.whatsapp}>Escolher Minha Marmita</Button>
        </div>
      </div>
    </section>
  );
}

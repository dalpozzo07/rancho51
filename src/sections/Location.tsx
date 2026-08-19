import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_SRC, SITE } from "@/data/site-config";

export function Location() {
  return (
    <section id="localizacao" className="section-glow-amber border-b border-border-soft bg-bg-soft py-24">
      <div className="mx-auto max-w-wrap px-6">
        <SectionHeading eyebrow="Localização" title="Onde fica o Rancho" />

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-14">
          <Reveal className="order-2 space-y-6 md:order-1">
            <div className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
              <p className="text-ink-dim">
                {SITE.address.street}
                <br />
                {SITE.address.city} - {SITE.address.state}, {SITE.address.zip}
              </p>
            </div>
            <div className="flex gap-3">
              <Clock size={20} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
              <p className="text-ink-dim">{SITE.hours.note}</p>
            </div>
            <div className="flex gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
              <p className="text-ink-dim">{SITE.phoneDisplay}</p>
            </div>
            <Button href={MAPS_DIRECTIONS_URL}>Como Chegar</Button>
          </Reveal>

          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-sm border border-border-soft md:order-2">
            <iframe
              src={MAPS_EMBED_SRC}
              title={`Mapa até o ${SITE.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

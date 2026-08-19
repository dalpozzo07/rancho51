import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site-config";

export function InstagramCTA() {
  return (
    <section className="border-b border-border-soft bg-bg py-20">
      <div className="mx-auto max-w-wrap px-6 text-center">
        <Reveal className="flex flex-col items-center">
          <Instagram size={28} className="text-amber-soft" aria-hidden="true" />
          <span className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.16em] text-amber">
            Acompanhe o Rancho
          </span>
          <p className="mt-2 font-display text-2xl font-medium text-ink">{SITE.instagram.handle}</p>
          <p className="mt-2 max-w-sm text-sm text-ink-dim">{SITE.instagram.bio}</p>
          <div className="mt-6">
            <Button href={SITE.instagram.url}>Seguir no Instagram</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

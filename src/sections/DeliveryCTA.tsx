import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DELIVERY_LINKS } from "@/data/site-config";

export function DeliveryCTA() {
  return (
    <section id="delivery" className="border-b border-border-soft bg-bg-soft py-24">
      <div className="mx-auto max-w-wrap px-6 text-center">
        <Reveal>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-amber">
            Delivery
          </span>
          <h2 className="mx-auto mt-3 max-w-lg text-balance font-display text-3xl font-medium text-ink sm:text-4xl">
            O Rancho chega até você.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-dim">
            Peça direto pelo WhatsApp e receba quentinho, do jeito Rancho.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={DELIVERY_LINKS.whatsapp}>Pedir pelo WhatsApp</Button>
            {DELIVERY_LINKS.ifood && (
              <Button href={DELIVERY_LINKS.ifood} variant="ghost">
                Pedir no iFood
              </Button>
            )}
            {DELIVERY_LINKS.aiqfome && (
              <Button href={DELIVERY_LINKS.aiqfome} variant="ghost">
                Pedir no Aiqfome
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

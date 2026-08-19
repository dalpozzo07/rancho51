import { Button } from "@/components/ui/Button";
import { HeroParallaxImage } from "@/components/ui/HeroParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { DELIVERY_LINKS, SITE } from "@/data/site-config";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh items-end overflow-hidden bg-bg pt-20">
      <HeroParallaxImage
        src="/images/hero/hero-feijoada.png"
        alt="Marmita de feijoada completa do Rancho 51, com a churrasqueira acesa ao fundo"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-wrap px-6 pb-16 pt-32 sm:pb-24">
        <Reveal>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-amber-soft">
            {SITE.tagline}
          </span>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] text-ink sm:text-6xl">
            Sabor de verdade. Do jeito que tem que ser.
          </h1>
          <div
            aria-hidden="true"
            className="my-6 h-[2px] w-40 animate-embermove rounded-full bg-gradient-to-r from-transparent via-ember-soft to-transparent bg-[length:200%_100%]"
          />
          <p className="max-w-md text-ink-dim">
            Comida caseira, porções caprichadas e aquele sabor que faz você querer voltar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#cardapio-semana">Ver Cardápio</Button>
            <Button href={DELIVERY_LINKS.whatsapp} variant="ghost">
              Pedir Agora
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section id="o-rancho" className="border-b border-border-soft bg-bg py-24">
      <div className="mx-auto max-w-wrap px-6 text-center">
        <Reveal>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-amber">
            O Rancho
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-medium text-ink sm:text-4xl">
            Não é só comida. É o jeito Rancho 51 de fazer.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-dim">
            Prato caprichado, tempero de casa e aquele calor de churrasqueira acesa desde cedo.
            Cada porção sai como se fosse pra família — porque, no fim, é isso que a gente quer
            que você sinta.
          </p>
          <p className="mt-6 font-display text-lg italic text-amber-soft">Autêntico até nos detalhes.</p>
        </Reveal>
      </div>
    </section>
  );
}

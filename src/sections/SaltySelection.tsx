import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_SALGADOS } from "@/data/salgados";

export function SaltySelection() {
  return (
    <section className="border-b border-border-soft bg-bg py-24">
      <div className="mx-auto max-w-wrap px-6">
        <SectionHeading
          eyebrow="Os Brutos do Rancho"
          title="Salgados com atitude"
          description="Feitos e assados na casa — pra petiscar com a cerveja gelada ou fechar o pedido."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {FEATURED_SALGADOS.map((salgado, index) => (
            <Reveal key={salgado.slug} delay={index * 0.06}>
              <ProductCard product={salgado} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#cardapio-semana" variant="ghost">
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_PRODUCTS } from "@/data/featured-products";

export function FeaturedProducts() {
  return (
    <section className="border-b border-border-soft bg-bg-soft py-24">
      <div className="mx-auto max-w-wrap px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Porções" title="Pra dividir (ou não)" />
          <Button href="#cardapio-semana" variant="ghost" className="hidden sm:inline-flex">
            Ver Cardápio Completo
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-6">
          {FEATURED_PRODUCTS.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button href="#cardapio-semana" variant="ghost">
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
}

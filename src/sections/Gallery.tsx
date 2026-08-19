import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY } from "@/data/gallery";

/**
 * Composição editorial fixa (bento), não masonry algorítmica: um CSS multi-column
 * masonry deixava metade das fotos em branco (lazy-load nunca disparava dentro de
 * um container `columns-*` — bug conhecido de interação entre fragmentação de
 * colunas e o IntersectionObserver nativo). Layout manual resolve e ainda fica
 * mais parecido com uma composição de verdade do que um grid genérico.
 */
const AREAS: Record<string, string> = {
  feijoada: "feijoada",
  "batata-frita": "batata",
  "marmita-grande": "marmita",
  "coxinha-bruta": "coxinha",
  "frango-frito": "frango",
  tilapia: "tilapia",
};

/** Áreas que ocupam as duas colunas externas — precisam de um `sizes` maior que os tiles de 1 coluna. */
const WIDE_AREAS = new Set(["feijoada", "frango"]);

export function Gallery() {
  return (
    <section className="section-glow-wood border-b border-border-soft bg-bg py-24">
      <div className="mx-auto max-w-wrap px-6">
        <SectionHeading
          eyebrow="Galeria"
          title="Um pouco do Rancho"
          description="Mais fotos do salão e dos bastidores chegando em breve."
        />

        <style>{`
          .gallery-grid {
            grid-template-areas:
              "feijoada feijoada"
              "batata marmita"
              "batata coxinha"
              "frango frango"
              "tilapia tilapia";
            grid-auto-rows: 11rem;
          }
          @media (min-width: 640px) {
            .gallery-grid {
              grid-template-areas:
                "feijoada feijoada batata"
                "marmita coxinha batata"
                "frango frango tilapia";
              grid-auto-rows: 12rem;
            }
          }
        `}</style>

        <div className="gallery-grid mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((item) => {
            const area = AREAS[item.slug];
            const sizes = WIDE_AREAS.has(area)
              ? "(min-width: 1200px) 660px, (min-width: 640px) 55vw, 100vw"
              : "(min-width: 1200px) 330px, (min-width: 640px) 28vw, 50vw";
            return (
              <div
                key={item.slug}
                className="relative overflow-hidden rounded-sm border border-border-soft bg-surface"
                style={{ gridArea: area }}
              >
                <Image src={item.image} alt={item.alt} fill sizes={sizes} className="object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

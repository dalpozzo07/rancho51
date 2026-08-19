import Image from "next/image";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group border border-border-soft bg-surface transition-colors hover:border-amber-dim">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-body text-sm font-semibold text-ink">{product.name}</h3>
        {product.description && <p className="mt-1 text-xs text-ink-faint">{product.description}</p>}
      </div>
    </div>
  );
}

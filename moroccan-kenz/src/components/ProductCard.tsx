import Image from "next/image";

import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

const categoryLabels: Record<Product["category"], string> = {
  "hammam-essentials": "Hammam Essentials",
  "natural-clays": "Natural Clays",
  "body-oils": "Body Oils",
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex min-w-0 flex-col border border-[#b49a6a]/45 bg-[#f5efe4]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e6dac9]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(180,154,106,0.28)_0_18%,transparent_19%),linear-gradient(145deg,#eee5d8_0%,#d1c0a8_100%)]"
            role="img"
            aria-label={`${product.name} image placeholder`}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#75685a]">
              Moroccan Kenz
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        {product.category && (
          <p className="m-0 text-[0.65rem] uppercase tracking-[0.2em] text-[#a75d43]">
            {categoryLabels[product.category]}
          </p>
        )}
        <h2 className="m-0 font-serif text-2xl font-normal leading-tight text-[#40352b]">
          {product.name}
        </h2>
        {product.price !== undefined && (
          <p className="m-0 text-sm text-[#75685a]" aria-label={`Price ${product.price.toFixed(2)}`}>
            {product.price.toFixed(2)}
          </p>
        )}
      </div>
    </article>
  );
}

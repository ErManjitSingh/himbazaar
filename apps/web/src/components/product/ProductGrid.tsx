import { ProductCard } from "./ProductCard";
import type { Product, Seller } from "@/types";

export function ProductGrid({
  products,
  sellers = [],
}: {
  products: Product[];
  sellers?: Seller[];
}) {
  const sellerMap = Object.fromEntries(sellers.map((s) => [s._id, s]));

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          seller={sellerMap[product.sellerId]}
        />
      ))}
    </div>
  );
}

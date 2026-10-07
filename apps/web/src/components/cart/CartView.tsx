"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, sellers } from "@/data";
import { useCartStore } from "@/store/cartStore";
import { formatINR } from "@/lib/utils";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { useHydrated } from "@/hooks/useHydrated";

export function CartView() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const mounted = useHydrated();

  const enriched = useMemo(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p._id === item.productId);
        const seller = sellers.find((s) => s._id === item.sellerId);
        if (!product || !seller) return null;
        return { ...item, product, seller };
      })
      .filter(Boolean) as Array<{
      productId: string;
      sellerId: string;
      quantity: number;
      product: (typeof products)[0];
      seller: (typeof sellers)[0];
    }>;
  }, [items]);

  const groups = useMemo(() => {
    const map = new Map<string, typeof enriched>();
    for (const row of enriched) {
      const list = map.get(row.sellerId) ?? [];
      list.push(row);
      map.set(row.sellerId, list);
    }
    return Array.from(map.entries());
  }, [enriched]);

  const subtotal = enriched.reduce(
    (sum, row) => sum + row.product.price * row.quantity,
    0
  );
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 79;
  const discount = subtotal >= 2000 ? 100 : 0;
  const total = subtotal + shipping - discount;

  if (!mounted) {
    return <div className="h-40 animate-pulse rounded-lg bg-hb-cream" />;
  }

  if (enriched.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Discover authentic Himachali products and add them here."
        actionHref="/shop"
        actionLabel="Start shopping"
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="space-y-6">
        {groups.map(([sellerId, rows]) => (
          <section
            key={sellerId}
            className="rounded-lg bg-white p-4 ring-1 ring-hb-border md:p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-hb-deep">
              Seller:{" "}
              <Link
                href={`/seller/${rows[0].seller.slug}`}
                className="hover:underline"
              >
                {rows[0].seller.name}
              </Link>
            </h2>
            <ul className="mt-4 divide-y divide-hb-border">
              {rows.map((row) => (
                <li key={row.productId} className="flex gap-4 py-4">
                  <Link
                    href={`/product/${row.product.slug}`}
                    className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-hb-cream"
                  >
                    <Image
                      src={row.product.images[0]?.url ?? ""}
                      alt={row.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/product/${row.product.slug}`}
                      className="font-medium text-hb-deep hover:underline"
                    >
                      {row.product.name}
                    </Link>
                    <p className="mt-1 text-sm text-hb-muted">
                      {formatINR(row.product.price)}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <QuantitySelector
                        value={row.quantity}
                        onChange={(n) => updateQuantity(row.productId, n)}
                      />
                      <button
                        type="button"
                        className="text-xs text-hb-muted hover:text-hb-danger"
                        onClick={() => removeItem(row.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-hb-deep">
                    {formatINR(row.product.price * row.quantity)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <aside className="h-fit rounded-lg bg-hb-cream/60 p-6 ring-1 ring-hb-border lg:sticky lg:top-28">
        <h2 className="font-serif text-xl text-hb-deep">Order summary</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-hb-muted">Subtotal</dt>
            <dd>{formatINR(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-hb-muted">Shipping</dt>
            <dd>{shipping === 0 ? "Free" : formatINR(shipping)}</dd>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-hb-natural">
              <dt>Discount</dt>
              <dd>-{formatINR(discount)}</dd>
            </div>
          )}
          <div className="flex justify-between border-t border-hb-border pt-3 text-base font-semibold">
            <dt>Total</dt>
            <dd>{formatINR(total)}</dd>
          </div>
        </dl>
        <Link href="/checkout" className="mt-6 block">
          <Button
            type="button"
            className="w-full"
            size="lg"
            onClick={() => trackEvent("begin_checkout", { value: total })}
          >
            Proceed to checkout
          </Button>
        </Link>
        <p className="mt-3 text-center text-xs text-hb-muted">
          Free shipping above {formatINR(FREE_SHIPPING_THRESHOLD)}
        </p>
      </aside>
    </div>
  );
}

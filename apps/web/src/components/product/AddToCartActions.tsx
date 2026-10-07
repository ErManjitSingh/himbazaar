"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export function AddToCartActions({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [deliveryMsg, setDeliveryMsg] = useState<string | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const toggleWish = useWishlistStore((s) => s.toggle);
  const wished = useWishlistStore((s) => s.productIds.includes(product._id));
  const showToast = useUIStore((s) => s.showToast);

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <QuantitySelector value={qty} onChange={setQty} max={Math.min(10, product.stock)} />
        <Button
          type="button"
          size="lg"
          className="min-w-[160px] flex-1 sm:flex-none"
          onClick={() => {
            addItem(product._id, product.sellerId, qty);
            showToast("Added to cart");
          }}
          disabled={product.stock <= 0}
        >
          Add to cart
        </Button>
        <Link href="/checkout" className="flex-1 sm:flex-none">
          <Button
            type="button"
            variant="gold"
            size="lg"
            className="w-full min-w-[140px]"
            onClick={() => addItem(product._id, product.sellerId, qty)}
          >
            Buy now
          </Button>
        </Link>
        <button
          type="button"
          aria-label="Wishlist"
          onClick={() => {
            toggleWish(product._id);
            showToast(wished ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className="flex h-12 w-12 items-center justify-center rounded-md border border-hb-border hover:bg-hb-cream"
        >
          <Heart className={cn("h-5 w-5", wished && "fill-hb-danger text-hb-danger")} />
        </button>
      </div>

      <div className="rounded-md border border-hb-border p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-hb-muted">
          Delivery checker
        </p>
        <form
          className="mt-2 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!/^\d{6}$/.test(pincode)) {
              setDeliveryMsg("Enter a valid 6-digit PIN code");
              return;
            }
            setDeliveryMsg(
              `Delivering to ${pincode} in 4–7 days. Free shipping above ₹999.`
            );
          }}
        >
          <input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter PIN code"
            className="h-10 flex-1 rounded-md border border-hb-border px-3 text-sm"
            inputMode="numeric"
            maxLength={6}
            aria-label="PIN code"
          />
          <Button type="submit" variant="secondary" size="sm" className="h-10">
            Check
          </Button>
        </form>
        {deliveryMsg && (
          <p className="mt-2 text-sm text-hb-muted">{deliveryMsg}</p>
        )}
      </div>
    </div>
  );
}

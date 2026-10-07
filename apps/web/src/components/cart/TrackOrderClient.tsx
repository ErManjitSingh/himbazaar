"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { OrderTimeline } from "@/components/ui/OrderTimeline";
import { mockOrders } from "@/services/orderService";
import type { Order } from "@/types";

export function TrackOrderClient() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("order") ?? "";
  const [orderNumber, setOrderNumber] = useState(preset);
  const [queried, setQueried] = useState(preset);
  const [error, setError] = useState<string | null>(null);

  const order: Order | null = useMemo(() => {
    if (!queried.trim()) return null;
    return (
      mockOrders.find(
        (o) => o.orderNumber.toLowerCase() === queried.trim().toLowerCase()
      ) ?? null
    );
  }, [queried]);

  return (
    <div className="space-y-6">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          const value = orderNumber.trim();
          setQueried(value);
          const found =
            mockOrders.find(
              (o) => o.orderNumber.toLowerCase() === value.toLowerCase()
            ) ?? null;
          setError(found ? null : "Order not found. Try HB-2025-1001");
        }}
      >
        <Input
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="e.g. HB-2025-1001"
          aria-label="Order number"
        />
        <Button type="submit" className="shrink-0">
          Track
        </Button>
      </form>

      {error && !order && <p className="text-sm text-hb-danger">{error}</p>}

      {order && (
        <div className="rounded-lg bg-white p-6 ring-1 ring-hb-border">
          <p className="text-sm text-hb-muted">Order {order.orderNumber}</p>
          <p className="mt-1 font-medium capitalize text-hb-deep">
            Status: {order.status.replaceAll("_", " ")}
          </p>
          {order.estimatedDelivery && (
            <p className="mt-1 text-sm text-hb-muted">
              Est. delivery {order.estimatedDelivery}
            </p>
          )}
          <div className="mt-8">
            <OrderTimeline steps={order.timeline} />
          </div>
        </div>
      )}
    </div>
  );
}

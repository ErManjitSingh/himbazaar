import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getOrders } from "@/services";
import { formatINR } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Orders",
  path: "/account/orders",
  noIndex: true,
});

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep">Your orders</h1>
      <ul className="mt-8 space-y-4">
        {orders.map((order) => (
          <li
            key={order._id}
            className="rounded-lg bg-white p-5 ring-1 ring-hb-border"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-medium text-hb-deep">{order.orderNumber}</p>
                <p className="mt-1 text-sm text-hb-muted">
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    dateStyle: "medium",
                  })}{" "}
                  · {order.items.length} items · {formatINR(order.total)}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-hb-gold">
                  {order.status.replaceAll("_", " ")}
                </p>
              </div>
              <Link
                href={`/track-order?order=${order.orderNumber}`}
                className="text-sm font-medium text-hb-deep underline-offset-4 hover:underline"
              >
                Track order →
              </Link>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-hb-muted">
              {order.items.map((item) => (
                <li key={item.productId}>
                  {item.productName} × {item.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

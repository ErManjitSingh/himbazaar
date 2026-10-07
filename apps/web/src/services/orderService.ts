import type { Address, Order } from "@/types";

/** Mock orders for account / track-order UI — Future: GET /api/orders */

const mockAddress: Address = {
  _id: "addr-1",
  label: "Home",
  fullName: "Priya Sharma",
  phone: "9876543210",
  line1: "42 Cedar Lane, Sector 17",
  city: "Chandigarh",
  state: "Chandigarh",
  pincode: "160017",
  isDefault: true,
};

export const mockOrders: Order[] = [
  {
    _id: "ord-1001",
    orderNumber: "HB-2025-1001",
    items: [
      {
        productId: "prod-a2-ghee",
        productName: "A2 Desi Cow Ghee",
        productImage: "",
        sellerId: "sel-himalayan-naturals",
        sellerName: "Himalayan Naturals",
        quantity: 1,
        price: 749,
      },
      {
        productId: "prod-raw-honey",
        productName: "Himachali Raw Honey",
        productImage: "",
        sellerId: "sel-himalayan-naturals",
        sellerName: "Himalayan Naturals",
        quantity: 2,
        price: 449,
      },
    ],
    subtotal: 1647,
    shipping: 0,
    discount: 50,
    total: 1597,
    status: "shipped",
    timeline: [
      {
        status: "placed",
        label: "Order placed",
        completedAt: "2025-09-28T10:00:00.000Z",
      },
      {
        status: "confirmed",
        label: "Confirmed",
        completedAt: "2025-09-28T11:20:00.000Z",
      },
      {
        status: "packed",
        label: "Packed",
        completedAt: "2025-09-29T09:00:00.000Z",
      },
      {
        status: "shipped",
        label: "Shipped",
        completedAt: "2025-09-30T14:00:00.000Z",
        isCurrent: true,
      },
      { status: "out_for_delivery", label: "Out for delivery" },
      { status: "delivered", label: "Delivered" },
    ],
    shippingAddress: mockAddress,
    paymentMethod: "UPI",
    createdAt: "2025-09-28T10:00:00.000Z",
    estimatedDelivery: "2025-10-05",
  },
  {
    _id: "ord-1002",
    orderNumber: "HB-2025-1002",
    items: [
      {
        productId: "prod-kullu-shawl",
        productName: "Handwoven Kullu Shawl",
        productImage: "",
        sellerId: "sel-kullu-crafts",
        sellerName: "Kullu Crafts",
        quantity: 1,
        price: 1899,
      },
    ],
    subtotal: 1899,
    shipping: 0,
    discount: 0,
    total: 1899,
    status: "delivered",
    timeline: [
      {
        status: "placed",
        label: "Order placed",
        completedAt: "2025-09-01T10:00:00.000Z",
      },
      {
        status: "confirmed",
        label: "Confirmed",
        completedAt: "2025-09-01T11:00:00.000Z",
      },
      {
        status: "packed",
        label: "Packed",
        completedAt: "2025-09-02T09:00:00.000Z",
      },
      {
        status: "shipped",
        label: "Shipped",
        completedAt: "2025-09-03T14:00:00.000Z",
      },
      {
        status: "out_for_delivery",
        label: "Out for delivery",
        completedAt: "2025-09-06T08:00:00.000Z",
      },
      {
        status: "delivered",
        label: "Delivered",
        completedAt: "2025-09-06T16:30:00.000Z",
        isCurrent: true,
      },
    ],
    shippingAddress: mockAddress,
    paymentMethod: "Card",
    createdAt: "2025-09-01T10:00:00.000Z",
  },
];

export async function getOrders(): Promise<Order[]> {
  return mockOrders;
}

export async function getOrderByNumber(
  orderNumber: string
): Promise<Order | null> {
  return (
    mockOrders.find(
      (o) => o.orderNumber.toLowerCase() === orderNumber.toLowerCase()
    ) ?? null
  );
}

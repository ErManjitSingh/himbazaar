"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

const steps = ["Address", "Delivery", "Payment", "Review"] as const;
const payments = ["UPI", "Cards", "Net Banking", "Wallets", "Cash on Delivery"];

export function CheckoutForm() {
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState("UPI");
  const clearCart = useCartStore((s) => s.clearCart);
  const showToast = useUIStore((s) => s.showToast);
  const router = useRouter();

  return (
    <div className="mx-auto max-w-2xl">
      <ol className="mb-8 flex flex-wrap gap-2">
        {steps.map((label, i) => (
          <li key={label}>
            <button
              type="button"
              onClick={() => setStep(i)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
                i === step
                  ? "bg-hb-deep text-white"
                  : i < step
                    ? "bg-hb-cream text-hb-deep"
                    : "bg-white text-hb-muted ring-1 ring-hb-border"
              )}
            >
              {i + 1}. {label}
            </button>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-hb-border">
          <h2 className="font-medium text-hb-deep">Delivery address</h2>
          <Input placeholder="Full name" defaultValue="Priya Sharma" />
          <Input placeholder="Phone" defaultValue="9876543210" />
          <Input placeholder="Address line 1" defaultValue="42 Cedar Lane" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input placeholder="City" defaultValue="Chandigarh" />
            <Input placeholder="PIN code" defaultValue="160017" />
          </div>
          <Button type="button" onClick={() => setStep(1)}>
            Continue
          </Button>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-hb-border">
          <h2 className="font-medium text-hb-deep">Delivery option</h2>
          {["Standard (4–7 days) — Free above ₹999", "Express (2–3 days) — ₹149"].map(
            (opt, i) => (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-3 rounded-md border border-hb-border p-3"
              >
                <input type="radio" name="delivery" defaultChecked={i === 0} />
                <span className="text-sm">{opt}</span>
              </label>
            )
          )}
          <Button type="button" onClick={() => setStep(2)}>
            Continue
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-hb-border">
          <h2 className="font-medium text-hb-deep">Payment</h2>
          <p className="text-xs text-hb-muted">
            UI only — Razorpay / UPI integration comes later.
          </p>
          {payments.map((opt) => (
            <label
              key={opt}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-md border p-3",
                payment === opt ? "border-hb-deep bg-hb-cream/50" : "border-hb-border"
              )}
            >
              <input
                type="radio"
                name="payment"
                checked={payment === opt}
                onChange={() => setPayment(opt)}
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
          <Button type="button" onClick={() => setStep(3)}>
            Continue
          </Button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 rounded-lg bg-white p-6 ring-1 ring-hb-border">
          <h2 className="font-medium text-hb-deep">Review & place order</h2>
          <p className="text-sm text-hb-muted">
            Paying with <strong className="text-hb-deep">{payment}</strong>. This
            is a mock order — no real charge will be made.
          </p>
          <Button
            type="button"
            size="lg"
            className="w-full"
            onClick={() => {
              clearCart();
              showToast("Order placed successfully (mock)");
              router.push("/account/orders");
            }}
          >
            Place order
          </Button>
        </div>
      )}
    </div>
  );
}

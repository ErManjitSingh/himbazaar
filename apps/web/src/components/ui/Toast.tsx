"use client";

import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export function Toast() {
  const toast = useUIStore((s) => s.toast);
  if (!toast) return null;

  return (
    <div
      role="status"
      className={cn(
        "fixed bottom-24 left-1/2 z-[100] -translate-x-1/2 rounded-md px-4 py-3 text-sm shadow-lg md:bottom-8",
        toast.type === "error"
          ? "bg-hb-danger text-white"
          : toast.type === "info"
            ? "bg-hb-forest text-white"
            : "bg-hb-deep text-white"
      )}
    >
      {toast.message}
    </div>
  );
}

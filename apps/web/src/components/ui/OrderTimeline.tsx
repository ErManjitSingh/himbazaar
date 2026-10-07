import { cn } from "@/lib/utils";
import type { OrderTimelineStep } from "@/types";
import { Check } from "lucide-react";

export function OrderTimeline({ steps }: { steps: OrderTimelineStep[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, i) => {
        const done = Boolean(step.completedAt);
        const current = Boolean(step.isCurrent);
        return (
          <li key={step.status} className="relative flex gap-4 pb-8 last:pb-0">
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "absolute left-[15px] top-8 h-[calc(100%-16px)] w-px",
                  done ? "bg-hb-natural" : "bg-hb-border"
                )}
                aria-hidden
              />
            )}
            <span
              className={cn(
                "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2",
                done || current
                  ? "border-hb-deep bg-hb-deep text-white"
                  : "border-hb-border bg-white text-transparent"
              )}
            >
              {(done || current) && <Check className="h-4 w-4" />}
            </span>
            <div className="pt-1">
              <p
                className={cn(
                  "font-medium",
                  done || current ? "text-hb-deep" : "text-hb-muted"
                )}
              >
                {step.label}
              </p>
              {step.completedAt && (
                <p className="mt-0.5 text-xs text-hb-muted">
                  {new Date(step.completedAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              )}
              {step.description && (
                <p className="mt-1 text-sm text-hb-muted">{step.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Analytics-ready event layer — wire GA/GTM/Meta later without rewriting UI */

export type AnalyticsEvent =
  | "view_item"
  | "add_to_cart"
  | "remove_from_cart"
  | "begin_checkout"
  | "purchase"
  | "search"
  | "wishlist_add"
  | "signup"
  | "seller_view";

type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  // Future: window.gtag / dataLayer / fbq
  if (process.env.NODE_ENV === "development") {
    console.debug(`[analytics] ${event}`, payload);
  }

  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };

  w.dataLayer?.push({ event, ...payload });
  w.gtag?.("event", event, payload);
}

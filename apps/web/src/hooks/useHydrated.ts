"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/** True after client hydration — safe for Zustand persist reads */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

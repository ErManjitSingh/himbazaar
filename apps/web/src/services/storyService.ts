import { stories } from "@/data";
import type { Story } from "@/types";

const delay = (ms = 40) => new Promise((r) => setTimeout(r, ms));

/** Future: GET /api/stories */
export async function getStories(limit?: number): Promise<Story[]> {
  await delay();
  const sorted = [...stories].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}

/** Future: GET /api/stories/:slug */
export async function getStoryBySlug(slug: string): Promise<Story | null> {
  await delay();
  return stories.find((s) => s.slug === slug) ?? null;
}

import { StoryCard } from "@/components/stories/StoryCard";
import { buildMetadata } from "@/lib/seo";
import { getStories } from "@/services";

export const metadata = buildMetadata({
  title: "Stories from Himachal",
  description:
    "Editorial stories on Himachali food, craft, farmers and mountain life.",
  path: "/stories",
});

export default async function StoriesPage() {
  const stories = await getStories();

  return (
    <div className="container-hb py-8 md:py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hb-gold">
        Editorial
      </p>
      <h1 className="mt-2 font-serif text-3xl text-hb-deep md:text-5xl">
        Stories from Himachal
      </h1>
      <p className="mt-3 max-w-xl text-hb-muted">
        Every product has a story. Meet the people, places and traditions behind
        them.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
}

import type { Story } from "@/types";
import { images } from "./images";

export const stories: Story[] = [
  {
    _id: "story-1",
    title: "Why Himachali Ghee Tastes Different",
    slug: "why-himachali-ghee-tastes-different",
    excerpt:
      "Altitude, grass-fed cattle and the bilona method give mountain ghee its unmistakable nutty depth.",
    content:
      "In Himachal's villages, ghee is still made slowly. Milk from desi cows is cultured, churned by hand, and clarified with patience. The result is not just fat for cooking — it is aroma, memory and ritual in a jar.\n\nWhat makes it different is the feed, the altitude, and the refusal to rush. That is why Himachali ghee tastes like the mountains themselves.",
    category: "Food",
    image: { url: images.story1, alt: "Himachali ghee" },
    author: "Meera Thakur",
    readTime: 5,
    relatedProductIds: ["prod-a2-ghee", "prod-ghee-1l"],
    relatedRegionId: "reg-kullu",
    relatedSellerId: "sel-himalayan-naturals",
    publishedAt: "2025-08-12T00:00:00.000Z",
  },
  {
    _id: "story-2",
    title: "5 Traditional Foods You Must Try in Himachal",
    slug: "5-traditional-foods-you-must-try-in-himachal",
    excerpt:
      "From siddu to chukh, these dishes define Himachali hospitality.",
    content:
      "Himachali food is hearty, seasonal and deeply regional. Siddu steamed with ghee, fiery chukh with every meal, creamy Kinnauri rajma, forest honey on warm rotis, and Kangra tea at dusk — these are the flavours that welcome you home.",
    category: "Culture",
    image: { url: images.story2, alt: "Traditional Himachali foods" },
    author: "Arjun Negi",
    readTime: 6,
    relatedProductIds: ["prod-chukh", "prod-siddu-mix", "prod-kinnauri-rajma"],
    publishedAt: "2025-07-28T00:00:00.000Z",
  },
  {
    _id: "story-3",
    title: "The Story Behind Kinnauri Rajma",
    slug: "the-story-behind-kinnauri-rajma",
    excerpt:
      "Small red beans grown in cold desert soil — why Kinnauri rajma is prized across India.",
    content:
      "Kinnaur's short summers and cold nights create rajma that cooks creamy yet keeps its shape. Farmers in Kalpa and beyond still grow it as a heritage crop. On HimBazaar, every pack traces back to those orchards and terraces.",
    category: "Food",
    image: { url: images.story3, alt: "Kinnauri rajma" },
    author: "Priya Chauhan",
    readTime: 4,
    relatedProductIds: ["prod-kinnauri-rajma"],
    relatedRegionId: "reg-kinnaur",
    relatedSellerId: "sel-kinnaur-harvest",
    publishedAt: "2025-06-15T00:00:00.000Z",
  },
  {
    _id: "story-4",
    title: "How Kullu Shawls Are Made",
    slug: "how-kullu-shawls-are-made",
    excerpt:
      "From fleece to loom — the patient craft behind every geometric border.",
    content:
      "Kullu shawls begin with wool, dyed in classic colours and woven on pit looms. Borders carry motifs that identify villages and weavers. Buying one is supporting a living craft, not a factory line.",
    category: "Craft",
    image: { url: images.story4, alt: "Kullu shawl weaving" },
    author: "Ananya Sharma",
    readTime: 7,
    relatedProductIds: ["prod-kullu-shawl", "prod-pattu"],
    relatedRegionId: "reg-kullu",
    relatedSellerId: "sel-kullu-crafts",
    publishedAt: "2025-05-20T00:00:00.000Z",
  },
  {
    _id: "story-5",
    title: "Life of a Himalayan Farmer",
    slug: "life-of-a-himalayan-farmer",
    excerpt:
      "Seasons, terraces and the quiet rhythm of mountain agriculture.",
    content:
      "Farming in Himachal means working with steep land and short seasons. Families grow what the altitude allows — apples, rajma, millets, herbs — and sell what they can. HimBazaar exists so that story reaches your table intact.",
    category: "People",
    image: { url: images.story5, alt: "Himalayan farmer" },
    author: "Rohit Verma",
    readTime: 5,
    relatedProductIds: ["prod-kinnauri-rajma", "prod-millet"],
    publishedAt: "2025-04-10T00:00:00.000Z",
  },
  {
    _id: "story-6",
    title: "Inside Kangra's Tea Gardens",
    slug: "inside-kangras-tea-gardens",
    excerpt:
      "Palampur's misty gardens produce some of India's most delicate teas.",
    content:
      "Kangra tea is lighter than Assam, more floral than Darjeeling's boldest cups. Small estates still process leaf with care. A morning pour connects you to valleys that have grown tea for generations.",
    category: "Food",
    image: { url: images.story6, alt: "Kangra tea gardens" },
    author: "Neha Kapoor",
    readTime: 5,
    relatedProductIds: ["prod-kangra-tea", "prod-kangra-black-tea"],
    relatedRegionId: "reg-kangra",
    publishedAt: "2025-03-22T00:00:00.000Z",
  },
  {
    _id: "story-7",
    title: "The Purity of Himalayan Honey",
    slug: "the-purity-of-himalayan-honey",
    excerpt:
      "Why raw mountain honey crystallises — and why that is a good thing.",
    content:
      "Raw honey from Kullu and Mandi forests is never heated into glass-smooth syrup. It crystallises, carries pollen, and tastes of the flowers bees visited. That is purity you can see and taste.",
    category: "Food",
    image: { url: images.story7, alt: "Himalayan honey" },
    author: "Meera Thakur",
    readTime: 4,
    relatedProductIds: ["prod-raw-honey", "prod-forest-honey"],
    publishedAt: "2025-02-18T00:00:00.000Z",
  },
  {
    _id: "story-8",
    title: "Every Valley Has a Story",
    slug: "every-valley-has-a-story",
    excerpt:
      "From Spiti's seabuckthorn to Chamba's chukh — why region matters.",
    content:
      "Himachal is not one flavour. Spiti is tart and high. Kinnaur is nutty and sweet. Chamba is fiery. Kullu is warm wool and honey. Exploring by region is how you taste the state honestly.",
    category: "Travel",
    image: { url: images.story8, alt: "Himachal valleys" },
    author: "Arjun Negi",
    readTime: 6,
    relatedProductIds: ["prod-seabuckthorn", "prod-chukh"],
    publishedAt: "2025-01-30T00:00:00.000Z",
  },
  {
    _id: "story-9",
    title: "Meet the Woodworkers of Banjar",
    slug: "meet-the-woodworkers-of-banjar",
    excerpt:
      "Hand-carved bowls and utensils from a quiet Kullu workshop.",
    content:
      "In Banjar, woodworkers still shape utensils by hand. Grain, weight and finish matter. Each piece is slightly different — because people made it, not machines.",
    category: "Craft",
    image: { url: images.story9, alt: "Woodworkers of Banjar" },
    author: "Ananya Sharma",
    readTime: 5,
    relatedProductIds: ["prod-wooden-craft", "prod-wood-spatula"],
    relatedSellerId: "sel-pahadi-wood",
    publishedAt: "2024-12-12T00:00:00.000Z",
  },
  {
    _id: "story-10",
    title: "Winter in the Himalayas, Warmth in Your Home",
    slug: "winter-in-the-himalayas-warmth-in-your-home",
    excerpt:
      "How woolens, ghee and spice travel from cold valleys to your table.",
    content:
      "When snow closes high passes, the products of summer travel farther. Shawls, ghee and spice become gifts of warmth — a way to carry the mountains into city winters.",
    category: "Lifestyle",
    image: { url: images.story10, alt: "Himalayan winter" },
    author: "Priya Chauhan",
    readTime: 4,
    relatedProductIds: ["prod-kullu-shawl", "prod-a2-ghee"],
    publishedAt: "2024-11-05T00:00:00.000Z",
  },
  {
    _id: "story-11",
    title: "Chamba Chukh: Heat with Heritage",
    slug: "chamba-chukh-heat-with-heritage",
    excerpt:
      "The fiery pickle that sits on every serious Himachali thali.",
    content:
      "Chukh is more than chilli. It is pounded with mustard oil and local technique until it becomes a condiment of identity. A spoonful transforms daal, rice and rotis.",
    category: "Food",
    image: { url: images.story11, alt: "Chamba chukh" },
    author: "Rohit Verma",
    readTime: 3,
    relatedProductIds: ["prod-chukh"],
    relatedRegionId: "reg-chamba",
    publishedAt: "2024-10-14T00:00:00.000Z",
  },
  {
    _id: "story-12",
    title: "Gifting the Mountains",
    slug: "gifting-the-mountains",
    excerpt:
      "How to choose Himachali hampers that feel personal, not generic.",
    content:
      "The best gifts tell origin stories. A starter box for the curious, a wellness box for the mindful, a premium box when you want craft and pantry together. Choose by the person — not by the sparkle.",
    category: "Gifting",
    image: { url: images.story12, alt: "Himachali gifting" },
    author: "Neha Kapoor",
    readTime: 4,
    relatedProductIds: [
      "prod-hamper-starter",
      "prod-hamper-premium",
      "prod-hamper-wellness",
    ],
    publishedAt: "2024-09-20T00:00:00.000Z",
  },
];

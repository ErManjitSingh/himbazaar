export const SITE_NAME = "HimBazaar";
export const SITE_TAGLINE =
  "India's marketplace for authentic Himalayan & Himachali products.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const FREE_SHIPPING_THRESHOLD = 999;

export const ANNOUNCEMENT = {
  text: "Authentic products from the Himalayas • Free shipping above ₹999",
  href: "/shop",
};

export const NAV_ITEMS = [
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop", description: "Browse the full marketplace" },
      { label: "Best Sellers", href: "/shop?sort=rating", description: "Most loved across India" },
      { label: "New Arrivals", href: "/shop?sort=newest", description: "Fresh from the mountains" },
      { label: "Gift Hampers", href: "/collection/himachali-gifting", description: "Curated boxes" },
    ],
  },
  {
    label: "Food & Pantry",
    href: "/category/food-pantry",
    children: [
      { label: "Ghee & Dairy", href: "/category/ghee-dairy" },
      { label: "Honey", href: "/category/honey" },
      { label: "Pickles & Chutneys", href: "/category/pickles-chutneys" },
      { label: "Spices", href: "/category/spices" },
      { label: "Tea & Beverages", href: "/category/tea-beverages" },
      { label: "Dry Fruits", href: "/category/dry-fruits" },
    ],
  },
  {
    label: "Natural & Wellness",
    href: "/category/natural-wellness",
    children: [
      { label: "Herbal Products", href: "/category/natural-wellness" },
      { label: "Himalayan Wellness", href: "/collection/himalayan-wellness" },
    ],
  },
  {
    label: "Handicrafts",
    href: "/category/handicrafts",
    children: [
      { label: "Wool & Shawls", href: "/category/wool-shawls" },
      { label: "Home Decor", href: "/category/home-decor" },
      { label: "Handmade", href: "/category/handicrafts" },
    ],
  },
  {
    label: "Himachal Specials",
    href: "/collection/taste-of-himachal",
    children: [
      { label: "Taste of Himachal", href: "/collection/taste-of-himachal" },
      { label: "Made in Kullu", href: "/collection/made-in-kullu" },
      { label: "Kinnauri Favourites", href: "/collection/kinnauri-favourites" },
      { label: "Kangra Heritage", href: "/collection/kangra-heritage" },
      { label: "Spiti Essentials", href: "/collection/spiti-essentials" },
    ],
  },
  {
    label: "Gifts",
    href: "/category/gifts",
    children: [
      { label: "Gift Hampers", href: "/collection/himachali-gifting" },
      { label: "Premium Boxes", href: "/shop?collection=himachali-gifting" },
    ],
  },
  {
    label: "Discover Himachal",
    href: "/region/kullu",
    children: [
      { label: "Explore by Region", href: "/region/kullu" },
      { label: "Meet the Makers", href: "/sell-on-himbazaar" },
      { label: "Stories from Himachal", href: "/stories" },
      { label: "Sell on HimBazaar", href: "/sell-on-himbazaar" },
    ],
  },
] as const;

export const WHY_HIMBAZAAR = [
  {
    title: "Authentic Himalayan Products",
    description: "Sourced from valleys, farms and workshops across Himachal Pradesh.",
  },
  {
    title: "Verified Local Sellers",
    description: "Every maker is reviewed so you buy with confidence.",
  },
  {
    title: "Made With Tradition",
    description: "Recipes and crafts passed down through generations.",
  },
  {
    title: "Quality Checked",
    description: "Careful curation for purity, freshness and craftsmanship.",
  },
  {
    title: "Secure Payments",
    description: "UPI, cards, net banking and COD — protected checkout.",
  },
  {
    title: "Reliable Delivery",
    description: "Packed with care and shipped across India.",
  },
] as const;

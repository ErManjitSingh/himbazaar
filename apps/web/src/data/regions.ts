import type { Region } from "@/types";
import { images } from "./images";

export const regions: Region[] = [
  {
    _id: "reg-shimla",
    name: "Shimla",
    slug: "shimla",
    description:
      "Colonial hills, apple orchards and classic Himachali pantry staples from the capital region.",
    shortDescription: "Orchards, tea and hill-station craft",
    image: { url: images.landscapeShimla, alt: "Shimla hills" },
    district: "Shimla",
    productCount: 5,
    highlights: ["Apple products", "Hill pantry", "Heritage crafts"],
  },
  {
    _id: "reg-kullu",
    name: "Kullu",
    slug: "kullu",
    description:
      "Famous for handwoven shawls, fruit preserves and warm hospitality of the Beas valley.",
    shortDescription: "Shawls, honey and valley flavours",
    image: { url: images.landscapeKullu, alt: "Kullu valley" },
    district: "Kullu",
    productCount: 8,
    highlights: ["Kullu shawls", "Raw honey", "Wooden craft"],
  },
  {
    _id: "reg-manali",
    name: "Manali",
    slug: "manali",
    description:
      "High-altitude produce, woolens and mountain food from the upper Beas region.",
    shortDescription: "Alpine produce and woolens",
    image: { url: images.landscapeManali, alt: "Manali mountains" },
    district: "Kullu",
    productCount: 4,
    highlights: ["Woolens", "Mountain herbs", "Local preserves"],
  },
  {
    _id: "reg-kangra",
    name: "Kangra",
    slug: "kangra",
    description:
      "Home of Kangra tea gardens, mustard oil traditions and soft valley landscapes.",
    shortDescription: "Tea gardens and valley heritage",
    image: { url: images.landscapeKangra, alt: "Kangra valley" },
    district: "Kangra",
    productCount: 6,
    highlights: ["Kangra tea", "Mustard oil", "Traditional foods"],
  },
  {
    _id: "reg-kinnaur",
    name: "Kinnaur",
    slug: "kinnaur",
    description:
      "Cold-desert flavours — red rajma, apricots, chilgoza and rugged mountain kitchens.",
    shortDescription: "Rajma, apricots and cold-desert food",
    image: { url: images.landscapeKinnaur, alt: "Kinnaur landscape" },
    district: "Kinnaur",
    productCount: 7,
    highlights: ["Kinnauri rajma", "Apricots", "Dry fruits"],
  },
  {
    _id: "reg-chamba",
    name: "Chamba",
    slug: "chamba",
    description:
      "Chukh, rumal embroidery and pastoral flavours from one of Himachal's oldest towns.",
    shortDescription: "Chukh and Chamba crafts",
    image: { url: images.landscapeChamba, alt: "Chamba hills" },
    district: "Chamba",
    productCount: 5,
    highlights: ["Himachali chukh", "Embroidery", "Dairy"],
  },
  {
    _id: "reg-spiti",
    name: "Spiti",
    slug: "spiti",
    description:
      "High-desert essentials — seabuckthorn, barley and crafts shaped by extreme altitude.",
    shortDescription: "Seabuckthorn and Spiti essentials",
    image: { url: images.landscapeSpiti, alt: "Spiti valley" },
    district: "Lahaul and Spiti",
    productCount: 4,
    highlights: ["Seabuckthorn", "Barley", "Wool"],
  },
  {
    _id: "reg-mandi",
    name: "Mandi",
    slug: "mandi",
    description:
      "Temple town flavours, forest honey and everyday Himachali staples.",
    shortDescription: "Forest honey and staples",
    image: { url: images.landscapeMandi, alt: "Mandi region" },
    district: "Mandi",
    productCount: 4,
    highlights: ["Forest honey", "Pickles", "Grains"],
  },
  {
    _id: "reg-sirmaur",
    name: "Sirmaur",
    slug: "sirmaur",
    description:
      "Ginger, turmeric and organic produce from southern Himachal farms.",
    shortDescription: "Organic roots and spices",
    image: { url: images.landscapeSirmaur, alt: "Sirmaur countryside" },
    district: "Sirmaur",
    productCount: 3,
    highlights: ["Ginger", "Turmeric", "Organic produce"],
  },
  {
    _id: "reg-lahaul",
    name: "Lahaul",
    slug: "lahaul",
    description:
      "Cold-climate crops, woolens and rare mountain ingredients from Lahaul.",
    shortDescription: "Cold-climate mountain produce",
    image: { url: images.landscapeLahaul, alt: "Lahaul mountains" },
    district: "Lahaul and Spiti",
    productCount: 3,
    highlights: ["Wool", "Herbs", "Cold crops"],
  },
];

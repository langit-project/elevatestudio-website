export const IMAGE_SIZES = {
  preview: { w: 360, h: 450, label: "Preview (4:5)" },
  thumbnail: { w: 600, h: 750, label: "Thumbnail (4:5)" },
  detail: { w: 800, h: 1000, label: "Detail Hero (4:5)" },
} as const;

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: "visual-production", title: "Visual Production", category: "production" },
  { id: "event-documentation", title: "Event Documentation", category: "event" },
  { id: "motion-design", title: "Motion & Visual Design", category: "design" },
  { id: "micro-event", title: "Micro Event Execution", category: "execution" },
];

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
}

export const allProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: toSlug("Brand Story Video"),
    title: "Brand Story Video",
    category: "production",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
  },
  {
    id: "2",
    slug: toSlug("Corporate Seminar"),
    title: "Corporate Seminar",
    category: "event",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
  },
  {
    id: "3",
    slug: toSlug("Motion Identity"),
    title: "Motion Identity",
    category: "design",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
  },
  {
    id: "4",
    slug: toSlug("Startup Workshop"),
    title: "Startup Workshop",
    category: "execution",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
  },
  {
    id: "5",
    slug: toSlug("Product Showcase"),
    title: "Product Showcase",
    category: "production",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-5.svg",
  },
  {
    id: "6",
    slug: toSlug("Annual Gathering"),
    title: "Annual Gathering",
    category: "event",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg",
  },
];

export const categories = [
  { id: "all", name: "All Work" },
  { id: "production", name: "Visual Production" },
  { id: "event", name: "Event Documentation" },
  { id: "design", name: "Motion & Visual Design" },
  { id: "execution", name: "Micro Event Execution" },
];

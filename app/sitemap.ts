import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/mentions-legales", "/politique-de-confidentialite"];

  return pages.map((path) => ({
    url: `https://assistann.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.4,
  }));
}

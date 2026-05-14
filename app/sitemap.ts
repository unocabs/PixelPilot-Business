import type { MetadataRoute } from "next";
import { BUSINESS } from "./_lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;
  const routes = ["", "/menu", "/story", "/gallery", "/visit", "/book", "/contact"];
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}

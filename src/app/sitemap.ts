import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/ritmos", "/membresias", "/salon", "/preguntas", "/contacto"];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-08-28"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/membresias" || route === "/ritmos" ? 0.9 : 0.7,
  }));
}

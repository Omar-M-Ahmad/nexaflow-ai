import type { MetadataRoute } from "next";

const baseUrl = "https://nexaflow-ai.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/en", "/ar", "/en/signin", "/ar/signin", "/en/signup", "/ar/signup"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("signin") || route.includes("signup") ? "monthly" : "weekly",
    priority: route === "/en" || route === "/ar" ? 1 : 0.7
  }));
}

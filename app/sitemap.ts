import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://andres-portfolio-tau.vercel.app";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
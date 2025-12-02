import { projectsSource } from "@/lib/source";
import type { ProjectItemType } from "@/features/home/types/ProjectItem";

/**
 * Get featured apps from projectsSource, filtered by weight.
 * Projects with higher weight values appear first.
 */
export function getFeaturedApps(): ProjectItemType[] {
  // Build flat list of projects from MDX source (runs on server)
  const allProjects = projectsSource
    .getPages()
    .map(({ data, slugs }, index) => {
      const d = (data ?? {}) as {
        title?: string;
        date?: string;
        description?: string;
        imageUrl?: string;
        imageAlt?: string;
        github?: string;
        liveDemo?: string;
        weight?: number;
      };
      return {
        id: index,
        slug: Array.isArray(slugs) ? slugs[slugs.length - 1] : "",
        title: d.title ?? "",
        date: d.date,
        description: d.description ?? "",
        imageUrl: d.imageUrl ?? "/images/app-placeholder.jpg",
        imageAlt: d.imageAlt ?? d.title ?? "Project",
        github: d.github,
        liveDemo: d.liveDemo,
        weight: d.weight,
      };
    });

  // Filter projects that have a weight property and sort by weight (heavier first)
  const featuredApps = allProjects
    .filter((p) => p.weight !== undefined && p.weight !== null)
    .sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));

  return featuredApps;
}

import { experienceSource } from "./experienceSource";
import { projectsSource } from "@/features/projects/data/projectSource";
import type { ProjectType } from "@/features/projects/types/ProjectType";
import type { ProjectFrontmatter } from "@/features/projects/types/ProjectFrontmatter";
import type { ExperienceType } from "../types/ExperienceType";
import { sortExperiences } from "../utils/helpers";

const PROJECTS: (ProjectType & { slug: string })[] = projectsSource
  .getPages()
  .map(({ data, slugs }, index) => {
    const d = (data ?? {}) as ProjectFrontmatter;
    const slug = Array.isArray(slugs) ? slugs[slugs.length - 1] : "";

    return {
      id: index,
      title: d.title,
      description: d.description,
      imageUrl: d.imageUrl ?? "/images/app-placeholder.jpg",
      imageAlt: d.imageAlt ?? d.title ?? "Project",
      fromDate: d.fromDate,
      toDate: d.toDate,
      category: d.category,
      websiteUrl: d.websiteUrl,
      githubUrl: d.githubUrl,
      videoEmbedUrl: d.videoEmbedUrl,
      videoEmbedAlt: d.videoEmbedAlt,
      techStacks: d.techStacks,
      featured: d.featured,
      showOnPortfolio: d.showOnPortfolio,
      slug,
    } satisfies ProjectType & { slug: string };
  });

export function getExperienceItems(): (ExperienceType & {
  id: string;
  projects?: ProjectType[];
})[] {
  return experienceSource
    .getPages()
    .map(({ data, slugs }) => {
      const d = (data ?? {}) as ExperienceType;
      const slug = Array.isArray(slugs) ? slugs[slugs.length - 1] : "";

      const projects = d.projectSlugs
        ? d.projectSlugs
            .map((projectSlug) => PROJECTS.find((p) => p.slug === projectSlug))
            .filter((p): p is ProjectType & { slug: string } => p !== undefined)
            .map((p) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { slug: _, ...project } = p;
              return project;
            })
        : undefined;

      return {
        ...d,
        id: slug,
        projects,
      };
    })
    .sort(sortExperiences);
}

import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";
import {
  education,
  experience,
  pages,
  projects,
  featuredApps,
} from "@/.source";

const pagesDocs = pages as unknown as { toFumadocsSource: () => unknown };
const projectsDocs = projects as unknown as { toFumadocsSource: () => unknown };
const experienceDocs = experience as unknown as {
  toFumadocsSource: () => unknown;
};
const educationDocs = education as unknown as {
  toFumadocsSource: () => unknown;
};
const featuredAppsDocs = featuredApps as unknown as {
  toFumadocsSource: () => unknown;
};

import type { ProjectItemType } from "@/features/home/types/ProjectItem";

export const pagesSource = loader({
  baseUrl: "/pages",
  source: pagesDocs.toFumadocsSource() as Source<SourceConfig>,
});

export const projectsSource = loader({
  baseUrl: "/projects",
  source: projectsDocs.toFumadocsSource() as Source<SourceConfig>,
});

export const experienceSource = loader({
  baseUrl: "/experience",
  source: experienceDocs.toFumadocsSource() as Source<SourceConfig>,
});

export const educationSource = loader({
  baseUrl: "/education",
  source: educationDocs.toFumadocsSource() as Source<SourceConfig>,
});

export const featuredAppsSource = loader({
  baseUrl: "/featured-apps",
  source: featuredAppsDocs.toFumadocsSource() as Source<SourceConfig>,
});

export function getFeaturedApps(): ProjectItemType[] {
  return featuredAppsSource.getPages().map((page, index) => {
    const data = page.data as unknown as {
      title: string;
      description: string;
      imageUrl?: string;
      imageAlt?: string;
      date?: string;
      category?: string;
      skills?: string[];
      liveDemo?: string;
      github?: string;
      embedUrl?: string;
      embedAlt?: string;
      featured?: boolean;
      weight?: number;
    };

    return {
      id: index,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl ?? "",
      imageAlt: data.imageAlt ?? "",
      date: data.date,
      category: data.category,
      skills: data.skills,
      liveDemo: data.liveDemo,
      github: data.github,
      embed: data.embedUrl,
      embedAlt: data.embedAlt,
      featured: data.featured,
      weight: data.weight,
    };
  });
}

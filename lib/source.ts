import {
  about,
  education,
  experience,
  featuredApps,
  projects,
} from "@/.source";
import type { ProjectItemType } from "@/features/home/types/ProjectItem";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";

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
const aboutDocs = about as unknown as {
  toFumadocsSource: () => unknown;
};

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

export function getProjects(): ProjectItemType[] {
  return projectsSource
    .getPages()
    .map((page, index) => {
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
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
}

function parseDate(dateStr?: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.split(" - ");
  const endDate = parts[parts.length - 1];
  if (endDate.toLowerCase().includes("present")) {
    return new Date().getTime();
  }
  const timestamp = new Date(endDate).getTime();
  return isNaN(timestamp) ? 0 : timestamp;
}

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

export const aboutSource = loader({
  baseUrl: "/about",
  source: aboutDocs.toFumadocsSource() as Source<SourceConfig>,
});

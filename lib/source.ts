import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";
import { education, experience, pages, projects } from "@/.source";

const pagesDocs = pages as unknown as { toFumadocsSource: () => unknown };
const projectsDocs = projects as unknown as { toFumadocsSource: () => unknown };
const experienceDocs = experience as unknown as {
  toFumadocsSource: () => unknown;
};
const educationDocs = education as unknown as {
  toFumadocsSource: () => unknown;
};

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

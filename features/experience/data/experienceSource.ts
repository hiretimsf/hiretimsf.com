import { experience } from "@/.source/server";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";
import type { ExperienceType } from "../types/ExperienceType";

const experienceDocs = experience as unknown as {
  toFumadocsSource: () => unknown;
};

export const experienceSource = loader({
  baseUrl: "/experience",
  source: experienceDocs.toFumadocsSource() as Source<SourceConfig>,
});

export function getExperience(): ExperienceType[] {
  return experienceSource.getPages().map((page, index) => {
    const data = page.data as unknown as ExperienceType;
    return {
      ...data,
      id: index,
    };
  });
}

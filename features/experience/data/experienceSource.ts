import { experience } from "@/.source/server";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";

const experienceDocs = experience as unknown as {
  toFumadocsSource: () => unknown;
};

export const experienceSource = loader({
  baseUrl: "/experience",
  source: experienceDocs.toFumadocsSource() as Source<SourceConfig>,
});

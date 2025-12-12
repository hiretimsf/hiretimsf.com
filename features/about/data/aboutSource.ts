import { about } from "@/.source/server";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";

const aboutDocs = about as unknown as {
  toFumadocsSource: () => unknown;
};

export const aboutSource = loader({
  baseUrl: "/about",
  source: aboutDocs.toFumadocsSource() as Source<SourceConfig>,
});

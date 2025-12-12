import { education } from "@/.source/server";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";

const educationDocs = education as unknown as {
  toFumadocsSource: () => unknown;
};

export const educationSource = loader({
  baseUrl: "/education",
  source: educationDocs.toFumadocsSource() as Source<SourceConfig>,
});

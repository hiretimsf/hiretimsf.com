import { privacy } from "@/.source/server";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";

const privacyDocs = privacy as unknown as {
  toFumadocsSource: () => unknown;
};

export const privacySource = loader({
  baseUrl: "/privacy",
  source: privacyDocs.toFumadocsSource() as Source<SourceConfig>,
});

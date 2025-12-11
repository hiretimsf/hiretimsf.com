import { blog } from "@/.source";
import type { BlogPostType } from "@/features/blog/types/BlogPostType";
import fs from "fs";
import type { Source, SourceConfig } from "fumadocs-core/source";
import { loader } from "fumadocs-core/source";
import path from "path";
import readingTime from "reading-time";
import type { BlogPostFrontmatter } from "@/features/blog/types/BlogPostFrontmatter";

const blogDocs = blog as unknown as {
  toFumadocsSource: () => unknown;
};

export const blogSource = loader({
  baseUrl: "/blog",
  source: blogDocs.toFumadocsSource() as Source<SourceConfig>,
});

type BlogPage = ReturnType<typeof blogSource.getPages>[number];

export function getBlogPosts(): BlogPostType[] {
  return blogSource.getPages().map((page) => {
    const data = page.data as unknown as BlogPostFrontmatter & {
      body: React.ComponentType<object>;
    };

    const pageWithFile = page as BlogPage & { file: { path: string } };
    const slug = pageWithFile.file?.path
      ? pageWithFile.file.path.replace(/\.mdx?$/, "")
      : "";

    const filePath = pageWithFile.file?.path
      ? path.join(
          process.cwd(),
          "features/blog/content",
          pageWithFile.file.path,
        )
      : "";

    if (!filePath) {
      return {
        title: data.title,
        description: data.description,
        created: data.created,
        lastUpdated: data.lastUpdated,
        image: data.image,
        author: data.author,
        authorAvatar: data.authorAvatar,
        category: data.category,
        tags: data.tags,
        seo: data.seo,
        body: () => null,
        content: "",
        readingTime: "",
        readingTimeMinutes: 0,
        slug,
      };
    }

    const contentStr = fs.readFileSync(filePath, "utf-8");
    const readingTimeStats = readingTime(contentStr);

    return {
      title: data.title,
      description: data.description,
      created: data.created,
      lastUpdated: data.lastUpdated,
      image: data.image,
      author: data.author,
      authorAvatar: data.authorAvatar,
      category: data.category,
      tags: data.tags,
      seo: data.seo,
      body: data.body,
      content: contentStr,
      readingTime: readingTimeStats.text,
      readingTimeMinutes: readingTimeStats.minutes,
      slug,
    };
  });
}

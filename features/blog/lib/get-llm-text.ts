import dayjs from "dayjs";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";

import type { BlogPostType } from "@/features/blog/types/BlogPostType";

const processor = remark().use(remarkMdx).use(remarkGfm);

export async function getLLMText(post: BlogPostType) {
  // Strip frontmatter
  const contentWithoutFrontmatter = post.content.replace(
    /^---[\s\S]+?---\s*/,
    "",
  );

  const processed = await processor.process({
    value: contentWithoutFrontmatter,
  });

  return `# ${post.title}

${post.description}

${processed.value}

Last updated on ${dayjs(post.lastUpdated || post.created).format(
    "MMMM D, YYYY",
  )}`;
}

import {
  defineCollections,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const pages = defineDocs({
  dir: "content/pages",
});

export const projects = defineDocs({
  dir: "content/projects",
  docs: defineCollections({
    type: "doc",
    dir: "content/projects",
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      category: z.string(),
      skills: z.array(z.string()),
      liveDemo: z.string().optional(),
      imageUrl: z.string().optional(),
      imageAlt: z.string().optional(),
      embedUrl: z.string().optional(),
      embedAlt: z.string().optional(),
      github: z.string().optional(),
      featured: z.boolean().optional(),
      weight: z.number().optional(),
    }),
  }),
});

export const experience = defineDocs({
  dir: "features/experience/content",
  docs: defineCollections({
    type: "doc",
    dir: "features/experience/content",
    schema: frontmatterSchema.extend({
      title: z.string().optional(),
      companyName: z.string(),
      companyWebsite: z.string().optional(),
      companyLogo: z.string().optional(),
      companyLogoAlt: z.string().optional(),
      companyLocation: z.string().optional(),
      country: z.string().optional(),
      isCurrentEmployer: z.boolean().optional(),
      positions: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          employmentPeriod: z.string(),
          employmentDuration: z.string().optional(),
          employmentType: z.string().optional(),
          description: z.string().optional(),
          skills: z.array(z.string()).optional(),
          icon: z.string().optional(),
        }),
      ),
      projectSlugs: z.array(z.string()).optional(),
    }),
  }),
});

export const education = defineDocs({
  dir: "features/education/content",
  docs: defineCollections({
    type: "doc",
    dir: "features/education/content",
    schema: frontmatterSchema.extend({
      title: z.string().optional(),
      companyName: z.string(),
      companyWebsite: z.string().optional(),
      companyLogo: z.string().optional(),
      companyLogoAlt: z.string().optional(),
      companyLocation: z.string().optional(),
      country: z.string().optional(),
      isCurrentEmployer: z.boolean().optional(),
      positions: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          employmentPeriod: z.string(),
          employmentDuration: z.string().optional(),
          employmentType: z.string().optional(),
          description: z.string().optional(),
          skills: z.array(z.string()).optional(),
        }),
      ),
      projectSlugs: z.array(z.string()).optional(),
    }),
  }),
});

export const featuredApps = defineDocs({
  dir: "features/home/content/featured-apps",
  docs: defineCollections({
    type: "doc",
    dir: "features/home/content/featured-apps",
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      category: z.string(),
      skills: z.array(z.string()),
      liveDemo: z.string().optional(),
      imageUrl: z.string().optional(),
      imageAlt: z.string().optional(),
      embedUrl: z.string().optional(),
      embedAlt: z.string().optional(),
      github: z.string().optional(),
      featured: z.boolean().optional(),
      weight: z.number().optional(),
    }),
  }),
});

export const about = defineDocs({
  dir: "features/about/content",
});

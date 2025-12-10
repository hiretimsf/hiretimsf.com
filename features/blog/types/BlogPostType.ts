type BlogPostType = {
  title: string;
  description: string;
  created: string;
  lastUpdated?: string;
  image: string;
  imageAlt?: string;
  author?: string;
  authorAvatar?: string;
  authorAvatarAlt?: string;
  category?: string;
  tags?: string[];
  seo?: string[];
  body: React.ComponentType<object>;
  readingTime: string;
  readingTimeMinutes: number;
};

export type { BlogPostType };

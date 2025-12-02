export interface HeadType {
  page: string;
  title: string;
  description: string;
  slug: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
}

export type CategoryType = {
  name: string;
  slug: string;
  background?: React.ComponentType<{ className?: string }>;
  icon?: React.ComponentType<{ className?: string }>;
  bigIcon?: React.ComponentType<{ className?: string }>;
  description: string;
  weight: number;
};

export type NavigationLinkType = {
  href: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  subNavigationLinks?: NavigationLinkType[];
};

export type SocialLinkType = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

// This is return type of content-collections
export type ProjectLinkType = {
  order: number;
  title: string;
  category: string;
  created_at: string;
  image: string;
  featured: boolean;
  webUrl: string | null;
  youtubeUrl: string | null;
  githubUrl: string | null;
  mdx: string;
  content: string;
  _meta: {
    filePath: string;
    fileName: string;
    directory: string;
    path: string;
    extension: string;
  };
};

export type ProjectSubNavigationLinkType = {
  title: string;
  description: string;
  image?: string;
  href: string;
  icon?: IconType;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  companyLocation?: string;
  country?: flag;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
  projects?: ProjectItemType[];
};

export type ProjectItemType = {
  id: number;
  title: string;
  date?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  github?: string;
  liveDemo?: string;
  video?: string;
  videoAlt?: string;
  embed?: string;
  embedAlt?: string;
  skills?: string[];
  category?: string;
  current?: boolean;
  upcoming?: boolean;
  featured?: boolean;
  weight?: number;
};

export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentDuration?: string;
  employmentType?: string;
  description?: string;
  icon?: LucideIcon | IconType | React.ReactNode;
  skills?: string[];
  isExpanded?: boolean;
};

export interface BulletListItem {
  name?: string;
  description: string;
  href?: string;
}

import type * as React from "react";
import type { IconType } from "react-icons";

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

export type ProjectSubNavigationLinkType = {
  title: string;
  description: string;
  image?: string;
  href: string;
  icon?: IconType;
};

export interface BulletListItem {
  name?: string;
  description: string;
  href?: string;
}

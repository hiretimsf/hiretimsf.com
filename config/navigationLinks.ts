import { truncateDescription } from "@/lib/seo";
import type { NavigationLinkType } from "@/types";
import {
  UserIcon as AboutMeIcon,
  RssIcon as BlogIcon,
  GraduationCapIcon as EducationIcon,
  BriefcaseIcon as ExperienceIcon,
  HomeIcon,
  ArchiveIcon as ProjectsIcon,
} from "lucide-react";

const NAVIGATION_LINKS: NavigationLinkType[] = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: AboutMeIcon,
    href: "/about",
    label: "About",
    subNavigationLinks: [
      {
        href: "/about",
        label: "About Me",
        description: truncateDescription("Background and skills", 30),
        icon: AboutMeIcon,
      },
      {
        href: "/experience",
        label: "Experience",
        description: truncateDescription("Background and Experience", 30),
        icon: ExperienceIcon,
      },
      {
        href: "/education",
        label: "Education",
        description: truncateDescription("Education and certifications", 30),
        icon: EducationIcon,
      },
    ],
  },
  {
    icon: ProjectsIcon,
    href: "/projects",
    label: "Projects",
  },
  {
    icon: BlogIcon,
    href: "/blog",
    label: "Blog",
  },
];

export default NAVIGATION_LINKS;

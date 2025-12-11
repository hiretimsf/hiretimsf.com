import type { LinkItem } from "@/types";
import { CopyrightIcon, FileTextIcon, LockIcon } from "lucide-react";

export const COPYRIGHT_LINKS = {
  privacy: {
    href: "/privacy",
    icon: LockIcon,
    label: "Privacy Policy",
    ariaLabel: "View privacy policy",
  },
  copyright: {
    href: "/",
    icon: CopyrightIcon,
    label: `${new Date().getFullYear()} - All rights reserved.`,
    ariaLabel: "View copyright information",
  },
  terms: {
    href: "/changelog",
    icon: FileTextIcon,
    label: "Changelog",
    ariaLabel: "View changelog",
  },
} satisfies Record<string, LinkItem>;

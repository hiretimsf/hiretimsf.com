import { SITE_INFO } from "@/config/seo/site";
import type { LinkItem } from "@/types";
import {
  FaSitemap as SiteMapIcon,
  FaSquareRss as RSSIcon,
} from "react-icons/fa6";
import { LuBrain as LLMsIcon } from "react-icons/lu";

const BOTTOM_NAV_LINKS: LinkItem[] = [
  {
    href: `${SITE_INFO.url}/llms.txt`,
    target: "_blank",
    icon: LLMsIcon,
    label: "llms.txt",
    ariaLabel: "View llms.txt",
  },
  {
    href: "/sitemap.xml",
    icon: SiteMapIcon,
    label: "Sitemap",
    ariaLabel: "View website sitemap",
  },
  {
    href: "/rss.xml",
    icon: RSSIcon,
    label: "RSS Feed",
    ariaLabel: "Subscribe to RSS feed",
  },
];

export default BOTTOM_NAV_LINKS;

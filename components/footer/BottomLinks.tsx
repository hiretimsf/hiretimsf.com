import Separator from "@/components/footer/Separator";
import { SITE_INFO } from "@/config/seo/site";
import { cn } from "@/lib/utils";
import { FaSitemap, FaSquareRss } from "react-icons/fa6";
import { LuBrain as FaBrain } from "react-icons/lu";
import FooterLink from "@/components/footer/FooterLink";
import { FOOTER_LINK_DEFAULT_STYLE } from "@/components/footer/FooterLink";

export default function BottomLinks() {
  return (
    <div className="screen-line-after max-w-5xl w-full mx-auto border-x border-edge">
      <div className="mx-auto max-w-md flex items-center justify-center gap-3 px-4 border-x border-edge">
        <FooterLink
          href={`${SITE_INFO.url}/llms.txt`}
          target="_blank"
          icon={
            <FaBrain
              aria-hidden="true"
              className={cn(FOOTER_LINK_DEFAULT_STYLE, "size-[18px]")}
            />
          }
          label="llms.txt"
          ariaLabel="View llms.txt"
        />

        <Separator />

        <FooterLink
          href="/sitemap.xml"
          icon={
            <FaSitemap
              aria-hidden="true"
              className={cn(FOOTER_LINK_DEFAULT_STYLE, "size-[18px]")}
            />
          }
          label="Sitemap"
          ariaLabel="View website sitemap"
        />

        <Separator />

        <FooterLink
          href="/rss.xml"
          icon={
            <FaSquareRss
              aria-hidden="true"
              className={cn(FOOTER_LINK_DEFAULT_STYLE, "size-[18px]")}
            />
          }
          label="RSS Feed"
          ariaLabel="Subscribe to RSS feed"
        />
      </div>
    </div>
  );
}

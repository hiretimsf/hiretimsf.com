import FooterLink, {
  FOOTER_LINK_DEFAULT_STYLE,
} from "@/components/footer/FooterLink";
import FooterSection from "@/components/footer/FooterSection";
import Separator from "@/components/footer/Separator";
import { cn } from "@/lib/utils";
import React from "react";
import BOTTOM_NAV_LINKS from "@/config/bottomNavLinks";

export default function BottomNavLinks() {
  return (
    <FooterSection innerClassName="max-w-md">
      {BOTTOM_NAV_LINKS.map((link, index) => {
        const Icon = link.icon;
        return (
          <React.Fragment key={link.href}>
            <FooterLink
              href={link.href}
              target={link.target}
              icon={
                <Icon
                  aria-hidden="true"
                  className={cn(FOOTER_LINK_DEFAULT_STYLE, "size-[18px]")}
                />
              }
              label={link.label}
              ariaLabel={link.ariaLabel}
            />
            {index < BOTTOM_NAV_LINKS.length - 1 && <Separator />}
          </React.Fragment>
        );
      })}
    </FooterSection>
  );
}

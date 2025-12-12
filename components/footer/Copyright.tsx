import type { LinkItem } from "@/types";
import FooterLink, {
  FOOTER_LINK_DEFAULT_STYLE,
} from "@/components/footer/FooterLink";
import FooterSection from "@/components/footer/FooterSection";
import Separator from "@/components/footer/Separator";
import { COPYRIGHT_LINKS } from "@/config/copyrightLinks";
import { cn } from "@/lib/utils";

export default function Copyright() {
  const renderLink = (key: keyof typeof COPYRIGHT_LINKS) => {
    const link: LinkItem = COPYRIGHT_LINKS[key];
    const Icon = link.icon;

    return (
      <FooterLink
        href={link.href}
        icon={<Icon className={cn(FOOTER_LINK_DEFAULT_STYLE, "size-4")} />}
        label={link.label}
        ariaLabel={link.ariaLabel}
      />
    );
  };

  return (
    <>
      {/* Desktop View */}
      <FooterSection
        className="hidden sm:block"
        innerClassName="max-w-2xl flex-col sm:flex-row"
      >
        {renderLink("privacy")}
        <Separator />
        {renderLink("copyright")}
        <Separator />
        {renderLink("terms")}
      </FooterSection>

      {/* Mobile View */}
      <FooterSection
        className="sm:hidden"
        innerClassName="max-w-2xl divide-x divide-border-edge"
      >
        <div className="flex items-center justify-center gap-3">
          {renderLink("privacy")}
        </div>
        <div className="flex items-center justify-center gap-3">
          {renderLink("terms")}
        </div>
      </FooterSection>
      <FooterSection
        className="sm:hidden"
        innerClassName="max-w-2xl border-b border-edge"
      >
        <div className="flex items-center justify-center py-2">
          {renderLink("copyright")}
        </div>
      </FooterSection>
    </>
  );
}

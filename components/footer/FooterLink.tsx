import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FooterLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

export const FOOTER_LINK_DEFAULT_STYLE =
  "text-foreground hover:text-foreground/80 transition-colors duration-200";

export default function FooterLink({
  href,
  icon,
  label,
  ariaLabel,
  target,
}: FooterLinkProps) {
  return (
    <Button variant="link" asChild className="group">
      <Link
        href={href}
        className="group flex items-center gap-2"
        aria-label={ariaLabel || label}
        prefetch={true}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {icon}
        <span className={cn(FOOTER_LINK_DEFAULT_STYLE)}>{label}</span>
      </Link>
    </Button>
  );
}

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FooterLinkProps = {
  href?: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

export const FOOTER_LINK_DEFAULT_STYLE =
  "text-foreground/80 hover:text-muted-foreground transition-colors duration-200 text-sm font-normal";

export default function FooterLink({
  href,
  icon,
  label,
  ariaLabel,
  target,
}: FooterLinkProps) {
  const content = (
    <>
      {icon}
      <span
        className={cn(
          FOOTER_LINK_DEFAULT_STYLE,
          !href && "hover:text-foreground/80",
        )}
      >
        {label}
      </span>
    </>
  );

  const containerClasses = cn(
    buttonVariants({ variant: "link" }),
    "group flex items-center gap-1 text-sm font-medium",
    !href && "no-underline hover:no-underline cursor-default",
  );

  if (!href) {
    return (
      <div className={containerClasses} aria-label={ariaLabel || label}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={containerClasses}
      aria-label={ariaLabel || label}
      prefetch={true}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  );
}

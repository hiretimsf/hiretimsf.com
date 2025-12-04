import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectTitleProps {
  title: string;
  demoLink?: string;
}

export function ProjectTitle({ title, demoLink }: ProjectTitleProps) {
  return (
    <Link
      href={demoLink ?? ""}
      target={demoLink ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group text-foreground hover:decoration-panda-text/60 inline-flex items-center gap-1 text-lg font-semibold tracking-tight hover:underline hover:underline-offset-4"
    >
      {title}
      <ArrowUpRight
        aria-hidden="true"
        className="text-foreground/70 group-hover:text-panda-orange size-4"
      />
    </Link>
  );
}

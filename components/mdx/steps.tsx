import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Steps({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "ml-4 mb-8 border-l border-muted pl-7.5 [counter-reset:step] md:mb-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Step({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("step relative pb-4 last:pb-0", className)}>
      {children}
    </div>
  );
}

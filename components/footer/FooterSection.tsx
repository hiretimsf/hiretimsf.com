import { cn } from "@/lib/utils";

interface FooterSectionProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function FooterSection({
  children,
  className,
  innerClassName,
}: FooterSectionProps) {
  return (
    <div
      className={cn(
        "screen-line-after w-full max-w-5xl border-x border-edge mx-auto",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-center gap-3 border-x border-edge px-4",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

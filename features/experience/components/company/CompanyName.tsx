import { cn } from "@/lib/utils";

type CompanyNameProps = {
  className?: string;
  companyName: string;
};

export default function CompanyName({
  className,
  companyName,
}: CompanyNameProps) {
  if (!companyName) {
    return null;
  }

  return (
    <h3
      className={cn(
        "text-foreground inline-block text-center align-middle text-2xl leading-snug font-semibold md:text-left md:text-xl",
        className,
      )}
    >
      {companyName}
    </h3>
  );
}

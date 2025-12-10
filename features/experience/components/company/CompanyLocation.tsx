import { cn } from "@/lib/utils";
import type { ExperienceType } from "../../types/ExperienceType";
import { countryMap } from "../../utils/maps";

type CompanyLocationProps = Pick<
  ExperienceType,
  "companyLocation" | "country"
> & {
  className?: string;
};

export default function CompanyLocation({
  className,
  companyLocation,
  country,
}: CompanyLocationProps) {
  const CountryFlag = country ? countryMap[country] : undefined;

  if (!companyLocation && !CountryFlag) {
    return null;
  }

  return (
    <div
      className={cn(
        "text-muted-foreground flex items-center gap-1.5 text-base",
        className,
      )}
    >
      {CountryFlag && (
        <span className="flex items-center">
          <CountryFlag className="size-4" aria-hidden="true" />
        </span>
      )}
      {companyLocation && <span>{companyLocation}</span>}
    </div>
  );
}

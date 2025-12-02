import DotsBackground from "@/components/BackgroundDots";
import { Separator } from "@/components/ui/separator";
import type { ExperienceItemType } from "@/types";
import CompanyLocation from "./company-location";
import CompanyLogo from "./company-logo";
import CompanyName from "./company-name";
import CompanyWebsite from "./company-website";

type CompanyMainProps = Pick<
  ExperienceItemType,
  | "companyLogo"
  | "companyLogoAlt"
  | "companyName"
  | "companyLocation"
  | "companyWebsite"
  | "country"
> & {};

export default function CompanyMain({
  companyLogo,
  companyLogoAlt,
  companyName,
  companyLocation,
  companyWebsite,
  country,
}: CompanyMainProps) {
  const showMeta = Boolean(companyLocation || companyWebsite);
  const _variant = "default" as const;

  return (
    <div className="relative flex flex-col items-center gap-3 border-b border-gray-200 px-6 py-6 md:flex-row md:px-8 md:py-4">
      <CompanyLogo
        companyLogo={companyLogo}
        companyLogoAlt={companyLogoAlt}
        companyName={companyName}
      />
      <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
        <CompanyName companyName={companyName} />
        {showMeta && (
          <div className="text-panda-text/80 flex items-center gap-2 text-sm">
            <CompanyLocation
              companyLocation={companyLocation}
              country={country}
            />
            {companyLocation && companyWebsite && (
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4"
              />
            )}
            <CompanyWebsite companyWebsite={companyWebsite} />
          </div>
        )}
      </div>
      <DotsBackground
        gridId="company-main"
        className="text-gray-200/80"
        fadeBottomMask
      />
    </div>
  );
}

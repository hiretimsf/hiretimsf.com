"use client";

import ProgressBar from "@/components/header/components/shared/ProgressBar";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import DesktopHeader from "@/components/header/components/desktop/DesktopHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";

interface Props {
  showProgressBar?: boolean;
}

const HeaderSkeleton = () => (
  <div className="mx-auto hidden h-18 w-full max-w-5xl items-center justify-between md:flex">
    <Skeleton className="h-9 w-24" />
    <div className="flex items-center gap-5">
      <Skeleton className="h-9 w-16" />
      <Skeleton className="h-9 w-16" />
      <Skeleton className="h-9 w-20" />
      <Skeleton className="h-9 w-14" />
      <Skeleton className="h-9 w-18" />
    </div>
    <Skeleton className="h-9 w-9" />
  </div>
);

const SiteHeader: FC<Props> = ({ showProgressBar = false }) => {
  const path = usePathname();
  const mounted = useMounted();

  return (
    <div className="sticky inset-x-0 top-0 z-50">
      <div className="relative mx-auto w-full px-3 lg:px-4 xl:px-0">
        {mounted ? (
          <DesktopHeader activePath={path} />
        ) : (
          <HeaderSkeleton />
        )}
        {/* <MobileHeader currentPath={path} /> */}
      </div>
      {showProgressBar && <ProgressBar />}
    </div>
  );
};

export default SiteHeader;

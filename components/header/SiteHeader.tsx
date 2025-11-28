"use client";

import DesktopHeader from "@/components/header/components/desktop/DesktopHeader";
import ProgressBar from "@/components/header/components/shared/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";

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
  const { scrollY } = useScroll();

  const [affix, setAffix] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 8);
  });

  return (
    <div
      data-affix={affix}
      className={cn(
        "sticky inset-x-0 top-0 z-50 mx-auto flex h-12 max-w-5xl items-center justify-between gap-2 border-x border-edge bg-background px-2 screen-line-before screen-line-after after:z-1 after:transition-[background-color]",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]",
        "transition-shadow duration-300"
      )}
    >
      <div className="relative mx-auto w-full px-3 lg:px-4 xl:px-0">
        {mounted ? <DesktopHeader activePath={path} /> : <HeaderSkeleton />}
        {/* <MobileHeader currentPath={path} /> */}
      </div>
      {showProgressBar && <ProgressBar />}
    </div>
  );
};

export default SiteHeader;

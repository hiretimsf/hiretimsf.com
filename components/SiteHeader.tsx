"use client";

import ProgressBar from "@/components/header/shared/ProgressBar";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";

const MobileHeader = dynamic(
  () => import("@/components/header/mobile/MobileHeader"),
  {
    ssr: false,
  },
);

const DesktopHeader = dynamic(
  () => import("@/components/header/desktop/DesktopHeader"),
  {
    ssr: false,
  },
);

interface Props {
  showProgressBar?: boolean;
}

const SiteHeader: FC<Props> = ({ showProgressBar = false }) => {
  const path = usePathname();
  const { scrollY } = useScroll();

  const [affix, setAffix] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 8);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur bg-background w-full border-y border-edge",
      )}
    >
      <div
        data-affix={affix}
        className={cn(
          "mx-auto max-w-5xl px-4 border-x border-edge",
          "data-[affix=true]:shadow-md dark:data-[affix=true]:shadow-md",
          "transition-shadow duration-300",
        )}
      >
        <DesktopHeader activePath={path} />
        <MobileHeader currentPath={path} />
      </div>
      {showProgressBar && <ProgressBar />}
    </header>
  );
};

export default SiteHeader;

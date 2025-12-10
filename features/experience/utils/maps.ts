import AndroidIcon from "../icons/android-icon";
import DriverIcon from "../icons/driver-icon";
import ForkliftIcon from "../icons/forklift-icon";
import FrontendIcon from "../icons/frontend-icon";
import GraduateIcon from "../icons/graduate-icon";
import MarketingIcon from "../icons/marketing-icon";
import ServerIcon from "../icons/server-icon";
import WorkerIcon from "../icons/worker-icon";
import { DE, MN, US } from "country-flag-icons/react/3x2";
import type { ComponentType, HTMLAttributes, ReactNode } from "react";

export const iconMap: Record<string, ComponentType | ReactNode> = {
  AndroidIcon,
  DriverIcon,
  ForkliftIcon,
  FrontendIcon,
  GraduateIcon,
  MarketingIcon,
  ServerIcon,
  WorkerIcon,
};

export const countryMap: Record<
  string,
  ComponentType<HTMLAttributes<HTMLElement>>
> = {
  US,
  DE,
  MN,
};

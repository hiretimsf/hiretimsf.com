import dynamic from "next/dynamic";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import type { FC } from "react";

const MenuButton = dynamic(() => import("./MenuButton"), {
  ssr: false,
});

const ThemeToggle = dynamic(() => import("@/components/header/components/shared/ThemeToggle"), {
  ssr: false,
});

const SearchButton = dynamic(() => import("@/components/header/components/shared/SearchButton"), {
  ssr: false,
});

interface Props {
  currentPath: string;
}

const MobileHeader: FC<Props> = ({ currentPath }) => {
  return (
    <NavigationMenu className="mx-auto w-full max-w-5xl md:hidden">
      <div className="flex h-18 w-full items-center justify-between">
        <div className="flex flex-1 justify-start">
          <MenuButton currentPath={currentPath} />
        </div>

        <div className="flex flex-1 justify-end gap-2">
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </NavigationMenu>
  );
};

export default MobileHeader;

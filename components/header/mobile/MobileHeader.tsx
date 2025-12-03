import MenuButton from "@/components/header/mobile/MenuButton";
import LogoButton from "@/components/header/shared/LogoButton";
import SearchButton from "@/components/header/shared/SearchButton";
import ThemeToggle from "@/components/header/shared/ThemeToggle";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import type { FC } from "react";

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
        <div className="flex flex-1 justify-center">
          <LogoButton />
        </div>

        <div className="flex flex-1 items-center justify-end gap-1.5">
          <SearchButton />
          <span className="mx-2 flex h-4 w-px bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </NavigationMenu>
  );
};

export default MobileHeader;

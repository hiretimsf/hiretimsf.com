"use client";

import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { MoonIcon as AnimateMoonIcon } from "@/components/animate-ui/icons/moon";
import { SunIcon as AnimateSunIcon } from "@/components/animate-ui/icons/sun";
import { Button } from "@/components/ui/button";
import { META_THEME_COLORS } from "@/config/theme";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const playClick = useSound("/audio/click.wav");

  const switchTheme = useCallback(() => {
    playClick(0.5);
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark,
    );
  }, [resolvedTheme, setTheme, setMetaColor, playClick]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchTheme}
      className="corner-squircle rounded-xl text-foreground "
    >
      <AnimateIcon animateOnHover className="hidden size-6 dark:block">
        <AnimateMoonIcon className="size-6" />
      </AnimateIcon>
      <AnimateIcon animateOnHover className="size-6 dark:hidden">
        <AnimateSunIcon className="size-6" />
      </AnimateIcon>
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
};

export default ThemeToggle;

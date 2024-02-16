import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTheme from "@/hooks/useTheme";
import { Theme } from "@/contexts/ThemeContext";

function getIconForCurrentTheme(theme: Theme) {
  const moon = <MoonIcon className="h-5 w-5 sm:h-4 sm:w-4" />;
  const sun = <SunIcon className="h-5 w-5 sm:h-4 sm:w-4" />;

  switch (theme) {
    case "dark":
      return moon;
    case "light":
      return sun;
    case "system":
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? moon
        : sun;
  }
}

export default function ThemeMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          {getIconForCurrentTheme(theme)}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-28">
        <DropdownMenuItem>
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => setTheme("light")}
          >
            <SunIcon className="mr-2 h-4 w-4" /> Light
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => setTheme("dark")}
          >
            <MoonIcon className="mr-2 h-4 w-4" /> Dark
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => setTheme("system")}
          >
            <DesktopIcon className="mr-2 h-4 w-4" /> System
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

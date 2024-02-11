import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTheme from "@/hooks/useTheme";

export default function ThemeMenu() {
  const { theme, updateTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          {theme === "dark" ? (
            <MoonIcon className="h-5 w-5 sm:h-4 sm:w-4" />
          ) : (
            <SunIcon className="h-5 w-5 sm:h-4 sm:w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-28">
        <DropdownMenuItem>
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => updateTheme("light")}
          >
            <SunIcon className="mr-2 h-4 w-4" /> Light
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => updateTheme("dark")}
          >
            <MoonIcon className="mr-2 h-4 w-4" /> Dark
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

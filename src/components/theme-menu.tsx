import { Sun, MoonStar } from "lucide-react";

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
        <Button variant="ghost" size="icon">
          {theme === "dark" ? (
            <MoonStar className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
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
            <Sun className="mr-2 h-4 w-4" /> Light
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className="p-1"
            variant="ghost"
            onClick={() => updateTheme("dark")}
          >
            <MoonStar className="mr-2 h-4 w-4" /> Dark
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

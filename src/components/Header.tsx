import { HamburgerMenuIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeMenu from "./ThemeMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-xl justify-between items-center">
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <HamburgerMenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Button variant="link">
                    <a href="/">AV</a>
                  </Button>
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <SheetClose asChild>
                  <Button variant="link">
                    <a href="/#experience">Experience</a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="link">
                    <a href="#skills">Skills</a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="link">
                    <a href="#contact">Contact</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden sm:flex">
          <Button variant="link" className="text-lg">
            <a href="/">AV</a>
          </Button>
        </div>
        <div className="hidden sm:flex">
          <nav className="flex space-x-4">
            <Button variant="link">
              <a href="/#experience">Experience</a>
            </Button>
            <Button variant="link">
              <a href="#skills">Skills</a>
            </Button>
            <Button variant="link">
              <a href="#contact">Contact</a>
            </Button>
          </nav>
        </div>

        <div>
          <Button size="icon" variant="ghost">
            <a target="_blank" href="https://www.linkedin.com/in/abhayvatoo/">
              <LinkedInLogoIcon className="h-5 w-5 sm:h-4 sm:w-4" />
            </a>
          </Button>
          <ThemeMenu />
        </div>
      </div>
    </header>
  );
}

import { Menu, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeMenu from "./theme-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-xl justify-between items-center">
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Abhay</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <SheetClose asChild>
                  <Button variant="link">
                    <a href="/#about">About</a>
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
            <a href="/">Abhay</a>
          </Button>
        </div>
        <div className="hidden sm:flex">
          <nav className="flex space-x-4">
            <Button variant="link">
              <a href="/#about">About</a>
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
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <ThemeMenu />
        </div>
      </div>
    </header>
  );
}

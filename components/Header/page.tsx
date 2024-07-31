"use client"

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/context/theme-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Header() {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = (newTheme: "light" | "dark") => {
        setTheme(newTheme);
      };

  const navMenu = [
    {
      page: "Home",
      href: "/",
    },
    {
      page: "About",
      href: "/about",
    },
    {
      page: "Resume",
      href: "/resume",
    },
    {
      page: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6 border-b">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-medium">DV.</span>
      </Link>
      <div className="flex items-center gap-3 flex-row-reverse md:flex-row">
      <nav className="hidden md:flex items-center gap-4">
        {navMenu.map((nav, index) => {
          return (
            <Link
              key={index}
              href={nav.href}
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              {nav.page}
            </Link>
          );
        })}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            {navMenu.map((nav, index) => {
              return (
                <Link
                  key={index}
                  href={nav.href}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  {nav.page}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
      <RadioGroup
          value={theme}
          onValueChange={handleThemeChange}
          aria-label="Theme"
          className="flex items-center gap-2"
        >
          {theme === "dark" && (
            <>
              <RadioGroupItem
                value="light"
                id="light"
                className="peer sr-only"
              />
              <Label
                htmlFor="light"
                className="inline-flex border rounded-md items-center justify-center w-8 h-8 transition-colors cursor-pointer peer-checked:bg-primary peer-checked:text-primary-foreground"
              >
                <SunIcon className="w-5 h-5" />
                <span className="sr-only">Light mode</span>
              </Label>
            </>
          )}
          {theme === "light" && (
            <>
              <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
              <Label
                htmlFor="dark"
                className="inline-flex border rounded-md items-center justify-center w-8 h-8 transition-colors cursor-pointer peer-checked:bg-primary peer-checked:text-primary-foreground"
              >
                <MoonIcon className="w-5 h-5" />
                <span className="sr-only">Dark mode</span>
              </Label>
            </>
          )}
        </RadioGroup>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    );
  }
  
  function SunIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }
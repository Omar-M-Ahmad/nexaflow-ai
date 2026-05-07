"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { type Locale } from "@/i18n/config";
import { localizedRoute } from "@/i18n/routes";

type HeaderDictionary = {
  nav: {
    product: string;
    workflow: string;
    useCases: string;
    pricing: string;
    faq: string;
    signIn: string;
    startFree: string;
  };
  common: {
    brand: string;
    switchLanguage: string;
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
  };
};

const navItems = [
  ["product", "#product"],
  ["workflow", "#workflow"],
  ["useCases", "#use-cases"],
  ["pricing", "#pricing"],
  ["faq", "#faq"]
] as const;

export function SiteHeader({ locale, dict }: { locale: Locale; dict: HeaderDictionary }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-x py-4">
        <div className="flex items-center justify-between gap-4">
          <Logo locale={locale} label={dict.common.brand} />

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(([key, href]) => (
              <a key={key} href={href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
                {dict.nav[key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
            <ThemeToggle label={dict.common.toggleTheme} />
            <Button asChild variant="ghost" size="sm">
              <Link href={localizedRoute(locale, "/signin")}>{dict.nav.signIn}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={localizedRoute(locale, "/signup")}>{dict.nav.startFree}</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
            <ThemeToggle label={dict.common.toggleTheme} />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-9 px-0"
              aria-label={isOpen ? dict.common.closeMenu : dict.common.openMenu}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0">
            <nav className="rounded-2xl border border-border bg-card/80 p-3 shadow-xl shadow-black/5">
              {navItems.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {dict.nav[key]}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3">
                <Button asChild variant="outline" size="sm">
                  <Link href={localizedRoute(locale, "/signin")}>{dict.nav.signIn}</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={localizedRoute(locale, "/signup")}>{dict.nav.startFree}</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

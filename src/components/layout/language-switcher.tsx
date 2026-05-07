"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/i18n/config";

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = locale;
  return `/${segments.join("/")}`;
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <Button asChild type="button" variant="ghost" size="sm" aria-label={label} className="w-9 px-0">
      <Link href={getLocalizedPath(pathname, nextLocale)}>
        <Languages className="size-4" />
      </Link>
    </Button>
  );
}

import { type Locale } from "@/i18n/config";

export function localizedRoute(locale: Locale, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;

  return `/${locale}${cleanPath}`;
}

import "server-only";
import { type Locale } from "./config";
import { ar } from "./messages/ar";
import { en } from "./messages/en";

const dictionaries = { en, ar } satisfies Record<Locale, typeof en>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = typeof en;

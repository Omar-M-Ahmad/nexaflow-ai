import Link from "next/link";
import { Workflow } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { localizedRoute } from "@/i18n/routes";

export function Logo({ locale, label }: { locale: Locale; label: string }) {
  return (
    <Link href={localizedRoute(locale)} className="flex items-center gap-2 rounded-xl focus-ring">
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
        <Workflow className="size-5 text-white" />
      </span>
      <span className="text-xl font-semibold tracking-tight">{label}</span>
    </Link>
  );
}

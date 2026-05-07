import { Logo } from "@/components/layout/logo";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/get-dictionary";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 py-12">
      <div className="container-x">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <Logo locale={locale} label={dict.common.brand} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{dict.footer.description}</p>
          </div>
          {dict.footer.groups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-semibold">{group.title}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <a key={link} href="#" className="block transition hover:text-foreground">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{dict.footer.copyright}</p>
          <div className="flex gap-5 text-muted-foreground">
            <a href="#" aria-label="X" className="transition hover:text-foreground">X</a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-foreground">in</a>
            <a href="#" aria-label="GitHub" className="transition hover:text-foreground">GH</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

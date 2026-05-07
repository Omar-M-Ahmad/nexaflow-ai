import Link from "next/link";
import { ArrowLeft, ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function AuthShell({ locale, dict, mode }: { locale: Locale; dict: Dictionary; mode: "signin" | "signup" }) {
  const isSignIn = mode === "signin";
  const ArrowIcon = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <main className="min-h-screen surface-glow">
      <div className="container-x flex min-h-screen flex-col py-6">
        <header className="flex items-center justify-between gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href={`/${locale}`}>
              <ArrowIcon className="size-4" />
              {dict.auth.backHome}
            </Link>
          </Button>
          <div className="flex items-center gap-1">
            <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
            <ThemeToggle label={dict.common.toggleTheme} />
          </div>
        </header>

        <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="hidden lg:block">
            <div className="max-w-xl">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/20">
                <Workflow className="size-7 text-white" />
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight">{dict.auth.sideTitle}</h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">{dict.auth.sideDescription}</p>
              <div className="mt-10 rounded-3xl border border-border card-glass p-5 shadow-2xl shadow-black/10">
                <div className="rounded-2xl border border-border bg-secondary/50 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-semibold">{dict.product.documentTitle}</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{dict.product.status}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full rounded-full bg-background" />
                    <div className="h-2 w-5/6 rounded-full bg-background" />
                    <div className="h-2 w-3/4 rounded-full bg-background" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-background/70 p-4"><div className="text-2xl font-bold text-primary">92%</div><div className="text-xs text-muted-foreground">{dict.product.qualityLabel}</div></div>
                    <div className="rounded-xl bg-background/70 p-4"><div className="text-2xl font-bold text-accent">3</div><div className="text-xs text-muted-foreground">Versions</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-3xl border border-border card-glass p-6 shadow-2xl shadow-black/10 md:p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent lg:hidden">
                <Workflow className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{isSignIn ? dict.auth.signInTitle : dict.auth.signUpTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{isSignIn ? dict.auth.signInSubtitle : dict.auth.signUpSubtitle}</p>
            </div>

            <form className="space-y-5">
              {!isSignIn ? (
                <label className="block space-y-2">
                  <span className="text-sm font-semibold">{dict.auth.name}</span>
                  <Input placeholder={dict.auth.namePlaceholder} autoComplete="name" />
                </label>
              ) : null}

              <label className="block space-y-2">
                <span className="text-sm font-semibold">{dict.auth.email}</span>
                <Input type="email" placeholder={dict.auth.emailPlaceholder} autoComplete="email" />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-semibold">{dict.auth.password}</span>
                <Input type="password" placeholder={dict.auth.passwordPlaceholder} autoComplete={isSignIn ? "current-password" : "new-password"} />
              </label>

              {isSignIn ? (
                <div className="flex items-center justify-between gap-4 text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="size-4 rounded border-border accent-primary" />
                    {dict.auth.remember}
                  </label>
                  <a href="#" className="font-semibold text-primary hover:text-primary/80">{dict.auth.forgotPassword}</a>
                </div>
              ) : null}

              <Button type="button" className="w-full" size="lg">
                {isSignIn ? dict.auth.signInCta : dict.auth.signUpCta}
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              {isSignIn ? dict.auth.noAccount : dict.auth.hasAccount}{" "}
              <Link href={`/${locale}/${isSignIn ? "signup" : "signin"}`} className="font-semibold text-primary hover:text-primary/80">
                {isSignIn ? dict.auth.createAccount : dict.auth.backToSignIn}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

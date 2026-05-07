import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  GitBranch,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type Dictionary } from "@/i18n/get-dictionary";
import { type Locale } from "@/i18n/config";

const problemIcons = [MessageSquare, Shield, Users, Target];
const workflowIcons = [FileText, Sparkles, GitBranch, CheckCircle2];
const featureIcons = [FileText, Workflow, CheckCircle2, Clock, Users, Zap];

export function LandingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <main>
      <HeroSection locale={locale} dict={dict} />
      <ProblemSection dict={dict} />
      <WorkflowSection dict={dict} />
      <ProductPreviewSection dict={dict} />
      <FeaturesSection dict={dict} />
      <UseCasesSection dict={dict} />
      <MetricsSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <PricingSection dict={dict} />
      <FaqSection dict={dict} />
      <FinalCtaSection locale={locale} dict={dict} />
    </main>
  );
}

function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const titleParts = dict.hero.title.split(dict.hero.highlighted);

  return (
    <section className="relative isolate overflow-hidden surface-glow">
      <div className="absolute inset-0 -z-10 dot-grid" />
      <div className="container-x py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="mb-6 border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="size-3" />
              {dict.hero.badge}
            </Badge>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              {titleParts[0]}
              <span className="text-gradient">{dict.hero.highlighted}</span>
              {titleParts[1]}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={`/${locale}/signup`}>
                  {dict.hero.primaryCta}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                {dict.hero.secondaryCta}
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">{dict.hero.note}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-primary/40 to-accent/40 opacity-30 blur-3xl" />
            <Card className="overflow-hidden border-border/60">
              <CardHeader className="border-b border-border/50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="size-3 rounded-full bg-red-500/60" />
                      <span className="size-3 rounded-full bg-yellow-500/60" />
                      <span className="size-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="ms-3 truncate text-sm text-muted-foreground">{dict.hero.mockupTitle}</span>
                  </div>
                  <Badge className="shrink-0 border-accent/40 bg-accent/10 text-accent">{dict.hero.mockupStatus}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {dict.hero.mockupRows.map(([label, value], index) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className={["size-2 rounded-full", index === 0 ? "bg-accent" : index === 1 ? "bg-primary" : index === 2 ? "bg-yellow-500" : "bg-muted-foreground"].join(" ")} />
                      <span className="text-sm">{label}</span>
                      <Badge className="ms-auto bg-secondary text-xs text-muted-foreground">{value}</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-border/50 pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{dict.hero.qualityScore}</span>
                    <span className="font-semibold text-accent">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-secondary/50 py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.problem.title}</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dict.problem.items.map((item, index) => {
            const Icon = problemIcons[index];
            return (
              <Card key={item.title} className="group transition hover:border-primary/50">
                <CardContent className="p-6">
                  <IconBox><Icon className="size-6 text-primary" /></IconBox>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="workflow" className="py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.workflow.title}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-4">
          {dict.workflow.items.map((item, index) => {
            const Icon = workflowIcons[index];
            return (
              <div key={item.step} className="relative">
                {index < 3 ? <div className="absolute start-[60%] top-12 hidden h-px w-full bg-gradient-to-r from-primary/50 to-transparent md:block rtl:bg-gradient-to-l" /> : null}
                <Card className="relative h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl font-bold text-primary/20">{item.step}</div>
                    <IconBox><Icon className="size-6 text-primary" /></IconBox>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductPreviewSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="product" className="bg-secondary/50 py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.product.title}</SectionTitle>
        <Card className="overflow-hidden border-border/60">
          <div className="grid lg:grid-cols-12">
            <aside className="border-b border-border/50 bg-secondary/40 p-6 lg:col-span-3 lg:border-b-0 lg:border-e">
              <div className="flex gap-2 overflow-x-auto lg:block lg:space-y-2">
                {dict.product.sidebar.map((item, index) => (
                  <div key={item} className={`whitespace-nowrap rounded-xl px-3 py-2 text-sm ${index === 0 ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-secondary"}`}>
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="border-b border-border/50 p-6 lg:col-span-6 lg:border-b-0 lg:border-e">
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">{dict.product.documentTitle}</h3>
                <Badge className="text-xs">{dict.product.documentBadge}</Badge>
              </div>
              <div className="space-y-4">
                {["w-full", "w-5/6", "w-4/6", "mt-6 w-full", "w-3/4"].map((width, index) => (
                  <div key={index} className={`h-2 rounded-full bg-secondary ${width}`} />
                ))}
              </div>
              <div className="mt-8 border-t border-border/50 pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  <span>{dict.product.versionHistory}</span>
                </div>
              </div>
            </div>

            <aside className="bg-secondary/40 p-6 lg:col-span-3">
              <div className="space-y-6">
                <PreviewStat label={dict.product.statusLabel}><Badge className="border-accent/30 bg-accent/10 text-accent">{dict.product.status}</Badge></PreviewStat>
                <PreviewStat label={dict.product.qualityLabel}><div className="text-2xl font-bold text-primary">92%</div></PreviewStat>
                <PreviewStat label={dict.product.sourceCoverage}>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary"><div className="h-full w-3/4 rounded-full bg-primary" /></div>
                    <span className="text-sm">75%</span>
                  </div>
                </PreviewStat>
                <PreviewStat label={dict.product.checklistLabel}>
                  <div className="space-y-2">
                    {dict.product.checklist.map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span className={`flex size-4 items-center justify-center rounded border ${item.done ? "border-primary bg-primary" : "border-border"}`}>
                          {item.done ? <Check className="size-3 text-white" /> : null}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </PreviewStat>
              </div>
            </aside>
          </div>
        </Card>
      </div>
    </section>
  );
}

function FeaturesSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.features.title}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, index) => {
            const Icon = featureIcons[index];
            return (
              <Card key={item.title} className="group transition hover:border-primary/50">
                <CardContent className="p-6">
                  <IconBox gradient><Icon className="size-6 text-primary" /></IconBox>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="use-cases" className="bg-secondary/50 py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.useCases.title}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2">
          {dict.useCases.items.map((item) => (
            <Card key={item.title} className="transition hover:border-primary/50">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => <Badge key={tag} className="border-primary/20 bg-primary/10 text-primary">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.metrics.title}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-4">
          {dict.metrics.items.map((item) => (
            <Card key={item.metric} className="text-center">
              <CardContent className="p-8">
                <div className="mb-2 text-5xl font-bold text-gradient">{item.metric}</div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-secondary/50 py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.testimonials.title}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-3">
          {dict.testimonials.items.map((item) => (
            <Card key={item.author}>
              <CardContent className="p-6">
                <p className="mb-6 leading-relaxed text-muted-foreground">“{item.quote}”</p>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-white">
                    {item.author.split(" ").map((name) => name[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{item.author}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="container-x">
        <SectionTitle>{dict.pricing.title}</SectionTitle>
        <div className="grid gap-8 md:grid-cols-3">
          {dict.pricing.plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? "border-primary/50 shadow-xl shadow-primary/10" : ""}`}>
              {plan.popular ? <Badge className="absolute -top-4 start-1/2 -translate-x-1/2 bg-primary text-primary-foreground rtl:translate-x-1/2">{dict.common.mostPopular}</Badge> : null}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && plan.price !== "مخصص" ? <span className="text-muted-foreground">{dict.common.monthly}</span> : null}
                </div>
              </CardHeader>
              <CardContent>
                <Button className="mb-6 w-full" variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button>
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="bg-secondary/50 py-20 md:py-24">
      <div className="mx-auto w-[min(100%-2rem,48rem)]">
        <SectionTitle>{dict.faq.title}</SectionTitle>
        <div className="space-y-4">
          {dict.faq.items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-border card-glass px-6 py-4">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 surface-glow" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{dict.finalCta.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{dict.finalCta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg"><Link href={`/${locale}/signup`}>{dict.finalCta.primaryCta}<ArrowRight className="size-4 rtl:rotate-180" /></Link></Button>
          <Button size="lg" variant="outline">{dict.finalCta.secondaryCta}</Button>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="mx-auto mb-14 max-w-4xl text-center text-3xl font-bold tracking-tight md:mb-16 md:text-4xl">{children}</h2>;
}

function IconBox({ children, gradient = false }: { children: ReactNode; gradient?: boolean }) {
  return <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${gradient ? "bg-gradient-to-br from-primary/10 to-accent/10" : "bg-primary/10"}`}>{children}</div>;
}

function PreviewStat({ label, children }: { label: string; children: ReactNode }) {
  return <div><div className="mb-2 text-xs text-muted-foreground">{label}</div>{children}</div>;
}

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Cairo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeProvider, type Theme } from "@/components/layout/theme-provider";
import { getDirection, isLocale, type Locale } from "@/i18n/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexaflow-ai.example.com"),
  title: {
    default: "NexaFlow AI",
    template: "%s | NexaFlow AI"
  },
  description: "Turn scattered AI outputs into structured, reviewable, and approved workflows for modern teams.",
  openGraph: {
    title: "NexaFlow AI",
    description: "Controlled AI workflow platform for modern teams.",
    type: "website"
  }
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function resolveTheme(value?: string): Theme {
  return value === "light" ? "light" : "dark";
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const cookieStore = await cookies();
  const initialTheme = resolveTheme(cookieStore.get("nexaflow-theme")?.value);

  return (
    <html
      lang={currentLocale}
      dir={getDirection(currentLocale)}
      data-scroll-behavior="smooth"
      className={initialTheme === "dark" ? "dark" : undefined}
      style={{ colorScheme: initialTheme }}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

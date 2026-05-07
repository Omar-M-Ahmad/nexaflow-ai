import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { getDirection, isLocale, type Locale } from "@/i18n/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

const themeInitScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("nexaflow-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

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

export default async function LocaleLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  return (
    <html lang={currentLocale} dir={getDirection(currentLocale)} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

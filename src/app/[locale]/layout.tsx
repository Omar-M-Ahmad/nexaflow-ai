import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
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

export default async function LocaleLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  return (
    <html lang={currentLocale} dir={getDirection(currentLocale)} suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

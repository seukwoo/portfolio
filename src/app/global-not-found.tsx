import type { Metadata } from "next";
import { contentByLang } from "@/content/by-lang";
import { themeInitScript } from "@/components/layout/ThemeToggle";
import { fontVariables } from "./fonts";
import "./globals.css";

// Unmatched URLs in either language (two root layouts → no shared not-found.tsx). Bilingual on purpose.
export const metadata: Metadata = { title: "404" };

export default function GlobalNotFound() {
  const { ko, en } = contentByLang;
  return (
    <html lang="ko" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-start justify-center gap-4 px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold text-accent">{ko.labels.notFound.code}</p>
          <h1 className="text-4xl font-bold tracking-tight">{ko.labels.notFound.title}</h1>
          <p className="text-muted" lang="en">
            {en.labels.notFound.title}
          </p>
          {/* Plain links: each language has its own root layout, so this is a full page load anyway. */}
          <div className="mt-2 flex gap-6">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="text-accent hover:underline">
              {ko.labels.notFound.home}
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/en" lang="en" className="text-accent hover:underline">
              {en.labels.notFound.home}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}

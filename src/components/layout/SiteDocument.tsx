import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";
import { LangProvider } from "@/i18n/client";
import { ContactStrip } from "./ContactStrip";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { themeInitScript } from "./ThemeToggle";

/** The whole page shell for one language — used by both root layouts (app/(ko) and app/[lang]). */
export function SiteDocument({ lang, fontVariables, children }: { lang: Lang; fontVariables: string; children: React.ReactNode }) {
  const { navigation, profile, site, socialLinks } = contentByLang[lang];
  return (
    // suppressHydrationWarning: the theme script may set data-theme on <html> before React hydrates.
    // data-scroll-behavior: Next turns off the CSS smooth scroll while changing pages, so a new page starts at the top.
    <html lang={lang} data-scroll-behavior="smooth" className={fontVariables} suppressHydrationWarning>
      {/* Root-layout markup (rendered by app/(ko)/layout.tsx and app/[lang]/layout.tsx). */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body id="top" className="min-h-dvh antialiased">
        <LangProvider lang={lang}>
          <Header navigation={navigation} />
          <main>{children}</main>
          <ContactStrip email={profile.email} socialLinks={socialLinks} />
          <Footer owner={`${profile.name} (${profile.altName})`} lastUpdated={site.lastUpdated} />
        </LangProvider>
      </body>
    </html>
  );
}

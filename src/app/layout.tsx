import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { ContactStrip, Footer, Header } from "@/components/layout";
import { themeInitScript } from "@/components/layout/ThemeToggle";
import { navigation, profile, site, socialLinks } from "@/content";
import { siteDescription, siteOgTitle } from "@/lib/metadata";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.nameKo} | ${profile.position}`,
    template: `%s | ${profile.nameKo} 포트폴리오`,
  },
  description: siteDescription,
  authors: [{ name: profile.nameKo }],
  openGraph: { type: "website", locale: "ko_KR", siteName: site.title, title: siteOgTitle, description: siteDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the theme script may set data-theme on <html> before React hydrates.
    // data-scroll-behavior: Next turns off the CSS smooth scroll while changing pages, so a new page starts at the top.
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${pretendard.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body id="top" className="min-h-dvh antialiased">
        <Header navigation={navigation} />
        <main>{children}</main>
        <ContactStrip email={profile.email} socialLinks={socialLinks} />
        <Footer owner={`${profile.nameKo} (${profile.nameEn})`} lastUpdated={site.lastUpdated} />
      </body>
    </html>
  );
}

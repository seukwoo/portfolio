import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { ContactStrip, Footer, Header } from "@/components/layout";
import { introduction, navigation, profile, site, socialLinks } from "@/content";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = introduction.slice(1).join(" ");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.nameKo} | ${profile.role} · ${profile.position}`,
    template: `%s | ${profile.nameKo} 포트폴리오`,
  },
  description,
  authors: [{ name: profile.nameKo }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.title,
    title: `${profile.nameKo} | ${profile.role}`,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${geistMono.variable}`}>
      <body id="top" className="min-h-dvh antialiased">
        <Header navigation={navigation} />
        <main>{children}</main>
        <ContactStrip email={profile.email} socialLinks={socialLinks} />
        <Footer owner={`${profile.nameKo} (${profile.nameEn})`} lastUpdated={site.lastUpdated} notionUrl={site.notionUrl} />
      </body>
    </html>
  );
}

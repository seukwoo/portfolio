import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

export const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const fontVariables = `${pretendard.variable} ${geistMono.variable}`;

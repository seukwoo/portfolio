import { SiteDocument } from "@/components/layout/SiteDocument";
import { layoutMetadata } from "@/lib/metadata";
import { fontVariables } from "../fonts";
import "../globals.css";

// Korean root layout: unprefixed URLs (/, /projects, /resume …). English lives in app/[lang].
export const metadata = layoutMetadata("ko");

export default function KoreanLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteDocument lang="ko" fontVariables={fontVariables}>
      {children}
    </SiteDocument>
  );
}

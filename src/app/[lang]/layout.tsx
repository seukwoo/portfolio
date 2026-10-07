import { SiteDocument } from "@/components/layout/SiteDocument";
import { langFromParams } from "@/i18n/config";
import { layoutMetadata } from "@/lib/metadata";
import { fontVariables } from "../fonts";
import "../globals.css";

// English root layout: /en/… (Korean is app/(ko) at unprefixed URLs). Only "en" is generated.
export const dynamicParams = false;
export const generateStaticParams = () => [{ lang: "en" }];

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  return layoutMetadata(await langFromParams(params));
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <SiteDocument lang={await langFromParams(params)} fontVariables={fontVariables}>
      {children}
    </SiteDocument>
  );
}

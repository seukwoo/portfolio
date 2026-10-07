import { isLang, LANGS } from "@/i18n/config";
import { renderShareImage } from "@/lib/og";

// Link preview image at a fixed URL per language (/share/ko, /share/en), built once at deploy time.
// A route handler instead of opengraph-image files: those get hashed URLs inside route groups and are
// dropped when a page sets its own openGraph. lib/metadata.ts points every page here.
export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function GET(_request: Request, { params }: RouteContext<"/share/[lang]">) {
  const { lang } = await params;
  return renderShareImage(isLang(lang) ? lang : "ko");
}

"use client";

import Link from "next/link";
import { useLang } from "@/i18n/client";
import { localizePath } from "@/i18n/paths";
import { isAppRoute, opensInNewTab } from "@/lib/links";

type Props = Omit<React.ComponentProps<"a">, "href"> & { href: string };

/**
 * One link component for everything: app routes use next/link (with the /en prefix on English pages),
 * external sites and PDFs open in a new tab. Content keeps plain paths like /projects.
 */
export function AppLink({ href, ...props }: Props) {
  const lang = useLang();
  if (isAppRoute(href)) return <Link href={localizePath(href, lang)} {...props} />;
  const newTab = opensInNewTab(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return <a href={href} {...newTab} {...props} />;
}

import Link from "next/link";
import { isAppRoute, opensInNewTab } from "@/lib/links";

type Props = Omit<React.ComponentProps<"a">, "href"> & { href: string };

/** One link component for everything: app routes use next/link, external sites and PDFs open in a new tab. */
export function AppLink({ href, ...props }: Props) {
  if (isAppRoute(href)) return <Link href={href} {...props} />;
  const newTab = opensInNewTab(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return <a href={href} {...newTab} {...props} />;
}

import { parseRichText } from "@/lib/rich-text";
import { AppLink } from "./AppLink";

/** Renders a content string, turning `[label](url)` and bare URLs into links. */
/** `baseUrl` turns in-site links like /projects/x into absolute URLs (used for the PDF export). */
export function RichText({ text, baseUrl }: { text: string; baseUrl?: string }) {
  return parseRichText(text).map((token, i) =>
    token.type === "text" ? (
      token.value
    ) : (
      <AppLink
        key={i}
        href={baseUrl && token.href.startsWith("/") ? baseUrl + token.href : token.href}
        className="break-all text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
      >
        {token.label}
      </AppLink>
    ),
  );
}

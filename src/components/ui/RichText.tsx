import { cn } from "@/lib/cn";
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
        // Only a bare URL may break anywhere; a labeled link keeps its words whole.
        className={cn(
          "text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent",
          token.label === token.href && "break-all",
        )}
      >
        {token.label}
      </AppLink>
    ),
  );
}

import { cn } from "@/lib/cn";
import { parseRichText } from "@/lib/rich-text";
import { AppLink } from "./AppLink";

/** A leading role tag like "[직접]" / "[Hands-on]" marks who did the work; shown as a small badge. */
const ROLE_TAG = /^\[(직접|리드|협업|Hands-on|Lead|Collab)\]\s*/;
const tagStyle: Record<string, string> = {
  직접: "bg-accent-soft text-accent",
  "Hands-on": "bg-accent-soft text-accent",
  리드: "bg-ink/10 text-ink",
  Lead: "bg-ink/10 text-ink",
  협업: "border border-line text-muted",
  Collab: "border border-line text-muted",
};

/** Renders a content string, turning `[label](url)` and bare URLs into links. */
/** `baseUrl` turns in-site links like /projects/x into absolute URLs (used for the PDF export). */
export function RichText({ text, baseUrl }: { text: string; baseUrl?: string }) {
  const tag = text.match(ROLE_TAG);
  const body = tag ? text.slice(tag[0].length) : text;
  return (
    <>
      {tag && (
        <span
          className={cn(
            "mr-1.5 inline-block rounded px-1.5 py-px align-[1px] text-[0.75em] leading-snug font-semibold whitespace-nowrap",
            tagStyle[tag[1]],
          )}
        >
          {tag[1]}
        </span>
      )}
      {parseRichText(body).map((token, i) =>
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
      )}
    </>
  );
}

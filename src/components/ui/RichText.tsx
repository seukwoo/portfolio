import { parseRichText } from "@/lib/rich-text";
import { AppLink } from "./AppLink";

/** Renders a content string, turning `[label](url)` and bare URLs into links. */
export function RichText({ text }: { text: string }) {
  return parseRichText(text).map((token, i) =>
    token.type === "text" ? (
      token.value
    ) : (
      <AppLink
        key={i}
        href={token.href}
        className="break-all text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
      >
        {token.label}
      </AppLink>
    ),
  );
}

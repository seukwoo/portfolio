export type RichTextToken = { type: "text"; value: string } | { type: "link"; label: string; href: string };

// `[label](url)` or a bare http(s) URL (stops at whitespace or a closing parenthesis).
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)|(https?:\/\/[^\s)]+)/g;

/** Splits a content string into plain text and link tokens. */
export function parseRichText(text: string): RichTextToken[] {
  const tokens: RichTextToken[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href, bare] = match;
    if (match.index > last) tokens.push({ type: "text", value: text.slice(last, match.index) });
    tokens.push({ type: "link", label: label ?? bare, href: href ?? bare });
    last = match.index + whole.length;
  }
  if (last < text.length) tokens.push({ type: "text", value: text.slice(last) });
  return tokens;
}

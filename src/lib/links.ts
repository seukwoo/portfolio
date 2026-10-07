/** App routes such as `/projects` (handled by next/link). Files like `/docs/resume.pdf` are not routes. */
export const isAppRoute = (href: string) => href.startsWith("/") && !/\.\w+$/.test(href);

/** External sites and documents open in a new tab. */
export const opensInNewTab = (href: string) => /^https?:\/\//.test(href) || href.endsWith(".pdf");

/** Mail link with a subject, so the recipient sees the message came from the portfolio. */
export const mailHref = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

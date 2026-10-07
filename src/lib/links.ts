/** App routes such as `/projects` (handled by next/link). Files like `/docs/resume.pdf` are not routes. */
export const isAppRoute = (href: string) => href.startsWith("/") && !/\.\w+$/.test(href);

/** External sites and documents open in a new tab. */
export const opensInNewTab = (href: string) => /^https?:\/\//.test(href) || href.endsWith(".pdf");

export const mailHref = (email: string) => `mailto:${email}`;

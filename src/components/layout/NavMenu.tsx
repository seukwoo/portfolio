"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppLink } from "@/components/ui";
import { labels } from "@/content/labels";
import { cn } from "@/lib/cn";
import type { LinkItem } from "@/types/content";
import { ThemeToggle } from "./ThemeToggle";

const isActive = (pathname: string, href: string) =>
  href.startsWith("/") && (pathname === href || pathname.startsWith(`${href}/`));

/** Inline menu on desktop; a ☰ toggle with a full-width panel on mobile. */
export function NavMenu({ items }: { items: LinkItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Links close the panel on click; Escape closes it too.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = (className: string) =>
    items.map((item) => (
      <AppLink
        key={item.href}
        href={item.href}
        aria-current={isActive(pathname, item.href) ? "page" : undefined}
        onClick={() => setOpen(false)}
        className={cn(className, isActive(pathname, item.href) && "text-accent")}
      >
        {item.label}
      </AppLink>
    ));

  return (
    <nav aria-label={labels.nav.main} className="flex items-center gap-1 sm:gap-2">
      <div className="hidden items-center gap-1 text-sm sm:flex">
        {links("rounded-full px-3 py-1.5 hover:bg-surface-2")}
      </div>

      <ThemeToggle />

      <button
        type="button"
        className="grid size-10 place-items-center rounded-full border border-line sm:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.nav.closeMenu : labels.nav.openMenu}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-line bg-bg px-4 pb-4 shadow-sm sm:hidden"
      >
        <div className="flex flex-col">{links("border-b border-line py-4 text-lg font-semibold last:border-0")}</div>
      </div>
    </nav>
  );
}

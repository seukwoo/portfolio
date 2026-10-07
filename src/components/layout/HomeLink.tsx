"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

/** Header "Home": a normal link elsewhere; on the home page itself it scrolls back to the top. */
export function HomeLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={routes.home}
      className={className}
      onClick={(e) => {
        if (pathname !== routes.home) return;
        e.preventDefault();
        window.scrollTo({ top: 0 });
      }}
    >
      {children}
    </Link>
  );
}

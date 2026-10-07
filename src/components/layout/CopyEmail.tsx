"use client";

import { useEffect, useState } from "react";
import { useLabels } from "@/i18n/client";
import { cn } from "@/lib/cn";

type Status = "idle" | "copied" | "failed";

/** Older copy path for browsers or contexts where the Clipboard API is unavailable or blocked. */
function copyWithSelection(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  return ok;
}

/** The email address itself; clicking copies it and shows "복사됨" beside it for two seconds. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const labels = useLabels();
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus(copyWithSelection(email) ? "copied" : "failed");
    }
  };

  const l = labels.contact;
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={l.copyEmailLabel(email)}
      className={cn("group inline-flex flex-wrap items-baseline gap-x-3 text-left", className)}
    >
      <span className="font-mono text-sm break-all underline decoration-line underline-offset-4 group-hover:text-accent group-hover:decoration-accent">
        {email}
      </span>
      <span aria-live="polite" className={cn("text-xs", status === "idle" ? "text-muted" : "font-semibold text-accent")}>
        {status === "copied" ? l.copied : status === "failed" ? l.copyFailed : l.copyHint}
      </span>
    </button>
  );
}

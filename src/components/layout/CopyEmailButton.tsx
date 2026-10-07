"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui/ButtonLink";
import { labels } from "@/content/labels";

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

/** Copies the address — works even when no mail app is set up for mailto links. */
export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
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
    <button type="button" onClick={copy} className={buttonClass("secondary", `whitespace-nowrap ${className ?? ""}`)}>
      <span aria-live="polite">{status === "copied" ? l.copied : status === "failed" ? l.copyFailed : l.copyEmail}</span>
    </button>
  );
}

import type { Activity, ActivityKind } from "@/types/content";

const order: ActivityKind[] = ["award", "paper", "activity"];

/** Awards, then papers, then other activities — each newest first. Empty groups are left out. */
export function groupActivities(activities: Activity[]) {
  return order
    .map((kind) => ({
      kind,
      items: activities.filter((a) => a.kind === kind).sort((a, b) => b.date.localeCompare(a.date)),
    }))
    .filter((group) => group.items.length > 0);
}

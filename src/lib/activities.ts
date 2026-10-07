import type { Activity, ActivityKind } from "@/types/content";

const order: ActivityKind[] = ["award", "paper", "activity"];
const newestFirst = (a: Activity, b: Activity) => b.date.localeCompare(a.date);

/**
 * Awards, then papers, then other activities — each newest first, empty groups left out.
 * Student-era items are not in the groups; see `studentActivities`.
 */
export function groupActivities(activities: Activity[]) {
  return order
    .map((kind) => ({
      kind,
      items: activities.filter((a) => a.kind === kind && !a.student).sort(newestFirst),
    }))
    .filter((group) => group.items.length > 0);
}

/** Student-era awards and activities (folded on the web, left out of the PDF), newest first. */
export const studentActivities = (activities: Activity[]) => activities.filter((a) => a.student).sort(newestFirst);

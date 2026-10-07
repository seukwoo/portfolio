import { Eyebrow } from "@/components/ui";
import type { Activity } from "@/types/content";

/** One row of the award/activity timeline: date on the left, details on the right. */
export function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-8">
      <Eyebrow className="text-sm">{activity.date}</Eyebrow>
      <div>
        <h3 className="font-semibold">{activity.title}</h3>
        <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
          {activity.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {activity.bullets && (
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
            {activity.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {activity.footer && <p className="mt-2 text-sm text-muted">{activity.footer}</p>}
      </div>
    </div>
  );
}

import { ActivityItem, CertificationCard, DegreeCard } from "@/components/credentials";
import { Reveal } from "@/components/motion";
import { labels } from "@/content";
import { groupActivities } from "@/lib/activities";
import type { Activity, Certification, Degree, SectionMeta } from "@/types/content";
import { Section } from "./Section";

export function DegreesSection({ meta, degrees, bare }: { meta: SectionMeta; degrees: Degree[]; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <Reveal className="grid gap-5 md:grid-cols-2">
        {degrees.map((degree) => (
          <div data-reveal key={degree.school}>
            <DegreeCard degree={degree} />
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function ActivitiesSection({ meta, activities, bare }: { meta: SectionMeta; activities: Activity[]; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <div className="space-y-10">
        {groupActivities(activities).map((group) => (
          <Reveal key={group.kind}>
            <h3 className="mb-3 text-lg font-semibold">{labels.activityKinds[group.kind]}</h3>
            <ol className="divide-y divide-line border-y border-line">
              {group.items.map((activity) => (
                <li data-reveal key={activity.title}>
                  <ActivityItem activity={activity} />
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CertificationsSection({ meta, certifications, bare }: { meta: SectionMeta; certifications: Certification[]; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <Reveal className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification) => (
          <div data-reveal key={certification.title}>
            <CertificationCard certification={certification} />
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

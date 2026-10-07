import { Card } from "@/components/ui";
import type { Degree } from "@/types/content";

export function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <Card className="p-6 sm:p-8">
      <h3 className="text-lg font-bold">{degree.school}</h3>
      <p className="mt-3 font-medium text-accent">{degree.degree}</p>
      <div className="mt-4 space-y-1 text-sm text-muted">
        <p>{degree.gpa}</p>
        <p>{degree.focus}</p>
        <p className="font-mono text-xs">{degree.period}</p>
      </div>
    </Card>
  );
}

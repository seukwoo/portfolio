import { Card } from "@/components/ui";
import type { Strength } from "@/types/content";

export function StrengthCard({ strength, index }: { strength: Strength; index: number }) {
  return (
    <Card className="rounded-2xl p-5">
      <p className="flex items-baseline gap-3 font-semibold">
        <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
        {strength.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{strength.description}</p>
    </Card>
  );
}

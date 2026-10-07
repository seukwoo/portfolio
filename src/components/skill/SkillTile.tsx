import { Card } from "@/components/ui";
import { SkillIcon } from "./SkillIcon";

export function SkillTile({ name }: { name: string }) {
  return (
    <Card className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center">
      <SkillIcon name={name} />
      <span className="text-xs font-medium">{name}</span>
    </Card>
  );
}

import { SkillIcon } from "./SkillIcon";

/** Icon + name on one line; sized to its label so names never break mid-word. */
export function SkillTile({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium whitespace-nowrap">
      <SkillIcon name={name} className="size-5 shrink-0" />
      {name}
    </span>
  );
}

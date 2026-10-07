import type { Experience, ExperienceGroup, ExperienceUnit } from "@/types/content";

export const isGroup = (experience: Experience): experience is ExperienceGroup => "units" in experience;

/** The stints to list under a company: its affiliates for a group, otherwise the company itself. */
export const experienceUnits = (experience: Experience): ExperienceUnit[] =>
  isGroup(experience) ? experience.units : [experience];

/** "2017.01.02 - 2025.04.14" → "8년 3개월". Returns null for an open-ended tenure. */
export function tenureLength(tenure: string): string | null {
  const dates = tenure.match(/\d{4}\.\d{2}\.\d{2}/g);
  if (!dates || dates.length < 2) return null;
  const [start, end] = dates.map((d) => d.split(".").map(Number));
  let months = (end[0] - start[0]) * 12 + (end[1] - start[1]) - (end[2] < start[2] ? 1 : 0);
  if (months < 0) months = 0;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years}년`, rest && `${rest}개월`].filter(Boolean).join(" ") || "1개월 미만";
}

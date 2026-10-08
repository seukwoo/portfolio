import type { Experience, ExperienceGroup, ExperienceUnit } from "@/types/content";

export const isGroup = (experience: Experience): experience is ExperienceGroup => "units" in experience;

/** The stints to list under a company: its affiliates for a group, otherwise the company itself. */
export const experienceUnits = (experience: Experience): ExperienceUnit[] =>
  isGroup(experience) ? experience.units : [experience];

type FormatLength = (years: number, months: number) => string;

/** "2017.01 - 2025.04" (or with days) → format(8, 3), e.g. "8년 3개월". Returns null for an open-ended tenure. */
export function tenureLength(tenure: string, format: FormatLength): string | null {
  const dates = tenure.match(/\d{4}\.\d{2}(\.\d{2})?/g);
  if (!dates || dates.length < 2) return null;
  const [start, end] = dates.map((d) => d.split(".").map(Number));
  // Month precision ("2017.01 - 2025.04") counts both months; day precision drops an unfinished month.
  const dayAdjust = start.length > 2 && end.length > 2 ? (end[2] < start[2] ? 1 : 0) : 0;
  let months = (end[0] - start[0]) * 12 + (end[1] - start[1]) - dayAdjust;
  if (months < 0) months = 0;
  const years = Math.floor(months / 12);
  return format(years, months % 12);
}

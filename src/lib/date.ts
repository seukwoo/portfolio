/** Formats a date as `YYYY.MM.DD` in Korea time. */
export function formatKoreanDate(date: Date) {
  const [y, m, d] = date.toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" }).split("-");
  return `${y}.${m}.${d}`;
}

/**
 * Pages are prerendered at build time, so "now" during the build is the deploy date.
 * Used for "Last updated" — it refreshes on every deploy without manual edits.
 */
export const buildDate = formatKoreanDate(new Date());

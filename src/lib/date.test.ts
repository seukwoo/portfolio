import { describe, expect, it } from "vitest";
import { formatKoreanDate } from "./date";

describe("formatKoreanDate", () => {
  it("formats in Korea time as YYYY.MM.DD", () => {
    // 2026-10-06 15:30 UTC is already 2026-10-07 in Korea
    expect(formatKoreanDate(new Date("2026-10-06T15:30:00Z"))).toBe("2026.10.07");
  });
});

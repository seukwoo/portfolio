import { describe, expect, it } from "vitest";
import { labels as en } from "@/content/en/labels";
import { labels as ko } from "@/content/labels";
import { tenureLength } from "./experience";

describe("tenureLength", () => {
  it("counts whole months between the two dates", () => {
    expect(tenureLength("2017.01.02 - 2025.04.14", ko.experience.tenureLength)).toBe("8년 3개월");
    expect(tenureLength("2025.04.22 - 2026.01.05", ko.experience.tenureLength)).toBe("8개월");
    expect(tenureLength("2020.07.25 - 2022.07.25", ko.experience.tenureLength)).toBe("2년");
    expect(tenureLength("2017.01.02 - 2025.04.14", en.experience.tenureLength)).toBe("8 yrs 3 mos");
    expect(tenureLength("2017.01 - 2025.04", ko.experience.tenureLength)).toBe("8년 3개월");
  });

  it("leaves open-ended tenures alone", () => {
    expect(tenureLength("2026.01.06 - 현재", ko.experience.tenureLength)).toBeNull();
  });
});

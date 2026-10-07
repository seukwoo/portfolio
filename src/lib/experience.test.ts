import { describe, expect, it } from "vitest";
import { tenureLength } from "./experience";

describe("tenureLength", () => {
  it("counts whole months between the two dates", () => {
    expect(tenureLength("2017.01.02 - 2025.04.14")).toBe("8년 3개월");
    expect(tenureLength("2025.04.22 - 2026.01.05")).toBe("8개월");
    expect(tenureLength("2020.07.25 - 2022.07.25")).toBe("2년");
  });

  it("leaves open-ended tenures alone", () => {
    expect(tenureLength("2026.01.06 - 현재")).toBeNull();
  });
});

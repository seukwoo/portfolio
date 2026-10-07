import { describe, expect, it } from "vitest";
import { parseRichText } from "./rich-text";

describe("parseRichText", () => {
  it("returns plain text untouched", () => {
    expect(parseRichText("서비스 플로우 설계")).toEqual([{ type: "text", value: "서비스 플로우 설계" }]);
  });

  it("parses markdown links", () => {
    expect(parseRichText("[ProtoPie](https://www.protopie.io/) 의 AI")).toEqual([
      { type: "link", label: "ProtoPie", href: "https://www.protopie.io/" },
      { type: "text", value: " 의 AI" },
    ]);
  });

  it("keeps parentheses that wrap a bare URL outside the link", () => {
    expect(parseRichText("상용화 운영 중 (https://www.crotraining.store/)")).toEqual([
      { type: "text", value: "상용화 운영 중 (" },
      { type: "link", label: "https://www.crotraining.store/", href: "https://www.crotraining.store/" },
      { type: "text", value: ")" },
    ]);
  });
});

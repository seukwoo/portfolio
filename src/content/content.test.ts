// Guards against broken content edits: missing files, duplicate slugs, stray personal data.
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import * as content from "@/content";
import { parseRichText } from "@/lib/rich-text";
import { routes } from "@/lib/routes";

const publicFile = (href: string) => path.join(process.cwd(), "public", href);

describe("content", () => {
  it("has unique project slugs", () => {
    const slugs = content.projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every project at least one existing screenshot", () => {
    for (const project of content.projects) {
      expect(project.images.length, project.slug).toBeGreaterThan(0);
      for (const image of [...project.images, ...(project.cardImage ? [project.cardImage] : [])]) {
        expect(existsSync(publicFile(image.src)), image.src).toBe(true);
      }
    }
  });

  it("points every document and the profile photo at an existing file", () => {
    expect(existsSync(publicFile(content.resumePdf.href)), "run pnpm resume:pdf").toBe(true);
    expect(existsSync(publicFile(content.profile.photo.src))).toBe(true);
  });

  it("uses unique section anchors", () => {
    const ids = Object.values(content.sections).map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("lists projects newest first", () => {
    const starts = content.projects.map((p) => p.period.split("-")[0].trim());
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it("features only existing projects", () => {
    const slugs = new Set(content.projects.map((p) => p.slug));
    for (const slug of content.featuredProjectSlugs) expect(slugs.has(slug), slug).toBe(true);
    expect(content.featuredProjectSlugs.length).toBeGreaterThan(0);
  });

  it("links the latest-work card to an existing project", () => {
    const hrefs = content.projects.map((p) => routes.project(p.slug));
    expect(hrefs).toContain(content.latestWork.href);
  });

  it("points navigation at real pages or the contact anchor", () => {
    const pages = new Set<string>([routes.projects, routes.resume, routes.contact]);
    for (const item of content.navigation) expect(pages.has(item.href), item.href).toBe(true);
  });

  it("builds the resume table of contents from existing sections", () => {
    const ids = new Set(Object.values(content.sections).map((s) => s.id));
    for (const s of content.resumeSections) expect(ids.has(s.id), s.id).toBe(true);
  });

  it("keeps current-employer specifics out (model names, training pipeline)", () => {
    // ui-code-ai is confidential: only the general flow may be published. See content/home.ts.
    const text = JSON.stringify(content);
    // Decision Graph: only my own design decisions — no internal plans, schedules or colleagues from the design review.
    const internalPlan = ["BYOK", "WBS", "워크샵", "Roadstar", "Mika", "Jeffrey", "Colin", "Checo"];
    for (const term of ["GAT", "YOLO", "SLM", "SageMaker", "RunPod", "Ground Truth", "Rico", "지식 그래프", ...internalPlan]) {
      expect(text, term).not.toContain(term);
    }
  });

  it("only links to pages that exist from inside content text", () => {
    const pages = new Set<string>([routes.home, routes.projects, routes.resume, ...content.projects.map((p) => routes.project(p.slug))]);
    const strings: string[] = [];
    const collect = (v: unknown) => {
      if (typeof v === "string") strings.push(v);
      else if (Array.isArray(v)) v.forEach(collect);
      else if (v && typeof v === "object") Object.values(v).forEach(collect);
    };
    collect([content.projects, content.experiences, content.about, content.hero]);
    const internal = strings.flatMap(parseRichText).flatMap((t) => (t.type === "link" && t.href.startsWith("/") ? [t.href] : []));
    expect(internal.length).toBeGreaterThan(0);
    for (const href of internal) expect(pages.has(href), href).toBe(true);
  });

  it("does not publish a phone number", () => {
    expect(JSON.stringify(content)).not.toMatch(/01[016789]-?\d{3,4}-?\d{4}/);
  });
});

// 보유 스킬 — regrouped from the original Notion skill database by what the projects actually used.
// Every item is backed by at least one project or experience entry.
import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    type: "AI · LLM",
    items: ["Python", "LLM API", "LangGraph", "MCP", "Computer Vision"],
  },
  {
    type: "백엔드 · 인프라",
    items: ["Node.js", "FastAPI", "Java · Spring", "C/C++", "Docker", "Jenkins", "AWS", "Azure"],
  },
  {
    type: "프론트엔드 · 크로스플랫폼",
    items: ["TypeScript", "JavaScript", "React", "React Native", "Three.js", "Unity"],
  },
  { type: "협업 · 분석", items: ["Git", "Jira", "Notion", "Figma", "Google Analytics", "Amplitude"] },
  { type: "플랫폼", items: ["Windows", "Linux", "iOS", "Android"] },
];

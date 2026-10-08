// Skills — regrouped from the original Notion skill database by what the projects actually used.
// Every item is backed by at least one project or experience entry.
import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    type: "AI · LLM",
    items: ["Python", "LLM API", "LangGraph", "MCP", "Computer Vision"],
  },
  {
    type: "Backend · Infra",
    items: ["Node.js", "FastAPI", "Java · Spring", "C/C++", "Docker", "Jenkins", "AWS", "Azure"],
  },
  {
    type: "Frontend · Cross-platform",
    items: ["TypeScript", "JavaScript", "React", "React Native", "Three.js", "Unity"],
  },
  { type: "Collaboration · Analytics", items: ["Git", "Jira", "Notion", "Figma", "Google Analytics", "Amplitude"] },
  { type: "Platforms", items: ["Windows", "Linux", "iOS", "Android"] },
];

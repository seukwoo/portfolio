// Source: Notion "보유 스킬 (Skill)" database, grouped by Type in database order.
// Skill Level / Description are empty in Notion.
import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  { type: "프로그래밍", items: ["Cloud", "Docker", "Jenkins", "Python", "C/C++", "Java Script", "Java"] },
  { type: "협업", items: ["Git", "Notion", "NAS", "Jira", "Redmine"] },
  { type: "운영 체제", items: ["Window", "Linux", "IOS", "Android"] },
];

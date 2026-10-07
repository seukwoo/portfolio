import {
  siAndroid,
  siCplusplus,
  siDocker,
  siFastapi,
  siFigma,
  siGit,
  siGoogleanalytics,
  siIos,
  siJavascript,
  siJenkins,
  siJira,
  siLangchain,
  siLinux,
  siNodedotjs,
  siNotion,
  siPython,
  siPytorch,
  siReact,
  siSpring,
  siThreedotjs,
  siTypescript,
  siUnity,
  type SimpleIcon,
} from "simple-icons";

// Brand marks from simple-icons (CC0). Keys must match the names in content/skills.ts.
const BRAND: Record<string, SimpleIcon> = {
  Python: siPython,
  PyTorch: siPytorch,
  LangGraph: siLangchain,
  "Node.js": siNodedotjs,
  FastAPI: siFastapi,
  "Java · Spring": siSpring,
  "C/C++": siCplusplus,
  Docker: siDocker,
  Jenkins: siJenkins,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  React: siReact,
  "React Native": siReact,
  "Three.js": siThreedotjs,
  Unity: siUnity,
  Git: siGit,
  Jira: siJira,
  Notion: siNotion,
  Figma: siFigma,
  "Google Analytics": siGoogleanalytics,
  Linux: siLinux,
  iOS: siIos,
  Android: siAndroid,
};

// Generic glyphs (24x24, stroke-based) for skills without a suitable brand mark.
const cloud = <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18Z" />;
const GENERIC: Record<string, React.ReactNode> = {
  "LLM API": <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8L18 16z" />,
  MCP: (
    <>
      <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7z" />
      <path d="M12 16v5" />
    </>
  ),
  RAG: (
    <>
      <path d="M6 3h8l4 4v6M6 3v18h7" />
      <circle cx="16.5" cy="17.5" r="2.5" />
      <path d="M18.5 19.5L21 22" />
    </>
  ),
  "Computer Vision": (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  AWS: cloud,
  Azure: cloud,
  Amplitude: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  Windows: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 4v16M4 12h16" />
    </>
  ),
};

export function SkillIcon({ name, className = "size-7" }: { name: string; className?: string }) {
  const brand = BRAND[name];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d={brand.path} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {GENERIC[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}

import {
  siAndroid,
  siCplusplus,
  siDocker,
  siGit,
  siIos,
  siJavascript,
  siJenkins,
  siJira,
  siLinux,
  siNotion,
  siOpenjdk,
  siPython,
  siRedmine,
  type SimpleIcon,
} from "simple-icons";

const BRAND: Record<string, SimpleIcon> = {
  Docker: siDocker,
  Jenkins: siJenkins,
  Python: siPython,
  "C/C++": siCplusplus,
  "Java Script": siJavascript,
  Java: siOpenjdk,
  Git: siGit,
  Notion: siNotion,
  Jira: siJira,
  Redmine: siRedmine,
  Linux: siLinux,
  IOS: siIos,
  Android: siAndroid,
};

// Generic glyphs for skills without a brand mark (24x24, stroke-based).
const GENERIC: Record<string, React.ReactNode> = {
  Cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18Z" />,
  NAS: (
    <>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M8 7.5h.01M8 16.5h.01M12 7.5h4M12 16.5h4" />
    </>
  ),
  Window: (
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

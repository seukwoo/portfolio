import { ProjectsView, projectsMetadata } from "@/views";

export const metadata = projectsMetadata("ko");

export default function Page() {
  return <ProjectsView lang="ko" />;
}

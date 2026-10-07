import { langFromParams } from "@/i18n/config";
import { ProjectsView, projectsMetadata } from "@/views";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">) {
  return projectsMetadata(await langFromParams(params));
}

export default async function Page({ params }: PageProps<"/[lang]/projects">) {
  return <ProjectsView lang={await langFromParams(params)} />;
}

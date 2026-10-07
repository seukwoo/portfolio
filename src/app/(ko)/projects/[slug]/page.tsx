import { ProjectView, projectMetadata, projectSlugs } from "@/views";

export const dynamicParams = false;
export const generateStaticParams = () => projectSlugs("ko");

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  return projectMetadata("ko", (await params).slug);
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  return <ProjectView lang="ko" slug={(await params).slug} />;
}

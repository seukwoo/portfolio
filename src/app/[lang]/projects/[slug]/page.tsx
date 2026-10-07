import { langFromParams } from "@/i18n/config";
import { ProjectView, projectMetadata, projectSlugs } from "@/views";

export const dynamicParams = false;
export const generateStaticParams = () => projectSlugs("en");

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await params;
  return projectMetadata(await langFromParams(params), slug);
}

export default async function Page({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await params;
  return <ProjectView lang={await langFromParams(params)} slug={slug} />;
}

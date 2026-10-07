import { langFromParams } from "@/i18n/config";
import { ResumeView, resumeMetadata } from "@/views";

export async function generateMetadata({ params }: PageProps<"/[lang]/resume">) {
  return resumeMetadata(await langFromParams(params));
}

export default async function Page({ params }: PageProps<"/[lang]/resume">) {
  return <ResumeView lang={await langFromParams(params)} />;
}

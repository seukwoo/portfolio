import { langFromParams } from "@/i18n/config";
import { ResumePrintView, resumePrintMetadata } from "@/views";

export const metadata = resumePrintMetadata;

export default async function Page({ params }: PageProps<"/[lang]/resume/print">) {
  return <ResumePrintView lang={await langFromParams(params)} />;
}

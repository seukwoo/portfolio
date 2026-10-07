import { langFromParams } from "@/i18n/config";
import { HomeView, homeMetadata } from "@/views";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  return homeMetadata(await langFromParams(params));
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  return <HomeView lang={await langFromParams(params)} />;
}

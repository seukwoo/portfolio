import { Container } from "@/components/layout";
import { AppLink, Eyebrow } from "@/components/ui";
import { routes } from "@/lib/routes";
import { labels } from "@/content";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-4 py-24">
      <Eyebrow className="text-sm">{labels.notFound.code}</Eyebrow>
      <h1 className="text-4xl font-bold tracking-tight">{labels.notFound.title}</h1>
      <AppLink href={routes.home} className="text-accent hover:underline">
        {labels.notFound.home}
      </AppLink>
    </Container>
  );
}

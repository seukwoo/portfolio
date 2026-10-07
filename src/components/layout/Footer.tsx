import { getContent } from "@/i18n/server";
import { Container } from "./Container";

type Props = { owner: string; lastUpdated: string };

export async function Footer({ owner, lastUpdated }: Props) {
  const { labels } = await getContent();
  return (
    <footer className="border-t border-line print:hidden">
      <Container className="flex flex-col gap-3 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {owner} · {labels.profile.lastUpdated}: {lastUpdated}
        </p>
        <a href="#top" className="hover:text-ink">
          {labels.footer.backToTop}
        </a>
      </Container>
    </footer>
  );
}

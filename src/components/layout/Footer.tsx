import { labels } from "@/content";
import { Container } from "./Container";

type Props = { owner: string; lastUpdated: string };

export function Footer({ owner, lastUpdated }: Props) {
  return (
    <footer className="border-t border-line">
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

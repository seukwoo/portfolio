import { labels } from "@/content";
import { Container } from "./Container";

type Props = { owner: string; lastUpdated: string; notionUrl: string };

export function Footer({ owner, lastUpdated, notionUrl }: Props) {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-3 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {owner} · {labels.profile.lastUpdated}: {lastUpdated}
        </p>
        <div className="flex gap-5">
          <a href={notionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            {labels.footer.notion}
          </a>
          <a href="#top" className="hover:text-ink">
            {labels.footer.backToTop}
          </a>
        </div>
      </Container>
    </footer>
  );
}

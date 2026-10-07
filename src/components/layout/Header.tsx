import Link from "next/link";
import { labels } from "@/content";
import { routes } from "@/lib/routes";
import type { LinkItem } from "@/types/content";
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";

export function Header({ navigation }: { navigation: LinkItem[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={routes.home} className="text-sm font-semibold tracking-tight hover:text-accent">
          {labels.nav.home}
        </Link>
        <NavMenu items={navigation} />
      </Container>
    </header>
  );
}

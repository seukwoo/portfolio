import { labels } from "@/content";
import { BrandMark } from "@/components/ui";
import type { LinkItem } from "@/types/content";
import { Container } from "./Container";
import { HomeLink } from "./HomeLink";
import { NavMenu } from "./NavMenu";

export function Header({ navigation }: { navigation: LinkItem[] }) {
  return (
    <header className="sticky top-0 z-50 print:hidden border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <HomeLink className="flex items-center gap-2.5 text-sm font-semibold tracking-tight hover:text-accent">
          <BrandMark />
          {labels.nav.home}
        </HomeLink>
        <NavMenu items={navigation} />
      </Container>
    </header>
  );
}

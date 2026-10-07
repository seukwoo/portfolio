import { Container } from "@/components/layout";
import { Reveal, SplitHeadline } from "@/components/motion";
import { ButtonLink, Eyebrow } from "@/components/ui";
import type { HomeHero as HomeHeroContent } from "@/types/content";

type Props = { hero: HomeHeroContent; aside: React.ReactNode };

/** Thesis headline, short intro, calls to action; `aside` sits on the right (below on mobile). */
export function HomeHero({ hero, aside }: Props) {
  return (
    <Container className="grid gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-14 lg:pb-24">
      <div>
        <Eyebrow latin>{hero.eyebrow}</Eyebrow>
        <p className="mt-5 flex items-baseline gap-3">
          <span className="text-2xl font-bold tracking-tight sm:text-3xl">{hero.name}</span>
          <span className="font-mono text-sm text-muted">{hero.nameEn}</span>
        </p>
        <SplitHeadline className="mt-3 text-4xl leading-[1.15] font-bold tracking-tight sm:text-6xl">
          {hero.headline[0]}
          <br />
          <span className="text-accent">{hero.headline[1]}</span>
        </SplitHeadline>
        <Reveal className="mt-8 max-w-2xl">
          <p data-reveal className="text-lg leading-relaxed">
            {hero.intro}
          </p>
          {hero.focus && (
            <p data-reveal className="mt-4 leading-relaxed text-muted">
              {hero.focus}
            </p>
          )}
          <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hero.actions.map((action, i) => (
              <ButtonLink
                key={action.href}
                href={action.href}
                variant={i === 0 ? "primary" : "secondary"}
                className="justify-center"
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
          <p data-reveal className="mt-6 text-xs text-muted">
            {hero.credibility}
          </p>
        </Reveal>
      </div>
      <Reveal>{aside}</Reveal>
    </Container>
  );
}

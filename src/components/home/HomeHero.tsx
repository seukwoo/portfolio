import Image from "next/image";
import { Container } from "@/components/layout";
import { labels } from "@/content";
import { Reveal, SplitHeadline } from "@/components/motion";
import { ButtonLink } from "@/components/ui";
import type { HomeHero as HomeHeroContent, ImageAsset } from "@/types/content";

type Props = { hero: HomeHeroContent; photo: ImageAsset; feature: React.ReactNode };

/**
 * Profile-style hero: large round portrait with name and role, then the thesis headline, intro and
 * calls to action. On wide screens `feature` is a third column on the right; narrower, it sits below.
 */
export function HomeHero({ hero, photo, feature }: Props) {
  return (
    <Container className="grid gap-10 pt-12 pb-16 sm:pt-16 md:grid-cols-[200px_1fr] md:gap-12 lg:grid-cols-[240px_1fr] lg:pb-24 xl:grid-cols-[220px_1fr_380px] xl:gap-12">
      <div className="flex items-center gap-5 md:block">
        <Image
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={labels.profile.photoAlt(hero.name)}
          priority
          className="aspect-square size-28 shrink-0 rounded-full border border-line object-cover shadow-sm sm:size-36 md:h-auto md:w-full"
        />
        <div className="md:mt-6">
          <p className="text-2xl font-bold tracking-tight sm:text-3xl">{hero.name}</p>
          <p className="mt-1 text-lg text-muted">{hero.nameEn}</p>
          <p className="mt-3 text-sm leading-snug text-muted">{hero.eyebrow}</p>
        </div>
      </div>

      <div className="md:pt-4">
        <SplitHeadline className="text-[32px] leading-[1.2] font-bold tracking-tight sm:text-5xl sm:leading-[1.15] xl:text-[44px]">
          {hero.headline[0]}
          <br />
          <span className="text-accent">{hero.headline[1]}</span>
        </SplitHeadline>
        <Reveal className="mt-7 max-w-2xl">
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
        </Reveal>
      </div>

      <Reveal className="md:col-span-2 xl:col-span-1 xl:pt-2">{feature}</Reveal>
    </Container>
  );
}

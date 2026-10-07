import { labels } from "@/content";
import { ButtonLink, Eyebrow } from "@/components/ui";
import type { LinkItem } from "@/types/content";
import { Container } from "./Container";
import { CopyEmail } from "./CopyEmail";

type Props = { email: string; socialLinks: LinkItem[] };

/** Shared contact call-to-action rendered above the footer on every page (anchor: #contact). */
export function ContactStrip({ email, socialLinks }: Props) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-line bg-surface-2/60 print:hidden">
      <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <Eyebrow latin>{labels.contact.eyebrow}</Eyebrow>
          <h2 id="contact-title" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {labels.contact.title}
          </h2>
          <p className="mt-3 max-w-xl text-muted">{labels.contact.description}</p>
          <CopyEmail email={email} className="mt-4" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
          {socialLinks.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="secondary" className="justify-center">
              {link.label} ↗
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}

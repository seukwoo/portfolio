import Image from "next/image";
import { labels } from "@/content";
import { mailHref } from "@/lib/links";
import type { DocumentItem, Profile } from "@/types/content";
import { Card, Eyebrow, IconImage } from "@/components/ui";

type Props = { greeting: string; profile: Profile; resumePdf: DocumentItem; lastUpdated: string };

/** Top of /resume: photo, name, contact, and the resume PDF generated from this page. */
export function ResumeHeader({ greeting, profile, resumePdf, lastUpdated }: Props) {
  return (
    <Card className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] lg:items-center">
      <Image
        src={profile.photo.src}
        width={profile.photo.width}
        height={profile.photo.height}
        alt={labels.profile.photoAlt(profile.nameKo)}
        priority
        className="size-24 rounded-full border border-line object-cover object-[50%_20%] shadow-sm sm:size-28"
      />

      <div>
        <Eyebrow className="text-sm">{greeting}</Eyebrow>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{profile.nameKo}</h1>
        <p className="mt-1 text-muted">
          {profile.position} · {profile.role}
        </p>
        <p className="mt-6 mb-2 text-xs font-semibold text-muted">{labels.profile.contact}</p>
        <a href={mailHref(profile.email)} className="inline-flex items-center gap-3 text-sm break-all hover:text-accent">
          <IconImage src="/images/mail.svg" />
          {profile.email}
        </a>
        <p className="mt-6 text-xs text-muted">
          {labels.profile.lastUpdated}: {lastUpdated}
        </p>
      </div>

      <div className="md:col-span-2 lg:col-span-1">
        <a
          href={resumePdf.href}
          download={labels.profile.resumePdfFileName}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
          </svg>
          {labels.profile.downloadResume}
        </a>
        <p className="mt-2 text-xs text-muted">{labels.profile.resumePdfNote}</p>
      </div>
    </Card>
  );
}

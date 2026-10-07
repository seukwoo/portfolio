import Image from "next/image";
import { labels } from "@/content";
import { mailHref } from "@/lib/links";
import type { DocumentItem, Profile } from "@/types/content";
import { AppLink, Card, Eyebrow, IconImage } from "@/components/ui";

type Props = { greeting: string; profile: Profile; documents: DocumentItem[]; lastUpdated: string };

/** Top of /resume: photo, name, contact, and the downloadable PDFs. */
export function ResumeHeader({ greeting, profile, documents, lastUpdated }: Props) {
  return (
    <Card className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_minmax(0,320px)]">
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
        <p className="mb-2 text-xs font-semibold text-muted">{labels.profile.documents}</p>
        <ul className="grid gap-1 text-sm sm:grid-cols-2 lg:grid-cols-1">
          {documents.map((doc) => (
            <li key={doc.id}>
              <AppLink href={doc.href} className="flex items-center gap-3 rounded-lg py-1.5 hover:text-accent">
                <IconImage src="/images/web.svg" />
                <span className="flex-1">{doc.label}.pdf</span>
                <span aria-hidden className="text-muted">
                  ↗
                </span>
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

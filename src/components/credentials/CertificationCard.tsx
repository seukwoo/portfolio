import { Card, Eyebrow } from "@/components/ui";
import type { Certification } from "@/types/content";

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card className="p-6 sm:p-8">
      <Eyebrow>{certification.date}</Eyebrow>
      <h3 className="mt-2 text-lg font-bold">{certification.title}</h3>
      <div className="mt-3 space-y-1 text-sm text-muted">
        {certification.detail && <p>{certification.detail}</p>}
        <p className="font-mono text-xs">{certification.id}</p>
        <p>{certification.issuer}</p>
      </div>
    </Card>
  );
}

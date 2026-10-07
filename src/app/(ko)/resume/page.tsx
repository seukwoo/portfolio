import { ResumeView, resumeMetadata } from "@/views";

export const metadata = resumeMetadata("ko");

export default function Page() {
  return <ResumeView lang="ko" />;
}

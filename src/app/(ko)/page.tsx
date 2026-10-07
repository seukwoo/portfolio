import { HomeView, homeMetadata } from "@/views";

export const metadata = homeMetadata("ko");

export default function Page() {
  return <HomeView lang="ko" />;
}

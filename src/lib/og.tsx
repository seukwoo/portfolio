import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";
import { brandMarkSvg } from "@/lib/brand";

// Link preview image (KakaoTalk, Slack, LinkedIn …), built from the same content as the home hero.
// Rendered by app/(ko)/opengraph-image.tsx and app/[lang]/opengraph-image.tsx.
export const ogSize = { width: 1200, height: 630 };

export const ogAlt = (lang: Lang) => {
  const { hero } = contentByLang[lang];
  return `${hero.name} — ${hero.headline.join(" ")}`;
};

const fontDir = join(process.cwd(), "node_modules/pretendard/dist/public/static");
const [regular, semibold, bold] = await Promise.all(
  ["Pretendard-Regular.otf", "Pretendard-SemiBold.otf", "Pretendard-Bold.otf"].map((f) => readFile(join(fontDir, f))),
);

// The renderer reads PNG/JPEG, not WebP.
const photo = await sharp(join(process.cwd(), "public", contentByLang.ko.profile.photo.src)).resize(520, 520).png().toBuffer();
const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

const markSrc = `data:image/svg+xml;base64,${Buffer.from(brandMarkSvg).toString("base64")}`;

const ink = "#1d1a17";
const muted = "#6b6660";
const accent = "#b5431a";

/**
 * Big shapes only: previews are shown small (chat bubbles) and LinkedIn re-compresses them,
 * so no small text — the URL and site title already appear under the preview card.
 */
export function renderShareImage(lang: Lang) {
  const { hero } = contentByLang[lang];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 72px",
          background: "#f6f3ee",
          fontFamily: "Pretendard",
          color: ink,
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by next/og */}
        <img src={markSrc} width={56} height={56} alt="" style={{ position: "absolute", top: 48, right: 56 }} />
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by next/og */}
        <img
          src={photoSrc}
          width={340}
          height={340}
          alt=""
          style={{ flexShrink: 0, borderRadius: 9999, border: "8px solid #ffffff", boxShadow: "0 10px 30px rgba(0,0,0,0.14)" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{hero.name}</span>
            <span style={{ fontSize: 40, fontWeight: 600, color: muted }}>{hero.altName}</span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 36, fontSize: 50, fontWeight: 700, lineHeight: 1.2, letterSpacing: -1 }}
          >
            <span>{hero.headline[0]}</span>
            <span style={{ color: accent }}>{hero.headline[1]}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Pretendard", data: regular, weight: 400, style: "normal" },
        { name: "Pretendard", data: semibold, weight: 600, style: "normal" },
        { name: "Pretendard", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}

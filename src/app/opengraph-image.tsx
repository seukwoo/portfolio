import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { hero, profile, site } from "@/content";

// Link preview image (KakaoTalk, Slack, LinkedIn …), built from the same content as the home hero.
export const alt = `${hero.name} — ${hero.headline.join(" ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/pretendard/dist/public/static");
const [regular, semibold, bold] = await Promise.all(
  ["Pretendard-Regular.otf", "Pretendard-SemiBold.otf", "Pretendard-Bold.otf"].map((f) => readFile(join(fontDir, f))),
);

// The renderer reads PNG/JPEG, not WebP.
const photo = await sharp(join(process.cwd(), "public", profile.photo.src)).resize(520, 520).png().toBuffer();
const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

// Same node-graph mark as the favicon (app/icon.svg).
const markSrc = `data:image/svg+xml;base64,${Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1d1a17"/><g stroke="#f2814b" stroke-width="4" stroke-linecap="round"><path d="M20 20 L44 32 M20 44 L44 32"/></g><circle cx="20" cy="20" r="7" fill="#f6f3ee"/><circle cx="20" cy="44" r="7" fill="#f6f3ee"/><circle cx="44" cy="32" r="9" fill="#f2814b"/></svg>',
).toString("base64")}`;

const ink = "#1d1a17";
const muted = "#6b6660";
const accent = "#b5431a";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0 80px 56px",
          background: "#f6f3ee",
          fontFamily: "Pretendard",
          color: ink,
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 64 }}>
          <img
            src={photoSrc}
            width={260}
            height={260}
            alt=""
            style={{ borderRadius: 9999, border: "6px solid #ffffff", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: 2.5, color: accent }}>{hero.eyebrow.toUpperCase()}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginTop: 18 }}>
              <span style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1.5 }}>{hero.name}</span>
              <span style={{ fontSize: 30, fontWeight: 400, color: muted }}>{hero.nameEn}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 22, fontSize: 44, fontWeight: 700, lineHeight: 1.25, letterSpacing: -1 }}>
              <span>{hero.headline[0]}</span>
              <span style={{ color: accent }}>{hero.headline[1]}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #e2dcd2", paddingTop: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={markSrc} width={40} height={40} alt="" />
            <span style={{ fontSize: 24, fontWeight: 600 }}>{site.url.replace(/^https?:\/\//, "")}</span>
          </div>
          <span style={{ fontSize: 22, color: muted }}>{site.title}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: regular, weight: 400, style: "normal" },
        { name: "Pretendard", data: semibold, weight: 600, style: "normal" },
        { name: "Pretendard", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}

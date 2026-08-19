import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/data/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoPath = join(process.cwd(), "public/images/branding/rancho-logo.png");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
          background: "#120d08",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 15% 20%, rgba(198,137,58,0.22), transparent 60%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={360} height={360} alt="" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 560 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#e2ac5c",
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 56,
              fontWeight: 700,
              color: "#f5ecdb",
              lineHeight: 1.15,
            }}
          >
            Sabor de verdade. Do jeito que tem que ser.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

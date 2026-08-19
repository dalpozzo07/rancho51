import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const badgePath = join(process.cwd(), "public/images/branding/rancho-badge.png");
  const badgeSrc = `data:image/png;base64,${readFileSync(badgePath).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0907",
          borderRadius: 6,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={badgeSrc} width={30} height={30} alt="" />
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17120e",
          borderRadius: 6,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 56 52">
          <circle cx="28" cy="26" r="21" fill="none" stroke="#8a6631" strokeWidth="2" />
          <circle cx="28" cy="26" r="12" fill="none" stroke="#d3a253" strokeWidth="2" />
          <circle cx="28" cy="26" r="4" fill="#c15f38" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

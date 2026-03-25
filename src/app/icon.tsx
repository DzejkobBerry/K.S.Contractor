import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

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
          background: "linear-gradient(135deg, #D4A52C 0%, #B8860B 100%)",
          borderRadius: 14,
          color: "#0A0F1A",
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: "-0.04em",
        }}
      >
        KS
      </div>
    ),
    {
      width: 64,
      height: 64,
    }
  );
}

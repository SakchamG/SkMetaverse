import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "512px",
          height: "512px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000ff 0%, #8B5CF6 100%)",
        }}
      >
        <div
          style={{
            width: "420px",
            height: "420px",
            borderRadius: "120px",
            background: "rgba(0,0,0,0.18)",
            border: "2px solid rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
            color: "white",
            fontSize: "140px",
            fontWeight: 900,
            letterSpacing: "-0.06em",
          }}
        >
          Sk
        </div>
      </div>
    ),
    { width: 512, height: 512 }
  );
}


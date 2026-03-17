import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050505 0%, #0A0F1E 40%, #0B1B2A 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px circle at 20% 30%, rgba(35, 206, 217, 0.35) 0%, rgba(35, 206, 217, 0) 60%), radial-gradient(900px circle at 80% 20%, rgba(217, 70, 239, 0.28) 0%, rgba(217, 70, 239, 0) 60%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, rgba(35,206,217,1) 0%, rgba(139,92,246,1) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              boxShadow: "0 16px 60px rgba(35, 206, 217, 0.25)",
            }}
          >
            Sk
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "54px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              SkMetaverse
            </div>
            <div style={{ marginTop: "10px", fontSize: "24px", opacity: 0.9 }}>
              Futuristic AI & Web Solutions
            </div>
          </div>
        </div>
        <div style={{ position: "relative", marginTop: "36px", fontSize: "28px", opacity: 0.92, maxWidth: "980px" }}>
          AI tools, websites, and next‑gen digital experiences for startups and enterprises.
        </div>
        <div style={{ position: "relative", marginTop: "42px", display: "flex", gap: "18px", flexWrap: "wrap" }}>
          {["AI Development", "Web Development", "UI/UX Design", "Automation"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: "18px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div style={{ position: "relative", marginTop: "52px", fontSize: "18px", opacity: 0.75 }}>
          skmetaverse.space
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}


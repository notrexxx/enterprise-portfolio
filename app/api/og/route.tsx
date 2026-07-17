import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "Software Engineering Portfolio";
    const description = searchParams.get("desc") ?? "Full-Stack Developer | React, Node.js, SQL";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#09090b",
            padding: "80px",
            borderTop: "16px solid #ffffff",
          }}
        >
          {/* Brand/Name Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#ffffff",
                color: "#09090b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                borderRadius: "12px",
                marginRight: "20px",
              }}
            >
              AL
            </div>
            <span style={{ fontSize: "32px", color: "#a1a1aa", fontWeight: 600 }}>
              Andres Leon
            </span>
          </div>

          {/* Dynamic Title */}
          <h1
            style={{
              fontSize: "82px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-0.05em",
            }}
          >
            {title}
          </h1>

          {/* Dynamic Description */}
          <p
            style={{
              fontSize: "36px",
              color: "#a1a1aa",
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            {description}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate OG Image", { status: 500 });
  }
}
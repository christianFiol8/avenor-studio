import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Avenor Studio — Soluciones digitales para empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#0a0a0f",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow de fondo */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(124, 58, 237, 0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#7c3aed",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            AVENOR STUDIO
          </span>
        </div>

        {/* Título */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Construimos soluciones{" "}
          <span style={{ color: "#a855f7" }}>digitales</span> para empresas.
        </div>

        {/* Descripción */}
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Sitios web, aplicaciones, IA y software a medida.
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: "48px",
            backgroundColor: "rgba(124, 58, 237, 0.2)",
            border: "1px solid rgba(124, 58, 237, 0.4)",
            borderRadius: "999px",
            padding: "8px 24px",
            color: "#a855f7",
            fontSize: "16px",
            letterSpacing: "2px",
          }}
        >
          avenor.studio
        </div>
      </div>
    ),
    { ...size }
  );
}
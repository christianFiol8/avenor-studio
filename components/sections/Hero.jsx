"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const dashboardRef = useRef(null);

  useEffect(() => {
    const el = dashboardRef.current;
    if (!el) return;
    let frame;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const progress = ((ts - start) % 3000) / 3000;
      el.style.transform = `translateY(${Math.sin(progress * Math.PI * 2) * 8}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "7rem 2rem 0 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "4rem",
      }}
    >
      {/* Texto izquierda */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          Construimos soluciones
          <br />
          tecnológicas para
          <br />
          empresas que quieren{" "}
          <span style={{ color: "var(--accent-purple-light)" }}>crecer.</span>
        </h1>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "420px",
            marginBottom: "2.5rem",
          }}
        >
          Desarrollamos sitios web, aplicaciones, software personalizado y
          automatizaciones con inteligencia artificial para ayudar a los
          negocios a digitalizarse y crecer.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#contacto"
            style={{
              backgroundColor: "var(--accent-purple)",
              color: "white",
              padding: "0.85rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.target.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.target.style.opacity = "1"; }}
          >
            Agenda una consulta
          </a>
          <a
            href="#proyectos"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              padding: "0.85rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent-purple)"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "var(--border)"; }}
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* Dashboard derecha */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          ref={dashboardRef}
          style={{
            width: "100%",
            maxWidth: "520px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "1.5rem",
            boxShadow: "0 0 60px rgba(124, 58, 237, 0.15)",
          }}
        >
          {/* Header del dashboard */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
              Avenor Studio+
            </span>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
                <div
                  key={color}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Barras de métricas */}
          {[
            { label: "Rendimiento", value: 92, color: "var(--accent-purple)" },
            { label: "Conversiones", value: 78, color: "#06b6d4" },
            { label: "Retención", value: 85, color: "#10b981" },
          ].map((metric) => (
            <div key={metric.label} style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>
                  {metric.label}
                </span>
                <span style={{ color: "var(--text-primary)", fontSize: "0.75rem" }}>
                  {metric.value}%
                </span>
              </div>
              <div
                style={{
                  height: "4px",
                  backgroundColor: "var(--border)",
                  borderRadius: "2px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${metric.value}%`,
                    backgroundColor: metric.color,
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Mini gráfica */}
          <div
            style={{
              marginTop: "1.5rem",
              height: "80px",
              display: "flex",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  backgroundColor:
                    i === 9
                      ? "var(--accent-purple)"
                      : "rgba(124, 58, 237, 0.3)",
                  borderRadius: "3px 3px 0 0",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
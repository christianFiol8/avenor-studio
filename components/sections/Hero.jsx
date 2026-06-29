"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "Rendimiento", value: 92, color: "var(--accent-purple)" },
  { label: "Conversiones", value: 78, color: "#06b6d4" },
  { label: "Retención", value: 85, color: "#10b981" },
];

const bars = [40, 65, 45, 80, 55, 90, 70, 95, 60, 85];

export default function Hero() {
  const dashboardRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
    <section id="hero" className="hero-section">
      {/* Texto izquierda */}
      <div
        className="hero-text"
        style={{
          opacity: animated ? 1 : 0,
          transform: animated ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            borderRadius: "999px",
            padding: "0.3rem 1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent-purple)",
              boxShadow: "0 0 6px var(--accent-purple)",
            }}
          />
          <span
            style={{
              color: "var(--accent-purple-light)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            INGENIERÍA CREATIVA
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
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
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(124, 58, 237, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.3)";
            }}
          >
            Agenda una consulta
          </a>
          {/*<a
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
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-purple)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver proyectos
          </a> */}
        </div>
      </div>

      {/* Dashboard derecha */}
      <div
        className="hero-dashboard"
        style={{
          opacity: animated ? 1 : 0,
          transform: animated ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
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
            boxShadow: "0 0 80px rgba(124, 58, 237, 0.12)",
          }}
        >
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

          {metrics.map((metric, i) => (
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
                    width: animated ? `${metric.value}%` : "0%",
                    backgroundColor: metric.color,
                    borderRadius: "2px",
                    transition: `width 1s ease ${0.5 + i * 0.15}s`,
                  }}
                />
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: "1.5rem",
              height: "80px",
              display: "flex",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: animated ? `${h}%` : "0%",
                  backgroundColor:
                    i === 9 ? "var(--accent-purple)" : "rgba(124, 58, 237, 0.3)",
                  borderRadius: "3px 3px 0 0",
                  transition: `height 0.6s ease ${0.8 + i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
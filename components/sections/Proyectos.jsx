"use client";

import { useEffect, useRef, useState } from "react";

const proyectos = [
  {
    tag: "React + Node.js",
    title: "Nexo ERP",
    problema: "Fragmentación operativa.",
    solucion: "Un panel de control centralizado de alto rendimiento.",
    color: "#7c3aed",
  },
  {
    tag: "Flutter + Firebase",
    title: "BioTech App",
    problema: "Seguimiento deficiente de pacientes.",
    solucion: "Acompañante móvil con biometría integrada.",
    color: "#06b6d4",
  },
  {
    tag: "Python + OpenAI API",
    title: "Asistente Legal IA",
    problema: "Lentitud en revisión de documentos.",
    solucion: "Integración de LLM personalizada.",
    color: "#10b981",
  },
];

function AnimatedCard({ children, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <AnimatedCard delay={0}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Casos de éxito
              </h2>
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "var(--accent-purple)",
                  marginBottom: "0.75rem",
                }}
              />
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Soluciones reales para desafíos complejos.
              </p>
            </div>
            <a
              href="#"
              style={{
                color: "var(--accent-purple-light)",
                textDecoration: "none",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Ver todos los proyectos →
            </a>
          </div>
        </AnimatedCard>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {proyectos.map((p, i) => (
            <AnimatedCard key={p.title} delay={i * 0.15}>
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Imagen placeholder con gradiente único por proyecto */}
                <div
                  style={{
                    height: "180px",
                    background: `linear-gradient(135deg, ${p.color}15 0%, var(--bg-secondary) 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: `${p.color}20`,
                      border: `1px solid ${p.color}50`,
                      borderRadius: "999px",
                      padding: "0.25rem 0.75rem",
                      fontSize: "0.7rem",
                      color: p.color,
                      fontWeight: 500,
                    }}
                  >
                    {p.tag}
                  </div>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "16px",
                      backgroundColor: `${p.color}20`,
                      border: `1px solid ${p.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                </div>

                {/* Contenido */}
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Problema: </span>
                    {p.problema}{" "}
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Solución: </span>
                    {p.solucion}
                  </p>
                  <button
                    style={{
                      marginTop: "1.25rem",
                      background: "none",
                      border: "none",
                      color: p.color,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      padding: 0,
                      fontFamily: "inherit",
                      fontWeight: 500,
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.target.style.opacity = "0.7"; }}
                    onMouseLeave={(e) => { e.target.style.opacity = "1"; }}
                  >
                    Conocer más →
                  </button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
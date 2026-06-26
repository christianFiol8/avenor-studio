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

function AnimatedCard({ children, delay = 0 }) {
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
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <AnimatedCard delay={0}>
          <div className="proyectos-header">
            <div>
              <h2 className="section-title">Casos de éxito</h2>
              <div className="section-underline" />
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Soluciones reales para desafíos complejos.
              </p>
            </div>
            <a
              href="#"
              className="proyectos-link"
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Ver todos los proyectos →
            </a>
          </div>
        </AnimatedCard>

        <div className="grid-3">
          {proyectos.map((p, i) => (
            <AnimatedCard key={p.title} delay={i * 0.15}>
              <div
                className="proyecto-card"
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
                <div
                  className="proyecto-imagen"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}15 0%, var(--bg-secondary) 100%)`,
                  }}
                >
                  <div
                    className="proyecto-tag"
                    style={{
                      backgroundColor: `${p.color}20`,
                      border: `1px solid ${p.color}50`,
                      color: p.color,
                    }}
                  >
                    {p.tag}
                  </div>
                  <div
                    className="proyecto-icon"
                    style={{
                      backgroundColor: `${p.color}20`,
                      border: `1px solid ${p.color}40`,
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                </div>

                <div className="proyecto-content">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-description">
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Problema: </span>
                    {p.problema}{" "}
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Solución: </span>
                    {p.solucion}
                  </p>
                  <button
                    className="proyecto-btn"
                    style={{ color: p.color }}
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
"use client";

const proyectos = [
  {
    tag: "React + Node.js",
    title: "Nexo ERP",
    problema: "Fragmentación operativa.",
    solucion: "Un panel de control centralizado de alto rendimiento.",
  },
  {
    tag: "Flutter + Firebase",
    title: "BioTech App",
    problema: "Seguimiento deficiente de pacientes.",
    solucion: "Acompañante móvil con biometría integrada.",
  },
  {
    tag: "Python + OpenAI API",
    title: "Asistente Legal IA",
    problema: "Lentitud en revisión de documentos.",
    solucion: "Integración de LLM personalizada.",
  },
];

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
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
            }}
          />
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Soluciones reales para desafíos complejos.
        </p>
        <a
          href="#"
          style={{
            color: "var(--accent-purple-light)",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          Ver todos los proyectos →
        </a>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "3rem",
        }}
      >
        {proyectos.map((p) => (
          <div
            key={p.title}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-purple)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            {/* Imagen placeholder */}
            <div
              style={{
                height: "180px",
                backgroundColor: "var(--bg-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  backgroundColor: "rgba(124, 58, 237, 0.2)",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.7rem",
                  color: "var(--accent-purple-light)",
                }}
              >
                {p.tag}
              </div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  backgroundColor: "var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                🖥
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
                  color: "var(--accent-purple-light)",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { e.target.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { e.target.style.opacity = "1"; }}
              >
                Conocer más →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
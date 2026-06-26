"use client";

const pasos = [
  {
    numero: "01",
    title: "Descubrimos el problema",
    description:
      "Entendemos a fondo los desafíos de tu negocio antes de proponer cualquier línea de código.",
  },
  {
    numero: "02",
    title: "Diseñamos la solución",
    description:
      "Creamos arquitecturas robustas y experiencias de usuario intuitivas centradas en resultados.",
  },
  {
    numero: "03",
    title: "Desarrollamos el producto",
    description:
      "Construimos con estándares de ingeniería de alta precisión y metodologías ágiles.",
  },
  {
    numero: "04",
    title: "Acompañamos el crecimiento",
    description:
      "Mantenemos y escalamos tu solución para que siga evolucionando con tu empresa.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Cómo trabajamos
        </h2>
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "var(--accent-purple)",
            marginBottom: "3rem",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {pasos.map((paso) => (
            <div
              key={paso.numero}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "2rem",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-purple)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--border)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {paso.numero}
              </div>
              <h3
                style={{
                  color: "var(--accent-purple-light)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "0.75rem",
                }}
              >
                {paso.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                }}
              >
                {paso.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
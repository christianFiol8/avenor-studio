"use client";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Izquierda — métrica */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "280px",
          }}
        >
          <div
            style={{
              fontSize: "5rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            100%
          </div>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              marginTop: "0.75rem",
              textAlign: "center",
            }}
          >
            COMPROMISO CON LA EXCELENCIA
          </div>
        </div>

        {/* Derecha — texto */}
        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Tecnología con propósito.
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "var(--accent-purple)",
              marginBottom: "1.5rem",
            }}
          />
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            En Avenor Studio creemos que la tecnología debe resolver problemas
            reales. No desarrollamos software por desarrollar. Analizamos cada
            negocio, entendemos sus necesidades y construimos soluciones
            digitales que generan un impacto real.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { icon: "✓", label: "Calidad Garantizada" },
              { icon: "↗", label: "Foco en Escalabilidad" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(124, 58, 237, 0.15)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-purple-light)",
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
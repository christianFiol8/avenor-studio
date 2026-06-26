"use client";

const servicios = [
  {
    icon: "⊟",
    title: "Desarrollo Web",
    description:
      "Sitios web rápidos, modernos y optimizados para generar confianza y convertir visitantes en clientes de alto valor.",
  },
  {
    icon: "☐",
    title: "Aplicaciones",
    description:
      "Aplicaciones móviles y plataformas web adaptadas a las necesidades de cada negocio.",
  },
  {
    icon: "⚙",
    title: "IA y Automatización",
    description:
      "Automatizamos procesos e integramos asistentes inteligentes que reducen drásticamente el trabajo manual.",
  },
  {
    icon: "⌨",
    title: "Software Personalizado",
    description:
      "Creamos sistemas hechos a medida para optimizar la operación de empresas, eliminando la fricción y escalando el rendimiento.",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
        }}
      >
        Nuestra especialidad
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
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
        }}
      >
        {servicios.map((s) => (
          <div
            key={s.title}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
              transition: "border-color 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-purple)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "var(--accent-purple-light)",
              }}
            >
              {s.icon}
            </div>
            <h3
              style={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
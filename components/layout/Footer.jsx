"use client"

const columnas = [
  {
    titulo: "Compañía",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Sobre Nosotros", href: "#nosotros" },
    ],
  },
  {
    titulo: "Social",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter (X)", href: "#" },
    ],
  },
  {
    titulo: "Contacto",
    links: [
      { label: "WhatsApp", href: "#" },
      { label: "Email", href: "#" },
      { label: "Agendar llamada", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Logo y descripción */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background: "var(--accent-purple)",
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                }}
              />
              <div>
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  AVENOR
                </span>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  STUDIO
                </div>
              </div>
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                maxWidth: "220px",
              }}
            >
              Construyendo el futuro digital de las empresas con ingeniería de
              precisión.
            </p>
          </div>

          {/* Columnas de links */}
          {columnas.map((col) => (
            <div key={col.titulo}>
              <h4
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  marginBottom: "1.25rem",
                }}
              >
                {col.titulo}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.target.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { e.target.style.color = "var(--text-secondary)"; }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
            © 2024 Avenor Studio. Digital solutions for the engineering-led era.
          </p>
        </div>
      </div>
    </footer>
  );
}
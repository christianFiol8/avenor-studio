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
      <div className="section-container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon" />
              <div>
                <span className="footer-logo-text">AVENOR</span>
                <div className="footer-logo-sub">STUDIO</div>
              </div>
            </div>
            <p className="footer-desc">
              Construyendo el futuro digital de las empresas con ingeniería de precisión.
            </p>
          </div>

          {columnas.map((col) => (
            <div key={col.titulo}>
              <h4 className="footer-col-title">{col.titulo}</h4>
              <div className="footer-links">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="footer-link"
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

        <div className="footer-bottom">
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
            © 2026 Avenor Studio. Digital solutions for the engineering-led era.
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client"
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "2rem",
      }}
    >
      <div className="section-container">
        <div className="footer-simple">

          {/* Logo igual que Navbar */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="/assets/isotipo.png"
              alt="Avenor Studio"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
            <div>
              <span
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  display: "block",
                }}
              >
                AVENOR  
              </span>
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  display: "block",
                }}
              >
                STUDIO
              </span>
            </div>
          </div>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            style={{
              color: "var(--text-secondary)",
              transition: "color 0.2s ease",
              display: "flex",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-purple-light)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          {/* Copyright */}
          <p className="footer-copyright">
            © 2026 Avenor Studio. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
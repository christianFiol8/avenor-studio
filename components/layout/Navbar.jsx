"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(10, 10, 15, 0.9)" : "rgba(15, 15, 26, 0.8)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "28px",
            height: "28px",
            background: "var(--accent-purple)",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />
        <div>
          <span
            style={{
              color: "var(--text-primary)",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.1em",
            }}
          >
            AVENOR
          </span>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
            }}
          >
            STUDIO
          </div>
        </div>
      </div>

      <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.target.style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { e.target.style.color = "var(--text-secondary)"; }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contacto"
          style={{
            backgroundColor: "var(--accent-purple)",
            color: "white",
            padding: "0.5rem 1.25rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => { e.target.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.target.style.opacity = "1"; }}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
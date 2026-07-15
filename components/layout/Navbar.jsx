"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FaQ", href: "#faq" },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest("header") && !e.target.closest(".mobile-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
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
          backgroundColor: "var(--bg-card)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
        <img
          src="/assets/isotipo.webp"
          alt="Avenor Studio"
          style={{ width: "32px", height: "32px", objectFit: "contain" }}
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
        </a>

        {/* Links desktop */}
        <nav className="nav-desktop">
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

        {/* Hamburguesa móvil */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--text-primary)",
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: "var(--bg-card)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: "var(--accent-purple)",
              color: "white",
              padding: "0.75rem 1.25rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Contacto
          </a>
        </div>
      )}
    </>
  );
}
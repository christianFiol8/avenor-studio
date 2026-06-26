"use client";

import { useEffect, useRef, useState } from "react";

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

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEstado("enviado");
        setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    color: "var(--text-secondary)",
    fontSize: "0.8rem",
    marginBottom: "0.4rem",
    display: "block",
  };

  const handleFocus = (e) => { e.target.style.borderColor = "var(--accent-purple)"; };
  const handleBlur = (e) => { e.target.style.borderColor = "var(--border)"; };

  return (
    <section
      id="contacto"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Izquierda */}
        <AnimatedCard delay={0}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Hablemos de tu próximo proyecto.
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
            Cuéntanos qué necesitas y trabajemos juntos para construir una
            solución tecnológica que impulse tu negocio.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "✉", texto: "hola@avenor.studio" },
              { icon: "☎", texto: "+52 612 233 6225" },
            ].map((item) => (
              <div
                key={item.texto}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(124, 58, 237, 0.15)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-purple-light)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  {item.texto}
                </span>
              </div>
            ))}
          </div>
        </AnimatedCard>

        {/* Formulario */}
        <AnimatedCard delay={0.2}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Nombre Completo</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Juan Pérez"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Empresa</label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Tech Solutions Inc."
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Correo Electrónico</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="juan@empresa.com"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Cuéntanos sobre tu idea o problema..."
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              style={{
                backgroundColor: estado === "enviando" ? "var(--border)" : "var(--accent-purple)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "0.9rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: estado === "enviando" ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
              }}
              onMouseEnter={(e) => {
                if (estado !== "enviando") {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {estado === "enviando" ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {estado === "enviado" && (
              <p style={{ color: "#10b981", fontSize: "0.9rem", textAlign: "center" }}>
                ✓ Mensaje enviado. Te contactamos pronto.
              </p>
            )}
            {estado === "error" && (
              <p style={{ color: "#ef4444", fontSize: "0.9rem", textAlign: "center" }}>
                Algo salió mal. Intenta de nuevo.
              </p>
            )}
          </form>
        </AnimatedCard>
      </div>
    </section>
  );
}
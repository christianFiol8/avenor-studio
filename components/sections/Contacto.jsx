"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState("idle"); // idle | enviando | enviado | error

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
    backgroundColor: "var(--bg-primary)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle = {
    color: "var(--text-secondary)",
    fontSize: "0.8rem",
    marginBottom: "0.4rem",
    display: "block",
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }}
    >
      {/* Izquierda */}
      <div>
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
            { icon: "☎", texto: "+52 123 456 7890" },
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
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Nombre Completo</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
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
            transition: "opacity 0.2s ease",
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
    </section>
  );
}
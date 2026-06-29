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

function validateForm(form) {
  const errors = {};
  if (!form.nombre.trim()) errors.nombre = "El nombre es requerido";
  if (!form.email.trim()) {
    errors.email = "El correo es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "El correo no es válido";
  }
  if (!form.mensaje.trim()) errors.mensaje = "El mensaje es requerido";
  else if (form.mensaje.trim().length < 10) errors.mensaje = "El mensaje es muy corto";
  return errors;
}

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [estado, setEstado] = useState("idle");

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
    if (touched[e.target.name]) {
      const newErrors = validateForm(newForm);
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (newErrors[e.target.name]) {
      e.target.style.borderColor = "#ef4444";
    } else {
      e.target.style.borderColor = "var(--border)";
    }
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "var(--accent-purple)";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { nombre: true, email: true, mensaje: true };
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

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
        setTouched({});
        setErrors({});
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const getInputStyle = (field) => ({
    borderColor: touched[field] && errors[field]
      ? "#ef4444"
      : "var(--border)",
  });

  return (
    <section
      id="contacto"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <div className="grid-2-col">
          <AnimatedCard delay={0}>
            <h2 className="section-title">Hablemos de tu próximo proyecto.</h2>
            <div className="section-underline" />
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Cuéntanos qué necesitas y trabajemos juntos para construir una
              solución tecnológica que impulse tu negocio.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "✉", texto: "hola@avenor.studio" },
                { icon: "☎", texto: "+52 612 233 6225" },
              ].map((item) => (
                <div key={item.texto} className="contacto-info-item">
                  <div className="contacto-icon">{item.icon}</div>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.texto}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <form onSubmit={handleSubmit} className="contacto-form">
              <div className="grid-2">
                <div>
                  <label className="form-label">Nombre Completo *</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Juan Pérez"
                    className="form-input"
                    style={getInputStyle("nombre")}
                  />
                  {touched.nombre && errors.nombre && (
                    <p className="form-error">{errors.nombre}</p>
                  )}
                </div>
                <div>
                  <label className="form-label">Empresa</label>
                  <input
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                    placeholder="Tech Solutions Inc."
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Correo Electrónico *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="juan@empresa.com"
                  className="form-input"
                  style={getInputStyle("email")}
                />
                {touched.email && errors.email && (
                  <p className="form-error">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="form-label">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Cuéntanos sobre tu idea o problema..."
                  rows={5}
                  className="form-input form-textarea"
                  style={getInputStyle("mensaje")}
                />
                {touched.mensaje && errors.mensaje && (
                  <p className="form-error">{errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="form-btn"
                style={{
                  backgroundColor: estado === "enviando" ? "var(--border)" : "var(--accent-purple)",
                  cursor: estado === "enviando" ? "not-allowed" : "pointer",
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
      </div>
    </section>
  );
}
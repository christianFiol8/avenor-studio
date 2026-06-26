"use client";

import { useEffect, useRef, useState } from "react";

const pasos = [
  {
    numero: "01",
    title: "Descubrimos el problema",
    description: "Entendemos a fondo los desafíos de tu negocio antes de proponer cualquier línea de código.",
  },
  {
    numero: "02",
    title: "Diseñamos la solución",
    description: "Creamos arquitecturas robustas y experiencias de usuario intuitivas centradas en resultados.",
  },
  {
    numero: "03",
    title: "Desarrollamos el producto",
    description: "Construimos con estándares de ingeniería de alta precisión y metodologías ágiles.",
  },
  {
    numero: "04",
    title: "Acompañamos el crecimiento",
    description: "Mantenemos y escalamos tu solución para que siga evolucionando con tu empresa.",
  },
];

function AnimatedCard({ children, delay }) {
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

export default function Proceso() {
  return (
    <section
      id="proceso"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedCard delay={0}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Cómo trabajamos
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "var(--accent-purple)",
              marginBottom: "3rem",
            }}
          />
        </AnimatedCard>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {pasos.map((paso, i) => (
            <AnimatedCard key={paso.numero} delay={i * 0.15}>
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "2rem",
                  transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-purple)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 58, 237, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--white)",
                    marginBottom: "1rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {paso.numero}
                </div>
                <h3
                  style={{
                    color: "var(--accent-purple-light)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {paso.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                  }}
                >
                  {paso.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
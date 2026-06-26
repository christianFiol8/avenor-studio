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

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <AnimatedCard delay={0}>
          <h2 className="section-title">Cómo trabajamos</h2>
          <div className="section-underline" />
        </AnimatedCard>

        <div className="grid-4">
          {pasos.map((paso, i) => (
            <AnimatedCard key={paso.numero} delay={i * 0.15}>
              <div
                className="card"
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
                <div className="paso-numero">{paso.numero}</div>
                <h3 className="paso-title">{paso.title}</h3>
                <p className="card-description">{paso.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
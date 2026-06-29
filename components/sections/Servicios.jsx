"use client";

import { useEffect, useRef, useState } from "react";

const servicios = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Desarrollo Web",
    description: "Sitios web rápidos, modernos y optimizados para generar confianza y convertir visitantes en clientes de alto valor.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Aplicaciones",
    description: "Aplicaciones móviles y plataformas web adaptadas a las necesidades de cada negocio.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12l3 3-3 3v1.5A4 4 0 0 1 8 19.5V18l-3-3 3-3V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
        <circle cx="12" cy="6" r="2" />
      </svg>
    ),
    title: "IA y Automatización",
    description: "Automatizamos procesos e integramos asistentes inteligentes que reducen drásticamente el trabajo manual.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Software Personalizado",
    description: "Creamos sistemas hechos a medida para optimizar la operación de empresas, eliminando la fricción y escalando el rendimiento.",
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

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <AnimatedCard>
          <h2 className="section-title">Nuestra especialidad</h2>
          <div className="section-underline" />
        </AnimatedCard>

        <div className="grid-2">
          {servicios.map((s) => (
            <AnimatedCard key={s.title}>
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
                <div className="card-icon">{s.icon}</div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-description">{s.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    pregunta: "¿Trabajan con empresas de cualquier tamaño?",
    respuesta:
      "Sí. Trabajamos con emprendedores, pequeñas y medianas empresas, adaptando cada solución a sus necesidades, objetivos y presupuesto.",
  },
  {
    pregunta: "¿Cómo es el proceso de trabajo?",
    respuesta:
      "Nuestro proceso consta de cuatro etapas: primero descubrimos el problema a fondo, luego diseñamos la solución, después desarrollamos el producto con estándares de alta precisión, y finalmente acompañamos el crecimiento manteniendo y escalando tu solución. Durante todo el proceso mantenemos comunicación constante.",
  },
  {
    pregunta: "¿Qué necesito para empezar?",
    respuesta:
      "Solo necesitamos una idea o un problema que quieras resolver. En una reunión inicial analizamos tus necesidades, definimos el alcance del proyecto y te presentamos una propuesta con tiempos, costos y plan de trabajo.",
  },
  {
    pregunta: "¿Ofrecen soporte después de entregar?",
    respuesta:
      "Sí. Una vez entregado el proyecto ofrecemos soporte para resolver incidencias, realizar ajustes y, si lo deseas, planes de mantenimiento para mantener tu solución actualizada y funcionando correctamente.",
  },
  {
    pregunta: "¿Cómo obtengo una cotización?",
    respuesta:
      "Puedes contactarnos mediante el formulario, WhatsApp o correo electrónico. Analizaremos tu proyecto y te enviaremos una propuesta personalizada sin compromiso.",
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

function FAQItem({ pregunta, respuesta, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedCard delay={delay}>
      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "border-color 0.2s ease",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            gap: "1rem",
          }}
        >
          <span
            style={{
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: "0.95rem",
              fontFamily: "inherit",
            }}
          >
            {pregunta}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-secondary)"
            strokeWidth="2"
            style={{
              flexShrink: 0,
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          style={{
            maxHeight: open ? "300px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              padding: "0 1.5rem 1.25rem",
            }}
          >
            {respuesta}
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <AnimatedCard delay={0}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Preguntas Frecuentes
          </h2>
        </AnimatedCard>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.pregunta}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
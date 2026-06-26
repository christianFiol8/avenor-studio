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

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Izquierda — contador animado */}
        <AnimatedCard delay={0}>
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "280px",
              boxShadow: "0 0 60px rgba(124, 58, 237, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: "5rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1,
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <AnimatedCounter target={100} />
              <span style={{ fontSize: "3rem", marginTop: "0.5rem" }}>%</span>
            </div>
            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                marginTop: "0.75rem",
                textAlign: "center",
              }}
            >
              COMPROMISO CON LA EXCELENCIA
            </div>
          </div>
        </AnimatedCard>

        {/* Derecha — texto */}
        <AnimatedCard delay={0.2}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Tecnología con propósito.
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
            En Avenor Studio creemos que la tecnología debe resolver problemas
            reales. No desarrollamos software por desarrollar. Analizamos cada
            negocio, entendemos sus necesidades y construimos soluciones
            digitales que generan un impacto real.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { icon: "✓", label: "Calidad Garantizada" },
              { icon: "↗", label: "Foco en Escalabilidad" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(124, 58, 237, 0.15)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-purple-light)",
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
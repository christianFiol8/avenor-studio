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
      className="section-padding"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <div className="grid-2-col">
          <AnimatedCard delay={0}>
            <div className="nosotros-metrica">
              <div className="nosotros-numero">
                <AnimatedCounter target={100} />
                <span className="nosotros-percent">%</span>
              </div>
              <div className="nosotros-label">COMPROMISO CON LA EXCELENCIA</div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <h2 className="section-title">Tecnología con propósito.</h2>
            <div className="section-underline" />
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              En Avenor Studio creemos que la tecnología debe resolver problemas
              reales. No desarrollamos software por desarrollar. Analizamos cada
              negocio, entendemos sus necesidades y construimos soluciones
              digitales que generan un impacto real.
            </p>
            <div className="grid-2">
              {[
                { icon: "✓", label: "Calidad Garantizada" },
                { icon: "↗", label: "Foco en Escalabilidad" },
              ].map((item) => (
                <div key={item.label} className="nosotros-badge">
                  <div className="nosotros-badge-icon">{item.icon}</div>
                  <span style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
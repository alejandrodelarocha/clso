import React, { useEffect, useRef } from "react";

interface Spark {
  el: HTMLDivElement;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  opacity: number;
}

const Header: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const numSparks = 50;
    const sparks: Spark[] = [];

    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < numSparks; i++) {
      const sparkEl = document.createElement("div");
      const size = 2 + Math.random() * 4; // 2-6px
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const dx = (Math.random() - 0.5) * 2; // -1 to 1
      const dy = (Math.random() - 0.5) * 2; // -1 to 1
      const opacity = 0.2 + Math.random() * 0.8;

      sparkEl.style.position = "absolute";
      sparkEl.style.width = `${size}px`;
      sparkEl.style.height = `${size}px`;
      sparkEl.style.borderRadius = "50%";
      sparkEl.style.background = "#fff";
      sparkEl.style.boxShadow = "0 0 15px #fff, 0 0 35px #00eaff, 0 0 50px #00aaff";
      sparkEl.style.left = `${x}px`;
      sparkEl.style.top = `${y}px`;
      sparkEl.style.opacity = `${opacity}`;
      sparkEl.style.pointerEvents = "none";

      container.appendChild(sparkEl);

      sparks.push({ el: sparkEl, x, y, dx, dy, size, opacity });
    }

    sparksRef.current = sparks;

    let animationFrame: number;
    const animate = () => {
      sparksRef.current.forEach((spark) => {
        spark.x += spark.dx;
        spark.y += spark.dy;

        // Bounce off edges
        if (spark.x < 0 || spark.x > window.innerWidth - spark.size) spark.dx *= -1;
        if (spark.y < 0 || spark.y > window.innerHeight - spark.size) spark.dy *= -1;

        // flicker opacity slightly
        spark.opacity += (Math.random() - 0.5) * 0.05;
        if (spark.opacity < 0.2) spark.opacity = 0.2;
        if (spark.opacity > 1) spark.opacity = 1;

        spark.el.style.left = `${spark.x}px`;
        spark.el.style.top = `${spark.y}px`;
        spark.el.style.opacity = `${spark.opacity}`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      sparks.forEach((spark) => spark.el.remove());
    };
  }, []);

  return (
    <header
      id="intro"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2420, #1a3a35, #0f2420)",
        overflow: "hidden",
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="intro-content"
        style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff" }}
      >
        <img
          src="assets/img/logo.png"
          alt="CLSO Ingeniería Eléctrica"
          width={400}
          style={{ marginBottom: "1rem" }}
          className="img-fluid animate-pulse"
        />
        <h1 className="text-white fw-bold" data-string="header_title"></h1>
      </div>
    </header>
  );
};

export default Header;

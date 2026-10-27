"use client";
import { useRef, useEffect, useCallback } from "react";

export default function ClickSparkProvider({
  children,
  sparkColor = "#E5BE9E",
  sparkSize = 8,
  sparkRadius = 22,
  sparkCount = 8,
  duration = 480,
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  /* Size the fixed canvas to the viewport */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Render loop */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const draw = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;
        const progress = elapsed / duration;
        const eased = progress * (2 - progress);
        const distance = eased * sparkRadius;
        const lineLength = sparkSize * (1 - eased);
        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 1 - eased;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        return true;
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  const handleClick = useCallback((e) => {
    const now = performance.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x: e.clientX,
      y: e.clientY,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));
    sparksRef.current.push(...newSparks);
  }, [sparkCount]);

  return (
    <div style={{ display: "contents" }} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
      {children}
    </div>
  );
}

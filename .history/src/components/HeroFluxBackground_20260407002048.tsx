"use client";

import { useEffect, useRef } from "react";

export default function HeroFluxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width, height, dpr };
    };

    resize();
    window.addEventListener("resize", resize);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && canvas.parentElement) {
      observer = new ResizeObserver(() => resize());
      observer.observe(canvas.parentElement);
    }

    const draw = (time: number) => {
      const { width, height } = sizeRef.current;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      const t = time * 0.0002;
      const lineCount = 9;
      const points = 140;
      const baseAmplitude = height * 0.05;

      for (let i = 0; i < lineCount; i++) {
        const progress = i / (lineCount - 1);
        const bandCenter = height * 0.58;
        const bandRange = height * 0.18;
        const baseY = bandCenter + (progress - 0.5) * bandRange;
        const fade = 0.4 + (1 - Math.abs(progress - 0.5) * 1.6) * 0.6;
        const amplitude = baseAmplitude * (0.3 + fade * 0.7);
        const phase = i * 0.8;
        const speed = 0.9 + i * 0.015;

        ctx.beginPath();
        for (let p = 0; p <= points; p++) {
          const x = (p / points) * width;
          const centerFade = Math.abs((x - width * 0.5) / (width * 0.5));
          const taper = 0.4 + centerFade * 0.6;
          const wave1 = Math.sin(x * 0.008 + t * speed + phase);
          const wave2 = Math.sin(x * 0.02 + t * (speed * 1.3) + phase * 1.7);
          const y = baseY + (wave1 * 0.7 + wave2 * 0.3) * amplitude * (0.65 + taper * 0.35);

          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const alpha = 0.05 + fade * 0.1;
        ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
        ctx.lineWidth = (0.8 + fade * 1.0) * 0.85;
        ctx.stroke();

        const glowAlpha = 0.025 + fade * 0.045;
        ctx.strokeStyle = `rgba(99, 102, 241, ${glowAlpha})`;
        ctx.lineWidth = (2.4 + fade * 3.4) * 0.9;
        ctx.stroke();

        const dotX = (width * ((t * (0.08 + i * 0.005)) % 1)) % width;
        const dotY = baseY + Math.sin(dotX * 0.008 + t * speed + phase) * amplitude;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 1.8 + fade * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${0.16 + fade * 0.14})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (observer) observer.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

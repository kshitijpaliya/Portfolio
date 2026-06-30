"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frameId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const stars: Array<{
      x: number;
      y: number;
      r: number;
      t: number;
      d: number;
      sp: number;
    }> = [];
    const meteors: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      life: number;
      max: number;
    }> = [];
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;

    const resize = () => {
      width = window.innerWidth * dpr;
      height = window.innerHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      stars.length = 0;
      for (let i = 0; i < 120; i += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.4 * dpr + 0.3,
          t: Math.random() * Math.PI * 2,
          d: 0.3 + Math.random() * 0.7,
          sp: 0.4 + Math.random() * 1.1,
        });
      }
    };

    const spawnMeteor = () => {
      const angle = (35 * Math.PI) / 180;
      const speed = (3 + Math.random() * 4) * dpr;
      meteors.push({
        x: Math.random() * width * 0.75,
        y: Math.random() * height * 0.32,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: (130 + Math.random() * 130) * dpr,
        life: 0,
        max: 78,
      });
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      tx += (mx - tx) * 0.04;
      ty += (my - ty) * 0.04;

      stars.forEach((star) => {
        const alpha = reduce
          ? 0.5
          : (0.3 +
              0.5 * (0.5 + 0.5 * Math.sin((time / 950) * star.sp + star.t))) *
            star.d;
        context.beginPath();
        context.arc(
          star.x + tx * star.d * 22,
          star.y + ty * star.d * 22,
          star.r,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(214,228,255,${alpha})`;
        context.fill();
      });

      if (!reduce && Math.random() < 0.013 && meteors.length < 2) spawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i -= 1) {
        const meteor = meteors[i];
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life += 1;

        const hyp = Math.hypot(meteor.vx, meteor.vy);
        const tailX = meteor.x - (meteor.vx / hyp) * meteor.len;
        const tailY = meteor.y - (meteor.vy / hyp) * meteor.len;
        const fade = Math.min(
          1,
          Math.min(meteor.life / 8, (meteor.max - meteor.life) / 16),
        );
        const gradient = context.createLinearGradient(
          meteor.x,
          meteor.y,
          tailX,
          tailY,
        );

        gradient.addColorStop(0, `rgba(222,240,255,${0.9 * fade})`);
        gradient.addColorStop(1, "rgba(222,240,255,0)");
        context.strokeStyle = gradient;
        context.lineWidth = 2 * dpr;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(meteor.x, meteor.y);
        context.lineTo(tailX, tailY);
        context.stroke();

        context.beginPath();
        context.arc(meteor.x, meteor.y, 1.7 * dpr, 0, Math.PI * 2);
        context.fillStyle = `rgba(236,246,255,${fade})`;
        context.fill();

        if (
          meteor.life > meteor.max ||
          meteor.x > width + meteor.len ||
          meteor.y > height + meteor.len
        ) {
          meteors.splice(i, 1);
        }
      }

      if (!reduce) frameId = requestAnimationFrame(draw);
    };

    const pointer = (event: PointerEvent) => {
      mx = (event.clientX / window.innerWidth - 0.5) * 2;
      my = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointer);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointer);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />;
}

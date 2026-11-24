"use client";

import { useEffect, useRef } from "react";

/** Cielo estrellado estático (semilla fija: siempre el mismo dibujo). */
export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;

    function draw() {
      if (!c || !ctx) return;
      const r = window.devicePixelRatio || 1;
      const w = c.clientWidth;
      const h = c.clientHeight;
      c.width = w * r;
      c.height = h * r;
      ctx.setTransform(r, 0, 0, r, 0, 0);
      let seed = 7;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };
      const n = Math.round((w * h) / 2600);
      for (let i = 0; i < n; i++) {
        const x = rnd() * w, y = rnd() * h, s = rnd() * 1.3 + 0.2, a = rnd() * 0.7 + 0.15;
        ctx.fillStyle = rnd() < 0.15 ? `rgba(240,220,166,${a})` : `rgba(236,232,247,${a})`;
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    draw();
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(draw, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}

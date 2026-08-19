"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  life: number;
  maxLife: number;
  burst: boolean;
}

const AMBIENT_COUNT = 55;
const POINTER_RADIUS = 100;
const POINTER_FORCE = 0.55;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function spawnAmbient(width: number, height: number): Ember {
  return {
    x: randomBetween(0, width),
    y: height + randomBetween(0, 40),
    vx: randomBetween(-0.08, 0.08),
    vy: randomBetween(0.35, 1.0),
    size: randomBetween(1.4, 3.6),
    hue: randomBetween(0, 1),
    life: 1,
    maxLife: 1,
    burst: false,
  };
}

function emberColor(hue: number, opacity: number) {
  // hue 0 = brasa vermelha, hue 1 = dourado — interpola entre as duas cores da marca.
  const r = Math.round(201 + (226 - 201) * hue);
  const g = Math.round(74 + (172 - 74) * hue);
  const b = Math.round(36 + (92 - 36) * hue);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * "Sopre" nas brasas — pequeno momento interativo dentro do Hero. Puramente
 * decorativo: não carrega informação, então some sob prefers-reduced-motion
 * e nunca captura o teclado.
 */
export function EmberPlayground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let embers: Ember[] = Array.from({ length: AMBIENT_COUNT }, () => {
      const e = spawnAmbient(width, height);
      e.y = randomBetween(0, height);
      return e;
    });

    const pointer = { x: -9999, y: -9999, active: false };

    function handlePointer(clientX: number, clientY: number) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    }

    function onPointerMove(e: PointerEvent) {
      handlePointer(e.clientX, e.clientY);
    }
    function onPointerLeave() {
      pointer.active = false;
    }
    function onClick(e: PointerEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const burstSize = reduceMotion ? 6 : 22;
      for (let i = 0; i < burstSize; i++) {
        const angle = randomBetween(0, Math.PI * 2);
        const speed = randomBetween(0.6, 2.6);
        embers.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.6,
          size: randomBetween(1.5, 4),
          hue: randomBetween(0, 1),
          life: 1,
          maxLife: randomBetween(45, 80),
          burst: true,
        });
      }
    }

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    container.addEventListener("pointerdown", onClick);

    let raf = 0;
    let running = true;

    function onVisibility() {
      running = document.visibilityState === "visible";
      if (running) raf = requestAnimationFrame(tick);
    }
    document.addEventListener("visibilitychange", onVisibility);

    function tick() {
      if (!ctx || !running) return;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const next: Ember[] = [];
      for (const p of embers) {
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < POINTER_RADIUS) {
            const force = ((POINTER_RADIUS - dist) / POINTER_RADIUS) * POINTER_FORCE;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force * 0.5;
          }
        }

        p.vx *= 0.96;
        p.x += p.vx + Math.sin((p.y + p.x) * 0.02) * 0.15;
        p.y -= p.vy;

        let opacity: number;
        if (p.burst) {
          p.life += 1;
          p.vy *= 0.97;
          opacity = Math.max(0, 1 - p.life / p.maxLife);
          if (p.life >= p.maxLife) continue;
        } else {
          const fadeZone = height * 0.28;
          opacity = p.y < fadeZone ? Math.max(0, p.y / fadeZone) : 1;
          if (p.y < -10) {
            next.push(spawnAmbient(width, height));
            continue;
          }
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, emberColor(p.hue, opacity * 0.9));
        gradient.addColorStop(1, emberColor(p.hue, 0));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        next.push(p);
      }
      embers = next;

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    }

    if (reduceMotion) {
      // Um quadro só, parado — sem loop, sem listeners de movimento contínuo.
      ctx.globalCompositeOperation = "lighter";
      for (const p of embers) {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, emberColor(p.hue, 0.7));
        gradient.addColorStop(1, emberColor(p.hue, 0));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeEventListener("pointerdown", onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full touch-none" />
    </div>
  );
}

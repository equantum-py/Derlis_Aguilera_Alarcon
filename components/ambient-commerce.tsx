"use client";
import { useEffect, useRef } from "react";

export function AmbientCommerce() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      node.style.setProperty("--pointer-x", `${event.clientX}px`);
      node.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="ambient-commerce" aria-hidden="true"><div className="ambient-grid" /><div className="ambient-glow" /><div className="ambient-line line-one" /><div className="ambient-line line-two" /></div>;
}

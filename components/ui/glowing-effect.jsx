"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Pointer-tracking border glow + inner spotlight (after 21st.dev "Glowing Effect").
 * Drop inside any `relative` rounded container; styling lives in globals.css (.glow-border).
 */
export function GlowingEffect({ spread = 40, proximity = 64, borderWidth = 1.5, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let angle = 0;

    const update = (x, y) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const active =
        x > left - proximity && x < left + width + proximity &&
        y > top - proximity && y < top + height + proximity;

      el.style.setProperty("--glow-active", active ? "1" : "0");
      if (!active) return;

      el.style.setProperty("--glow-x", `${x - left}px`);
      el.style.setProperty("--glow-y", `${y - top}px`);

      // Take the shortest way round so the arc never spins the long way
      const target = (Math.atan2(y - (top + height / 2), x - (left + width / 2)) * 180) / Math.PI + 90;
      const diff = ((((target - angle) % 360) + 540) % 360) - 180;
      angle += diff;
      el.style.setProperty("--glow-start", String(angle));
    };

    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => update(e.clientX, e.clientY));
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, [proximity]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("glow-border", className)}
      style={{ "--glow-spread": spread, "--glow-width": `${borderWidth}px` }}
    />
  );
}

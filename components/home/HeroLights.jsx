"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

const spring = { stiffness: 60, damping: 20, mass: 0.6 };

// One side's beam cluster: a wide soft haze, a medium ray and a bright thin core
function Beam({ side, color, mx, my }) {
  const dir = side === "left" ? 1 : -1;

  // Beams angle in toward the centre, lean toward the cursor and drift with it (parallax)
  const rotate = useTransform(mx, (v) => -dir * 32 - v * 10);
  const x = useTransform(mx, (v) => v * 40);
  const y = useTransform(my, (v) => v * 20);

  const rays = [
    { width: 420, blur: 70, opacity: 0.32, offset: 0, delay: "0s" },
    { width: 160, blur: 30, opacity: 0.5, offset: 90, delay: "1.2s" },
    { width: 36, blur: 8, opacity: 0.75, offset: 150, delay: "2.4s" },
  ];

  return (
    <motion.div
      className="absolute top-[-25%] h-[150%]"
      style={{
        [side]: "-6%",
        width: 0,
        rotate,
        x,
        y,
        transformOrigin: "top center",
      }}
    >
      {rays.map((r, i) => (
        <div
          key={i}
          className="beam-breathe absolute top-0 h-full"
          style={{
            width: r.width,
            left: dir * r.offset - r.width / 2,
            background: `linear-gradient(to bottom, ${color} 0%, ${color}66 35%, transparent 80%)`,
            "--beam-blur": `${r.blur}px`,
            filter: `blur(${r.blur}px)`,
            opacity: r.opacity,
            animationDelay: r.delay,
          }}
        />
      ))}
    </motion.div>
  );
}

export default function HeroLights() {
  const reduceMotion = useReducedMotion();

  // Normalised cursor position: -0.5 … 0.5 on each axis
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, spring);
  const my = useSpring(rawY, spring);

  // Cursor spotlight in pixels
  const px = useMotionValue(-1000);
  const py = useMotionValue(-1000);
  const sx = useSpring(px, { stiffness: 120, damping: 25 });
  const sy = useSpring(py, { stiffness: 120, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(207,245,106,0.10), transparent 70%)`;

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
      px.set(e.clientX);
      py.set(e.clientY + window.scrollY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion, rawX, rawY, px, py]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60 sm:opacity-100" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Beam side="left" color="#BEF04A" mx={mx} my={my} />
        <Beam side="right" color="#5EEAD4" mx={mx} my={my} />

        {/* Edge glow where the beams enter */}
        <div
          className="absolute inset-y-0 left-0 w-1/3"
          style={{ background: "radial-gradient(ellipse at 0% 20%, rgba(190,240,74,0.28), transparent 65%)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-1/3"
          style={{ background: "radial-gradient(ellipse at 100% 20%, rgba(94,234,212,0.2), transparent 65%)" }}
        />
      </motion.div>

      {!reduceMotion && (
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      )}
    </div>
  );
}

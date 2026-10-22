import { cn } from "@/lib/utils";

/**
 * A short light that travels around its parent's border (after 21st.dev / Magic UI "Border Beam").
 * Parent must be `relative` and rounded; styling lives in globals.css (.border-beam).
 */
export function BorderBeam({ size = 180, duration = 10, delay = 0, width = 1.5, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn("border-beam", className)}
      style={{
        "--beam-size": `${size}px`,
        "--beam-duration": `${duration}s`,
        "--beam-delay": `${-delay}s`,
        "--beam-width": `${width}px`,
      }}
    />
  );
}

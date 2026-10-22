import { cn } from "@/lib/utils";

/** Eyebrow label shown above section headings. */
export function SectionBadge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand-300",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_var(--brand-400)]" />
      {children}
    </span>
  );
}

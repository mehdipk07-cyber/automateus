import { FadeUp } from "@/components/AnimatedSection";
import { Clock, ShieldCheck, TrendingUp, Layers, BarChart2, DollarSign } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionBadge } from "@/components/ui/section-badge";

/* Headline metrics — shown big, with a count-up */
const metrics = [
  {
    icon: Clock,
    end: 20,
    suffix: "h+",
    unit: "per week",
    title: "Save 20+ Hours / Week",
    desc: "Reclaim time by automating repetitive, low-value tasks across your entire team.",
  },
  {
    icon: TrendingUp,
    end: 3,
    suffix: "×",
    unit: "more output",
    title: "Increase Productivity",
    desc: "Let your team focus on strategic, creative work that drives real business growth.",
  },
  {
    icon: DollarSign,
    end: 40,
    suffix: "%",
    unit: "cost reduction",
    title: "Lower Operational Costs",
    desc: "Automate what costs you the most in labor hours and eliminate manual overhead.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Eliminate Human Error",
    desc: "Remove costly mistakes from manual data entry and repetitive processes.",
  },
  {
    icon: Layers,
    title: "Scale Operations",
    desc: "Handle more clients and processes without proportionally increasing headcount.",
  },
  {
    icon: BarChart2,
    title: "Real-Time Visibility",
    desc: "Automated dashboards and reports so you always know what's happening across the business.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--surface-800)" }}>
      {/* Soft glow behind the metrics */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[900px] -translate-x-1/2 rounded-full blur-[120px] opacity-[0.12]"
        style={{ background: "radial-gradient(ellipse, #BEF04A, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionBadge>Why Automate</SectionBadge>
          <h2
            className="text-4xl lg:text-6xl font-semibold mb-5 leading-[1.05]"
            style={{ color: "var(--text-primary)" }}
          >
            The ROI of Automation{" "}
            <span className="gradient-text accent-serif">is Real</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Businesses that automate see measurable results within the first 30 days — not months.
          </p>
        </FadeUp>

        {/* Metrics band */}
        <FadeUp delay={0.05}>
          <div
            className="relative grid grid-cols-1 md:grid-cols-3 rounded-3xl border overflow-hidden"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.015)" }}
          >
            {metrics.map((m, i) => (
              <div
                key={m.title}
                className={`relative p-8 lg:p-10 ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}
                style={{ borderColor: "var(--border)" }}
              >
                <GlowingEffect spread={30} />
                <div className="flex items-center justify-between mb-8">
                  <m.icon className="size-5 text-brand-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--text-faint)" }}>
                    0{i + 1}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-6">
                  <AnimatedCounter
                    end={m.end}
                    suffix={m.suffix}
                    className="gradient-text font-mono text-6xl lg:text-7xl font-medium tracking-tight tabular-nums"
                  />
                  <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    {m.unit}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Supporting benefits */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <FadeUp key={b.title} delay={0.1 + i * 0.06} className="h-full">
              <div
                className="bento-card relative h-full rounded-2xl border p-6 flex gap-4"
                style={{
                  background: "linear-gradient(160deg, var(--surface-hover) 0%, var(--surface-card) 50%)",
                  borderColor: "var(--border)",
                }}
              >
                <GlowingEffect />
                <div className="size-10 shrink-0 rounded-xl flex items-center justify-center border border-brand-500/20 bg-brand-500/10">
                  <b.icon className="size-[18px] text-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

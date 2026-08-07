import { FadeUp } from "@/components/AnimatedSection";
import { Clock, ShieldCheck, TrendingUp, Layers, BarChart2, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Clock,
    title: "Save 20+ Hours / Week",
    desc: "Reclaim time by automating repetitive, low-value tasks across your entire team.",
    stat: "20h+",
    statLabel: "per week",
    size: "large",
  },
  {
    icon: ShieldCheck,
    title: "Eliminate Human Error",
    desc: "Remove costly mistakes from manual data entry and repetitive processes.",
    size: "small",
  },
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    desc: "Let your team focus on strategic, creative work that drives real business growth.",
    stat: "3×",
    statLabel: "more output",
    size: "medium",
  },
  {
    icon: Layers,
    title: "Scale Operations",
    desc: "Handle more clients and processes without proportionally increasing headcount.",
    size: "small",
  },
  {
    icon: BarChart2,
    title: "Real-Time Visibility",
    desc: "Automated dashboards and reports so you always know what's happening across the business.",
    size: "small",
  },
  {
    icon: DollarSign,
    title: "Lower Operational Costs",
    desc: "Automate what costs you the most in labor hours and eliminate manual overhead.",
    stat: "40%",
    statLabel: "cost reduction",
    size: "large",
  },
];

function BentoCard({ benefit, className }) {
  return (
    <div
      className={cn(
        "bento-card rounded-2xl p-7 flex flex-col gap-5 border",
        className
      )}
      style={{ background: "var(--surface-card)", borderColor: "var(--border)" }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
      >
        <benefit.icon className="size-5 text-brand-400" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
          {benefit.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {benefit.desc}
        </p>
      </div>

      {benefit.stat && (
        <div className="mt-auto pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="text-4xl font-bold gradient-text">{benefit.stat}</span>
          <span className="text-sm ml-2" style={{ color: "var(--text-muted)" }}>
            {benefit.statLabel}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Benefits() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "var(--surface-800)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              color: "var(--accent-400)",
              borderColor: "rgba(52,211,153,0.2)",
              background: "rgba(52,211,153,0.08)",
            }}
          >
            Why Automate
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            The ROI of Automation{" "}
            <span className="gradient-text-green">is Real</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Businesses that automate see measurable results within the first 30 days — not months.
          </p>
        </FadeUp>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Row 1 */}
          <FadeUp delay={0.05} className="lg:col-span-2">
            <BentoCard benefit={benefits[0]} className="h-full" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <BentoCard benefit={benefits[1]} className="h-full" />
          </FadeUp>

          {/* Row 2 */}
          <FadeUp delay={0.15}>
            <BentoCard benefit={benefits[2]} className="h-full" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <BentoCard benefit={benefits[3]} className="h-full" />
          </FadeUp>
          <FadeUp delay={0.25}>
            <BentoCard benefit={benefits[4]} className="h-full" />
          </FadeUp>

          {/* Row 3 — wide card */}
          <FadeUp delay={0.3} className="sm:col-span-2 lg:col-span-3">
            <BentoCard benefit={benefits[5]} className="sm:flex-row sm:items-center" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

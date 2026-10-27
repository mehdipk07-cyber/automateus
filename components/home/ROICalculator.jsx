"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { SectionBadge } from "@/components/ui/section-badge";
import { ArrowRight, Clock, DollarSign, TrendingUp, Zap } from "lucide-react";

/* ── animated number counter ── */
function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }) {
  const motionVal = useMotionValue(value);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 18 });
  const [display, setDisplay] = useState(value);

  useEffect(() => { motionVal.set(value); }, [value, motionVal]);
  useEffect(() => spring.on("change", (v) => setDisplay(v)), [spring]);

  const fmt = (n) =>
    decimals > 0
      ? n.toFixed(decimals)
      : Math.round(n).toLocaleString();

  return <span>{prefix}{fmt(display)}{suffix}</span>;
}

/* ── custom slider track ── */
function SliderRow({ label, icon: Icon, min, max, value, onChange, formatValue, description }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(225,176,126,0.12)", border: "1px solid rgba(225,176,126,0.2)" }}
          >
            <Icon className="size-3.5 text-brand-400" />
          </div>
          <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
            {label}
          </span>
        </div>
        <span
          className="text-lg font-bold tabular-nums"
          style={{ color: "var(--brand-400)" }}
        >
          {formatValue(value)}
        </span>
      </div>

      {/* Slider with gradient fill */}
      <div className="relative">
        <Slider min={min} max={max} value={value} onValueChange={onChange} />
      </div>

      <div className="flex justify-between text-xs" style={{ color: "var(--text-faint)" }}>
        <span>{formatValue(min)}</span>
        <span className="text-center opacity-60">{description}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}

/* ── result metric row ── */
function MetricRow({ icon: Icon, label, value, sublabel, highlight, pct }) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
      style={{
        background: highlight ? "rgba(225,176,126,0.08)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${highlight ? "rgba(225,176,126,0.25)" : "rgba(255,255,255,0.06)"}`,
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: highlight ? "rgba(225,176,126,0.2)" : "rgba(255,255,255,0.05)",
        }}
      >
        <Icon
          className="size-4"
          style={{ color: highlight ? "var(--brand-400)" : "var(--text-muted)" }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-1.5">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</span>
          <span
            className="text-base font-bold tabular-nums"
            style={{ color: highlight ? "var(--brand-400)" : "var(--text-primary)" }}
          >
            {value}
          </span>
        </div>
        {/* Progress bar */}
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(pct, 100)}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: highlight
                ? "linear-gradient(90deg, #E1B07E, #E5BE9E)"
                : "linear-gradient(90deg, #86A397, #F5F2ED)",
            }}
          />
        </div>
        <p className="text-xs mt-1" style={{ color: "var(--text-faint)" }}>{sublabel}</p>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [hours, setHours]         = useState(10);
  const [wage, setWage]           = useState(25);
  const [employees, setEmployees] = useState(3);

  const weeklyTime    = hours * employees;
  const weeklySavings = hours * wage * employees;
  const yearlySavings = weeklySavings * 52;
  const automationCost = 2500;
  const roi           = Math.round(((yearlySavings - automationCost) / automationCost) * 100);
  const paybackWeeks  = Math.ceil(automationCost / weeklySavings);

  return (
    <section
      id="roi-calculator"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--surface-800)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(225,176,126,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionBadge>ROI Calculator</SectionBadge>
          <h2
            className="text-4xl lg:text-6xl font-semibold leading-[1.05] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Calculate Your{" "}
            <span className="gradient-text accent-serif">Automation ROI</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Move the sliders to see exactly how much time and money automation
            would save your team — updated in real time.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* ── Left: Inputs ── */}
            <div
              className="rounded-2xl p-8 space-y-8"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-6" style={{ color: "var(--text-muted)" }}>
                  Your current situation
                </p>
                <div className="space-y-8">
                  <SliderRow
                    label="Manual hours per employee / week"
                    icon={Clock}
                    min={1} max={40}
                    value={hours}
                    onChange={setHours}
                    formatValue={(v) => `${v}h`}
                    description="hours/week"
                  />
                  <SliderRow
                    label="Average hourly cost per employee"
                    icon={DollarSign}
                    min={10} max={150}
                    value={wage}
                    onChange={setWage}
                    formatValue={(v) => `$${v}`}
                    description="cost/hour"
                  />
                  <SliderRow
                    label="Number of employees affected"
                    icon={TrendingUp}
                    min={1} max={50}
                    value={employees}
                    onChange={setEmployees}
                    formatValue={(v) => `${v}`}
                    description="team members"
                  />
                </div>
              </div>

              {/* Assumptions note */}
              <div
                className="rounded-xl p-4 text-xs leading-relaxed"
                style={{
                  background: "rgba(225,176,126,0.06)",
                  border: "1px solid rgba(225,176,126,0.12)",
                  color: "var(--text-muted)",
                }}
              >
                <span className="font-semibold text-brand-400">Assumptions: </span>
                Automation investment estimated at $2,500 one-time. Results are projections based on
                your inputs — actual savings may vary.
              </div>
            </div>

            {/* ── Right: Results ── */}
            <div className="space-y-4">
              {/* Big ROI hero */}
              <motion.div
                layout
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(225,176,126,0.2) 0%, rgba(225,176,126,0.05) 100%)",
                  border: "1px solid rgba(225,176,126,0.3)",
                }}
              >
                {/* Decorative glow */}
                <div
                  className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(225,176,126,0.3), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="size-4 text-brand-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                      Estimated Return on Investment
                    </span>
                  </div>
                  <div className="text-7xl font-bold gradient-text tabular-nums leading-none mb-2">
                    <AnimatedNumber value={roi} suffix="%" />
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    ROI in year one — paid back in{" "}
                    <span className="font-semibold text-accent-400">
                      <AnimatedNumber value={paybackWeeks} suffix=" weeks" />
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Metric breakdown */}
              <MetricRow
                icon={Clock}
                label="Weekly Time Saved"
                value={<AnimatedNumber value={weeklyTime} suffix="h / wk" />}
                sublabel={`${weeklyTime} hours reclaimed every week`}
                pct={(weeklyTime / (40 * employees)) * 100}
                highlight={false}
              />
              <MetricRow
                icon={DollarSign}
                label="Weekly Cost Saved"
                value={<AnimatedNumber value={weeklySavings} prefix="$" />}
                sublabel="in labor costs per week"
                pct={(weeklySavings / (150 * 40 * employees)) * 100}
                highlight={false}
              />
              <MetricRow
                icon={TrendingUp}
                label="Annual Savings"
                value={<AnimatedNumber value={yearlySavings} prefix="$" />}
                sublabel="saved every year"
                pct={(yearlySavings / (150 * 40 * employees * 52)) * 100}
                highlight={true}
              />

              {/* CTA */}
              <Button
                size="lg"
                className="w-full h-auto py-4 text-base font-semibold mt-2 shadow-lg shadow-brand-500/20"
                render={<Link href="/contact" />}
              >
                Start Saving — Book a Free Call
                <ArrowRight className="size-5" />
              </Button>
              <p className="text-center text-xs" style={{ color: "var(--text-faint)" }}>
                Free 30-min strategy call · No commitment · Custom roadmap included
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

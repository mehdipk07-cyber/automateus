"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Phone, Search, PenTool, FlaskConical, Rocket } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We dive deep into your current workflows, pain points, and business goals to identify the highest-impact automation opportunities.",
    icon: Phone,
    color: "rgba(99,102,241,0.15)",
    iconColor: "#818cf8",
  },
  {
    number: "02",
    title: "Process Analysis",
    desc: "Our team maps every manual step in your operations, quantifies time spent, and prioritizes automations by ROI potential.",
    icon: Search,
    color: "rgba(52,211,153,0.12)",
    iconColor: "#34d399",
  },
  {
    number: "03",
    title: "Automation Design",
    desc: "We architect a custom automation solution tailored to your exact needs — with clear logic, error handling, and scalability built in.",
    icon: PenTool,
    color: "rgba(99,102,241,0.15)",
    iconColor: "#818cf8",
  },
  {
    number: "04",
    title: "Development & Testing",
    desc: "We build, test, and refine every automation with real data — ensuring reliability before anything touches your live systems.",
    icon: FlaskConical,
    color: "rgba(52,211,153,0.12)",
    iconColor: "#34d399",
  },
  {
    number: "05",
    title: "Deployment & Support",
    desc: "We deploy seamlessly, train your team, and provide ongoing monitoring and support to ensure everything keeps running perfectly.",
    icon: Rocket,
    color: "rgba(99,102,241,0.15)",
    iconColor: "#818cf8",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6"
    >
      {/* Step icon + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center z-10 relative"
          style={{ background: step.color, border: `1px solid ${step.iconColor}30` }}
        >
          <step.icon className="size-6" style={{ color: step.iconColor }} />
        </div>
        {index < steps.length - 1 && (
          <div
            className="w-px flex-1 mt-3"
            style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.3), transparent)", minHeight: "40px" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <span
          className="text-xs font-bold tracking-widest uppercase mb-2 block"
          style={{ color: "var(--brand-500)" }}
        >
          Step {step.number}
        </span>
        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-secondary)" }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <FadeUp className="lg:sticky lg:top-28">
            <span
              className="inline-block px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                color: "var(--brand-400)",
                borderColor: "rgba(99,102,241,0.2)",
                background: "rgba(99,102,241,0.08)",
              }}
            >
              Our Process
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              From Idea to Automation{" "}
              <span className="gradient-text">in Days</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Our proven 5-step process delivers working automations fast — without disrupting
              your current operations.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { v: "< 2wk", l: "Average delivery" },
                { v: "5 steps", l: "Proven process" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl p-5"
                  style={{
                    background: "var(--surface-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{s.v}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: steps */}
          <div className="pt-2">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

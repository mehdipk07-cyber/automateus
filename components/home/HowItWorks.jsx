"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Phone, Search, PenTool, FlaskConical, Rocket } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { SectionBadge } from "@/components/ui/section-badge";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We dive deep into your current workflows, pain points, and business goals to identify the highest-impact automation opportunities.",
    icon: Phone,
    color: "rgba(190,240,74,0.15)",
    iconColor: "#CFF56A",
  },
  {
    number: "02",
    title: "Process Analysis",
    desc: "Our team maps every manual step in your operations, quantifies time spent, and prioritizes automations by ROI potential.",
    icon: Search,
    color: "rgba(94,234,212,0.12)",
    iconColor: "#5EEAD4",
  },
  {
    number: "03",
    title: "Automation Design",
    desc: "We architect a custom automation solution tailored to your exact needs — with clear logic, error handling, and scalability built in.",
    icon: PenTool,
    color: "rgba(190,240,74,0.15)",
    iconColor: "#CFF56A",
  },
  {
    number: "04",
    title: "Development & Testing",
    desc: "We build, test, and refine every automation with real data — ensuring reliability before anything touches your live systems.",
    icon: FlaskConical,
    color: "rgba(94,234,212,0.12)",
    iconColor: "#5EEAD4",
  },
  {
    number: "05",
    title: "Deployment & Support",
    desc: "We deploy seamlessly, train your team, and provide ongoing monitoring and support to ensure everything keeps running perfectly.",
    icon: Rocket,
    color: "rgba(190,240,74,0.15)",
    iconColor: "#CFF56A",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // Lights up once the scroll beam reaches the icon
  const reached = useInView(ref, { margin: "0px 0px -45% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6"
    >
      {/* Last step: mask the timeline below its icon so the beam ends there */}
      {index === steps.length - 1 && (
        <div aria-hidden="true" className="absolute left-0 top-14 bottom-0 w-14 bg-background z-[5]" />
      )}

      {/* Step icon (solid underlay hides the timeline track behind it) */}
      <div className="flex-shrink-0 self-start rounded-2xl bg-background relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500"
          style={{
            background: step.color,
            border: `1px solid ${reached ? "rgba(242,242,242,0.45)" : `${step.iconColor}30`}`,
            boxShadow: reached ? "0 0 28px rgba(190,240,74,0.35)" : "none",
          }}
        >
          <step.icon className="size-6" style={{ color: step.iconColor }} />
        </div>
      </div>

      {/* Content */}
      <div className="pb-14 flex-1">
        <span
          className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase mb-2 block"
          style={{ color: "var(--brand-500)" }}
        >
          Step {step.number}
        </span>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
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
  const stepsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 60%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <FadeUp className="lg:sticky lg:top-28">
            <SectionBadge>Our Process</SectionBadge>
            <h2
              className="text-4xl lg:text-6xl font-semibold leading-[1.05] mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              From Idea to Automation{" "}
              <span className="gradient-text accent-serif">in Days</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Our proven 5-step process delivers working automations in under two weeks — without disrupting
              your current operations.
            </p>
          </FadeUp>

          {/* Right: steps on a scroll-driven timeline */}
          <div ref={stepsRef} className="relative pt-2">
            {/* Track */}
            <div
              aria-hidden="true"
              className="absolute left-7 top-2 bottom-0 w-px -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, rgba(190,240,74,0.25), rgba(190,240,74,0.08))" }}
            />
            {/* Fill beam */}
            <motion.div
              aria-hidden="true"
              className="absolute left-7 top-2 bottom-0 w-[2px] -translate-x-1/2 origin-top rounded-full"
              style={{
                scaleY: progress,
                background: "linear-gradient(to bottom, transparent, #BEF04A 15%, #F2F2F2 100%)",
                boxShadow: "0 0 12px rgba(242,242,242,0.45)",
              }}
            />
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

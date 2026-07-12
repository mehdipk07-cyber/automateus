"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We dive deep into your current workflows, pain points, and business goals to identify the highest-impact automation opportunities.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M2 5.5A2.5 2.5 0 014.5 3h1.46c.607 0 1.14.417 1.285 1.007l1.335 5.34a1.25 1.25 0 01-.544 1.42l-1.766 1.06a14.17 14.17 0 006.907 6.906l1.06-1.766a1.25 1.25 0 011.42-.544l5.34 1.335c.59.145 1.007.678 1.007 1.285V21.5A2.5 2.5 0 0121.5 24h-.833C10.225 24 2 15.775 2 5.333V5.5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Process Analysis",
    desc: "Our team maps every manual step in your operations, quantifies time spent, and prioritizes automations by ROI potential.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M17 17l6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Automation Design",
    desc: "We architect a custom automation solution tailored to your exact needs — with clear logic, error handling, and scalability built in.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M18.5 2.5l5 5-14 14H4.5V16.5l14-14z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.5 5.5l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Development & Testing",
    desc: "We build, test, and refine every automation with real data — ensuring reliability before anything touches your live systems.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M13 3.5v2M13 20.5v2M3.5 13h2M20.5 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="13" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M10.5 13l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Deployment & Support",
    desc: "We deploy seamlessly, train your team, and provide ongoing monitoring and support to ensure everything keeps running perfectly.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3c2.4 0 4.6.87 6.3 2.3L22 3v7h-7l2.6-2.6A7 7 0 1013 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13l3 3 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function StepItem({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col sm:flex-row gap-6 items-start ${isReversed ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Animated icon bubble */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.1 }}
          className="w-16 h-16 rounded-lg flex items-center justify-center text-brand-400"
          style={{
            background: "var(--surface-700)",
            border: "1px solid var(--border-brand)",
          }}
        >
          {/* Glow ring that pulses once */}
          <motion.span
            initial={{ scale: 1, opacity: 0.6 }}
            animate={inView ? { scale: 2, opacity: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: "easeOut" }}
            className="absolute inset-0 rounded-lg"
            style={{ background: "rgba(99,102,241,0.25)" }}
          />
          {step.icon}
        </motion.div>
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.1 + 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 sm:max-w-lg"
      >
        <Card className="rounded-lg p-7 ring-0 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-500 font-bold text-sm tracking-widest">{step.number}</span>
            <h3 className="text-white font-bold text-xl">{step.title}</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
        </Card>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);

  /* Scroll-driven line: grows from top to bottom as you scroll through the section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 30%"],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 });

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
            Our Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            From Idea to Automation in Days
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our proven 5-step process delivers working automations fast — without disrupting your current operations.
          </p>
        </motion.div>

        <div ref={sectionRef} className="relative">
          {/* Scroll-driven animated connecting line */}
          <div className="absolute left-8 lg:left-1/2 top-8 bottom-8 w-px hidden sm:block overflow-hidden"
            style={{ background: "rgba(99,102,241,0.08)" }}
          >
            <motion.div
              className="absolute inset-x-0 top-0 bottom-0 origin-top"
              style={{
                scaleY: lineScaleY,
                background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.2), transparent)",
              }}
            />
          </div>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

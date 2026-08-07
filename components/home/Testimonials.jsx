"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "COO, GrowthLoop Marketing",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
    text: "AutomateUs transformed how our agency operates. We went from spending 15 hours a week on manual reporting to having everything automated. The ROI was evident within the first month.",
    stat: "15h/wk saved",
  },
  {
    name: "James Rivera",
    role: "Founder, Apex Properties",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
    text: "The Monday.com automations they built for our real estate ops team are incredible. Follow-ups, task assignments, notifications — all happen automatically. It's like hiring a full-time ops person.",
    stat: "100% automated follow-ups",
  },
  {
    name: "Priya Sharma",
    role: "Head of Sales, TechStack SaaS",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80",
    text: "Our lead qualification process used to be a bottleneck. AutomateUs built an AI system that handles everything — scoring, routing, CRM updates. Our sales team now only touches warm leads.",
    stat: "3× more qualified leads",
  },
  {
    name: "Daniel Chen",
    role: "E-commerce Director, Luminary Shop",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80",
    text: "From order management to customer follow-ups and inventory alerts — they automated our entire post-purchase flow. We're processing 3× more orders with the same team size.",
    stat: "3× order volume",
  },
  {
    name: "Emma Walsh",
    role: "Operations Manager, BrightPath Agency",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
    text: "The discovery call alone was worth it. They identified automations we hadn't even thought of. Fast implementation, clean documentation, and incredible ongoing support.",
    stat: "Full ops overhaul in 2 weeks",
  },
  {
    name: "Marcus Lee",
    role: "Founder, Velocity Growth",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
    text: "Our onboarding flow, client updates, invoicing, and weekly reports are all automated now. AutomateUs didn't just save us time — they fundamentally improved how we run the company.",
    stat: "Full company workflow automated",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              color: "var(--brand-400)",
              borderColor: "rgba(99,102,241,0.2)",
              background: "rgba(99,102,241,0.08)",
            }}
          >
            Testimonials
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Businesses of every size trust AutomateUs to streamline their operations.
          </p>
        </FadeUp>

        {/* Slider */}
        <div
          className="relative rounded-3xl overflow-hidden p-1"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(52,211,153,0.08), rgba(99,102,241,0.05))",
          }}
        >
          <div
            className="rounded-[22px] p-8 sm:p-12 lg:p-16"
            style={{ background: "var(--surface-card)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo stack */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-72 sm:w-80 sm:h-88">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: 40, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -40, scale: 0.96 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <div
                        className="relative w-full h-full rounded-2xl overflow-hidden"
                        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <Image
                          src={t.photo}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 256px, 320px"
                        />
                      </div>
                      {/* Stat chip */}
                      <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-xl"
                        style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
                      >
                        {t.stat}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between">
                <div>
                  <Quote
                    className="size-10 mb-6 opacity-30 text-brand-400"
                    style={{ fill: "rgba(129,140,248,0.2)" }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p
                        className="text-xl sm:text-2xl leading-relaxed mb-8 font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div>
                        <p className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                          {t.name}
                        </p>
                        <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {t.role}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 mt-10">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  >
                    <ArrowRight className="size-4" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2 ml-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="transition-all duration-300"
                        style={{
                          width: i === active ? "24px" : "8px",
                          height: "8px",
                          borderRadius: "9999px",
                          background: i === active ? "var(--brand-500)" : "rgba(255,255,255,0.15)",
                        }}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

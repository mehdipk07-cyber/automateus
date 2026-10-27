"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLights from "@/components/home/HeroLights";
import WorkflowCanvas from "@/components/home/WorkflowCanvas";
import { BorderBeam } from "@/components/ui/border-beam";

const stats = [
  { value: "10,000+", label: "Hours Saved" },
  { value: "100+",    label: "Automations" },
  { value: "98%",     label: "Satisfaction" },
  { value: "3×",      label: "Avg. ROI" },
];

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80",
];

const ease = [0.16, 1, 0.3, 1];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 sm:pt-40 pb-20 lg:pb-28">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="glow-orb w-[700px] h-[700px] top-[-15%] left-[-12%] opacity-[0.16]"
          style={{ background: "radial-gradient(circle, #E1B07E, transparent 70%)" }}
        />
        <div
          className="glow-orb w-[520px] h-[520px] top-[20%] right-[-10%] opacity-[0.14]"
          style={{ background: "radial-gradient(circle, #86A397, transparent 70%)" }}
        />
        <div
          className="glow-orb w-[900px] h-[500px] top-[55%] left-1/2 -translate-x-1/2 opacity-[0.7]"
          style={{ background: "radial-gradient(ellipse, var(--midnight-violet), transparent 70%)" }}
        />
      </div>

      <HeroLights />

      {/* Grid, fading toward the edges */}
      <div className="grid-fade absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement pill */}
        <Reveal className="mb-9 flex justify-center">
          <Link
            href="/services#ai"
            className="pill-border group inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="rounded-full bg-brand-500 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0B1723]">
              New
            </span>
            AI agents for operations teams
            <ArrowRight className="size-3.5 text-brand-400 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="text-[44px] leading-[1.02] sm:text-7xl lg:text-[96px] font-semibold mb-7"
          style={{ color: "var(--text-primary)" }}
        >
          Automate <span className="gradient-text accent-serif">Repetitive</span> Work.
          <br />
          Scale <span className="gradient-text accent-serif">Faster.</span>
        </motion.h1>

        {/* Subheadline */}
        <Reveal delay={0.2}>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We build custom automations that eliminate manual tasks, reduce operational costs,
            and help your team focus on high-value work.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Button
            size="lg"
            className="btn-shine h-auto rounded-full px-8 py-4 text-base font-semibold shadow-[0_0_40px_-8px_rgba(225,176,126,0.6)]"
            render={<Link href="/contact" />}
          >
            Book a Free Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-auto rounded-full px-8 py-4 text-base font-semibold backdrop-blur-sm"
            render={<Link href="/case-studies" />}
          >
            <Zap className="size-4 text-brand-400" />
            View Case Studies
            <ArrowUpRight className="size-4 opacity-60" />
          </Button>
        </Reveal>

        {/* Social proof */}
        <Reveal delay={0.4} className="flex items-center justify-center gap-3 mb-16 lg:mb-20">
          <div className="flex -space-x-2.5">
            {avatars.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full object-cover ring-2 ring-background"
              />
            ))}
          </div>
          <p className="text-sm text-left leading-tight" style={{ color: "var(--text-muted)" }}>
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>100+ growing businesses</span>
            <br />
            run on our automations
          </p>
        </Reveal>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          className="relative hidden sm:block max-w-5xl mx-auto rounded-2xl"
        >
          {/* Glow behind the canvas */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-10 -top-10 bottom-0 -z-10 blur-3xl opacity-40"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(225,176,126,0.35), transparent 70%)" }}
          />
          <WorkflowCanvas />
          <BorderBeam size={240} duration={14} />
        </motion.div>

        {/* Stats strip */}
        <Reveal
          delay={0.6}
          className="relative grid grid-cols-2 sm:grid-cols-4 max-w-5xl mx-auto mt-6 rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[inherit] border"
            style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
          />
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative py-6 px-4 text-center"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div className="font-mono text-2xl sm:text-3xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                {stat.value}
              </div>
              <div
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
          <BorderBeam size={160} duration={9} />
        </Reveal>
      </div>
    </section>
  );
}

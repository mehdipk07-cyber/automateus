import Link from "next/link";
import { ArrowRight, ArrowUpRight, Workflow, Bot, Users, LayoutGrid, BarChart3, Plug } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionBadge } from "@/components/ui/section-badge";
import { cn } from "@/lib/utils";

/* ── Micro-visuals (CSS-animated, no JS) ─────────────────────── */

function FlowVisual() {
  const steps = ["Trigger", "Filter", "AI step", "Action"];
  return (
    <div className="relative flex items-center justify-between px-6 sm:px-10 w-full">
      <div className="absolute left-10 right-10 sm:left-16 sm:right-16 top-1/2 h-px bg-white/10">
        <span className="travel-dot absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-brand-400 shadow-[0_0_12px_#E5BE9E]" />
      </div>
      {steps.map((s, i) => (
        <div
          key={s}
          className={cn(
            "relative z-10 rounded-lg border px-3 py-2 font-mono text-[11px] bg-[#101C2C]",
            i === 2 ? "border-brand-400/50 text-brand-300 shadow-[0_0_24px_-6px_rgba(225,176,126,0.6)]" : "border-white/10 text-[var(--text-secondary)]"
          )}
        >
          {s}
        </div>
      ))}
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="w-full max-w-[260px] space-y-2.5 px-4">
      <div className="ml-auto w-fit rounded-xl rounded-br-sm bg-white/[0.07] px-3 py-2 text-[11px] text-[var(--text-secondary)]">
        Summarize today&apos;s leads
      </div>
      <div className="w-fit rounded-xl rounded-bl-sm border border-brand-400/25 bg-brand-500/10 px-3 py-2 text-[11px] text-brand-200">
        12 new leads. 4 are ready for a call.
      </div>
      <div className="flex w-fit gap-1 rounded-xl rounded-bl-sm bg-white/[0.05] px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="typing-dot size-1.5 rounded-full bg-brand-300" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  );
}

function PipelineVisual() {
  const cols = [
    { name: "New", n: 3 },
    { name: "Qualified", n: 2 },
    { name: "Won", n: 1 },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 w-full px-4">
      {cols.map((c, ci) => (
        <div key={c.name} className="space-y-1.5">
          <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">{c.name}</div>
          {Array.from({ length: c.n }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-5 rounded-md border",
                ci === 2 ? "border-brand-400/40 bg-brand-500/15 animate-pulse" : "border-white/10 bg-white/[0.04]"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function BoardVisual() {
  // monday.com status colours
  const rows = [
    { task: "Onboard client", status: "Done", color: "#00C875" },
    { task: "Send invoice", status: "Working", color: "#FDAB3D" },
    { task: "Weekly report", status: "Done", color: "#00C875" },
  ];
  return (
    <div className="w-full px-4 space-y-1.5">
      {rows.map((r) => (
        <div key={r.task} className="flex items-center justify-between gap-2 rounded-md bg-white/[0.04] pl-2.5 overflow-hidden">
          <span className="text-[11px] text-[var(--text-secondary)] truncate">{r.task}</span>
          <span className="w-16 shrink-0 py-1 text-center text-[10px] font-medium text-white" style={{ background: r.color }}>
            {r.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function BarsVisual() {
  const bars = [45, 70, 52, 88, 64, 96, 78];
  return (
    <div className="flex items-end gap-2 h-24 px-6">
      {bars.map((h, i) => (
        <div
          key={i}
          className="bar-rise w-4 rounded-t-sm bg-gradient-to-t from-brand-700/40 to-brand-400"
          style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0E1A28] p-4 font-mono text-[11px] leading-6">
      <div><span className="text-accent-400">POST</span> <span className="text-[var(--text-secondary)]">/webhooks/orders</span></div>
      <div className="text-[var(--text-muted)]">  → transform(payload)</div>
      <div className="text-[var(--text-muted)]">  → sync(erp, crm, sheets)</div>
      <div>
        <span className="text-brand-400">200 OK</span> <span className="text-[var(--text-faint)]">· 84ms</span>
        <span className="caret ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-brand-400" />
      </div>
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────── */

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate complex multi-step processes across your entire business stack — eliminating bottlenecks and human error.",
    href: "/services#workflow",
    visual: FlowVisual,
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Integrate LLMs and AI tools into your workflows for smarter, faster operations.",
    href: "/services#ai",
    visual: ChatVisual,
  },
  {
    icon: Users,
    title: "CRM Automation",
    desc: "Automate lead capture, nurture sequences, follow-ups, and customer lifecycle management.",
    href: "/services#crm",
    visual: PipelineVisual,
  },
  {
    icon: LayoutGrid,
    title: "Monday.com Solutions",
    desc: "Build powerful boards, automations, and integrations that keep projects on autopilot.",
    href: "/services#monday",
    visual: BoardVisual,
  },
  {
    icon: BarChart3,
    title: "Reporting Automation",
    desc: "Generate accurate, real-time dashboards and reports automatically — no spreadsheets.",
    href: "/services#reporting",
    visual: BarsVisual,
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    desc: "Connect any software with custom API integrations — one unified system.",
    href: "/services#integrations",
    visual: CodeVisual,
    span: "md:col-span-2 lg:col-span-3",
    wide: true,
  },
];

function ServiceCard({ service }) {
  const Visual = service.visual;
  return (
    <Link href={service.href} className="group block h-full">
      <div
        className={cn(
          "relative h-full rounded-3xl border p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-brand-500/10",
          service.wide && "lg:grid lg:grid-cols-2 lg:items-stretch"
        )}
        style={{
          background: "linear-gradient(160deg, var(--surface-hover) 0%, var(--surface-card) 45%)",
          borderColor: "var(--border)",
        }}
      >
        <GlowingEffect />

        {/* Visual panel */}
        <div
          className={cn(
            "dot-bg relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-black/20",
            service.wide && "lg:order-2 lg:h-auto lg:min-h-48"
          )}
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
          <Visual />
        </div>

        {/* Copy */}
        <div className={cn("p-6 pt-5", service.wide && "lg:flex lg:flex-col lg:justify-center lg:p-10")}>
          <div className="flex items-start justify-between gap-4 mb-2.5">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg flex items-center justify-center border border-brand-500/20 bg-brand-500/10">
                <service.icon className="size-4 text-brand-400" />
              </div>
              <h3 className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                {service.title}
              </h3>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-[var(--text-muted)] transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-400/50 group-hover:bg-brand-500 group-hover:text-[#0B1723]">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {service.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <SectionBadge>What We Do</SectionBadge>
            <h2
              className="text-4xl lg:text-6xl font-semibold leading-[1.05]"
              style={{ color: "var(--text-primary)" }}
            >
              End-to-End <span className="gradient-text accent-serif">Automation</span> Services
            </h2>
            <p className="text-lg leading-relaxed mt-5" style={{ color: "var(--text-secondary)" }}>
              From simple task automations to complex AI-powered workflows — we cover every layer
              of your operations so you can focus on growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              size="lg"
              className="btn-shine h-auto rounded-full px-7 py-3.5 font-semibold shadow-[0_0_32px_-8px_rgba(225,176,126,0.55)]"
              render={<Link href="/contact" />}
            >
              Start Automating
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-auto rounded-full px-7 py-3.5"
              render={<Link href="/services" />}
            >
              View All Services
            </Button>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 0.06} className={cn("h-full", service.span)}>
              <ServiceCard service={service} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

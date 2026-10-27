import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionBadge } from "@/components/ui/section-badge";

const caseStudies = [
  {
    tag: "Data Operations",
    metric: "90%",
    metricLabel: "Reduction in data entry",
    title: "Eliminated Manual Data Entry for a Marketing Agency",
    desc: "A 12-person marketing agency was spending 3+ hours daily copying data between their CRM, project management tool, and reporting sheets. We automated the entire flow.",
    tools: ["Make.com", "HubSpot", "Google Sheets"],
    href: "/case-studies#case-1",
    accent: "var(--accent-500)",
  },
  {
    tag: "Lead Management",
    metric: "3×",
    metricLabel: "Increase in qualified leads",
    title: "AI-Powered Lead Qualification System",
    desc: "A B2B SaaS company was losing hours qualifying leads manually. We built an AI system that scores, segments, and routes leads automatically — with CRM sync.",
    tools: ["Claude AI", "Salesforce", "Zapier"],
    href: "/case-studies#case-2",
    accent: "var(--brand-400)",
  },
  {
    tag: "Operations",
    metric: "20h+",
    metricLabel: "Saved per week",
    title: "Operations Automation for a Real Estate Firm",
    desc: "A real estate operations team was buried in manual reporting, follow-up emails, and task assignments. We automated the entire ops workflow top-to-bottom.",
    tools: ["Monday.com", "Make.com", "Gmail"],
    href: "/case-studies#case-3",
    accent: "var(--accent-500)",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--surface-800)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionBadge>Case Studies</SectionBadge>
            <h2
              className="text-4xl lg:text-6xl font-semibold leading-[1.05]"
              style={{ color: "var(--text-primary)" }}
            >
              Real Results for{" "}
              <span className="gradient-text accent-serif">Real Businesses</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand-400/50 hover:text-brand-300"
            style={{ color: "var(--text-primary)" }}
          >
            View all case studies
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {caseStudies.map((cs, i) => (
            <StaggerItem key={cs.title} className="h-full">
              <Link href={cs.href} className="group block h-full">
                <div
                  className="relative rounded-3xl p-2 h-full flex flex-col border transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(160deg, var(--surface-hover) 0%, var(--surface-card) 50%)",
                    borderColor: "var(--border)",
                  }}
                >
                  <GlowingEffect />

                  {/* Metric panel */}
                  <div
                    className="dot-bg relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 pb-7"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                      style={{ background: i === 1 ? "#86A397" : "#E1B07E" }}
                    />
                    <div className="relative flex items-center justify-between mb-10">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: cs.accent }}>
                        {cs.tag}
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full border border-white/10 text-[var(--text-muted)] transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-400/50 group-hover:bg-brand-500 group-hover:text-[#0B1723]">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <div className="relative text-7xl leading-none mb-2"><span className="gradient-text accent-serif">{cs.metric}</span></div>
                    <div className="relative font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                      {cs.metricLabel}
                    </div>
                  </div>

                  {/* Story */}
                  <div className="flex flex-1 flex-col p-5 pt-6">
                    <h3
                      className="font-semibold text-lg mb-3 leading-snug transition-colors group-hover:text-brand-300"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cs.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--text-muted)" }}>
                      {cs.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md font-mono text-[11px]"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

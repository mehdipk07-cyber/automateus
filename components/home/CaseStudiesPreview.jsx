import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

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
        <FadeUp className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                color: "var(--accent-400)",
                borderColor: "rgba(52,211,153,0.2)",
                background: "rgba(52,211,153,0.08)",
              }}
            >
              Case Studies
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Real Results for{" "}
              <span className="gradient-text-green">Real Businesses</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="flex-shrink-0 inline-flex items-center gap-2 font-semibold transition-colors text-brand-400 hover:text-brand-300"
          >
            View all case studies
            <ArrowRight className="size-4" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.title}>
              <Link href={cs.href} className="group block h-full">
                <div
                  className="bento-card rounded-2xl p-7 h-full flex flex-col border transition-all duration-300"
                  style={{
                    background: "var(--surface-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: cs.accent }}
                  >
                    {cs.tag}
                  </span>

                  <div className="mt-5 mb-5">
                    <span className="text-5xl font-bold gradient-text">{cs.metric}</span>
                    <span className="text-sm ml-2" style={{ color: "var(--text-muted)" }}>
                      {cs.metricLabel}
                    </span>
                  </div>

                  <h3
                    className="font-semibold text-lg mb-3 leading-snug group-hover:text-brand-300 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cs.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-muted)" }}>
                    {cs.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-brand-400"
                  >
                    Read full story
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
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

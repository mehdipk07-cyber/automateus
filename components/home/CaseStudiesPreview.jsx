import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    tag: "Data Operations",
    metric: "90%",
    metricLabel: "Reduction in data entry",
    title: "Eliminated Manual Data Entry for a Marketing Agency",
    desc: "A 12-person marketing agency was spending 3+ hours daily copying data between their CRM, project management tool, and reporting sheets. We automated the entire flow.",
    tools: ["Make.com", "HubSpot", "Google Sheets"],
    href: "/case-studies#case-1",
  },
  {
    tag: "Lead Management",
    metric: "3x",
    metricLabel: "Increase in qualified leads",
    title: "AI-Powered Lead Qualification System",
    desc: "A B2B SaaS company was losing hours qualifying leads manually. We built an AI system that scores, segments, and routes leads automatically — with CRM sync.",
    tools: ["Claude AI", "Salesforce", "Zapier"],
    href: "/case-studies#case-2",
  },
  {
    tag: "Operations",
    metric: "20h+",
    metricLabel: "Saved per week",
    title: "Operations Automation for a Real Estate Firm",
    desc: "A real estate operations team was buried in manual reporting, follow-up emails, and task assignments. We automated the entire ops workflow top-to-bottom.",
    tools: ["Monday.com", "Make.com", "Gmail"],
    href: "/case-studies#case-3",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <Badge variant="outline" className="mb-4 border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs tracking-widest text-accent-400 uppercase">
              Case Studies
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Real Results for Real Businesses
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="flex-shrink-0 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold transition-colors"
          >
            View all case studies
            <ArrowRight className="size-4" />
          </Link>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.title}>
              <Link href={cs.href} className="group block h-full">
                <Card className="rounded-lg p-7 ring-0 border border-border hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-300 h-full">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">{cs.tag}</span>
                  <div className="mt-4 mb-6">
                    <span className="text-5xl font-bold gradient-text">{cs.metric}</span>
                    <span className="text-gray-500 text-sm ml-2">{cs.metricLabel}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-brand-200 transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{cs.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-gray-400">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-brand-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read full story
                    <ArrowRight className="size-3.5" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

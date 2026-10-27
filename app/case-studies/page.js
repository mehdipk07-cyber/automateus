import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Case Studies | Real Automation Results",
  description:
    "See how AutomateUs has helped businesses save thousands of hours, reduce costs, and scale operations with custom automation solutions.",
  keywords: [
    "automation case studies",
    "automation results",
    "workflow automation ROI",
    "business automation examples",
    "automation success stories",
    "time saved with automation",
  ],
  alternates: { canonical: "https://automate-us.vercel.app/case-studies" },
  openGraph: {
    title: "Case Studies | Real Automation Results — AutomateUs",
    description: "See how AutomateUs has helped businesses save thousands of hours, reduce costs, and scale operations with custom automation solutions.",
    url: "https://automate-us.vercel.app/case-studies",
    images: [{ url: "/logo-automateus.png", width: 1254, height: 1254, alt: "AutomateUs Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Real Automation Results — AutomateUs",
    description: "See how AutomateUs has helped businesses save thousands of hours, reduce costs, and scale operations with custom automation solutions.",
    images: ["/logo-automateus.png"],
  },
};

const caseStudies = [
  {
    id: "case-1",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=340&fit=crop&q=80",
    tag: "Data Operations",
    client: "Marketing Agency (12 people)",
    title: "Eliminated Manual Data Entry — 90% Reduction",
    challenge:
      "A growing marketing agency had 3 team members spending 3+ hours daily copying client data between their CRM (HubSpot), project management tool (Monday.com), and Google Sheets reporting dashboards. The process was error-prone, inconsistent, and creating bottlenecks in their client reporting cycle.",
    solution:
      "We designed a fully automated data pipeline using Make.com that triggers whenever new deals or contacts are updated in HubSpot. The automation transforms and routes data to the correct Monday.com boards and updates the relevant Google Sheets dashboards in real time — with error handling and Slack alerts for any edge cases.",
    results: [
      "90% reduction in manual data entry",
      "Saved 9+ hours per week across the team",
      "Eliminated data inconsistency issues between platforms",
      "Client reports now generated in real time vs. end of week",
      "ROI achieved within 6 weeks of deployment",
    ],
    metrics: [
      { end: 90,  suffix: "%", label: "Less manual work" },
      { end: 9,   suffix: "h", label: "Saved weekly" },
      { end: 0,   suffix: "",  label: "Data errors" },
      { end: 6,   suffix: "wk", label: "ROI payback" },
    ],
    tools: ["Make.com", "HubSpot", "Monday.com", "Google Sheets", "Slack"],
  },
  {
    id: "case-2",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=340&fit=crop&q=80",
    tag: "AI & Lead Management",
    client: "B2B SaaS Company",
    title: "AI-Powered Lead Qualification System",
    challenge:
      "A B2B SaaS company with a growing inbound pipeline was spending 4+ hours daily on manual lead qualification — reviewing form submissions, researching companies, and deciding which leads were worth the sales team's time. Hot leads were falling through cracks due to slow response times.",
    solution:
      "We built a fully automated AI lead qualification system using Claude AI and Make.com. When a new lead comes in, the system automatically enriches company data, uses AI to score and categorize the lead based on ICP fit, drafts a personalized initial email, and routes the lead to the right sales rep in Salesforce — all within minutes of form submission.",
    results: [
      "Lead response time reduced from 4 hours to under 5 minutes",
      "3x increase in qualified leads contacted within 1 hour",
      "Sales team now only engages with pre-qualified leads",
      "Freed 20 hours/week for strategic sales activities",
      "15% improvement in lead-to-meeting conversion rate",
    ],
    metrics: [
      { end: 3,   suffix: "x",   label: "More qualified leads" },
      { end: 5,   suffix: "min", label: "Response time" },
      { end: 20,  suffix: "h",   label: "Freed per week" },
      { end: 15,  suffix: "%",   label: "Better conversion" },
    ],
    tools: ["Claude AI", "Make.com", "Salesforce", "Clearbit", "Gmail"],
  },
  {
    id: "case-3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=340&fit=crop&q=80",
    tag: "Operations",
    client: "Real Estate Operations Team (8 people)",
    title: "20+ Hours Saved Weekly Through Full Ops Automation",
    challenge:
      "A real estate firm's operations team was overwhelmed by manual tasks: sending follow-up emails, updating Monday.com boards, generating weekly reports, assigning tasks to agents, and managing communication across a 30+ agent team. The ops manager was working 60+ hour weeks just to keep up.",
    solution:
      "We conducted a full process audit and built a comprehensive automation system covering their entire operations workflow. Using Monday.com automations, Make.com, and Gmail, we automated follow-up sequences, task assignment, status updates, weekly report generation, and team notifications — creating a system where most operational tasks run without human intervention.",
    results: [
      "Saved 20+ hours per week across the ops team",
      "Ops manager workweek reduced from 60h to 42h",
      "100% of follow-ups sent within 24 hours (was 60%)",
      "Weekly reports now auto-generated and delivered by Monday 8am",
      "Zero missed task assignments across 30+ agents",
    ],
    metrics: [
      { end: 20,  suffix: "h+", label: "Saved weekly" },
      { end: 100, suffix: "%",  label: "Follow-up rate" },
      { end: 30,  suffix: "+",  label: "Agents managed" },
      { end: 42,  suffix: "h",  label: "Ops mgr workweek" },
    ],
    tools: ["Monday.com", "Make.com", "Gmail", "Google Sheets", "Slack"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="outline" className="mb-6 border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs tracking-widest text-accent-400 uppercase">
              Case Studies
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-content mb-6">
              Real Businesses.{" "}
              <span className="gradient-text accent-serif">Real Results.</span>
            </h1>
            <p className="text-xl text-content-secondary max-w-2xl mx-auto">
              See how we&apos;ve helped businesses across industries save thousands of hours, eliminate manual work, and scale their operations.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies — page animation: count-up on every metric */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {caseStudies.map((cs) => (
            <FadeUp key={cs.id} id={cs.id}>
              <Card className="rounded-xl p-0 ring-0 border border-border overflow-hidden [--card-spacing:0px]">
                {/* Cover image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                  <div className="absolute bottom-4 left-8 flex items-center gap-3">
                    <Badge variant="outline" className="border-accent-500/30 bg-black/40 text-xs tracking-widest text-accent-400 uppercase backdrop-blur-sm">
                      {cs.tag}
                    </Badge>
                    <Badge variant="secondary" className="bg-black/40 text-content-secondary backdrop-blur-sm">{cs.client}</Badge>
                  </div>
                </div>
                {/* Header */}
                <div className="p-8 lg:p-10 border-b border-white/5">
                  <h2 className="text-3xl lg:text-4xl font-bold text-content mb-6">{cs.title}</h2>

                  {/* Animated metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold gradient-text">
                          <AnimatedCounter end={m.end} suffix={m.suffix} duration={1600} />
                        </div>
                        <div className="text-content-muted text-xs mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                  <div className="p-8 lg:p-10">
                    <h3 className="text-content font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-700 flex-shrink-0" /> The Challenge
                    </h3>
                    <p className="text-content-secondary text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-content font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" /> The Solution
                    </h3>
                    <p className="text-content-secondary text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-content font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-400 flex-shrink-0" /> The Results
                    </h3>
                    <ul className="space-y-2.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-content-secondary text-sm">
                          <Check className="size-3.5 flex-shrink-0 mt-0.5 text-accent-400" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <div className="text-xs text-content-muted uppercase tracking-wider mb-3">Tools Used</div>
                      <div className="flex flex-wrap gap-2">
                        {cs.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-content-secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-800/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-content mb-4">Your Business Could Be Next</h2>
            <p className="text-content-secondary text-lg mb-8">
              Book a free discovery call and let&apos;s identify the automation opportunities that will have the biggest impact for you.
            </p>
            <Button size="lg" className="h-auto px-10 py-5 text-lg font-bold" render={<Link href="/contact" />}>
              Book Your Free Consultation
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

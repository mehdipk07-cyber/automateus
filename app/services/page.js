import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import BlurText from "@/components/reactbits/BlurText";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services | Workflow, AI & CRM Automation",
  description:
    "Explore AutomateUs's full range of automation services — from workflow and AI automation to Monday.com, Make.com, Zapier, CRM, and custom API integrations.",
  keywords: [
    "automation services",
    "workflow automation agency",
    "AI automation services",
    "CRM automation",
    "Monday.com setup",
    "Make.com automation",
    "Zapier experts",
    "custom API integration",
    "business process automation",
  ],
  alternates: { canonical: "https://automate-us.vercel.app/services" },
  openGraph: {
    title: "Services | Workflow, AI & CRM Automation — AutomateUs",
    description:
      "Explore AutomateUs's full range of automation services — from workflow and AI automation to Monday.com, Make.com, Zapier, CRM, and custom API integrations.",
    url: "https://automate-us.vercel.app/services",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "AutomateUs Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Workflow, AI & CRM Automation — AutomateUs",
    description: "Explore AutomateUs's full range of automation services — from workflow and AI automation to Monday.com, Make.com, Zapier, CRM, and custom API integrations.",
    images: ["/logo.jpg"],
  },
};

const services = [
  {
    id: "workflow",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="4" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="30" y="4" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="4" y="30" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="30" y="30" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M22 13h8M13 22v8M39 22v8M30 39h-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Workflow Automation",
    tagline: "Eliminate repetitive, multi-step processes",
    desc: "We analyze your existing business processes and build reliable automations that replace manual, error-prone work. Whether it's approvals, notifications, data syncing, or task routing — we automate the entire flow from trigger to outcome.",
    capabilities: [
      "Multi-step process automation",
      "Cross-platform data syncing",
      "Conditional logic & branching",
      "Error handling & retry logic",
      "Real-time status notifications",
      "Audit trail & logging",
    ],
    useCases: ["Invoice processing", "Employee onboarding", "Content publishing workflows", "Order fulfillment"],
  },
  {
    id: "ai",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="10" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M26 4v8M26 40v8M4 26h8M40 26h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M9.8 9.8l5.6 5.6M36.6 36.6l5.6 5.6M9.8 42.2l5.6-5.6M36.6 15.4l5.6-5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="26" r="4" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: "AI Automation",
    tagline: "Integrate AI for smarter, faster operations",
    desc: "We embed AI models like Claude, GPT-4, and specialized tools directly into your workflows — so decisions, summaries, classifications, and content generation happen automatically, at scale.",
    capabilities: [
      "AI-powered lead scoring",
      "Automated content generation",
      "Intelligent document processing",
      "Sentiment analysis & routing",
      "AI chatbots & assistants",
      "Smart categorization & tagging",
    ],
    useCases: ["Lead qualification", "Customer support triage", "Contract summarization", "Email drafting"],
  },
  {
    id: "crm",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="36" cy="16" r="8" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M4 44v-3a10 10 0 0110-10h12a10 10 0 0110 10v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M36 31v13M30 37h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "CRM Automation",
    tagline: "Automate your entire customer lifecycle",
    desc: "From lead capture to closed deal, we automate every stage of your CRM pipeline. New leads get instantly captured, scored, assigned, and nurtured — without anyone touching a keyboard.",
    capabilities: [
      "Lead capture & CRM sync",
      "Automated follow-up sequences",
      "Pipeline stage triggers",
      "Contact enrichment",
      "Deal & task auto-creation",
      "Sales reporting automation",
    ],
    useCases: ["HubSpot automation", "Salesforce workflows", "Pipedrive sequences", "Multi-CRM sync"],
  },
  {
    id: "monday",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="4" width="44" height="44" rx="8" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M14 18h24M14 26h18M14 34h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="40" cy="26" r="4" fill="currentColor" opacity="0.5"/>
        <circle cx="36" cy="34" r="4" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    title: "Monday.com Automation",
    tagline: "Unlock the full power of Monday.com",
    desc: "We build advanced Monday.com boards, custom automations, and external integrations that go far beyond what the native automation center can do. Your team gets a command center that actually runs itself.",
    capabilities: [
      "Custom board architecture",
      "Cross-board automations",
      "External app integrations",
      "Auto item creation & updates",
      "Monday AI integration",
      "Complex conditional logic",
    ],
    useCases: ["Project management automation", "Client onboarding boards", "Sales pipeline in Monday", "HR workflows"],
  },
  {
    id: "make",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="10" cy="26" r="7" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="42" cy="10" r="7" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="42" cy="42" r="7" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M17 23L35 13M17 29L35 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Make.com Automation",
    tagline: "Complex workflows made visual and reliable",
    desc: "Make.com is one of the most powerful automation platforms available. We design and build Make scenarios that connect your apps, handle edge cases, and scale with your business — properly.",
    capabilities: [
      "Multi-app scenario design",
      "API & webhook integration",
      "Data transformation & mapping",
      "Error handling & alerts",
      "Custom HTTP modules",
      "Complex data routing",
    ],
    useCases: ["E-commerce automation", "Data pipeline automation", "Marketing workflows", "SaaS integrations"],
  },
  {
    id: "zapier",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M38 6L14 28h18L14 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Zapier Automation",
    tagline: "Reliable no-code automations at scale",
    desc: "We design, build, and optimize Zapier workflows that actually work — handling edge cases, managing filters, and structuring multi-step Zaps for long-term reliability.",
    capabilities: [
      "Multi-step Zap architecture",
      "Filter & conditional logic",
      "Formatter & data mapping",
      "Paths & branching Zaps",
      "Webhook & API integration",
      "Zap monitoring & optimization",
    ],
    useCases: ["Lead to CRM automation", "E-commerce sync", "Social media automation", "Notification workflows"],
  },
  {
    id: "reporting",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="6" y="34" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="21" y="22" width="10" height="26" rx="2" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="36" y="8" width="10" height="40" rx="2" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M10 22l10-10 12 8 14-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 4h-8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reporting & Dashboard Automation",
    tagline: "Data delivered automatically — no manual work",
    desc: "We build automated reporting systems that pull from multiple sources, process the data, and deliver polished reports to the right people at the right time. No more manual spreadsheet work.",
    capabilities: [
      "Automated Google Data Studio reports",
      "Scheduled email report delivery",
      "Multi-source data aggregation",
      "KPI dashboard automation",
      "Slack/Teams report delivery",
      "Custom metrics & alerts",
    ],
    useCases: ["Weekly sales reports", "Marketing performance dashboards", "Operations KPI tracking", "Executive summaries"],
  },
  {
    id: "integrations",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="32" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="4" y="32" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="32" y="32" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M20 12h12M12 20v12M40 20v12M20 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="26" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Custom API Integrations",
    tagline: "Connect any software — no limits",
    desc: "Not everything has a Zapier connector. We build custom API integrations using REST, GraphQL, and webhooks to connect any software that has an accessible API — creating a unified tech stack.",
    capabilities: [
      "REST & GraphQL API integration",
      "Webhook design & management",
      "OAuth & API key authentication",
      "Rate limiting & pagination handling",
      "Data transformation pipelines",
      "Custom middleware development",
    ],
    useCases: ["Proprietary software integration", "Legacy system connectivity", "Multi-platform data sync", "Custom app development"],
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AutomateUs Services",
  url: "https://automate-us.vercel.app/services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.tagline,
      provider: { "@type": "Organization", name: "AutomateUs", url: "https://automate-us.vercel.app" },
      url: `https://automate-us.vercel.app/services#${s.id}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Hero — animation: pulsing glow on CTA button */}
      <section className="relative pt-32 pb-20 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="outline" className="mb-6 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
              Our Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Every Automation Service{" "}
              <span className="gradient-text">Your Business Needs</span>
            </h1>
            <BlurText
              text="From simple Zapier workflows to complex AI-powered systems — we design, build, and maintain automation solutions that scale with your business."
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 justify-center"
              delay={35}
              stepDuration={0.4}
            />
            <Button size="lg" className="h-auto px-8 py-4 text-lg" render={<Link href="/contact" />}>
              Book a Free Consultation
              <ArrowRight />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((s, i) => (
            <FadeUp key={s.id} id={s.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="text-brand-400 mb-5">{s.icon}</div>
                  <span className="text-sm font-semibold text-brand-400 uppercase tracking-widest">{s.tagline}</span>
                  <h2 className="text-4xl font-bold text-white mt-2 mb-4">{s.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-8">{s.desc}</p>

                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">What&apos;s Included</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {s.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-gray-400 text-sm">
                        <Check className="size-3.5 flex-shrink-0 text-emerald-500" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" className="h-auto px-6 py-3" render={<Link href="/contact" />}>
                    Get Started
                    <ArrowRight className="size-4" />
                  </Button>
                </div>

                {/* Card */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Card className="rounded-lg p-8 ring-0 border border-border">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 text-gray-400">
                      Common Use Cases
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.useCases.map((uc) => (
                        <div key={uc} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-sm font-medium">
                          {uc}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface-800/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free discovery call and we&apos;ll identify the highest-ROI automations for your specific business.
            </p>
            <Button size="lg" className="h-auto px-10 py-5 text-lg font-bold" render={<Link href="/contact" />}>
              Book a Free Consultation
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

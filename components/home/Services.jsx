import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Workflow Automation",
    desc: "Automate complex multi-step processes across your entire business stack — eliminating bottlenecks and human error.",
    href: "/services#workflow",
    tag: "Most Popular",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI Automation",
    desc: "Integrate large language models and AI tools into your workflows for smarter, faster, and more accurate operations.",
    href: "/services#ai",
    tag: "Trending",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "CRM Automation",
    desc: "Automate lead capture, nurture sequences, follow-ups, and customer lifecycle management inside your CRM.",
    href: "/services#crm",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 9h6M9 13h4M9 17h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Monday.com Solutions",
    desc: "Build powerful Monday.com boards, automations, and integrations that keep your projects running on autopilot.",
    href: "/services#monday",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reporting Automation",
    desc: "Generate accurate, real-time dashboards and reports automatically — without anyone touching a spreadsheet.",
    href: "/services#reporting",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Custom Integrations",
    desc: "Connect any software with custom API integrations — making your entire tech stack work as a unified system.",
    href: "/services#integrations",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
            What We Do
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            End-to-End Automation Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From simple task automations to complex AI-powered workflows — we cover every layer of your operations.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link href={s.href} className="group block h-full">
                <Card className="relative h-full rounded-lg p-7 ring-0 border border-border hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-300">
                  {s.tag && (
                    <Badge className="absolute top-5 right-5 bg-accent-500/20 text-accent-400 border border-accent-500/20">
                      {s.tag}
                    </Badge>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-5 group-hover:bg-brand-500/20 group-hover:text-brand-300 transition-all">
                    {s.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-200 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-brand-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="size-3.5" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp delay={0.2} className="text-center mt-12">
          <Button variant="outline" size="lg" className="h-auto px-7 py-3.5" render={<Link href="/services" />}>
            View All Services
            <ArrowRight className="size-4" />
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}

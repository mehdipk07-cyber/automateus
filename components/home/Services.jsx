import Link from "next/link";
import { ArrowRight, Workflow, Bot, Users, LayoutGrid, BarChart3, Plug } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate complex multi-step processes across your entire business stack — eliminating bottlenecks and human error.",
    href: "/services#workflow",
    highlighted: true,
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Integrate LLMs and AI tools into your workflows for smarter, faster operations.",
    href: "/services#ai",
  },
  {
    icon: Users,
    title: "CRM Automation",
    desc: "Automate lead capture, nurture sequences, follow-ups, and customer lifecycle management.",
    href: "/services#crm",
  },
  {
    icon: LayoutGrid,
    title: "Monday.com Solutions",
    desc: "Build powerful boards, automations, and integrations that keep projects on autopilot.",
    href: "/services#monday",
  },
  {
    icon: BarChart3,
    title: "Reporting Automation",
    desc: "Generate accurate, real-time dashboards and reports automatically — no spreadsheets.",
    href: "/services#reporting",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    desc: "Connect any software with custom API integrations — one unified system.",
    href: "/services#integrations",
  },
];

function ServiceCard({ service }) {
  return (
    <Link href={service.href} className="group block">
      <div
        className={cn(
          "h-full p-8 rounded-2xl transition-all duration-300 flex flex-col gap-5",
          service.highlighted
            ? "text-white shadow-2xl shadow-brand-500/20"
            : "border border-border hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5"
        )}
        style={
          service.highlighted
            ? { background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 60%, #4338ca 100%)" }
            : { background: "var(--surface-card)" }
        }
      >
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
            service.highlighted ? "bg-white/20" : "bg-brand-500/10 border border-brand-500/20"
          )}
        >
          <service.icon
            className={cn("size-5", service.highlighted ? "text-white" : "text-brand-400")}
          />
        </div>
        <div className="flex-1">
          <h3
            className={cn(
              "font-semibold text-lg mb-2 group-hover:text-brand-200 transition-colors",
              service.highlighted ? "text-white group-hover:text-white" : ""
            )}
            style={service.highlighted ? {} : { color: "var(--text-primary)" }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: service.highlighted ? "rgba(255,255,255,0.75)" : "var(--text-muted)" }}
          >
            {service.desc}
          </p>
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-sm font-medium",
            service.highlighted ? "text-white/80" : "text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"
          )}
        >
          Learn more <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: heading + CTA */}
          <FadeUp className="lg:col-span-4 lg:sticky lg:top-28">
            <span
              className="inline-block px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
            >
              What We Do
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              End-to-End{" "}
              <span className="gradient-text">Automation</span>{" "}
              Services
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              From simple task automations to complex AI-powered workflows — we cover every layer
              of your operations so you can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                size="lg"
                className="h-auto px-7 py-3.5 font-semibold shadow-lg shadow-brand-500/20"
                render={<Link href="/contact" />}
              >
                Start Automating
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-auto px-7 py-3.5"
                render={<Link href="/services" />}
              >
                View All Services
              </Button>
            </div>
          </FadeUp>

          {/* Right: service cards grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.07}>
                <ServiceCard service={service} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

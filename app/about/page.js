import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import BlurText from "@/components/reactbits/BlurText";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | AutomateUs Automation Agency",
  description:
    "Learn about AutomateUs — our mission, values, and why hundreds of businesses trust us to build their automation systems.",
};

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M22 6L6 22M6 6h16v16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Efficiency",
    desc: "We believe time is the most valuable resource. Every automation we build frees up time for work that actually matters.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 5.5 6 .9-4.3 4.2 1 6-5.2-2.8L8.8 19.6l1-6L5.5 9.4l6-.9z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="25" r="1.5" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    title: "Innovation",
    desc: "We stay at the cutting edge of automation and AI tools so our clients always have access to the best solutions available.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2 5h5.5l-4.5 3.3 1.7 5.2L14 13.8l-4.7 2.7 1.7-5.2L6.5 8H12z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21l2.5 2.5L18 17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reliability",
    desc: "Automations must work. We build with robust error handling, monitoring, and fallbacks — no surprises in production.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.9"/>
        <path d="M18 18l7 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    ),
    title: "Transparency",
    desc: "Clear pricing, honest timelines, and full documentation. You always know exactly what we're building and why.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 5 5.5.8-4 3.9.95 5.5L14 15.7l-4.95 2.5.95-5.5L6 8.8l5.5-.8z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 24h14" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
        <path d="M14 18v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customer Success",
    desc: "We measure our success by your results — saved hours, reduced costs, and the growth you unlock through automation.",
  },
];

const reasons = [
  { title: "Deep Automation Expertise", desc: "Our team has built 100+ automations across every major platform. We've seen every edge case and know how to handle them." },
  { title: "Custom-Built, Not Template-Based", desc: "We design every automation from scratch for your specific processes — not cookie-cutter solutions that don't quite fit." },
  { title: "Ongoing Support & Monitoring", desc: "We don't disappear after launch. We monitor, maintain, and continuously improve your automations." },
  { title: "Fast Implementation", desc: "Most automations are live within 1–2 weeks. We move quickly without sacrificing quality." },
  { title: "ROI-Focused Approach", desc: "Every automation we build is evaluated against real business value. We prioritize what moves the needle most." },
  { title: "Training & Documentation", desc: "We leave you fully equipped — with documentation, training sessions, and handoff materials your team can reference anytime." },
];

/* Page animation: count-up stats section */
const stats = [
  { end: 100, suffix: "+", label: "Automations Built" },
  { end: 10000, suffix: "+", label: "Hours Saved" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 3, suffix: "x", label: "Average ROI" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="outline" className="mb-6 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
              About AutomateUs
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              We Help Businesses{" "}
              <span className="gradient-text">Work Smarter</span>
            </h1>
            <BlurText
              text="AutomateUs is a specialist automation agency focused on helping growing businesses eliminate manual work, reduce costs, and scale faster through custom automation solutions."
              className="text-xl text-gray-400 max-w-2xl mx-auto justify-center"
              delay={40}
              stepDuration={0.4}
            />
          </FadeUp>
        </div>
      </section>

      {/* Animated Stats — page's signature animation */}
      <section className="py-16 border-y" style={{ borderColor: "var(--border)", background: "var(--surface-800)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl lg:text-5xl font-bold mb-2 gradient-text">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FadeUp>
          <div className="relative rounded-xl overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=600&fit=crop&q=85"
              alt="AutomateUs team collaborating"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10 lg:px-16">
              <div>
                <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
                <h3 className="text-white text-3xl lg:text-4xl font-bold max-w-sm leading-tight">
                  People who love what automation can do
                </h3>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeUp>
            <Card className="rounded-lg p-8 ring-0 border border-border h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To help businesses of every size work smarter through automation. We believe no team should spend their best hours on repetitive, manual tasks when the right technology can handle it reliably and at scale.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                We partner with operations leaders, founders, and teams who are ready to stop wasting time and start building a more efficient, scalable business.
              </p>
            </Card>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Card className="rounded-lg p-8 ring-0 border border-border h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M19 3l2 2-8 8M21 3h-4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To become the most trusted automation partner for growing companies — the team businesses call when they want to do more with less, without sacrificing quality or control.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                We envision a world where automation is accessible to every business, not just enterprises with large IT budgets and development teams.
              </p>
            </Card>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-white">What We Stand For</h2>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <Card className="rounded-lg p-6 ring-0 border border-border text-center h-full">
                  <div className="w-14 h-14 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mx-auto mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs tracking-widest text-accent-400 uppercase">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold text-white">Built Different</h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re not a generic digital agency that does automation as a side offering. Automation is all we do.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <Card className="rounded-lg p-7 ring-0 border border-border h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-800/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-400 text-lg mb-8">Book a free discovery call and let&apos;s figure out how automation can transform your operations.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-auto px-8 py-4" render={<Link href="/contact" />}>
                Book a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="h-auto px-8 py-4" render={<Link href="/case-studies" />}>
                View Case Studies
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

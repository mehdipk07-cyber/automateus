"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with small businesses, startups, marketing agencies, real estate companies, e-commerce businesses, professional service firms, and operations teams. If you have manual, repetitive processes, we can automate them.",
  },
  {
    q: "How long does it take to implement an automation?",
    a: "Most automations are live within 1–2 weeks. Complex, multi-system integrations can take 3–4 weeks. We move fast without sacrificing quality or reliability.",
  },
  {
    q: "Do I need technical knowledge to work with you?",
    a: "Not at all. We handle everything technical. You just need to be able to describe your current process and your desired outcome — we do the rest.",
  },
  {
    q: "Which tools and platforms do you work with?",
    a: "We work with Monday.com, Make.com, Zapier, HubSpot, Salesforce, Slack, Notion, Airtable, Google Workspace, and hundreds more. We also build custom API integrations for any software with an accessible API.",
  },
  {
    q: "What does the discovery call involve?",
    a: "It's a free 30–45 minute video call where we learn about your business, current workflows, and biggest pain points. We'll identify your top automation opportunities and outline exactly how we'd approach your specific situation.",
  },
  {
    q: "How do you price your services?",
    a: "We offer project-based pricing and monthly retainer packages. Pricing depends on the complexity and scope of your automation needs. We'll give you a clear, itemized proposal after the discovery call — no surprises.",
  },
  {
    q: "What happens after the automation is deployed?",
    a: "We provide training, full documentation, and ongoing support. We monitor your automations, fix any issues, and continuously optimize performance. You're never left on your own.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We follow security best practices, use encrypted connections, and never store your sensitive business data on our own servers. All access is scoped to only what's needed.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "var(--surface-800)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: heading */}
          <FadeUp className="lg:col-span-4 lg:sticky lg:top-28">
            <span
              className="inline-block px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                color: "var(--brand-400)",
                borderColor: "rgba(99,102,241,0.2)",
                background: "rgba(99,102,241,0.08)",
              }}
            >
              FAQ
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Common{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Everything you need to know before getting started. Still have questions? We&apos;re here to help.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="h-auto px-6 py-3.5"
              render={<Link href="/contact" />}
            >
              <MessageCircle className="size-4" />
              Ask us anything
              <ArrowRight className="size-4" />
            </Button>
          </FadeUp>

          {/* Right: accordion */}
          <FadeUp className="lg:col-span-8">
            <div
              className="rounded-2xl overflow-hidden divide-y"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border)",
                divideColor: "var(--border)",
              }}
            >
              <Accordion multiple>
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.q}
                    value={i}
                    style={{ borderColor: "var(--border)" }}
                  >
                    <AccordionTrigger
                      className="px-7 py-5 text-left font-medium hover:no-underline"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent
                      className="px-7 pb-6 leading-relaxed text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FadeUp } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
    <section id="faq" className="py-24 lg:py-32 bg-surface-800/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
            FAQ
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know before getting started.</p>
        </FadeUp>

        <FadeUp>
          <Card className="rounded-lg px-8 ring-0 border border-border">
            <Accordion multiple>
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={i}>
                  <AccordionTrigger className="text-white text-base py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </FadeUp>
      </div>
    </section>
  );
}

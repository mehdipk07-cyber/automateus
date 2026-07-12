import { Mail, Phone, Clock, Calendar } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { FadeUp } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Contact | Book a Free Automation Consultation",
  description:
    "Book a free 30-minute discovery call with AutomateUs. Tell us about your processes and we'll show you exactly how automation can save your team time and money.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="outline" className="mb-6 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Automation System</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">
              Tell us about your business and we&apos;ll show you exactly how automation can eliminate your manual work.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Page animation: pulsing availability indicator */}
            <FadeUp>
              <div
                className="rounded-lg p-5 flex items-center gap-4"
                style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
              >
                <div className="relative flex-shrink-0">
                  <span className="ping-dot relative inline-flex w-3 h-3 rounded-full bg-emerald-400" style={{ color: "#34d399" }} />
                </div>
                <div>
                  <div className="text-emerald-400 font-semibold text-sm">Currently Accepting Clients</div>
                  <div className="text-gray-500 text-xs mt-0.5">Responding within 1 business day</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Card className="rounded-lg p-7 ring-0 border border-border">
                <h3 className="text-white font-bold text-lg mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    { n: "1", t: "We review your submission", d: "Within 1 business day, our team reviews your details and prepares for your call." },
                    { n: "2", t: "Discovery call scheduled", d: "We confirm a 30–45 min video call at a time that works for you." },
                    { n: "3", t: "Automation roadmap", d: "After the call, we send a custom automation roadmap with prioritized opportunities and estimated ROI." },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 text-sm font-bold flex-shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{step.t}</div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.d}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Card className="rounded-lg p-7 ring-0 border border-border">
                <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="size-3.5 text-brand-500" />
                    </div>
                    alihassankhaliq20@gmail.com
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="size-3.5 text-brand-500" />
                    </div>
                    +92 (304) 981-4394
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="size-3.5 text-brand-500" />
                    </div>
                    Response within 24 hours
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <a
                    href="https://calendly.com/automate-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl border border-brand-500/30 bg-brand-500/5 hover:bg-brand-500/10 text-brand-400 font-semibold text-sm transition-colors"
                  >
                    <Calendar className="size-3.5" />
                    Schedule via Calendly
                  </a>
                </div>
              </Card>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Card className="rounded-lg p-7 ring-0 border border-brand-500/20">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
                      <path d="M7 1l1.545 3.13 3.455.503-2.5 2.437.59 3.43L7 8.885l-3.09 1.625.59-3.43L2 4.633l3.455-.503z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;The discovery call alone was worth it. They identified automations we hadn&apos;t even thought of and gave us a clear picture of exactly how to save 15+ hours per week.&rdquo;
                </p>
                <div className="mt-4 text-sm">
                  <div className="text-white font-semibold">Emma Walsh</div>
                  <div className="text-gray-500 text-xs">Operations Manager, BrightPath Agency</div>
                </div>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

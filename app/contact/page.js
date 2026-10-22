import {
  Mail, Phone, Clock, Calendar, Copy, MapPin,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata = {
  title: "Contact | Book a Free Automation Consultation",
  description:
    "Book a free 30-minute discovery call with AutomateUs. Tell us about your processes and we'll show you exactly how automation can save your team time and money.",
  keywords: [
    "book automation consultation",
    "free automation discovery call",
    "contact AutomateUs",
    "automation agency contact",
    "hire automation expert",
  ],
  alternates: { canonical: "https://automate-us.vercel.app/contact" },
  openGraph: {
    title: "Book a Free Automation Consultation — AutomateUs",
    description: "Book a free 30-minute discovery call with AutomateUs. Tell us about your processes and we'll show you exactly how automation can save your team time and money.",
    url: "https://automate-us.vercel.app/contact",
    images: [{ url: "/logo.png", width: 768, height: 768, alt: "Contact AutomateUs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Automation Consultation — AutomateUs",
    description: "Book a free 30-minute discovery call with AutomateUs. Tell us about your processes and we'll show you exactly how automation can save your team time and money.",
    images: ["/logo.png"],
  },
};

const steps = [
  {
    n: "01",
    title: "We review your submission",
    body: "Our team reads every submission carefully. Within 1 business day we prepare specific questions and automation ideas for your call.",
  },
  {
    n: "02",
    title: "Discovery call scheduled",
    body: "We confirm a 30–45 min video call at a time that works for you — no agenda-free calls, we come prepared.",
  },
  {
    n: "03",
    title: "Custom automation roadmap",
    body: "After the call, we deliver a prioritized roadmap with estimated time savings, tool recommendations, and implementation cost.",
  },
];

export default function ContactPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--surface-800)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(190,240,74,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(94,234,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28">

        {/* ── Calendly scheduler ── */}
        <FadeUp>
          <section id="schedule" className="mb-24 scroll-mt-28">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Book Your Free <span className="gradient-text accent-serif">Discovery Call</span>
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Pick a time that works for you and we&apos;ll see you on the call.
              </p>
            </div>
            <CalendlyEmbed />
          </section>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Info panel ── */}
          <FadeUp className="lg:sticky lg:top-28 space-y-10">

            {/* Heading block */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest mb-6"
                style={{
                  background: "rgba(190,240,74,0.08)",
                  border: "1px solid rgba(190,240,74,0.2)",
                  color: "var(--brand-400)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--brand-400)" }}
                />
                Free Consultation
              </div>

              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Let&apos;s Build Your{" "}
                <span className="gradient-text accent-serif">Automation System</span>
              </h2>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Tell us about your business and we&apos;ll map out exactly which
                manual processes to automate first — and how much time you&apos;ll save.
              </p>
            </div>

            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(94,234,212,0.06)",
                border: "1px solid rgba(94,234,212,0.2)",
              }}
            >
              <div className="relative flex-shrink-0">
                <span
                  className="ping-dot relative inline-flex w-2.5 h-2.5 rounded-full"
                  style={{ background: "#5EEAD4", color: "#5EEAD4" }}
                />
              </div>
              <div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--accent-400)" }}
                >
                  Currently Accepting Clients
                </span>
                <span
                  className="text-xs ml-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  · Responds within 1 business day
                </span>
              </div>
            </div>

            {/* Contact info cards */}
            <ContactSidebar />

            {/* What happens next */}
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                What happens next
              </p>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={step.n} className="flex gap-4">
                    {/* Step number + connecting line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          background: "rgba(190,240,74,0.12)",
                          border: "1px solid rgba(190,240,74,0.25)",
                          color: "var(--brand-400)",
                        }}
                      >
                        {step.n}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-px flex-1 my-1"
                          style={{ background: "rgba(190,240,74,0.15)", minHeight: "28px" }}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <p
                        className="font-semibold text-sm mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#BEF04A">
                    <path d="M7 1l1.545 3.13 3.455.503-2.5 2.437.59 3.43L7 8.885l-3.09 1.625.59-3.43L2 4.633l3.455-.503z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed italic mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;The discovery call alone was worth it. They identified automations
                we hadn&apos;t even thought of and gave us a clear picture of how to
                save 15+ hours per week.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-[#0D0D0D] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#BEF04A,#9FD12E)" }}
                >
                  E
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Emma Walsh
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Operations Manager, BrightPath Agency
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ── RIGHT: Form ── */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}

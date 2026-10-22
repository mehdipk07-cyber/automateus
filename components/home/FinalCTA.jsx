import Link from "next/link";
import { ArrowRight, Check, CalendarCheck } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

const perks = [
  "30-min strategy call",
  "No commitment required",
  "Custom automation roadmap",
  "ROI estimate guaranteed",
];

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(190,240,74,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp
          className="relative isolate rounded-[28px] border px-6 py-14 sm:px-12 sm:py-20 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[inherit]"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(190,240,74,0.14), transparent 70%), color-mix(in srgb, var(--surface-card) 55%, transparent)",
            }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent" />
          <BorderBeam size={220} duration={12} />
          <BorderBeam size={220} duration={12} delay={6} />
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="pill-border inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-brand-200">
              <CalendarCheck className="size-4" />
              Free consultation — no commitment required
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-5xl sm:text-6xl lg:text-8xl font-semibold mb-6 leading-[1.02]"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to Save Hours{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text accent-serif">Every Week?</span>
          </h2>

          {/* Sub */}
          <p
            className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Book a free 30-minute discovery call. We&apos;ll map out exactly which automations will
            save your team the most time — with no obligation.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="btn-shine h-auto px-12 py-5 text-lg font-bold mb-10 shadow-xl shadow-brand-500/30"
            render={<Link href="/contact" />}
          >
            Book Your Free Consultation
            <ArrowRight className="size-5" />
          </Button>

          {/* Perks row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {perks.map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <Check className="size-3.5 text-accent-500 flex-shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

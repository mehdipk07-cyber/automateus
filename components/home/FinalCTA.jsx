import Link from "next/link";
import { ArrowRight, Check, CalendarCheck } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

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
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(99,102,241,0.18) 0%, transparent 70%)",
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
              style={{
                color: "var(--accent-400)",
                borderColor: "rgba(52,211,153,0.3)",
                background: "rgba(52,211,153,0.08)",
              }}
            >
              <CalendarCheck className="size-4" />
              Free consultation — no commitment required
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to Save Hours{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">Every Week?</span>
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
            className="h-auto px-12 py-5 text-lg font-bold mb-10 shadow-xl shadow-brand-500/30"
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

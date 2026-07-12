import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-surface-800/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <Badge variant="outline" className="mb-8 gap-2 border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm text-accent-400">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            Free consultation — no commitment required
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Save Hours{" "}
            <span className="gradient-text">Every Week?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. We&apos;ll map out exactly which automations will save your team the most time — with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-auto px-10 py-5 text-lg font-bold" render={<Link href="/contact" />}>
              Book Your Free Consultation
              <ArrowRight className="size-5" />
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {["30-min call", "No commitment", "Custom roadmap included", "ROI estimate guaranteed"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

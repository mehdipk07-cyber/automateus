"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-16 bg-surface-800/30 border-y border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h3 className="text-2xl font-bold text-white mb-2">
            Get Automation Tips Every Week
          </h3>
          <p className="text-gray-400 mb-8 text-sm">
            Join 2,000+ ops leaders getting practical automation strategies, tool reviews, and workflow templates.
          </p>
          {submitted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 font-medium">
              <Check className="size-4" />
              You&apos;re in! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-auto flex-1 rounded-xl px-4 py-3 text-sm"
              />
              <Button type="submit" className="h-auto flex-shrink-0 rounded-xl px-6 py-3 text-sm">
                Subscribe Free
              </Button>
            </form>
          )}
          <p className="text-xs text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
        </FadeUp>
      </div>
    </section>
  );
}

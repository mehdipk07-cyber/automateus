"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
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
    <section
      className="py-16 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 mx-auto"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            <Mail className="size-5 text-brand-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Get Automation Tips Every Week
          </h3>
          <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
            Join 2,000+ ops leaders getting practical automation strategies, tool reviews, and workflow templates.
          </p>

          {submitted ? (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
              style={{
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.3)",
                color: "var(--accent-400)",
              }}
            >
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
              <Button type="submit" className="h-auto flex-shrink-0 rounded-xl px-6 py-3 text-sm font-semibold">
                Subscribe Free
              </Button>
            </form>
          )}
          <p className="text-xs mt-4" style={{ color: "var(--text-faint)" }}>
            No spam. Unsubscribe anytime.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

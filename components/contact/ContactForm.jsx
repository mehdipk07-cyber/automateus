"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const businessTypes = [
  "Marketing Agency",
  "Real Estate",
  "E-commerce",
  "SaaS / Tech",
  "Professional Services",
  "Healthcare",
  "Finance",
  "Startup",
  "Small Business",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setField = (k) => (value) => setForm((f) => ({ ...f, [k]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="rounded-lg p-12 text-center ring-0 border border-border">
          <div className="w-20 h-20 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mx-auto mb-6">
            <Check className="size-9 text-emerald-500" strokeWidth={3} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
          <p className="text-gray-400 mb-2">
            Thanks, <span className="text-white">{form.name}</span>. We&apos;ll review your details and reach out within 1 business day.
          </p>
          <p className="text-gray-500 text-sm">In the meantime, feel free to browse our case studies.</p>
        </Card>
      </motion.div>
    );
  }

  return (
    <FadeUp>
      <form onSubmit={handleSubmit}>
      <Card className="rounded-lg p-8 ring-0 border border-border">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Book Your Free Consultation</h2>
          <p className="text-gray-500 text-sm">Fill out the form below and we&apos;ll be in touch within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <Label className="mb-2 text-sm text-gray-400">Full Name *</Label>
            <Input
              type="text"
              required
              placeholder="Jane Smith"
              value={form.name}
              onChange={set("name")}
              className="h-auto rounded-xl px-4 py-3.5 text-sm"
            />
          </div>
          <div>
            <Label className="mb-2 text-sm text-gray-400">Company Name *</Label>
            <Input
              type="text"
              required
              placeholder="Acme Inc."
              value={form.company}
              onChange={set("company")}
              className="h-auto rounded-xl px-4 py-3.5 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <Label className="mb-2 text-sm text-gray-400">Work Email *</Label>
            <Input
              type="email"
              required
              placeholder="jane@acme.com"
              value={form.email}
              onChange={set("email")}
              className="h-auto rounded-xl px-4 py-3.5 text-sm"
            />
          </div>
          <div>
            <Label className="mb-2 text-sm text-gray-400">Phone Number</Label>
            <Input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={set("phone")}
              className="h-auto rounded-xl px-4 py-3.5 text-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <Label className="mb-2 text-sm text-gray-400">Business Type *</Label>
          <Select required value={form.businessType} onValueChange={setField("businessType")}>
            <SelectTrigger className="h-auto w-full rounded-xl px-4 py-3.5 text-sm">
              <SelectValue placeholder="Select your business type..." />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4">
          <Label className="mb-2 text-sm text-gray-400">Describe Your Biggest Automation Challenge *</Label>
          <Textarea
            required
            rows={5}
            placeholder="Tell us what manual tasks are taking up most of your team's time, what processes feel repetitive, or what problems you're hoping automation can solve..."
            value={form.challenge}
            onChange={set("challenge")}
            className="rounded-xl px-4 py-3.5 text-sm resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full h-auto mt-6 px-6 py-4 text-base font-bold"
        >
          {loading ? (
            <>
              <Loader2 className="size-4.5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Book My Free Consultation
              <ArrowRight className="size-4.5" />
            </>
          )}
        </Button>

        <p className="text-xs text-gray-600 text-center mt-4">
          No spam. No commitment. Your information is kept private.
        </p>
      </Card>
      </form>
    </FadeUp>
  );
}

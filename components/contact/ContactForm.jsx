"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Workflow Automation",
  "AI Integration",
  "CRM Setup",
  "Make.com / Zapier",
  "Monday.com",
  "Data Syncing",
  "Reporting & Dashboards",
  "Other",
];

const budgets = ["< $1,000", "$1,000–$5,000", "$5,000–$15,000", "$15,000+"];

function FieldWrapper({ label, required, children }) {
  return (
    <div className="space-y-2">
      <Label
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--text-muted)" }}
      >
        {label} {required && <span style={{ color: "var(--brand-400)" }}>*</span>}
      </Label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm bg-transparent border transition-colors duration-200 outline-none focus:ring-0";

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.09)",
  color: "var(--text-primary)",
};

const inputFocusStyle = {
  borderColor: "rgba(190,240,74,0.5)",
  boxShadow: "0 0 0 3px rgba(190,240,74,0.08)",
};

function StyledInput({ onFocus, onBlur, style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      className={inputClass}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}), ...style }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
    />
  );
}

function StyledTextarea({ ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      className={`${inputClass} resize-none`}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}) }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
    />
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    selectedServices: [],
    budget: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      selectedServices: f.selectedServices.includes(s)
        ? f.selectedServices.filter((x) => x !== s)
        : [...f.selectedServices, s],
    }));

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-14 text-center"
        style={{
          background: "var(--surface-card)",
          border: "1px solid rgba(190,240,74,0.25)",
          boxShadow: "0 0 60px rgba(190,240,74,0.08)",
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: "rgba(94,234,212,0.12)",
            border: "1px solid rgba(94,234,212,0.3)",
          }}
        >
          <Check className="size-9" style={{ color: "var(--accent-400)" }} strokeWidth={2.5} />
        </div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Message Received!
        </h3>
        <p className="text-base mb-1" style={{ color: "var(--text-secondary)" }}>
          Thanks,{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            {form.name}
          </span>
          . We&apos;ll review your details and reach out within 1 business day.
        </p>
        <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
          Check your inbox — a confirmation email is on its way.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", company: "", email: "", phone: "", selectedServices: [], budget: "", challenge: "" });
          }}
          className="mt-8 text-sm underline underline-offset-4 transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Gradient border wrapper */}
      <div
        className="p-px rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(190,240,74,0.4) 0%, rgba(190,240,74,0.1) 40%, rgba(94,234,212,0.2) 100%)",
        }}
      >
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{ background: "var(--surface-card)" }}
        >
          {/* Form header */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Book Your Free Consultation
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FieldWrapper label="Full Name" required>
                <StyledInput
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={set("name")}
                />
              </FieldWrapper>
              <FieldWrapper label="Company">
                <StyledInput
                  type="text"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={set("company")}
                />
              </FieldWrapper>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FieldWrapper label="Work Email" required>
                <StyledInput
                  type="email"
                  required
                  placeholder="jane@acme.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </FieldWrapper>
              <FieldWrapper label="Phone">
                <StyledInput
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </FieldWrapper>
            </div>

            {/* Service interest pills */}
            <FieldWrapper label="What do you need help with?">
              <div className="flex flex-wrap gap-2 pt-1">
                {services.map((s) => {
                  const active = form.selectedServices.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                      style={{
                        background: active
                          ? "rgba(190,240,74,0.18)"
                          : "rgba(255,255,255,0.04)",
                        border: active
                          ? "1px solid rgba(190,240,74,0.45)"
                          : "1px solid rgba(255,255,255,0.08)",
                        color: active ? "var(--brand-400)" : "var(--text-muted)",
                        boxShadow: active
                          ? "0 0 12px rgba(190,240,74,0.15)"
                          : "none",
                      }}
                    >
                      {active && (
                        <Check
                          className="inline size-3 mr-1"
                          style={{ color: "var(--brand-400)" }}
                        />
                      )}
                      {s}
                    </button>
                  );
                })}
              </div>
            </FieldWrapper>

            {/* Budget pills */}
            <FieldWrapper label="Estimated Budget">
              <div className="flex flex-wrap gap-2 pt-1">
                {budgets.map((b) => {
                  const active = form.budget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          budget: f.budget === b ? "" : b,
                        }))
                      }
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                      style={{
                        background: active
                          ? "rgba(94,234,212,0.12)"
                          : "rgba(255,255,255,0.04)",
                        border: active
                          ? "1px solid rgba(94,234,212,0.4)"
                          : "1px solid rgba(255,255,255,0.08)",
                        color: active ? "var(--accent-400)" : "var(--text-muted)",
                      }}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </FieldWrapper>

            {/* Challenge */}
            <FieldWrapper label="Describe Your Automation Challenge" required>
              <StyledTextarea
                required
                rows={4}
                placeholder="What manual tasks eat up your team's time? What processes feel repetitive or error-prone? The more context, the better we can prepare for your call."
                value={form.challenge}
                onChange={set("challenge")}
              />
            </FieldWrapper>

            {/* Error message */}
            {error && (
              <div
                className="rounded-xl px-4 py-3 text-sm"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  color: "#f87171",
                }}
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-base text-[#0D0D0D] transition-all duration-200 mt-2 disabled:opacity-70"
              style={{
                background: "linear-gradient(135deg, #BEF04A 0%, #9FD12E 100%)",
                boxShadow: "0 4px 24px rgba(190,240,74,0.35)",
              }}
              onMouseEnter={(e) =>
                !loading &&
                (e.currentTarget.style.boxShadow =
                  "0 6px 32px rgba(190,240,74,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(190,240,74,0.35)")
              }
            >
              {loading ? (
                <>
                  <Loader2 className="size-4.5 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Book My Free Consultation
                  <ArrowRight className="size-4.5" />
                </>
              )}
            </button>

            <p
              className="text-xs text-center mt-1"
              style={{ color: "var(--text-faint)" }}
            >
              No spam · No commitment · By submitting, you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--text-secondary)]">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

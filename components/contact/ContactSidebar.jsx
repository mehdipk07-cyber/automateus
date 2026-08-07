"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Calendar, Copy, Check } from "lucide-react";

function CopyItem({ icon: Icon, label, value, href }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div
      className="flex items-center justify-between gap-3 p-4 rounded-xl group transition-colors duration-200"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
        >
          <Icon className="size-4" style={{ color: "var(--brand-400)" }} />
        </div>
        <div className="min-w-0">
          <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>
            {label}
          </p>
          {href ? (
            <a
              href={href}
              className="text-sm font-medium truncate block hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              {value}
            </a>
          ) : (
            <p
              className="text-sm font-medium truncate"
              style={{ color: "var(--text-primary)" }}
            >
              {value}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
        style={{
          background: copied ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.05)",
          border: copied
            ? "1px solid rgba(52,211,153,0.3)"
            : "1px solid rgba(255,255,255,0.08)",
          color: copied ? "var(--accent-400)" : "var(--text-muted)",
        }}
        aria-label={`Copy ${label}`}
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
}

export default function ContactSidebar() {
  return (
    <div className="space-y-3">
      <CopyItem
        icon={Mail}
        label="Email"
        value="alihassankhaliq20@gmail.com"
        href="mailto:alihassankhaliq20@gmail.com"
      />
      <CopyItem
        icon={Phone}
        label="Phone"
        value="+92 (304) 981-4394"
        href="tel:+923049814394"
      />
      <div
        className="flex items-center gap-3 p-4 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
        >
          <Clock className="size-4" style={{ color: "var(--brand-400)" }} />
        </div>
        <div>
          <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>
            Response Time
          </p>
          <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Within 1 business day
          </p>
        </div>
      </div>

      <a
        href="https://calendly.com/automate-us"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
        style={{
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.25)",
          color: "var(--brand-400)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(99,102,241,0.15)";
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(99,102,241,0.08)";
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
        }}
      >
        <Calendar className="size-4" />
        Schedule via Calendly
      </a>
    </div>
  );
}

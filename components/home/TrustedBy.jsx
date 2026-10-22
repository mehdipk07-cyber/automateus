"use client";

import { FadeUp } from "@/components/AnimatedSection";
import {
  SiShopify, SiHubspot, SiZapier, SiMake, SiNotion,
  SiAirtable, SiStripe, SiAsana, SiTrello, SiSlack,
  SiGmail, SiGooglesheets,
} from "react-icons/si";

const allPlatforms = [
  { name: "Shopify",         color: "#95BF47", icon: <SiShopify size={20} /> },
  { name: "HubSpot",         color: "#FF7A59", icon: <SiHubspot size={20} /> },
  { name: "Zapier",          color: "#FF4A00", icon: <SiZapier size={20} /> },
  { name: "Make.com",        color: "#7C3AED", icon: <SiMake size={20} /> },
  { name: "Notion",          color: "#ffffff", icon: <SiNotion size={18} />, adaptive: true },
  { name: "Airtable",        color: "#2D7FF9", icon: <SiAirtable size={20} /> },
  { name: "Stripe",          color: "#635BFF", icon: <SiStripe size={20} /> },
  { name: "Asana",           color: "#F06A6A", icon: <SiAsana size={20} /> },
  { name: "Trello",          color: "#0052CC", icon: <SiTrello size={20} /> },
  { name: "Gmail",           color: "#EA4335", icon: <SiGmail size={20} /> },
  { name: "Google Sheets",   color: "#34A853", icon: <SiGooglesheets size={20} /> },
  {
    name: "Salesforce",
    color: "#00A1E0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M7.5 15.5a5 5 0 01.2-10 5 5 0 019.6-1A4 4 0 0120 11a3.5 3.5 0 01-1.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 18l2.5 2.5L17 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Monday.com",
    color: "#2D7FF9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12.2" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="6"    y="6.5"  width="4.2" height="15" rx="2.1" fill="currentColor"/>
        <rect x="11.9" y="9.5"  width="4.2" height="9"  rx="2.1" fill="currentColor"/>
        <rect x="17.8" y="7.5"  width="4.2" height="13" rx="2.1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    color: null,
    multicolor: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <rect x="0.5"  y="0.5"  width="10.5" height="10.5" rx="2.5" fill="#E01E5A"/>
        <rect x="13"   y="0.5"  width="10.5" height="10.5" rx="2.5" fill="#36C5F0"/>
        <rect x="0.5"  y="13"   width="10.5" height="10.5" rx="2.5" fill="#2EB67D"/>
        <rect x="13"   y="13"   width="10.5" height="10.5" rx="2.5" fill="#ECB22E"/>
      </svg>
    ),
  },
];

/* Split into two rows */
const row1 = allPlatforms.slice(0, 8);
const row2 = allPlatforms.slice(6);

function PlatformChip({ platform }) {
  const iconStyle = platform.multicolor || platform.adaptive
    ? { color: "var(--text-primary)" }
    : { color: platform.color };

  const bgStyle = platform.multicolor
    ? { background: "rgba(255,255,255,0.06)" }
    : { background: platform.color ? `${platform.color}18` : "rgba(255,255,255,0.06)" };

  return (
    <div
      className="group flex items-center gap-3 px-5 py-3 rounded-xl mx-2.5 flex-shrink-0 transition-all duration-300 hover:scale-[1.04] cursor-pointer"
      style={{
        background: "var(--surface-card)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = platform.color
          ? `${platform.color}50`
          : "rgba(255,255,255,0.18)";
        e.currentTarget.style.boxShadow = platform.color
          ? `0 0 20px ${platform.color}15`
          : "none";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon bubble */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={bgStyle}
      >
        <span style={iconStyle}>{platform.icon}</span>
      </div>

      <span
        className="font-semibold text-sm whitespace-nowrap"
        style={{ color: "var(--text-secondary)" }}
      >
        {platform.name}
      </span>
    </div>
  );
}


export default function TrustedBy() {
  const row1doubled = [...row1, ...row1];
  const row2doubled = [...row2, ...row2];

  return (
    <section
      className="py-20 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--surface-800)",
      }}
    >
      {/* Heading */}
      <FadeUp className="text-center mb-12 px-4">
        <p
          className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          Works seamlessly with your existing tools
        </p>
        <h3
          className="text-2xl sm:text-4xl font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Connect <span className="gradient-text accent-serif">anything</span> in your stack
        </h3>
      </FadeUp>

      {/* Row 1 — scrolls left */}
      <div className="marquee-mask mb-3">
        <div className="marquee-track">
          {row1doubled.map((p, i) => (
            <PlatformChip key={i} platform={p} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-mask">
        <div className="marquee-track-reverse">
          {row2doubled.map((p, i) => (
            <PlatformChip key={i} platform={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

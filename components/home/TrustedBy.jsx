import { FadeUp } from "@/components/AnimatedSection";

const platforms = [
  {
    name: "Shopify",
    color: "#96bf48",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 8h11l-1.6 11.5H8.1L6.5 8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 8c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="9.5" cy="13" r="0.9" fill="currentColor"/>
        <circle cx="14.5" cy="13" r="0.9" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    color: "#FF7A59",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    color: "#00A1E0",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.5 15.5a5 5 0 01.2-10 5 5 0 019.6-1A4 4 0 0120 11a3.5 3.5 0 01-1.5 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M10 18l2.5 2.5L17 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Monday.com",
    color: "#2D7FF9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Outer ring */}
        <circle cx="14" cy="14" r="12.2" stroke="currentColor" strokeWidth="2.4"/>
        {/* Left bar — tallest */}
        <rect x="6"   y="6.5"  width="4.2" height="15"  rx="2.1" fill="currentColor"/>
        {/* Middle bar — shortest */}
        <rect x="11.9" y="9.5"  width="4.2" height="9"   rx="2.1" fill="currentColor"/>
        {/* Right bar — medium */}
        <rect x="17.8" y="7.5"  width="4.2" height="13"  rx="2.1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Slack",
    color: null,
    multicolor: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="0.5" y="0.5" width="10.5" height="10.5" rx="2.5" fill="#E01E5A"/>
        <rect x="13"  y="0.5" width="10.5" height="10.5" rx="2.5" fill="#36C5F0"/>
        <rect x="0.5" y="13"  width="10.5" height="10.5" rx="2.5" fill="#2EB67D"/>
        <rect x="13"  y="13"  width="10.5" height="10.5" rx="2.5" fill="#ECB22E"/>
      </svg>
    ),
  },
  {
    name: "Zapier",
    color: "#FF4A00",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 3L6 13h9l-9 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Make.com",
    color: "#6D00CC",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="5.5"  cy="12"   r="3.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="18.5" cy="5.5"  r="3.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="18.5" cy="18.5" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M9 10.5L15 7M9 13.5L15 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    color: null,
    adaptive: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 21V3l12 18V3" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function PlatformChip({ platform }) {
  const iconColor = platform.multicolor
    ? {}
    : { color: platform.adaptive ? "var(--text-primary)" : platform.color };

  const nameColor = platform.color && !platform.multicolor
    ? platform.color
    : "var(--text-secondary)";

  return (
    <div
      className="flex items-center gap-3 px-6 py-3.5 rounded-lg mx-4 flex-shrink-0 transition-all duration-300 hover:scale-105"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(8px)",
      }}
    >
      <span style={iconColor} className="flex-shrink-0">{platform.icon}</span>
      <span
        className="font-semibold text-sm whitespace-nowrap tracking-tight"
        style={{ color: nameColor }}
      >
        {platform.name}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  const doubled = [...platforms, ...platforms];

  return (
    <section
      className="py-16"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface-800)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <FadeUp>
          <p
            className="text-center text-sm uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Trusted by teams at
          </p>
        </FadeUp>
      </div>

      <div className="marquee-mask">
        <div className="marquee-track">
          {doubled.map((p, i) => (
            <PlatformChip key={i} platform={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

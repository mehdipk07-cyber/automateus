import Link from "next/link";
import { SectionBadge } from "@/components/ui/section-badge";

/* Business details shared by the Privacy Policy and Terms of Service */
export const LEGAL = {
  business: "AutomateUs",
  site: "automateus.net",
  email: "alihassankhaliq20@gmail.com",
  jurisdiction: "Pakistan",
  effective: "October 23, 2026",
};

/** Inline link styled for legal prose. */
export function A({ href, children }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const className = "text-brand-300 underline decoration-brand-500/40 underline-offset-4 hover:decoration-brand-300";
  return external ? (
    <a href={href} className={className} {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/**
 * Layout for legal documents: header, sticky table of contents, numbered sections.
 * `sections` is an array of { id, title, body } where body is JSX.
 */
export default function LegalPage({ badge, title, accent, intro, sections, related }) {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="grid-fade absolute inset-0 pointer-events-none" />
        <div
          aria-hidden="true"
          className="glow-orb w-[640px] h-[420px] -top-40 left-1/2 -translate-x-1/2 opacity-[0.12]"
          style={{ background: "radial-gradient(ellipse, #E1B07E, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>{badge}</SectionBadge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] mb-6" style={{ color: "var(--text-primary)" }}>
            {title} <span className="gradient-text accent-serif">{accent}</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {intro}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
            Effective {LEGAL.effective}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
          {/* Table of contents */}
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-faint)" }}>
                On this page
              </p>
              <ol className="space-y-2.5 border-l border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-sm transition-colors hover:border-brand-400 hover:text-[var(--text-primary)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span className="font-mono text-[11px] mr-2" style={{ color: "var(--text-faint)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
              {related && (
                <Link
                  href={related.href}
                  className="mt-8 inline-flex text-sm text-brand-300 hover:text-brand-200 transition-colors"
                >
                  {related.label} →
                </Link>
              )}
            </div>
          </nav>

          {/* Sections */}
          <article
            className="rounded-3xl border p-6 sm:p-10 lg:p-12"
            style={{
              background: "linear-gradient(160deg, var(--surface-hover) 0%, var(--surface-card) 30%)",
              borderColor: "var(--border)",
            }}
          >
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className={`scroll-mt-28 ${i > 0 ? "mt-10 pt-10 border-t border-white/[0.06]" : ""}`}
              >
                <h2 className="flex items-baseline gap-3 text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  <span className="font-mono text-xs text-brand-400">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div
                  className="space-y-4 text-[15px] leading-7 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:marker:text-brand-500 [&_strong]:font-semibold [&_strong]:text-[var(--text-primary)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.body}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

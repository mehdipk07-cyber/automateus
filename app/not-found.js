import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "var(--surface-800)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(225,176,126,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-lg">
        <p
          className="text-8xl font-bold mb-4 gradient-text tabular-nums"
        >
          404
        </p>

        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Page not found
        </h1>

        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#0B1723] transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#E1B07E,#C8945F)" }}
          >
            <Home className="size-4" />
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--text-secondary)",
            }}
          >
            <ArrowLeft className="size-4" />
            Browse the Blog
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
          {[
            { label: "Services",     href: "/services" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "About",        href: "/about" },
            { label: "Contact",      href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:underline transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

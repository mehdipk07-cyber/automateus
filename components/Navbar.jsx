"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services",     href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About",        href: "/about" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ paddingTop: scrolled ? 12 : 0 }}
    >
      {/* Full-width bar at the top; condenses into a floating glass pill on scroll */}
      <nav
        className="relative mx-auto px-4 sm:px-6 lg:px-8 border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxWidth: scrolled ? "64rem" : "80rem",
          borderRadius: scrolled ? 18 : 0,
          background: scrolled
            ? "color-mix(in srgb, var(--background) 72%, transparent)"
            : "transparent",
          borderColor: scrolled ? "rgba(255,255,255,0.09)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          boxShadow: scrolled
            ? "0 12px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "none",
        }}
      >
        {scrolled && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent"
          />
        )}
        <div
          className={`flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="AutomateUs logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              priority
            />
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Automate<span className="text-brand-400">Us</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: active ? "var(--brand-400)" : "var(--text-muted)",
                  }}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = "var(--text-primary)";
                    if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "var(--text-muted)";
                    if (!active) e.currentTarget.style.background = "transparent";
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(190,240,74,0.1)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="sm"
              className="btn-shine h-9 rounded-full px-5 text-sm font-semibold shadow-[0_0_24px_-6px_rgba(190,240,74,0.55)]"
              render={<Link href="/contact" />}
            >
              Book Free Call
              <ArrowRight className="size-3.5" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden mt-2 rounded-2xl"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "color-mix(in srgb, var(--background) 92%, transparent)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all"
                    style={{
                      color: active ? "var(--brand-400)" : "var(--text-secondary)",
                      background: active ? "rgba(190,240,74,0.1)" : "transparent",
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <Button
                  className="w-full font-semibold"
                  render={<Link href="/contact" onClick={() => setMobileOpen(false)} />}
                >
                  Book Free Consultation
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

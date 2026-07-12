"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services",      href: "/services" },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "About",         href: "/about" },
  { label: "Blog",          href: "/blog" },
  { label: "Contact",       href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        background: scrolled ? "color-mix(in srgb, var(--background) 90%, transparent)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.jpg" alt="AutomateUs logo" width={32} height={32} className="w-8 h-8 rounded-lg object-cover" priority />
            <span className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
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
                  className="relative px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: active ? "var(--brand-400)" : "var(--text-muted)",
                    background: active ? "rgba(99,102,241,0.08)" : "transparent",
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-brand-400"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="lg" render={<Link href="/contact" />}>
              Book Free Call
              <ArrowRight />
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)", background: "transparent" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)", background: "var(--surface-800)", backdropFilter: "blur(20px)" }}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors"
                    style={{
                      color: active ? "var(--brand-400)" : "var(--text-secondary)",
                      background: active ? "rgba(99,102,241,0.08)" : "transparent",
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />}
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <Button
                  className="w-full"
                  size="lg"
                  render={<Link href="/contact" onClick={() => setMobileOpen(false)} />}
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

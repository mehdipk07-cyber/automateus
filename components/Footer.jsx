import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Workflow Automation", href: "/services#workflow" },
    { label: "AI Automation", href: "/services#ai" },
    { label: "CRM Automation", href: "/services#crm" },
    { label: "Monday.com", href: "/services#monday" },
    { label: "Make.com", href: "/services#make" },
    { label: "Zapier", href: "/services#zapier" },
    { label: "Custom Integrations", href: "/services#integrations" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "ROI Calculator", href: "/#roi-calculator" },
    { label: "Free Consultation", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="overflow-hidden" style={{ background: "var(--surface-800)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-content">
                <Image src="/logo-automateus.png" alt="AutomateUs logo" width={32} height={32} className="w-8 h-8 object-contain scale-[1.6]" />
              </span>
              <span className="text-xl font-bold text-content tracking-tight">
                Automate<span className="text-brand-400">Us</span>
              </span>
            </Link>
            <p className="text-content-secondary text-sm leading-relaxed max-w-xs mb-6">
              We build custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.
            </p>
            <div className="flex items-center gap-4">
              {[
                { label: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-content-secondary hover:text-content transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-content font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-content-secondary hover:text-content text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-content-muted text-sm">
            © {new Date().getFullYear()} AutomateUs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-content-muted hover:text-content-secondary text-sm transition-colors">Privacy</Link>
            <Link href="/terms" className="text-content-muted hover:text-content-secondary text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, fading into the page edge */}
      <div aria-hidden="true" className="relative overflow-hidden select-none pointer-events-none">
        <div
          className="text-center font-semibold leading-[0.8] tracking-[-0.06em] text-[16vw] translate-y-[12%] bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(225,176,126,0.22), rgba(225,176,126,0.02) 85%)" }}
        >
          AutomateUs
        </div>
      </div>
    </footer>
  );
}

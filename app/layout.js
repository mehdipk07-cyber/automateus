import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ClickSparkProvider from "@/components/ClickSparkProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Italic accent words in headlines
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://automateus.net"),
  title: {
    default: "AutomateUs | Custom Automation Agency",
    template: "%s | AutomateUs",
  },
  description:
    "AutomateUs helps businesses eliminate repetitive tasks and streamline operations through custom automation solutions. Save time, reduce errors, and scale faster.",
  keywords: [
    "Business Automation",
    "Workflow Automation",
    "AI Automation Agency",
    "Monday.com Automation",
    "Make.com Experts",
    "Zapier Automation",
    "CRM Automation Services",
    "Process Automation",
    "Workflow Optimization",
    "AI Workflow Automation",
  ],
  openGraph: {
    title: "AutomateUs | Custom Automation Agency",
    description:
      "We build custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.",
    type: "website",
    locale: "en_US",
    url: "https://automateus.net",
    siteName: "AutomateUs",
    images: [
      {
        url: "/logo-automateus.png",
        width: 1200,
        height: 630,
        alt: "AutomateUs — Custom Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateUs | Custom Automation Agency",
    description:
      "We build custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.",
    images: ["/logo-automateus.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://automateus.net" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AutomateUs",
  url: "https://automateus.net",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://automateus.net/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AutomateUs",
  url: "https://automateus.net",
  logo: "https://automateus.net/logo-automateus.png",
  description:
    "AutomateUs helps businesses eliminate repetitive tasks and streamline operations through custom automation solutions using Make.com, Zapier, Monday.com, and AI.",
  email: "alihassankhaliq20@gmail.com",
  telephone: "+923049814394",
  sameAs: [],
  serviceType: "Business Process Automation",
  areaServed: "Worldwide",
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen antialiased flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-600 focus:text-[#0B1723] focus:font-semibold focus:text-sm"
        >
          Skip to content
        </a>
        <ClickSparkProvider>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ClickSparkProvider>
      </body>
    </html>
  );
}

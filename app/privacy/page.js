import LegalPage, { LEGAL, A } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How AutomateUs collects, uses, and protects the information you share through our website, contact form, and call booking.",
  alternates: { canonical: "https://automateus.net/privacy" },
  openGraph: {
    title: "Privacy Policy | AutomateUs",
    description: "How AutomateUs collects, uses, and protects your information.",
    url: "https://automateus.net/privacy",
  },
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          This Privacy Policy explains how {LEGAL.business}{" "}(&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal
          information when you visit <strong>{LEGAL.site}</strong>, send us an enquiry, or book a call. We keep
          data collection to the minimum needed to respond to you and deliver our services.
        </p>
        <p>
          Personal information we receive from your business systems while delivering a client project is
          covered by the agreement for that project, not by this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p><strong>Information you give us.</strong> When you submit our contact form we receive:</p>
        <ul>
          <li>Your name and work email (required)</li>
          <li>Company name and phone number (optional)</li>
          <li>The services you&apos;re interested in and your estimated budget (optional)</li>
          <li>The description of your automation challenge (required)</li>
        </ul>
        <p>
          If you email us directly or book a call, we receive the details you include, such as your name,
          email address, meeting time, and any notes you add.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most websites, our hosting provider
          records standard technical data when pages are requested, such as IP address, browser type, and
          the time of the request. We use this only to keep the site secure and working.
        </p>
        <p>
          We do not use analytics or advertising trackers, and we do not build profiles of visitors.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <p>We use the information you share to:</p>
        <ul>
          <li>Reply to your enquiry and send you a confirmation that we received it</li>
          <li>Prepare for and hold discovery calls you book with us</li>
          <li>Write proposals and deliver services you engage us for</li>
          <li>Keep the website secure and fix problems</li>
        </ul>
        <p>
          We don&apos;t sell or rent your personal information, and we don&apos;t add you to marketing lists
          without your permission.
        </p>
        <p>
          Our legal bases are your request for us to contact you, steps taken before entering a contract
          with you, and our legitimate interest in running a secure website.
        </p>
      </>
    ),
  },
  {
    id: "service-providers",
    title: "Service providers we rely on",
    body: (
      <>
        <p>We share information only with providers that help us run the site and our business:</p>
        <ul>
          <li>
            <strong>Google (Gmail)</strong> delivers contact-form submissions to our inbox and sends your
            confirmation email. See <A href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</A>.
          </li>
          <li>
            <strong>Calendly</strong> powers the booking widget on our contact page. Bookings are processed
            by Calendly under <A href="https://calendly.com/legal/privacy-notice">its privacy notice</A>,
            and the widget may set its own cookies.
          </li>
          <li>
            <strong>Vercel</strong> hosts this website and processes the technical request data described
            above. See <A href="https://vercel.com/legal/privacy-policy">Vercel&apos;s Privacy Policy</A>.
          </li>
        </ul>
        <p>
          We may also disclose information if required by law, or to protect our rights or the safety of
          others.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>
          Our own pages don&apos;t set cookies for tracking or advertising. Fonts are served from our own
          domain and images are delivered through our host, so viewing the site doesn&apos;t contact font or
          image services directly.
        </p>
        <p>
          The Calendly booking widget on the contact page is the only third-party embed and may use cookies
          to make scheduling work. You can block or clear cookies in your browser settings; booking may not
          work without them, in which case you can email us instead.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry emails and booking details for as long as needed to respond to you and to manage any
        business relationship that follows. If we don&apos;t end up working together, we delete them once
        they&apos;re no longer needed. You can ask us to delete your information sooner at any time.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        The site is served over HTTPS, and access to the inbox and tools where your information is kept is
        limited to the people who need it. No method of transmission or storage is perfectly secure, but we
        take reasonable steps to protect what you share with us.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Correct information that is wrong or incomplete</li>
          <li>Ask us to delete your information</li>
          <li>Object to or restrict how we use it</li>
          <li>Receive a copy of it in a portable format</li>
        </ul>
        <p>
          To make a request, email <A href={`mailto:${LEGAL.email}`}>{LEGAL.email}</A>. We&apos;ll respond
          within 30 days. You may also have the right to complain to your local data protection authority.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "International transfers",
    body: (
      <p>
        We work with clients worldwide, and our service providers may process information in countries other
        than yours, including the United States. Where required, those transfers rely on safeguards such as
        the providers&apos; standard contractual clauses.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our services are for businesses. We don&apos;t knowingly collect information from anyone under 16. If
        you believe a child has sent us personal information, contact us and we&apos;ll delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If we change how we handle personal information, we&apos;ll update this page and its effective date.
        Significant changes will be highlighted on the site.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about this policy or your information? Email{" "}
        <A href={`mailto:${LEGAL.email}`}>{LEGAL.email}</A> or reach us through our{" "}
        <A href="/contact">contact page</A>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy"
      accent="Policy"
      intro="What we collect, why we collect it, and the choices you have. Short version: we only use your details to talk to you and deliver your project."
      sections={sections}
      related={{ href: "/terms", label: "Terms of Service" }}
    />
  );
}

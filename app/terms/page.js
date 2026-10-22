import LegalPage, { LEGAL, A } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use the AutomateUs website, tools, and content.",
  alternates: { canonical: "https://automate-us.vercel.app/terms" },
  openGraph: {
    title: "Terms of Service | AutomateUs",
    description: "The terms that apply when you use the AutomateUs website.",
    url: "https://automate-us.vercel.app/terms",
  },
};

const sections = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    body: (
      <p>
        These Terms of Service govern your use of <strong>{LEGAL.site}</strong>{" "}(the &ldquo;site&rdquo;),
        operated by {LEGAL.business}{" "}(&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the site you agree to
        these terms. If you don&apos;t agree, please don&apos;t use the site.
      </p>
    ),
  },
  {
    id: "our-services",
    title: "Our services",
    body: (
      <>
        <p>
          The site describes the automation services we offer. Using the site, submitting an enquiry, or
          booking a discovery call does not create a client relationship or oblige either of us to work
          together.
        </p>
        <p>
          Any project we take on is governed by a separate written proposal or agreement that sets out the
          scope, pricing, timeline, and ownership of deliverables. If that agreement conflicts with these
          terms, the agreement wins.
        </p>
      </>
    ),
  },
  {
    id: "estimates-and-results",
    title: "Estimates and results",
    body: (
      <>
        <p>
          Our ROI calculator, case studies, testimonials, and statistics are provided for illustration. The
          calculator produces estimates from the numbers you enter and fixed assumptions shown alongside it;
          it is not a quote or a guarantee of savings.
        </p>
        <p>
          Results described on the site reflect specific clients and circumstances. Your results will depend
          on your processes, tools, and team.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>When using the site, you agree not to:</p>
        <ul>
          <li>Submit false information or impersonate anyone</li>
          <li>Send spam, malicious code, or automated bulk submissions through our forms</li>
          <li>Try to gain unauthorized access to the site or the systems behind it</li>
          <li>Interfere with the site&apos;s operation or other visitors&apos; use of it</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The site&apos;s content, including text, graphics, articles, and design, belongs to{" "}
          {LEGAL.business} or its licensors. You may read, share links to, and quote short excerpts with
          attribution. You may not copy or republish substantial parts without our written permission.
        </p>
        <p>
          Product names and logos of third-party tools shown on the site, such as Make.com, Zapier,
          Monday.com, HubSpot, and Slack, are trademarks of their respective owners. Showing them indicates
          that we work with those tools, not that their owners endorse us.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    body: (
      <p>
        The site links to and embeds third-party services, such as Calendly for booking calls. Those services
        have their own terms and privacy policies, and we aren&apos;t responsible for their content or how
        they operate.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        The site and its content are provided &ldquo;as is&rdquo; for general information. Articles and guides
        are not professional advice for your specific situation. We work to keep the site accurate and
        available, but we don&apos;t guarantee that it will always be error-free or uninterrupted.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, {LEGAL.business} is not liable for any indirect, incidental,
        or consequential losses arising from your use of the site or reliance on its content. Nothing in these
        terms limits liability that cannot be limited by law.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        Our <A href="/privacy">Privacy Policy</A> explains how we handle the information you share through
        the site.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. Changes take effect when posted on this page with a new
        effective date. Continuing to use the site after that means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of {LEGAL.jurisdiction}. Any dispute relating to the site will be
        handled by the courts of {LEGAL.jurisdiction}, unless the law of your country gives you the right to
        bring a claim where you live.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about these terms? Email <A href={`mailto:${LEGAL.email}`}>{LEGAL.email}</A> or reach us
        through our <A href="/contact">contact page</A>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of"
      accent="Service"
      intro="The ground rules for using our website and its tools. Client projects are covered by their own written agreement."
      sections={sections}
      related={{ href: "/privacy", label: "Privacy Policy" }}
    />
  );
}

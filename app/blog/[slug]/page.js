import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/posts";

/* ── Static params ── */
export async function generateStaticParams() {
  return getAllSlugs();
}

/* ── Per-page SEO metadata ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | AutomateUs Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
    alternates: { canonical: `https://automateus.net/blog/${slug}` },
  };
}

/* ── Content block renderer ── */
function ContentBlock({ block }) {
  switch (block.type) {
    case "p":
      return (
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          className="text-2xl sm:text-3xl font-bold mt-12 mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          className="text-xl font-semibold mt-8 mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul className="mb-6 space-y-2.5 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "var(--brand-400)" }}
              />
              <span
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="mb-6 space-y-5 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center mt-0.5"
                style={{
                  background: "rgba(225,176,126,0.12)",
                  border: "1px solid rgba(225,176,126,0.2)",
                  color: "var(--brand-400)",
                }}
              >
                {i + 1}
              </span>
              <div>
                {typeof item === "string" ? (
                  <span
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                ) : (
                  <>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.body}
                    </p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case "img":
      return (
        <figure className="my-10">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {block.caption && (
            <figcaption
              className="mt-3 text-sm text-center"
              style={{ color: "var(--text-muted)" }}
            >
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <div
          className="my-8 rounded-xl p-6"
          style={{
            background: "rgba(225,176,126,0.08)",
            border: "1px solid rgba(225,176,126,0.2)",
          }}
        >
          <p
            className="text-base leading-relaxed font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            {block.text}
          </p>
        </div>
      );

    default:
      return null;
  }
}

/* ── Page ── */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();
  const related = getRelatedPosts(slug);

  /* JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.isoDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "AutomateUs",
      url: "https://automateus.net",
      logo: { "@type": "ImageObject", url: "https://automateus.net/logo-automateus.png" },
    },
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://automateus.net/blog/${slug}` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://automateus.net" },
      { "@type": "ListItem", position: 2, name: "Blog",  item: "https://automateus.net/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://automateus.net/blog/${slug}` },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main
        className="min-h-screen pt-24 pb-32"
        style={{ background: "var(--surface-800)" }}
      >
        {/* ── Hero ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors group"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-1"
            />
            Back to Blog
          </Link>

          {/* Category badge */}
          <div className="mb-5">
            <span
              className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest"
              style={{
                color: post.categoryColor,
                background: `${post.categoryColor}18`,
                border: `1px solid ${post.categoryColor}30`,
              }}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            className="text-xl leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div
            className="flex flex-wrap items-center gap-6 pb-8 mb-10"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(225,176,126,0.12)" }}
              >
                <User className="size-4" style={{ color: "var(--brand-400)" }} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold leading-none"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.author.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {post.author.role}
                </p>
              </div>
            </div>

            <div
              className="flex items-center gap-1.5 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <Calendar className="size-4" />
              {post.date}
            </div>

            <div
              className="flex items-center gap-1.5 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock className="size-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* ── Cover image ── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Subtle gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35) 100%)",
              }}
            />
          </div>
        </div>

        {/* ── Article body ── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </article>

          {/* ── Footer divider ── */}
          <div
            className="mt-16 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {post.keywords.slice(0, 5).map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-muted)",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(225,176,126,0.15) 0%, rgba(225,176,126,0.04) 100%)",
                border: "1px solid rgba(225,176,126,0.25)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Ready to automate your business?
              </h3>
              <p
                className="text-base mb-6 max-w-md mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Book a free 30-minute strategy call and we&apos;ll map out exactly
                what to automate first for maximum ROI.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#0B1723] transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #E1B07E, #C8945F)",
                }}
              >
                Book Your Free Call
              </Link>
              <p
                className="text-xs mt-4"
                style={{ color: "var(--text-faint)" }}
              >
                No commitment · Custom roadmap included
              </p>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  Continue Reading
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="group block rounded-xl p-4 transition-all duration-200 hover:!border-[rgba(225,176,126,0.3)] hover:!bg-[rgba(225,176,126,0.04)]"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: rp.categoryColor }}
                      >
                        {rp.category}
                      </span>
                      <p
                        className="text-sm font-semibold mt-1.5 leading-snug group-hover:underline"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {rp.title}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {rp.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm transition-colors group"
                style={{ color: "var(--text-muted)" }}
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to all posts
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import { getAllSlugs } from "@/lib/posts";

const BASE = "https://automateus.net";

export default function sitemap() {
  const staticPages = [
    { url: BASE,                      lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/services`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/case-studies`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/about`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const blogPages = getAllSlugs().map(({ slug }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

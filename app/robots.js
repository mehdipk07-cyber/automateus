export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://automate-us.vercel.app/sitemap.xml",
    host: "https://automate-us.vercel.app",
  };
}

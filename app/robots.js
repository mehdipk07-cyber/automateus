export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://automateus.net/sitemap.xml",
    host: "https://automateus.net",
  };
}

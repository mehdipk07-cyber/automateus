// Notify Bing, Yandex, Seznam, Naver & Yep of new/updated pages via IndexNow.
//   npm run indexnow                 → submits every URL in the live sitemap
//   npm run indexnow -- <url> <url>  → submits only the given URLs
// Run after deploying, so the live key file and sitemap are up to date.

const HOST = "automateus.net";
const BASE = `https://${HOST}`;
const KEY_LOCATION = `${BASE}/indexnow-key.txt`;

const key = process.env.INDEXNOW_KEY;
if (!key) {
  console.error("INDEXNOW_KEY is not set (add it to .env).");
  process.exit(1);
}

async function sitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

const urlList = process.argv.length > 2 ? process.argv.slice(2) : await sitemapUrls();

// Make sure the live key file matches before submitting, otherwise engines reject with 403
const live = await fetch(KEY_LOCATION).then((r) => (r.ok ? r.text() : null));
if (live?.trim() !== key) {
  console.error(`Key file at ${KEY_LOCATION} is missing or doesn't match INDEXNOW_KEY. Deploy first.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: KEY_LOCATION, urlList }),
});

const messages = {
  200: "OK — URLs submitted.",
  202: "Accepted — key validation pending, URLs will be processed.",
  400: "Bad request — invalid format.",
  403: "Forbidden — key not valid (key file not found or mismatched).",
  422: "Unprocessable — URLs don't belong to the host or key doesn't match.",
  429: "Too many requests — slow down.",
};

console.log(`Submitted ${urlList.length} URL(s):`);
urlList.forEach((u) => console.log(`  ${u}`));
console.log(`\n${res.status} ${messages[res.status] ?? (await res.text())}`);
if (res.status >= 400) process.exit(1);

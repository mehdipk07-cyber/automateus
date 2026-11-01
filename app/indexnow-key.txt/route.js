// IndexNow key file — search engines fetch this to verify submissions from scripts/indexnow.mjs
export function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return new Response("Not found", { status: 404 });

  return new Response(key, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

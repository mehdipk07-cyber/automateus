export default function manifest() {
  return {
    name: "AutomateUs",
    short_name: "AutomateUs",
    description:
      "Custom automation solutions that eliminate manual tasks and scale your business.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#6366f1",
    icons: [
      { src: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { src: "/logo.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
  };
}

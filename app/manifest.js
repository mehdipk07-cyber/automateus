export default function manifest() {
  return {
    name: "AutomateUs",
    short_name: "AutomateUs",
    description:
      "Custom automation solutions that eliminate manual tasks and scale your business.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090A",
    theme_color: "#08090A",
    icons: [
      { src: "/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

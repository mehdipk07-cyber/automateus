export default function manifest() {
  return {
    name: "AutomateUs",
    short_name: "AutomateUs",
    description:
      "Custom automation solutions that eliminate manual tasks and scale your business.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1723",
    theme_color: "#0B1723",
    icons: [
      { src: "/logo-automateus.png", sizes: "1254x1254", type: "image/png" },
    ],
  };
}

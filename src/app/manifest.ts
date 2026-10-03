import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Growlinqs | Performance Digital Marketing & Growth Agency",
    short_name: "Growlinqs",
    description:
      "Growlinqs is an elite performance digital marketing, paid ads, SEO, and business growth agency.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b14",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

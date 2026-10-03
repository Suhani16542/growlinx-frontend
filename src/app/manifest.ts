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
    ],
  };
}

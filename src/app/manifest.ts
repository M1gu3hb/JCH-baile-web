import type { MetadataRoute } from "next";

const siteDescription =
  "Clases de salsa, bachata, cumbia y ritmos de salón en Jardines Club Hípico, Xochimilco.";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JCH Baile · Jardines Club Hípico",
    short_name: "JCH Baile",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#08120e",
    theme_color: "#d3ff57",
    lang: "es-MX",
    icons: [{ src: "/images/jch-logo-square.png", sizes: "512x512", type: "image/png" }],
  };
}

import type { Metadata, Viewport } from "next";
import { AudioToggle } from "@/components/layout/audio-toggle";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { manrope, playfair } from "@/lib/fonts";
import { memberships, site } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clases de baile en Xochimilco | JCH Baile",
    template: "%s | JCH Baile",
  },
  description: site.shortDescription,
  keywords: [
    "clases de baile Xochimilco",
    "clases de salsa Xochimilco",
    "clases de bachata CDMX",
    "clases de cumbia",
    "baile de salón",
    "Jardines Club Hípico",
    "Salón de los Espejos",
  ],
  applicationName: "JCH Baile",
  authors: [{ name: "Jardines Club Hípico" }],
  creator: "Jardines Club Hípico",
  publisher: "Jardines Club Hípico",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "JCH Baile",
    title: "Clases de baile en Xochimilco | JCH Baile",
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de baile en Xochimilco | JCH Baile",
    description: site.shortDescription,
  },
  icons: {
    icon: "/images/jch-logo-square.png",
    apple: "/images/jch-logo-square.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08120e",
  colorScheme: "dark",
};

const danceSchoolSchema = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: site.legalName,
  alternateName: "JCH Baile",
  description: site.shortDescription,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  image: `${siteUrl}/images/salon-amplio.webp`,
  logo: `${siteUrl}/images/jch-logo.png`,
  parentOrganization: {
    "@type": "Organization",
    name: "Jardines Club Hípico",
    url: site.parentSite,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Duraznos S/N, Santa Inés",
    addressLocality: "Xochimilco",
    addressRegion: "Ciudad de México",
    postalCode: "16810",
    addressCountry: "MX",
  },
  areaServed: ["Xochimilco", "Ciudad de México"],
  priceRange: "$80–$800 MXN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Membresías mensuales de baile",
    itemListElement: memberships.map((membership) => ({
      "@type": "Offer",
      priceCurrency: "MXN",
      price: membership.price,
      itemOffered: {
        "@type": "Course",
        name: `Membresía ${membership.name}`,
        description: `${membership.classes} clases en cuatro semanas. ${membership.frequency}.`,
        provider: { "@type": "Organization", name: "Jardines Club Hípico" },
      },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <AudioToggle />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(danceSchoolSchema) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "../components/analytics";
import "./globals.css";
import "./fastona.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derlis-aguilera-alarcon.vercel.app"),
  title: {
    default: "Derlis Aguilera | Desarrollo web, apps, ecommerce y marketing digital",
    template: "%s | Derlis Aguilera",
  },
  description:
    "Proyectos y servicios de desarrollo web, aplicaciones, Shopify, ecommerce, Google Ads, Meta Ads, Google Analytics 4 y diseño digital en Paraguay.",
  keywords: [
    "Derlis Aguilera",
    "Ecommerce Paraguay",
    "Ecommerce Strategy",
    "Digital Performance",
    "Marketing Digital",
    "Shopify",
    "Google Ads",
    "Google Analytics 4",
    "Google Tag Manager",
    "Power BI",
    "SQL",
    "Business Intelligence",
    "Automatización",
    "Ecommerce Operations",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Derlis Aguilera | Desarrollo web, apps, ecommerce y marketing digital",
    description: "Desarrollo web, apps, ecommerce y marketing digital para empresas.",
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Derlis Aguilera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derlis Aguilera | Desarrollo web, apps, ecommerce y marketing digital",
    description: "Webs, apps, Shopify, Google Ads, Meta Ads y analítica para hacer crecer negocios.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="es-PY"><body><Analytics />{children}</body></html>;
}

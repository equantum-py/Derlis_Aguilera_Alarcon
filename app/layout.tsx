import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "../components/analytics";
import "./globals.css";
import "./fastona.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derlis-aguilera-alarcon.vercel.app"),
  title: {
    default: "Derlis Aguilera | Ecommerce · Digital Performance · Data",
    template: "%s | Derlis Aguilera",
  },
  description:
    "Portafolio profesional de Derlis Aguilera. Ecommerce, digital performance, analítica, Shopify, Google Ads, GA4, dashboards, datos y automatización.",
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
    title: "Derlis Aguilera | Ecommerce · Digital Performance · Data",
    description: "Ecommerce, performance y datos aplicados al crecimiento de negocios digitales.",
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Derlis Aguilera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derlis Aguilera | Ecommerce · Digital Performance · Data",
    description: "Ecommerce, performance, analítica y automatización para impulsar resultados digitales.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="es-PY"><body><Analytics />{children}</body></html>;
}

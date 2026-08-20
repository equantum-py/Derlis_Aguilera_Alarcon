import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "../components/analytics";
import "./globals.css";
import "./visual-overrides.css";
import "./portfolio-v2.css";
import "./portfolio-premium.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derlis-aguilera-alarcon.vercel.app"),
  title: {
    default: "Derlis Aguilera | Líder de Negocios Digitales",
    template: "%s | Derlis Aguilera",
  },
  description:
    "Portafolio de Derlis Aguilera: liderazgo de negocios digitales, ecommerce, operaciones comerciales, datos, automatización e inteligencia artificial.",
  keywords: [
    "Derlis Aguilera",
    "Ecommerce Paraguay",
    "Gerencia Ecommerce",
    "Líder de Negocios Digitales",
    "Product Analyst",
    "Ecommerce Operations",
    "Shopify",
    "Marketing Digital",
    "SQL",
    "Scrum",
    "Logística ecommerce",
    "Google Analytics",
    "Business Intelligence",
    "Automatización con IA",
    "Operaciones comerciales",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Derlis Aguilera | Líder de Negocios Digitales",
    description:
      "Ecommerce, estrategia comercial, datos, operaciones y automatización con IA para impulsar resultados.",
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Derlis Aguilera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derlis Aguilera | Ecommerce, Product & Operations Analyst",
    description:
      "Ecommerce, operaciones comerciales, datos y automatización con inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-PY">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}

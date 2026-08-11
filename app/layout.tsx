import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "../components/analytics";
import "./globals.css";
import "./visual-overrides.css";
import "./portfolio-v2.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derlis-aguilera-alarcon.vercel.app"),
  title: {
    default: "Derlis Aguilera | Ecommerce, Product & Operations Analyst",
    template: "%s | Derlis Aguilera",
  },
  description:
    "Portafolio profesional de Derlis Aguilera: ecommerce, marketing digital, análisis de productos, operaciones, logística, SQL, Scrum, Shopify y analítica.",
  keywords: [
    "Derlis Aguilera",
    "Ecommerce Paraguay",
    "Ecommerce Analyst",
    "Product Analyst",
    "Ecommerce Operations",
    "Shopify",
    "Marketing Digital",
    "SQL",
    "Scrum",
    "Logística ecommerce",
    "Google Analytics",
    "Business Intelligence",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Derlis Aguilera | Ecommerce, Product & Operations Analyst",
    description:
      "Ecommerce, productos, marketing, datos, operaciones y logística para impulsar resultados digitales.",
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Derlis Aguilera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derlis Aguilera | Ecommerce, Product & Operations Analyst",
    description:
      "Ecommerce, productos, marketing, analítica, operaciones y logística.",
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

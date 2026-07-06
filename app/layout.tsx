import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./visual-overrides.css";

export const metadata: Metadata = {
  title: "Derlis Aguilera | Ecommerce Strategy & AI Operations Specialist",
  description:
    "Portfolio profesional de Derlis Aguilera. Ecommerce, Shopify, analítica, automatización, inteligencia artificial y transformación digital.",
  keywords: [
    "Derlis Aguilera",
    "Ecommerce Strategy",
    "AI Operations",
    "Shopify",
    "Business Intelligence",
    "Digital Growth",
    "Automatización",
    "Inteligencia Artificial",
    "Transformación Digital",
  ],
  openGraph: {
    title: "Derlis Aguilera | Ecommerce Strategy & AI Operations Specialist",
    description:
      "Ecommerce, Shopify, analítica, automatización, inteligencia artificial y transformación digital.",
    type: "website",
    locale: "es_PY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

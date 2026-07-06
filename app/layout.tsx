import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Derlis Aguilera | Ecommerce Strategy & AI Operations",
  description:
    "Portfolio profesional de Derlis Aguilera. Ecommerce, IA, automatización, analítica y transformación digital.",
  keywords: [
    "Derlis Aguilera",
    "Ecommerce Strategy",
    "AI Operations",
    "Shopify",
    "Business Intelligence",
    "Digital Growth",
  ],
  openGraph: {
    title: "Derlis Aguilera | Ecommerce Strategy & AI Operations",
    description:
      "Ecommerce, IA, automatización, analítica y transformación digital orientadas a resultados.",
    type: "website",
    locale: "es_PY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
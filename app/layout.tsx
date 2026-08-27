import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "../components/analytics";
import "./globals.css";
import "./fastona.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derlis-aguilera-alarcon.vercel.app"),
  title: {
    default: "Derlis Aguilera | Digital Marketing & Performance Analyst",
    template: "%s | Derlis Aguilera",
  },
  description:
    "Portafolio de Derlis Aguilera: marketing digital, performance, ecommerce, dashboards, analítica web y automatización.",
  keywords: [
    "Derlis Aguilera",
    "Ecommerce Paraguay",
    "Marketing Digital y Performance",
    "Analista de Performance",
    "Dashboards y reporting",
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
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Supabase",
    "Git",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Derlis Aguilera | Digital Marketing & Performance Analyst",
    description:
      "Marketing digital, performance, ecommerce, dashboards, analítica y automatización para impulsar resultados.",
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Derlis Aguilera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derlis Aguilera | Digital Marketing & Performance Analyst",
    description:
      "Marketing digital, performance, ecommerce, analítica web, dashboards y automatización.",
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

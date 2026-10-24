"use client";
import { useState } from "react";
import Image from "next/image";

type Props = { url: string; fallback: string; alt: string; priority?: boolean };
const screenshotByHost: Record<string, string> = {
  "ultramaison.co":"ultramaison",
  "www.ultramaison.co":"ultramaison",
  "guaramarket.com.py":"guara-market",
  "www.guaramarket.com.py":"guara-market",
  "chebagels.vercel.app":"che-bagels",
  "santamaria-indol.vercel.app":"santa-maria",
  "limpiarteparaguay.vercel.app":"limpiarte",
  "app-apf.vercel.app":"apf",
  "relatoestrategico.vercel.app":"relato-estrategico",
  "www.equantum.com.py":"equantum",
  "equantum.com.py":"equantum",
  "campamentocbg.vercel.app":"campamento-cbg",
  "chocolate-squirrel-724944.hostingersite.com":"inyou",
  "inverfin.com.py":"inverfin",
  "fortis.com.py":"fortis",
  "corpicia.com.py":"corpicia",
  "cooperativavidaluzcompy.vercel.app":"cooperativa-vida-luz",
  "asoapp.vercel.app":"portal-cooperativo",
  "quantum-life-manager.vercel.app":"quantum-life-manager",
  "marmoleriapietra.com":"marmoleria-pietra",
  "www.corpicia.com":"corpicia",
  "vitaliserviciomedico.vercel.app":"vitalis",
  "nathalychamorro.vercel.app":"nathaly-chamorro",
  "arquitectadiana.vercel.app":"arquitecta-diana",
  "ecotrituraparaguay.vercel.app":"ecotritura-paraguay",
  "ruavera.vercel.app":"ruavera",
  "joliejewelry.vercel.app":"jolie-jewelry",
  "haunted-psi.vercel.app":"haunted-psi",
  "portalverdepy.vercel.app":"portal-verde",
  "todoserviciospy.vercel.app":"todo-servicios",
};
export function ProjectScreenshot({ url, fallback, alt, priority = false }: Props) {
  const [stage, setStage] = useState(0);
  let host = "";
  try { host = new URL(url).hostname; } catch { /* URL opcional */ }
  const slug = screenshotByHost[host];
  const images = [slug ? `/screenshots/${slug}.png` : "", fallback].filter(Boolean);
  if (stage >= images.length) return <div className="rr-preview-unavailable" role="img" aria-label={alt}>
    <span>PROYECTO DIGITAL</span><strong>{alt.replace(/^Vista (del proyecto|del sitio|de la aplicación)\s*/i, "")}</strong><small>Hacé clic para visitar el proyecto</small>
  </div>;
  return <Image
    src={images[stage]}
    alt={alt}
    width={priority ? 1000 : 760}
    height={priority ? 630 : 475}
    sizes={priority ? "(max-width: 800px) 80vw, 48vw" : "(max-width: 800px) 100vw, 46vw"}
    quality={65}
    priority={priority}
    loading={priority ? "eager" : "lazy"}
    onError={() => setStage((previous) => previous + 1)}
    style={{ display:"block",width:"100%",height:"100%",objectFit:"cover",objectPosition:"top" }}
  />;
}

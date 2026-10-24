"use client";
import { useState } from "react";

type Props = { url: string; fallback: string; alt: string };
const screenshotByHost: Record<string, string> = {
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
};
export function ProjectScreenshot({ url, fallback, alt }: Props) {
  const [stage, setStage] = useState(0);
  let host = "";
  try { host = new URL(url).hostname; } catch { /* URL opcional */ }
  const slug = screenshotByHost[host];
  const images = [slug ? `/screenshots/${slug}.png` : "", fallback].filter(Boolean);
  if (stage >= images.length) return <div className="rr-preview-unavailable" role="img" aria-label={alt}>
    <span>PROYECTO DIGITAL</span><strong>{host || alt}</strong><small>Visitá el proyecto para conocerlo</small>
  </div>;
  return <img src={images[stage]} alt={alt} loading="lazy" decoding="async"
    onError={() => setStage((previous) => previous + 1)}
    style={{ display:"block",width:"100%",height:"100%",objectFit:"cover",objectPosition:"top" }}
  />;
}

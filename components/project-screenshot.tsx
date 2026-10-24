"use client";
import { useState } from "react";

type Props = { url: string; fallback: string; alt: string };
export function ProjectScreenshot({ url, fallback, alt }: Props) {
  const [failed, setFailed] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);
  const preview = `https://image.thum.io/get/width/1200/crop/750/noanimate/${url}`;
  if (failed && (!fallback || fallbackFailed)) {
    return <div className="rr-preview-unavailable" role="img" aria-label={alt}>
      <span>PORTAFOLIO DIGITAL</span>
      <strong>{new URL(url).hostname.replace(/^www\./, "")}</strong>
      <small>Explorá el proyecto desde el enlace</small>
    </div>;
  }
  return <img
    src={failed ? fallback : preview}
    alt={alt}
    loading="lazy"
    decoding="async"
    onError={() => failed ? setFallbackFailed(true) : setFailed(true)}
    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
  />;
}

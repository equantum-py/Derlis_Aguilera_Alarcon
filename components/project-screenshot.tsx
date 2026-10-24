"use client";
import { useState } from "react";

type Props = { url: string; fallback: string; alt: string };
export function ProjectScreenshot({ url, fallback, alt }: Props) {
  const [failed, setFailed] = useState(false);
  const preview = `https://image.thum.io/get/width/1000/crop/620/noanimate/${url}`;
  return (
    <img
      src={failed ? fallback : preview}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => { if (!failed) setFailed(true); }}
      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
    />
  );
}

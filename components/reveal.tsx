import type { PropsWithChildren } from "react";

export function Reveal({ children }: PropsWithChildren<{ delay?: number }>) {
  return <div className="reveal">{children}</div>;
}
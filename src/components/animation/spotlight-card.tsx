"use client";

import { useRef, useState } from "react";

type SpotlightCardProps = React.PropsWithChildren<{
  className?: string;
  spotlightColor?: string;
}>;

/** Adapted from React Bits SpotlightCard (MIT + Commons Clause). */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(211, 255, 87, 0.18)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  return (
    <div
      ref={ref}
      onPointerMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        ref.current?.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        ref.current?.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      }}
      onPointerEnter={() => setOpacity(1)}
      onPointerLeave={() => setOpacity(0)}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(420px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

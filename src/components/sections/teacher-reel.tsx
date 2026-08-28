"use client";

import { useEffect, useRef } from "react";

export function TeacherReel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="teacher-reel">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        poster="/images/adriana-presentaciones-poster.webp"
        aria-label="Fragmentos de presentaciones dirigidas o compartidas por Adriana Mejía"
      >
        <source src="/media/adriana-presentaciones.mp4" type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
      <figcaption>
        <span>Archivo en movimiento</span>
        Fragmentos sin audio de cinco presentaciones reales compartidas por Adriana.
      </figcaption>
    </figure>
  );
}

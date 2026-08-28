"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlurText } from "@/components/animation/blur-text";
import { StarBorder } from "@/components/animation/star-border";
import { site, whatsappHref } from "@/lib/site-data";

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 65, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 65, damping: 22 });
  const imageX = useTransform(smoothX, [0, 1], [-12, 12]);
  const imageY = useTransform(smoothY, [0, 1], [-9, 9]);
  const contactHref = whatsappHref("Hola, quiero apartar mi lugar para las clases de baile en Jardines Club Hípico.");

  return (
    <section
      className="home-hero"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <div className="home-hero__grain" aria-hidden="true" />
      <div className="home-hero__ring home-hero__ring--one" aria-hidden="true" />
      <div className="home-hero__ring home-hero__ring--two" aria-hidden="true" />

      <motion.div className="home-hero__photo" style={reduceMotion ? undefined : { x: imageX, y: imageY }}>
        <Image
          src="/images/adriana-danzon-2024.webp"
          alt="Adriana Mejía, maestra de las clases de baile, durante una presentación de danzón"
          fill
          priority
          sizes="(max-width: 900px) 88vw, 48vw"
        />
        <div className="home-hero__photo-overlay" />
        <span className="home-hero__photo-label">
          <UserRound size={13} aria-hidden="true" /> Adriana Mejía · Tu maestra
        </span>
      </motion.div>

      <div className="home-hero__content">
        <motion.div
          className="home-hero__kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Jardines Club Hípico presenta</span>
          <b>Próximamente · Xochimilco</b>
        </motion.div>

        <h1>
          <BlurText text="Tu cuerpo ya sabe." delay={95} />
          <span className="home-hero__italic">
            <BlurText text="Solo hay que escucharlo." delay={78} direction="top" />
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Salsa, bachata, cumbia y ritmos de salón con la maestra Adriana Mejía. Empieza
          desde cero, aprende con técnica y sal bailando de verdad.
        </motion.p>

        <motion.div
          className="home-hero__actions"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
        >
          <StarBorder as="a" href={contactHref} target="_blank" rel="noreferrer" className="hero-primary">
            Quiero enterarme primero <ArrowUpRight size={17} aria-hidden="true" />
          </StarBorder>
          <Link href="/membresias" className="hero-secondary">
            Ver membresías <span>desde $300</span>
          </Link>
        </motion.div>

        <motion.div
          className="home-hero__facts"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
        >
          <span>Sin experiencia</span>
          <span>Sin pareja obligatoria</span>
          <span>Desde $80 por clase</span>
        </motion.div>
      </div>

      <a href="#descubre" className="home-hero__scroll" aria-label="Bajar a la siguiente sección">
        <ArrowDown aria-hidden="true" />
        <span>Descubre</span>
      </a>

      <span className="sr-only">{site.shortDescription}</span>
    </section>
  );
}

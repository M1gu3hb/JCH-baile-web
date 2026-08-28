import type { Metadata } from "next";
import { ArrowUpRight, Headphones, Repeat2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { ScrollVelocity } from "@/components/animation/scroll-velocity";
import { SpotlightCard } from "@/components/animation/spotlight-card";
import { CtaBand } from "@/components/sections/cta-band";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { rhythms, whatsappHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Salsa, bachata, cumbia y baile de salón",
  description:
    "Conoce los ritmos de las próximas clases de baile en Jardines Club Hípico: salsa, bachata, cumbia, merengue, danzón y cha-cha-chá.",
  alternates: { canonical: "/ritmos" },
};

export default function RitmosPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Ritmos de baile"
        title="No elijas el más fácil."
        italic="Elige el que te mueva."
        description="Cada ritmo entrena algo distinto: velocidad, conexión, control o musicalidad. La base es la misma: aprender a escuchar y responder."
        marker="R"
      />

      <ScrollVelocity
        first="MUSICALIDAD · CONEXIÓN · TÉCNICA ·"
        second="RITMO · PRESENCIA · CONFIANZA ·"
      />

      <section className="rhythms-detail section-shell section-shell--wide">
        {rhythms.map((rhythm, index) => {
          const href = whatsappHref(`Hola, me interesa aprender ${rhythm.name}. ¿Me avisan cuando publiquen los horarios?`);
          return (
            <Reveal key={rhythm.slug} amount={0.14}>
              <SpotlightCard className="rhythm-row" spotlightColor={`${rhythm.accent}2e`}>
                <div className="rhythm-row__number">{rhythm.number}</div>
                <div className="rhythm-row__title">
                  <span style={{ backgroundColor: rhythm.accent }} />
                  <h2>{rhythm.name}</h2>
                  <p>{rhythm.phrase}</p>
                </div>
                <div className="rhythm-row__copy">
                  <p>{rhythm.description}</p>
                  <div>
                    <span>{rhythm.tempo}</span>
                    <a href={href} target="_blank" rel="noreferrer">
                      Me interesa <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <span className="rhythm-row__ghost" aria-hidden="true">
                  {index + 1}
                </span>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </section>

      <section className="method-section section-shell">
        <Reveal>
          <span className="eyebrow">Cómo se aprende aquí</span>
          <h2>Menos figuras sueltas. <em>Más baile real.</em></h2>
        </Reveal>
        <div className="method-grid">
          {[
            {
              icon: Headphones,
              title: "Escucha",
              text: "Primero reconoces el pulso y los acentos para dejar de perseguir la música.",
            },
            {
              icon: Repeat2,
              title: "Practica",
              text: "Repites con intención hasta que el paso deja de ocupar toda tu cabeza.",
            },
            {
              icon: Sparkles,
              title: "Conecta",
              text: "Aprendes a guiar, seguir y adaptarte sin convertir el baile en una coreografía rígida.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article>
                <item.icon aria-hidden="true" />
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="method-note">
          La programación puede rotar conforme se formen los grupos. Los horarios y ritmos de cada sesión se publicarán antes de abrir inscripciones.
        </p>
      </section>

      <div className="section-shell section-shell--wide">
        <CtaBand
          eyebrow="Tu ritmo puede cambiar"
          title="Lo importante es dejar de posponer la primera clase."
          description="Puedes comenzar con un género y explorar los demás conforme avance la programación."
        />
      </div>
    </>
  );
}


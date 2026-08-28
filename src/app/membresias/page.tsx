import type { Metadata } from "next";
import { ArrowUpRight, Check, Ticket } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { SpotlightCard } from "@/components/animation/spotlight-card";
import { CtaBand } from "@/components/sections/cta-band";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { MembershipCard } from "@/components/sections/membership-card";
import { memberships, whatsappHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Membresías y precios de clases de baile",
  description:
    "Membresías mensuales de baile desde $300 MXN. Elige 4, 8 o 12 clases al mes, o toma una clase individual por $80 MXN.",
  alternates: { canonical: "/membresias" },
};

export default function MembresiasPage() {
  const singleHref = whatsappHref("Hola, quiero probar una clase individual de baile de $80. ¿Me avisan cuando abran inscripciones?");

  return (
    <>
      <InnerPageHero
        eyebrow="Membresías mensuales"
        title="Paga por avanzar."
        italic="No por estar inscrito."
        description="Los planes cambian por frecuencia, no por privilegios artificiales. Todas las clases importan; tú eliges cuántas caben en tu mes."
        marker="$"
      />

      <section className="pricing-page section-shell section-shell--wide">
        <div className="membership-grid membership-grid--full">
          {memberships.map((membership, index) => (
            <Reveal key={membership.id} delay={index * 0.08}>
              <MembershipCard membership={membership} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <SpotlightCard className="dropin-card" spotlightColor="rgba(255,96,56,.18)">
            <div className="dropin-card__icon">
              <Ticket aria-hidden="true" />
            </div>
            <div>
              <span>Sin membresía</span>
              <h2>Clase individual</h2>
              <p>Prueba una sesión o vuelve a la pista sin contratar el mes completo.</p>
            </div>
            <div className="dropin-card__price">
              <strong>$80</strong>
              <span>MXN / clase</span>
            </div>
            <a href={singleHref} target="_blank" rel="noreferrer">
              Quiero probar <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </SpotlightCard>
        </Reveal>
      </section>

      <section className="comparison section-shell">
        <Reveal>
          <span className="eyebrow">Comparación rápida</span>
          <h2>La decisión real es <em>cuántas veces vas a practicar.</em></h2>
        </Reveal>
        <div className="comparison-table" role="table" aria-label="Comparación de membresías">
          <div className="comparison-table__row comparison-table__head" role="row">
            <span role="columnheader">Plan</span>
            <span role="columnheader">Clases</span>
            <span role="columnheader">Frecuencia</span>
            <span role="columnheader">Costo por clase</span>
          </div>
          {memberships.map((membership) => (
            <div className="comparison-table__row" role="row" key={membership.id}>
              <strong role="cell">{membership.name}</strong>
              <span role="cell">{membership.classes} al mes</span>
              <span role="cell">{membership.frequency}</span>
              <span role="cell">{membership.perClass.replace(" por clase", "")}</span>
            </div>
          ))}
        </div>

        <div className="pricing-clarity">
          {[
            "Cada mensualidad cubre cuatro semanas.",
            "No necesitas llegar con pareja.",
            "Los horarios se publicarán antes de abrir inscripciones.",
            "Los pagos en línea y el portal del alumno se integrarán en la siguiente etapa.",
          ].map((item) => (
            <span key={item}>
              <Check size={16} aria-hidden="true" /> {item}
            </span>
          ))}
        </div>
      </section>

      <div className="section-shell section-shell--wide">
        <CtaBand
          eyebrow="¿Todavía no sabes qué plan elegir?"
          title="Empieza con la frecuencia que sí vas a sostener."
          description="Tres clases por semana sirven más que una solo si realmente vas a ir. El mejor plan es el que conviertas en hábito."
        />
      </div>
    </>
  );
}


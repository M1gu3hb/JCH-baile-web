import { ArrowRight, CalendarDays, CircleOff, UsersRound } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animation/reveal";
import { ScrollVelocity } from "@/components/animation/scroll-velocity";
import { SpotlightCard } from "@/components/animation/spotlight-card";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { HomeHero } from "@/components/sections/home-hero";
import { MembershipCard } from "@/components/sections/membership-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { VenueGallery } from "@/components/sections/venue-gallery";
import { faqs, memberships, rhythms } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div id="descubre">
        <ScrollVelocity
          first="SALSA · BACHATA · CUMBIA · MERENGUE ·"
          second="DANZÓN · CHA-CHA-CHÁ · Y MÁS ·"
        />
      </div>

      <section className="editorial-intro section-shell">
        <Reveal className="editorial-intro__lead">
          <span className="eyebrow">Bailar no es un talento secreto</span>
          <p>
            Es ritmo, práctica y alguien que te explique bien. Aquí vienes a dejar de mirar la
            pista desde la orilla.
          </p>
        </Reveal>

        <div className="editorial-intro__grid">
          {[
            {
              icon: CircleOff,
              title: "Cero presión",
              text: "No necesitas experiencia ni saberte una sola vuelta para entrar.",
            },
            {
              icon: UsersRound,
              title: "Ven solo",
              text: "No dependes de llegar con pareja. La clase está diseñada para integrarte.",
            },
            {
              icon: CalendarDays,
              title: "Avance medible",
              text: "Elige entre una, dos o tres sesiones por semana según el ritmo que quieras llevar.",
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
      </section>

      <section className="rhythm-preview section-shell section-shell--wide">
        <Reveal>
          <SectionHeading
            eyebrow="Encuentra tu ritmo"
            title={<>Seis puertas. <em>Una sola pista.</em></>}
            description="Empieza por el género que más te mueve. La técnica que construyas te acompañará en todos los demás."
          />
        </Reveal>

        <div className="rhythm-preview__grid">
          {rhythms.map((rhythm) => (
            <SpotlightCard key={rhythm.slug} className="rhythm-tile" spotlightColor={`${rhythm.accent}33`}>
              <span className="rhythm-tile__number">{rhythm.number}</span>
              <div className="rhythm-tile__accent" style={{ background: rhythm.accent }} />
              <h3>{rhythm.name}</h3>
              <p>{rhythm.phrase}</p>
              <span className="rhythm-tile__tempo">{rhythm.tempo}</span>
            </SpotlightCard>
          ))}
        </div>

        <Link href="/ritmos" className="text-link">
          Conocer todos los ritmos <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="pricing-preview section-shell section-shell--wide">
        <Reveal>
          <SectionHeading
            eyebrow="Membresías sin letra chiquita"
            title={<>Elige constancia. <em>No permanencia.</em></>}
            description="Tres formas de entrenar durante cuatro semanas. Si primero quieres probar, una clase individual cuesta $80 MXN."
          />
        </Reveal>

        <div className="membership-grid">
          {memberships.map((membership, index) => (
            <Reveal key={membership.id} delay={index * 0.08}>
              <MembershipCard membership={membership} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="venue-preview section-shell section-shell--wide">
        <Reveal>
          <div className="venue-preview__heading">
            <SectionHeading
              eyebrow="Una pista que ya existe"
              title={<>El Salón de los Espejos. <em>Ahora para bailar.</em></>}
              description="Un espacio cubierto de Jardines Club Hípico con pista amplia, escenario e iluminación ambiental en Santa Inés, Xochimilco."
            />
            <Link href="/salon" className="button button--outline">
              Conocer el salón <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <VenueGallery compact />
      </section>

      <section className="faq-preview section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Antes de tu primera clase"
            title={<>Las dudas normales. <em>Contestadas directo.</em></>}
          />
        </Reveal>
        <FaqAccordion items={faqs.slice(0, 4)} />
        <Link href="/preguntas" className="text-link">
          Ver todas las preguntas <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <div className="section-shell section-shell--wide">
        <CtaBand />
      </div>
    </>
  );
}

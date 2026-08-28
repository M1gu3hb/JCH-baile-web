import type { Metadata } from "next";
import { ArrowUpRight, LampCeiling, MapPin, Music2, PanelsTopLeft } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { VenueSchematic } from "@/components/sections/venue-schematic";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Salón de los Espejos: sede de las clases",
  description:
    "Conoce el Salón de los Espejos de Jardines Club Hípico, la sede de las próximas clases de salsa, bachata, cumbia y baile de salón en Xochimilco.",
  alternates: { canonical: "/salon" },
};

export default function SalonPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="La sede"
        title="Una pista real cambia"
        italic="la forma de aprender."
        description="Las clases se impartirán en el Salón de los Espejos, dentro de Jardines Club Hípico: un espacio cubierto, amplio y preparado para música y movimiento."
        marker="S"
      />

      <section className="venue-hero section-shell section-shell--wide">
        <Reveal className="venue-hero__schematic" amount={0.08}>
          <VenueSchematic />
        </Reveal>
        <Reveal className="venue-hero__copy">
          <span className="eyebrow">Salón de los Espejos</span>
          <h2>Espacio para moverte, <em>no para amontonarte.</em></h2>
          <p>
            El salón cuenta con pista amplia, escenario e iluminación ambiental. Durante años ha recibido celebraciones y música en vivo; ahora también será la casa de una comunidad que viene a aprender a bailar.
          </p>
        </Reveal>
      </section>

      <section className="venue-features section-shell">
        {[
          { icon: PanelsTopLeft, title: "Salón cubierto", text: "Clases protegidas del clima y con espacio definido para practicar." },
          { icon: LampCeiling, title: "Iluminación ambiental", text: "Un entorno que puede cambiar de una sesión técnica a una práctica social." },
          { icon: Music2, title: "Escenario y audio", text: "Infraestructura pensada para música, presentaciones y movimiento." },
          { icon: MapPin, title: "En Xochimilco", text: "Dentro del recinto de Jardines Club Hípico, en Santa Inés." },
        ].map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.07}>
            <article>
              <feature.icon aria-hidden="true" />
              <span>0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="venue-use section-shell section-shell--wide">
        <Reveal className="venue-use__heading">
          <div>
            <span className="eyebrow">La pista se prepara para aprender</span>
            <h2>Menos montaje. <em>Más espacio para moverte.</em></h2>
          </div>
          <p>Para las clases, el salón se organizará alrededor de la práctica: vista clara a la maestra, circulación cómoda y espacio para trabajar en pareja o grupo.</p>
        </Reveal>
        <div className="venue-use__steps">
          {[
            ["01", "Demostración", "Adriana explica el paso desde un punto visible para todo el grupo."],
            ["02", "Práctica guiada", "La pista se divide de forma flexible para practicar base, vueltas y conexión."],
            ["03", "Baile completo", "La sesión cierra aplicando lo aprendido dentro de una canción."],
          ].map(([number, title, text]) => (
            <Reveal key={number}>
              <article>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="location-card section-shell">
        <div>
          <span className="eyebrow">Cómo llegar</span>
          <h2>{site.address}</h2>
          <p>Confirma el horario de tu clase antes de trasladarte. Las inscripciones todavía no están abiertas.</p>
        </div>
        <a href={site.mapUrl} target="_blank" rel="noreferrer" className="button button--acid">
          Abrir en Google Maps <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>

      <div className="section-shell section-shell--wide">
        <CtaBand
          eyebrow="Conoce la sede"
          title="Primero mira la pista. Después imagínate bailando ahí."
          description="Escríbenos para recibir los horarios cuando se formen los primeros grupos."
        />
      </div>
    </>
  );
}

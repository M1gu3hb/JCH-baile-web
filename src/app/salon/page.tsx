import type { Metadata } from "next";
import { ArrowUpRight, LampCeiling, MapPin, Music2, PanelsTopLeft } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animation/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { VenueGallery } from "@/components/sections/venue-gallery";
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
        <Reveal className="venue-hero__image">
          <Image
            src="/images/salon-entrada.webp"
            alt="Acceso e interior del Salón de los Espejos"
            fill
            priority
            sizes="(max-width: 800px) 92vw, 88vw"
          />
          <span>Jardines Club Hípico · Santa Inés</span>
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

      <section className="gallery-section section-shell section-shell--wide">
        <Reveal className="gallery-section__heading">
          <div>
            <span className="eyebrow">El lugar, sin renders</span>
            <h2>Fotos reales del <em>Salón de los Espejos.</em></h2>
          </div>
          <p>La distribución para clases será más limpia que un montaje de evento; las fotos muestran el espacio y su iluminación reales.</p>
        </Reveal>
        <VenueGallery />
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


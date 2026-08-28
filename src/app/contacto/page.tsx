import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animation/reveal";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { site, whatsappHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contacto y ubicación",
  description:
    "Contacta a JCH Baile por WhatsApp y encuentra el Salón de los Espejos en Jardines Club Hípico, Santa Inés, Xochimilco.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const whatsapp = whatsappHref("Hola, quiero recibir información sobre las clases de baile y los próximos horarios.");

  const methods = [
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: whatsapp, external: true },
    { icon: Phone, label: "Llamar", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}`, external: false },
    { icon: Mail, label: "Correo", value: site.email, href: `mailto:${site.email}`, external: false },
    { icon: MapPin, label: "Ubicación", value: site.addressShort, href: site.mapUrl, external: true },
  ];

  return (
    <>
      <InnerPageHero
        eyebrow="Contacto"
        title="Tu primera clase empieza"
        italic="con un mensaje."
        description="Los horarios todavía no se han publicado. Registra tu interés y te compartimos la información en cuanto se formen los primeros grupos."
        marker="C"
      />

      <section className="contact-grid section-shell section-shell--wide">
        <div className="contact-grid__methods">
          {methods.map((method, index) => (
            <Reveal key={method.label} delay={index * 0.06}>
              <a href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noreferrer" : undefined}>
                <method.icon aria-hidden="true" />
                <span>
                  <small>{method.label}</small>
                  <strong>{method.value}</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}

          <Reveal>
            <div className="schedule-notice">
              <Clock3 aria-hidden="true" />
              <div>
                <strong>Horarios en formación</strong>
                <p>No te traslades sin confirmación. Publicaremos días, horas y ritmos antes de abrir inscripciones.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="contact-grid__visual">
          <Image src="/images/salon-noche.webp" alt="Salón de los Espejos con iluminación morada" fill sizes="(max-width: 900px) 92vw, 48vw" />
          <div>
            <span>Salón de los Espejos</span>
            <strong>Santa Inés · Xochimilco</strong>
          </div>
        </Reveal>
      </section>

      <section className="contact-final section-shell">
        <span className="eyebrow">La vía más rápida</span>
        <h2>Escríbenos por WhatsApp y guarda el contacto.</h2>
        <p>Cuando los horarios estén listos, sabrás exactamente qué grupo, ritmo y membresía puedes elegir.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="button button--acid">
          Registrar mi interés <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}


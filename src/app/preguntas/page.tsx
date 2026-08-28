import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre las clases de baile",
  description:
    "Respuestas sobre niveles, parejas, precios, membresías, horarios y ubicación de las clases de baile en Jardines Club Hípico, Xochimilco.",
  alternates: { canonical: "/preguntas" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function PreguntasPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Preguntas frecuentes"
        title="Lo que necesitas saber."
        italic="Sin hacerte perder tiempo."
        description="Si tu duda no aparece aquí, escríbenos. Si aparece, aquí tienes la respuesta completa y directa."
        marker="?"
      />

      <section className="faq-page section-shell">
        <FaqAccordion items={faqs} />
      </section>

      <div className="section-shell section-shell--wide">
        <CtaBand
          eyebrow="¿Faltó algo?"
          title="Una duda no debería detenerte una semana."
          description="Escríbenos por WhatsApp y te respondemos con la información disponible, sin inventar horarios que todavía no existen."
        />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}


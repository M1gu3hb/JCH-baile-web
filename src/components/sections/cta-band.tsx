import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { whatsappHref } from "@/lib/site-data";

export function CtaBand({
  eyebrow = "Empieza cuando estés listo",
  title = "No esperes a sentirte listo para empezar.",
  description = "La seguridad llega después de pisar la pista, no antes.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const href = whatsappHref("Hola, quiero recibir los horarios y la fecha de inicio de las clases de baile.");

  return (
    <section className="cta-band">
      <div className="cta-band__orb" aria-hidden="true" />
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-band__actions">
        <a href={href} target="_blank" rel="noreferrer" className="button button--acid">
          Avisarme cuando abran <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <Link href="/preguntas" className="button button--ghost">
          Resolver mis dudas
        </Link>
      </div>
    </section>
  );
}


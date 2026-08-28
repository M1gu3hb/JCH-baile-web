import { ArrowUpRight, Check } from "lucide-react";
import { SpotlightCard } from "@/components/animation/spotlight-card";
import { whatsappHref } from "@/lib/site-data";

type Membership = {
  id: string;
  name: string;
  price: number;
  classes: number;
  frequency: string;
  perClass: string;
  featured: boolean;
  description: string;
};

export function MembershipCard({ membership }: { membership: Membership }) {
  const href = whatsappHref(
    `Hola, me interesa la membresía ${membership.name} de ${membership.classes} clases al mes. ¿Me avisan cuando abran inscripciones?`,
  );

  return (
    <SpotlightCard className={`membership-card ${membership.featured ? "is-featured" : ""}`}>
      <div className="membership-card__header">
        <div>
          <span>{membership.featured ? "Mejor valor" : "Membresía mensual"}</span>
          <h3>{membership.name}</h3>
        </div>
        <span className="membership-card__index">0{membership.id === "intensiva" ? 1 : membership.id === "constante" ? 2 : 3}</span>
      </div>

      <p className="membership-card__description">{membership.description}</p>

      <div className="membership-card__price">
        <span>$</span>
        <strong>{membership.price}</strong>
        <small>MXN / mes</small>
      </div>

      <div className="membership-card__details">
        <span>
          <Check size={16} aria-hidden="true" /> {membership.classes} clases en 4 semanas
        </span>
        <span>
          <Check size={16} aria-hidden="true" /> {membership.frequency}
        </span>
        <span>
          <Check size={16} aria-hidden="true" /> {membership.perClass}
        </span>
      </div>

      <a href={href} target="_blank" rel="noreferrer" className="membership-card__cta">
        Elegir {membership.name} <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </SpotlightCard>
  );
}


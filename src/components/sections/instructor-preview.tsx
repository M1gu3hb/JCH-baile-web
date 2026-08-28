import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animation/reveal";
import { teacher } from "@/lib/site-data";

export function InstructorPreview() {
  return (
    <section className="instructor-preview section-shell section-shell--wide">
      <Reveal className="instructor-preview__portrait" amount={0.08}>
        <Image
          src="/images/adriana-danzon-2024.webp"
          alt="Adriana Mejía bailando danzón en una presentación"
          fill
          sizes="(max-width: 780px) 92vw, 44vw"
        />
        <span>Adriana Mejía · Maestra de baile</span>
      </Reveal>

      <Reveal className="instructor-preview__copy" delay={0.08} amount={0.12}>
        <span className="eyebrow">La persona detrás de la clase</span>
        <h2>
          No vienes a seguir una pantalla. <em>Vienes a aprender con Adriana.</em>
        </h2>
        <p>{teacher.introduction}</p>
        <div className="instructor-preview__tags" aria-label="Experiencia documentada">
          {teacher.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
        </div>
        <Link href="/maestra" className="text-link">
          Conocer a tu maestra <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}

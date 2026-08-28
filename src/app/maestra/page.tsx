import type { Metadata } from "next";
import { History, Music2, Theater, UsersRound } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animation/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { TeacherGallery } from "@/components/sections/teacher-gallery";
import { TeacherReel } from "@/components/sections/teacher-reel";
import { teacher } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Adriana Mejía, maestra de baile",
  description:
    "Conoce a Adriana Mejía, maestra de las clases de baile en Jardines Club Hípico, y mira material real de su trayectoria en danzón y presentaciones escénicas.",
  alternates: { canonical: "/maestra" },
};

const experience = [
  {
    icon: Music2,
    title: "Baile de salón",
    text: "Su archivo incluye danzón y montajes en pareja presentados ante público, no únicamente práctica de estudio.",
  },
  {
    icon: UsersRound,
    title: "Trabajo con grupos",
    text: "Ha participado en procesos colectivos y presentaciones con grupos de distintas edades.",
  },
  {
    icon: Theater,
    title: "Experiencia escénica",
    text: "El material muestra coreografías completas, vestuario, coordinación y manejo del espacio escénico.",
  },
  {
    icon: History,
    title: "Trayectoria documentada",
    text: "Fotografías y videos compartidos por Adriana permiten ver su trabajo a través de diferentes etapas.",
  },
];

export default function MaestraPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Tu maestra"
        title="La experiencia se nota."
        italic="La confianza se aprende."
        description="Adriana Mejía será quien te acompañe desde el primer paso hasta poder bailar una canción completa con seguridad."
        marker="A"
      />

      <section className="teacher-profile section-shell section-shell--wide">
        <Reveal className="teacher-profile__portrait" amount={0.08}>
          <Image
            src="/images/adriana-vale-bailar.webp"
            alt="Adriana Mejía junto a su pareja durante un encuentro de danzón"
            fill
            priority
            sizes="(max-width: 780px) 92vw, 45vw"
          />
          <div>
            <span>JCH Baile</span>
            <strong>{teacher.name}</strong>
          </div>
        </Reveal>

        <Reveal className="teacher-profile__copy" delay={0.08} amount={0.12}>
          <span className="eyebrow">Maestra de las nuevas clases</span>
          <h2>
            Técnica para entender el paso. <em>Experiencia para darle intención.</em>
          </h2>
          <p>{teacher.introduction}</p>
          <p>
            Esta página no presenta una biografía inventada: muestra fotografías y fragmentos reales
            entregados por Adriana para que conozcas a la persona que estará al frente de la clase.
          </p>
          <div className="teacher-profile__signature">
            <span>Adriana</span>
            <small>Mejía · maestra de baile</small>
          </div>
        </Reveal>
      </section>

      <section className="teacher-experience section-shell">
        <Reveal>
          <span className="eyebrow">Lo que muestra su trabajo</span>
          <h2>
            Una trayectoria que no necesita <em>frases vacías.</em>
          </h2>
        </Reveal>
        <div className="teacher-experience__grid">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
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

      <section className="teacher-video-section section-shell section-shell--wide">
        <Reveal className="teacher-video-section__heading">
          <span className="eyebrow">Material real</span>
          <h2>
            Coreografías que sí llegaron <em>al escenario.</em>
          </h2>
          <p>
            El reel reúne fragmentos de los cinco videos originales compartidos por Adriana. Se conserva
            su imagen real y se presenta sin audio para una reproducción respetuosa y ligera en la web.
          </p>
        </Reveal>
        <Reveal amount={0.08}>
          <TeacherReel />
        </Reveal>
      </section>

      <section className="teacher-archive section-shell section-shell--wide">
        <Reveal className="teacher-archive__heading">
          <div>
            <span className="eyebrow">Archivo de Adriana</span>
            <h2>
              Distintas etapas. <em>La misma disciplina.</em>
            </h2>
          </div>
          <p>
            Las imágenes fueron restauradas para corregir deterioro, perspectiva y color sin sustituir
            las escenas originales por fotografías genéricas.
          </p>
        </Reveal>
        <TeacherGallery />
      </section>

      <div className="section-shell section-shell--wide">
        <CtaBand
          eyebrow="Tu primera clase con Adriana"
          title="No tienes que saber bailar para empezar a aprender."
          description="Registra tu interés y recibe los horarios cuando se formen los primeros grupos."
        />
      </div>
    </>
  );
}

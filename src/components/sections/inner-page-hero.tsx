import { BlurText } from "@/components/animation/blur-text";

export function InnerPageHero({
  eyebrow,
  title,
  italic,
  description,
  marker,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  marker: string;
}) {
  return (
    <section className="inner-hero">
      <div className="inner-hero__halo" aria-hidden="true" />
      <div className="inner-hero__marker" aria-hidden="true">
        {marker}
      </div>
      <div className="inner-hero__content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          <BlurText text={title} />
          {italic ? (
            <em>
              <BlurText text={italic} direction="top" />
            </em>
          ) : null}
        </h1>
        <p>{description}</p>
      </div>
      <div className="inner-hero__line" aria-hidden="true" />
    </section>
  );
}

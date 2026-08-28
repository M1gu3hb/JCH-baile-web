import Image from "next/image";
import { Reveal } from "@/components/animation/reveal";
import { venuePhotos } from "@/lib/site-data";

export function VenueGallery({ compact = false }: { compact?: boolean }) {
  const photos = compact ? venuePhotos.slice(0, 3) : venuePhotos;

  return (
    <div className={`venue-gallery ${compact ? "is-compact" : ""}`}>
      {photos.map((photo, index) => (
        <Reveal key={photo.src} className="venue-gallery__item" delay={Math.min(index * 0.06, 0.24)} amount={0.12}>
          <figure>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={compact ? "(max-width: 800px) 90vw, 32vw" : "(max-width: 800px) 92vw, 45vw"}
            />
            <figcaption>
              <span>0{index + 1}</span>
              {photo.label}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}


import Image from "next/image";
import { Reveal } from "@/components/animation/reveal";
import { teacherPhotos } from "@/lib/site-data";

export function TeacherGallery({ compact = false }: { compact?: boolean }) {
  const photos = compact ? teacherPhotos.slice(0, 3) : teacherPhotos;

  return (
    <div className={`teacher-gallery ${compact ? "is-compact" : ""}`}>
      {photos.map((photo, index) => (
        <Reveal
          key={photo.src}
          className="teacher-gallery__item"
          delay={Math.min(index * 0.06, 0.2)}
          amount={0.08}
        >
          <figure>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={compact ? "(max-width: 780px) 84vw, 32vw" : "(max-width: 780px) 86vw, 44vw"}
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

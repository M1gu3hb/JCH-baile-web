"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

type VelocityLineProps = {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
};

function useElementWidth(ref: React.RefObject<HTMLSpanElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const update = () => setWidth(ref.current?.offsetWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);

  return width;
}

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function VelocityLine({ children, baseVelocity, className = "" }: VelocityLineProps) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 48, stiffness: 360 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);
  const directionFactor = useRef(1);

  const x = useTransform(baseX, (value) => {
    if (!copyWidth) return "0px";
    return `${wrap(-copyWidth, 0, value)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    const velocity = velocityFactor.get();
    directionFactor.current = velocity < 0 ? -1 : velocity > 0 ? 1 : directionFactor.current;
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy + directionFactor.current * moveBy * Math.abs(velocity));
  });

  return (
    <div className="overflow-hidden py-1" aria-hidden="true">
      <motion.div
        className={`flex w-max whitespace-nowrap font-display text-[clamp(3rem,8vw,7.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em] ${className}`}
        style={reduceMotion ? undefined : { x }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} ref={index === 0 ? copyRef : undefined} className="shrink-0 pr-[0.28em]">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Adapted from React Bits ScrollVelocity (MIT + Commons Clause). */
export function ScrollVelocity({ first, second }: { first: string; second: string }) {
  return (
    <section className="border-y border-ink/10 bg-acid py-5 text-ink sm:py-7">
      <VelocityLine baseVelocity={-38}>{first}</VelocityLine>
      <VelocityLine baseVelocity={32} className="font-normal italic opacity-80">
        {second}
      </VelocityLine>
    </section>
  );
}

